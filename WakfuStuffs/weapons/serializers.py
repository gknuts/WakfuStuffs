from rest_framework import serializers

from weapons.models import Tag, WeaponTag, Weapon


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = ('id', 'id_image', 'name', 'quality', 'type', 'niveau', 'bonus', 'url')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields =('name',)

class WeaponTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeaponTag
        fields =('weapon', 'tag')
