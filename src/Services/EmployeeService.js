import { useState, useEffect } from "react";
import axios from "axios";
import { getBloodCollection, getRelation } from "./EmployeeServiceData";

const API_URL = "http://localhost:8080/api/employees";

const useEmployeeServices = () => {
  const [employeeListUpdated, setEmployeeListUpdated] = useState(false);
  const bloods = getBloodCollection();
  const relations = getRelation();
  const [employees, setEmployees] = useState([]);
  const [binEmployees, setBinEmployees] = useState([]);

  const addEmployee = async (values) => {
    console.log("values =", values);
    try {
      const response = await axios.post(API_URL, values);
      console.log("addEmployee =", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request:", error.message);
    }
  };

  const useAllEmployees = () => {
    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await axios.get(API_URL);
          console.log(response);
          setEmployees(response.data);
        } catch (error) {
          console.error("Failed to make request: ", error.message);
          return null;
        }
      };
      fetchEmployees();
    }, [employeeListUpdated]);

    const employeesWithBlood = employees.map((x) => ({
      ...x,
      blood: bloods[x.bloodId - 1]?.title,
      relation: relations[x.relationxId - 1]?.title,
    }));

    return employeesWithBlood;
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      console.log("deleteEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const updateEmployee = async (values) => {
    console.log("values =", values);
    try {
      const response = await axios.put(`${API_URL}/${values.id}`, values);
      console.log("updateEmployee = ", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const useBinEmployees = () => {
    useEffect(() => {
      const fetchBinEmployees = async () => {
        try {
          const response = await axios.get(`${API_URL}/bin/`);
          console.log(response);
          setBinEmployees(response.data);
        } catch (error) {
          console.error("Failed to make request: ", error.message);
          return null;
        }
      };
      fetchBinEmployees();
    }, [employeeListUpdated]);

    const employeesWithBlood = binEmployees.map((x) => ({
      ...x,
      blood: bloods[x.bloodId - 1]?.title,
      relation: relations[x.relationxId - 1]?.title,
    }));

    return employeesWithBlood;
  };

  const emptyRecycleBin = async () => {
    try {
      const response = await axios.delete(`${API_URL}/clearBin/`);
      console.log("emptyRecycleBin", response);
      setEmployeeListUpdated(!employeeListUpdated);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const restoreEmployee = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/restore/${id}`);
      setEmployeeListUpdated(!employeeListUpdated);
      console.log("restoreEmployee", response);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  return {
    addEmployee,
    useAllEmployees,
    deleteEmployee,
    updateEmployee,
    useBinEmployees,
    emptyRecycleBin,
    restoreEmployee,
  };
};

export default useEmployeeServices;
