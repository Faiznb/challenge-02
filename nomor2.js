const checkTypeNumber = (givenNumber) => {
  //Validasi Parameter
  if (givenNumber === undefined) {
    return "Tidak ada parameter yang dimasukkan";
  }
  if (typeof givenNumber !== "number") {
    console.error("INVALID DATA TYPE");
    return "";
  }
  //Mengecek Apakah Ganjil Atau Genap
  if (givenNumber % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
