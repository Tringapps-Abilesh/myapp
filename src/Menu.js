import React, { Component } from 'react';
import'./css/menu.css';
import bellicon from './image/bellicon.svg';
import searchicon from './image/searchicon.svg';
import profile from'./image/profile.png';
import image1 from'./image/image1.png';
import image2 from'./image/image2.png';
import image3 from'./image/image3.png';
import image4 from'./image/image4.png';
import image5 from'./image/image5.png';
import image6 from'./image/image6.png';
import leftarr from'./image/leftarr.svg';
import rightarr from'./image/rightarr.svg';
import addicon from'./image/addicon.svg';
import excel from'./image/excel.svg';
import pdf from'./image/pdf.svg';
class Menu extends Component {
  render(){
  return (
    <div>
    <nav>
    <div className='menu'>
    <div className='search'>
      <img src={searchicon} alt='bb'/>
      <input type="text" placeholder='Search your project here'/>
  </div>
  <div className='right'>
  <div className='buttonadd'>
    <p ><span>+</span> Add project</p>
    </div>
  <img src={bellicon} className="img1" alt='bb'/>
  <img src={profile} className="img2" alt='bb'/>
  </div>
  </div>


  </nav>
    
  <div className='dashboard'>
    <h2>Dashboard</h2>
    <div className='box'>
    <div className='pie'>
      <div className='topat'>
        <div className='topl'>
      <p className='tx'>Projects overview</p>
      </div>
      <div className='topright'>
      <p className='txt'>Download report</p>
      <img src={excel} className="excel" alt='bb'/>
      <img src={pdf} className="pdf" alt='bb'/>
      </div>
      </div>
      <div className='div'></div>
     






    </div>
    <div className='gallery'>
      <div className='upper'>
      <h3>Project gallery</h3>
          <select name="bar" id="pic">
            <option value="">PlantD-App</option>
            <option value="English">English</option>
          </select>
          </div>
      <div className='div'></div>    
      <div class="grid-container">
    <div class="grid-item"><img src={image1} alt=""/></div>
    <div class="grid-item"><img src={image2} alt=""/></div>
    <div class="grid-item"><img src={image3} alt=""/></div>  
    <div class="grid-item"><img src={image4} alt=""/></div>
    <div class="grid-item"><img src={image5} alt=""/></div>
    <div class="grid-item"><img src={image6} alt=""/></div>  
    </div>

    <div className='lower'>
      <div className='count'>
    <img src={leftarr} className="leftarr" alt=''/>
      <p>6/15</p>
      <img src={rightarr} className="righttarr" alt=''/>
    </div>
    <div className='lowerright'>
    <img src={addicon} className="addicon" alt=''/>
      <p className='para'>Add screens</p>
    </div>
    </div>
    </div>
    </div>
  
 
 <div className='lowbody1'>
 <h5>Current projects</h5>
 <div className='boxes1'>
 <div className='rcom'></div>
 <div className='manga'></div>
 </div>
 </div>


</div>
</div>


  )
}
}
export default Menu;