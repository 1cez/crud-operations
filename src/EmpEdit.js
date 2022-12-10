import { useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";

function EmpEdit() {

    const [employees, setEmployees] = useState([]);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [validationError, setValidationError] = useState(false);

  const { empid } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => res.json())
      .then((res) => {
        setId(res.id);
        setName(res.name);
        setEmail(res.email);
        setPhone(res.phone);
        setIsActive(res.isActive);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {id,name, email, phone, isActive };
    
    fetch(" http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      alert("Saved successfully.");
      navigate("/");
    });
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-title">
                  <h2 className="text-center">Employee Edit</h2>
                </div>
                <div className="card-body ">
                  <div className="row text-center">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          value={id}
                          disabled="disabled"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          required
                          value={name}
                          onMouseDown={(e) => setValidationError(true)}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                        {name.length < 3 && validationError && (
                          <span className="text-danger">
                            Min. 3 Characters here!
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check d-flex justify-content-center align-items-center mt-3">
                        <input
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                          type="checkbox"
                          className="form-check-input mx-2 "
                        />
                        <label className="form-check-label">Is Active</label>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-3">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpEdit;
