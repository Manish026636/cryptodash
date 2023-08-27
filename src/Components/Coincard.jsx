import React from 'react';

const coinData = [
  {
    title: 'Bitcoin',
    imageUrl: 'https://images.unsplash.com/photo-1651055678337-bbe6661e5d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    price: 129
  },
  {
    title: 'USDT',
    imageUrl: 'https://images.unsplash.com/photo-1651055693398-0d66969cf759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    price: 129
  },
  {
    title: 'BNB',
    imageUrl: 'https://images.unsplash.com/photo-1651055699023-36d26d793a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    price: 129
  },
  {
    title: 'LUNA',
    imageUrl: 'https://images.unsplash.com/photo-1651055749491-7be14d8a3ef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    price: 129
  }
];

const CoinCard = ({ title, imageUrl, price }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div
      className="w-full image-zoom  h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md transition duration-200 group-hover:scale-110"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="w-56  -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
        {title}
      </h3>
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
        <span className="font-bold text-gray-800 dark:text-gray-200">${price}</span>
        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
          Read more
        </button>
      </div>
    </div>
  </div>
);

const Coincard = () => (
  <div className="bg-white">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Market Trends</h2>
        <button
         
          className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
        >
          Show more
        </button>
      </div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {coinData.map((coin, index) => (
          <CoinCard key={index} {...coin} />
        ))}
      </div>
    </div>
  </div>
);

export default Coincard;
