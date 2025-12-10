import { createBrowserRouter, createRoutesFromElements,Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/root/Home";
import Login from "./pages/root/Login";
import Register from "./pages/root/Register";
import ErrorPage from "./pages/root/ErrorPage";
import DashboardHome from "./pages/Dashboard/DashboardHome";

const router=createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>   
        <Route path="/register" element={<Register/>}/>   
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/dashboard" element={<DashboardHome/>}/>
    </>
))


export default router;