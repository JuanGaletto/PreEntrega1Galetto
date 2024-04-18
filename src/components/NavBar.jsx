import CartWidget from "./CartWidget";
import MyList from "./MyList";
import "./NavBar.css";

function NavBar() {
    return(
        <div className="navBar_container">
            <MyList/>
            <CartWidget />
        </div>
    )
}

export default NavBar