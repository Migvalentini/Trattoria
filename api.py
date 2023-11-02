import requests

#response = requests.get('https://trattoria-three.vercel.app/create')
#print(response.json()['json'])

compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
#totalCompradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0]
ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
#totalIngressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0]

somaTotal = 0
somaPaga = 0
for c in compradores:
   somaTotal += int(c[6])
   if c[6] == 'pago':
      somaPaga += int(c[6])
print(somaTotal)

for i in ingressos:
   if i[3] != '':
      print(i)