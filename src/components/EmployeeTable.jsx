import React, { Fragment } from "react";
import { useState } from "react";
import ReadonlyRow from "./ReadonlyRow";
import EditableRow from "./EditableRow";

const EmployeeTable = ({ employeeData }) => {
    const [employeesData, setEmployeesData] = useState(employeeData);
    const [employeeSelected, setEmployeeSelected] = useState(null);
    const [editformData, setEditFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleDeleteClick = (employeeId) => {
        const employees = [...employeesData];
        const indexToDelete = employees.findIndex(emp => emp.id === employeeId);
        employees.splice(indexToDelete, 1);

        setEmployeesData(employees);
    };

    const handleEditClick = (employee) => {
        setEmployeeSelected(employee.id);
        const formValues = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email
        };

        setEditFormData(formValues);
    }

    const handleSaveClick = (event, employee) => {
        event.preventDefault();
        
    }

    const handleEditFormChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...editformData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const dataTosave = {
            id: employeeSelected,
            firstName: editformData.firstName,
            lastName: editformData.lastName,
            email: editformData.email
        };

        const updatedEmployees = [...employeesData];
        const indexToUpdate = updatedEmployees.findIndex(employee => employee.id === employeeSelected);
        updatedEmployees[indexToUpdate] = dataTosave;
        setEmployeesData(updatedEmployees);
        setEmployeeSelected(null);
    }

    const handleCancelFormSubmit = () => {
        setEmployeeSelected(null);
    };

    return (
        <div className="table-wrapper">
            <h2>Employee Table</h2>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeesData && employeesData.map(employee => {
                                return (
                                    <Fragment>
                                        {employeeSelected === employee.id ?
                                            <EditableRow key={employee.id}
                                                editformData={editformData}
                                                handleSaveClick={handleSaveClick}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelFormSubmit={handleCancelFormSubmit}
                                            /> :
                                            <ReadonlyRow
                                                key={employee.id}
                                                employee={employee}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        }
                                    </Fragment>
                                );
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default EmployeeTable;
