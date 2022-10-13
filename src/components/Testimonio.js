import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="testimonio__container">
      <img className="testimonio__image" src={require(`../assets/testimonio-${props.image}.png`)} alt={`foto de ${props.image}`} />
      <div className="testimonio__text">
        <p className="testimonio__nombre-pais"><strong>{props.name}</strong> en <strong>{props.country}</strong></p>



        <p className="testimonio__cargo">{props.job} en <strong>{props.company}</strong></p>


        <p className="testimonio__about">"{props.about}"</p>
      </div>
    </div>
  );
}

export default Testimonio