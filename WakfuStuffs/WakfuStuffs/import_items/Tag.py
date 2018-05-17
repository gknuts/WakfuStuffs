import re


class Tag:
    def __init__(self):
        pass

    @staticmethod
    def bonusToTag(bonus):
        retour = []
        elms = bonus.split(";")
        for elm in elms:
            cutted = " ".join(elm.split(" ")[1:])
            if re.search('\d', cutted):
                splitted = cutted.split(" ")
                if splitted[0] == "Maîtrise":
                    splitted[2] = "X"
                cutted = " ".join(splitted)
            retour.append(cutted)
        return retour