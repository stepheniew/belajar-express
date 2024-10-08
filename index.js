const express = require("express") //impor modul express
const app = express() //inisialisasi express
const port = 3000 //port
const expressLayout = require("express-ejs-layouts"); //import modul express-ejs-layout

app.set("views",__dirname + "/views");
app.set('view engine','ejs');

app.use(expressLayout);
app.use(express.static('public'));
// route /
app.get("/",(req,res)=>{
    //res.send("Hello");
    //res.sendFile(__dirname + "/home.html");
    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        },


    ];
    res.render('home',{title:'Halaman Home',berita,layout:'main'});
});

//route /about
app.get("/about",(req,res)=>{
    //res.send("About Us");
    //res.sendFile(__dirname + "/about.html");
    res.render("about",{title:'About us',layout:'main'});
});
//route /contact
app.get("/contact",(req,res)=>{
    //res.send("Contact");
    //res.sendFile(__dirname + "/contact.html");
    res.render("contact",{title:'Contact',layout:'main'});
});

// route prodi
app.get("/prodi",(req,res)=>{
    
    const prodi = [
        {
            programStudi: "Sistem Informasi",
            fakultas: "FIKR",
            singkatan : "SI"
        },
        {
            programStudi: "Informatika",
            fakultas: "FIKR",
            singkatan : "IF"
        },
        {
            programStudi: "Teknik Elektro",
            fakultas: "FIKR",
            singkatan : "TE"
        },
        {
            programStudi: "Manajemen Informatika",
            fakultas: "FIKR",
            singkatan : "MI"
        },
        {
            programStudi: "Manajemen",
            fakultas: "FEB",
            singkatan : "MJ"
        },
        {
            programStudi: "Akutansi",
            fakultas: "FEB",
            singkatan : "AK"
        },
   
    ];
    res.render('prodi',{title:'Program Studi',prodi,layout:'main'});
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