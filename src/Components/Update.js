import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const updatehandler = () => {
    axios
      .put(`https://64fdf348596493f7af7ecb71.mockapi.io/list/Crud/${id}`, {
        id: id,
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <div className="m-5">
        <h1 className="mb-5">Update</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/read">
              <button className="btn btn-primary fs-4 px-4">Back</button>
            </Link>
            <button
              type="button"
              className="btn btn-success fs-4 px-3"
              onClick={() => {
                updatehandler();
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
