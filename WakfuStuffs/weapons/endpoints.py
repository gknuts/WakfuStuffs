from django.conf.urls import url, include
from rest_framework import routers

from weapons.api.AddWeapons import AddWeapon
from weapons.api.DeleteAllWeapon import DeleteAllWeapon
from weapons.api.DeleteAllWeapon import DeleteAllTag
from weapons.api.Filtered import Filtered
from weapons.api.GetTagByIdWeapon import GetTagByIdWeapon
from weapons.api.GetWeaponById import GetWeaponById
from weapons.api.GetWeaponsByTag import GetWeaponsByTag

urlpatterns = [
    url(r"^addWeapon", AddWeapon.as_view()),
    url(r"^deleteallweapon", DeleteAllWeapon.as_view()),
    url(r"^deletealltag", DeleteAllTag.as_view()),
    url(r"^filtered", Filtered.as_view()),
    url(r"^getTagByIdWeapon/(?P<pk>[0-9]+)", GetTagByIdWeapon.as_view()),
    url(r"^getWeaponById/(?P<pk>[0-9]+)", GetWeaponById.as_view()),
    url(r"^getWeaponsByTag", GetWeaponsByTag.as_view()),
]