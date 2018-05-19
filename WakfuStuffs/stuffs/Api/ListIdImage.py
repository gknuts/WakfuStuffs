from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer

class ListIdImage(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

    def get(self, request, format=None):
        id_image = None
        id_image = [stuff.id_image for stuff in Stuff.objects.all()]
        return Response(id_image)