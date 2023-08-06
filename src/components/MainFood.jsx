function MainFood() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="p-4 text-4xl sm:text-5xl font-bold">
            Кращi <span className="text-orange-500">бургери</span>
          </h1>
          <h1 className="p-4 text-4xl sm:text-5xl font-bold">
            Залюбки <span className="text-orange-500">доставимо</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
}

export default MainFood;
