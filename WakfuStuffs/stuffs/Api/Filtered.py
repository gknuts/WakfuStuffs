from django.db.models import QuerySet
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class Filtered(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

    def get(self, request, format=None):
        items = Stuff.objects.all()
        param = request.query_params
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

        return Response(self.serializer_class(items, many=True).data, status=status.HTTP_202_ACCEPTED)