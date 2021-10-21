let data = [];
let chart, providerEl, formatEl, loaderEl, tableEl, table = null;

let chartColors = {
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
    grey: "rgb(201, 203, 207)",
    orange: "rgb(255, 159, 64)",
    purple: "rgb(153, 102, 255)",
    red: "rgb(255, 99, 132)",
    yellow: "rgb(255, 205, 86)"
};

let ctx = document.getElementById('chart').getContext('2d');
ctx.height = 500;
ctx.maxheight = 500;

document.addEventListener('DOMContentLoaded', () => {

    providerEl = $('#provider').dropdown();
    formatEl = $('#format').dropdown();
    loaderEl = $('#loader');
    tableEl = $('#table');
    $('#from').calendar({
        ampm: false
    });
    $('#to').calendar({
        ampm: false
    });

    providerEl.on('change', () => renderChart());

    $('#btn-refresh').click((e) => {
        e.preventDefault();
        doRequest()
    });

    $('#btn-last-hour').click((e) => {
        e.preventDefault();
        setDate('hour');
        formatEl.val('minutes');
        doRequest()
    });

    $('#btn-last-day').click((e) => {
        e.preventDefault();
        setDate('day');
        doRequest()
    });

    $('#btn-last-20-min').click((e) => {
        e.preventDefault();
        setDate('minute');
        formatEl.val('minutes');
        doRequest()
    });

    doRequest();
    setInterval(() => doRequest(true), 60 * 1000) // Update charts each minute
});

const setDate = (period) => {
    let dates = {
        day: d => {d.setDate(d.getDate() - 1); return d},
        hour: d => {d.setHours(d.getHours() - 1); return d},
        minute: d => {d.setMinutes(d.getMinutes() - 20); return d}
    };

    $('[name=from]').val(dates[period](new Date()));
    $('[name=to]').val(new Date());
};

/**
 * Fetch data
 */
const doRequest = (silent) => {

    !silent && loaderEl.show();

    let fromVal = formatDateTime(new Date($('[name=from]').val()));
    let toVal = formatDateTime(new Date($('[name=to]').val()));
    let format = $('#format').val();

    fetch(`/admin/charts/providers/`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
            from: fromVal,
            to: toVal,
            format: format
        }),
        headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': document.querySelector("[name=csrfmiddlewaretoken]").value
        },
    })
        .then(r => r.json())
        .then(d => {
            data = d;
            loaderEl.hide();
            renderChart();
            renderTable();
        })
};

const renderTable = () => {
    if (table) {
        table.clear();
        table.rows.add(data); // Add new data
        table.columns.adjust().draw(); // Redraw the DataTable
        return
    }
    table = tableEl.DataTable({
        data: data,
        pageLength: 50,
        order: [[ 0, 'desc' ]],
        columns: [
            { title: "date" , data: "date", className: "dt-head-left" },
            { title: "provider" , data: "provider", className: "dt-head-left" },
            { title: "postbacks" , data: "impressions", className: "dt-head-left" },
            { title: "pages" , data: "pages", className: "dt-head-left" },
            { title: "sum" , data: "sum", className: "dt-head-left" },
        ],
        footerCallback: function( row, data, start, end, display ) {
            var api = this.api(), data;

            if (!data || !data.length) {
                return
            }

            // Total over all pages
            total = api
                .column( 4 )
                .data()
                .reduce( (a,b) => parseFloat(a) + parseFloat(b), 0 );

            // Total over this page
            pageTotal = api
                .column( 4, { page: 'current'} )
                .data()
                .reduce( (a,b) => parseFloat(a) + parseFloat(b), 0 );

            // Update footer
            $( api.column( 4 ).footer() ).html(
                '$'+pageTotal.toFixed (4) +' ( $'+ total.toFixed(4) +' total)'
            );
        }
    });
}

/**
 * Redraw chart
 */
const renderChart = () => {

    let provider = document.getElementById('provider').value;
    let providerData = provider !== '-' ?
        data.filter(d => d.provider === provider) :
        Object.values(data.reduce((a,v) => {
            a[v.date] = {
                date: v.date,
                pages: a[v.date] ? a[v.date].pages + v.pages : v.pages,
                impressions:  a[v.date] ? a[v.date].impressions + v.impressions : v.impressions
            };
            return a;
        }, {}));

    var config = {
        type: 'line',
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        data: {
            labels: providerData.map(d => d.date),
            datasets: [{
                label: 'Postbacks',
                fill: false,
                borderColor: chartColors.red,
                backgroundColor: chartColors.red,
                data: providerData.map(d => d.impressions),
            }, {
                label: 'Pages',
                fill: false,
                borderColor: chartColors.blue,
                backgroundColor: chartColors.blue,
                data: providerData.map(d => d.pages),
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: `Data for - ${provider === '-' ? 'All Providers' : provider}`
            },
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                }]
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                },
            }]
        }
    };

    chart && chart.destroy();
    chart = new Chart(ctx, config);
};

const formatDate = date => date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

const formatEndDate = date => date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '23:59:59';

const formatStartDate = date => date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '00:00:00';

const formatDateTime = date =>  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${leadingZero(date.getHours())}:${leadingZero(date.getMinutes())}:${leadingZero(date.getSeconds())}`

const leadingZero = n => String(n).length > 1 ? n : `0${n}`;