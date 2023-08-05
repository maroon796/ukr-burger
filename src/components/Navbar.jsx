import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import Search from './Search';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(false);

  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer mr-3">
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          Укр <span className="uppercase text-orange-500 font-bold">бургер</span>
        </h1>
      </div>
      <Search />

      <button className="bg-black text-white flex flex-col items-center justify-center">
        <BsFillCartFill className="" /> Кошик
      </button>

      {nav && <MobileMenu onCloseMobile={closeMobileMenu} />}
    </div>
  );
}

export default Navbar;
