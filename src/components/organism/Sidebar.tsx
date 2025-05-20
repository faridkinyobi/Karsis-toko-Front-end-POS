import React from "react";
import MenuLink from "../molecule/MenuLink";
import { BiGridAlt, BiPackage, BiBrain } from "react-icons/bi";

export default function Sidebar() {
    return (
        <div className="bg-base-300 w-[20%] min-h-full overflow-hidden ">
            <div className="mx-auto py-4 px-6 space-y-5   ">
                <div className="text-2xl text-center font-bold text-orange-100 py-1 px-2 flex gap-3 items-center ">
                    <div className="w-7 h-7 bg-blue-100 rotate-45 rounded-sm flex items-center justify-center">
                        <BiBrain className="text-black" />
                    </div>
                    KaRsir
                </div>
                <div>
                    <MenuLink
                        link="/dashboard"
                        title="Dashboard"
                        icon={<BiGridAlt />}
                    />
                    <MenuLink
                        link="/dashboard/products"
                        title="Products"
                        icon={<BiPackage />}
                        items={[
                            {
                                link: "/dashboard/products",
                                title: "All Products",
                            },
                            {
                                link: "/dashboard/products/create",
                                title: "Add New Product",
                            },
                            {
                                link: "/dashboard/categories",
                                title: "Categories",
                            },
                        ]}
                    />
                    <MenuLink
                        link="/dashboard/catagory"
                        title="Catagory"
                        icon={<BiPackage />}
                        items={[
                            {
                                link: "/dashboard/products",
                                title: "All Catagory",
                            },
                            {
                                link: "/dashboard/products/create",
                                title: "Add New Catagory",
                            },
                        ]}
                    />
                    <MenuLink
                        link="/dashboard/user"
                        title="User"
                        icon={<BiPackage />}
                        items={[
                            {
                                link: "/dashboard/products",
                                title: "All User",
                            },
                            {
                                link: "/dashboard/products/create",
                                title: "Add New User",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
