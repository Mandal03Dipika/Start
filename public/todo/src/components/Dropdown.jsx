function Dropdown(props) {
  return (
    <>
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.name}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark move">
          <li>
            <button className="dropdown-item" onClick={props.out}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
