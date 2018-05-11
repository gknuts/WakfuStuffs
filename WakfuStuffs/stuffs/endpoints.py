from django.conf.urls import include, url
from rest_framework import routers

from .api import StuffViewSet

router = routers.DefaultRouter()
router.register('stuffs', StuffViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]