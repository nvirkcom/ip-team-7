import "./Home.scss";
import logo from "../../assets/logo.svg";
import Link from "react-router-dom";

function Home() {
  return (
    <section className="home px-2 text-light">
      <div className="container home__container pb-3 pt-5">
        <p className="home__text text-uppercase">
          Connecting with the mountains is our reason for being, and our
          inspiration.
        </p>
        <h1 className="display-2 home__heading">
          Find the perfect apparel collection for your next adventure!
        </h1>
        <Link className="btn btn-lg btn-light home__button text-uppercase w-100">
          Let's Go
        </Link>
        <img alt="Arc'teryx logo" className="home__logo" src={logo} />
      </div>
    </section>
  );
}

export default Home;
