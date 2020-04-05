import React, { createContext, useState } from "react";
export const FoodContext = createContext();

const FoodContextProvider = (props) => {
  const [foods, setFoods] = useState([
    {
      foodChef: "Makcik Kiah",
      foodName: "Nasi Ayam",
      foodPrice: "RM3.90",
      foodDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
      foodId: 1,
    },
  ]);
  return (
    <FoodContext.Provider value={{ foods }}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
