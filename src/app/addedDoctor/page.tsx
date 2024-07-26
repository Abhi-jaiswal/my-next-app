import React from "react";
import {Sidebar} from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { DashboardPage } from "@/components/DashboardPage";
import { AddedDoctorPage } from "@/components/AddedDoctorPage";

const addedDoctor = () => {
  return (
    <div className="flex flex-row">
        <Sidebar/>
        <div>
            <Navbar/>
            <AddedDoctorPage/>
        </div>
    </div>
  )
}

export default addedDoctor;