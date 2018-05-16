from django.contrib import admin

# Register your models here.
from .models import Stuff, Tag

admin.site.register(Stuff)
admin.site.register(Tag)