const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const foodRouter = require("./routes/foodRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect(
  "mongodb+srv://userApp:pZPV5tL6ZmXTZODL@aulaweb.2m64m8l.mongodb.net/?retryWrites=true&w=majority&appName=AulawebpName=Aulaweb"
);





app.use("/api", userRouter);
app.use("/api", foodRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
