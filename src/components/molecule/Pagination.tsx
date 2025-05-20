import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type Props = {
    currentPage: number;
    totalPage: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPage,
    onPageChange,
}: Props) {
    const [pages, setPages] = React.useState<(number | string)[]>([]);

    React.useEffect(() => {
        const pageNumber = [];
        if (currentPage <= 3) {
            for (let i = 1; i <= totalPage; i++) {
                pageNumber.push(i);
            }
        } else {
            if (currentPage > 7) pageNumber.push(1, 2, 3, "...");
            for (
                let i = Math.max(1, currentPage - 2);
                i <= Math.min(totalPage, currentPage + 2);
                i++
            ) {
                pageNumber.push(i);
            }
            if (currentPage < totalPage - 2) pageNumber.push("...", totalPage);
        }
        setPages(pageNumber);
    }, [currentPage, totalPage]);

    return (
        <div className="my-2.5 flex justify-between items-center">
            <Text>
                total row: {totalPage} page:{currentPage} of {totalPage}
            </Text>
            <div className="join">
                <Button className="join-item btn " disable={currentPage === 1}>
                    Previous page
                </Button>
                {pages.map((itemsNumbar, index) => {
                    return (
                        <Button key={index} className="join-item btn">
                            {itemsNumbar}
                        </Button>
                    );
                })}
                <Button
                    className="join-item btn"
                    disable={currentPage === totalPage}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
