from django.conf.urls import include, url
from rest_framework import routers

from .api import StuffViewSet, EndView, ListStuff, AddStuff, DeleteAllStuff, StuffRecordsView, ListIdImage

router = routers.DefaultRouter()
router.register('stuffs', StuffViewSet)
router.register('endpoint', EndView, base_name="endpoint")

urlpatterns = [
    url(r"^", include(router.urls)),
    url(r"^list", ListStuff.as_view()),
    url(r"^id_image", ListIdImage.as_view()),
    url(r"^addstuff", AddStuff.as_view()),
    url(r"^deleteallstuff", DeleteAllStuff.as_view()),
    url(r"^limitstuff", StuffRecordsView.as_view()),

]