import express from "express";
import cors from "cors";
import helmet from "helmet"

const app = express();
app.use(cors());
app.use(helmet());
// body-parserはexpress.json()で代替できる
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
const port:number = parseInt(process.env.PORT!,10) || 3005;

app.get("/get-blog", (req, res) => {
    res.status(200).send({message:"test"})
});