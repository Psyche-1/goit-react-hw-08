import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation"; 
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
    const isLoggedUserIn = useSelector(selectIsLoggedIn)
    // console.log(isLoggedUserIn);
    
    return <>
        <Navigation />
        {!isLoggedUserIn && (<AuthNav />)}
        {isLoggedUserIn && (<UserMenu />)}
    </>
}
export default AppBar;