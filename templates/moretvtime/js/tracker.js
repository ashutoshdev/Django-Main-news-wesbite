
    {% if show_banners %}

        console.log('[Moretvtime] p')
        {% include 'moretvtime/js/tracker-private.js' %}

    {% else %}


        console.log('[Moretvtime]')
        {% include 'moretvtime/js/tracker-public.js' %}
    {% endif %}
