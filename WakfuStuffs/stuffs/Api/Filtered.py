from django.db.models import QuerySet
from rest_framework import permissions, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.models import Tag
from stuffs.serializers import StuffSerializer



class LargeResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100

class Filtered(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer
    pagination_class = LargeResultsSetPagination

    def get(self, request, format=None):
        items = Stuff.objects.all()
        param = request.query_params
        paginator = LargeResultsSetPagination()
        results = []
        if('name' in request.query_params and request.query_params['name'] is not None):
            name = request.query_params['name']
            items = items.filter(name=name)
        if('quality' in request.query_params and request.query_params['quality'] is not None):
            qualities = request.query_params['quality']
            qualities = [str(quality) for quality in qualities.split(",")]
            items = items.filter(quality__in=qualities)
        if('niv_max' in request.query_params and request.query_params['niv_max'] is not None):
            niv_max = request.query_params['niv_max']
            items = items.filter(niveau__lte=int(niv_max))
        if('niv_min' in request.query_params and request.query_params['niv_min'] is not None):
            niv_min = request.query_params['niv_min']
            items = items.filter(niveau__gte=int(niv_min))
        if('type' in request.query_params and request.query_params['type'] is not None):
            type = request.query_params['type']
            type = [str(type) for type in type.split(",")]
            items = items.filter(type__in=type)
        if('tags' in request.query_params and request.query_params['tags'] is not None):
            tags = request.query_params['tags']
            print(tags)
            tags = [str(tags) for tags in tags.split(",")]
            for tag in tags:
                if(tag != ''):
                    elms = [str(elm) for elm in tag.split("_")]
                    if(len(elms)>1):
                        tags_result = Tag.objects.all().filter(name__in=elms)
                        items = items.filter(tags__in=tags_result)
                    else:
                        tags_result = Tag.objects.all().filter(name=tag)
                        items = items.filter(tags__in=tags_result)

        context = paginator.paginate_queryset(items.order_by("niveau"), request)
        serial = self.serializer_class(context, many=True)
        res_pag = paginator.get_paginated_response(serial.data)

        return res_pag