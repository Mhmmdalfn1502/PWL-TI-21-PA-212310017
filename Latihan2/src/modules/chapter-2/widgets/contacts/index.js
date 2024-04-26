import React, { useMemo, useState } from "react";
import { AccountLong } from "../components/AccountUI";
import { ButtonIcon, ButtonSearch } from "../components/ButtonUI";
import { Link } from "react-router-dom";

export function ContactUI({ my_account, friends }) {
  const my_friends = friends;

  const [search, setSearch] = useState([]);

  const [sorting, setSorting] = useState({ field: "", order: "" });

  const ResultData = useMemo(() => {
    let computedData = my_friends;
    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) => listData[key].toString().toLowerCase().includes(search));
      });
    }
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedData = computedData.sort((a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]));
    }
    return computedData;
  }, [my_friends, search, sorting]);

  const toggleSorting = (field) => {
    if (sorting.field === field) {
      setSorting({
        ...sorting,
        order: sorting.order === "asc" ? "desc" : "asc",
      });
    } else {
      setSorting({
        field: field,
        order: "asc",
      });
    }
  };

  const EmptyChat = () => { 
    return ( 
      <div> 
        <div className="info text-center"> 
          <h1>No Conversations</h1> 
          <p>You didn't made any conversation yet,  
             please select username</p> 
          <span className="badge badge-primary">Start a chat</span> 
        </div> 
      </div> 
    ); 
  }; 

  return (
    <div className="card card-flush h-100 mb-5 mb-xl-10 rounded-0 rounded-start-1">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="card-title">
          <AccountLong data={my_account} color={"danger"} />
        </div>
        <div className="card-toolbar">
          <Link to={"/sign-out"} className="btn btn-icon btn-sm " title="Sign out">
            <i className="bi bi-box-arrow-right text-danger fw-bold fs-2x" style={{ fontSize: "20px" }}></i>
          </Link>
        </div>
      </div>
      <div className="card-body d-flex flex-column justify-content-between p-0">
        <div className="my-contact border-top">
          <div className="filters p-2 border-bottom d-flex align-items-center">
            <ButtonSearch setSearch={setSearch}>
              <span className="svg-icon svg-icon-1 svg-icon-gray-400 mx-2">
                <i class="bi bi-search"></i>
              </span>
            </ButtonSearch>
            <ButtonIcon title={`Sorting ${sorting.order}`} onAction={() => toggleSorting("name")}>
              <i className={"bi fw-bold fs-2x bi-filter"} style={{ fontSize: "20px" }}></i>
            </ButtonIcon>
          </div>
          <div className="friends">
            {/* <p className="text-center">list kontak dimari</p> */}
            {Object.values(ResultData).length > 0
              ? ResultData.map((v, index) => (
                  <div className={"friend-item py-2 px-3"} key={index}>
                    <AccountLong data={v} color={"info"} />
                  </div>
                ))
              : "No Data Found!"}
          </div>
        </div>
        <p className="fs-8 text-center mb-0 py-3">
          <i className="bi bi-lock-fill"></i>
          <span className="ms-1">
            Your personal messages are <span className="text-info">end-to-end encrypted</span>
          </span>
        </p>
      </div>
    </div>
  );
}
