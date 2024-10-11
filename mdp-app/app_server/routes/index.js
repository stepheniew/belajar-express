var express = require('express');
var router = express.Router();

//import controller
const mainController = require('../controllers/mainControllers')

//route
router.get('/',mainController.index)
router.get('/about',mainController.about)
router.get('/contact',mainController.contact)



// /* GET home page. */
// router.get('/', function(req, res, next) {

//     const berita = [
//         {
//             judul: "Berita 1",
//             isi: "Isi berita 1"
//         },
//         {
//             judul: "Berita 2",
//             isi: "Isi berita 2"
//         },


//     ];
//   res.render('home', { title: 'Home',berita,layout : 'main' });
// });
// router.get("/about",(req,res)=>{
//     //res.send("About Us");
//     //res.sendFile(__dirname + "/about.html");
//     res.render("about",{title:'About us',layout:'main'});
// });
// router.get("/contact",(req,res)=>{
//     //res.send("Contact");
//     //res.sendFile(__dirname + "/contact.html");
//     res.render("contact",{title:'Contact',layout:'main'});
// });

// // route prodi
// router.get("/prodi",(req,res)=>{
    
//     const prodi = [
//         {
//             programStudi: "Sistem Informasi",
//             fakultas: "FIKR",
//             singkatan : "SI"
//         },
//         {
//             programStudi: "Informatika",
//             fakultas: "FIKR",
//             singkatan : "IF"
//         },
//         {
//             programStudi: "Teknik Elektro",
//             fakultas: "FIKR",
//             singkatan : "TE"
//         },
//         {
//             programStudi: "Manajemen Informatika",
//             fakultas: "FIKR",
//             singkatan : "MI"
//         },
//         {
//             programStudi: "Manajemen",
//             fakultas: "FEB",
//             singkatan : "MJ"
//         },
//         {
//             programStudi: "Akutansi",
//             fakultas: "FEB",
//             singkatan : "AK"
//         },
   
//     ];
//     res.render('prodi',{title:'Program Studi',prodi,layout:'main'});
// });

module.exports = router;
