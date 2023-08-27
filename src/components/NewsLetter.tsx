const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="news-wrapper">
        <div className="news-intro">
          <h3>Newsletter</h3>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div className="newsletter-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
          {/* <button type="submit">Send</button> */}
        </div>
      </div>
      <div className="get-in-touch">
        <h2>
          GET <span className="block">IN TOUCH</span>
        </h2>
        <button type="submit" className="send-btn">
          Send
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
