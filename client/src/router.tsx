import { createBrowserRouter, createRoutesFromElements,Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/root/Home";

const router=createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
    </>
))


export default router;