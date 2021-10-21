if (!window.jQuery) {
    document.write('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>');
}

// todo
//website == website loads font
document.addEventListener('DOMContentLoaded', () => {

    let moretvtimeurl = "http://moretvtime.com/"
    let img_url = "http://virallift.com"
    let api_url = "http://virallift.com/"
   // let img_url = "http://127.0.0.1:80"
    //let api_url = "http://127.0.0.1:80/"

    fetch(api_url + 'widget/artcileview', {
        method: "POST",
        body: JSON.stringify({
            'provider': window.provider
        }),
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        }
    }).then(function(response) {
        return response.json();
    }).then(function(myJson) {
        data = jQuery.parseJSON(myJson);
        if (data) {
            let html = '';
             html +=`<div class="widg">
                <div class="widget-preview" style="top: 0px; width: 762px; left: 372px;">
                 <div id="MarketGidComposite0" class="widgetPreviewRoot">
                  <div class="mgheader">
                     <span class="mghead" id="widget_title_output"></span>
                  </div>
                  <div class="mgbox flexslider carousel" id="widget_data_article">`;
            for (i in data) {
                //console.log(data[i])

                html += `



                    <div class="mgline teaser-3197346 type-w" style="position: relative;">
                                <div class="image-with-text">
                                   <div class="mcimg">
                                        <a class="clkcount" target="_blank" href="${moretvtimeurl}/articles/${data[i].fields.category}/${data[i].fields.url}?native-provider=${window.provider}" data-hash="">
                                            <div class="image-container">
                                               <img class="mcimg" width="200" height="200" data-i="3197346" src="${img_url}/article_images/${data[i].fields.thumbnail}">

                                            </div>
                                        </a>
                                    </div>
                                    <div class="text-elements">
                                        <div class="text_on_hover">
                                            <div class="mctitle">
                                             <a class="clkcount" target="_blank" href="${moretvtimeurl}/articles/${data[i].fields.category}/${data[i].fields.url}?native-provider=${window.provider}" data-hash="">${data[i].fields.title}</a></div>


                                        </div>
                                    </div>
                                </div>

                            </div>



                            `;
            }

            html +=` </div>
                               </div>
                                </div>`

            $('#' + window.provider).html(html);
            sticky_impression()

        } else {
            console.log('error')
        }
    });

    fetch(api_url + 'widget/widgetload', {
        method: "POST",
        body: JSON.stringify({
            'provider': window.provider
        }),
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        }
    }).then(function(response) {
        return response.json();
    }).then(function(mJson) {
        data = jQuery.parseJSON(mJson);
        // console.log(data)
        let html = ''
        if (data) {

            $('style[id="' + window.provider + '"]').html(data[0].fields.css)
            $('#widget_title_output').html(data[0].fields.widgettitle)
            clicks_impression()
        } else {
            console.log('error')
        }
    });

    function sticky_impression() {
        fetch(api_url + 'sticky_impression/', {
            method: 'POST',
            body: JSON.stringify({
                'cnt': document.querySelectorAll("[class^='image-with-text']").length,
                'referrer': window.provider
            }),
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    function clicks_impression() {
        $(".clkcount").on("click", function() {
            fetch(api_url + 'clicks_impression/', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    'referrer': window.provider
                }),
                headers: {
                    'content-type': 'application/json',
                }
            })
        })
    }
    clicks_impression()
})