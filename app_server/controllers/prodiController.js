
const prodi=(req,res)=>{
    const prodii = [
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
            res.render('prodi',{title:'Program Studi',prodii,layout:'main'});
}


module.exports = {prodi}