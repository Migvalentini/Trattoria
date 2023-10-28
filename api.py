import requests

response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""})

#response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"select * from Compradores;"})
#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores;"})

table = response.json()

print(table['json'])