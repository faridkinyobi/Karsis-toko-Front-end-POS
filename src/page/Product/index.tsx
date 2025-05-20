import React from "react";
import DataTable from "../../components/molecule/DataTable";
import DashboardLayout from "../../Layout/DashboardLayout";
import Breadcrumbs from "../../components/molecule/Breadcrumbs";
import Pagination from "../../components/molecule/Pagination";
import Button from "../../components/atoms/Button";

const users = [
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Budi", emails: "budi@mail.com", roles: "user" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
    { name1: "Adit", emails: "adit@mail.com", roles: "admin" },
];

// type Props = {};
// {}: Props
export default function index() {
    const handlePageChang = () => {};
    return (
        <DashboardLayout>
            <Breadcrumbs
                dataList={[
                    { link: "home", title: "home" },
                    { link: "home", title: "home" },
                ]}
            />
            <DataTable
                searchable={true}
                sourceData={users}
                coloms={[
                    {
                        name: "no",
                        indexData: "no",
                        render: (_, i = 0) => 1 + i,
                    },
                    { name: "name", indexData: "name1" },
                    { name: "eamil", indexData: "emails" },
                    { name: "role", indexData: "roles" },
                    {
                        name: "aksi",
                        indexData: "aksi",
                        render: () => (
                            <span className="space-x-1.5">
                                <Button
                                    onClick={() => alert("clicked!")}
                                    className="btn-sm btn-warning"
                                >
                                    edit
                                </Button>
                                <Button
                                    onClick={() => alert("clicked!")}
                                    className="btn-sm btn-error"
                                >
                                    hapus
                                </Button>
                            </span>
                        ),
                    },
                ]}
            />
            <Pagination
                currentPage={5}
                totalPage={20}
                onPageChange={() => handlePageChang()}
            />
        </DashboardLayout>
    );
}
