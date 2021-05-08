import React from 'react'
import Footer from '../component/footer'
import Navbar from '../component/navbar'

function Home() {
    return (
        <div>
            <div className="container-fluid homemain background"  >
		        <div className="row homemain full-bg-img flex-center" >
                    <Navbar homeactive="active"
                    />
			        
                    <div className="text-center homemaincontent">
                        <h1>KAWOLEGAL</h1>
                        <h3>A collaborative ecosystem for problem<br/>solvers and support for startups.</h3>
                        <button type="button" className="btn btn-primary registerbtn"><a href="kaworegister.html">Register Now!</a></button>
                    </div>
		        </div>
	        </div>
            <Footer footer_class="homefooter"/>
        </div>
    )
}

export default Home
