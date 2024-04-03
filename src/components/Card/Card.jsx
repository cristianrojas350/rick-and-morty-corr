import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";




const Card = ({ page, results, myFavorites, id }) => {
  const [isFav, setIsFav] = useState(false);
  

 

  useEffect(() => {
    if (myFavorites) {
      const favoriteIds = new Set(myFavorites.map((fav) => fav.id));
      setIsFav(favoriteIds.has(id));
      
    }
  }, [myFavorites]);
  

  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">última ubicación</div>
                <div className="fs-5">{location.name}</div>
              </div>
              <button onClick={() => {}}>
                {isFav ? "❤️" : "🤍"}
              </button>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No se encontró el personaje :/";
  }

  return <>{display}</>;
};

export default Card;
