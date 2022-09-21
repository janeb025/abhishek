import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		
		<NavLink to="/signuplineman" activeStyle>
			Add New Lineman
		</NavLink>
    <NavLink to="/activatelineman" activeStyle>
			 Activate Lineman
		</NavLink>
		<NavLink to="/deactivatelineman" activeStyle>
			 De-Activate Lineman
		</NavLink>
    <NavLink to="/assignwork" activeStyle>
			Work Assignent to lineman
		</NavLink>
    <NavLink to="/reports" activeStyle>
			Reports
		</NavLink>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   &nbsp;&nbsp; &nbsp; &nbsp;
    <NavLink to="/" activeStyle><button>Logout</button>
			
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
