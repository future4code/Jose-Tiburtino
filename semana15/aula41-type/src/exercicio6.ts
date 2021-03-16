enum HistoryAges {
  PREHISTORY = "Pré-história",
  ANCIENTAGE = "Idade Antiga",
  MIDDLEAGE = "Idade Média",
  MODERNAGE = "Idade Moderna",
  CONTENPORARYAGE = "Idade Contemporânea",
}

const age = (year: number, label?: string) => {
  switch (label) {
    case "AC":
      if (year > 4000) {
        return HistoryAges.PREHISTORY;
      } else {
        return HistoryAges.ANCIENTAGE;
      }
    default:
      if (year < 476) {
        return HistoryAges.ANCIENTAGE;
      } else if (year < 1453) {
        return HistoryAges.MODERNAGE;
      } else if (year < 1789) {
        return HistoryAges.CONTENPORARYAGE;
      }
  }
};

console.log(age(4500, "AC"))
