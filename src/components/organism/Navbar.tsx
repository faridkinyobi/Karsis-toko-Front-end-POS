// import React from "react";

// type Props = {};
import { BiLogOut, BiMenu } from "react-icons/bi";
import Button from "../atoms/Button";

export default function Navbar() {
    return (
        <nav className="navbar ">
            <div className="flex-1">
                <Button className="btn btn-sm btn-square btn-ghost">
                    <BiMenu size={23} />
                </Button>
            </div>
            <div className="flex-none">
                <Button className="btn btn-sm btn-square btn-ghost">
                    <BiLogOut size={20} />
                </Button>
            </div>
        </nav>
    );
}
