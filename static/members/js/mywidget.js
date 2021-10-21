$(document).ready(function($) {

    let website_url = "https://moretvtime.com/";
    let main_website_url = "http://virallift.com/";

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    $('.spinner .btn:first-of-type').on('click', function() {
        var splt = $('.spinner input').val();

        if (splt < 10) {
            $('.spinner input').val(parseInt(splt, 10) + 1);
        }

    });
    $('.spinner .btn:last-of-type').on('click', function() {
        var splt = $('.spinner input').val();

        if (splt > 1) {
            $('.spinner input').val(parseInt(splt, 10) - 1);
        }
    });

    $('.spinner_a .btn:first-of-type').on('click', function() {
        var splt = $('.spinner_a input').val();

        if (splt < 10) {
            $('.spinner_a input').val(parseInt(splt, 10) + 1);
        }
    });
    $('.spinner_a .btn:last-of-type').on('click', function() {
        var splt = $('.spinner_a input').val();

        if (splt > 1) {
            $('.spinner_a input').val(parseInt(splt, 10) - 1);
        }
    });

    $('.spinner_b .btn:first-of-type').on('click', function() {
        var splt = $('.spinner_b input').val();


        var s = splt.split(' ')
        $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{ font-size: " + s[0] + "px !important}");
        if (s[0] < 25) {
            $('.spinner_b input').val(parseInt(s[0], 10) + 1 + " px");
        }
    });
    $('.spinner_b .btn:last-of-type').on('click', function() {
        var splt = $('.spinner_b input').val();

        var s = splt.split(' ')
        $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{ font-size: " + s[0] + "px !important}");

        if (s[0] > 7) {
            $('.spinner_b input').val(parseInt(s[0], 10) - 1 + " px");
        }
    });


    $('.demo').each(function() {

        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            format: $(this).attr('data-format') || 'hex',
            keywords: $(this).attr('data-keywords') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom',
            swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
            change: function(value, opacity) {
                if (!value) return;
                if (opacity) value += ', ' + opacity;
                if (typeof console === 'object') {
                    let myid = $(this).attr('id');
                    color = value.split(',');
                    if (myid == "swatches_a") {
                        $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{color: " + color[0] + " !important}");
                    }
                    if (myid == "swatches_b") {
                        $("#widgetStyles").append("#MarketGidComposite0 .mgline:hover .mctitle a{color: " + color[0] + " !important}");
                    }
                    if (myid == "swatches_c") {
                        $("#widgetStyles").append("#MarketGidComposite0 .mghead{color: " + color[0] + " !important}");
                    }
                    if (myid == "swatches_d") {
                        $("#widgetStyles").append("#MarketGidComposite0 .mgbox{background-color: " + color[0] + " !important}");
                    }

                }
            },
            theme: 'bootstrap'
        });

    });

    $('#widget_title').change(function() {
        if ($(this).val() == 'Other') {

            $('#widget_title_other').css('display', 'block');
        } else {
            $('#widget_title_other').css('display', 'none');
            $('#widget_title_output').html($(this).val());
            $('#widget_title_other').val('');
        }

    });

    $('#widget_title_other').keyup(function() {



        $('#widget_title_output').html($(this).val());

    });


    $('#widget_type').change(function() {
        var val = $(this).val()
        let html = ''
        if (val == 'Under Article Widget') {
            html = `<option value"Format: rectangular">Format: rectangular</option>
         <option value"Format: cards">Format: cards</option>
         <option value"Format: light cards style">Format: light cards style</option>
         <option value"Format: square">Format: square</option>
         <option value"Format: black">Format: black</option>`
        } else if (val == 'In-Article Widget') {
            html = `<option value"Format: main">Format: main</option>
              <option value"Format: carousel">Format: carousel</option>`;

        } else if (val == 'Header Widget') {
            html = `<option value"Format: rectangular">Format: rectangular</option>
         <option value"Format: square">Format: square</option>
         <option value"Format: carousel">Format: carousel</option>`;

        } else if (val == 'Sidebar Widget') {
            html = `<option value"Format: cards">Format: cards</option>
         <option value"Format: rectangular_2">Format: rectangular_2</option>
         <option value"Format: rectangular">Format: rectangular</option>
         <option value"Format: SMALL">Format: SMALL</option>`;

        } else if (val == 'Headline In Picture Widget') {
            $('#widget-title-block-type').css('display', 'none');

        } else if (val == 'Mobile site widget') {
            $('#widget-title-block-type').css('display', 'none');

        }
        if (html) {
            $('#widget_subtype').html(html);
            $('#widget-title-block-type').css('display', 'block');
        }

        $('#widget_subtype').trigger('change');
    }).trigger('change');



    $('#colup,#coldown,#rowup,#rowdown').on('click', function() {
        let col = $('#widget_col').val();
        let row = $('#widget_row').val();
        let width = (94 / col);
        let max_width = (94 / col);

        $.ajax({
            url: '/widget/allarticle',
            type: "POST",
            data: {
                'limit': (row * col)
            },
            dataType: 'json',
            success: function(d) {
                data = jQuery.parseJSON(d);
                //console.log(data)
                let html = ''
                if (data) {

                    for (i in data) {

                        html += `


                    <div class="mgline teaser-3197346 type-w" style="position: relative;">
                                <div class="image-with-text">
                                   <div class="mcimg">
                                        <a target="_blank" href="${website_url}articles/${data[i].fields.category}/${data[i].fields.url}" data-hash="">
                                            <div class="image-container">
                                               <img class="mcimg" width="200" height="200" data-i="3197346" src="${website_url}article_images/${data[i].fields.thumbnail}">

                                            </div>
                                        </a>
                                    </div>
                                    <div class="text-elements">
                                        <div class="text_on_hover">
                                            <div class="mctitle">
                                             <a target="_blank" href="${website_url}articles/${data[i].fields.category}/${data[i].fields.url}" data-hash="">${data[i].fields.title}</a></div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                            </li>

                            `;
                    }
                    $('#widget_data_article').html(html);


                } else {
                    console.log('error')
                }

            }
        });
    });

    $('#colup,#coldown').on('click', function() {
        let col = $('#widget_col').val();

        let width = (94 / col);
        let max_width = (94 / col);
        $("#widgetStyles").append("#MarketGidComposite0 .mgline{width:" + width + "% !important}");
        $("#widgetStyles").append("#MarketGidComposite0 .mgline{max-width:" + max_width + "% !important}");

    });


    $('#rowup,#rowdown').on('click', function() {
        let col = $('#widget_col').val();

        let width = (94 / col);
        let max_width = (94 / col);
        $("#widgetStyles").append("#MarketGidComposite0 .mgline{width:" + width + "% !important}");
        $("#widgetStyles").append("#MarketGidComposite0 .mgline{max-width:" + max_width + "% !important}");

    });




    $('#text-bold').on("click", function() {
        $(this).toggleClass(function(a, b) {
            if (b == 'text_decoration text_bold') {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{font-weight:bold !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{font-weight:normal !important}");
            }
            return "active";

        });
    });

    $('#text-italic').on("click", function() {
        $(this).toggleClass(function(a, b) {

            if (b == 'text_decoration text_italic') {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{font-style:italic !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{font-style:normal !important}");
            }
            return "active";

        });
    });

    $('#text-underline').on("click", function() {
        $(this).toggleClass(function(a, b) {
            if (b == 'text_decoration text_underline') {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{text-decoration:underline !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{text-decoration:none !important}");
            }
            return "active";

        });
    });

    $('#text-left').on("click", function() {
        $(this).toggleClass(function(a, b) {
            if (b == 'text_position text_left') {
                $("#text-center").removeClass("active");
                $("#text-right").removeClass("active");
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: left !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: left !important}");
            }
            return "active";

        });
    });

    $('#text-center').on("click", function() {
        $(this).toggleClass(function(a, b) {
            if (b == 'text_position text_center') {
                $("#text-left").removeClass("active");
                $("#text-right").removeClass("active");
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: center !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: left !important}");
            }
            return "active";

        });
    });

    $('#text-right').on("click", function() {
        $(this).toggleClass(function(a, b) {
            if (b == 'text_position text_right') {
                $("#text-left").removeClass("active");
                $("#text-center").removeClass("active");
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: right !important}");
            } else {
                $("#widgetStyles").append("#MarketGidComposite0 .mctitle{text-align: left !important}");
            }
            return "active";

        });
    });

    $('#font').fontselect().change(function() {
        var font = $(this).val().replace(/\+/g, ' ');
        font = font.split(':');
        $("#widgetStyles").append("#MarketGidComposite0 .mctitle a{font-family:" + font[0] + " !important}");

    });


    $('#wdget_transform').change(function() {

        let wdget_transform = $(this).val();
        $("#widgetStyles").append("#MarketGidComposite0 .mghead{text-transform:" + wdget_transform + " !important}");

    });


    $('#font_a').fontselect().change(function() {
        var font = $(this).val().replace(/\+/g, ' ');
        font = font.split(':');
        $("#widgetStyles").append("#MarketGidComposite0 .mghead{font-family:" + font[0] + " !important}");

    });


    $('.spinner_c .btn:first-of-type').on('click', function() {
        var splt = $('.spinner_c input').val();


        var s = splt.split(' ')
        $("#widgetStyles").append("#MarketGidComposite0 .mghead{ font-size: " + s[0] + "px !important}");
        if (s[0] < 25) {
            $('.spinner_c input').val(parseInt(s[0], 10) + 1 + " px");
        }
    });
    $('.spinner_c .btn:last-of-type').on('click', function() {
        var splt = $('.spinner_c input').val();

        var s = splt.split(' ')
        $("#widgetStyles").append("#MarketGidComposite0 .mghead{ font-size: " + s[0] + "px !important}");

        if (s[0] > 7) {
            $('.spinner_c input').val(parseInt(s[0], 10) - 1 + " px");
        }
    });



    $('#widget_subtype').change(function() {
        let type = $('#widget_type').val();
        let sub_type = $(this).val();
        $('.row_hide_show').show();
        if (type == "Under Article Widget") {

            $('#widgetStyles').html('')
            if (sub_type == "Format: cards") {

                $('#widgetStyles').html('')
                $('#widgetStyles').html(cards_css)

            } else if (sub_type == "Format: rectangular") {

                $('#widgetStyles').html('')
                $('#widgetStyles').html(rectangular_css)

            } else if (sub_type == "Format: light cards style") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(light_card_style)

            } else if (sub_type == "Format: square" || sub_type == "Format: black") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(square_css)

            }

        } else if (type == "In-Article Widget") {
            $('.row_hide_show').hide();
            if (sub_type == "Format: main") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(in_article_widget_main)
            } else if (sub_type == "Format: carousel") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(in_article_widget_carousel)
            }
        } else if (type == "Header Widget") {
            if (sub_type == "Format: rectangular") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(header_widget_rectangular_css)
            } else if (sub_type == "Format: square") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(header_widget_square_css)
            } else if (sub_type == "Format: carousel") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(header_widget_carousel_css)
            }
        } else if (type == "Sidebar Widget") {
            if (sub_type == "Format: cards") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(sidebar_widget_cards_css)
            } else if (sub_type == "Format: rectangular_2") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(sidebar_widget_rectangular_two_css)
            } else if (sub_type == "Format: rectangular") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(sidebar_widget_rectangular_css)
            } else if (sub_type == "Format: SMALL") {
                $('#widgetStyles').html('')
                $('#widgetStyles').html(sidebar_widget_SMALL_css)
            }
        } else if (type == "Headline In Picture Widget") {
            $('#widgetStyles').html('')
            $('#widgetStyles').html(Headline_pic_widget)
        } else if (type == "Mobile site widget") {
            $('#widgetStyles').html('')
            $('#widgetStyles').html(mobile_site_widget)
        }


        $('#rowdown').trigger('click');
    })

    $('#widget_subtype').trigger('change');


    //$(window).load(function() {
    //  $('.flexslider').flexslider({
    //    animation: "slide",
    //    animationLoop: false,
    //    itemWidth: 210,
    //    itemMargin: 5
    //  });
    //});
    $('#dialog').dialog({
        autoOpen: false
    });
    $('#widget_form_submit').submit(function(e) {
        e.preventDefault();
        let name = $('#clientsTitle_in').val();
        let widget_title_a = $('#widget_title').val();
        let widget_title_other = $('#widget_title_other').val();
        let widget_title = widget_title_a ? widget_title_a : widget_title_other;
        let widget_type = $('#widget_type').val();
        let widget_subtype = $('#widget_subtype').val();
        let widget_col = $('#widget_col').val();
        let widget_row = $('#widget_row').val();
        let widget_sid = $('#widget_sid').val();
        let css = $('#widgetStyles').html();
        let wid = $('#wid').val();

        $.ajax({
            url: '/widget/addwidgetdata',
            type: "POST",
            data: {
                'wid': wid,
                'name': name,
                'widgettitle': widget_title,
                'sid': widget_sid,
                'type': widget_type,
                'subtype': widget_subtype,
                'column': widget_col,
                'rows': widget_row,
                'css': css
            },
            success: function(data) {
                $("#dialog").dialog("option", "width", 730);
                $("#dialog").dialog("open");

                let html = `<xmp>
<!-- Widget Code Start -->
<div id="${data}">Loading...</div>
<script type="text/javascript">
        window.provider="${data}"
</script>
<script type="text/javascript" src="http://virallift.com/static/members/js/widgetloads.js"></script>
<style id="${data}"></style>
<!-- Widget Code End -->
</xmp>`
                $('#dialog').append(html);

            }
        });
    });
    $('#sandbox-container .input-group.date').datepicker({
        language: "ru",
        orientation: "bottom left",
        autoclose: true,
        todayHighlight: true,
        format: 'dd.mm.yyyy'
    });

    $('#camp-add-input-4-payment-m').change(function() {
        let optionval = $(this).val();
        if (optionval == 'paypal') {
            $('.js_paypal').show();
            $('.js_webmoney').hide();
            $('.js_epayments').hide();
            $('.js_payoneer').hide();
            $('.wire').hide();
        } else if (optionval == 'webmoney') {
            $('.js_paypal').hide();
            $('.js_webmoney').show();
            $('.js_epayments').hide();
            $('.js_payoneer').hide();
            $('.wire').hide();
        } else if (optionval == 'epayments') {
            $('.js_paypal').hide();
            $('.js_webmoney').hide();
            $('.js_epayments').show();
            $('.js_payoneer').hide();
            $('.wire').hide();
        } else if (optionval == 'payoneer') {
            $('.js_paypal').hide();
            $('.js_webmoney').hide();
            $('.js_epayments').hide();
            $('.js_payoneer').show();
            $('.wire').hide();
        } else if (optionval == 'wire') {
            $('.js_paypal').hide();
            $('.js_webmoney').hide();
            $('.js_epayments').hide();
            $('.js_payoneer').hide();
            $('.wire').show();
        }
    }).trigger('change');




    function getarticle() {
        //console.log($('#wid').val())
        if ($('#wid').val() !== 'wid') {
            $.ajax({
                url: '/widget/getarticle',
                type: "POST",
                data: {
                    'wid': $('#wid').val()
                },
                dataType: 'json',
                success: function(d) {
                    data = jQuery.parseJSON(d);
                    //console.log(data.length);
                    if (data.length > 0) {
                        //console.log(data[0].fields.name)
                        $('#clientsTitle_in').val(data[0].fields.name)

                        $('#widget_title').val(data[0].fields.widgettitle)
                        $('#widget_title').trigger('change')
                        $('#widget_type').val(data[0].fields.type)
                        $('#widget_type').trigger('change')
                        $('#widget_subtype').val(data[0].fields.subtype)
                        $('#widget_subtype').trigger('change')
                        $('#widget_col').val(data[0].fields.column)
                        $('#widget_row').val(data[0].fields.rows)
                        $('#rowdown').trigger('click');
                        $('#widgetStyles').html('')
                        // console.log(data[0].fields.css)
                        //$('#font').fontselect().trigger('change')
                        //$('#font_a').fontselect().trigger('change')
                        $('#widgetStyles').html(data[0].fields.css)
                        //console.log(data);
                    } else {
                        // getarticle()
                    }

                }
            });
        }
    }
    getarticle()

})
$(function() {
    //LINE randomly generated data
    let line_data2 = {}

    $.ajax({
        url: '/widget/dashboard_api',
        type: "GET",
        dataType: 'json',
        success: function(d) {
        //console.log(d)
            if (d) {
                     let m_t=[]

                     for(i in d){
                        let newarr=[]
                        month=d[i].m.toString();
                        newarr.push('0'+month+'.19')
                        newarr.push(d[i].total)
                        m_t.push(newarr)
                        }



                 data:[]
                 for (i in m_t){
                 console.log(m_t[i])
                 data.push(m_t[i])
                 }

                 line_data2 = {

                      data,
                      color: "#4b4b4b"

                 }
                 console.log(line_data2)


            } else {
                 line_data2={
                 data:[["1",0],["2",0],["3",0],["4",0],["5",0],["6",0],["7",0],["8",0],["9",0],["10",0],["11",0],["12",0],],
                 color: "#4b4b4b"
                 }

                // getarticle()
            }

            line_d()

        }
    });

    function line_d(){
    $.plot("#line-chart", [ /*line_data1, */ line_data2], {
        grid: {
            hoverable: true,
            borderColor: "#f3f3f3",
            borderWidth: 1,
            tickColor: "#f3f3f3"
        },
        series: {
            shadowSize: 0,
            lines: {
                show: true
            },
            points: {
                show: true,
            }
        },
        lines: {
            fill: false,
            color: ["#d6575a", "#4b4b4b"]
        },
        yaxis: {
            show: true,
        },
        xaxis: {
            show: true,
            mode: "categories",
        }
    });

    //Initialize tooltip on hover
    $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
        position: "absolute",
        display: "none",
        width: "100px",
        opacity: 0.8
    }).appendTo("body");
    $("#line-chart").bind("plothover", function(event, pos, item) {

        if (item) {
            var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(2);

            $("#line-chart-tooltip").html("Revenue = " + y)
                .css({
                    top: item.pageY + 5,
                    left: item.pageX - 50
                })
                .fadeIn(200);
        } else {
            $("#line-chart-tooltip").hide();
        }

    });
    /* END LINE CHART */
    }

});