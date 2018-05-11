import requests
from bs4 import BeautifulSoup

from WakfuStuffs.WakfuStuffs.import_items.Item import Item


def get_all_sources():
    sources = []
    for i in range(0, 1):
        filename= "source/{:d}.html".format(i+1)
        with open(filename, 'rb') as input:
            source = input.readlines()
            sources.append(BeautifulSoup(str(source), "lxml"))

    return sources

def add_item(item):
    r = requests.post("http://localhost:8000/api/stuffs/", data={'name': 'Cape Boufante'})
    return r.status_code, r.reason

def get_items(source):
    item = Item()
    table = source.find("table", attrs={"class": u"ak-table ak-responsivetable"})
    trs = table.find_all("tr")
    for tr in trs:
        name = tr.find("span", attrs={"class": u"ak-linker"})
        if(name is not None):
            print(name)
            break

def main():
    sources = get_all_sources()
    source = sources[0]
    get_items(source)

main()