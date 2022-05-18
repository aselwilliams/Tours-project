import React from "react";

function Tour({ id, image, info, price, name }) {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        </div>
      </footer>
    </article>
  );
}

export default Tour;
