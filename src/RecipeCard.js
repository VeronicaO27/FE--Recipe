import React, { useState } from "react";
import { ReactComponent as Time } from "./icon/time.svg";
import { ReactComponent as Kcal } from "./icon/kcal.svg";
import { ReactComponent as Serving } from "./icon/serving.svg";
import { ReactComponent as Source } from "./icon/source.svg";
import { ReactComponent as Open } from "./icon/open.svg";

//protyping code therefore its dirty code

const RecipeCard = ({
  title,
  cal,
  image,
  ingredients,
  time,
  source,
  servings
}) => {
  const [showResults, setShowResults] = useState(false);
  const toggleTrueFalse = () => setShowResults(!showResults);

  return (
    <container className="container">
      <section className="cover">
        <img className="image" src={image} alt={title} />
      </section>
      <div className="middle">
        <p className="title">{title}</p>
        <div className="stats">
          <div className="statItem">
            <Kcal />
            <p className="big-number">{Math.round(cal)}</p>
            <p className="small-text">kcal</p>
          </div>
          <div className="statItem">
            <Serving />
            <p className="big-number">{servings ? servings : "4"}</p>
            <p className="small-text">servings</p>
          </div>
          <div className="statItem">
            <Time />
            <p className="big-number">{time ? time : "30"}</p>
            <p className="small-text">mins</p>
          </div>
          <div className="statItem">
            <a href={source}>
              <Source />
              <p className="big-number">Go</p>
              <p className="small-text">to source</p>
            </a>
          </div>
        </div>
        <div className="ingredients-container">
          <div className="title-wrapper">
            <p className="ingredients-title">Ingredient</p>
            <span onClick={toggleTrueFalse}>
              <Open />
            </span>
          </div>
          {showResults ? (
            <ol className="ingredients-list">
              {ingredients.map((ingredient) => (
                <p>{ingredient.text}</p>
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </container>
  );
};

export default RecipeCard;
