import { FC } from 'react';

import Image from 'next/image';

export const GroceryStore: FC = () => {
  return (
    <section id="epicerie">
      <div
        className="relative py-20 radius-for-skewed"
        style={{
          backgroundImage:
            "url('images/epicerie.jpg?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900 radius-for-skewed opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white font-bold font-heading">Nos produits</h2>
            <div className="mb-6 mx-auto">
              <p className="leading-loose h-16 text-white">
                Découvrez dans notre épicerie gourmande, une sélection de produits d’artisans
                attachés à leur terroir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroceryStore.displayName = 'GroceryStore';
