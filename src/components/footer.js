import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:arjie.vicuna@gmail.com">arjie.vicuna@gmail.com</a>
          <br />
          Phone: +63 960 332 5803
        </p>
      </div>
      <div class="col-md-4 box" style={{marginLeft:30}}>
              <ul class="list-inline social-buttons">
                {/* <li class="list-inline-item">
                  <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                </li> */}
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/arjie.vicuna">
                  <i class="fab fa-facebook-f"></i>
                </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/arjie-angelo-vicu%C3%B1a-517b37263/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                </li>
              </ul>
            </div>
      <div class="col-md-4">
        <br/>
        <p>Copyright &copy; 2023 Arjie Angelo Vicuña</p>
      </div>
    </div>
  </div>
</footer>

    );
  }
}

export default Footer;
