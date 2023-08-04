import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  return (
    <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg-[500px]">
      <AiOutlineSearch size={20} />
      <input type="text" placeholder="Шукати їжу..." />
    </div>
  );
}

export default Search;
