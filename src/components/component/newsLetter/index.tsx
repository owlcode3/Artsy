function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="newsletter__box">
        <div className="newsletter__texts">
          <h1 className="newsletter__heading-1">NewsLetter</h1>
          <p className="newsletter__paragraph">Subscribe to get daily updates on new drops & exciting deals </p>
        </div>

        <form className="newsletter__form">
          <div className="newsletter__input-box">
            <input
              type="text"
              id="newsletter-email"
              className="newsletter__input"
              placeholder="EMAIL YOUR EMAIL"
            />
            <button type="submit" className="newsletter__submit">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
