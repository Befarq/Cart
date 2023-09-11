import { useDispatch } from "react-redux";
import { increment, decrement, remove } from "../redux/features/basketSlice";

function Product({ name, amount, price, image }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between mb-4 card text-white">
      <div className="flex gap-14">
        <img
          src={image}
          alt={name + " glasses"}
          className="w-60 hover:scale-150 hover:backdrop-blur-3xl"
        />

        <div className="flex flex-col gap-1 text-xl ">
          <p className="font-medium text-3xl">{name}</p>
          <p className="font-bold font-sans">${price}</p>
          <button
            onClick={() => dispatch(remove(name))}
            className="text-red-500 tracking-wider"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-3xl">
        <button
          className="minus"
          onClick={() => dispatch(decrement(name))}
        ></button>
        <p>{amount}</p>
        <button
          className="plus"
          onClick={() => {
            dispatch(increment(name));
          }}
        ></button>
      </div>
    </div>
  );
}

export default Product;
