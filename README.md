This is an E-commerce website created by Chris Yee Shen Koay, Luchen Zhou, Yao Xian Phang and James Wu. Tech Stack: Next.js, Tailwind CSS, Python FastAPI, MongoDB.

Contribution:
Chris Yee Shen Koay
-
-

Luchen Zhou
-
-

Yao Xian Phang
-
-

James Wu
-
-

## Getting Started

First, cd to frontend folder and run the frontend server:

install dependencies

```bash
npm i
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Next, to run the backend development server, cd to backend folder and run:

Install lastest python from https://www.python.org/downloads/

Install dependencies

Paste .env file into backend folder

```bash
pip3 install fastapi uvicorn pydantic "pymongo[srv]"
```

Run project

```bash
python3 -m uvicorn main:app --reload
```

Check API endpoints
Open [http://localhost:8000/docs](http://localhost:8000/docs) with your browser to see the api endpoints and test it
