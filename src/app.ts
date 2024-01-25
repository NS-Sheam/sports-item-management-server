import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello world",
  });
});

app.use(globalErrorHandler);

export default app;
