// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

const firstColor= [];
const secondColor= [];

firstColor.push("Merah","Jingga","Kuning","Hijau");
secondColor.push("Biru","Nila","Ungu","Hitam");

// const arrEducation= [];
const objEducation1={
    nama:"SDN 060874",
    city:"Medan",
    graduate:2009
};
const objEducation2={
    nama:"SMP Islamiyah",
    city:"Medan",
    graduate:2012
};
const objEducation3={
    nama:"SMA Josua",
    city:"Medan",
    graduate:2015
};

// const arrEducation2= [];
const objEducation4={
    nama:"SDN 060814",
    city:"Jakarta",
    graduate:2008
};
const objEducation5={
    nama:"SMP Jaya",
    city:"Riau",
    graduate:2013
};
const objEducation6={
    nama:"SMA Bima",
    city:"Bima",
    graduate:2016
};

arrEducation=[objEducation1,objEducation2,objEducation3]
// arrEducation2=[objEducation4,objEducation5]



firstUser.name="Ikhsan";
firstUser.age=22
firstUser.email="ikhsan@gmail.com"
firstUser.favoriteColor=firstColor;
firstUser.isHavePet="No"
firstUser.education=arrEducation
// firstUser.education=[{
//     nama:"SDN 060874",
//     city:"Medan",
//     graduate:2009},{
//     nama:"SMP Islamiyah",
//     city:"Medan",
//     graduate:2012},{
//     nama:"SMA Josua",
//     city:"Medan",
//     graduate:201
//     }
// ];
firstUser.favoriteRestorant=["miko","Ayam Penyet NA", "Bakso Ragil"]

secondUser.name="Azri";
secondUser.age=22
secondUser.email="ikhsanazri99@gmail.com"
secondUser.favoriteColor=secondColor;
secondUser.isHavePet="Yes"
secondUser.education=[{
        nama:"SMA Bima",
        city:"Bima",
        graduate:2016},{       
        nama:"SMP Jaya",
        city:"Riau",
        graduate:2013},{
        nama:"SDN 060814",
        city:"Jakarta",
        graduate:2008
        }];
secondUser.favoriteRestorant=["Garuda","Ayam Geprek","Restoran Kita-kita"]








// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};