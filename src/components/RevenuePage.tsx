import React from "react";
import { revenue_dashboard_graph } from "../data/data.json";
import { revenue_card } from "../data/data.json";
import {data_export_card} from '../data/data.json'
import {revenue_dashboard_pie_cart} from '../data/data.json'
import {revenue_table} from '../data/data.json'
import {compare_chats} from '../data/data.json'

export const RevenuePage = () => {
  return (
    <div className="bg-blue-50 w-[84vw] h-[100%] pl-[51px] pt-[36px] ml-[232.82px] mt-[50px]">
      <div className="text-[22px] text-bold">Revenue</div>

      <div className="flex gap-[15px] mt-[30px]">
        <div>
          {revenue_dashboard_graph.map((item, indx) => (
            <div
              key={indx}
              className="flex flex-col gap-[20px] w-[550px] bg-white rounded-[35px] px-[27px] py-[17px]"
            >
              <div className="flex justify-between">
                <div className="text-bold">{item.title}</div>
                <div className="flex gap-[7px] text-sm">
                  {item.dropDown.map((item, indx) => (
                    <div
                      key={indx}
                      className="border flex items-center gap-2 border-[#E0E0E0] rounded-[5px] py-[3px] px-[7px]"
                    >
                      {item.title}
                      <div>
                        <img src="/assets/dropDown.png" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="flex gap-[15px] justify-center">
                {item.label.map((item, indx) => (
                  <div key={indx} className="flex items-center gap-[5px]">
                    <div
                      className="rounded-full w-[15px] h-[15px]"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5">
          {revenue_card.map((item, indx) => (
            <div
              key={indx}
              className="flex flex-col justify-between w-[164px] h-[165px] bg-white rounded-xl px-[17px] py-[27px]"
            >
              <img src={item.img} alt={item.title} className="w-[45px]" />
              <div>
                <div className="text-sm text-[#929292] w-[137px]">{item.title}</div>
                <div className="text-bold">{item.amount}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between bg-white rounded-xl px-[20px] py-[17px]">
          {
            <div>
              <img src={`${data_export_card.img}`} alt={`${data_export_card.img}`}/>
            </div>
          }
          {
            <div className="flex items-center gap-2 border border-solid border-[#E0E0E0] rounded-[5px] py-[3px] px-[7px]">
              <p className="text-sm">{data_export_card.dropDown}</p>
              <img src="/assets/dropDown.png" alt="dropDown" className="w-[10px]"/>
            </div>
          }
          {
            <div>
              {
                data_export_card.option.map((item, indx) => (
                  <div
                    key={indx}
                    className="flex items-center gap-2 rounded-[5px] py-[3px] px-[7px]"
                  >
                    <input type="radio" id={`${item.title}`} name={`${item.title}`}/>
                    <label htmlFor={`${item.title}`} className="text-xs">{item.title}</label>
                  </div>
                ))
              }
            </div>
          }
          {
            <div>
              <button className="bg-[#26323C] w-full text-white rounded-[5px] py-[3px] px-[7px]">{data_export_card.btn}</button>
            </div>
          }
        </div>
      </div>

      <div className="flex gap-[15px] mt-[30px]">
          <div>
            {
              revenue_dashboard_pie_cart.map((item, indx) => (
                <div key={indx} className="flex flex-col w-[366px] gap-[15px] items-center bg-white rounded-[24px] py-[25px] px-[5px] justify-between">
                  <div className="flex flex-col gap-[10px]">
                    <div className="text-bold">
                      {item.title}
                    </div>
                    <div className="flex w-[130px] text-xs self-end items-center gap-2 border border-solid border-[#E0E0E0] rounded-[5px] py-[3px] px-[5px]">{item.dropDown.title} 
                      <img src="/assets/dropDown.png" alt="dropDown" className="w-[10px]"/>
                    </div>
                  </div>

                  <div><img src={item.img} alt={item.title}/></div>

                  <div className="grid grid-cols-2 gap-[10px]">
                    {
                      item.label.map((item, indx) => (
                        <div key={indx} className="flex items-center gap-[5px]">
                          <div
                            className="rounded-full w-[15px] h-[15px]"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="text-xs">{item.title}</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>

          <div className="flex flex-col gap-[40px]">
            <div className="">
              {
                revenue_table.map((item, indx) => (
                  <div key={indx} className="flex w-[780px] h-[90px] gap-[15px] items-center bg-white rounded-[17px] py-[18px] px-[29px] justify-between mb-[20px]">
                    <div className="text-bold">
                      {item.title}
                    </div>
                    <div className="text-bold bg-[#F7F7F7] rounded-[11px] py-[15px] px-[30px]">{item.amount}</div>
                  </div>
                ))
              }
            </div>

            <div className="flex justify-end">
              {
                <div className="flex items-center gap-[15px] bg-white rounded-[17px] py-[18px] px-[29px] w-[250px] h-[70px] ">
                  <img src={`${compare_chats.img}`} alt={`${compare_chats.img}`} className="w-[30px] h-[30px]"/>
                  <div>
                    {compare_chats.title}
                  </div>
                </div>
              }
            </div>
          </div>
      </div>
    </div>
  );
};
