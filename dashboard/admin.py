from django.contrib import admin
from django.contrib.admin import ModelAdmin
from dashboard.models import Page, Paypal, Epayment, Payoneer, Webmoney, Widget, Support, Message


@admin.register(Page)
class PageAdmin(ModelAdmin):
    list_display = ['title', 'pagerole']
    fields = ['title', 'description', 'pagerole']


@admin.register(Paypal)
class PaypalAdmin(ModelAdmin):
    list_display = ['user', 'type', 'currency', 'country', 'paymentthreshold', 'payeename', 'paypalemail', 'payeephone',
                    'payeeaddress']
    fields = ['user', 'type', 'currency', 'country', 'paymentthreshold', 'payeename', 'paypalemail', 'payeephone',
              'payeeaddress']


@admin.register(Epayment)
class EpaymentAdmin(ModelAdmin):
    list_display = ['user', 'type', 'paymentthreshold', 'ewallet']
    fields = ['user', 'type', 'paymentthreshold', 'ewallet']


@admin.register(Payoneer)
class PayoneerAdmin(ModelAdmin):
    list_display = ['user', 'type', 'paymentthreshold', 'payeename', 'country', 'paypalemail']
    fields = ['user', 'type', 'paymentthreshold', 'ewallet', 'payeename', 'country', 'paypalemail']


@admin.register(Webmoney)
class WebmoneyAdmin(ModelAdmin):
    list_display = ['user', 'type', 'paymentthreshold', 'currency', 'wmz']
    fields = ['user', 'type', 'paymentthreshold', 'currency', 'wmz']


@admin.register(Widget)
class WidgetAdmin(ModelAdmin):
    list_display = ['site', 'name', 'widgettitle', 'type', 'subtype', 'column', 'rows', 'wid', 'css']
    fields = ['site', 'name', 'widgettitle', 'type', 'subtype', 'column', 'rows', 'wid', 'css']


class MessageInline(admin.TabularInline):
    model = Message
    extra = 0
    fields = ['text','addedby']


# @admin.register(Support)
# class SupportAdmin(ModelAdmin):
#     list_display = ['subject', 'priority', 'status']
#     fields = ['subject', 'priority', 'status']
#     inlines = [MessageInline, ]


