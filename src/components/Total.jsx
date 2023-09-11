import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Total() {
  const { products } = useSelector((store) => store.basket);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let summary = 0;

    products.map((item) => {
      summary += item.price * item.amount;
    });
    setSum(summary.toFixed(2));
  }, [products]);

  return (
    <div className="flex h-14 justify-around bg-slate-200 items-center text-4xl">
      {" "}
      {sum > 0 && (
        <>
          <p>Total: </p>
          <span className="text-red-600"> {sum}$</span>
          <button>Buy it now</button>
        </>
      )}
    </div>
  );
}
export default Total;
