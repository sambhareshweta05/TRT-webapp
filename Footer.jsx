import React,{Component} from "react";

class Footer extends Component{
    render(){
        return(
            <>
            {/* <!-- Footer
  ============================================= --> */}
  <footer id="footer">
    <section class="section bg-white shadow-md pt-4 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon"> <i class="fas fa-lock"></i> </div>
              <h4>100% Secure Payments</h4>
              <p>Moving your card details to a much more secured place.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon"> <i class="fas fa-thumbs-up"></i> </div>
              <h4>Trust pay</h4>
              <p>100% Payment Protection. Easy Return Policy.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon"> <i class="fas fa-bullhorn"></i> </div>
              <h4>Refer & Earn</h4>
              <p>Invite a friend to sign up and earn up to $100.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="featured-box text-center">
              <div class="featured-box-icon"> <i class="far fa-life-ring"></i> </div>
              <h4>24X7 Support</h4>
              <p>We're here to help. Have a query and need help ? <a href="#">Click here</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <p>Payment</p>
          <ul class="payments-types">
            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="\Asest\images\payment\visa.png" alt="visa" title="Visa"/></a></li>
            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="\Asest\images\payment\discover.png" alt="discover" title="Discover"/></a></li>
            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="\Asest\images\payment\paypal.png" alt="paypal" title="PayPal"/></a></li>
            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="\Asest\images\payment\american.png" alt="american express" title="American Express"/></a></li>
            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="\Asest\images\payment\mastercard.png" alt="discover" title="Discover"/></a></li>
          </ul>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <p>Subscribe</p>
          <div class="input-group newsletter">
            <input class="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail" type="text"/>
            <span class="input-group-append">
            <button class="btn btn-secondary" type="submit">Subscribe</button>
            </span> </div>
        </div>
        <div class="col-md-4 d-flex align-items-md-end flex-column">
          <p>Keep in touch</p>
          <ul class="social-icons">
            <li class="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i class="fab fa-google"></i></a></li>
            <li class="social-icons-linkedin"><a data-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
            <li class="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i class="fab fa-youtube"></i></a></li>
            <li class="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-copyright">
        <ul class="nav justify-content-center">
          <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
          <li class="nav-item"> <a class="nav-link active" href="#">About</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
        </ul>
        <p class="copyright-text">Copyright © 2021 <a href="#">Thulisha Reddy Technologies Pvt Ltd.</a> All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  {/* <!-- Footer end -->  */}
  
            </>
        )
    }
}
export default Footer