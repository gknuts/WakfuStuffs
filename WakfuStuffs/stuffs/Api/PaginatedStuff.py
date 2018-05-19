from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from stuffs.models import Stuff
from stuffs.serializers import StuffSerializer


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 100


class PaginatedStuff(ListAPIView):
    queryset = Stuff.objects.all().order_by("id")
    serializer_class = StuffSerializer
    pagination_class = LargeResultsSetPagination