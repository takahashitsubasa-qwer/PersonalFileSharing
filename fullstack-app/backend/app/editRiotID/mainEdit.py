from .components.riotidToPuuid import riotidToPuuid
from .components.puuidToMatch import puuidToMatch


def mainEdit(summonerNameDict):
    puuid = riotidToPuuid(summonerNameDict)
    latest_match = puuidToMatch(puuid)

    return latest_match