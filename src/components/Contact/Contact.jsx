import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"

export default function Contact({ contact }) {
    const dispatch = useDispatch()
    
    const handleClickDelete = (id) => {
    dispatch(deleteContact(id))
    }

    return (
        <>
            <p>{ contact.name }</p>
            <p>{ contact.number }</p>
            <button type="button" onClick={() => handleClickDelete(contact.id)}>Delete</button>
        </>
    )
}