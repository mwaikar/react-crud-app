import React from 'react'

const ReadonlyRow = ({employee, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>
                <button type='button' className='edit-button' onClick={() => handleEditClick(employee)}>Edit</button>
                <button type='button' className='delete-button' onClick={() => handleDeleteClick(employee.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadonlyRow;