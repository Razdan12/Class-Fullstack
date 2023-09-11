//string

// const a = 'ini string';

// console.log(a);

//number

// const a = 202.3;
// console.log(a);

//object

// const a = {
//     hewan: "kucing",
//     benda: "meja",
//     nama: "meja",
//     angka: 1234,
// };
// console.log(a);

// operator

// const bil1 = 40;
// const bil2 = 20;

// let bil3 = bil1 - bil2;
// console.log(bil3);

// const bilangan = {
//     bil1: 98,
//     bil2: 20,
//     bil3: 234,
//     bil4: 42
// }

// const bil5 = bilangan.bil4 + bilangan.bil3
// console.log(bil5);

// const bilangan1 = {
//   bil1: 4,
//   bil2: 6,
//   bil3: 9,
// };
// const bilangan2 = {
//   bil1: 54,
//   bil2: 34,
//   bil3: 21,
// };
// const bilangan3 = {
//   bil1: 34,
//   bil2: 64,
//   bil3: 91,
// };

// const hasil = bilangan1.bil1 + bilangan3.bil2
// console.log(hasil);

// if (bilangan1.bil2 < bilangan2.bil2) {

//     if (bilangan1.bil2 < bilangan2.bil2){
//         console.log("ini benar");
//     }
//     console.log("ini sangat salah");

// } else if (bilangan3.bil1 === bilangan1.bil1) {
//   console.log("salah");
// } else {
//   console.log("sangat salah");
// }

// const role = "user";
// const b = 8;
// const login = false;

// const hasil = !login ? "berhasil login" : "gagal login";
// console.log(hasil);

// for (let i = 0; i < 10; i--){
//     console.log('ini nilai i : ', i);
// }

// ARRAY

// const bilangan3 = {
//   bil1: 34,
//   bil2: 64,
//   bil3: 91,
// };
// array dimulai dari 0
// lenght menghitung jumlah data dimulai dari 1
// const contohArray = [4,5,2,35,5,2,35,5,2,5,2,35,5,2,35,5,2,5,2,35,5,2,35,5,2]; // ada 5 data

// const newData = contohArray.map((item, key) => {
//     console.log(`ini datanya : ${item} , ini aray ke : ${key}`);
// })

// contohArray[1] = 80;

// console.log(contohArray[0]);
// console.log(contohArray[1]);

// const panjangArray = contohArray.length;
// console.log(panjangArray);

// const arrayKiri = contohArray[panjangArray / 2 -1];
// const arrayKanan = contohArray[Math.floor(panjangArray / 2)]

// console.log('nilai tengah kiri :' , arrayKiri);
// console.log('nilai tengah  :' , arrayKanan);

// const database = [
//   {
//     id: "clma104jg0001v74o3ky8eqd1",
//     name: "pertama",
//     deskripsi: "ini deskripsi video",
//   },
//   {
//     id: "clma104jg0001v74o3ky8eqd1",
//     name: "kedua",
//     deskripsi: "ini deskripsi video",
//   },
//   {
//     id: "clma104jg0001v74o3ky8eqd1",
//     name: "ketiga",
//     deskripsi: "ini deskripsi video",
//   },
//   {
//     id: "clma104jg0001v74o3ky8eqd1",
//     name: "keempat",
//     deskripsi: "ini deskripsi video",
//   },
// ];

// const newData = database.map((item, key) => {
//     console.log(`ini data id : ${item.id} , ini aray ke : ${key}`);
//     console.log(`ini data name : ${item.name} , ini aray ke : ${key}`);
//     console.log(`ini data deskripsi : ${item.deskripsi} , ini aray ke : ${key}`);
// })
