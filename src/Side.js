import React from 'react'
import Logo from './image/Logo.svg';
import './css/side.css';
import dash from'./image/dash.svg';
import mem from'./image/mem.svg';
import proj from'./image/proj.svg';
import rocket from'./image/rocket.svg';
import work from'./image/work.svg';
import message from'./image/message.svg';
import {Link} from 'react-router-dom';

function Side() {
  return (
    <div className='side'>
      <img className="logo" src={Logo} alt="gh"/>
      <ul>
        <li><Link className="link" to="/"><img src={dash} alt=""/>DASHBOARD</Link></li>
        <li><Link className="link" to="/"><img src={mem} alt=""/>MEMBERS</Link></li>
        <li><Link className="link" to="/"><img src={proj} alt=""/>PROJECTS</Link></li>
        <li><Link className="link" to="/"><img src={rocket} alt=""/>CLIENTS</Link></li>
        <li><Link className="link" to="/"><img src={work} alt=""/>WORKPLAN</Link></li>
        <li><Link className="link" to="/"><img src={message} alt=""/>MESSAGES</Link></li>
      </ul>
    </div>
  )
  
}
 export default Side;