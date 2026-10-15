import requests
from ...config import headers

def puuidToMastary(puuid):
    mastary_url = f"https://jp1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/{puuid}/top"
    response = requests.get(mastary_url, headers=headers)
    print("puuidToMastary:", response.status_code)
    mastary_data = response.json()
    print("puuidToMastary:", mastary_data)
    return mastary_data