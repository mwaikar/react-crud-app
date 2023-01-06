import React from 'react'

const EditableRow = ({ editformData, handleEditFormChange, handleCancelFormSubmit }) => {
    return (
        <tr>
            <td>
                <input type="text"
                    name="firstName"
                    placeholder='Enter first name...'
                    value={editformData.firstName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input type="text"
                    name="lastName"
                    placeholder='Enter last name...'
                    value={editformData.lastName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    name="email"
                    placeholder='Enter email...'
                    value={editformData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancelFormSubmit}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow