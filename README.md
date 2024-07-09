This is an E-commerce website created by Chris Yee Shen Koay, Luchen Zhou, Yao Xian Phang and James Wu. Tech Stack: Next.js, Tailwind CSS, Python FastAPI, MongoDB.

Contribution:
Chris Yee Shen Koay
- Set up Website landing page
- Configure Docker to rebuild container when there are code changes and when new module is installed
- Set up backend and developement PostgreSQL database dockerfile
- Set Up payment Page with Stripe
- Product Listing Page
- Deployment to ECR

Luchen Zhou
-
-

Yao Xian Phang
-
-

James Wu
-
-

## Getting Started (Development)

1. Build and start docker containers

```bash
docker compose -f compose.dev.yaml build
```

```bash
docker compose -f compose.dev.yaml up
```

2. Initiate database

```bash
docker exec -it backend npx prisma migrate dev --name init
```

To run email templates, run
```bash
npx react-email dev
```

