import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components import
const Home = lazy(() => import("../pages/Home"));
const Tours = lazy(() => import("../pages/Tours"));
const SearchList = lazy(() => import("../pages/SearchList"));
const TourDetails = lazy(() => import("../pages/TourDetails"));
const Login = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />

      <Route path="/" element={<Navigate to="/home" />} />
      
      <Route
        path="/home"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/tours"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Tours />
          </Suspense>
        }
      />
      <Route
        path="/tour/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <TourDetails />
          </Suspense>
        }
      />
      <Route
        path="/tours/search"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SearchList />
          </Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
