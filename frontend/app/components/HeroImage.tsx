import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pb-5">
      <div className=" w-full relative h-125">
        <Image
          src="/front-image.png"
          alt="Ensemble portons l'amour Dieu"
          fill
          className="pt-10 object-cover object-center"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 h-7  bg-linear-to-t from-white via-white/70 to-transparent">
</div>     </div>
    </section>
  );
}