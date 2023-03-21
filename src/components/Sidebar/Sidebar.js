import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="user">
          <div className="row2">
            <h2>Medical Record</h2>
            <div className="circle"></div>
            <h1>Rens Junior Sibarani</h1>
            <p>Pasien</p>
          </div>
        </div>
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => (window.location.pathname = val.link)}
              >
                <div id="icon">
                  <img src={val.icon} alt="" />
                </div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
