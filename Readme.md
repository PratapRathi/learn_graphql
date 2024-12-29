# Expense Tracker
================

A MERN (MongoDB, Express, React, Node.js) application for tracking personal expenses.

## Overview
--------

This project is a simple expense tracker built using the MERN stack. It allows users to create, read, update, and delete (CRUD) expenses.

## Features
--------

* User authentication and authorization
* Create, read, update, and delete expenses
* Filter expenses by category and date
* Display total expenses and expenses by category

## Technologies Used
--------------------

* MongoDB for data storage
* Express.js for server-side routing and API
* React.js for client-side rendering and UI
* Node.js for server-side runtime environment
* GraphQL for API query language

## Project Structure
-------------------

* `client`: React.js client-side code
* `server`: Express.js server-side code
* `models`: MongoDB schema definitions
* `graphql`: GraphQL schema definitions

## Getting Started
---------------

1. Clone the repository: `git clone https://github.com/PratapRathi/learn_graphql.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Start the client: `npm run client`

## API Documentation
------------------

### GraphQL API

The GraphQL API is located at `http://localhost:4000/graphql`. You can use a tool like GraphiQL to explore the API.

### Queries

* `getExpenses`: Retrieve a list of all expenses
* `getExpense(id: ID!)`: Retrieve a single expense by ID
* `createExpense(input: ExpenseInput!)`: Create a new expense
* `updateExpense(id: ID!, input: ExpenseInput!)`: Update an existing expense
* `deleteExpense(id: ID!)`: Delete an expense

### Mutations

* `createExpense(input: ExpenseInput!)`: Create a new expense
* `updateExpense(id: ID!, input: ExpenseInput!)`: Update an existing expense
* `deleteExpense(id: ID!)`: Delete an expense

## Contributing
------------

Contributions are welcome! Please submit a pull request with a clear description of the changes.

## License
-------

This project is licensed under the MIT License.
