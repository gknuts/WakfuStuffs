import re

from WakfuStuffs.WakfuStuffs.import_items.Tag import Tag


class Item:
    def __init__(self, id_image="", name="", quality="", type="", niveau=0, url=""):
        self.id_image = id_image
        self.name = name
        self.quality = quality
        self.type = type
        self.bonus = []
        self.niveau = niveau
        self.tags = []
        self.url = url

    def print(self):
        print("{:s}: {:s} - {:s} - {:s} - {:d} - {:s} - {:s} - {:s}".format(self.id_image, self.name, self.quality, self.type, self.niveau, "".join(self.bonus), "".join(self.tag), self.url))

    def bonusToTag(self, bonus):
        cutted = " ".join(bonus.split(" ")[1:])
        cutted = " ".join([x for x in cutted.split(" ") if x])
        normalized = self.normalize(cutted)
        return normalized

    def normalize(self, elm):
        splitted = elm.split(" ")
        if("PdV" in splitted):
            return None
        if "Points" in splitted or "Point" in splitted:
            return "PdV"
        if "PA" in splitted:
            return "PA"
        if "PM" in splitted:
            return "PM"
        if "PW" in splitted:
            return "PW"
        if splitted[0] == "Maîtrise":
            if "éléments" in splitted or "élément" in splitted:
                return "Mea"
        if splitted[0] == "Résistance":
            if "éléments" in splitted or "élément" in splitted:
                return "Rea"

        return " ".join(splitted)


    def addBonus(self, bonus):
        tag = self.bonusToTag(bonus)
        self.bonus.append(bonus)
        if(tag is not None):
            self.tags.append(tag)

    @staticmethod
    def getPayload(items):
        payload = {}
        payload["count"] = len(items)
        cpt = 0
        for item in items:
            temp = [item.id_image, item.name, item.quality, item.type, item.niveau, ";".join(item.bonus), ";".join(item.tags), item.url]
            payload[str(cpt)] = temp
            cpt += 1
        return payload