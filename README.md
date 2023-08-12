[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sRKW9Tsr)

## Financial Tracker REST API

This repository contains a simple REST API server built using Node.js, TypeScript, and Express for managing financial transactions. The API allows users to perform basic CRUD operations on transactions and track their financial activities.

### Project Details

As a developer working for an e-commerce startup, the goal is to provide a REST API for a mobile app and web app to track financial transactions. Express.js is chosen as the backend web framework for building the API service.

### Installation and Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/financial-tracker-api.git
   cd financial-tracker-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will be accessible at `http://localhost:3000`.

2. API Endpoints:

   - **GET /transactions**: Returns a list of all transactions.
   - **GET /transactions/:id**: Returns a specific transaction with the given ID.
   - **POST /transactions**: Creates a new transaction.
   - **PUT /transactions/:id**: Updates an existing transaction with the given ID.
   - **PATCH /transactions/:id**: Partially updates an existing transaction with the given ID.
   - **DELETE /transactions/:id**: Deletes an existing transaction with the given ID.

3. Test the API using a REST client tool or browser plugin like Postman.

### Deployment

The API service is deployed using [Railway.app](https://railway.app/). The live API URL is [https://week-8-shoqrizidan-production.up.railway.app/](https://week-8-shoqrizidan-production.up.railway.app/).
