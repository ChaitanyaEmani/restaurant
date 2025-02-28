import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookTable = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().min(2).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
    guests: Yup.number().min(1).max(20).required("Number of guests is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, "bookings1"), {
        name: values.name,
        email: values.email,
        phone: values.phone,
        guests: values.guests,
        date: selectedDate.toISOString(),
        timestamp: new Date(),
      });

      toast.success("Booking Successful!");
      resetForm();
      setSelectedDate(null);
    } catch (error) {
      console.error("Error adding booking:", error);
      toast.error("Failed to book table. Try again.");
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Table</h2>
      <Formik
        initialValues={{ name: "", email: "", phone: "", guests: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label>Phone</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div>
              <label>Number of Guests</label>
              <Field type="number" name="guests" />
              <ErrorMessage name="guests" component="div" className="error" />
            </div>

            <div>
              <label>Select Date & Time</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select date and time"
              />
            </div>

            <button type="submit" disabled={isSubmitting}>Book Now</button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default BookTable;
