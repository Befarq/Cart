import Product from "./Product";
import { useSelector } from "react-redux";
function BasketProducts() {
  const { products } = useSelector((store) => store.basket);
  return (
    <div>
      {products.map((item) => {
        const { name, price, image, amount } = item;
        return (
          <Product
            key={new Date().getTime() + Math.random()}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}
    </div>
  );
}

export default BasketProducts;
