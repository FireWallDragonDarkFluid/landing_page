import React from 'react'
import { Link } from 'react-router-dom'
import img from '../asset/image.jpg'

const Navbar = () => {
  return (
    <section className='navbar'>
        <div className="navbar__logo"><Link to="/">Mizuxe</Link></div>
        <div className='navbar__links'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="">Featured</Link>
                    <div className='mega-menu'>
                        <div className="feature-box">
                            <img src={img} alt="featured" />
                            <h4>7 common mistakes everyone makes while traveling</h4>
                            <p>JOAN WALLACE FEB 18, 2022</p> 
                        </div>
                        <div className="feature-box">
                            <img src={img} alt="featured" />
                            <h4>7 common mistakes everyone makes while traveling</h4>
                            <p>JOAN WALLACE FEB 18, 2022</p> 
                        </div>
                        <div className="feature-box">
                            <img src={img} alt="featured" />
                            <h4>7 common mistakes everyone makes while traveling</h4>
                            <p>JOAN WALLACE FEB 18, 2022</p> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar