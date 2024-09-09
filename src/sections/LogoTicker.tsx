import acmeLogo from "@/assets/logo-acme.png";
import quantmLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestalLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {" "}
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="acme" className="logo-ticker-img" />
            <Image src={quantmLogo} alt="quantm" className="logo-ticker-img" />
            <Image src={echoLogo} alt="echo" className="logo-ticker-img" />
            <Image
              src={celestalLogo}
              alt="clelestal"
              className="logo-ticker-img"
            />
            <Image src={pulseLogo} alt="pulse" className="logo-ticker-img" />
            <Image src={apexLogo} alt="apex" className="logo-ticker-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
