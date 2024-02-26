import { useTaskContext } from "../contexts/TaskContextProvider";
import moment from "moment";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

function Planning() {
  const { tasks, setTasks } = useTaskContext();
  const { user } = useStateContext();
  const navigate = useNavigate();
  const pending = () => {
    let newTask = [...tasks];
    newTask = newTask.filter((item) => {
      return item.status == "pending";
    });
    setTasks(newTask);
    navigate("/pending");
  };
  const move = (id) => {
    tasks.map((item) => {
      if (item.id == id) {
        item.status = "pending";
      }
    });
    pending();
  };
  return (
    <>
      <div className="contain_table">
        <div className="wrapper_table">
          <section className="table_head">
            <h1>{user.name}'s Completed Task</h1>
            {/* <div className="dropdown">
              <h2
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i>
                  <FilterAltIcon />
                </i>
                Filters
              </h2>
              <ul
                className="dropdown-menu dropdown-menu-dark dropStart"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link className="dropdown-item" to="/task">
                    All Tasks
                  </Link>
                </li>
                <li>
                  <button
                    onClick={done}
                    className="dropdown-item"
                    to="/planning"
                  >
                    Completed
                  </button>
                </li>
                <li>
                  <button
                    onClick={pending}
                    className="dropdown-item"
                    to="/pending"
                  >
                    Pending
                  </button>
                </li>
              </ul>
            </div> */}
          </section>
          <section className="table_body">
            <table
              style={tasks.length == 0 ? { display: "none" } : { display: "" }}
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((item, i) => (
                  <tr key={i}>
                    <td>{item.title}</td>
                    <td>{item.task}</td>
                    <td>{moment(item.date).format("DD-MM-yyyy")}</td>
                    <td>
                      <button
                        className="btn glass"
                        onClick={() => move(item.id)}
                      >
                        Move to Pending
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1
              style={
                tasks.length == 0 ? { display: "block" } : { display: "none" }
              }
            >
              No Results Found
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default Planning;
