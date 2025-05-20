import { NavLink } from "react-router";

type Props = {
    link: string;
    title: string;
    className?: string;
    icon?: React.ReactNode;
};

export default function Link({ link, title, icon, className }: Props) {
    return (
        <NavLink to={link} className={`${className} list-none`}>
            {icon}
            {title}
        </NavLink>
    );
}
