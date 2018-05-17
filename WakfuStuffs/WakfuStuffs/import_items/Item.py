import re

from WakfuStuffs.WakfuStuffs.import_items.Tag import Tag


class Item:
    def __init__(self, id_image="", name="", quality="", type="", niveau=0):
        self.id_image = id_image
        self.name = name
        self.quality = quality
        self.type = type
        self.bonus = []
        self.niveau = niveau
        self.tags = []

    def print(self):
        print("{:s}: {:s} - {:s} - {:s} - {:d} - {:s} - {:s}".format(self.id_image, self.name, self.quality, self.type, self.niveau, "".join(self.bonus), "".join(self.tag)))

    def bonusToTag(self, bonus):
        cutted = " ".join(bonus.split(" ")[1:])
        cutted = " ".join([x for x in cutted.split(" ") if x])
        if re.search('\d', cutted):
            splitted = cutted.split(" ")
            if splitted[0] == "Maîtrise":
                splitted[2] = "X"
            cutted = " ".join(splitted)
        return cutted


    def addBonus(self, bonus):
        tag = self.bonusToTag(bonus)
        self.bonus.append(bonus)
        self.tags.append(tag)

    @staticmethod
    def getPayload(items):
        payload = {}
        payload["count"] = len(items)
        cpt = 0
        for item in items:
            temp = [item.id_image, item.name, item.quality, item.type, item.niveau, ";".join(item.bonus), ";".join(item.tags)]
            payload[str(cpt)] = temp
            cpt += 1
        return payload