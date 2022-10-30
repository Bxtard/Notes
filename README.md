# Notes

Note is an application that allows you to view, add, edit, archive and delete tasks.
API documentation is on `localhost:{PORT}/swagger`

## This app was build on:

### frontend

* Next.js v13.0.0
* React v18.2.0
* Typescript v4.8.4

### Backend

* Nest.js v9.1.1
* prisma v4.5.0
* Typescript v4.7.4

### DataBase

* PostgreSQL v14

### Global
* concurrently v7.5.0

## To run the app:

1. Clone the repo `https://github.com/Bxtard/Notes.git`
2. Go to the directory `cd notes`
3. Install the app `npm install`
4. go to folder backend `cd backend` and create your .env file `touch .env`
5. configure your PosgreSQL db `DATABASE_URL="here_your_url"`
6. configure port `PORT=3001` (it will run on port 3001 by default)
7. run prisma to create a migration `npx prisma migration dev --name <here the name you want>`
8. go back to main folder `cd ..`
9. run it `npm run dev`

## Licence

ISC license