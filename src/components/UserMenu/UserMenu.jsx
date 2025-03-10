import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    return <>
        <h2>Welcome, <span>{user.email}</span></h2>
        <button onClick={() => {dispatch(logoutThunk())}}>Logout</button>
    </>
}
export default UserMenu;