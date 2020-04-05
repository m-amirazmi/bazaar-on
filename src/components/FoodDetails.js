import React from "react";
import { Link } from "react-router-dom";

const FoodDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m3 food-detail-sidebar">
          <div className="card-panel white lighten-2 food-detail-sidebar-card">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                    "https://3.bp.blogspot.com/-sO7T1ZThX-o/Tnq3-21729I/AAAAAAAACJ0/KSlo3_DzCkE/s1600/makcik2.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="">
              <p>Makcik Senah</p>
              <p>011-1112222</p>
              <p>D-05-05 Kompleks Suria Kinrara, Taman Puchong, 12348 KL</p>
              <button className="btn blue">Call</button>
            </div>
          </div>
        </div>
        <div className="col m9 food-detail-detail">
          <div className="col m12">
            <div className="card-panel white food-detail-title-box">
              <h3 className="food-detail-title">MAKCIK RUMAH SEBELAH</h3>
            </div>
          </div>
          <div className="col m12">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                    "https://lamanresepi.com/wp-content/uploads/2017/01/Resepi-Nasi-Ayam.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="card-content">
                <span className="card-title">Nasi Ayam</span>
                <p className="food-price">RM3.90</p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  deserunt consequatur perferendis veniam, minima voluptates.
                  Adipisci nostrum maxime sunt recusandae quidem? Eos fugit
                  nesciunt eum porro officiis. Enim, accusantium perspiciatis.
                </p>
                <div className="food-detail-link">
                  <Link className="food-detail-link-item btn blue">
                    Call Chef
                  </Link>
                  <Link className="food-detail-link-item right btn blue">
                    Call Rider
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="div">
            <h4>Menu Lain</h4>
            <hr />
          </div>
          <div className="col m4">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                    "https://1.bp.blogspot.com/-yq3JeHyhxko/XjaXHxpaXiI/AAAAAAAAIl8/BBmQQVEFyhEi72cDdHui_fJA-VeSetEIgCLcBGAsYHQ/s640/IMG_7808.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col m4">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                    "https://lh5.googleusercontent.com/-8j9QFnOpVZ8/TX9jrPH5PzI/AAAAAAAAGng/O_x1qyfdGqg/s1600/P3160091.JPG"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col m4">
            <div className="card">
              <div className="card-image">
                <img
                  src={
                    "https://images.says.com/uploads/story_source/source_image/630583/2c4e.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
