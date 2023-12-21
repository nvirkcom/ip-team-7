import "./Location.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import arcteryxDarkLogo from "../../assets/logos/arcteryx-dark.svg";
import Select from "react-select";

function Location({ setInfo }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  useEffect(() => {
    const getCitites = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_COUNTRIESNOW_API
        }/countries/cities/q?country=canada`
      );

      setCities([
        ...data.data.map((city) => {
          return { label: city, value: city };
        }),
      ]);
    };
    getCitites();
  }, []);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { lat, lng } = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const { data } = await axios(
        `${
          import.meta.env.VITE_OPENWEATHERAPI_API_URL
        }/reverse?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_OPENWEATHERAPI_API_KEY
        }`
      );

      setInfo({ city: data[0].name });
      setSelectedCity({ label: data[0].name, value: data[0].name });
    });
  };

  const handleChange = (e) => {
    setInfo({ city: e.value });
  };

  return (
    <section className="location px-2">
      <div className="container location__container pb-3 pt-4">
        <p className="location__text h3 text-uppercase">
          Where are you heading or where are you located?
        </p>
        <div className="align-items-center d-flex flex-column gap-4 w-100">
          <button
            className="btn btn-lg btn-dark location__button location__button--location text-uppercase w-100"
            onClick={handleLocation}
          >
            Current Location
          </button>
          <div className="fw-bold h1 text-uppercase">or</div>
          <Select
            className="w-100"
            onChange={handleChange}
            options={cities}
            value={selectedCity}
          />
        </div>
        <Link
          className="btn btn-lg btn-dark location__button text-uppercase w-100"
          to="/info"
        >
          Next
        </Link>
        <img
          alt="Arc'teryx logo"
          className="location__logo"
          src={arcteryxDarkLogo}
        />
      </div>
    </section>
  );
}

export default Location;
