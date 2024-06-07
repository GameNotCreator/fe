import React from 'react';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';
import { MdFastfood, MdLocalDrink, MdEventNote, MdAllInclusive } from 'react-icons/md';

const Header = () => {
  return (
    <header className="fixed top-5 left-5 right-5 bg-white shadow border-2 rounded-full p-4 flex justify-between items-center z-50">
      <h1 className="text-sm font-semibold">Tunisian Pass</h1>
      <div className="flex items-center">
        <Link href="/cart">
          <div className="relative bg-black text-white p-2 rounded-lg flex items-center cursor-pointer">
            <FaShoppingBag />
            <span className="ml-2"><MdAllInclusive className="mr-2" /></span>
          </div>
        </Link>
      </div>
    </header>
  );
};

const categories = [
  { id: 1, name: 'All', icon: <MdAllInclusive className="mr-2" />, bgColor: 'bg-black', textColor: 'text-white' },
  { id: 2, name: 'Food', icon: <MdFastfood className="mr-2" />, bgColor: 'bg-white', textColor: 'text-black' },
  { id: 3, name: 'Drink', icon: <MdLocalDrink className="mr-2" />, bgColor: 'bg-white', textColor: 'text-black' },
  { id: 4, name: 'Event', icon: <MdEventNote className="mr-2" />, bgColor: 'bg-white', textColor: 'text-black' },
];

const Categories = () => {
  return (
    <div className="flex flex-row ml-5 mt-5 left-10 flex overflow-x-auto overflow-hidden p-4 space-x-4">
      {categories.map(category => (
        <button
          key={category.id}
          className={`flex items-center p-2 rounded-lg ${category.bgColor} ${category.textColor} whitespace-nowrap border-2 pr-4 pl-4 pt-2 pb-2 border-black`}
        >
          {category.icon} {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;

export { Header, Categories };
