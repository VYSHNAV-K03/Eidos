import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, productsRes] = await Promise.all([
          axiosInstance.get("/cart/bookings"),
        ]);
        setBookings(bookingsRes.data.bookings);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axiosInstance.post("/cart/add", { productId });
      alert("Product added to cart successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add product to cart.");
    }
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Available Upcycled & Recycled Products</h2>
      {/* <div className="row">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product._id}>
              <div className="card">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product._id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div> */}

      <h2 className="mt-5 mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Booking ID</th>
                <th>Item</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>{booking._id}</td>
                  <td>{booking.itemId.name}</td>
                  <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Confirmed"
                          ? "bg-success"
                          : booking.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
