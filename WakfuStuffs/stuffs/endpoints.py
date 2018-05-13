from django.conf.urls import include, url
from rest_framework import routers

from .api import StuffViewSet, EndView, ListStuff

router = routers.DefaultRouter()
router.register('stuffs', StuffViewSet)
router.register('endpoint', EndView, base_name="endpoint")

urlpatterns = [
    url(r"^", include(router.urls)),
    url(r"^list", ListStuff.as_view()),

]