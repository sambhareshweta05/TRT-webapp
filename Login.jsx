import React,{Component} from 'react'

class Login extends Component{
    render(){
        return(
            <>
            
{/* <!-- Login Modal
=========================== --> */}
<div id="login-modal" className="modal fade" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content border-0">
      <div className="modal-body py-4 px-0">
        <button type="button" className="close close-outside" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        {/* <!-- Login Form
        ====================== --> */}
        <div className="row">
          <div className="col-11 col-md-10 mx-auto">
            <ul className="nav nav-tabs nav-justified mb-4" role="tablist">
              <li className="nav-item"> <a className="nav-link text-5 line-height-3 active">Login</a> </li>
              <li className="nav-item"> <a className="nav-link text-5 line-height-3" href="" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal">Sign Up</a> </li>
            </ul>
            <p className="text-4 font-weight-300 text-muted text-center mb-4">We are glad to see you again!</p>
            <form id="loginForm" method="post">
              <div className="form-group">
                <input type="email" class="form-control" id="emailAddress" required placeholder="Mobile or Email"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="loginPassword" required placeholder="Password"/>
              </div>
              <div className="row my-4">
                <div className="col">
                  <div class="form-check text-2 custom-control custom-checkbox">
                    <input id="remember-me" name="remember" class="custom-control-input" type="checkbox"/>
                    <label class="custom-control-label" for="remember-me">Remember Me</label>
                  </div>
                </div>
                <div className="col text-2 text-right"><a class="btn-link" href="" data-toggle="modal" data-target="#forgot-password-modal" data-dismiss="modal">Forgot Password ?</a></div>
              </div>
              <button className="btn btn-primary btn-block my-4" type="submit">Login</button>
            </form>
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1"/>
              <span className="mx-2 text-2 text-muted">Or Login with Social Profile</span>
              <hr className="flex-grow-1"/>
            </div>
            <div className="d-flex  flex-column align-items-center mb-3">
              <ul className="social-icons social-icons-colored social-icons-circle">
                <li className="social-icons-facebook"><a href="#" data-toggle="tooltip" data-original-title="Log In with Facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li className="social-icons-twitter"><a href="#" data-toggle="tooltip" data-original-title="Log In with Twitter"><i class="fab fa-twitter"></i></a></li>
                <li className="social-icons-google"><a href="#" data-toggle="tooltip" data-original-title="Log In with Google"><i class="fab fa-google"></i></a></li>
                <li className="social-icons-linkedin"><a href="#" data-toggle="tooltip" data-original-title="Log In with Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <p className="text-2 text-center mb-0">New to TRT Platform? <a className="btn-link" href="/Signup" data-toggle="modal" data-target="#signup-modal" data-dismiss="modal">Sign Up</a></p>
          </div>
        </div>
        {/* <!-- Login Form End -->  */}
      </div>
    </div>
  </div>
</div>
{/* <!-- Login Modal End --> */}

            </>
        )
    }
}
export default Login