import { useState, useEffect } from "react";
import demoLogo from "../../../../assets/images/Cikka_Logo_Dashboard.png"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { axiosInstance } from "../../../../axiosInstance";
import { NavLink } from "react-router-dom";
import { DateFormate } from "../../../../components/DateFormate";
import { Status } from "../../../../components/Status";

const fetchServicesAppointment = (id) => {
    return axiosInstance
        .get(`/appointments?pageIndex=0&pageSize=20&&sortBy=id&sortOrder=DESC&serviceId=${id}`)
        .then((res) => res.data);
};

export const MerchantServiceAppointment = () => {
    const { id } = useParams();
    console.log(id);

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
        queryKey: ["merchantServicesAppointment", id],
        queryFn: () => fetchServicesAppointment(id),
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
                            <h2 className="mb-0 page-title">Merchant Services Appointment</h2>
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
                            {/* <button className="bttn" onClick={() => setShowAddModal(true)}>
                                Add
                            </button> */}
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
                                                    <th>Status</th>
                                                    <th>serviceId</th>
                                                    <th>service Name</th>
                                                    <th>User Name</th>
                                                    <th>Contact</th>
                                                    <th>SpecialRequest</th>
                                                    <th>StartTime</th>
                                                    <th>EndTime</th>
                                                    <th>"createdBy</th>
                                                    <th>updatedBy</th>
                                                    <th>createdAt</th>
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
                                                    data?.data?.map((p) => (
                                                        <tr key={p.id}>
                                                            <td>
                                                                <Status code={p.status} />
                                                            </td>
                                                            <td>{p.serviceId}</td>
                                                            <td>{p.name}</td>
                                                            <td>{p.user.firstName}</td>
                                                            <td>{p.user.mobileNumber}</td>
                                                            <td>{p.specialRequest}</td>
                                                            <td>{p.startTime}</td>
                                                            <td>{p.endTime}</td>
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
        </>
    );
};
