import React from "react";
import "../components/AboutSection.css"
  
const AboutSection = () => {
  return (
    <div>

<div class="site-main">

  <main>
    <section class="toc-section">
      <div class="container1">
        <div class="row">
          <div class="col">
            <div class="toc">
              <h2>About the app</h2>
              <p>The NZ Weather App for iPhone, iPad and Android is your everyday weather app! 
              It's available free in the app store and includes your local city forecast, 
              2 hourly forecast, rain radar and severe weather information.</p>
              
              <h2>Investors</h2>
              <p>- OrangeCliffe. OrangeCliffe College is one of New Zealand’s highest ranked 
              and awarded research institutions in the private sector and has a long-standing 
              record of academic excellence.<br></br><br></br>
              - Jeff Bezole CEO of Rainforest.<br></br><br></br>
              - Elon musket CEO Gas and diesel cars <br></br><br></br>
              - Jacinda Hardern Prime Minister of Old Zeland <br></br><br></br>
            
               </p>


              <h2>Add-on's in the future</h2>
              <p><br></br>-Rural Weather App <br></br><br></br>
              <br></br>-Snow Weather App<br></br><br></br>
              <br></br>-Marine App<br></br><br></br>
               </p>
</div>
          </div>
          <div class="col">
            <div class="toc-sidebar">
              <button class="toggle-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#134859" />
                </svg>
              </button>
              <h2>Table of content</h2>
              <ul class="list-toc">
              <p>About<br></br><br></br>
              Investors<br></br><br></br>
              Add-on</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer1">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
</div>

    </div>
    
  );
};
  
export default AboutSection;