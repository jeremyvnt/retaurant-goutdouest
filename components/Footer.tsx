import { FC } from 'react';

import Image from 'next/image';

import facebookIcon from '../public/images/facebook.svg';
import instagramIcon from '../public/images/instagram.svg';
import logo from '../public/images/logo-carre-fond-gris.svg';

export const Footer: FC = () => {
  return (
    <section className="p-20 bg-gray-500">
      <div className="flex flex-row flex-wrap items-center lg:justify-evenly gap-10 mb-6">
        <div className="flex max-lg:w-full max-lg:justify-center">
          <a className="w-60" href="#" aria-label="Logo restaurant Goût d'ouest">
            <Image className="" src={logo} alt="Logo restaurant Goût d'ouest" />
          </a>
        </div>
        <div
          className={
            'flex flex-row max-lg:w-full max-md:flex-col max-lg:justify-center md:items-center gap-10 lg:gap-x-32'
          }
        >
          <div className="flex flex-col items-start">
            <h5
              className="mb-4 font-bold text-white"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              COORDONNÉES
            </h5>
            <p className="text-gray-300">92 rue Carnot, 17600 Saujon</p>
            <p className="text-gray-300">05 46 22 98 46</p>
            <a
              className="text-gray-300"
              href={'mailto:valerie@restaurant-goutdouest.fr'}
              aria-label="Email du restaurant Goût d'ouest"
            >
              valerie@restaurant-goutdouest.fr
            </a>
          </div>
          <div className="flex flex-col items-start">
            <h5
              className="mb-4 font-bold text-white"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              HORAIRES
            </h5>
            <p className="text-gray-300">Du Mardi au Samedi de 12h00 à 14h00</p>
            <p className="text-gray-300">Les vendredis et samedis de 19h à 20h30</p>
            <p className="text-gray-300">Ouvert le midi les lundis de foire</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-sm text-gray-400">© 2022. All rights reserved.</p>
        <div className="flex space-x-2 lg:space-x-4">
          <a
            href={'https://www.facebook.com/goutdouest'}
            aria-label="Facebook du restaurant Goût d'ouest"
          >
            <Image src={facebookIcon} alt="Icône Facebook" />
          </a>
          <a
            href={'https://www.instagram.com/valerieapeche/'}
            aria-label="Instagram restaurant Goût d'ouest"
          >
            <Image src={instagramIcon} alt="Icône Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

Footer.displayName = 'Footer';
