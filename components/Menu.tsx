import { FC, PropsWithChildren, memo, useCallback, useMemo, useState } from 'react';

import Image from 'next/image';

import menuCrepes from '../public/images/menu-crepes.jpeg';
import menuEnfant from '../public/images/menu-enfant.jpeg';
import menuGalettes from '../public/images/menu-galettes.jpeg';
import menuGlaces from '../public/images/menu-glaces.jpeg';

interface TabProps {
  value: number;
  label: string;
  selectedTab: number;
  onClick: (index: number) => void;
}

interface TabPanelProps extends PropsWithChildren {
  value: number;
  selectedTab: number;
}

const Tab: FC<TabProps> = memo(({ value, label, onClick, selectedTab }) => {
  const isActive = useMemo<boolean>(() => value === selectedTab, [value, selectedTab]);

  const activeStyle = 'text-red-400 border-red-600';
  const unactiveStyle = 'text-gray-400 border-transparent';

  const relatedStyle = useMemo(() => (isActive ? activeStyle : unactiveStyle), [isActive]);

  const handleOnClick = useCallback(() => {
    if (isActive) return;
    return onClick(value);
  }, [value, isActive, onClick]);

  return (
    <button
      className={`px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold border-b-2 hover:text-red-600 transition duration-150 ${relatedStyle}`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
});

Tab.displayName = 'Tab';

const TabPanel: FC<TabPanelProps> = memo(({ children, value, selectedTab }) => {
  const isActive = useMemo<boolean>(() => value === selectedTab, [value, selectedTab]);

  const unactiveStyle = 'hidden';

  const relatedStyle = useMemo(() => (isActive ? '' : unactiveStyle), [isActive]);

  return <div className={`${relatedStyle} p-4`}>{children}</div>;
});

TabPanel.displayName = 'TabPanel';

export const Menu: FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  return (
    <section id="carte">
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="border-b">
          <div className="mb-16 max-w-3xl mx-auto px-4 text-center">
            <h2
              className="text-4xl lg:text-5xl font-bold font-heading text-gray-500"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              Notre carte
            </h2>
            <div className="p-10">
              <p
                className="text-gray-500"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Pour les amoureux de la Bretagne, vous pourrez déguster toute l&apos;année, nos
                galettes et crêpes issues du savoir-faire Bigouden.
              </p>
              <p
                className="text-gray-500"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Découvrez aussi notre sélection de glaces artisanales réalisées avec des ingrédients
                de qualité et des parfums délicieux.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
              <Tab
                label={'Nos galettes'}
                selectedTab={selectedTab}
                value={1}
                onClick={setSelectedTab}
              />
              <Tab
                label={'Nos crêpes'}
                selectedTab={selectedTab}
                value={2}
                onClick={setSelectedTab}
              />
              <Tab
                label={'Nos glaces'}
                selectedTab={selectedTab}
                value={3}
                onClick={setSelectedTab}
              />
              <Tab
                label={'Menu enfant'}
                selectedTab={selectedTab}
                value={4}
                onClick={setSelectedTab}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <TabPanel value={1} selectedTab={selectedTab}>
            <Image src={menuGalettes} alt="Menu galettes" />
          </TabPanel>
          <TabPanel value={2} selectedTab={selectedTab}>
            <Image src={menuCrepes} alt="Menu crêpes" />
          </TabPanel>
          <TabPanel value={3} selectedTab={selectedTab}>
            <Image src={menuGlaces} alt="Menu glâces" />
          </TabPanel>
          <TabPanel value={4} selectedTab={selectedTab}>
            <Image src={menuEnfant} alt="Menu enfant" />
          </TabPanel>
        </div>
      </div>
    </section>
  );
};

Menu.displayName = 'Menu';
