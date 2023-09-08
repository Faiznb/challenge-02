const checkTypeNumber = (givenNumber) => {
  //Validasi Parameter
  try {
    if (typeof givenNumber !== "number") {
      throw new Error("INVALID DATA TYPE");
    }
  } catch (error) {
    console.error(error.message);
    return;
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
