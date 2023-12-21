import "./CallToAction.scss";
import { Link } from "react-router-dom";
import arcteryxDarkLogo from "../../assets/logos/arcteryx-dark.svg";
import menData from "../../data/men.json";
import womenData from "../../data/women.json";
import { useEffect, useState } from "react";

function CallToAction({ info }) {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    if (info.gender === "Female") {
      setGalleryData(womenData);
    } else {
      setGalleryData(menData);
    }
  }, []);

  return (
    <div className="album py-3 bg-light gallery">
      <div>
        <h1 className="display-6 text-uppercase px-3 text-center">
          Here's a bespoke range of options for your next adventure to{" "}
          {info.city} <br />
          <hr />
          <p className="fw-bold text-center">Just for you!</p>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {galleryData.map((galleryItem) => (
            <div key={galleryItem.ID} className="col-md-4">
              <div className="card mb-4 pt-2 shadow-sm">
                <img
                  src={`/images/${galleryItem.Image_name}`}
                  alt={galleryItem.Name}
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                />
                <div className="card-body">
                  <div className="justify-content-between align-items-center">
                    <h5>{galleryItem.Name}</h5>
                    <div className="btn-group w-100">
                      <Link
                        className="btn btn-sm btn-outline-secondary"
                        target="_blank"
                        to={galleryItem.url}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        alt="Arc'teryx logo"
        className="gallery__logo"
        src={arcteryxDarkLogo}
      />
    </div>
  );
}

export default CallToAction;
