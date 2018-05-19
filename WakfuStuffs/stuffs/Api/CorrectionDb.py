from django.db.models import QuerySet
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class CorrectionDb(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

    def get(self, request, format=None):
        items = Stuff.objects.all()
        param = request.query_params
        if('id' in request.query_params and request.query_params['id'] is not None):
            id = request.query_params['id']
            items = items.filter(id=id)
            for item in items:
                item.niveau = int(item.niveau)
                print(item.id)
                print(item.niveau)
                print(isinstance(item.niveau, int))
        return Response(self.serializer_class(items, many=True).data, status=status.HTTP_202_ACCEPTED)