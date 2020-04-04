import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import os from "os";

const app: Application = express();
const logFile =  fs.createWriteStream('./answer.log', {flags: 'a'});

app.use(express.json());

// Logger
app.post("/answer", (req: Request, res: Response, next: NextFunction) => {
  logFile.write(JSON.stringify(req.body) + os.EOL);
  res.send('answer has been logged');
});

// Base route, that could be erased but if we need to test the api for availability it's here.
app.get("/", (req: Request, res: Response): object => {
    return res.json({ status: "success", message: "Welcome to API Service" });
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