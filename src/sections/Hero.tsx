import ArrowIcon from "@/assets/arrow-right.svg";
import cogImg from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20">
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010d3e] mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-20">
          <Image src={cogImg} alt="cog-image" />
        </div>
      </div>
    </section>
  );
};
