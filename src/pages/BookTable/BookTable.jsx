import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookTable.css";
import Navbar from "../../components/Navbar/Navbar";

const BookTable = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(2).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
    guests: Yup.number().min(1).max(20).required("Number of guests is required"),
    time: Yup.string().required("Time is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, "bookings1"), {
        name: values.name,
        email: values.email,
        phone: values.phone,
        guests: values.guests,
        time: values.time, 
        timestamp: new Date().getTime(), 
      });

      toast.success("Booking Successful!");
      resetForm();
    } catch (error) {
      console.error("Error adding booking:", error);
      toast.error("Failed to book table. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="booking-form">
        <h2>Book a Table</h2>
        <Formik
          initialValues={{ name: "", email: "", phone: "", guests: "", time: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div>
                <label>Name</label>
                <Field type="text" name="name" placeholder="Your name" className="input" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <label>Email</label>
                <Field type="email" name="email" placeholder="Your email" className="input" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label>Phone</label>
                <Field type="text" name="phone" placeholder="Your mobile number" className="input" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div>
                <label>Number of Guests</label>
                <Field type="number" name="guests" placeholder="Number of guests" className="input" />
                <ErrorMessage name="guests" component="div" className="error" />
              </div>

              
              <div className="timepicker-container">
                <label className="timepicker-label">Select Time</label>
                <Field type="time" name="time" className="timepicker-input" required />
                <ErrorMessage name="time" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn">
                Book Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </>
  );
};

export default BookTable;
