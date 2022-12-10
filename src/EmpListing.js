import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpListing() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Remove = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(" http://localhost:8000/employee/" + id, {
        method: "DELETE",
      }).then((res) => {
        alert("Removed successfully.");
        window.location.reload();
        navigate("/");
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="text-center">Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>
                      <button
                        onClick={() => {
                          LoadEdit(employee.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          Remove(employee.id);
                        }}
                        className="btn m-1 btn-danger"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => {
                          LoadDetail(employee.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpListing;
