import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">MaTuAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
            </Link>

            <p className="LISTS"></p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <PersonIcon className="icon"/>
              <span>Users</span>
            </li>
            </Link>
            
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
              <StoreIcon className="icon"/>
              <span>Products</span>
            </li>
            </Link>

            <li>
              <CreditCardIcon className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon"/>
              <span>Deleivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon"/>
              <span>stats</span>
            </li>
            <li>
              <NotificationsIcon className="icon"/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamIcon className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className="icon"/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleIcon className="icon"/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
