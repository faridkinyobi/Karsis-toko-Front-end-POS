import React from "react";
import TextInput from "../atoms/FormInput";
import Button from "../atoms/Button";
import SelectOption from "../atoms/SelectOption";

type ColumnDef = {
    name: string;
    indexData: string;
    render?: (
        value?: string | number | object | [],
        index?: number,
        items?: { [key: string | number]: string | number | [] | object }
    ) => React.ReactNode;
};

type Props = {
    coloms: ColumnDef[];
    sourceData: {
        [key: string | number]: string | number | [] | object;
    }[];
    searchable?: boolean;
};
const dataOpsi = [{ title: "10" }, { title: "8" }, { title: "5" }];

export default function DataTable({ coloms, sourceData, searchable }: Props) {
    return (
        <div className="py-3 bg-base-200">
            <div className=" mx-5 my-3 space-y-1">
                <div className="flex items-center justify-between  ">
                    <SelectOption
                        className="w-20"
                        optionData={dataOpsi}
                        placeholder="Show"
                    />
                    {searchable && (
                        <div className="flex flex-row items-center gap-3">
                            <TextInput
                                placeholder="search data"
                                name="text"
                                type="text"
                                className="w-72"
                            />
                            <Button className="btn-primary">Search</Button>
                            <Button className=" btn-outline"> Reset</Button>
                        </div>
                    )}
                </div>
            </div>
            <table className="table mx-2">
                <thead>
                    <tr className="bg-base-200 capitalize text-sm font-extrabold text-white">
                        {coloms?.map((colom: ColumnDef) => {
                            return (
                                <th key={`row ${colom.indexData}`}>
                                    {colom.name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sourceData?.length === 0 && (
                        <tr>
                            <td
                                className="text-center py-6"
                                colSpan={coloms.length}
                            >
                                No data available...{" "}
                                <span className="loading loading-dots loading-md"></span>
                            </td>
                        </tr>
                    )}
                    {sourceData?.map((items, i: number) => {
                        return (
                            <tr key={i}>
                                {coloms?.map((coloms: ColumnDef) => {
                                    const cellData = items[coloms.indexData];
                                    if (coloms?.render) {
                                        return (
                                            <td key={coloms.indexData}>
                                                {coloms?.render(
                                                    items[coloms.indexData],
                                                    i,
                                                    items
                                                )}
                                            </td>
                                        );
                                    }
                                    // data
                                    return (
                                        <td
                                            key={`data-row-${coloms.indexData}`}
                                        >
                                            {typeof cellData === "object" ||
                                            Array.isArray(cellData)
                                                ? JSON.stringify(cellData)
                                                : cellData}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
