import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m2">
          <div className="card purple lighten-1 food-category-home ">
            <p className="card-title food-category-home-item white-text ">
              Japanese
            </p>
          </div>
        </div>
        <div className="col m2">
          <div className="card pink lighten-1 food-category-home">
            <p className="card-title food-category-home-item white-text">
              Malay
            </p>
          </div>
        </div>
        <div className="col m2">
          <div className="card deep-purple lighten-1 food-category-home">
            <p className="card-title food-category-home-item white-text">
              Chinese
            </p>
          </div>
        </div>
        <div className="col m2">
          <div className="card teal lighten-1 food-category-home">
            <p className="card-title food-category-home-item white-text">
              Indians
            </p>
          </div>
        </div>
        <div className="col m2">
          <div className="card orange lighten-1 food-category-home">
            <p className="card-title food-category-home-item white-text">
              Drinks
            </p>
          </div>
        </div>
        <div className="col m2">
          <div className="card green lighten-1 food-category-home">
            <p className="card-title food-category-home-item white-text">
              Sides
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m12">
          <p className="flow-text under-food-category">Today's Menu</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://lamanresepi.com/wp-content/uploads/2017/01/Resepi-Nasi-Ayam.jpg"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Nasi Ayam</p>
              <p className="harga-bold">RM3.90</p>
              <p className="truncate">
                Nasi ayam bajet dengan potongan ayam yang besar serta memuaskan
                selera anda!
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://cdn.tasteatlas.com/images/dishes/7be259cbce8d442dba511da533c750af.jpg?w=600&h=450"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Nasi Kerabu</p>
              <p className="harga-bold">RM7.90</p>
              <p className="truncate">
                Nasi kerabu pelbagai jenis lauk yang sangat berbaloi dan puas di
                makan.
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://dishbyili.com/wp-content/uploads/2019/08/Edited-Post-2-1140x700.jpeg"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Chicken Chop</p>
              <p className="harga-bold">RM13.90</p>
              <p className="truncate">
                Chicken chop ayam yang lembut dan mengenyangkan tapi mahal.
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://cdn.rasa.my/wp-content/uploads/2017/09/Untitled-design-2-2.jpg"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Nasi Arab Mandy</p>
              <p className="harga-bold">RM21.90</p>
              <p className="truncate">
                Nasi Arab mandy keturunan asli arab yang wangi dan sedap.
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://www.simplyrecipes.com/wp-content/uploads/2011/04/civil-war-mac-cheese-horiz-a-1800.jpg"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Macaroni Cheese</p>
              <p className="harga-bold">RM43.90</p>
              <p className="truncate">
                Macaroni cheese meleleh yang enak serta menyelerakan tapi mahal
                giler.
              </p>
            </div>
          </div>
        </div>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image card-food-height">
              <img
                src={
                  "https://img-global.cpcdn.com/recipes/1db41d3d3f990c04/751x532cq70/tembikai-laici-lemon-resipi-foto-utama.jpg"
                }
                alt=""
              />
              <Link class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>>
              </Link>
            </div>
            <div className="card-content">
              <p className="flow-text">Tembikai Laici</p>
              <p className="harga-bold">RM1.90</p>
              <p className="truncate">
                Air tembikai laici yang sedap menghilangkan dahaga ketika puasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
