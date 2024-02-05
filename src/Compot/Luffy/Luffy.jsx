import "./Luffy.scss";
import Imgess from "../img/Luffy.png";

function Luffy() {
  return (
    <>
      <section className="luffy">
        <div className="container">
          <ul className="luffy__list">
            <li className="luffy__item">
              <img
                className="luffy__img"
                src={Imgess}
                alt="img"
                width="255"
                height="193"
              />
              <h3 className="luffy__heading">Gran Espresso</h3>
              <p className="luffy__text">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </li>

            <li className="luffy__item">
              <img
                className="luffy__img"
                src={Imgess}
                alt="img"
                width="255"
                height="193"
              />
              <h3 className="luffy__heading">Gran Espresso</h3>
              <p className="luffy__text">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </li>

            <li className="luffy__item">
              <img
                className="luffy__img"
                src={Imgess}
                alt="img"
                width="255"
                height="193"
              />
              <h3 className="luffy__heading">Gran Espresso</h3>
              <p className="luffy__text">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </li>

            <li className="luffy__item">
              <img
                className="luffy__img"
                src={Imgess}
                alt="img"
                width="255"
                height="193"
              />
              <h3 className="luffy__heading">Gran Espresso</h3>
              <p className="luffy__text">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Luffy;
