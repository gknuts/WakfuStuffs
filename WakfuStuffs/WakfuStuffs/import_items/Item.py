class Item:
    def __init__(self, name="", quality="", type="", bonus=[], niveau=-1):
        self.name = name
        self.quality = quality
        self.type = type
        self.bonus = bonus
        self.niveau = niveau

    def print(self):
        print("{:s} - {:s} - {:s} - {:d} - {:s}".format(self.name, self.quality, self.type, self.niveau, "".join(self.bonus)))

    @staticmethod
    def getPayload(items):
        payload = {}
        payload["count"] = len(items)
        print(len(items))
        cpt = 0
        for item in items:
            temp = [item.name, item.quality, item.type, item.niveau, ";".join(item.bonus)]
            payload[str(cpt)] = temp
            cpt += 1
        return payload