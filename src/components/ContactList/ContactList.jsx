import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import { selectFilteredContactsMemo } from '../../redux/contacts/selectors'

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContactsMemo)
    
    return (
        <ul>
            {filteredContacts.map((item) => (<li key={item.id}><Contact contact={item}/></li>))}
        </ul>
    )
}