import React, { useState } from "react";
import "./choosemeals.style.scss";
import close from "../../assets/meals/close.svg";
import Search from "../../assets/meals/search.svg";
import plus from "../../assets/meals/plus.svg";
import minus from "../../assets/meals/minus.svg";

const ChooseMealsPage = ({ setModalView }) => {
  const [navItems, setNavItems] = useState(1);
  const navItemArr = [
    { id: 1, name: "Search" },
    { id: 2, name: "World Cuisine" },
    { id: 3, name: "Healthy Recipes" },
    { id: 4, name: "Dinner" },
    { id: 5, name: "Lunch" },
    { id: 6, name: "Breakfast" },
    { id: 7, name: "Salads" },
    { id: 8, name: "Side Dishes" },
    { id: 9, name: "Soup, Stew & Chili Recipies" },
    { id: 10, name: "Appetizers & Snacks" },
    { id: 11, name: "Desserts" },
  ];
  const sideBarTabs = (e) => {};
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        {/* <span class="close">&times;</span> */}
        <div className="choose_meal_row">
          <div className="search_bar_meal">
            <ul onClick={sideBarTabs}>
              {navItemArr.map((tab) => {
                let btnClass = {
                  active: navItems === tab.id,
                };

                return (
                  <li
                    onClick={() => setNavItems(tab.id)}
                    className={btnClass.active ? "active" : ""}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="choose_search_row">
            <div className="search_bar">
              <h3>Search</h3>
              <button onClick={() => setModalView(false)}>
                <img src={close} />
              </button>
            </div>
            <div className="recipee_meal">
              {navItems == 1 && (
                <form>
                  <div className="input_meal">
                    <label>Recipe or Meal by Keyword</label>
                    <input type="text" placeholder="keyword"></input>
                  </div>

                  <div className="input_meal">
                    <label>Include these ingredients</label>
                    <div className="input_inner">
                      <span>
                        <img src={plus} />
                      </span>
                      <input
                        type="text"
                        placeholder="Include  ingredients"
                      ></input>
                    </div>
                  </div>
                  <div className="input_meal">
                    <label>Exclude these ingredients</label>
                    <div className="input_inner">
                      <span>
                        <img src={minus} />
                      </span>

                      <input
                        type="text"
                        placeholder="Exclude  ingredients"
                      ></input>
                    </div>
                  </div>
                  <div className="submit">
                    <button>
                      <img src={Search} /> Search
                    </button>
                  </div>
                </form>
              )}
              {navItems == 6 && (
                <div className="recipee_order_list">
                  <ul>
                    <li>Breakfast Burrito</li>
                    <li>Casserole</li>
                    <li>Crepe</li>
                    <li>Egg</li>
                    <li>french Toast</li>
                    <li>Frittata</li>
                    <li>Granola</li>
                    <li>Omlet</li>
                    <li>Overnight Oat</li>
                    <li>Pancake</li>
                    <li>Quiche</li>
                    <li>Waffle</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMealsPage;
