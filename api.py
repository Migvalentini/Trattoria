import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"ALTER SEQUENCE RESTART WITH 1"})
response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores"})
print(response.json()['json'])

print('COMPRADORES\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json'])
print('INGRESSOS\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json'])