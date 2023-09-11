import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  const { amount } = useSelector((state) => state.basket);
  return (
    <div className="flex justify-between pt-5">
      <p className="font-medium text-3xl">Home</p>
      <p className="font-medium flex">
        <BsCart4 className="text-3xl" />
        <span className="bg-red-500 text-sm text-white py-2 px-2 rounded-full">
          {amount}
        </span>
      </p>
    </div>
  );
}

export default Navbar;
