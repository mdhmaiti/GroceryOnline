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

## BACKEND

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
14. Building the product api is a tricky part , if u read the trial 2 and trial 3 then u will understand that u hit the end point ```api/products``` you will only get the product which is featured (basically the sponsors) and to get the specific product u need to hit the end point ```/api/products?cat=oil``` then only u will get all the products that are listed in the category.( if u do not know this the ? is just the start of the query string , just ask the chat gpt).
15. now that all the basic things works just fine u can add the products to your db using the prisma and can successfylly as u wanted now we have to move to the next step that is to add the product delete the product and so on.
16. Therefore we need an authentication, here we will be using the ``` next auth ``` role based authentication.
17. install the ```next auth``` and then go to the configuration , initialization  in the docs there you can find the route handlers which is best for the app directory.
18. now set up the o auth of the next js from the docs and go to the ```google cloud console``` and create a new project and add your credentials.
19. Now for the front end validation of the session we use the ``` useSession ``` hook provided by the next auth.( i will do it after the back end ).
20. to get the session inside the server i use the ``` getServerSession() ``` which is recommended by the next auth.
21. now we want the authenticated person to access the database for this the next auth provides us with the ``` adapters ``` . Here I am using the prisma so it is prisma adapter ```npm i @next-auth/prisma-adapter```. Search in the stack overflow what are the adapters it will give a clear view.
22. now add the  adapter to the auth and copy paste the schema from the docs to the prisma model.( mainly the account session  user and verification)
23. first ensure that the docker is running and you are connected to the db, then do ``` npx prisma migrate dev ``` as you have changed your prisma schema. now u u can ckeck if by ``` npx prisma studio ``` if everything is added.
24. add the role based auth system and how to implement this is documented in the auth section
25. now before we proceed futher with the order api i will connect the order and the user in the schema which i previously left.I will connect the user to the order via the email u can also use the user id .
26. now there are somes basic things left that is the creation and delete of the products and the orders and finally integrating the payment api.
27. data flow from the order to the payments: first add the products to the cart(front end part), then click on the check out button , it triggers the post method and hits the api of the orders route and from the api we get the orderId. From there we will head to the payment page, which will trigger the api and aslo the stripe server via the ```intent id and the order id``` . now there will be two options success and failure. If it is success just update update the order status to preparing or something and if failed just say it failed ,, this response will be shown in the order page.
28. back end ```stripe @stripe/stripe-js```  front end ```@stripe/react-stripe-js```

----------------------------------------------------------

## FRONTEND

1. The home page should have a landing page which only consist of a landing page and a sign in button and ofcourse some image of the products
