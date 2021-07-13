import React from "react";
import contact from "./css/img/contact-red.svg";
function Contact() {
  return (
    <footer id="contact" className="bg-dark text-white p-3">
      <h1 className="text-bold text-white text-center mb-5">Get in Touch</h1>
      <div className="row justify-content-around">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <img
            src={contact}
            width="100%"
            height="300"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <form>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="mb-3">
              <label class="form-check-label" for="exampleCheck1">
                Message
              </label>
              <textarea
                name="msg"
                id="commentmsg"
                className="form-control"
                rows="4"
                placeholder="Send a message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              Send a message
            </button>
          </form>
          <div className="social-icons d-flex justify-content-around mt-2">
            <div className="mail">
              <i class="fas fa-envelope"></i>
            </div>

            <div className="github">
              <i class="fab fa-github"></i>
            </div>
            <div className="linkedin">
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="twitter">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1idIm6yVlluYHXrKZr6v_Z_oEr2ADlzhr"
        width="640"
        height="480"
      ></iframe> */}
    </footer>
  );
}

export default Contact;
