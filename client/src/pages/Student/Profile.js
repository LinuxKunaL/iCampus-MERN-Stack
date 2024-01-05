import React from "react";

import StudentProfile from "../../assets/images/studentProfile.png";
import { MdDelete } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { GoStarFill, GoStar } from "react-icons/go";
import Rating from "react-rating";

function Profile() {
  return (
    <div id="StudentProfile">
      <div className="section-1">
        <div className="section-top">
          <img src={StudentProfile} width={130} alt="" />
          <h1>Hey welcome kunal lokhande</h1>
        </div>
        <div className="section-center">
          <div className="forms">
            <form>
              <h1>Personal information</h1>
              <div className="input-Field">
                <input type="text" value="kunal lokhande" />
              </div>
              <div className="input-Field">
                <input type="text" value="9022126326" />
              </div>
              <div className="input-Field">
                <input type="text" value="20" />
              </div>
              <div className="input-Field">
                <div>
                  <label className="result-preview" htmlFor="UploadedImage">
                    <img
                      width={40}
                      src="https://5.imimg.com/data5/SELLER/Default/2020/11/AE/LR/UN/14961972/marksheet-printing-500x500.jpg"
                      alt=""
                    />
                    <h2> update Mark Sheet </h2>
                    <input hidden id="UploadedImage" type="file" />
                  </label>
                  <span className="btn-primary">view</span>
                </div>
              </div>
              <button className="btn-primary">Submit edit</button>
            </form>
            <form>
              <h1>college information</h1>
              <div className="input-Field">
                <label htmlFor="">select department</label>
                <select name="" id="">
                  <option value="">Computer eng</option>
                  <option value="">civil eng</option>
                  <option value="">mechanical eng</option>
                  <option value="">electrical eng</option>
                  <option value="">other eng</option>
                </select>
              </div>
              <div className="input-Field">
                <label htmlFor="">select year</label>
                <select name="" id="">
                  <option value="">FY</option>
                  <option value="">DSY</option>
                </select>
              </div>
              <button className="btn-primary">Submit edit</button>
            </form>
          </div>
          <div className="section-approval">
            <h1>admission approval</h1>
            <div className="hero">
              <li>
                <div className="clg">
                  <img
                    src="https://srespune.org/front/images/Logo-1.png"
                    alt=""
                  />
                  <span>Srceo sajnsani askj </span>
                </div>
                <b>12-23-2012</b> <p>waiting</p> <MdDelete className="icon" />
              </li>
              <li>
                <div className="clg">
                  <img
                    src="https://srespune.org/front/images/Logo-1.png"
                    alt=""
                  />
                  <span>Srceo sajnsani askj </span>
                </div>
                <b>12-23-2012</b> <p>waiting</p> <MdDelete className="icon" />
              </li>{" "}
              <li>
                <div className="clg">
                  <img
                    src="https://srespune.org/front/images/Logo-1.png"
                    alt=""
                  />
                  <span>Srceo sajnsani askj </span>
                </div>
                <b>12-23-2012</b> <p>waiting</p> <MdDelete className="icon" />
              </li>{" "}
              <li>
                <div className="clg">
                  <img
                    src="https://srespune.org/front/images/Logo-1.png"
                    alt=""
                  />
                  <span>Srceo sajnsani askj </span>
                </div>
                <b>12-23-2012</b> <p>waiting</p> <MdDelete className="icon" />
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <h2>search colleges</h2>
        <div className="section-top">
          <div className="search-box">
            <div className="input-Field">
              <input type="text" placeholder="College Name" />
              <IoSearchSharp className="icon" />
            </div>
            <div className="input-Field">
              <select>
                <option value="">Sort by rating</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            <button className="btn-secondary">search by profile</button>
          </div>
          <div className="search-output">
            <div className="hero-box">
              <img
                width={200}
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="clg-name">
                <img
                  src="https://srespune.org/front/images/Logo-1.png"
                  alt=""
                />
                <span>C. H. M. College, Ulhasnagar</span>
              </div>
              <div className="requirements">
                <b>FY-TY</b>
                <div className="merit">
                  <span>Merit :</span>
                  <b>80%</b>
                </div>
              </div>
              <div className="requirements">
                <b>CS,ME,CV..</b>

                <Rating
                  className="rating"
                  stop={5}
                  initialRating={4}
                  emptySymbol={<GoStar />}
                  fullSymbol={<GoStarFill />}
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
