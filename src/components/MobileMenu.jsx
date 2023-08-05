import { AiFillTag, AiOutlineClose } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

function MobileMenu({ onCloseMobile }) {
  return (
    <>
      <div
        onClick={() => onCloseMobile()}
        className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0"></div>

      <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 text-2xl">
        <AiOutlineClose
          onClick={() => onCloseMobile()}
          size={20}
          className="absolute top-3 right-3 cursor-pointer"
        />
        <h2 className="p-5">
          Укр <span className="text-orange-500 font-bold ">БУРГЕР</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-grey-800">
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={25} className="mr-4" /> Закази
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdFavorite size={25} className="mr-4" />
              Улюблене
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaWallet size={25} className="mr-4" /> Гаманець
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdHelp size={25} className="mr-4" /> Помiч
            </li>
            <li className="text-xl py-4 flex items-center">
              <AiFillTag size={25} className="mr-4" /> Робота
            </li>
            <li className="text-xl py-4 flex items-center">
              <BsFillSaveFill size={25} className="mr-4" /> Найкраще
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUserFriends size={25} className="mr-4" /> Запроси друга
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
