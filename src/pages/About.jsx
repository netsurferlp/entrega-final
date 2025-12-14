import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//nosotros
const About = () => {
  document.title = "NetsurferLP | Sobre mi";
  return (
    <>


<div className="card mb-8 text-bg-secondary mx-auto sm-w-100 mt-3" >
  <div className="row g-0">
    <div className="col-md-4 mt-4 ml-2">
      <img src="https://www.netsurferlp.ar/curso_frontend/media/profile_pagina.png" class="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">Sobre mi</h2>
        <h5 className="card-text"> - Versátil - Pro-activo - Autodidacta - Curioso - Incansable -</h5>
        <p className="card-text">Soy Versátil, me adapto a los cambios y paradigmas del momento.           
                            Soy Pro-activo siempre busco mejorar o modificar para buscar el mejor rendimiento y la relación costo-beneficio.
                            Soy Autodidacta, si algo no tengo conocimiento, me pongo a investigar y estudio para aprender nuevos conocimientos.
                            Soy Curioso porque siempre estoy aprendiendo nuevas cosas, investigo, trato de estar en lo ultimo de la tecnología y tendencias.
                            Soy Incansable, no me doy por vencido ante los problemas, analizo y busco la mejor solución. </p>
        <h3 className="card-text">Redes Sociales</h3>
        <p className="card-text"><Link to="https://www.linkedin.com/in/gastonpessolano" className={styles.redes} ><FaLinkedin /></Link> 
        <Link to="https://github.com/netsurferlp" className={styles.redes}><FaGithub /></Link>
        <Link to="https://www.instagram.com/gastonurielpessolano/" className={styles.redes}><FaInstagram /></Link>
        <Link to="https://www.facebook.com/gaston.uriel.pessolano" className={styles.redes}><FaFacebook /></Link> 
        <Link to="https://api.whatsapp.com/send/?phone=5492216411104&text&type=phone_number&app_absent=0" className={styles.redes}><FaWhatsapp /></Link> </p>
        <h3 className="card-text">Sitios Webs Desarrollados</h3>
        <ul class="list-group">
    <li class="list-group-item"><Link to="https://netsurferlp.ar" className={styles.link}>NETSURFERLP</Link></li>
    <li class="list-group-item"><Link to="https://netsurferlp.ar/cv/index.html#about"className={styles.link}>CV - PORTFOLIO</Link></li>
    <li class="list-group-item"><Link to="https://www.sacbunker.com.ar"className={styles.link}>SACBUNKER</Link></li>
    <li class="list-group-item"><Link to="https://www.bunkerstorage.com.ar"className={styles.link}>BUNKERSTORAGE</Link></li>
    <li class="list-group-item"><Link to="https://www.netsurferlp.ar/wordpress/"className={styles.link}>VERSION WORDPRESS</Link></li>
  </ul>
                 
      
        <Link to="/curso_react/"><button class="btn btn-primary mb-2 mt-2 float-end">Volver al Inicio</button></Link>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default About