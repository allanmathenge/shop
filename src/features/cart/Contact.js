import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { WhatsApp } from "../../assets/icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_oqs647h",
        "template_b5wbgdy",
        {
          from_name: form.name,
          to_name: "Allan Mathenge",
          from_email: form.email,
          to_email: "allanmathenge2@gmail.com",
          message: form.message,
        },
        "s4J1geD4thxR5HXSd"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanyou for contacting Allan, I am getting back to you now!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Sorry, something went wrong!");
        }
      );
  };

  return (
    <div className="email">
      <div className="contact-email">
        <h3>Get in touch</h3>
        <h4>
          Contact
          <span href="0784131234">
            {" "}
            0784131234 <WhatsApp />
          </span>
        </h4>

        <form ref={formRef} onSubmit={handleSubmit} className="email-form">
          <label htmlFor="name">
            <span className="email-label">Your name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="name-input"
            />
          </label>
          <label htmlFor="email">
            <span className="email-label">Your email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="email-input"
            />
          </label>
          <label htmlFor="message">
            <span className="email-label">Your message:</span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="email-input"
            />
          </label>
          <button className="submit" type="submit">
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
