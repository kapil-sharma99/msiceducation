import React from "react";
import "./Card4.css";
import Batch from "../assets/images/batch.jpg";
import Announcement from "../assets/images/announcement.jpg";
import Chat from "../assets/images/chat.jpg";
import NoticeBoard from "../assets/images/notice_board.jpg";
import Attendence from "../assets/images/attendence.jpg";
import Portfolio from "../assets/images/portfolio.jpg";
import StudyMaterial from "../assets/images/study_material.jpg";
import Timetable from "../assets/images/timetable.jpg";
import VideoBackup from "../assets/images/backup_video.jpg";

const Card4 = () => {
  return (
    <>
      <div className="container container_card4">
        <div className="row row__wrap">
          <div className="col-lg-4 col-xs-12 col-sm-12 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Batch} />
                <div class="descriptions">
                  <h1>Seperate Batch</h1>
                  <p>
                    Seperate Batch feature for every class and course to ensure
                    no ambiguity and confusion among student. All the study
                    materails and other features of particular batch will be
                    shown in the batch page
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Seperate Batch</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Chat} />
                <div class="descriptions">
                  <h1>Live Chat</h1>
                  <p>
                    Every student can interact with the entire batch any time
                    for doubt clearing. Students can also chat with the faculty
                    personally regarding any doubt. This live chat feature is
                    enabled for every batch.
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Live Chat</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={VideoBackup} />
                <div class="descriptions">
                  <h1>Video Backup</h1>
                  <p>
                    Not feeling well? going out for vaccination and will not be
                    able to attend the live class? No problem, Manish sir also
                    solved this one. Students can watch the recorded video of
                    every class after for few days. The recorded lecture will be
                    uploaded after an hour of class completion.
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Video Backup</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={StudyMaterial} />
                <div class="descriptions">
                  <h1>StudyMaterial</h1>
                  <p>
                    PDF of every lecture will be uploaded in the study material
                    section before half an hour of the class. Student and also
                    enjoy extra study material of every particular batch without
                    any extra cost.
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Study Material</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={NoticeBoard} />
                <div class="descriptions">
                  <h1>Notice Board</h1>
                  <p>
                    Notice board feature will help you to get every update of
                    your batch or the app in the home screen. Every message will
                    pop out a notification and also updated in the notice board
                    section.
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Notice Board</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Timetable} />
                <div class="descriptions">
                  <h1>Smart Timetable</h1>
                  <p>
                    Not able to remember the complex timetable? Again Manish sir
                    is here to solve your problem. A seperate section of
                    timetable will help you to remember the date and time of
                    every class. This section will pop out notifications
                    according to the timetable.
                  </p>
                </div>
              </div>
              <div className="bottom_heading text-center bg-dark text-white">
                <h3>Timetable</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Announcement} />
                <div class="descriptions">
                  <h1 style={{ fontSize: "2.2rem" }}>Announcement Section</h1>
                  <p>
                    Every new announcement/update/message will also be appeared
                    here to avoid any mistake. The message in announcement
                    section will also provide you the date and time of
                    announcement to make sure you don't miss any update
                    regarding class.
                  </p>
                </div>
              </div>
              <div
                style={{ marginBottom: "4vh" }}
                className="bottom_heading text-center bg-dark text-white"
              >
                <h3>Announcement Section</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Attendence} />
                <div class="descriptions">
                  <h1>Smart Attendence</h1>
                  <p>
                    Students and parents can monitor the attendence of every
                    month in this section. This section will also show the name
                    and date of every class attendent by you.
                  </p>
                </div>
              </div>
              <div
                style={{ marginBottom: "4vh" }}
                className="bottom_heading text-center bg-dark text-white"
              >
                <h3>Smart Attendence</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-8 mx-auto">
            <div class="wrapper">
              <div class="card4">
                <img src={Portfolio} />
                <div class="descriptions">
                  <h1>Student Porfolio</h1>
                  <p>
                    Every details of student will be available in this section.
                    One can easily upload and update the details. This section
                    will contain details like basic information, personal
                    information, parent's information, student's permanent
                    address and educational details of student.
                  </p>
                </div>
              </div>
              <div
                style={{ marginBottom: "4vh" }}
                className="bottom_heading text-center bg-dark text-white"
              >
                <h3>Student Portfolio</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
