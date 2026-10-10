import requests


headers = {
    "X-Riot-Token": API_KEY_ENV
}


def get_puuid_from_riotID(summonerNameDict):
    account_url = f"https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{summonerNameDict['game_name']}/{summonerNameDict['tag_line']}"
    response = requests.get(account_url, headers=headers)
    account_date = response.json()
    puuid = account_date["puuid"]

    return puuid