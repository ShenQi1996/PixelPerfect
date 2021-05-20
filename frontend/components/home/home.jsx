import React from 'react';
import {Link} from 'react-router-dom'



const Home = () =>{
  return(
      <div className="body_box">
        <div className="top_image_box">
          <div className="top_image_content">
              <h2>Discover and share the wrold you envision</h2>
              <p>Get inspired with incredible arts from diverse styles and genres
                  around the world.  We're not guided by fads - just great artist.</p>
                  <button><Link to="/signup" className="link_with_no_underLine">Sign up</Link></button>
            </div>
        </div>
        <div className="about_content_box">
          <h3>What makes us different?</h3>
          <div className="about_content">
            <span className="plant"></span>
              <h4>Grow as a artist</h4>
              <p>Get immediate exposure with your first upload. Our Pulse algorithm
                surfaces new arts and artists, ensuring your arts are seen
                by the community so you receive valuable feedback on day one.</p>
            </div>
          <div className="about_content">
            <span className="ruler"></span>
              <h4>Build your career</h4>
              <p>Present yourself as a professional. Get hired by displaying your
            services, create a Directory listing, showcase the workshops you're
            holding, and create Galleries to highlight your work.</p>
          </div>
          <div className="about_content">
            <span className="statistics"></span>
            <h4>See how you're performing</h4>
            <p>With Statistics and Pulse you get valuable insights into how your
              arts are performing and how you rank in comparison to other
              artists in the community.</p>
          </div>
        </div>
        <div className="content_box_container">
          <div className="content_box">
            <h3>Join our community today</h3>
            <p>Do you love arts? Want to constantly stay inspired and be surrounded by 
                millions of like-minded creators? Then sign-up today and get rewarded for your 
                love of art.</p>
            <button><Link to='/signup' className="link_with_no_underLine" >Sign up</Link></button>
          </div>
        </div>
        <div className="content_box_container2">
            <div className="content_box2">
                <h1>Social</h1>
                <ul>
                  <li>
                  <i className="fab fa-github"></i>
                    <a href="">Github</a>
                  </li>
                  <li>
                  <i className="fab fa-linkedin"></i>
                    <a href="">LinkedIn</a>
                  </li>
                </ul>
            </div>
            <div className="content_box2">
                <h1>Community</h1>  
                <ul>
                  <li>
                    <a href="">Discover</a>
                  </li>
                </ul>
            </div>
        </div>
        <div>
          <footer>
            <div>
              PixelPerfect - 2021
            </div>
          </footer>
        </div>
      </div>
  )
}

export default Home