from rest_framework import serializers

from .models import Stuff


class StuffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stuff
        fields = ('id', 'id_image', 'name', 'quality', 'type', 'niveau', 'bonus')