import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { PiChatsBold } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown } from 'primereact/dropdown';
import logo from "../../assets/logo-no-background.png";
import { FaHashtag } from "react-icons/fa6";
import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ava from '../../assets/test.png';
import "./style.css"
import DropDown from "../dropDown/DropDown.jsx";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [searchInput, setSearchInput] = useState("");
//   const dispatch = useDispatch();
  const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

//   const theme = useTheme();
//   const neutralLight = theme.palette.neutral.light;
//   const dark = theme.palette.neutral.dark;
//   const background = theme.palette.background.default;
//   const primaryLight = theme.palette.primary.light;
//   const alt = theme.palette.background.alt;

//   const fullName = `${user.Name}`;
    const fullName = "Engineer";

//     const [selectedCommunity, setSelectedCommunity] = useState(null);
//     const Community = [
//         { name: 'English', code: 'en' },
//         { name: 'Hindi', code: 'hi' },
//         { name: 'Spanish', code: 'es' },
//         { name: 'French', code: 'fr' },
//         { name: 'German', code: 'de' },
//         { name: 'Gujarati', code: 'gu' },
//         { name: 'Russian', code: 'ru' },
//         { name: 'Korean', code: 'ko' },
//         { name: 'Italian', code: 'it' },
//         { name: 'Japanese', code: 'ja' }
//     ];

//     const selectedCommunityTemplate = (option, props) => {
//       if (option) {
//           return (
//               <div className="flex align-items-center selectedL">
//                   <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()} searchCustom`} style={{ width: '18px' }} />
//                   <div>{option.name}</div>
//               </div>
//           );
//       }

//       return <span>{props.placeholder}</span>;
//   };

//   const CommunityOptionTemplate = (option) => {
//     return (
//         <div className="flex align-items-center opTemp">
//             <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()} serachIco`} style={{ width: '18px' }} />
//             <div>{option.name}</div>
//         </div>
//     );
// };

    const navToHome = () => {
        navigate("/");
    }

    const navToProfile = () => {
        navigate("/Profile");
    }

    const dropMenu = () => {
        const navProfileElement = document.querySelector('.navProfile');
        navProfileElement.classList.toggle('active');
      };


  return (
    
    <header className="navBar">
        <div className="navLeft">
            {/* <p className="projectMainName">Semicolon</p> */}
            <img src={logo} alt='' width={1500} height={443} className='logo_img_sb' onClick={navToHome}/>
            {/* <div className="card flex justify-content-center">
            <Dropdown value={selectedCommunity} onChange={(e) => setSelectedCommunity(e.value)} options={Community} optionLabel="name" placeholder="Select Community" 
                    filter valueTemplate={selectedCommunityTemplate} itemTemplate={CommunityOptionTemplate} className="w-full md:w-14rem cpInput lInput text-white" />
            </div> */}
            <div className="searchBar">
                <label className="searchBarLabel" htmlFor='searchInput'>Search..</label>
                <input className="searchBarInput" type='text' id='searchInput' size = "50"  value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search.." />
                {/* <IoMdSearch className = "navIcon navSearchIcon"/> */}
            </div>
        </div>
        <div className="navRight">
            <div className="navIcons">
                <FaFire className = "navIcon" title="Popular"/>
                <PiChatsBold className = "navIcon" title="Chat"/>
                <IoIosNotifications className = "navIcon" title="Notifications"/>
                <GrAdd className = "navIcon" title="Create Post"/>
            </div>
            <div className="navProfile">
                <img className='userAva' src={ava} alt='' onClick={navToProfile}/>
                <div className="nav-user-data">
                    <div className="hashInfo">
                        <span className="nav-user-name">{fullName}</span>
                        <span className="hashesInNav"><span className="hash"><FaHashtag/></span>100 hashes</span>
                    </div>
                    <IoIosArrowDown className='downIcon' onClick={dropMenu}/>
                    <div className="navDropdown">
                        <Link to="/Profile">Profile</Link>
                        <Link to="/auth">Logout</Link>
                        {/* Add more items as needed */}
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Navbar;
