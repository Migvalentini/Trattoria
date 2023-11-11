import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores where id = 70;"})
#print(response.json()['json'])

compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
compradores_ordem = sorted(compradores, key=lambda x: x[0])
totalCompradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count(*) from Compradores;"""}).json()['json'][0][0]
ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
ingressos_ordem = sorted(ingressos, key=lambda x: x[0])
totalIngressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count(*) from Ingressos;"""}).json()['json'][0][0]
print('COMPRADORES:')
for info in compradores_ordem:
    print(info)
    
print('\nINGRESSOS:')
for info in ingressos_ordem:
    print(info)
    
print('\nTOTAL DE COMPRADORES:', totalCompradores)
print('\nTOTAL DE INGRESSOS:', totalIngressos)