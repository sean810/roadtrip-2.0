import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { sendContactEmail } from "../utils/emailService";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required")
});

export default function ContactForm({ showToast }) {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        const res = await sendContactEmail(values);
        if (res.ok) {
          showToast("Message sent successfully! We'll contact you soon.", "success");
          actions.resetForm();
        } else {
          showToast("Failed to send message. Please try again.", "error");
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <Field id="name" name="name" />
            {errors.name && touched.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <Field id="email" name="email" type="email" />
            {errors.email && touched.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field id="phone" name="phone" type="tel" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <Field id="message" name="message" as="textarea" rows="4" />
            {errors.message && touched.message && <span className="form-error">{errors.message}</span>}
          </div>

          <div className="form-actions">
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  {" "}Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}