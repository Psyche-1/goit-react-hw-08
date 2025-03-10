import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    };
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange}  />
        </>
    )
}