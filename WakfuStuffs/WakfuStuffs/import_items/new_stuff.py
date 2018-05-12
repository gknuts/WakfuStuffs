import os
import sqlite3

import django
import requests
from bs4 import BeautifulSoup

import WakfuStuffs
from WakfuStuffs.WakfuStuffs.import_items.Item import Item

def get_all_sources():
    sources = []
    for i in range(0, 2):
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
    for tr in trs:
        item = Item()
        linker = tr.find_all("span", attrs={"class": u"ak-linker"})
        for link in linker:
            name = link.text
            if name is not "":
                item.name = name

        quality = tr.find("span", attrs={"class": u"ak-icon-small"})
        item.quality = quality.get("title")

        items.append(item)

    return items

def main():
    sources = get_all_sources()
    for source in sources:
        items = get_items(source)
        cpt=1
        for item in items:
            print("{:d}/191".format(cpt))
            add_item(item)
            cpt += 1

def main2():
    for i in range(27, 72):
        delete_item(i)

def main3():
    payload = ['Cape Bouffante', 'Rare']

    requete = requests.post("http://localhost:8000/api/stuffs/", data=payload)
    print(requete.reason)

main()