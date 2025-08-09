const logos = [
  { name: "Empresa Zen", src: "/placeholder.svg" },
  { name: "Mente Sã", src: "/placeholder.svg" },
  { name: "Corpo em Equilíbrio", src: "/placeholder.svg" },
  { name: "Vida Plena", src: "/placeholder.svg" },
];

export const TrustedBy = () => {
  return (
    <section id="trusted-by" className="py-20 bg-gray-50">
      <div className="container">
        <h3 className="text-center text-2xl font-semibold text-gray-600">
          Confiado por Empresas que se Importam com o Bem-Estar
        </h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img src={logo.src} alt={logo.name} className="h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};