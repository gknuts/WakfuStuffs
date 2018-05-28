from django.contrib import admin

# Register your models here.
from weapons.models import Weapon
from weapons.models import Tag
from weapons.models import WeaponTag

admin.site.register(Weapon)
admin.site.register(Tag)
admin.site.register(WeaponTag)