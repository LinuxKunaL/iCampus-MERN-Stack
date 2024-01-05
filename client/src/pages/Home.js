import React from "react";

import studentSearch from "../assets/images/student_search.jpg";
import professor from "../assets/images/professor.jpg";

import GroupStudent from "../assets/images/Group_student_3.png";
import { MdReviews } from "react-icons/md";
import { FaChalkboardTeacher, FaSearch } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { GiMechanicalArm } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import StudentsPhoto from "../assets/svg/mix.svg";

function Home() {
  AOS.init();

  return (
    <div id="Home">
      <div className="section-1">
        {/* <img src={maleStudent} alt="" /> */}

        <div className="hero-text">
          <span data-aos="zoom-out">fast and better</span>
          <h1 data-aos="zoom-out">Welcome to ICampus - Your Gateway to Academic Excellence!</h1>
          <p data-aos="zoom-out">
            recommendation system, blending cutting-edge algorithms with your
            unique preferences, swiftly guides you to your best-fit academic
            path.
          </p>
          <div className="buttons">
            <button data-aos="zoom-out" className="btn-primary">Sign In</button>
            <button data-aos="zoom-out"className="btn-secondary">Sign Up</button>
          </div>
        </div>
        <img data-aos="zoom-out-down" src={StudentsPhoto} alt="" />
        {/* <img src={femaleStudent} alt="" /> */}
      </div>
      <div data-aos="zoom-out-down"  className="section-2">
        <div  data-aos="fade-up"className="section-top">
          <h2>Departments</h2>
          <p>all departments are available</p>
        </div>
        <div className="section-center">
          <div data-aos="fade-up-right" className="hero-box">
            <MdEngineering />
            <b>Civil engineering</b>
            <span>colleges : 55</span>
          </div>
          <div data-aos="fade-up"className="hero-box">
            <RiComputerFill />
            <b>Computer engineering</b>
            <span>colleges : 55</span>
          </div>
          <div data-aos="fade-up"className="hero-box">
            <GiMechanicalArm />
            <b>mechanical engineering</b>
            <span>colleges : 55</span>
          </div>
          <div  data-aos="fade-up-left"className="hero-box">
            <MdElectricBolt />
            <b>Electrical engineering</b>
            <span>colleges : 55</span>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div data-aos="zoom-out-up" className="section-top">
          <h2>Our Services</h2>
          <p>
            Discover the features that make EduConnect the perfect platform for
            students and colleges.
          </p>
        </div>
        <div className="section-bottom">
          <div data-aos="fade-up" className="hero-box">
            <FaChalkboardTeacher />

            <div className="text">
              <h2>College Admin Portal</h2>
              <p>
                College administrators can log in and easily upload/update their
                college information.
              </p>
            </div>
            {/* <div className="img">
              <img src={professor} alt="" />
            </div> */}
          </div>
          <div data-aos="fade-up" className="hero-box">
            <FaSearch />
            <div className="text">
              <h2>Search Colleges by Marks</h2>
              <p>
                Students can efficiently search for colleges based on their
                academic performance and marks.
              </p>
            </div>
            {/* <div className="img">
              <img src={studentSearch} alt="" />
            </div> */}
          </div>
          <div data-aos="fade-up" className="hero-box">
            <FaRankingStar />
            <div className="text">
              <h2>Rank Colleges by Rating</h2>
              <p>
                Students have the ability to rank colleges based on ratings,
                helping others make informed decisions.
              </p>
            </div>
            {/* <div className="img">
              <img src={professor} alt="" />
            </div> */}
          </div>
          <div data-aos="fade-up" className="hero-box">
            <MdReviews />
            <div className="text">
              <h2>Student Reviews</h2>
              <p>
                Encourage students to share their experiences and provide
                valuable reviews for colleges.
              </p>
            </div>
            {/* <div className="img">
              <img src={professor} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="section-4">
        <img src={GroupStudent} alt="" />
      </div>
    </div>
  );
}

export default Home;
