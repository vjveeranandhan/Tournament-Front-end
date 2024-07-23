import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import  {Link} from  "react-router-dom";


function Navbar() {
	const navRef = useRef();
	const token = localStorage.getItem('token');
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<title>TourneyHub</title>
			<h3 className="h3-header">TourneyHub</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				{token ? (
				<>
				<Link to="/#">Tournaments</Link>
				<Link to="/#">My Team</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/logout">Logout</Link>
				</>
				) : (
					<>
				<Link to="/#">About us</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				</>
				)}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;