from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer

class DeleteAllStuff(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer
    queryset = Stuff.objects.all()

    def get(self, request, format=None):
        self.queryset.delete()
        if len(Stuff.objects.all()) == 0:
            return Response(status=status.HTTP_202_ACCEPTED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

