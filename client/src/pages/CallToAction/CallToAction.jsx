import "./CallToAction.scss";
import { Link } from 'react-router-dom';
import gallery from "../../data/images.json";

function CallToAction() {
  return (

    <div className="album py-5 bg-light">
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
    </div>

  )

}

export default CallToAction;
