import React from 'react'; 
import ShopPage from './ShopPage';
import OfferCarousel from '../components/OfferCarousel';

const Home = () => {
  const token = localStorage.getItem("token")

  console.log(token);
  

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section vh-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1664201890484-a5f7109c8e56?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div
          className="container text-center p-5"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '15px',
          }}
        >
          <h1 className="display-4 fw-bold">Welcome to Eidos</h1>
          <p className="lead mt-3">
            Your Trash, Someone Else's Treasure
          </p>
          <a href={token?"/scroll":"/login"} className="btn btn-light btn-lg mt-4 px-5">
            Start Now
          </a>
        </div>
      </div>

      {/* About Eidos Section */}
      <div className="about-section py-5" id="about">
        <div className="container text-center">
          <h2 className="text-success fw-bold mb-3">
           Eidos  <br /> <h6>Where Old Meets New</h6> 
          </h2>
          <p className="lead">
            Why throw it away when you can trade it?<br />
            Eidos connects sellers with creative buyers who transform used items into something new and amazing..<br /> 
            Sell what you no longer need, let creators transform it, and be part of a waste-free future ♻️
          </p>
        </div>
      </div>

    
      {/* Offer Carousel Section */}
      <OfferCarousel />

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-2">&copy; {new Date().getFullYear()} Eidos. All Rights Reserved.</p>
          
          {/* Contact Information */}
          <div className="mb-3">
            <p className="mb-1"><i className="fas fa-phone"></i> Contact: +1 234 567 890</p>
            <p className="mb-1"><i className="fas fa-envelope"></i> Email: <a href="mailto:support@eidos.com" className="text-white">support@eidos.com</a></p>
          </div>

          {/* Social Media Links */}
          <div>
            <a href="#" className="text-white me-3">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
