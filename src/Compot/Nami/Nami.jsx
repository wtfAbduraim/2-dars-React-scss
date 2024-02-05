import "./Nami.scss";
import NamiPic from "../img/Nami.svg";

function Nami() {
  return (
    <>
      <section className="nami">
        <div className="container">
          <h2 className="nami__heading">Why choose us?</h2>
          <p className="nami__text">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
          <ul className="nami__list">
            <li className="nami__item">
              <img
                className="nami__pic"
                src={NamiPic}
                alt="logo"
                width="72"
                height="72"
              />
              <h3 className="nami__title">Best quality</h3>
              <p className="nami__comment">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </li>

            <li className="nami__item">
              <img
                className="nami__pic"
                src={NamiPic}
                alt="logo"
                width="72"
                height="72"
              />
              <h3 className="nami__title">Best quality</h3>
              <p className="nami__comment">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </li>

            <li className="nami__item">
              <img
                className="nami__pic"
                src={NamiPic}
                alt="logo"
                width="72"
                height="72"
              />
              <h3 className="nami__title">Best quality</h3>
              <p className="nami__comment">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Nami;
