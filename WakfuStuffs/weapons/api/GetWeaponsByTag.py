from rest_framework import permissions, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from weapons.serializers import WeaponSerializer
from weapons.models import Weapon, WeaponTag, Tag

from weapons.serializers import WeaponTagSerializer


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100

class GetWeaponsByTag(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer
    weaponTagSerializer = WeaponTagSerializer
    pagination_class = LargeResultsSetPagination

    def get(self, request, format=None):
        items = None
        if('tags' in request.query_params and request.query_params['tags'] is not None):
            tags = request.query_params['tags']
            tags = tags.split(",")
            tag_set = Tag.objects.get(name=tags[0])
            weaponTags =  WeaponTag.objects.filter(tag=tag_set)
            items = Weapon.objects.filter(weapon__in=weaponTags)
            for tag in tags[1:]:
                tag_set = Tag.objects.get(name=tag)
                weaponTags = WeaponTag.objects.filter(tag=tag_set)
                items = items.filter(weapon__in=weaponTags)


        if items is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            paginator = LargeResultsSetPagination()
            context = paginator.paginate_queryset(items.order_by("niveau"), request)
            serial = self.serializer_class(context, many=True)
            res_pag = paginator.get_paginated_response(serial.data)
            return res_pag