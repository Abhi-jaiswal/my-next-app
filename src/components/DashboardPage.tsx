import React from "react";
import { top_card } from "../data/data.json";
import { dashboard_graph } from "../data/data.json";
import { dashboard_bar_graph } from "../data/data.json";
import { Consultation_Insights } from "../data/data.json";
import { other_costs } from "../data/data.json";
import { compare_chats } from "../data/data.json";

export const DashboardPage = () => {
  return (
    <div className="bg-blue-50 w-[84vw] min-h-[85vh] h-full pl-[51px] pt-[36px] ml-[232.82px] mt-[50px]">
      <div className="h-[179px] gap-[19px] flex ">
        {top_card.map((item, indx) => (
          <div
            className="h-[140px] w-[160px] bg-white flex flex-col items-center justify-center rounded-[18px] py-[15px] px-[30px]"
            key={indx}
          >
            <img src={item.img} alt={item.title} />
            <p className="text-[20px] text-bold"> {item.count}</p>
            <div className="text-[10px] text-[#929292]"> {item.title}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-[20px] text-sm">
        {dashboard_graph.map((item, indx) => (
          <div
            key={indx}
            className="flex flex-col gap-[10px] h-[350px] w-[550px] py-[17px] px-[27px] bg-[#FFFFFF] rounded-[18px]"
          >
            <div className="flex justify-between">
              <div className="text-bold">{item.title}</div>
              <div className="flex gap-[7px]">
                {item.filters.map((item, indx) => (
                  <div
                    key={indx}
                    className="bg-[#FAFBFF] py-[3px] px-[7px] rounded-[5px] text-xs flex gap-2 items-center"
                  >
                    {item.title}
                    {item.dropDown === "1" ? (
                      <img
                        src="/assets/dropDown.png"
                        alt="dropDown"
                        className="h-[5px]"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={item.img} alt={item.title} className="h-[265px]" />
            </div>
            <div className="flex justify-center gap-4">
              {item.label
                ? [
                    item.label.map((item, indx) => (
                      <div
                        key={indx}
                        className="text-[#929292] text-xs flex gap-2"
                      >
                        <div
                          className={`min-w-[16px] rounded-full`}
                          style={{ backgroundColor: item.color }}
                        />
                        <div>{item.title}</div>
                      </div>
                    )),
                  ]
                : null}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[20px] text-sm mt-[30px]">
        {dashboard_bar_graph.map((item, indx) => (
          <div
            className="flex flex-col gap-4 bg-white w-[420px] h-[350px] px-[35px] py-[20px] rounded-[20px] items-center"
            key={indx}
          >
            <div className="text-bold">{item.title}</div>
            <div className="flex justify-between">
              {item.filters.map((item, indx) => (
                <div
                  key={indx}
                  className="text-[#929292] text-xs border border-solid border-[#E0E0E0] rounded-[5px] py-[3px] px-[7px]"
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div className="flex justify-center gap-3">
              {item.label.map((item, indx) => (
                <div key={indx} className="text-[#929292] text-xs flex gap-1">
                  <div
                    className="min-w-[16px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {
          <div className="flex flex-col w-[300px] px-[22px] py-[20px] h-[350px] gap-4 bg-white rounded-[20px]">
            <div className="text-bold flex self-center">
              {Consultation_Insights.title}
            </div>
            <div className="flex flex-col gap-[10px]">
              {Consultation_Insights.lists.map((item, indx) => (
                <div key={indx} className="flex gap-3 items-center">
                  <div
                    className="py-[7px] px-[12px] rounded-[8px]"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.count}
                  </div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-[12px] items-center justify-center">
              <div className="flex gap-2 items-center text-xs border border-solid border-[#E0E0E0] rounded-[5px] py-[7px] px-[9px]">
                {Consultation_Insights.dropDown.title}
                <img
                  src="/assets/dropDown.png"
                  alt="dropDown"
                  className="h-[7px]"
                />
              </div>
              <img
                src={Consultation_Insights.img}
                alt={Consultation_Insights.title}
                className="h-[20px]"
              />
            </div>
          </div>
        }
        {
          <div className="flex flex-col gap-[40px]">
            <div className="w-[360px] h-[270px] bg-white px-[15px] py-[23px] rounded-[22px] flex flex-col items-center gap-[15px]">
              <div className="text-bold">{other_costs.title}</div>
              <div className="flex flex-col gap-[15px]">
                {other_costs.lists.map((item, indx) => (
                  <div key={indx} className="flex flex-col gap-2">
                    <div className="text-xs text-bold self-start">{item.title}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {item.costs.map((item, indx) => (
                        <div key={indx} className="flex gap-2">
                          <div className="text-xs text-[#818181]">{item.title}</div>
                          <div className="text-xs text-bold">{item.cost}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#818181] text-xs">{other_costs.last_updated}</div>
            </div>

            <div className="flex justify-end">
              {
                <div className="flex items-center gap-[15px] bg-white rounded-[17px] py-[18px] px-[29px] w-[250px] h-[70px] ">
                  <img
                    src={`${compare_chats.img}`}
                    alt={`${compare_chats.img}`}
                    className="w-[30px] h-[30px]"
                  />
                  <div>{compare_chats.title}</div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
};
