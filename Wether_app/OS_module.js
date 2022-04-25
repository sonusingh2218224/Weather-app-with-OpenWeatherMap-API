const os = require("os");
const express= require("express")
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.version());
console.log(os.arch());
const app=express();


app.get('/',(req, res)=>{
    res.send("api called");
})

app.get("/search", (req, res) => {
  res.send("api called");
});
app.get("/update", (req, res) => {
  res.send("api called");
});
app.listen(3000)
