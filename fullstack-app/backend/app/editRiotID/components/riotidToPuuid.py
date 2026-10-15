import requests
from ...config import headers

def riotidToPuuid(summonerNameDict):
    account_url = f"https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{summonerNameDict['game_name']}/{summonerNameDict['tag_line']}"
    response = requests.get(account_url, headers=headers)
    print("riotidToPuuid:", response.status_code)
    account_date = response.json()
    puuid = account_date["puuid"]


    return puuid