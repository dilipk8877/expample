import React, { useEffect, useState } from "react";
import recipee from "../../assets/meals/recipee.svg";
import meal from "../../assets/meals/meal.svg";
import arrow from "../../assets/meals/arrow.svg";
import rightarrow from "../../assets/meals/rightarrow.svg";
import fried from "../../assets/meals/fried.png"
import "./food.styles.scss";
import ChooseMealsPage from "../../components/choose-meals/choosemeals.component";
import moment from 'moment'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import startOfWeek from "date-fns/startOfWeek";
import CalendarItems from "../../components/CalendarItems/CalendarItems";
const FoodPage = () => {
  // <-----------------------------moment---------------------------------------------->
  let today = moment().toDate();
  let [currentWeek,setCurrentWeek] = useState(today)
  var dayNum = moment().day();
//   var startDate = moment()
//   var endDate = moment()
// var weekStart = moment().clone().startOf(currentWeek,"week")
// var weekEnd = moment(startDate).add(5, 'days');
// var weekEnd = moment().endOf("week")

// var enumerateDaysBetweenDates = function(startDate, endDate) {
//   var dates = [];

//   startDate = startDate.add(1, 'days');

//   while(startDate.format('M/D/YYYY') !== endDate.format('M/D/YYYY')) {
//     dates.push(startDate.toDate());
//     startDate = startDate.add(1, 'days');
//   }

//   return dates;
// };
// const days = enumerateDaysBetweenDates(startDate,endDate)

// let today = startOfToday()
// let [currentWeek,setCurrentWeek] = useState(today)
// const dayNum = getDay(today);

const weekStart = startOfWeek(currentWeek,{ weekStartsOn: dayNum },{ days: 7 });
const weekEnd = endOfWeek(currentWeek, { weekStartsOn: dayNum }, { days: 7 });

console.log(weekStart)
console.log(weekEnd)

  

  let days = eachDayOfInterval({
    start: weekStart,
    end: weekEnd,
  });
  
  function showTodayWeek() {
    setCurrentWeek(today);    
  }
  
  const previousButton = () =>{
    // let firstDayOfTheWeek =moment(weekStart.to({weeks : -1}));
    let firstDayOfTheWeek =add(weekStart,{weeks: -1});
    setCurrentWeek(firstDayOfTheWeek)
  }
  
  const nextButton = () =>{
    // let firstDayOfTheWeek =moment(weekStart.to({weeks:1}));
    let firstDayOfTheWeek =add(weekStart,{weeks: 1});
    setCurrentWeek(firstDayOfTheWeek)
  }
  console.log(currentWeek)



  return (
    <div className='meal_plan_row'>
      <div className='recipee_sidebar'>
        <h3>Food</h3>
        <ul>
          <li><img src={recipee} /> Recipies</li>
          <li className='active'><img src={meal} /> Meal Planner</li>
        </ul>
      </div>
      <div className='meal_planner_col'>
        <div className='meal_planner_row'>
          <div className='meals_today'>
            <h4>Meal Planner</h4>
            <button onClick={showTodayWeek}>Today</button>
            <div className='arrows'>
              <button onClick={previousButton}><img src={arrow} /> </button>
              <button onClick={nextButton}><img src={rightarrow} /> </button>
            </div>
            {/* <span className="time_between">
              {format(weekStart, "MMMM d")} -{" "}
              {format(weekStart, "MMMM") !== format(weekEnd, "MMMM")
                ? format(weekEnd, "MMMM d")
                : format(weekEnd, "d")}
            </span> */}
             <span className="time_between">
             {moment(weekStart).format("MMM D")} - {moment(weekEnd).format("D")}
            </span>
          </div>
          <div className='lunch_type'>
            <label>
              <input type="radio" name='food'></input>
              <span></span>
              Breakfast
            </label>
            <label>
              <input type="radio" name='food'></input>
              <span></span>
              Lunch
            </label>
            <label>
              <input type="radio" name='food'></input>
              <span></span>
              Dinner
            </label>
          </div>
        </div>

        <div className="mealsday_row">
            {days.map((day)=>{
              return(
                <CalendarItems 
                mealDay={moment(day).format('ddd')}    
                mealDate={moment(day).format('D')}  
                // mealDay={format(new Date(day), "EEEE")}
                  // mealDate={format(day, "d")} 
                />
              )
            })}

        </div>
      </div>
    </div>
  )


};

export default FoodPage;
