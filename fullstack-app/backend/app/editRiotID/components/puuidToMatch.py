import requests
import os

API_KEY_ENV = os.getenv("API_KEY")
headers = {
    "X-Riot-Token": API_KEY_ENV
}

def puuidToMatch(puuid):
    match_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?count={1}"
    match_response = requests.get(match_url, headers=headers)
    updating_latest_match = match_response.json()
    updating_latest_match_str = updating_latest_match[0]


    return updating_latest_match_str