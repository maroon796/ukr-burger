import { useState } from 'react';
import { data } from '../data/data';

function Food() {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      }),
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Наше меню</h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold">Фiльтр по типу</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Все
            </button>
            <button
              onClick={() => filterType('burger')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Бургери
            </button>
            <button
              onClick={() => filterType('pizza')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Пiца
            </button>
            <button
              onClick={() => filterType('salad')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Салати
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold">Фiльтр по цiнi</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => {
          return (
            <div className="border shadow-lg hover:scale-105 duration-500 rounded-lg" key={item.id}>
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 px-4 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
