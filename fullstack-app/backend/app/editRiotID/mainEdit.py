from .components.riotidToPuuid import riotidToPuuid
from .components.puuidToMatch import puuidToMatch
from .components.puuidToMastary import puuidToMastary


def mainEdit(summonerNameDict):
    puuid = riotidToPuuid(summonerNameDict)
    mastary_data = puuidToMastary(puuid)

    return mastary_data