import './Contactus.css';

export default function App() {
    return (
        <div className="container">
            <div className="content">
                <div className="image-box">
                    <img src="media/logo.png" alt="" />
                </div>
                <form action="#">
                    <div className="topic">Send us a message</div>
                    <div className="input-box">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Enter your email</label>
                        <input type="text" id="email" required />
                    </div>
                    <div className="message-box">
                        <label htmlFor="message">Enter your message</label>
                        <textarea id="message"></textarea>
                    </div>
                    <div className="input-box">
                        <input type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
    );
}
