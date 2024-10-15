# Simple Expense Tracker REST API
This Simple Expense Tracker API aims to track and record the User's Expenses and save to the database, MongoDB. Built with Node.js, Express and Mongoose.

## Requirements
For API Testing, You will need:
- [Postman](https://www.postman.com/)

For Data Storage and Hosting in the Cloud:
- [MongoDB Cloud Account and Cluster](https://cloud.mongodb.com/)

You can also use [MongoDB Compass](https://www.mongodb.com/products/tools/compass) if your want to host it in your local network

## USAGE
***IMPORTANT: Dependencies should be installed before starting the server to avoid errors***
```
npm i
```

**Copy .env.template as .env then fill out the values inside for MongoDB Cluster URL and Server Port**

**To Start the Server**<br>
```
npm run server
```

### API
**Fetch all Transactions**
```
GET http://localhost:5944/api/transactions
```
**Response: 200 OK**
```json
[
    {
        "_id": "670e594fa8cd6fa09355821f",
        "name": "Income",
        "amount": 15000,
        "category": "Income",
        "__v": 0
    }
]
```
<br><hr><br>
**Create Transaction**
```
POST http://localhost:5944/api/transactions

Body:
{
    name: "Payroll"
    amount: 15000
    category: "Income"
}
```
**Response: 201 Created**
```json
{
    "name": "Income",
    "amount": 15000,
    "category": "Income",
    "_id": "670e5b20a8cd6fa093558226",
    "__v": 0
}
```
<br><hr><br>

**Update Transaction**
``` 
PUT http://localhost:5944/api/transactions/{_id}

Parameter:
_id: 670e594fa8cd6fa09355821f

Body:
{
    name: "Payroll Update"
    amount: 15000
    category: "Income"
}
```

**Response: 200 OK**
```json
{
    "_id": "670e594fa8cd6fa09355821f",
    "name": "Income Updated",
    "amount": 15000,
    "category": "Income",
    "__v": 0
}
```
<br><hr><br>
**Delete Transaction**
``` 
DELETE http://localhost:5944/api/transactions/{_id}

Parameter:
_id: 670e594fa8cd6fa09355821f
```

**Response: 200 OK**
```json
{
    "id": "670e594fa8cd6fa09355821f"
}
```