import React from "react";
import Group from "../Zimages/Group-78.svg";
import stripes from "../Zimages/heading_stripes.svg";

const AboutSection = () => {
  return (
    <>
      <div className="bg-slate-500 h-screen-less">
        <div className="pl-24 mx-auto text-mpurple">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-16 font-montserrat">
            <div className="mt-16">
              <span className="inline-flex">
                <img src={stripes} alt="" className="h-10 lg:h-20" />
                <h2 className="text-3xl text-center font-bold lg:text-6xl lg:pt-4 lg:-ml-6 lg:text-left ">
                  About Us
                </h2>
              </span>

              <p className="mx-4 py-2 pl-12 text-sm text-black text-justify lg:leading-loose lg:pt-12 lg:mx-0 lg:text-lg">
                Given Al Madar's dedication to providing quality and service in
                all aspects of the company's operations, it intends to bring its
                more than 30 years of expertise to Al Madar Property Management.
                Al Madar Property Management began with internal programs to
                manage Al Madar Holding's diverse portfolio of properties. This
                comprises all sorts of properties, including commercial,
                residential, and industrial. As a result of our expansion, we
                want to provide outstanding service to property owners in the
                local and regional markets.
              </p>
            </div>

            <div className="h-screen-less">
              <img className="object-cover" src={Group} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
