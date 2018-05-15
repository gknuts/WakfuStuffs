import requests
import sys
from bs4 import BeautifulSoup

import WakfuStuffs
from WakfuStuffs.WakfuStuffs.import_items.Item import Item

def get_all_sources(number):
    sources = []
    for i in range(0, number):
        print("{:d}/191".format(i+1))
        filename= "source/{:d}.html".format(i+1)
        with open(filename, 'r', encoding='utf-8') as input:
            source = input.readlines()
            sources.append(BeautifulSoup(''.join(source), "lxml"))

    return sources

def add_item(item):
    r = requests.post("http://localhost:8000/api/stuffs/", data={'name': item.name, 'quality': item.quality})
    return r.status_code, r.reason

def delete_item(id):
    request = "http://localhost:8000/api/stuffs/{:d}/".format(id)
    r = requests.delete(request)


def get_items(source):
    items = []

    table = source.find("table", attrs={"class": u"ak-table ak-responsivetable"}).find("tbody")
    trs = table.find_all("tr")
    cpt=0
    for tr in trs:
        item = Item()
        linker = tr.find_all("span", attrs={"class": u"ak-linker"})
        for link in linker:
            name = link.text
            if name is not "":
                item.name = name

        quality = tr.find("span", attrs={"class": u"ak-icon-small"})
        title = quality.get("title")
        if title == "":
            title = "Epique"
        item.quality = title


        type = tr.find("td", attrs={"class": u"item-type"})
        item.type = type.img.get("title")

        bonuses = tr.find("div", attrs={"class": u"ak-container ak-content-list ak-displaymode-col"})
        bonuses = bonuses.find_all("div", attrs={"class": u"ak-list-element"})
        for bonus in bonuses:
            item.bonus.append(bonus.find("div", attrs={"class": u"ak-title"}).text.strip())

        niveaux = tr.find("td", attrs={"class": u"item-level"})
        item.niveau = niveaux.text.split("Niv. ")[1]

        items.append(item)
        cpt += 1
        if(cpt == 17):
            break

    return items

def main():
    sources = get_all_sources(1)
    all_items = []
    for source in sources:
        items = get_items(source)
        all_items = all_items + items
    payload = Item.getPayload(all_items)
    print(len(str(payload))+len("http://localhost:8000/api/addstuff/"))

    requete = requests.post("http://localhost:8000/api/addstuff/", data=payload)
    print(requete.reason)

def main2():
    for i in range(27, 72):
        delete_item(i)

def main3():
    payload = {
        "count": 2,
        "0": ["Cape Bouffante", "Rare"],
        "1": ["Coiffe Bouffante", "Legendary"],
    }

    requete = requests.post("http://localhost:8000/api/addstuff/", data=payload)
    print(requete.reason)

main()