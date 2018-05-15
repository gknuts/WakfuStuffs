class Item:
    def __init__(self, id_image="", name="", quality="", type="", niveau=-1):
        self.id_image = id_image
        self.name = name
        self.quality = quality
        self.type = type
        self.bonus = []
        self.niveau = niveau

    def print(self):
        print("{:s}: {:s} - {:s} - {:s} - {:d} - {:s}".format(self.id_image, self.name, self.quality, self.type, self.niveau, "".join(self.bonus)))

    @staticmethod
    def getPayload(items):
        payload = {}
        payload["count"] = len(items)
        cpt = 0
        for item in items:
            temp = [item.id_image, item.name, item.quality, item.type, item.niveau, ";".join(item.bonus)]
            payload[str(cpt)] = temp
            cpt += 1
        return payload