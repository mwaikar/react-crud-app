import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import { useEffect, useState } from "react";

export default function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const fetchData = () => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=6&idStarts=1001")
      .then(res => res.json())
      .then((myJson) => {
        console.log(myJson)
        setEmployeeData(myJson)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {employeeData && employeeData.length > 0 && <EmployeeTable employeeData={employeeData} />}
    </div>
  );
}
