import { Check, SquareCheckBig, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import img2 from "../../assets/img2.jpg";

export default function Plans({ contents }) {
  console.log(contents);

  return (
    <div className="bg-[#1B1B1B] mx-7 rounded-[80px] py-[84px] flex flex-col gap-[86px]">
      <h1 className="text-[61px] font-bold text-center">Choose Your Plan</h1>
      <section className="container flex gap-[99px] items-center justify-center">
        {contents.map((item, i) => (
          <Card
            key={i}
            className="w-[395px] !py-0 rounded-[70px] overflow-hidden bg-gradient-to-b from-black to-black text-white shadow-lg"
          >
            <div className="flex flex-col items-center w-full relative">
              <img src={item.img} alt="Basic Plan" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1B1B1B]/70 to-transparent" />

              <span className="mt-2 text-white text-[36px] font-bold absolute bottom-0">
                {item.title}
              </span>
            </div>

            <CardContent className="  flex flex-col items-center text-center gap-4">
              {/* <div className="flex flex-col items-center w-full relative">
                <img
                  src={img2}
                  alt="Basic Plan"
                  // className=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1B1B1B]/70 to-transparent" />

                <span className="mt-2 text-white text-lg font-semibold absolute bottom-0">
                  Basic
                </span>
              </div> */}

              {/* Pricing */}
              <div className="text-3xl font-bold text-white">
                <span className="text-white">{item.price}</span>
                <span className="text-orange-500 text-base font-medium">
                  /mount
                </span>
              </div>

              {/* Description */}
              {/* <p className="border-white w-[200px] h-[10px] " ></p> */}
              <p className="text-[16px] text-gray-300 text-left">
                {item.description}
              </p>

              
              {/* Features List */}
              <div className="space-y-2 text-[16px] w-full text-left items-center flex flex-col gap-[26px]">
                <FeatureItem
                  icon={<Check className="w-4  h-4 bg-orange-500 text-black" />}
                  text="Lorem Ipsum is simply dummy text"
                />
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FeatureItem
                    key={idx}
                    icon={<X className="w-4 h-4 text-black bg-white" />}
                    text="Lorem Ipsum is simply dummy text"
                  />
                ))}
              </div>

              {/* Button */}
              <Button className="w-[285px] h-[47px] rounded-[25px] mt-5 mb-[50px]  text-white bg-transparent text-[22px] flex items-center" variant={'btn'}>
                Get Started <span className="ml-2 text-center">→</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-white text-xs">{text}</span>
    </div>
  );
}
