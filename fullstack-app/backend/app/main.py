from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel

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
    text: str
    

@app.get("/")
def read_root():
    return {"message": "FastAPI with React + Tailwind CSS"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/postText")
def postText(body:Text):
    print({"text": body.text, "server": body.server})
    return {"text": body.text}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


