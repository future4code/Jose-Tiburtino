enum ClothTemp {
  WINTER = "Winter",
  SUMMER = "Summer",
  BANHO = "Banho",
  INTIMA = "Íntima",
}

type Shop = {
  name: string;
  price: number;
  category: ClothTemp;
};

type ShopDiscount = {
  name: string;
  price: number;
  category: ClothTemp;
  discountedPrice: number;
};

const seila = (products: Shop[]): ShopDiscount[] => {
  return products.map(
    (item: Shop): ShopDiscount => {
      switch (item.category) {
        case "Winter":
          return { ...item, discountedPrice: item.price * 0.9 };
        case "Summer":
          return { ...item, discountedPrice: item.price * 0.95 };
        case "Banho":
          return { ...item, discountedPrice: item.price * 0.96 };
        case "Íntima":
          return { ...item, discountedPrice: item.price * 0.93 };
        default:
          return { ...item, discountedPrice: item.price };
      }
    }
  );
};
