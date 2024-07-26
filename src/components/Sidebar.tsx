import React from "react";
import { sidebar_main } from "../data/data.json";
import { sidebar_footer } from "../data/data.json";

export const Sidebar = () => {
  return (
    <div className="text-white bg-[#53564E] h-[100vh] w-[232.82px] fixed top-0 left-0">
      {/* //header */}
      <div className="min-h-full flex flex-col">
        <div className="py-[17.34px] pl-[6px]">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="bg-transparent w-[220px] h-[41px] rounded-lg object-cover"
          />
        </div>
        <div className="mx-[23px] mt-[30px] min-h-[80vh] flex flex-col justify-between">
            <div>
            {
              sidebar_main.map((item,indx) => (
                <div className="flex gap-3 p-[5px] items-center" key={indx}>
                    <img src={item.img} alt={item.title} className="w-[17px] h-[17px] "/>
                    <p>{item.title}</p>
                </div>
              ))
            }
            </div>
            
            <div className="flex gap-3 items-center">
                <img src={`${sidebar_footer.img}`} alt={`${sidebar_footer.title}`} className="w-[17px] h-[17px]"/>
                <p>{sidebar_footer.title}</p>
            </div>
        </div>
      </div>

      {/* //footer */}
      <div></div>
    </div>
  );
};
