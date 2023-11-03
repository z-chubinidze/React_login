import { Link, Outlet } from "react-router-dom";
function DashBoard(){
    const gasvla = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }
    return(
        <div className="d-flex flex-column align-items-center dash-box">
            <h1 className="text-warning mt-5 mb-5">HELLO FROM EMAIL</h1>
            <Link className="nav-link text-light ps-lg-4 pe-4 mt-5" aria-current="page" to={"/Sign_in"}>
                <button onClick={gasvla} type="button" className="btn buton-2">LOG OUT</button>
            </Link>
            <Outlet />
        </div>

       
    )
}

export default DashBoard