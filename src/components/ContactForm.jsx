import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { sendContactEmail } from "../utils/emailService";


const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10,"Too short").required("Required")
});

export default function ContactForm(){
  const [status, setStatus] = useState("");

  return (
    <Formik
      initialValues={{ name:"", email:"", message:"" }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        setStatus("Sending...");
        const res = await sendContactEmail(values);
        if(res.ok){
          setStatus("Message sent — we will contact you soon.");
          actions.resetForm();
        } else {
          setStatus("Error sending message — try again later.");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>Name</label>
          <Field name="name" />
          {errors.name && touched.name && <div style={{color:"crimson"}}>{errors.name}</div>}

          <label style={{marginTop:8}}>Email</label>
          <Field name="email" type="email" />
          {errors.email && touched.email && <div style={{color:"crimson"}}>{errors.email}</div>}

          <label style={{marginTop:8}}>Message</label>
          <Field name="message" as="textarea" rows="4" />
          {errors.message && touched.message && <div style={{color:"crimson"}}>{errors.message}</div>}

          <div className="form-actions" style={{marginTop:8}}>
            <button className="btn" type="submit">Send Message</button>
            <div style={{alignSelf:"center",marginLeft:12}}>{status}</div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
