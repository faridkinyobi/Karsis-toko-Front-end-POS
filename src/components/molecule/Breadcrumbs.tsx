
import Link from "../atoms/Link";
import { BiHomeAlt2 } from "react-icons/bi";
import Button from "../atoms/Button";
type Data = {
    link: string;
    title: string;
};
type Props = {
    dataList: Data[];
};

export default function Breadcrumbs({ dataList }: Props) {
    return (
        <div className="flex items-center justify-between my-3.5">
            <div className=" breadcrumbs text-sm">
                <ul>
                    <li>
                        <Link
                            link="/"
                            title={"Home"}
                            icon={<BiHomeAlt2 size={20} />}
                        />
                    </li>
                    {dataList.map((items, index) => {
                        return (
                            <li key={index}>
                                <Link link={items.link} title={items.title} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Button className=" btn-primary w-36">add data</Button>
        </div>
    );
}
