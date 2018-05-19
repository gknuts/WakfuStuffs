from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class ListStuff(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

    def get(self, request, format=None):
        names = None
        param = request.query_params
        if('letter' in request.query_params and request.query_params['letter'] is not None):
            letter = request.query_params['letter']
            names = [stuff.name for stuff in Stuff.objects.all().filter(name__startswith=letter)]
        elif('id' in request.query_params and request.query_params['id'] is not None):
            id = request.query_params['id']
            names = [stuff.name for stuff in Stuff.objects.all().filter(id=id)]
        elif('id_image' in request.query_params and request.query_params['id_image'] is not None):
            id_image = [stuff.id_image for stuff in Stuff.objects.all()]
        else:
            names = [stuff.name for stuff in Stuff.objects.all()]
        return Response(names)