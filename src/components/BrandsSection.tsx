export const BrandsSection = () => {
  const brands = [
    "/brands/lg.svg",
    "/brands/samsung.svg",
    "/brands/whirlpool.svg",
    "/brands/voltas.svg",
    "/brands/haier.svg",
    "/brands/ifb.svg",
    "/brands/panasonic.svg",
    "/brands/star.svg",
    "/brands/daikin.svg",
    "/brands/havells-logo.svg",
    "/brands/crompton.svg",
    "/brands/philips.svg",
    "/brands/hitachi-2.svg",
    "/brands/tcl.svg",
    "/brands/sura.svg",
    "/brands/honeywell.svg",
    "/brands/ifa.svg",
  ];

  return (
    <section className="w-full bg-gradient-to-r from-white via-blue-50 to-green-50 py-10 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Brands We Work With
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-12 px-4">
          {brands.concat(brands).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Brand ${i}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
