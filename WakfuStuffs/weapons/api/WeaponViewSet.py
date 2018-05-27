from rest_framework import viewsets, permissions

from weapons.models import Weapon
from weapons.serializers import WeaponSerializer


class WeaponViewSet(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer