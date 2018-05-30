from rest_framework import permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from weapons.models import Weapon, WeaponTag, Tag

from weapons.serializers import WeaponTagSerializer, TagSerializer, WeaponSerializer

class GetTagByIdWeapon(ListAPIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TagSerializer

    def get_queryset(self):
            pk = self.kwargs["pk"]
            if pk is None:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            weapon = Weapon.objects.filter(id=pk)
            tag_ids = WeaponTag.objects.filter(weapon_id=pk).values_list("tag__id", flat=True)
            tags = Tag.objects.filter(id__in=tag_ids)

            return tags