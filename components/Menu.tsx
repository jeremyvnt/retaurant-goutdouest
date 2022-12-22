import { FC } from 'react';

import Image from 'next/image';

export const Menu: FC = () => {
  return (
    <section id="carte">
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="border-b">
          <div className="mb-16 max-w-xl mx-auto px-4 text-center">
            <span
              className="font-bold text-red-400"
              contentEditable="false"
              spellCheck="false"
              data-mci-spellchecked="true"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              Notre carte
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold font-heading text-gray-500"
              contentEditable="false"
              spellCheck="false"
              data-mci-spellchecked="true"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              Retrouvez l`&apos;`ensemble de nos différents menus et boissons.
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Nos galettes
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Nos crêpes
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Nos glaces
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Boissons fraiches
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Boissons chaudes
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Apéritifs
              </button>
              <button
                className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 active:text-red-400 hover:text-red-600 border-b-2 border-transparent active:border-red-600 transition duration-150"
                spellCheck="false"
              >
                Digestifs
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ul>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
              <li className="py-4 pr-4 border-b">
                <div
                  className="w-full flex justify-between items-center text-left font-bold hover:text-gray-600"
                  spellCheck="false"
                >
                  <span className="text-base">Kir vin blanc</span>
                  <span className="text-base text-gray-400">3€</span>
                </div>
                <p className="text-gray-400 font-normal leading-loose">12 cl</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

Menu.displayName = 'Menu';
