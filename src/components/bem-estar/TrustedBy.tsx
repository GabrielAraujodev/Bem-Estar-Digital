export const TrustedBy = () => {
  const logos = [
    { name: "Unimed", src: "https://logo.clearbit.com/unimed.coop.br" },
    { name: "Bradesco Seguros", src: "https://logo.clearbit.com/bradescoseguros.com.br" },
    { name: "Natura", src: "https://logo.clearbit.com/natura.com.br" },
    { name: "Magazine Luiza", src: "https://logo.clearbit.com/magazineluiza.com.br" },
  ];

  return (
    <section id="sobre" className="py-12 lg:py-24 bg-gray-50">
      <div className="container">
        <h3 className="text-center text-lg font-semibold text-muted-foreground">
          Já ajudamos milhares de brasileiros a transformar suas vidas:
        </h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img src={logo.src} alt={logo.name} className="h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};