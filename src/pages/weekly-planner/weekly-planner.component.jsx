import React from "react";

import "./weekly-planner.styles.scss"

import not_yet from "../../assets/LinkedIn.png";

const WeeklyPlannerPage = () => {
    return (
        <div className="weekly-planner">

            <h1 className="page-title">Weekly Planner</h1>
        
            <div className="days">
                <div className="day">
                    <h3 className="day-of-week">Monday</h3>
                    <div className="meals">
                    
                        <div className="meal">
                            <div className="title not-yet">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                    <h3 className="day-of-week">Tuesday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                    <h3 className="day-of-week">Wednesday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                    <h3 className="day-of-week">Thursday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                <h3 className="day-of-week">Friday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                    <h3 className="day-of-week">Saturday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
                <div className="day">
                    <h3 className="day-of-week">Sunday</h3>
                    <div className="meals">
                        <div className="meal">
                            <div className="title">Breakfast</div>
                        </div>
                        <div className="meal">
                            <div className="title">Lunch</div>
                        </div>
                        <div className="meal">
                            <div className="title">Dinner</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default WeeklyPlannerPage;