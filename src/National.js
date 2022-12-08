import React from 'react';
import "./components/descriptions.css";
import nzw from "./background/nzw.png";
import ImageOne from './components/Para';
import ImageFour from './components/Para4';
import chart from "./background/chart.PNG";



const National = () => {
  return (
    <div>
    <ImageOne/>
    <h1 className='mainText'>New Zealand Weather</h1>
    <div  className='Container2'>
    <div className='insight'>
    
    <img src={nzw} className='logo2' alt='' />
    <h4 className='TextInsight'>      New Zealand’s climate varies wildly. The far north has subtropical weather during summer, 
      while inland alpine areas of the South Island can be as cold as -10°C (14°F) in winter. However, most of the country lies close to the coast, which means mild temperatures year-round. <br></br><br></br>
      The average New Zealand temperature decreases as you travel south. January and February are the warmest months, and July is the coldest month of the year.<br></br><br></br>
      You can check on New Zealand weather conditions on the Met Service website(opens in new window).<br></br><br></br></h4>

      <ImageFour/>
      <h4 className='TextInsight'>What is the weather like in New Zealand?</h4>
      Weather conditions in New Zealand can change quickly - no matter when you visit, you should be prepared for anything! 

      <h4 className='TextInsight'>Sunshine</h4>
      Most places in New Zealand receive over 2,000 hours of sunshine a year – around 83 sunny days. The sunniest areas, Bay of Plenty, Hawke's Bay and Nelson/Marlborough, receive over 2,350 hours of sunshine. As New Zealand observes daylight saving, during summer months daylight can last up until 9.30pm. 
      New Zealand experiences relatively little air pollution compared to many other countries, and less ozone, which makes the UV rays in our sunlight very strong. The sunlight here can quickly burn skin from September to April, especially between 10am and 4pm, even on cloudy days. Be 'SunSmart' by using these three simple steps when you go outdoors:
      Stay in the shade whenever possible.Wear a shirt, hat and sunglasses.Use SPF 30+ sunscreen. Reapply every two hours.

      <h4 className='TextInsight'>Rain</h4>
      New Zealand's average rainfall is high and evenly spread throughout the year. Over the northern and central areas of New Zealand more rain falls in winter than in summer, whereas for much of the southern part of New Zealand, winter is the season of least rainfall. 
      The mountain ranges running along the spine of the South Island divide the country into diverse climate regions. The West Coast of the South Island is the wettest area of New Zealand, while the Central Otago, on the eastern side of the Southern Alps, is the driest. 
      As well as producing areas of stunning native forest, the high rainfall makes New Zealand an ideal place for farming and horticulture.

      <h4 className='TextInsight'>Snow</h4>
      Snow typically appears during the months of June through to October, though cold snaps can occur outside these months. Most snow in New Zealand falls in the mountainous areas, like the Central Plateau in the north, and the Southern Alps in the south. It also falls heavily in inland Canterbury and Otago. While the coastal areas of the North Island may experience some frost overnight in winter, it very rarely snows there.
      <img src={chart} className='logo2' alt='' /></div>
          
      </div>

    <footer className="footer1">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>

    </div>
    
  );
};
  
export default National;