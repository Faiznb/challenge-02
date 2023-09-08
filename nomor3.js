function getAngkaTerbesarKedua(personName) {
  //Validasi Parameter

  if (!Array.isArray(personName)) {
    console.error("Parameter yang kamu masukkan bukan berupa array");
    return;
  }
  // Menghapus elemen duplikat (jika ada)
  const arrayUnik = personName.filter((item, index) => personName.indexOf(item) === index);

  // Mengurutkan array dari besar ke kecil
  const sortedArr = arrayUnik.sort((a, b) => b - a);

  // Mengambil angka terbesar kedua
  const angkaTerbesarKedua = sortedArr[1];

  return angkaTerbesarKedua;
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log("Angka Terbesar Kedua Yaitu :");
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
