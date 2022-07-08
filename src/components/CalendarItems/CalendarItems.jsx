import React from "react";
import fried from "../../assets/meals/fried.png";

const CalendarItems = ({mealDate,mealDay,setModalView}) => {
  return (
    <div className="meals_col">
      <h6 className="meal_day">{mealDay}</h6>
      <h5 className="meals_date">
        {mealDate}
      </h5>
      <div className="dish_with_swap">
        <img src={fried} />

        <h4 className="dishname">Fried Eggs</h4>
        <div className="swap_rate">
          <span>Swap</span>
          <span onClick={() =>setModalView(true)}>Choose</span>
          <span>Rate</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarItems;
