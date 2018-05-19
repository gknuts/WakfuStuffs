from django.db.models import QuerySet, Count
from rest_framework import permissions, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.models import Tag
from stuffs.serializers import TagSerializer

class GetUniqueTag(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TagSerializer

    def get(self, request, format=None):
        tags = Tag.objects.values('name').annotate(countName=Count('name'))
        print(tags)
        for tag in tags:
            print(tag)

        return Response(tags)