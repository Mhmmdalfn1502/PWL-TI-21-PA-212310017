import React from "react";
import { Routes, Route, Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ChapterTwo } from "../modules/chapter-2";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import Login from "../modules/chapter-2/widgets/authentifications/login";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="" index element={<ChapterOne />} />
        <Route path="home" index element={<ChapterTwo />} />
        <Route path="chapter-1" index element={<ChapterOne />} />
        <Route path="chapter-2" index element={<ChapterTwo />} />
        <Route path="sign-in" element={<LoginWithNavigation />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-out" element={<Login />} />
        <Route path="profile" element={<Profile />}>
          <Route path="identity" element={<Identity />} />
          <Route path="config" element={<Config />} />
        </Route>
        <Route path="user/:user_id" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return (
    <div className="py-5 text-center">
      {" "}
      <h3>This is home page</h3> <h3>..........</h3>
      {""}
    </div>
  );
};

const Profile = () => {
  return (
    <div className="card my-5 mx-10">
      <div className="card-header d-flex justify-content-between align-items-center px-5">
        <h3 className="card-title">Profile Page</h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to={"identity"}>
                Identity
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"config"}>
                Config
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <Outlet />
      </div>
    </div>
  );
};

const Identity = () => {
  return (
    <div>
      <h1>Identity page</h1>
      <Link to={"home"}>Go To Home Page</Link>
    </div>
  );
};

const Config = () => {
  return <h1>Config page</h1>;
};

const User = () => {
  let params = useParams();
  return <h1>User ID: {params.user_id}</h1>;
};

const LoginWithNavigation = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigasi ke halaman chapter-2 saat tombol sign-in diklik
    navigate("/chapter-2");
  };

  return <Login onSignIn={handleSignIn} />;
};

const ErrorPage = () => {
  return ( 
  <div className="text-center">
    <h1>Error 404</h1>
  </div>
  )
};
