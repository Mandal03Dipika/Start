import React from "react";
import { Link } from "react-router-dom";

function NavContent(props) {
  return (
    <>
      <nav className="px-2 navbar navbar-expand navbar-dark bg-dark in-nav">
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to={props.link}>
                {props.head}
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-outline-light me-3"
          type="submit"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Task
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3 input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Task Title
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task Title"
                    aria-label="Task Title"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="mb-3 input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Task
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Task"
                    aria-label="Task"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Task"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default NavContent;
