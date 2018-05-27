from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import APIView

from weapons.serializers import WeaponSerializer
from weapons.models import Weapon, WeaponTag

from weapons.serializers import WeaponTagSerializer


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100

class Filtered(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer
    weaponTagSerializer = WeaponTagSerializer
    pagination_class = LargeResultsSetPagination

    def get(self, request, format=None):
        items = Weapon.objects.all()


        paginator = LargeResultsSetPagination()
        context = paginator.paginate_queryset(items, request)
        serial = self.serializer_class(context, many=True)
        res_pag = paginator.get_paginated_response(serial.data)
        return res_pag

    """def get(self, request, format=None):
        items_id = WeaponTag.objects.all().values_list("weapon_id", flat=True)
        tags_id = WeaponTag.objects.all().values_list("tag_id", flat=True)

        items = Weapon.objects.filter(id__in = wt)


        paginator = LargeResultsSetPagination()
        context = paginator.paginate_queryset(items, request)
        serial = self.weaponTagSerializer(context, many=True)
        res_pag = paginator.get_paginated_response(serial.data)
        return res_pag"""