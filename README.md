# Grocery_online

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## set up the project locally

- DATABASE_URL="your url"

- POSTGRES_DB="your database name"
- POSTGRES_USER="your username"
- POSTGRES_PASSWORD="your password"

- PGADMIN_DEFAULT_EMAIL= "your email"
- PGADMIN_DEFAULT_PASSWORD= "your password"

## tech used

1. next js app router.
2. client : react and react query.
3. state management : recoil.
4. database : postgres SQL.
5. ORM : prisma.
6. docker: for installing the postgres.( do not use any database locally always use a container).
7. payment: stripe api.
8. styling: tailwind css , schad cn ui,

## Steps to build this whole thing

1. draw a model in your copy
2. create the api folder in the app directory and create the categories first beacuse the categories will be linked to the product then the product will be linked to use user .
3. install the prisma orm from the docs, install the prisma client for the crud operations. You can install the prisma client at the begining there is no problem just sync it with the prisma generate later.
4. set up the docker and pull the postgres imgage. U can do this by many ways but i suggest do it by docker compose so that everytime you run this application u don't have to manually start the postgres db again.
5. point to note : always use the volume when you are connecting to the db, or the data will be lost ( otherwise there will be no point to have the db)
6. also use the pgadmin container (to familiarize youself) u can also ignore this u will use the prisma studio
7. write the basic category , product and the order model figure out the link between the the things and how the user is related. eg -> orders linked via user email.
8. after doing so use ``` npx prisma migrate dev ```
9. note the env file should be exactly ``` .env ```
10. now use the ``` npx prisma studio ``` you can see your models and do whatever you can.
11. create some dummy data in the data base and try to get the data ( access the data using the api)--> this will mark as the first big step to the project.
12. similarly create the products , oders api routes but before that u need to make another folder for the connection to the prisma so that you don't write the same thing over and over again it causes a problem , the details are given in the docs.( do it from the docs )
13. The above is done by creating a " singleton pattern". A "singleton" pattern is used to create and manage a single instance of the PrismaClient. A singleton ensures that there is only one instance of a particular class or object created and shared throughout the application's lifecycle. It's often used to manage resources efficiently and avoid unnecessary instantiation of objects.
14. Building the product api is a tricky part , if u read the trial 2 and trial 3 then u will understand that u hit the end point ```api/product``` you will only get the product which is featured (basically the sponsors) and to get the specific product u need to hit the end point ```/api/products?cat=oil``` then only u will get all the products that are listed in the category.( if u do not know this the ? is just the start of the query string , just ask the chat gpt).
15. now that all the basic things works just fine u can add the products to your db using the prisma and can successfylly as u wanted now we have to move to the next step that is to add the product delete the product and so on.
16. Therefore we need an authentication, here we will be using the ``` next auth ``` role based authentication.
17. install the ``` next auth``` and then go to the configuration , initialization  in the docs there you can find the route handlers which is best for the app directory.
18. now set up the o auth of the next js from the docs and go to the google cloud console and create a new project and add your credentials.