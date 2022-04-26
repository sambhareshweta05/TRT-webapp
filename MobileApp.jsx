import React,{ Component } from 'react'

class MobileApp extends Component{
    render(){
        return(
            //         !-- Mobile App
            // ============================================= -->
            <section class="section pb-0">
            <div class="container">
                <div class="row">
                <div class="col-md-5 col-lg-6 text-center"> <img class="img-fluid" alt="" src="\Asest\images\app-mobile.png"/> </div>
                <div class="col-md-7 col-lg-6">
                    <h2 class="text-9 font-weight-600 my-4">Download Our TRT<br class="d-none d-lg-inline-block"/>
                    Mobile App Now</h2>
                    <p class="lead">Download our app for the fastest, most convenient way to send Recharge.</p>
                    <ul>
                    <li>Stocks</li>
                    <li>Score</li>
                    <li>News</li>
                    <li>Weather</li>
                    <li>Train</li>
                    <li>and much more.....</li>
                    </ul>
                    <div class="d-flex flex-wrap pt-2"> <a class="mr-4" href=""><img alt="" src="\Asest\images\app-store.png"/></a><a href=""><img alt="" src="\Asest\images\google-play-store.png"/></a> </div>
                </div>
                </div>
            </div>
            </section>
            // {/* <!-- Mobile App end -->  */}

        )
    }
}
export default MobileApp