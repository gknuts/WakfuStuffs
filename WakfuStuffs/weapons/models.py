from django.db import models


class Weapon(models.Model):
    id_image = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    quality = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    niveau = models.IntegerField()
    bonus = models.CharField(max_length=2500, blank=True)
    url = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id_image + ": " + self.name + " - " + self.quality + " - " + self.type + " - " + str(self.niveau)

class Tag(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class WeaponTag(models.Model):
    weapon = models.ForeignKey(Weapon, related_name='weapon', on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, related_name='tag', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.weapon.name + " - " + self.tag.name
