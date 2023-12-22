const express = require("express")


const PORT = process.env.PORT || 4000;
const app = express();

// middlewares
app.use(express.json()) // to parse req and res into json 
app.use(express.urlencoded({
    extended:false
}))

app.use("/notes", require("./routes/notesRoutes"))

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})
