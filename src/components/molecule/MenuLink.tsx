import type React from "react";
import Link from "../atoms/Link";

type Props = {
    title: string;
    icon?: React.ReactNode;
    items?: {
        title: string;
        link: string;
        [key: string]: unknown;
    }[];
    link: string;
};

export default function MenuLink({ title, link, icon, items }: Props) {
    return (
        <ul className="menu capitalize">
            <li className=" list-none  cursor-pointer w-52">
                {(items ?? []).length > 0 ? (
                    <details open>
                        <summary className=" flex w-full justify-between">
                            <div className="flex items-center gap-2">
                                {icon}
                                {title}
                            </div>
                        </summary>
                        <ul className=" border-l ">
                            {(items ?? []).map((item, index) => (
                                <li key={`menu-item-${index}`}>
                                    <Link link={item.link} title={item.title} />
                                </li>
                            ))}
                        </ul>
                    </details>
                ) : (
                    <Link
                        link={link}
                        title={title}
                        icon={icon}
                        className="flex items-center gap-2 text-base"
                    />
                )}
            </li>
        </ul>
    );
}
