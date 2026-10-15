from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel

from .editRiotID.mainEdit import mainEdit

load_dotenv()

app = FastAPI(title="FullStack API")

# CORS設定
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Text(BaseModel):
    server: str
    game_name: str
    tag_line: str


summonerNameDict = {"game_name": "", "tag_line": "", "server": ""} 

@app.get("/")
def read_root():
    return {"message": "FastAPI with React + Tailwind CSS"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/Text")
def postText(body:Text):
    summonerNameDict["game_name"] = body.game_name
    summonerNameDict["tag_line"] = body.tag_line
    summonerNameDict["server"] = body.server
    return {"text": body.game_name}

@app.get("/list")
def get_list():
    return {"list": mainEdit(summonerNameDict)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


