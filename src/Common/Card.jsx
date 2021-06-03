import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <>
		<div className="col-md-6 col-lg-4 col-12 mx-auto">
			<div className="cards" style={{borderRadius: "12px"}}>
				<img className="card-img-top rounded img_rot" src={props.img} alt="Card image cap" />
				<div className="card-body">
					<h4 className="card-title text-center cardd-content" style={{height: "4vh"}}><strong>{props.title}</strong></h4>
					<h6 className="card-text text-center cardd-content test_content" style={{height: "4vh"}}>{props.content}</h6>
				</div>
			</div>
		</div>
    </>
    )
}

export default Card;