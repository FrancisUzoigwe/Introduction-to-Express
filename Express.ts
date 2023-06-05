// import express, { Application } from "express";

// const port: number = 2002;
// const app: Application = express();

// app.use(express.json());

// app.listen(port, () => {
//   console.log("listening on port " + port);
// });

// import express, { Application } from "express";

// const port: number = 2002;
// const app: Application = express();


// app.use(express.json());

// app.listen(port, () => {
//     console.log("Server is now live..")
// })


// import express, { Application } from "express";

// const port: number = 2020;
// const app: Application = express();

// app.use(express.json());
// app.listen(port, () => {
//     console.log("Server is now listening to " + port)
// })


// import express, { Application } from "express";


// const port: number = 3000;

// const app: Application =express();

// app.use(express.json());

// app.listen(port, () => {
//     console.log("Server is now Active on " + port)
// })


import express, { Application } from "express";

const port: number = 2000;

const app: Application = express();

app.use(express.json());

app.listen(port, () => {
    console.log("Server is now running" + port)
})