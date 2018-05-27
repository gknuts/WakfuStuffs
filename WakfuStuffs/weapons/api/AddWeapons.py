from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from weapons.serializers import WeaponSerializer, TagSerializer, WeaponTagSerializer

from weapons.models import Tag, WeaponTag, Weapon


class AddWeapon(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = WeaponSerializer

    def get(self, request, format=None):
        retour = ["ok"]
        return Response(retour)

    def post(self, request, format=None):
        taille = int(request.data.get("count"))
        print("{:d} to add".format(taille))
        cpt = 0
        test = []
        for i in range(0, taille):
            data = request.data.getlist(str(i))
            temp = {}
            temp["id_image"] = data[0]
            temp["name"] = data[1]
            temp["quality"] = data[2]
            temp["type"] = data[3]
            temp["niveau"] = int(data[4])
            temp["bonus"] = data[5]
            temp["url"] = data[7]

            weaponSerialized = None
            tagSerialized = None

            serializer = WeaponSerializer(data=temp)
            if serializer.is_valid():
                weaponSerialized = serializer.save()
                cpt+=1

            if data[6] != "":
                tags = data[6].split(";")
                for tag in tags:
                    serializerTag = TagSerializer(data={"name": tag})
                    if serializerTag.is_valid():
                        tagSerialized = serializerTag.save()
                    if tagSerialized is None:
                        tagSerialized = Tag.objects.filter(name=tag).first()
                    payload = {"weapon": weaponSerialized.id, "tag": tagSerialized.id}
                    weaponTagSerializer = WeaponTagSerializer(data=payload)
                    if weaponTagSerializer.is_valid():
                        weaponTagSerializer.save()
                        tagSerialized = None

        print("{:d} added".format(cpt))
        if cpt == taille:
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)