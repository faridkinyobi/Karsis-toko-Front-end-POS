import React from "react";
import Sidebar from "../components/organism/Sidebar";
import Navbar from "../components/organism/Navbar";

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="w-full flex overflow-hidden">
            <Sidebar />
            <div className=" w-5xl mx-auto">
                <Navbar />
                <div className="  overflow-hidden min-h-full">{children}</div>
            </div>
        </div>
    );
}
