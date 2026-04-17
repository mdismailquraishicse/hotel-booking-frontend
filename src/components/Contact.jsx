import "./Contact.css";

function Contact(){
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

            <div className="contact-form">
                <input type="email" placeholder="email@example.com" />
                <textarea placeholder="Type your message..." rows="4"></textarea>
                {/* <input type="email" placeholder="Type your message..." /> */}
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contact;