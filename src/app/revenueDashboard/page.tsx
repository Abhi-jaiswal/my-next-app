import React from "react";
import {Sidebar} from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { RevenuePage } from "@/components/RevenuePage";

const revenueDashboard = () => {
  return (
    <div className="flex flex-row">
        <Sidebar/>
        <div>
            <Navbar/>
            <RevenuePage/>
        </div>
    </div>
  )
}

export default revenueDashboard;