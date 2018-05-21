from rest_framework import serializers

from .models import Stuff, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields =('name',)

class StuffSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    class Meta:
        model = Stuff
        fields = ('id', 'id_image', 'name', 'quality', 'type', 'niveau', 'bonus', 'tags', 'url')

    def create(self, validated_data):
        tags_data = validated_data.pop('tags')
        stuff = Stuff.objects.create(**validated_data)
        for tag_data in tags_data:
            Tag.objects.create(stuff=stuff, **tag_data)
        return stuff