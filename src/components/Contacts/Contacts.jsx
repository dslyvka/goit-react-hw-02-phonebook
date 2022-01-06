import { Fragment } from 'react';
import {StyledList} from './Contacts.styled'

function Contacts({ contacts, deleteContact }) {
  return (
    <Fragment>
      <StyledList>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              <p>
                {name}: {number}
                <button id={id} onClick={() => deleteContact(id)}>delete</button>
              </p>
            </li>
          );
        })}
      </StyledList>
    </Fragment>
  );
}

export default Contacts;
