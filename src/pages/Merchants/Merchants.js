import { useState, useEffect } from "react";
import demoLogo from "../../assets/images/Cikka_Logo_Dashboard.png"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditIcon } from "../../components/EditIcon";
import { ViewIcon } from "../../components/ViewIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { Status } from "../../components/Status";
import { AddMerchantModal } from "./AddMerchant";
import { EditMerchantModal } from "./EditMerchant";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { NavLink } from "react-router-dom";


const fetchMerchants = (selectValue, pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {

  let url = `merchants?&pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`

  if (selectValue) {
    url += `&merchantTypes=${selectValue}`;
  }

  return axiosInstance
    .get(url)
    .then((res) => res.data);
};

export const Merchants = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [userId, setUserId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["merchants", page, selectValue, search, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchMerchants(selectValue, page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

  const handleAddUserSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateUserSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["merchant-details", userId] });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setUserId(id);
    setShowEditModal(true);
  };

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    refetch();
  };

  const handleSelectChange = (event) => {
    const newSelect = event.target.value;
    setSelectValue(newSelect);
    console.log(newSelect);
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
      .get("/users?pageIndex=0&pageSize=800")
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

  const modifyImageUrl_SquareLogo = (originalUrl, folderName) => {
    let parts = originalUrl.split('?');
    let fileName = parts[1].split('=')[1];
    let newUrlsquareLogo = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

    return newUrlsquareLogo;
  };

  return (
    <>
      {showError ? (
        <Alert variant="danger" onClose={() => showError(false)}>
          <Alert.Heading>Server Error!</Alert.Heading>
          <p>Can not user</p>
        </Alert>
      ) : null}

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="ml-2 mr-2">
              <h2 className="mb-0 page-title" style={{ display: "inline" }}>
                Merchants
              </h2>
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
            <aside className="col-sm-2 mt-2  add-sec">
              <button className="bttn" onClick={() => setShowAddModal(true)}>
                Add
              </button>
            </aside>
          </div>

          <div className="d-flex flex-wrap">
            <div className="col-sm-4 mt-2">
              <select className="form-control" onChange={handleSelectChange} style={{ background: "white" }} aria-label="select">
                <option value="">Choose a Merchant Type</option>
                <option value="COMMUNITY">COMMUNITY</option>
                <option value="LISTED_BUSINESS">LISTED_BUSINESS</option>
                <option value="MERCHANT_PARTNER">MERCHANT_PARTNER</option>
              </select>
            </div>

            {/* <div className="col-sm-3 mt-2">
              <form className="form-inline mr-auto">
                <input
                  className="form-control"
                  onChange={handleSearchChange}
                  type="text"
                  style={{ background: "white" }}
                  placeholder="businessCategoryId"
                  aria-label="Search"
                />
              </form>
            </div> */}

            <div className="col-sm-2 mt-2">
              <select className="form-control" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>
            </div>

            <div className="col-sm-2 mt-2">
              <select className="form-control" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </div>

            <div className="col-sm-2 mt-2">
              <select className="form-control" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                <option value="">STATUS</option>
                <option value="1">Active</option>
                <option value="2">Hold</option>
                <option value="0">Deleted</option>
              </select>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table merchants-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Actions</th>
                          <th>Status</th>
                          <th>Circle Logo</th>
                          <th>SquareLogo</th>
                          <th>Rank</th>
                          <th>MerchantType</th>
                          <th>Industry</th>
                          <th>BusinessLegalName</th>
                          <th>MerchantIdentifier</th>
                          <th>MerchantSequence</th>
                          <th>TradeName</th>
                          <th>Description</th>
                          <th>OperationsInAWeek</th>
                          <th>abn</th>
                          <th>ACN</th>
                          <th>DateOfRegistration</th>
                          <th>DateOfOperation</th>
                          <th>TaxFileNumber</th>
                          <th>Website</th>
                          <th>Facebook-URL</th>
                          <th>Instagram-URL</th>
                          <th>PhoneNumber</th>
                          <th>OwnerName</th>
                          <th>OwnerMobile</th>
                          <th>OwnerEmail</th>
                          <th>RepresentativeName</th>
                          <th>RepresentativeDesignation</th>
                          <th>RepresentativeMobile</th>
                          <th>RepresentativeEmail</th>
                          <th>MerchantCikkaTransactionDefaultPercentage</th>
                          <th>CreatedBy</th>
                          <th>UpdatedBy</th>
                          <th>CreatedAt</th>
                          <th>UpdatedAt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="13">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          data?.data?.map((u) => (
                            <tr key={u.id}>
                              <td>{u.id}</td>
                              
                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                                <NavLink to={`/ViewMerchants/${u.userId}`}>
                                  <ViewIcon />
                                </NavLink>

                                <NavLink to={`/MerchantServices/${u.userId}`}>
                                  <i className="fe fe-briefcase fe-16 icon"></i>
                                </NavLink>
                              </td>

                              <td>
                                <Status code={u.status} />
                              </td>
                              <td>
                                {u.logo && u.logo.filePath ? (
                                  <img src={modifyImageUrl(u.logo.filePath, u.logo.folderName)} alt="logo" className="circle-logo" />
                                ) : (
                                  <img src={demoLogo} alt='demoLogo' className="square-logo" />
                                )}
                              </td>
                              <td>
                                {u.squareLogo && u.squareLogo.filePath ? (
                                  <img src={modifyImageUrl_SquareLogo(u.squareLogo.filePath, u.logo.folderName)} alt="logo" className="square-logo" />
                                ) : (
                                  <img src={demoLogo} alt='demoLogo' className="square-logo" />
                                )}
                              </td>
                              <td>{u.rank}</td>
                              <td>{u.merchantType}</td>
                              <td> {u.industry.name}</td>
                              <td>
                                {search ? (
                                  u.businessLegalName.toLowerCase().includes(search.toLowerCase()) ? (
                                    <span className="highlighted">{u.businessLegalName}</span>
                                  ) : (
                                    u.businessLegalName
                                  )
                                ) : (
                                  u.businessLegalName
                                )}
                              </td>
                              <td>{u.merchantIdentifier}</td>
                              <td>{u.merchantSequence}</td>
                              <td>{u.tradeName}</td>
                              <td>{u.description}</td>
                              <td>{u.operationsInAWeek}</td>
                              <td>{u.abn}</td>
                              <td>{u.acn}</td>
                              <td>{u.dateOfRegistration}</td>
                              <td>{u.dateOfOperation}</td>
                              <td>{u.taxFileNumber}</td>
                              <td>{u.website}</td>
                              <td>{u.facebookUrl}</td>
                              <td>{u.instagramUrl}</td>
                              <td>{u.phoneNumber}</td>
                              <td>{u.ownerName}</td>
                              <td>{u.ownerMobile}</td>
                              <td>{u.ownerEmail}</td>
                              <td>{u.representativeName}</td>
                              <td>{u.representativeDesignation}</td>
                              <td>{u.representativeMobile}</td>
                              <td>{u.representativeEmail}</td>
                              <td>{u.merchantCikkaTransactionDefaultPercentage}</td>
                              <td>
                                {usersData && usersData.data && usersData.data.find(user => user.id === u.createdBy) ? (
                                  (() => {
                                    const user = usersData.data.find(user => user.id === u.createdBy);
                                    return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                  })()
                                ) : u.createdBy}
                              </td>
                              <td>
                                {usersData && usersData.data && usersData.data.find(user => user.id === u.updatedBy) ? (
                                  (() => {
                                    const user = usersData.data.find(user => user.id === u.updatedBy);
                                    return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                  })()
                                ) : u.updatedBy}
                              </td>
                              <td>{<DateFormate dateTime={u.createdAt} />}</td>
                              <td>{<DateFormate dateTime={u.updatedAt} />}</td>
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
      </div >

      {
        showAddModal ? (
          <AddMerchantModal
            handleSuccess={handleAddUserSuccess}
            handleClose={() => setShowAddModal(false)}
          />
        ) : null}
      {
        showEditModal ? (
          <EditMerchantModal
            id={userId}
            handleSuccess={handleUpdateUserSuccess}
            handleClose={() => setShowEditModal(false)}
          />
        ) : null
      }
    </>
  );
};
