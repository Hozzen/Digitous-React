import React from "react";
import catalog from "../catalog.json";

class FilmsPage extends React.Component {
  render() {
    return (
      <div>
        {catalog.map((films) => {
          return (
            <ul>
              <li>
                {films.title}
                {films.director}
                {films.stars}
                {films.image}
                {films.description}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default FilmsPage;
