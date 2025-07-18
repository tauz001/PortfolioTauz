import React from "react"
import {MdEmail} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {SiMinutemailer} from "react-icons/si"
import {useState} from "react"

const ContactSection = () => {
  const [form, setForm] = useState({name: "", email: "", subject: "", message: ""})

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form),
    })

    const result = await response.text()
    alert(result)
  }

  return (
    <section id="contact" className="section-container-contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <div>
          <p>Feel free to reach out if you have a project in mind or want to discuss potential collaboration.</p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon">
                <MdEmail className="text-purple" />
              </div>
              <div className="details">
                <p className="label">Email</p>
                <a href="mailto:tauzans609@gmail.com">tauzans609@gmail.com</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon">
                <FaPhoneAlt className="text-purple" />
              </div>
              <div className="details">
                <p className="label">Phone</p>
                <a href="tel:+91 9555909575">+91 955 590 9575</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon">
                <FaLocationDot className="text-purple" />
              </div>
              <div className="details">
                <p className="label">Location</p>
                <a href="https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/">Lucknow, UP</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form glass" onSubmit={handleSubmit} method="POST">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" name="name" onChange={handleChange} value={form.name} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" name="email" onChange={handleChange} value={form.email} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" name="subject" onChange={handleChange} value={form.subject} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message" name="message" onChange={handleChange} value={form.message}></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            <span>Send Message</span>
            <SiMinutemailer />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
