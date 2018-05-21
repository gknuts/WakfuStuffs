from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from stuffs.serializers import StuffSerializer, TagSerializer

class AddStuff(APIView):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = StuffSerializer

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
            temp["tags"] = []
            if data[6] != "":
                elms = data[6].split(";")
                for elm in elms:
                    temp["tags"].append({"name": elm})
            test.append(temp)
            serializer = StuffSerializer(data=temp)

            if serializer.is_valid():
                cpt+=1
        serializer = StuffSerializer(data=test, many=True)
        if serializer.is_valid():
            serializer.save()

        print("{:d} added".format(cpt))
        if cpt == taille:
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)