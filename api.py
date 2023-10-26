import requests

response = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""
select * from Ingressos;
"""})

table = response.json()

print(table['json'])