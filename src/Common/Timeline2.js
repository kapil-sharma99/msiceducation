import React from "react";
import "./Timeline2.css";

const Timeline2 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              <div className="timeline " style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <h3 className="title">Smart Classes</h3>
                  <p className="description">
                    Insititute is aided with Recording of Video lecture classes
                    and Projector cum Visulizer. Student can re-visit any class
                    with recorded backup video.
                  </p>
                </a>
              </div>
              <div className="timeline" style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fas fa-video"></i>
                  </div>
                  <h3 className="title">Video Backup Classes</h3>
                  <p className="description">
                    Backup Video Class is provided so that no class is missed by
                    the Student.
                  </p>
                </a>
              </div>
              <div className="timeline" style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h3 className="title">Students & Parents App Facility</h3>
                  <p className="description">
                    Easy online access to attendance, performance and schedule
                    from the comfort of their home with the help of smart
                    scheduling system through App.
                  </p>
                </a>
              </div>
              <div className="timeline" style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h3 className="title">Students Library</h3>
                  <p className="description">
                    Collection of Books and Materials is maintained at the
                    Institute for the Students.
                  </p>
                </a>
              </div>
              <div className="timeline" style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fas fa-chalkboard"></i>
                  </div>
                  <h3 className="title">
                    Projector Cum Visualizer based teaching
                  </h3>
                  <p className="description">
                    Projector and Visulization based teaching which helps
                    students in grasping the tough concepts with ease.
                  </p>
                </a>
              </div>
              <div className="timeline" style={{ borderLeftWidth: "0px" }}>
                <a className="timeline-content">
                  <span className="timeline-year">MSIC</span>
                  <div className="timeline-icon">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <h3 className="title">Regular Test Evaluation</h3>
                  <p className="description">
                    Our arrangement of full-length tests, mock-tests and so
                    forth get you prepared for the board test and you confirm
                    you dimension of planning.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline2;
