import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import Search from './Search';

function Navbar() {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Укр <span className="uppercase text-orange-500 font-bold">бургер</span>
        </h1>
      </div>
      <Search />

      <button className="bg-black text-white flex flex-col items-center justify-center">
        <BsFillCartFill className="" /> Cart
      </button>
    </div>
  );
}

export default Navbar;
