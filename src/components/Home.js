import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../contexts/FoodContext";

const Home = () => {
  const { foods } = useContext(FoodContext);
  console.log(foods);
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
        {foods.map((food) => {
          return (
            <div className="col m4">
              <div className="card hoverable">
                <Link className="black-text" to={"/food-detail/:food_id"}>
                  <div className="card-image card-food-height">
                    <img src={food.foodImage} alt="" />
                    <Link class="btn-floating halfway-fab waves-effect waves-light red">
                      <i class="material-icons">add</i>>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p className="flow-text">{food.foodName}</p>
                    <p className="harga-bold">{food.foodPrice}</p>
                    <p className="truncate">{food.foodDesc}</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
