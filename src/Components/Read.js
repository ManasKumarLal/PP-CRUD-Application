import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [arr, setArr] = useState([]);
  const [mode, setMode] = useState("");

  const getDataFromApi = async () => {
    const response = await axios.get(
      "https://64fdf348596493f7af7ecb71.mockapi.io/list/Crud/"
    );
    setArr(response.data);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  const deleteDataFromApi = (id) => {
    axios
      .delete(`https://64fdf348596493f7af7ecb71.mockapi.io/list/Crud/${id}`)
      .then(() => {
        getDataFromApi();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <h1 className="mb-5">User Data :</h1>
          <div class="form-check form-switch fs-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={()=>{
                if(mode===""){
                    setMode("table-dark");
                }else{
                    setMode("");
                }
              }}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
          <Link to="/">
            <button className="btn btn-secondary fs-4 px-4">Add+</button>
          </Link>
        </div>
        <table className={`table ${mode}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {arr.map((element) => {
            const { id, name, email } = element;
            return (
              <tbody key={id}>
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          setToLocalStorage(id, name, email);
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteDataFromApi(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
