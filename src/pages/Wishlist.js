import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.webp";
import watch3 from "../images/watch-3.webp";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src= {watch2}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  apple watch s-1 series 
                </h5>
                <h6 className="price">$ 350</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src= {cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src= {watch3}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title"> 
                  fireboult ninja calling watch 2
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src= {cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src= {watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  boat strom calling wave 2
                </h5>
                <h6 className="price">$ 150</h6>
              </div>
             </div>
             </div>
            </div>
      </Container>
    </>
  );
};

export default Wishlist;