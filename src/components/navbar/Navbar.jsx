import "./Navbar.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="./transparentlogo.png" alt="logo" />
        <div className="navbar__left__dropdown">
          <div className="navbar__left__dropdown--text">Services</div>
          <div className="navbar__left__dropdown--icon"><ArrowDropDownIcon/></div>
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbar__right-item">
          <AccountCircleIcon />
        </div>

        <div className="navbar__right-item">
          <WorkIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
