import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./BookTable.css";
import Navbar from "../../components/Navbar/Navbar";

const BookTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const validationSchema = Yup.object({
    name: Yup.string().min(2).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
    guests: Yup.number().min(1).max(20).required("Number of guests is required"),
    date: Yup.date().required("Date is required").nullable(),
    time: Yup.string().required("Time is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(db, "bookings1"), {
        name: values.name,
        email: values.email,
        phone: values.phone,
        guests: values.guests,
        date: values.date.toISOString().split("T")[0],
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

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`; // Format: "HH:MM"
  };

  return (
    <>
      <Navbar />
      <div className="booking-form">
        <h2>Book a Table</h2>
        <Formik
          initialValues={{ name: "", email: "", phone: "", guests: "", date: new Date(), time: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => {
            const today = new Date();
            const isToday = selectedDate.toDateString() === today.toDateString();
            const minTime = isToday ? getCurrentTime() : "00:00";

            return (
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

                {/* Date Picker Field */}
                <div className="datepicker-container">
                  <label>Select Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setFieldValue("date", date);
                      if (date.toDateString() !== today.toDateString()) {
                        setFieldValue("time", ""); // Reset time for future dates
                      }
                    }}
                    dateFormat="yyyy-MM-dd"
                    minDate={today}
                    className="datepicker-input"
                    placeholderText="Select a date"
                  />
                  <ErrorMessage name="date" component="div" className="error" />
                </div>

                
                <div className="timepicker-container">
                  <label>Select Time</label>
                  <Field
                    type="time"
                    name="time"
                    className="timepicker-input"
                    min={minTime} 
                    required
                  />
                  <ErrorMessage name="time" component="div" className="error" />
                </div>

              
               <div className="timepicker-container">
                <label className="timepicker-label">Select Time</label>
                <Field type="time" name="time" className="timepicker-input" required />
                <ErrorMessage name="time" component="div" className="error" />
              </div> 


                <button type="submit" disabled={isSubmitting} className="btn btn-2">
                  Book Now
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <ToastContainer />
    </>
  );
};

export default BookTable;
