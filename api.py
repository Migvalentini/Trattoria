import requests

#response = requests.get('https://trattoria-three.vercel.app/create')
#print(response.json()['json'])

print('COMPRADORES\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json'])
print('TOTAL COMPRADORES:', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0])
print('INGRESSOS\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json'])
print('TOTAL INGRESSOS:', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0])