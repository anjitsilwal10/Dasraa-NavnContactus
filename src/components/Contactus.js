import "./Contactus.css";
import Logo from "./media/logo.png";

export default function App() {
  return (
    <section className="contactus">
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img src={Logo} alt="" />
          </div>
          <form action="#">
            <div className="topic">Send us a message</div>
            <div className="input-box">
              <input
                type="text"
                id="name"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="message-box">
              <textarea
                id="message"
                placeholder="Enter Your Message Here"
              ></textarea>
            </div>
            <div className="input-box">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
