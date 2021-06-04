import React from 'react'
import {NavLink} from 'react-router-dom';
import mainImg from '../../assets/images/mainSVG.svg';
import Carousel2 from '../../Common/Carousel2';
import Manish from '../../assets/images/Manish.jpeg'
import RandomTypist from '../Typist/RandomTypist';
import './Home.css';
import Timeline2 from '../../Common/Timeline2';
import Carousel from '../../Common/Carousel';

const Home = () => {
  return (
		<>
			<section id="header" className="d-flex align-items-center home_head">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto padd">
							<div className="row d-flex justify-content-center">
							<Carousel2 />
							<div className="col-lg-5 order-1 order-lg-2 header-img">
								<img src={mainImg}  className="img-fluid ani__image animated" alt="homeImg"/>
								<h1 className="head"><strong className="head-strong">Manish Sharma's </strong>Institute of Commerce</h1>
								<h4 className="text-center line_ex" ><strong>An exclusive place for commerce education</strong></h4>
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="home__dash home__dash1">
				<p className="align-items-center dash"></p>
			</div>
			<RandomTypist />
			<div className="container_about about-main rounded">
				<h2><strong>Manish Sharma</strong></h2>
				<h3>Educator & Mentor</h3>
				<div className="image">
					<img className="rounded-circle about_home_img" src={Manish} alt="Manish Sharma" />
				</div>
				<p>
					In the last 15 years, MSIC has emerged into one of the most demanded coaching centre in Cuttack.
					Our Institute believes in reliability, quality and standards. The Faculty ( Manish Sir) of our Institute are highly experienced and completely committed towards coaching, training and being the right guide for each and every student. Our parents and students have continuously supported and appreciated our teaching methods and we are proud of them.
					Take advantage of some of the best guides who are up-to-date with the latest happenings and methodologies followed in the education scenario. We help you with extensive study materials, assignments, back up classes which are made to help you learn according to your grade and for better comprehension. Regular exams are conducted so that students can know where they stand and strive to improve and achieve their goals. Our fee structure is also Cost effective.
				</p>
				<div className="footer_testimonial_button">
					<NavLink className="btn1" to='/about'>More About Us</NavLink>
          			<NavLink className="btn1" to="/testimonial">
            			Testimonials
          			</NavLink>
        		</div>
			</div>
			<div className="home__dash">
				<p className="align-items-center dash"></p>
			</div>
			<div className="container">
				<h1 className="heading_home text-center">
          			<strong className="highlighted">Our Services</strong>
        		</h1>
				<Timeline2 />
			</div>
			<br />
			<div className="home__dash">
				<p className="align-items-center dash"></p>
			</div>
			<div className="container cont_details">
				<h1 className="heading_home text-center" style={{marginBottom: "4vh"}}><strong className="highlighted">Online Classes Details</strong></h1>
				<h3 className="online_content">“We are on a lockdown” this isn’t a valid excuse to let our student's education suffer. MSIC is here to help you shift your education online. Conduct lectures by live-streaming securely from your home at no extra cost. Live class can directly be joined from mobile application of MSIC. Every information regarding online classes will be available in MSIC app.</h3>
				<h4 className="online_content_temp">Benefits: </h4>
				<ul className="online_content_benefits">
					<li>Flexible schedule and safe environment</li>
					<li>Easily communicate with students</li>
					<li>Recover class at home.</li>
				</ul>
			</div>
			<br />
			<div className="cont_owl_carousel">
				<Carousel />
			</div>
		</>	
  )
}

export default Home
