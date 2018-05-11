import requests

def get_all_sources():
    with open(filename, 'r') as input:
        lines = input.readlines()

def main():
    r = requests.post("http://localhost:8000/api/stuffs/", data={'name': 'Cape Boufante'})
    print(r.status_code, r.reason)


main()