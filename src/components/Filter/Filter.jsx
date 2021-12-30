import { Fragment } from 'react'

function Filter({value, search}) {
    return (
      <Fragment>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" value={value} onChange={search} />
        </label>
      </Fragment>
    );
}

export default Filter;