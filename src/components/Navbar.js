import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<ul style={{ marginTop: '5rem' }}>
			<li>
				<NavLink to='/'>GRID</NavLink>
			</li>
			<li>
				<NavLink to='/other'>OTHER</NavLink>
			</li>
		</ul>
	);
};

export default Navbar;
