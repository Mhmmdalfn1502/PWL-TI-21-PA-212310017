import React from "react";
import { MyFriend } from "./widgets/constantas/DataChat";
import { ContactUI } from "./widgets/contacts";
import MeseggersUI from "../chapter-1/widgets/Messagers/MeseggersUI";

export function ChapterTwo() {
  const myprofile = { id: "0419029203", name: "Febry" };

  return (
    <div id="chapter-2">
      <h1 className="text-black mb-5 text-center">Chapter two: The Authentications and Messegers</h1>
      <div className="px-3">
        <div className="d-flex row px-5">
          <div className="bg-warning col-2 col-lg-3 col-xxl-4 px-0"> {myprofile ? <ContactUI my_account={myprofile} friends={MyFriend} /> : ""} </div>
          <div className="bg-success col-10 col-lg-9 col-xxl-8 px-0">
            <MeseggersUI />
          </div>
        </div>
      </div>
    </div>
  );
}
