import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import logo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='danger' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                {/* <img src={logo} alt='Yin Yang Logo' className='float-start' /> */}
                <h1 className='mt-1'>Yin Yang Custom Home Builders</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/dashboard'>
                            <i className='fa fa-dashboard fa-lg' /> Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/vendorDirectory'>
                            <i className='fa fa-address-card fa-lg' /> Vendor Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/buildingChecklist'>
                            <i className='fa fa-list fa-lg' /> Building Checklist
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/bidding'>
                        <i className="fa fa-file"/>Bidding
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;