import "./Info.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import arcteryxLogo from "../../assets/logos/arcteryx.svg";
import dayjs from "dayjs";
import Select from "react-select";

function Info({ info, setInfo }) {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    setInfo({ ...info, date: date.unix() });
  }, []);

  const handleDateNow = () => {
    setDate(dayjs());
    setInfo({ ...info, date: date.unix() });
  };

  const handleDateChange = (e) => {
    setInfo({ ...info, date: dayjs(e).unix() });
  };

  const handleGender = (e) => {
    setInfo({ ...info, gender: e.value });
  };

  return (
    <section className="info px-2 text-light">
      <div className="container info__container pb-3 pt-4">
        <div>
          <p className="info__text h3 text-uppercase">
            Where are you heading or where are you located?
          </p>
          <div className="align-items-center d-flex flex-column gap-4 w-100">
            <button
              className="btn btn-lg btn-light info__button info__button--location text-uppercase w-100"
              onClick={handleDateNow}
            >
              I'm Here Now
            </button>
            <div className="fw-bold h1 text-uppercase">or</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="form-control"
                onChange={handleDateChange}
                value={date}
              />
            </LocalizationProvider>
          </div>
          <div className="mt-4 w-100">
            <h3 className="text-uppercase">How do you identify?</h3>
            <Select
              className="text-dark"
              onChange={handleGender}
              options={[
                { label: "Female", value: "Female" },
                { label: "Male", value: "Male" },
              ]}
            />
          </div>
        </div>
        <Link
          className="btn btn-lg btn-light info__button text-uppercase w-100"
          to="/calltoaction"
        >
          Next
        </Link>
        <img
          alt="Arc'teryx logo"
          className="location__logo"
          src={arcteryxLogo}
        />
      </div>
    </section>
  );
}

export default Info;
