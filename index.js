const express = require("express") //impor modul express
const app = express() //inisialisasi express
const port = 3000 //port

app.set('view engine','ejs');

// route /
app.get("/",(req,res)=>{
    //res.send("Hello");
    res.sendFile(__dirname + "/home.html");
});

//route /about
app.get("/about",(req,res)=>{
    //res.send("About Us");
    res.sendFile(__dirname + "/about.html");
});
//route /contact
app.get("/contact",(req,res)=>{
    //res.send("Contact");
    res.sendFile(__dirname + "/contact.html");
});

//route /mahasiswa
app.get("/mahasiswa",(req,res)=>{
    res.json({
        "status": "success",
        "message" : "Data Mahasiswa",
        "data": [{npm:2226240084, nama:"stephen"}, 
                 {npm:2226240084, nama:"niko"},
                 {npm:2226240084, nama:"ler"},
                 {npm:2226240084, nama:"dona"}]
    });
})

//route /dosen
app.get("/dosen",(req,res)=>{
    res.json({
        "status": "success",
        "message" : "Data Dosen",
        "data": [{prodi:"Sistem Informasi", dosen:["- Iis","- Faris","- Dafid"]}, 
                                                                    
                 {prodi:"Informatika", dosen:["- Derry", "- Siska", "- Yohannes"]}]
    });
})
//handle route yang tidak terdaftar

app.use("/", (req,res)=>{
    res.send("<h1> 404 Not Found </h1>");
});


//jalankan server
app.listen(port,()=>{
    console.log(`Server dapat diakses di http://localhost:${port}`);
})