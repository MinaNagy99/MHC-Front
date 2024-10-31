import React from "react";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-10 grid-cols-1 p-5 gap-y-5 bg-mainGold text-white">
        <div className="md:col-span-2 col-span-1 flex justify-center ">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="md:col-span-5 col-span-1 flex md:items-start items-center flex-col justify-center  ">
          <p className="text-sm">
            © 2024 Mosaic Holding Corporation , All rights reserved
          </p>
          <p className="text-lg md:text-start text-center font-semibold space-x-2">
            <span>Contact Us |</span>
            <span>Privacy Policy |</span>
            <span>Terms & Conditions |</span>
            <span>Cookie Policy |</span>
            <span>Region</span>
          </p>
        </div>
        <div className="md:col-span-3 col-span-1  justify-evenly  flex items-center">
          <div className="grid grid-cols-4  justify-evenly">
            <div className="col-span-1 mx-2  flex justify-center items-center">
              <i class="fa-brands fa-instagram text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
            </div>
            <div className="col-span-1 mx-2  flex justify-center items-center">
              <i class="fa-brands fa-facebook text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
            </div>
            <div className="col-span-1 mx-2  flex justify-center items-center">
              <i class="fa-brands fa-x-twitter text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
            </div>
            <div className="col-span-1 mx-2  flex justify-center items-center">
              <i class="fa-brands fa-linkedin text-white rounded-full p-2 text-xl border-white border-[3px]"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
