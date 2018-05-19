import os
import urllib

import requests
from bs4 import BeautifulSoup
from math import ceil

from WakfuStuffs.WakfuStuffs.import_items.Cpt import Cpt
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

def get_items(source, cpt):
    items = []
    table = source.find("table", attrs={"class": u"ak-table"})
    if(table == None):
        print(source.prettify())
        pass
    table = table.find("tbody")
    trs = table.find_all("tr")
    for tr in trs:
        print("{:d}/4584".format(cpt.cpt))
        item = Item()
        linker = tr.find_all("span", attrs={"class": u"ak-linker"})
        item.id_image = linker[0].img.get("src").split("/")[-1].split(".")[0]
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
            txt = bonus.find("div", attrs={"class": u"ak-title"})
            if(txt != None):
                item.addBonus(txt.text.strip())

        niveaux = tr.find("td", attrs={"class": u"item-level"})
        try:
            item.niveau = niveaux.text.split("Niv. ")[1]
        except:
            pass

        items.append(item)
        cpt.inc()

    return items

def split_seq(seq, size):
  newseq = []
  splitsize = 1.0/size*len(seq)
  for i in range(size):
          newseq.append(seq[int(round(i*splitsize)):int(round((i+1)*splitsize))])
  return newseq

def split_list(alist, wanted_items=160):
    piece = ceil(len(alist) / wanted_items)
    print("amount of item: {:d}".format(len(alist)))
    print("amount of piece of 160: {:d}".format(piece))
    return split_seq(alist, piece)


def main():
    sources = get_all_sources(191)
    print(len(sources))
    all_items = []
    cpt = Cpt()
    for source in sources:
        items = get_items(source, cpt)
        all_items = all_items + items
    tabs = split_list(all_items, 160)

    cpt=0
    for tab in tabs:
        print("{:d}/{:d}".format(cpt, len(tabs)))
        payload = Item.getPayload(tab)
        requete = requests.post("http://localhost:8000/api/addstuff/", data=payload)
        print(requete.reason)
        cpt+=1

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

def main4():
    test = "1 PA;1 PM;1 Contrôle;534 Points de Vie;3% Coup Critique;8% Parade;200 Maîtrise sur 3 éléments aléatoires;45 Résistance  Eau;45 Résistance  Feu;45 Résistance  Terre"
    item = Item()
    for elm in test.split(";"):
        item.addBonus(elm)

def main5():
    mot = "Résistance Terre"
    print(" ".join([x for x in mot.split(" ") if x]))

def main6():
    request_headers = {
        "Accept-Language": "en-US,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
        "Referer": "http://thewebsite.com",
        "Connection": "keep-alive"
    }
    requete = requests.get("http://localhost:8000/api/id_image/")
    id_images = requete.content
    ids = id_images.decode().split("[")[1].split("]")[0].split(",")
    cpt=0
    for id in ids:
        id_image = id.split('"')[1]
        url = "https://s.ankama.com/www/static.ankama.com/wakfu/portal/game/item/115/{:d}.png".format(int(id_image))
        out_image = "imgs/{:d}.png".format(int(id_image))
        os.system("wget -O {0} {1} -q".format(out_image, url))
        cpt+=1
        if(cpt%50 ==0):
            print(cpt)



main()