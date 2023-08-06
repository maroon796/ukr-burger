function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 ml-3">Неймовiрний</p>
          <p className="px-2 ml-3">24/7</p>
          <button className="border-white bg-white text-black absolute bottom-4 ml-3">
            Закажи зараз
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 ml-3">Неможливий</p>
          <p className="px-2 ml-3">24/7</p>
          <button className="border-white bg-white text-black absolute bottom-4 ml-3">
            Закажи зараз
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3504876/pexels-photo-3504876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-4 ml-3">Незвичйний</p>
          <p className="px-2 ml-3">24/7</p>
          <button className="border-white bg-white text-black absolute bottom-4 ml-3">
            Закажи зараз
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/5292917/pexels-photo-5292917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
