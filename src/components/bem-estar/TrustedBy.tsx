const logos = [
  { name: "Empresa A", src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg", alt: "Transistor" },
  { name: "Empresa B", src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg", alt: "Reform" },
  { name: "Empresa C", src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg", alt: "Tuple" },
  { name: "Empresa D", src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg", alt: "SavvyCal" },
  { name: "Empresa E", src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg", alt: "Statamic" },
];

export const TrustedBy = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
          Confiado por empresas que se importam com o bem-estar
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img
                className="max-h-12 w-full object-contain"
                src={logo.src}
                alt={logo.alt}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};