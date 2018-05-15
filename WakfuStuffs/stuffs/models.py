from django.db import models


class Stuff(models.Model):
    id_image = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    quality = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    niveau = models.CharField(max_length=255)
    bonus = models.CharField(max_length=2500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id_image + ": " + self.name + " - " + self.quality + " - " + self.type + " - " + self.niveau