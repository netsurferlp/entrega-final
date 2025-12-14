import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

//footer
const Footer= () => {
  return (
    <footer className='container-fluid'>
        <hr />
       <div className="copyright">
                    <Link to="https://www.linkedin.com/in/gastonpessolano" className="linkedin"><FaLinkedin /></Link>  &copy;Copyright 2025 <strong><span>Pessolano Gastón</span></strong>
                </div>
    </footer>
  )
}

export default Footer