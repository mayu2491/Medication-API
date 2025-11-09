# Medication API

A clean NestJS + Prisma scaffold for building a Medication management API. The project includes
configured Swagger documentation, PostgreSQL schema, Dockerfile, and Jest testing setup.

## Getting Started

```bash
npm install
npm run prisma:generate
npm run start:dev
```

The application is served on `http://localhost:3000` and exposes interactive API documentation at
`http://localhost:3000/docs`.

## Environment

Create a `.env` file based on `.env.example` before running the application.

## Database Migrations

Use Prisma CLI commands to manage the database schema:

```bash
npm run prisma:migrate -- --name init
```

## Testing

```bash
npm test
```

## Docker

Build and run the application inside a container:

```bash
docker build -t medication-api .
docker run --env-file .env -p 3000:3000 medication-api
```
