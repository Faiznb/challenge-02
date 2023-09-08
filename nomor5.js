const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Validasi dataPenjualan
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let penulisTerlaris = "";
  let produkTerlaris = "";
  let maxPenjualan = 0;
  let totPenjualan = 0;
  const penulisData = {};

  // Menghitung total keuntungan dan total modal
  dataPenjualan.forEach((produk) => {
    if (typeof produk.hargaBeli !== "number" || typeof produk.hargaJual !== "number" || typeof produk.totalTerjual !== "number") {
      throw new Error("Data penjualan tidak valid");
    }

    const modal = produk.hargaBeli * (produk.totalTerjual + produk.sisaStok);
    const keuntungan = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;

    totalModal += modal;
    totalKeuntungan += keuntungan;

    // Menambahkan penjualan ke data penulis
    if (!penulisData[produk.penulis]) {
      penulisData[produk.penulis] = 0;
    }
    penulisData[produk.penulis] += produk.totalTerjual;

    // Mencari produk terlaris berdasarkan totalTerjual
    if (produk.totalTerjual > totPenjualan) {
      totPenjualan = produk.totalTerjual;
      produkTerlaris = produk.namaProduk;
    }

    // Mencari penulis terlaris
    if (penulisData[produk.penulis] > maxPenjualan) {
      maxPenjualan = penulisData[produk.penulis];
      penulisTerlaris = produk.penulis;
    }
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // Membuat objek hasil
  const hasil = {
    totalKeuntungan: `Rp. ${totalKeuntungan}`,
    totalModal: `Rp. ${totalModal}`,
    produkBukuTerlaris: produkTerlaris,
    persentaseKeuntungan: `${persentaseKeuntungan.toFixed(2)} %`,
    penulisTerlaris: penulisTerlaris,
  };

  return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
