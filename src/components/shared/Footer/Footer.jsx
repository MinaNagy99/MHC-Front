import React from "react";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-10 p-5 bg-mainGold text-white">
        <div className="col-span-2">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="col-span-5 flex items-start flex-col justify-center  ">
          <p className="text-sm">
            © 2024 Mosaic Holding Corporation , All rights reserved
          </p>
          <p className="text-lg font-semibold space-x-2">
            <span>Contact Us |</span>
            <span>Privacy Policy |</span>
            <span>Terms & Conditions |</span>
            <span>Cookie Policy |</span>
            <span>Region</span>
          </p>
        </div>
        <div className="col-span-3  justify-evenly  flex items-center">
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
