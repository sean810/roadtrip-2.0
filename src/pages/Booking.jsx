import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookingSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  phone: Yup.string().required("Phone required"),
  pickupDate: Yup.date().required("Pickup date required"),
  returnDate: Yup.date(),
  pickupLocation: Yup.string().required("Pickup location required"),
  notes: Yup.string()
});

export default function Booking({ showToast }) {
  const [bookings, setBookings] = useLocalStorage("bookings", []);
  const [step, setStep] = useState(bookings.length > 0 ? 2 : 1);

  const totalPrice = bookings.reduce((sum, item) => {
    return sum + (item.pricePerDay || item.pricePerTrip || 0);
  }, 0);

  const removeBooking = (id) => {
    setBookings(bookings.filter(b => b.bookingId !== id));
    showToast("Item removed from cart", "info");
  };

  const clearCart = () => {
    setBookings([]);
    showToast("Cart cleared", "info");
  };

  return (
    <section className="section container" data-aos="fade-up">
      <h2>Complete Your Booking</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "var(--sp-xl)", marginTop: "var(--sp-xl)" }}>
        {/* Booking Form */}
        <div className="contact-card">
          <h3>Booking Details</h3>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              pickupDate: "",
              returnDate: "",
              pickupLocation: "Nairobi",
              notes: ""
            }}
            validationSchema={BookingSchema}
            onSubmit={(values) => {
              showToast("Booking submitted! We'll confirm within 24 hours.", "success");
              setBookings([]);
              setStep(1);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <Field id="fullName" name="fullName" />
                  {errors.fullName && touched.fullName && <span className="form-error">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <Field id="email" name="email" type="email" />
                  {errors.email && touched.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <Field id="phone" name="phone" type="tel" />
                  {errors.phone && touched.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="pickupDate">Pickup Date *</label>
                  <Field id="pickupDate" name="pickupDate" type="date" />
                  {errors.pickupDate && touched.pickupDate && <span className="form-error">{errors.pickupDate}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="returnDate">Return Date</label>
                  <Field id="returnDate" name="returnDate" type="date" />
                </div>

                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location *</label>
                  <Field id="pickupLocation" name="pickupLocation" as="select">
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Additional Notes</label>
                  <Field id="notes" name="notes" as="textarea" rows="3" placeholder="Any special requests..." />
                </div>

                <div className="form-actions">
                  <button className="btn" type="submit" disabled={isSubmitting || bookings.length === 0}>
                    {isSubmitting ? "Submitting..." : "Complete Booking"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Cart Summary */}
        <div className="contact-card" style={{ height: "fit-content", position: "sticky", top: "100px" }}>
          <h3>Order Summary</h3>
          {bookings.length === 0 ? (
            <div className="empty-state" style={{ padding: "var(--sp-lg)" }}>
              <p className="muted">No items selected</p>
              <Link to="/fleet" className="btn secondary" style={{ marginTop: "var(--sp-md)", width: "100%", textAlign: "center" }}>Browse Fleet</Link>
            </div>
          ) : (
            <>
              {bookings.map(item => (
                <div key={item.bookingId} style={{ borderBottom: "1px solid #eee", paddingBottom: "var(--sp-md)", marginBottom: "var(--sp-md)" }}>
                  <div style={{ fontWeight: 600, marginBottom: "4px" }}>{item.name}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>KSh {(item.pricePerDay || item.pricePerTrip || 0).toLocaleString()}</div>
                  <button className="small-btn" onClick={() => removeBooking(item.bookingId)} style={{ marginTop: "var(--sp-sm)" }}>Remove</button>
                </div>
              ))}
              
              <div style={{ borderTop: "2px solid var(--orange)", paddingTop: "var(--sp-md)", marginTop: "var(--sp-lg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.1rem", color: "var(--navy)", marginBottom: "var(--sp-lg)" }}>
                  <span>Total:</span>
                  <span style={{ color: "var(--orange)" }}>KSh {totalPrice.toLocaleString()}</span>
                </div>
                <button className="small-btn" onClick={clearCart} style={{ width: "100%" }}>Clear Cart</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}