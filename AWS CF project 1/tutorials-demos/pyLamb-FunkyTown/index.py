import requests

def funkytown(event, context):
    url = "https://know-it-all.io/"
    r = requests.get(url)
    print(r)