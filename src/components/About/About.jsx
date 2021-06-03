import React from 'react'
import Contact from '../Contact/Contact';
import './About.css';
import Manish from '../../assets/images/Manish.jpeg';
import './About.css';
import Timeline from '../../Common/Timeline';
import Card3 from '../../Common/Card3';

const About = () => {
  return (
    <>
      <div>
        <h1 className="heading text-center">
          <strong className="highlighted">About Us</strong>
        </h1>
      </div>
      <div className="text-center container_about_main">
        <h2><strong>Manish Sharma</strong></h2>
          <h3>Educator & Mentor</h3>
          <div className="image_about">
            <img className="rounded-circle img_about" src={Manish} alt="Manish Sharma" />
          </div>
          <p>
            In the last 15 years, MSIC has emerged into one of the most demanded coaching centre in Cuttack.
            Our Institute believes in reliability, quality and standards. The Faculty ( Manish Sir) of our Institute are highly experienced and completely committed towards coaching, training and being the right guide for each and every student. Our parents and students have continuously supported and appreciated our teaching methods and we are proud of them.
            Take advantage of some of the best guides who are up-to-date with the latest happenings and methodologies followed in the education scenario. We help you with extensive study materials, assignments, back up classes which are made to help you learn according to your grade and for better comprehension. Regular exams are conducted so that students can know where they stand and strive to improve and achieve their goals. Our fee structure is also Cost effective.
          </p>
        </div>
        <div className="text-center container_app">
          <h2>Learning App Support</h2>
          <p className="about_app_p1">
            One Platform connecting the parents, students, Faculties with latest updates of student’s progress. Easy online access to attendance, performance and schedule from the comfort of their home with the help of smart scheduling system.
          </p>
          <p className="about_app_p1">
            All backup videos available on app and students may recover class at home at their ease.
          </p>
          <p className="about_app_p2">
          Our comprehensive reports provide detailed diagnosis of student’s performance. Guardians can monitor their ward’s performance through this APP. with latest updates of the Student Progress
          </p>
      </div>
      <div className="container_key text-center">
        <h2>Key Highlights</h2>
        <Timeline />
      </div>
      <br />
      <div className="container_study mx-auto text-center">
        <h2>Books written by us</h2>
          <div className="col">
            <Card3 />
        </div>
      </div>
      <br />
      <div className="container_note text-center">
        <h2><strong>Important note for Students</strong></h2>
        <p>
          To avail such benefit students must attend class regularly and complete home assignments properly.
          Students attending classes irregularly and not doing home assignments cannot get real benefit of this institute.
        </p>
      </div>
      <br />
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-10 col-sm-10 col-md-10 mx-auto">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe 
                  title="Location"
                  width="100%" 
                  height="500" 
                  id="gmap_canvas" 
                  src="https://maps.google.com/maps?q=MANISH%20SHARMA'S%20INSTITUTE%20OF%20COMMERCE,%20Nimchouri,%20Cuttack,%20Odisha,%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0">
                </iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default About;
