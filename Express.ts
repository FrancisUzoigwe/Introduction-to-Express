import express, { Application , Response, Request } from "express";
import axios from "axios";
import crypto from "crypto"


interface iData  {
    name? : string ;
    price? : number;
    id?: string
}

const dataSet: iData [] =[];
const port : number = 3344;
const app: Application = express();


app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
    try{
        return res.status(200).json({
            message: "This is just a welcome page",
            data: dataSet
        });
    } catch (error) {
        throw error;
    }
});

app.post("/create", (req: Request, res: Response): Response => {
    try{
        const { name , price}  = req.body;

         const ID = dataSet.length +1 ;
         const newID = crypto.randomUUID();
         const newID2 = crypto.randomBytes(16).toString("hex")
         
        const newobj  = {id: newID,
             name,
              price,
            };
        const addData = dataSet.push(newobj); 
    

        return res.status(201).json({
            message: "creating page ",
            data: newobj,
        });
    } catch (error) {
        throw error;
    }
});

// client is not self defined

app.get("/:id", (req: Request, res: Response): Response => {
    try{
        const id  = req.params;
        console.log(id)
        
        const newdatA=  dataSet.filter( (el: any)=> {
            return el.id === id.id;
        });
        return res.status(201).json({
            message: "getting single data",
            data: newdatA,
        });
    } catch (error) {
        throw error;
    }
});
app.listen(port, () => {
    console.log("server is now on");

});    


app.get("api/github", async(req: Request, res: Response) => {
  try{
    const {name} = req.body;
    const url = `https://api.github.com/users/${name}`;

    let myData = await axios.get(url).then((res) => {
        return res.data;
    });

    res.status(200).json({message: "Sucess", data: myData});
  }catch(error){
    throw error;
  }
})



app.get("api/weather", async(req: Request, res: Response) => {
  try{
    const {name} = req.body;

    const APKEY = "5c"
    const url = `https://api.github.com/users/${name}`;

    let myData = await axios.get(url).then((res) => {
        return res.data;
    });

    res.status(200).json({message: "Sucess", data: myData});
  }catch(error){
    throw error;
  }
})