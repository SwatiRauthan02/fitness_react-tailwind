import React from "react";
import google from "../../assets/google.svg";
import meta from "../../assets/Meta.svg";
import netflix from "../../assets/Netflix.svg";
import paypal from "../../assets/Paypal.svg";
import microsoft from "../../assets/Microsoft.svg";

const Brand = () => {
  const brands = [google, meta, netflix, paypal, microsoft];
  return (
    <>
      <section className="container flex gap-40 py-[50px]">
        {brands.map((brand,i) => (
        <img src={brand} alt="brand-img" key={i} height='59px' width='179px' />
        ))}
      </section>
    </>
  );
};

export default Brand;
