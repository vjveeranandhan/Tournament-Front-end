import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import  {Link} from  "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<title>TourneyHub</title>
			<h3>TourneyHub</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/#">Tournaments</Link>
				<Link to="/#">About us</Link>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
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