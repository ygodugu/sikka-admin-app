import { useState, useEffect } from "react";
import demoLogo from "../../assets/images/Cikka_Logo_Dashboard.png"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "react-bootstrap/Spinner";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { EditIcon } from "../../components/EditIcon";
import { Status } from "../../components/Status";
import { AddServicesModal } from "./AddService";
import { EditServicesModal } from "./EditService";

const fetchServices = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {
    return axiosInstance
        .get(`/services?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
        .then((res) => res.data);
};

export const Services = () => {
    const queryClient = useQueryClient();

    const [page, setPage] = useState(0);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [ServicesId, setServicesId] = useState();
    const [search, setSearch] = useState("");
    const [selectValueID, setSelectValueID] = useState("");
    const [selectValueOrder, setSelectValueOrder] = useState("");
    const [selectValueStatus, setSelectValueStatus] = useState("");
    const [showError, setShowError] = useState(false);
    const pageSize = 20;

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["Services", page, search, selectValueID, selectValueOrder, selectValueStatus],
        queryFn: () => fetchServices(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
        keepPreviousData: true,
    });

    const handleAddClick = () => setShowAddModal(true);

    const handleAddServicesSuccess = () => {
        setShowAddModal(false);
        refetch();
    };

    const handleUpdateServicesSuccess = () => {
        queryClient.invalidateQueries({
            queryKey: ["Services-details", ServicesId],
        });
        setShowEditModal(false);
        refetch();
    };

    const handleEditClick = (id) => () => {
        setServicesId(id);
        setShowEditModal(true);
    };

    const handleSearchChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        refetch();
    };

    const handleSelectIDChange = (event) => {
        const newSelectID = event.target.value;
        setSelectValueID(newSelectID);
        console.log(newSelectID);
        refetch();
    };

    const handleSelectOrderChange = (event) => {
        const newSelectOrder = event.target.value;
        setSelectValueOrder(newSelectOrder);
        console.log(newSelectOrder);
        refetch();
    };

    const handleSelectStatusChange = (event) => {
        const newSelectStatus = event.target.value;
        setSelectValueStatus(newSelectStatus);
        console.log(newSelectStatus);
        refetch();
    };


    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/users?pageIndex=0&pageSize=1400")
            .then((res) => res.data)
            .then((data) => {
                setUsersData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);


    const [merchatData, setMerchatData] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/merchants?pageIndex=0&pageSize=200")
            .then((res) => res.data)
            .then((data) => {
                setMerchatData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const modifyImageUrl = (originalUrl, folderName) => {
        let parts = originalUrl.split('?');
        let fileName = parts[1].split('=')[1];
        let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

        return newUrl;
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row heading-add">
                        <aside className="ml-2 mr-2">
                            <h2 className="mb-0 page-title">Services</h2>
                        </aside>
                        <form className="form-inline  mr-auto searchform">
                            <input
                                className="form-control mr-sm-2 border-0"
                                onChange={handleSearchChange}
                                type="text"
                                style={{ background: "white" }}
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                        <aside className="col-sm-2 add-sec">
                            <button className="bttn" onClick={() => setShowAddModal(true)}>
                                Add
                            </button>
                        </aside>
                    </div>
                    <div className="d-flex flex-wrap">
                        <aside className="col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
                            <select className="form-control" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                                <option value="">sortBy</option>
                                <option value="id">ID</option>
                            </select>
                        </aside>
                        <aside className="col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
                            <select className="form-control" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                                <option value="">sortOrder</option>
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </aside>
                        <aside className="col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
                            <select className="form-control" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                                <option value="">STATUS</option>
                                <option value="1">Active</option>
                                <option value="2">Hold</option>
                                <option value="0">Deleted</option>
                            </select>
                        </aside>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-body">
                                    <div className="resp-table services-tb">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Actions</th>
                                                    <th>Status</th>
                                                    <th>Image</th>
                                                    <th>ID</th>
                                                    <th>Merchant-UserId</th>
                                                    <th>Name</th>
                                                    <th>duration</th>
                                                    <th>Description</th>
                                                    <th>Rank</th>
                                                    <th>CreatedBy</th>
                                                    <th>UpdatedBy</th>
                                                    <th>CreatedAt</th>
                                                    <th>UpdatedAt</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {isLoading ? (
                                                    <tr>
                                                        <td rowSpan="10" colSpan="15">
                                                            <div className="text-center py-5">
                                                                <Spinner animation="border" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    data.data.map((p) => (
                                                        <tr key={p.id}>
                                                            <td className="actions">
                                                                <EditIcon onClick={handleEditClick(p.id)} />
                                                            </td>
                                                            <td>
                                                                <Status code={p.status} />
                                                            </td>
                                                            <td>
                                                                {p.fileUpload && p.fileUpload.filePath ? (
                                                                    <img src={modifyImageUrl(p.fileUpload.filePath, p.fileUpload.folderName)} alt="logo" className="circle-logo" />
                                                                ) : (
                                                                    <img src={demoLogo} alt='demoLogo' className="circle-logo" />
                                                                )}
                                                            </td>
                                                            <td>{p.id}</td>
                                                            {/* <td>{p.merchantUserId}</td> */}
                                                            <td>
                                                                {merchatData && merchatData.data && merchatData.data.find(merchant => merchant.userId === p.merchantUserId) ? (
                                                                    (() => {
                                                                        const merchant = merchatData.data.find(merchant => merchant.userId === p.merchantUserId);
                                                                        return `${merchant.tradeName || 'N/A'}`;
                                                                    })()
                                                                ) : p.createdBy}
                                                            </td>
                                                            <td>{p.name}</td>
                                                            <td>{p.duration}</td>
                                                            <td>{p.description}</td>
                                                            <td>{p.rank}</td>
                                                            <td>
                                                                {usersData && usersData.data && usersData.data.find(user => user.id === p.createdBy) ? (
                                                                    (() => {
                                                                        const user = usersData.data.find(user => user.id === p.createdBy);
                                                                        return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                                                    })()
                                                                ) : p.createdBy}
                                                            </td>
                                                            <td>
                                                                {usersData && usersData.data && usersData.data.find(user => user.id === p.updatedBy) ? (
                                                                    (() => {
                                                                        const user = usersData.data.find(user => user.id === p.updatedBy);
                                                                        return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                                                    })()
                                                                ) : p.updatedBy}
                                                            </td>
                                                            <td>{<DateFormate dateTime={p.createdAt} />}</td>
                                                            <td>{<DateFormate dateTime={p.updatedAt} />}</td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {!isLoading ? (
                                        <CustomPagination
                                            page={page}
                                            pageSize={pageSize}
                                            data={data}
                                            setPage={setPage}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAddModal ? (
                <AddServicesModal
                    handleSuccess={handleAddServicesSuccess}
                    handleClose={() => setShowAddModal(false)}
                />
            ) : null}
            {showEditModal ? (
                <EditServicesModal
                    handleSuccess={handleUpdateServicesSuccess}
                    id={ServicesId}
                    handleClose={() => setShowEditModal(false)}
                />
            ) : null}
        </>
    );
};
