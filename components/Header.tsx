import { FC, useCallback, useState } from 'react';

import Image from 'next/image';

import facebookIcon from '../public/images/facebook.svg';
import instagramIcon from '../public/images/instagram.svg';
import bigLogo from '../public/images/logo-carre-fond-gris.svg';
import logo from '../public/images/logo-horizontal-fond-gris.svg';

interface NavLinkProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const MobileNavLink: FC<NavLinkProps> = ({ label, onClick, path }) => (
  <li className="mb-1">
    <a
      className="block p-4 text-sm font-semibold text-white hover:text-gray-300"
      href={path}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </a>
  </li>
);
const NavLink: FC<NavLinkProps> = ({ label, path }) => (
  <li>
    <a className="text-sm font-bold text-white hover:text-red-500" href={path} aria-label={label}>
      {label}
    </a>
  </li>
);

interface MobileNavigationProps {
  isVisible: boolean;
  onClose: () => void;
}
const MobileNavigation: FC<MobileNavigationProps> = ({ isVisible = false, onClose }) => (
  <div
    className={`
      fixed top-0 right-0 h-full w-5/6 max-w-sm z-50 duration-300 ease-in-out
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
  >
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="relative flex flex-col py-6 pl-6 pr-5 h-full w-full bg-gray-500 border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <div className="flex justify-center w-full font-bold leading-none">
          <Image className="h-auto" src={bigLogo} width={250} alt="Logo restaurant Goût d'ouest" />
        </div>
        <button name="fermer" className="self-start navbar-close pt-3" onClick={onClose}>
          <svg
            className="h-6 w-6 text-white cursor-pointer hover:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <MobileNavLink label={'À propos'} path={'#a-propos'} onClick={onClose} />
          <MobileNavLink label={'Nos formules'} path={'#formules'} onClick={onClose} />
          <MobileNavLink label={'Notre carte'} path={'#carte'} onClick={onClose} />
          <MobileNavLink label={'Épicerie'} path={'#epicerie'} onClick={onClose} />
        </ul>
      </div>
      <div className="mt-auto">
        <p className="my-4 text-xs text-center text-white">
          <span>© 2022 All rights reserved.</span>
        </p>
        <div className="flex flex-row gap-2 justify-center">
          <div>
            <a
              href={'https://www.facebook.com/goutdouest'}
              aria-label={"Facebook restaurant Goût d'ouest"}
            >
              <Image src={facebookIcon} alt="Icône Facebook" />
            </a>
          </div>
          <div>
            <a
              href={'https://www.instagram.com/valerieapeche/'}
              aria-label="Instagram restaurant Goût d'ouest"
            >
              <Image src={instagramIcon} alt="Icône Instagram" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export const Header: FC = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuVisible(!isMobileMenuVisible),
    [setIsMobileMenuVisible, isMobileMenuVisible],
  );

  return (
    <section
      className="relative bg-cover bg-no-repeat "
      style={{
        backgroundImage:
          "url('images/table.jpg?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1926&amp;q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
      <nav className="relative px-6 py-6 flex justify-between items-center">
        <a className="self-start" href="#" aria-label="Logo restaurant Goût d'ouest">
          <Image
            className="h-12 max-sm:w-32 w-48"
            src={logo}
            alt="Logo horizontal restaurant Goût d'ouest"
          />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white hover:text-gray-100"
            spellCheck="false"
            onClick={toggleMobileMenu}
            name="navigation mobile"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <NavLink label={'À propos'} path={'#a-propos'} />
          <NavLink label={'Nos formules'} path={'#formules'} />
          <NavLink label={'Notre carte'} path={'#carte'} />
          <NavLink label={'Épicerie'} path={'#epicerie'} />
        </ul>
      </nav>
      <div className="relative pt-20 pb-20 text-gray-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0 max-lg:justify-center max-lg:m-auto flex">
                  <Image className="max-lg:m-auto max-w-full max-h-full" src={bigLogo} alt="" />
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p
                    className="mb-6 leading-loose text-white"
                    spellCheck="false"
                    data-mci-spellchecked="true"
                    style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
                  >
                    De la Normandie aux Pyrénées, Goût d’Ouest vous propose modestement de petits
                    plaisirs au bout de la fourchette.
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 text-white font-semibold leading-loose transition duration-200 bg-red-400 hover:bg-red-500"
                      href="#formules"
                      aria-label="Formules"
                    >
                      Formules
                    </a>
                    <a
                      className="inline-block mb-3 w-full lg:w-auto py-2 px-6 font-semibold bg-white hover:bg-gray-100 leading-loose transition duration-200"
                      href="#carte"
                      aria-label="Carte"
                    >
                      Carte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigation isVisible={isMobileMenuVisible} onClose={toggleMobileMenu} />
    </section>
  );
};

Header.displayName = 'Header';
