import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores where id = 87;"})
#print(response.json()['json'])

compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
totalCompradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Compradores;"""}).json()['json'][0][0]
ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
totalIngressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select count (*) from Ingressos;"""}).json()['json'][0][0]
#print('COMPRADORES\n', compradores, '\n')
#print('INGRESSOS\n', ingressos, '\n')
print('TOTAL COMPRADORES: ', totalCompradores)
print('TOTAL INGRESSOS: ', totalIngressos)

# COMPRADORES
# 0 - id
# 1 - Nome
# 2 - Telefone
# 3 - CPF
# 4 - Email
# 5 - Pago/Não Pago
# 6 - Total

# INGRESSOS
# 0 - id
# 1 - Nome
# 2 - Telefone
# 3 - Restrição
# 4 - Conhecido
# 5 - Tipo
# 6 - Id Comprador

# somaTotal = 0
# somaPaga = 0
# for c in compradores:
#    somaTotal += int(c[6])
#    if c[6] == 'pago':
#       somaPaga += int(c[6])
# print(somaTotal)

# for c in compradores:
#     if c[6] == '0':
#         print(c)
# print('\n')
# for i in ingressos:
#     print(i)

def get_id(item):
    return item[0]

compradores_ordem = sorted(compradores, key=get_id)
ingressos_ordem = sorted(ingressos, key=get_id)

print('COMPRADORES:')
for info in compradores_ordem:
    print(info)
print('\nINGRESSOS:')
for info in ingressos_ordem:
    print(info)