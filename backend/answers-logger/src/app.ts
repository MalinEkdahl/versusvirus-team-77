import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import fs from "fs";
import mkdirp from "mkdirp";

// init logs
mkdirp.sync("./logs");
if (!fs.existsSync("./logs/answer.log")) {
  fs.writeFileSync("./logs/answer.log", "{}");
}
const logFile = fs.createWriteStream('./logs/answer.log', {flags: 'a'});

const app: Application = express();
app.use(express.json());
app.use(cors());

// Logger
app.post("/answer", (req: Request, res: Response, next: NextFunction) => {
  logFile.write(',' + JSON.stringify(req.body));
  res.send();
});

// Base route, that could be erased but if we need to test the api for availability it's here.
app.get("/", (req: Request, res: Response): object => {
    const logs = fs.readFileSync('./logs/answer.log', 'utf8')
    return res.json(JSON.parse('['+logs+']'));
  }
);
// Route not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Route Not found");
  next(error);
});
// Error handler
app.use((error: { message: string; status: number }, req: Request, res: Response,next: NextFunction
  ) => {
    res.status(error.status || 500);
    res.json({
      status: "error",
      message: error.message
    });
    next();
  }
);

const PORT: any = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));