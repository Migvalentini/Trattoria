import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Ingressos; delete from Compradores"})
#print(response.json()['json'])

# for i in range(9):
#    response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"INSERT INTO Ingressos (nome, cpf, restricao, conhecido, tipo, id_Comprador) VALUES ('', '', '', '', '', '116') returning id"})
#    print(response.json()['json'])

print('COMPRADORES\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json'])
print('TOTAL COMPRADORES:', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0])
print('INGRESSOS\n', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json'])
print('TOTAL INGRESSOS:', requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0])