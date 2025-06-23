import React, { useState, useEffect } from "react";
import axios from "../../axios";
import BackButton from "../../components/BackButton";

const ManageSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get("/admin/suppliers/users");
        setSuppliers(response.data);
      } catch (error) {
        console.error("Error fetching suppliers:", error);
      }
    };
    fetchSuppliers();
  }, []);

  return (
    <div className="container mt-4">
      <BackButton />
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4 text-primary">Manage Users</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered text-center">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.reverse().map((supplier) => (
                <tr key={supplier._id} className="align-middle">
                  <td>{supplier.name}</td>
                  <td>{supplier.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSuppliers;
