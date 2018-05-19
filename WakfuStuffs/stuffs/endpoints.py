from django.conf.urls import include, url
from rest_framework import routers

from stuffs.Api.StuffViewSet import StuffViewSet
from stuffs.Api.PaginatedStuff import PaginatedStuff
from stuffs.Api.EndView import EndView
from stuffs.Api.ListStuff import ListStuff
from stuffs.Api.ListIdImage import ListIdImage
from stuffs.Api.AddStuff import AddStuff
from stuffs.Api.DeleteAllStuff import DeleteAllStuff
from stuffs.Api.Filtered import Filtered
from stuffs.Api.GetUniqueTag import GetUniqueTag

router = routers.DefaultRouter()
router.register('stuffs', StuffViewSet)
router.register('endpoint', EndView, base_name="endpoint")

urlpatterns = [
    url(r"^", include(router.urls)),
    url(r"^list", ListStuff.as_view()),
    url(r"^id_image", ListIdImage.as_view()),
    url(r"^addstuff", AddStuff.as_view()),
    url(r"^deleteallstuff", DeleteAllStuff.as_view()),
    url(r"^limitstuff", PaginatedStuff.as_view()),
    url(r"^filtered", Filtered.as_view()),
    url(r"^uniquetag", GetUniqueTag.as_view()),

]