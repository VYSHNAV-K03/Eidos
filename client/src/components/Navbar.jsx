import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user);
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Eidos</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user && !user.isSupplier && !user.isAdmin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bookings">Bookings</Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/sell">Sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Buy</Link>
            </li>
              </>
            )}

          {user && user.isSupplier && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/supplier">Supplier Panel</Link>
                </li>
              
              </>
            )}

{user && user.isAdmin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Panel</Link>
                </li>
              
              </>
            )}
            
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register-user">Register</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  style={{ textDecoration: 'none' }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
