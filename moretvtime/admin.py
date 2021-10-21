from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.db.models import Count, Max

from moretvtime.models import Article, Category, TrackingSummary, Banner, BannerPlaceholder, Provider, BannerButton, \
    Tracking, Country, Vpn, Image, Page, Faucethub, SendMoney, Santoshi, PayLatterFaucetHub


@admin.register(Article)
class ArticleAdmin(ModelAdmin):
    list_display = ['application', 'category', 'url', 'title', 'thumbnail', 'thumbnail_url', 'keywords',
                    'order']
    fields = ['application', 'category', 'url', 'title', 'thumbnail', 'thumbnail_url', 'keywords', 'article_text',
              'order']


@admin.register(Category)
class CategoryAdmin(ModelAdmin):
    list_display = ['application', 'parent', 'name', 'url', 'enabled']
    fields = ['application', 'name', 'parent', 'url', 'order', 'enabled']


@admin.register(Provider)
class ProviderAdmin(ModelAdmin):
    list_display = ['name', 'postback_url', 'impression_limit', 'views_per_impression', 'impression_price',
                    'postback_after_all_impressions']
    fields = ['name', 'postback_url', 'impression_limit', 'views_per_impression', 'impression_price',
              'postback_after_all_impressions']


@admin.register(Banner)
class BannerAdmin(ModelAdmin):
    list_display = ['name', 'code', 'is_static', 'is_public', 'is_mobile', 'public_order']
    fields = ['name', 'code', 'is_static', 'is_public', 'is_mobile', 'public_order']


@admin.register(BannerButton)
class BannerButtonAdmin(ModelAdmin):
    list_display = ['name', 'text', 'type']
    fields = ['name', 'text', 'type']


@admin.register(BannerPlaceholder)
class BannerPlaceholderAdmin(ModelAdmin):
    list_display = ['order', 'application', 'selector', 'paragraph_number', 'banner_above_button_1',
                    'banner_above_button_2', 'button', 'banner_below_button_1', 'banner_below_button_2', 'timeout',
                    'insert_before', 'is_test']
    fields = ['order', 'application', 'selector', 'paragraph_number', 'banner_above_button_1', 'banner_above_button_2',
              'button', 'banner_below_button_1', 'banner_below_button_2', 'timeout', 'insert_before', 'is_test']
    ordering = ['application', 'order']


@admin.register(Tracking)
class TrackingSummaryAdmin(ModelAdmin):
    list_display = ['date', 'provider', 'sub_id', 'ip']
    fields = ['date', 'provider', 'sub_id', 'ip']
    search_fields = ['provider', 'sub_id', 'ip']


@admin.register(TrackingSummary)
class TrackingSummaryAdmin(ModelAdmin):
    change_list_template = 'admin/tracking_summary.html'
    date_hierarchy = 'date'

    def changelist_view(self, request, extra_context=None):
        response = super().changelist_view(
            request,
            extra_context=extra_context,
        )
        try:
            qs = response.context_data['cl'].queryset.filter(sent=True)
        except (AttributeError, KeyError):
            return response

        metrics = {
            'total': Count('id'),
            'last_date': Max('date')
        }
        response.context_data['summary'] = list(
            qs
                .values('provider')
                .annotate(**metrics)
                .order_by('-total')
        )

        return response


@admin.register(Image)
class ImagesAdmin(ModelAdmin):
    list_display = ['title', 'thumbnail']
    fields = ['title', 'thumbnail']


@admin.register(Page)
class PageAdmin(ModelAdmin):
    list_display = ['title', 'pagerole']
    fields = ['title', 'description', 'pagerole']


@admin.register(Vpn)
class VpnAdmin(ModelAdmin):
    list_display = ['ip', 'is_vpn']
    fields = ['ip', 'is_vpn']


@admin.register(Faucethub)
class FaucethubAdmin(ModelAdmin):
    list_display = ['payout_id', 'payout_user_hash', 'status', 'ip', 'toaddress', 'amount', 'companyname', 'created']
    fields = ['payout_id', 'payout_user_hash', 'status', 'ip', 'toaddress', 'amount', 'companyname']


@admin.register(SendMoney)
class SendMoneyAdmin(ModelAdmin):
    list_display = ['compantoption', 'companyname', 'toaddress', 'companyamount', 'useramount', 'created']
    fields = ['compantoption', 'companyname', 'toaddress', 'companyamount', 'useramount', 'limit']


@admin.register(Santoshi)
class SantoshiAdmin(ModelAdmin):
    list_display = ['title', 'created']
    fields = ['title']


@admin.register(PayLatterFaucetHub)
class PayLatterFaucetHub(ModelAdmin):
    list_display = ['companyname', 'sub_id', 'ip', 'sent', 'created']
    fields = ['companyname', 'sub_id', 'ip', 'sent']