import ProductImg from "@/assets/product-image.png";
import PyramidImg from "@/assets/pyramid.png";
import TubeImg from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] ">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <Image src={ProductImg} alt="product-img" className="mt-10" />
          <Image
            src={PyramidImg}
            alt="pyramid-img"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={TubeImg}
            alt="tube-img"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
