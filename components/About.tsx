import { FC } from 'react';

import Image from 'next/image';

import bretagnePicture from '../public/images/bretagne.jpeg';
import merPicture from '../public/images/mer.jpeg';
import pyreneesPicture from '../public/images/pyrenees.jpeg';

export const About: FC = () => {
  return (
    <section id="a-propos">
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="lg:max-w-md">
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading text-gray-600">
                  Notre univers
                </h2>
                <ul>
                  <li className="flex mb-4">
                    <div className="">
                      <h3 className="font-bold font-heading text-gray-500">
                        La gastronomie de notre pays est extrêmement riche.
                      </h3>
                      <p className="leading-loose text-gray-400">
                        Chaque région est fière de ses produits, de ses traditions culinaires. Nul
                        besoin de partir loin pour se faire plaisir: nous vous proposons un petit
                        voyage dans l’Ouest de notre beau pays.
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div className="">
                      <h3 className="font-bold font-heading text-gray-500">
                        Il y a tant à partager
                      </h3>
                      <p className="leading-loose text-gray-400">
                        Nos côtes fournissent poissons et coquillages frais, nos campagnes sont
                        mises en valeur par des éleveurs et des maraichers très attachés à la
                        qualité.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
              <div className="mb-6 w-full lg:w-1/2 px-3 max-lg:px-0">
                <Image
                  className="mb-6 w-full h-64 object-cover rounded-lg"
                  src={bretagnePicture}
                  alt="Port de bretagne"
                />
                <Image
                  className="w-full h-64 object-cover rounded-lg"
                  src={pyreneesPicture}
                  alt="Montagnes des Pyrenees"
                />
              </div>
              <div className="w-full lg:w-1/2 px-3 max-lg:px-0">
                <Image
                  className="w-full h-64 object-cover rounded-lg"
                  src={merPicture}
                  alt="Côte ouest de la France"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.displayName = 'About';
