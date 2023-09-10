import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const postHandler = (e) => {
    e.preventDefault();
    if (name && email) {
      axios
        .post("https://64fdf348596493f7af7ecb71.mockapi.io/list/Crud/", {
          name: name,
          email: email,
        })
        .then(() => {
          navigate("/read");
        });
    } else {
      alert("Fill all the fields first");
    }
  };
  return (
    <>
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <h1>Create</h1>
          <Link to="/read">
            <button className="btn btn-secondary fs-4">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="E.g., Manas Kumar Lal"
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
              placeholder="E.g., mkleinstein2005@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={postHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;

// line52 : onClick={(e)=>{postHandler(e)}}
