import requests

response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""
select * from Compradores;
"""})
response2 = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""
select * from Ingressos;
"""})

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"""delete from Ingressos;"""})

table = response.json()
table2 = response2.json()

print("Compradores:")
print(table['json'])
print("Ingressos:")
print(table2['json'])
