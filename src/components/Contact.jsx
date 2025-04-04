import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'; // Correct import
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling the alerts

const Contact = () => {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState(null); // State for storing message status
    const [loading, setLoading] = useState(false); // State for loading spinner

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate required fields
        const formElements = form.current.elements;
        let isValid = true;
        let emptyField = '';

        // Iterate over form elements to check for required fields
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].hasAttribute('required') && !formElements[i].value.trim()) {
                isValid = false;
                emptyField = formElements[i].name; // Capture the name of the empty field
                break;
            }
        }

        // If a required field is empty, show an error toast
        if (!isValid) {
            toast.error(`The ${emptyField} field is required. Please fill it out.`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
            });
            return; // Stop if validation fails
        }

        // Additional validation for email and phone
        const email = form.current.elements.email.value;
        const phone = form.current.elements.phone.value;

        // Check if email is in a valid format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
            });
            return;
        }

        // Check if phone is valid (e.g., only digits and a minimum length)
        const phonePattern = /^[0-9]{10}$/; // Adjust to match your phone format
        if (phone && !phonePattern.test(phone)) {
            toast.error("Please enter a valid 10-digit phone number.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
            });
            return;
        }

        setLoading(true); // Show loading spinner

        emailjs
            .sendForm('service_y2qhacm', 'template_lncyzma', form.current, {
                publicKey: '0OClNmWCMF33r5SNa',
            })
            .then(
                () => {
                    setMessageStatus('SUCCESS');
                    setLoading(false);
                    form.current.reset();
                    toast.success("Your message has been sent successfully!", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: true,
                    });
                },
                (error) => {
                    setMessageStatus('FAILED');
                    setLoading(false);
                    console.error('Error:', error.text);
                    form.current.reset();
                    toast.error("There was an error sending your message. Please try again.", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeButton: true,
                    });
                }
            );
    };

    const renderMessage = () => {
        if (messageStatus === 'SUCCESS') {
            return <div className="alert-msg success">Your message has been sent successfully!</div>;
        }
        if (messageStatus === 'FAILED') {
            return <div className="alert-msg error">There was an error sending your message. Please try again.</div>;
        }
        return null;
    };

    // Handle the phone input to allow only numeric digits and limit to 10 digits
    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;

        // Allow only digits and limit the input to 10 characters
        if (/[^0-9]/.test(phoneValue)) {
            e.target.value = phoneValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        }

        if (phoneValue.length > 10) {
            e.target.value = phoneValue.slice(0, 10); // Restrict input to 10 digits
        }
    };

    return (
        <div id="contact" className="contact-style-one-area default-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">CONTACT</h4>
                            {/* <h3 className="title">Feel free to reach out!</h3> */}
                        </div>
                    </div>
                </div>
                <div className="contact-style-one-items">
                    <h1 className="fixed-text">Contact Me</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <form ref={form} className="contact-form contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name*"
                                                type="text"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                type="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone*"
                                                type="text"
                                                onChange={handlePhoneChange} // Add this handler for phone change
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea
                                                className="form-control"
                                                id="comments"
                                                name="message"
                                                placeholder="Tell Us About Project *"
                                                defaultValue={""}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button
                                            type="submit" // Changed to submit
                                            className="btn-style-regular"
                                            onClick={sendEmail} // Handle click directly
                                            name="submit"
                                            id="submit"
                                        >
                                            <span>{loading ? 'Sending...' : 'Get in Touch'}</span>

                                            {/* Show spinner when loading, hide arrow */}
                                            {loading ? <i className="fas fa-spinner fa-spin" /> : <i className="fas fa-arrow-right"></i>}
                                        </button>

                                    </div>
                                </div>
                                {/* Alert Message */}
                                {renderMessage()}
                            </form>
                        </div>
                    </div>
                    <div className="contact-illustration">
                        <img src="assets/img/illustration/5.png" alt="Image Not Found" />
                        <img src="assets/img/shape/13.png" alt="Image Not Found" />
                    </div>
                </div>
            </div>

            {/* ToastContainer for showing the toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default Contact;
