import requests
from bs4 import BeautifulSoup

HOST = '127.0.0.1:8000'

# Test for crypto user
resp = requests.get(HOST +'/?provider=test&sub_id=test').text
soup = BeautifulSoup(resp, "html.parser")
node = soup.find('input', id='Cryptochkaddress')
if node:
    print('CRYPTO test Passed')
else:
    print('FAILED')


