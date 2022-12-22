import { FC } from 'react';

import Image from 'next/image';

export const Formulas: FC = () => {
  return (
    <section id="formules">
      <div
        className="relative py-20 radius-for-skewed"
        style={{
          backgroundImage:
            "url('images/plat.jpeg?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900 radius-for-skewed opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-md text-center mx-auto">
            <h2
              className="text-4xl lg:text-5xl text-white font-bold font-heading"
              contentEditable="false"
              spellCheck="false"
              data-mci-spellchecked="true"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              Nos formules
            </h2>
            <div className="mb-6 max-w-sm mx-auto">
              <p
                className="leading-loose h-16 text-white"
                contentEditable="false"
                spellCheck="false"
                data-mci-spellchecked="true"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Description
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <p
                  className="leading-loose h-16 text-white"
                  contentEditable="false"
                  spellCheck="false"
                  data-mci-spellchecked="true"
                  style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
                >
                  Formules de la semaine
                </p>
                <a
                  className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 text-white font-semibold leading-loose transition duration-200 bg-red-400 hover:bg-red-500"
                  href="#"
                  spellCheck="false"
                >
                  Nos formules
                </a>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <p
                  className="leading-loose h-16 text-white"
                  contentEditable="false"
                  spellCheck="false"
                  data-mci-spellchecked="true"
                  style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
                >
                  Formule enfant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Formulas.displayName = 'Formulas';
