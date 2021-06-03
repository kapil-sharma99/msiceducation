import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import Modal from '../../Common/Modal';

const Contact = () => {

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    address: "",
    clicked: false,
  })

  const formSubmit = (e) => {
    alert("Mail Sent!!")
    setData({clicked: !data.clicked});
    e.preventDefault();
    emailjs.sendForm('service_w7ubhui', 'template_buz63kt', e.target, 'user_FySgqs5JTickhjeGinlyl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      const {name} = e.target;
      setData((prev) => {
        return {
          ...prev,
          [name]: "",
        }
      })
      setData({name: "", phone: "", email: "", address: "", course: ""});
  };
  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  console.log(data);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong>Contact Us</strong></h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input name="name" value={data.name} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Manish Sharma" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input name="phone" value={data.phone} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="1234567890" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Course you want to join</label>
                <select name="course" value={data.course} onChange={InputEvent} className="form-control" id="exampleFormControlSelect1">
                  <option>--Select--</option>
                  <option>CBSE 11th / 12th</option>
                  <option>CHSE +2</option>
                  <option>BBA</option>
                  <option>B.COM</option>
                  <option>M.COM</option>
                  <option>CA/CS/ICWAI Foundation</option>
                  <option>IMBA</option>
                  <option>GST Training</option>
                  <option>Tally ERP</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Your Address</label>
                <textarea name="address" onChange={InputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div>
                <input type="submit" style={{marginBottom: "3vh"}} className="btn btn-info btn-lg btn-block"></input>
                {data.clicked ? <Modal /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
