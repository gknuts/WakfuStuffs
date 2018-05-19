from rest_framework import viewsets, permissions

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class StuffViewSet(viewsets.ModelViewSet):
    queryset = Stuff.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer