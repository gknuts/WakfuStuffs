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
        fields = ('id', 'id_image', 'name', 'quality', 'type', 'niveau', 'bonus', 'tags',)

    """def create(self, validated_data):
        order = Stuff.objects.get(pk=validated_data.pop('tags'))
        instance = Stuff.objects.create(**validated_data)
        Tag.objects.create(Order=order, Stuff=Stuff)
        return instance

    def to_representation(self, instance):
        representation = super(StuffSerializer, self).to_representation(instance)
        representation['tags'] = TagSerializer(instance.assigment_set.all(), many=True).data
        return representation"""