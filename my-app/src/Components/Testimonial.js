import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
        <p className="primary-subheading"> Work </p>
            <h1 className="primary-heading">What Are They Saying</h1>
            <p className="primary-text">S
                hjhjhldg lkhgdflghl kldgfjgkl kldfgjk dfkgjfdklgj dflkgjkg
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt=""/>
            <p>dshfsdlkh lshdfjfhdj sdhflsdhf lkdskj sdjfds dslkjfdsfj
                kjdksj ksjdkfjk ksdjfksdjf l n nsdl
            </p>
            <div className="testimonial-stars-container"> </div>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>John Doe</h2>
    </div>
  )
}

export default Testimonial