import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EmpDetail() {
  const { empid } = useParams();
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2 className="text-center">Emplooye Details</h2>
        </div>
        <div className="card-body text-center">
          {employees && (
            <div>
              <h1>
                The Employee Name is : <b>{employees.name}</b>
                <b>({employees.id})</b>
              </h1>
              <hr />

              <h2>Contact Details</h2>
              <hr />
              <h5>
                Phone Number : <b>{employees.phone}</b>
              </h5>
              {employees.email === null ? (
                <h5>
                  Email : <b>Not Available</b>
                </h5>
              ) : (
                <h5>
                  Email : <b>{employees.email}</b>
                </h5>
              )}
            </div>
          )}
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
                Back To Listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpDetail;
