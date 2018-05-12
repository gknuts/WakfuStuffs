class Item:
    def __init__(self, name=None, quality=None):
        self.name = name
        self.quality = quality

    def print(self):
        print("{:s} - {:s}".format(self.name, self.quality))