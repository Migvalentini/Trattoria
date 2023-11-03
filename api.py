import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores where id = 29;"})
#print(response.json()['json'])

#compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
#totalCompradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0]
#ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
totalIngressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0]
#print('COMPRADORES\n', compradores, '\n')
#print('INGRESSOS\n', ingressos, '\n')
print(totalIngressos)
# somaTotal = 0
# somaPaga = 0
# for c in compradores:
#    somaTotal += int(c[6])
#    if c[6] == 'pago':
#       somaPaga += int(c[6])
# print(somaTotal)

# for i in ingressos:
#    if i[3] != '' and i[3] != 'não' and i[3] != 'Não':
#       print(i)