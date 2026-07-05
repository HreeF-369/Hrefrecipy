import urllib.request
url = "https://upload.wikimedia.org/wikipedia/commons/2/28/Churros_con_chocolate_-_San_Gin%C3%A9s_-_Madrid.jpg"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    with open("public/images/churros_ganache.jpg", "wb") as f:
        f.write(response.read())
