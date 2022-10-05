import { Toggle } from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll';

export const Navbar = () => {
  return (
    <div className = "nav-wrapper" id="Home">
      <div className = "nav-left">
        {/* <div className = "nav-name">
        </div>
         */}
      </div>
      <div className = "nav-right">
        <div className ="nav-list">
          
          <ul style={{listStyleType:'none'}} className="remove-nav-padding">
          <Toggle />
          {/* <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
             <li>Home</li>
             </Link>
             <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
            <li>Profile</li>
            </Link> 
             <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
            <li>Experience</li>
            </Link> 
             <Link spy={true} to='Portfolio'smooth={true} activeClass='activeClass'>
            <li>Portfolio</li>
            </Link> */}
            
          </ul>
        </div>
        <Link spy={true} to='Contact'smooth={true} activeClass='activeClass'>
        <button className=" button nav-button">Contact</button>
        </Link>
      </div>
      
    </div>
  )
}




