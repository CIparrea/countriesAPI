# Countries API  

<img src="https://borgenproject.org/wp-content/uploads/11918162946_11ea276da7_h.jpg"/>


## Instalation

To install the Countries API:

- Clone the repository
- In your terminal, initialize npm

```
  npm init -y
```
- Install dependencies

```
  npm install
```

  In your **package.json** add the below to use updated import syntax.
```bash
    "type":"module",
```

- Start the server

```
  npm start
```
- or, to start the server in development mode

```
  npm run dev
```

- To seed data
```
  npm run db:seed
```

## Routes

Open **Postman** to test the API and its full CRUD functionality. Below you will find examples of the routes availble and how to access them.


View the countries and their data.
```bash
  GET localhost:3000/api/countries
```
View a single country and its data.
```bash
  GET localhost:3000/api/countries/:country_id
```
Create a new country.
```bash
STEP 1:
  POST localhost:3000/api/countries
```
```bash
STEP 2: Add the data of the new country in the body.
ex.
  {
    "name": "Cesar's Country",
    "capital": "General Assembly",
    "region": "New York",
    "latlng": ["3", "28"],
    "timezones": "Central",
    "language": "Spanish",
    "flagIcon": "None",
    "currency": "USD",
    "population": "1",
    "flag": "url"
  }
```
Update an existing planet's data.
```bash
STEP 1.
  PUT localhost:3000/api/countries/:country_id 
```
```bash
STEP 2. Add the data you would like to update in the body.
ex.
{
    "name": "New Country"
}
```
Delete a planet.
```bash
  DELETE localhost:3000/api/:country_id 
```


## Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [Heroku](https://www.heroku.com/)