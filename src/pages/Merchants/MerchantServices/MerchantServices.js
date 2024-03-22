import { useState, useEffect } from "react";
import demoLogo from "../../../assets/images/Cikka_Logo_Dashboard.png"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { axiosInstance } from "../../../axiosInstance";
import { NavLink } from "react-router-dom";
import { CustomPagination } from "../../../components/CustomPagination";
import { DateFormate } from "../../../components/DateFormate";
import { EditIcon } from "../../../components/EditIcon";
import { Status } from "../../../components/Status";
import { AddMerchantServicesModal } from "./AddMerchantServices";
import { EditMerchantServicesModal } from "./EditMerchantServices";

const fetchServices = (userId) => {
    return axiosInstance
        .get(`/services/merchant-user-id?merchantUserId=${userId}`)
        .then((res) => res.data);
};

export const MerchantServices = () => {
    const { userId } = useParams();
    console.log(userId);

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
        queryKey: ["merchantServices", userId],
        queryFn: () => fetchServices(userId),
        keepPreviousData: true,
    });

    const handleAddClick = () => setShowAddModal(true);

    const handleAddServicesSuccess = () => {
        setShowAddModal(false);
        refetch();
    };

    const handleUpdateServicesSuccess = () => {
        queryClient.invalidateQueries({
            queryKey: ["merchantServices-details", ServicesId],
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
            .get("/users")
            .then((res) => res.data)
            .then((data) => {
                setUsersData(data);
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
                <aside className="col-md-12 mt-3 mb-3">
                    <NavLink to={`/Merchants`}>
                        <i className="fe fe-arrow-left-circle fe-24"></i>
                    </NavLink>
                </aside>
                <div className="col-12">
                    <div className="row heading-add">
                        <aside className="ml-2 mr-2">
                            <h2 className="mb-0 page-title">Merchant Services</h2>
                        </aside>
                        <form className="form-inline mr-auto searchform">
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
                                                    data?.services?.map((p) => (
                                                        <tr key={p.id}>
                                                            <td className="actions">
                                                                <EditIcon onClick={handleEditClick(p.id)} />
                                                                <NavLink to={`/MerchantServiceAppointmentBlocking/${p.id}/${userId}`}>
                                                                    <i className="fe fe-x fe-16 icon"></i>
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <Status code={p.status} />
                                                            </td>
                                                            <td>
                                                                {p.fileUpload && p.fileUpload.filePath ? (
                                                                    <img src={modifyImageUrl(p.fileUpload.filePath, p.fileUpload.folderName)} alt="logo" className="table-logo" />
                                                                ) : (
                                                                    <img src={demoLogo} alt='demoLogo' className="table-logo" />
                                                                )}
                                                            </td>
                                                            <td>{p.id}</td>
                                                            <td>{p.merchantUserId}</td>
                                                            <td>{p.name}</td>
                                                            <td>{p.duration}</td>
                                                            <td>{p.description}</td>
                                                            <td>{usersData?.data?.find(user => user.id === p.createdBy)?.firstName || 'N/A'}</td>
                                                            <td>{usersData?.data?.find(user => user.id === p.updatedBy)?.firstName || 'N/A'}</td>
                                                            <td>{<DateFormate dateTime={p.createdAt} />}</td>
                                                            <td>{<DateFormate dateTime={p.updatedAt} />}</td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* {!isLoading ? (
                                        <CustomPagination
                                            page={page}
                                            pageSize={pageSize}
                                            data={data}
                                            setPage={setPage}
                                        />
                                    ) : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAddModal ? (
                <AddMerchantServicesModal
                    handleSuccess={handleAddServicesSuccess}
                    handleClose={() => setShowAddModal(false)}
                    merchantUserId={userId}
                />
            ) : null}
            {showEditModal ? (
                <EditMerchantServicesModal
                    handleSuccess={handleUpdateServicesSuccess}
                    id={ServicesId}
                    handleClose={() => setShowEditModal(false)}
                />
            ) : null}
        </>
    );
};
