import { FC } from 'react';

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
          <div className="text-center mx-auto">
            <h2
              className="text-4xl lg:text-5xl text-white font-bold font-heading"
              style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
            >
              Nos formules
            </h2>
            <div className="mb-6 mx-auto">
              <p
                className="leading-loose h-auto text-white"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Pour nos formules, on vous emmène à l’essentiel, au fil des saisons.
              </p>
              <p
                className="leading-loose text-white"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Votre corps vous dira merci et vos papilles aussi !
              </p>
              <p
                className="leading-loose text-white"
                style={{ wordBreak: 'break-word', position: 'relative', zIndex: 0 }}
              >
                Et pour varier les plaisirs, nos formules sont renouvelées 2 fois par semaine.
              </p>
            </div>
            <a
              className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 text-white font-semibold leading-loose transition duration-200 bg-red-400 hover:bg-red-500"
              href="https://www.facebook.com/goutdouest"
            >
              Découvrir les formules du moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Formulas.displayName = 'Formulas';
