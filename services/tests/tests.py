import requests

local_port = 5000
service = 'snippets'
resp = requests.post('http://localhost:{}/{}'.format(local_port, service))
print(resp.text)