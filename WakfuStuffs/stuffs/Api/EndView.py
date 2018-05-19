from rest_framework import viewsets, permissions
from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class EndView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

    def get_queryset(self):
        queryset = Stuff.objects.all().order_by("name")
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data, 20)

        serializer = self.get_serializer(queryset, many=True)
        return queryset