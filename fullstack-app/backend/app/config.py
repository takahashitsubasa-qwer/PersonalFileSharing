import os
from dotenv import load_dotenv


load_dotenv()
API_KEY_ENV = os.getenv("API_KEY")
headers = {
    "X-Riot-Token": API_KEY_ENV
}
