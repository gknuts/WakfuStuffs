from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from weapons.models import Weapon, Tag
from weapons.serializers import WeaponSerializer



class DeleteAllWeapon(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer
    queryset = Weapon.objects.all()

    def get(self, request, format=None):
        self.queryset.delete()
        if len(Weapon.objects.all()) == 0:
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class DeleteAllTag(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer
    queryset = Tag.objects.all()

    def get(self, request, format=None):
        self.queryset.delete()
        if len(Tag.objects.all()) == 0:
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

