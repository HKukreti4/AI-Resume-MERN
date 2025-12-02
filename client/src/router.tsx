import { createBrowserRouter, createRoutesFromElements,Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/root/Home";
import Login from "./pages/root/Login";
import Register from "./pages/root/Register";

const router=createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>   
        <Route path="/register" element={<Register/>}/>   
    </>
))


export default router;