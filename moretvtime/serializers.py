from rest_framework import serializers

from moretvtime.models import Article, Tracking, Banner, BannerPlaceholder, BannerButton


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('url', 'title', 'keywords', 'article', 'article_source', 'thumbnail')


class TrackingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tracking
        fields = ('date', 'provider', 'sub_id', 'ip', 'sent')


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ('name', 'code', 'is_static', 'autoremove')


class BannerButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerButton
        fields = ('name', 'text', 'type')


class BannerPlaceholderSerializer(serializers.ModelSerializer):
    banner_above_button_1 = BannerSerializer(read_only=True)
    banner_above_button_2 = BannerSerializer(read_only=True)
    button = BannerButtonSerializer(read_only=True)
    banner_below_button_1 = BannerSerializer(read_only=True)
    banner_below_button_2 = BannerSerializer(read_only=True)

    class Meta:
        model = BannerPlaceholder
        fields = ('order', 'paragraph_number', 'timeout', 'selector', 'banner_above_button_1', 'banner_above_button_2', 'button', 'banner_below_button_1', 'banner_below_button_2', 'insert_before', 'scroll_to_top', 'is_test')

