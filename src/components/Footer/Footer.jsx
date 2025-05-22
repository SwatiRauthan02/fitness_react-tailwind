import React from "react";
import footerLogo from "../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <div className="bg-[#1B1B1B] pt-[14px]">
      <div className="footerContainer bg-black rounded-t-[80px] pt-[128px] pb-[58px]">
        <section className="container">
          <div className="flex gap-[162px]">
            <div className="footerLogo w-[599px]">
              <img src={footerLogo} alt="footerLogo" className="w-[331px]" />
              <p className="text-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="footer-links flex gap-[152px]">
              <ul className="text-[18px] flex flex-col gap-[39px]">
                <h3 className="text-[23px] font-bold leading-[120%]">
                  Get Started
                </h3>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contact US</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">About US</a>
                </li>
              </ul>
              <ul className="text-[18px] flex flex-col gap-[39px]">
                <h3 className="text-[23px] font-bold leading-[120%]">
                  Get Started
                </h3>
                <li>
                  <a href="#">Fitness</a>
                </li>
                <li>
                  <a href="#">Platform</a>
                </li>
                <li>
                  <a href="#">Workout Library</a>
                </li>
                <li>
                  <a href="#">App Design</a>
                </li>
              </ul>
              <ul className="text-[18px] flex flex-col gap-[39px]">
                <h3 className="text-[23px] font-bold leading-[120%]">
                  Get Started
                </h3>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <hr  className="border-1 border-white mt-[197px] mb-[30px] "/>
          <div className="copyright flex justify-between text-[23px] font-medium">
            <p>2024 MaxFit</p>
            <ul className="flex gap-[16px]">
                <li><a href="#">Twitter</a></li>-
                <li><a href="#">Instagram</a></li>-
                <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
