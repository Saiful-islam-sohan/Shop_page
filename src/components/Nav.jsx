
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Nav = () => {
  const cartItemCount = 0; // Example: Cart count, dynamically fetched or managed

  const navbar = [
    { name: "Home", value: "/" },
    { name: "About", value: "/about" },
    { name: "Products", value: "/products" },
    { name: "Contact", value: "/contact" },
    {
      name: (
        <div className="relative">
          <CiShoppingCart size={24} />
          {cartItemCount >= 0 && (
            <span className="absolute top-[-8px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-1">
              {cartItemCount}
            </span>
          )}
        </div>
      ),
      value: "/cart",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <ul className="flex justify-center items-center gap-[20px] mx-10 my-5">
        {navbar.map((item, index) => (
          <li key={index}>
            <NavLink to={item.value} className="text-gray-700 hover:text-blue-500 transition-all font-bold">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
