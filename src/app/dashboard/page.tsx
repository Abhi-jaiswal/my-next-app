import React from "react";
import {Sidebar} from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { DashboardPage } from "@/components/DashboardPage";

const dashboard = () => {
  return (
    <div className="flex flex-row">
        <Sidebar/>
        <div>
            <Navbar/>
            <DashboardPage/>
        </div>
    </div>
  )
}

export default dashboard;