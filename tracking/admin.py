from django.contrib import admin
from django.contrib.admin import ModelAdmin

from moretvtime.models import Country
from tracking.models import Visitor, ReferrerCompany, ReferrerCountry, AllVisitor


@admin.register(Visitor)
class VisitorAdmin(ModelAdmin):
    list_display = ['session_key','referrer','offerwall_referrer','page_views','ip_address','url','country','session_start','last_update']
    fields = ['session_key','referrer','offerwall_referrer','page_views','url','ip_address','country','session_start','last_update']
 
@admin.register(AllVisitor)
class AllVisitorAdmin(ModelAdmin):
    list_display = ['session_key','referrer','page_views','ip_address','url','country','session_start','last_update']
    fields = ['session_key','referrer','page_views','url','ip_address','country','session_start','last_update']
        
class ReferrerCountryInline(admin.TabularInline):
    model = ReferrerCountry
    extra = 0       
    fields = ['country','totalview','total_money']       
    readonly_fields = ('country','totalview','total_money')
    def total_money(self, obj):
        allcalc=0
        if obj.id !=None:                  
            qs_country=Country.objects.filter(country=obj.country)[:1]  
            if qs_country.count() != 0:
               a_price = [ x.price for x in qs_country ]      
               allcalc = float(float(obj.totalview) * float(a_price[0]))    
            
        return allcalc        

@admin.register(Country)
class CountryAdmin(ModelAdmin):
    list_display = ['price','country']
    fields = ['price','country'] 
        
@admin.register(ReferrerCompany)
class ReferrerCompanyAdmin(ModelAdmin):
    list_display = ['companyname','bannerloads','clicks','total_count','total_money']
    fields = ['companyname','totalview']
    inlines =[ReferrerCountryInline, ] 
                                 
    def total_money(self, obj):    
        allcalc=0      
        rc=ReferrerCountry.objects.filter(referrercompany_id=obj.id)            
        if rc.count() != 0:
            
            for q_rc in rc:
                qs_country=Country.objects.filter(country=q_rc.country)[:1]  
                if qs_country.count() != 0:
                   a_price = [ x.price for x in qs_country ]      
                   allcalc += float(float(q_rc.totalview) * float(a_price[0]))    
            
        return allcalc 
                           
    def total_count(self, obj):    
        allcalcc=0
        qs_country=ReferrerCountry.objects.filter(referrercompany_id=obj.id)
        if qs_country.count() != 0:

            for x in qs_country:
                allcalcc += int(x.totalview)


        return allcalcc
