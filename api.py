import requests

# response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""
# select * from Compradores;
# """})
# response2 = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""
# select * from Ingressos;
# """})
# table2 = response2.json()
# print(table2['json'])

response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"select * from ingressos;"})

table = response.json()

print(table['json'])