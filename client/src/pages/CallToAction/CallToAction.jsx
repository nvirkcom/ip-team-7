import "./CallToAction.scss";
import { Link } from 'react-router-dom';
import gallery from "../../data/images.json";
import arcteryxLogo from "../../assets/logos/arcteryx.svg";

function CallToAction() {

  const city_name = "Vancouver";
  return (
    

      <div className="album py-5 bg-light gallery">
        <div>
          <h1 className="display-6 text-uppercase">
            Here's a bespoke range of options for your next adventure to {city_name} <br /> ...just for you
          </h1>
        </div>

        <div className="container">
          <div className="row">
            {gallery.map((image) => (
              <div key={image.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="bd-placeholder-img card-img-top"
                    width="100%" height="225"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={image.url} className="btn btn-sm btn-outline-secondary">View</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <img alt="Arc'teryx logo" className="gallery__logo" src={arcteryxLogo} />
      </div >




  )

}

export default CallToAction;
