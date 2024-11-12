const axios = require("axios")

const prodi=async(req,res)=>{
//     const prodii = [
//                 {
//                     programStudi: "Sistem Informasi",
//                     fakultas: "FIKR",
//                     singkatan : "SI"
//                 },
//                 {
//                     programStudi: "Informatika",
//                     fakultas: "FIKR",
//                     singkatan : "IF"
//                 },
//                 {
//                     programStudi: "Teknik Elektro",
//                     fakultas: "FIKR",
//                     singkatan : "TE"
//                 },
//                 {
//                     programStudi: "Manajemen Informatika",
//                     fakultas: "FIKR",
//                     singkatan : "MI"
//                 },
//                 {
//                     programStudi: "Manajemen",
//                     fakultas: "FEB",
//                     singkatan : "MJ"
//                 },
//                 {
//                     programStudi: "Akutansi",
//                     fakultas: "FEB",
//                     singkatan : "AK"
//                 },
           
//             ];
//             res.render('prodi',{title:'Program Studi',prodii,layout:'main'});
// }

try{
    const response = await axios.get(
    "https://crud-express-seven.vercel.app/api/prodi"
);

    const prodi = response.data;
    console.log(prodi);

    res.render("prodi", {
    title: "Halaman Prodi",
    prodi,
    layout: "main",
    });
}catch (error){
 console.error(error.message);
 res.status(500).send("Gagal mendapatkan data fakultas dari API");
 }
};
module.exports = {prodi};