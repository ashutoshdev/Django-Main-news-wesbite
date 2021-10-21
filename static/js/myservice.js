
jQuery(document).ready(function () {
    var isTablet = jQuery("#is-tablet").is(":visible");
    var isMobile = jQuery("#is-mobile").is(":visible");

    if (isMobile || isTablet || jQuery(".nav-opener:visible").length > 0) {
        initMobileNav();
    }
});

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

// Ajax Setup
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


function getUrlVars() {
    var vars = [], hash;
    if($('#provider_name').val()!=''){
    var hashes = $('#provider_name').val();
        hash = hashes.split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
        }
    return vars;
}

function uicss(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://moretvtime.com/static/css/jquery-ui.css';
    link.media = 'all';
    head.appendChild(link);

}

$(function () {
    $('#help_dialog').dialog({autoOpen: false});
    $('#exception-modal').dialog({autoOpen: false});


    $('#crypto_dialog').dialog({autoOpen: false});
    $("#dialog").dialog({
        autoOpen: false
    });
    var provg = getUrlVars()["provider"];

    if (provg) {
        localStorage.removeItem('faucethubval');
        localStorage.removeItem('cadvertisingval');
        localStorage.setItem('provgval', provg);
    }


    faucethub = getUrlVars()["crypto-provider"];
    if (faucethub) {

        localStorage.removeItem('provgval');
        localStorage.removeItem('cadvertisingval');
        localStorage.removeItem('Cryptowallet');
        localStorage.removeItem('allcount');
        localStorage.setItem('faucethubval', faucethub);
        $.ajax({
            url: '/faucethub/chkcompany',
            type: "POST",
            data: {'company': faucethub},
            success: function (data) {
                console.log(data);
                if (data.res !== "error") {
                    //console.log(data.limit);
                    localStorage.setItem('article_limit',data.limit)
                    if (data.res !== 0){
                        $('.damtpop').html(data.res);
                        $('.seconddata').html(data.limit*20);
                        uicss()
                        $("#dialog").dialog("open");
                    }else{
                        localStorage.setItem('wallet', data.wallet);

                    }
                }
            }
        });

    }


    cadvertising = getUrlVars()["crypto-advertising"];
    if (cadvertising) {
        localStorage.removeItem('provgval');
        localStorage.removeItem('faucethubval');
        localStorage.removeItem('wallet');
        localStorage.removeItem('allcount_cad');
        localStorage.setItem('cadvertisingval', cadvertising);
        $.ajax({
            url: '/faucethub/chkcompany',
            type: "POST",
            data: {'company': cadvertising},

            success: function (data) {
                //console.log(data);
                if (data.res !== "error") {
                    localStorage.setItem('article_limit_cad', data.limit);
                    $('.cdamtpop').html(data.res);
                    $('.seconddata').html(data.limit*20);
                    console.log(data.limit*20)
                    $("#crypto_dialog").dialog("open");
                }
            }
        });

    }
});


function Cryptochkaddress() {

    var address = $('#Cryptochkaddress').val();

    $.ajax({
        url: '/faucethub/checkaddress',
        type: "POST",
        data: {'address': address},
        dataType: 'json',
        success: function (data) {

            if (data.status == 200) {
                localStorage.setItem('Cryptowallet', address);
                window.location.href = "/";
            } else {
                $('#c_error').show();
                $('#c_error').html(data.message);
            }

        }
    });


}

function chkaddress() {

    var address = $('#name').val();

    $.ajax({
        url: '/faucethub/checkaddress',
        type: "POST",
        data: {'address': address},
        dataType: 'json',
        success: function (data) {
            if (data.status == 200) {
                localStorage.setItem('wallet', address);
                window.location.href = "/";
            } else {
                $('#error').show();
                $('#error').html(data.message);
            }
        }
    });


}

let faucethub_add = localStorage.getItem('faucethubval');
let wallet = localStorage.getItem('wallet');



var cadvertising_val = localStorage.getItem('cadvertisingval');
var crypto_wallet = localStorage.getItem('Cryptowallet');





if (getUrlVars()["native-provider"] != undefined) {
    var elementExists = document.getElementById("progressbar");
    if(elementExists){
        $("#progressbar").remove();
        $('#header').css('top','0px')
        $('#main.category').css('margin-top','-108px')

    }

    fetch('/update_view/', {
        method: 'POST',
        body: JSON.stringify({
            'pth': window.location.pathname,
            'native_p': getUrlVars()["native-provider"] || getUrlVars()['np'],
            'oref': getUrlVars()["oref"] || getUrlVars()['or'],
        }),
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
            'X-CSRFToken': getMttCSRF()
        },
    });



}

fetch('/allupdate_view/', {
    method: 'POST',
    body: JSON.stringify({'pth': window.location.pathname, 'native_p': getUrlVars()["native-provider"]}),
    credentials: 'include',
    headers: {
        'content-type': 'application/json',
        'X-CSRFToken': getMttCSRF()
    },
});

if (getUrlVars()["native-provider"] == undefined) {
    setTimeout(function () {

        fetch('/update_view/', {
            method: 'POST',
            body: JSON.stringify({'pth': window.location.pathname, 'native_p': getUrlVars()["native-provider"]}),
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'X-CSRFToken': getMttCSRF()
            },
        });

    }, 8000);
}

jQuery('.readmfooter').on("click", function () {
    $('#showartcle').css("display", "block");
    $('#bottom-video').show();
});


np = getUrlVars()["native-provider"];
if (np) {
    localStorage.removeItem('cadvertisingval');
    localStorage.removeItem('faucethubval');
    localStorage.removeItem('provgval');
}
var cdval = localStorage.getItem('cadvertisingval');
var fctval = localStorage.getItem('faucethubval');
var provgg = localStorage.getItem('provgval');
// if (cdval || fctval || provgg) {
//     $('.crypto-showifrmae').show();
//     $('#nonative').remove()
// }
// if (cdval == null && fctval == null && provgg == null) {
//
//     $('#ph-1').remove();
//     $('.crypto-showifrmae').remove();
//     $('.rmh').remove();
//     $('#native').remove()
// }

$("#HelpHeader").on("click", function () {
    $("#help_dialog").dialog("option", "width", 834);
    $("#help_dialog").dialog("open");
})



document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('9e6e472119987c8ca3cc9d8b09755905')) {
        console.warn('ad_exception');
        $("#exception-modal").dialog({
            closeOnEscape: false,
            resizable: false,
            draggable: false,
            open: function (event, ui) {
                $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
            }
        });
        $("#exception-modal").dialog("open");
        //document.querySelector('#exception-modal').classList.add('is-active');
    }
});



