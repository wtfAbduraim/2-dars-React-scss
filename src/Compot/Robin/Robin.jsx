import "./Robin.scss";

function Robin() {
  return (
    <>
      <section className="robin">
        <div className="container">
          <h4 className="robin__heading">How it works</h4>
          <div className="info__div">
            <span className="robin__span"></span>
            <span className="robin__span"></span>
            <span className="robin__span"></span>
          </div>
          <hr className="hr" />
          <ul className="robin__list">
            <li className="robin__item">
              <h3 className="robin__number">01</h3>
              <h4 className="robin__title">Pick your coffee</h4>
              <p className="robin__text">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </li>

            <li className="robin__item">
              <h3 className="robin__number">02</h3>
              <h4 className="robin__title">Pick your coffee</h4>
              <p className="robin__text">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </li>

            <li className="robin__item">
              <h3 className="robin__number">03</h3>
              <h4 className="robin__title">Pick your coffee</h4>
              <p className="robin__text">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </li>
          </ul>
          <button className="button">Create your plan</button>
        </div>
      </section>
    </>
  );
}

export default Robin;
