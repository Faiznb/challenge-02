const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }
  let total = 0;
  //Looping Untuk setiap item dalam array
  dataPenjualan.forEach((item) => {
    if (typeof item !== "object") {
      throw new Error("Setiap elemen dalam array harus berupa objek");
    }
    if (!item.hasOwnProperty("totalTerjual") || typeof item.totalTerjual !== "number") {
      throw new Error("Setiap objek harus memiliki properti 'totalTerjual' yang merupakan number");
    }

    total += item.totalTerjual;
  });

  return total;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
