const index =(req,res)=>{
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
}
const about =(req,res)=>{
    res.render("about",{title:'About us',layout:'main'}); 
}

const contact=(req,res)=>{
    res.render("contact",{title:'Contact',layout:'main'});
}



module.exports = {index,about,contact}