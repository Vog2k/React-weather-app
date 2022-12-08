import React from "react";


function TextUnderMain() {
return (

    <div className="text-New">
        <section class="section2">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                        Welcome to Tim's Weather application!
                        </h1>
                        <p class="text-small">
                        My app offers real-time updates on any city's current weather,
                        humidity, wind speed and more. I chose to create a weather app to 
                        get a taste of API`s. Using an API has been super fun writing the code 
                        for it was not so much, in saying that I had lots of fun learning react 
                        and how the framework is used throughout the process. <br></br><br></br> So the question is 
                        what is being solved? Say one day you and your significant other would 
                        like to go hiking or just to take a small trip to the beach! What's the first 
                        thing you would do to ensure everything goes well. You open your trusty smartphone 
                        or switch on your desktop to check the weather status of your current city. 
                        My app allows you to see live updates. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="section1">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Funtion and Constructors
                        </h1>
                        <p class="text-small">
                        function App – This originally had the code for the weather Api but I soon got myself lost in all the code that was under this file so decided to create a new .js file and separate the Api code, Now the App.js is used to create the navbar that I am currently using now. <br></br><br></br>
                        const cards - was fun to create having an array with the details of the current Weather<br></br><br></br>
                        TextUnderMain - is just a html document to hold this information that you are currently reading now<br></br><br></br>
                        Para.js Para2.js Para3.js - are all the same besides the current images that they hold and strength rang the lower the number the less the image moves <br></br><br></br>
                        WeatherServices.js - holds the data for the API using const arrays and retrieving the data using the links to the open Weather website  
                        </p>
                    </div>
                </div>
            </section>
            <section class="section1">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Learning process
                        </h1>
                        <p class="text-small">
                        Originally, I wanted to create my app using an Api that was made in 
                        New Zealand my search was cut short by an ad suggesting that I use a 
                        website called https://openweathermap.org/api This was much easier to 
                        follow and incorporate into my app.   
       
                        </p>
                    </div>
                </div>
            </section>
            <section class="section1">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        All references to building this app are below: 
                        </h1>
                        <p class="text-small">
                        https://www.w3schools.com/js/js_api_intro.asp <br></br>
                        https://openweathermap.org/api  <br></br>
                        https://www.w3schools.com/howto/howto_css_center_button.asp <br></br>
                        https://www.w3schools.com/howto/howto_css_transition_hover.asp <br></br>
                        https://www.youtube.com/watch?v=l4MhfReYECU <br></br>



                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer1">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
        )
}


export default TextUnderMain;