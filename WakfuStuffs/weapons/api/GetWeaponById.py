from rest_framework import permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from weapons.models import Weapon, WeaponTag, Tag

from weapons.serializers import WeaponTagSerializer, TagSerializer, WeaponSerializer


class GetWeaponById(ListAPIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer

    def get_queryset(self):
        pk = self.kwargs["pk"]
        if pk is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        weapon = Weapon.objects.filter(id=pk)

        return weapon