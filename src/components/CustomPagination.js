import Pagination from "react-js-pagination"

export const CustomPagination = ({ page, pageSize, data, setPage }) => {
    return (
        <div className="row pagin-sec">
            <div className="col-sm-12 col-md-5">
                <div className="dataTables_info" role="status" aria-live="polite">
                    {`Showing ${page * pageSize + 1} to  ${(page * pageSize) + data.data.length} of ${data.count} entries`}
                </div>
            </div>
            <div className="col-sm-12 col-md-7" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination
                    itemClass="page-item"
                    prevPageText="Previous"
                    nextPageText="Next"
                    linkClass="page-link"
                    activePage={page + 1}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={data.count}
                    pageRangeDisplayed={5}
                    hideFirstLastPages={true}
                    onChange={(page) => setPage(page - 1)}
                />

            </div>
        </div>
    )
}