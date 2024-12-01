import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import Result from "../components/Result";
import Admin from "../components/Admin";
import NotFound from "../components/NotFound";
import ForgatPassword from "../components/ForgatPassword";

const Home_page = () => {
    return (
        <div>
            <BrowserRouter future={{ v7_startTransition: true }}>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Result" element={<Result></Result>}></Route>
                    <Route path="/Admin" element={<Admin></Admin>}></Route>
                    <Route path="/ForgatPassword" element={<ForgatPassword></ForgatPassword>}></Route>
                    <Route path="/*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Home_page;