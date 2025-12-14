import React from 'react'
import { Link } from 'react-router-dom'
// servicios ofrecidos
const Servicios = ()=> {
  document.title = "NetsurferLP | Servicios";
  return (

  <>
  
  <div class="card text-bg-secondary mb-3 mx-auto w-100  mt-3 " >
  <h2 class="card-header">Servicios Incluidos</h2>
  <div class="card-body">
    <h5 class="card-title">Todos Nuestros Servicios cuentan con las siguientes fases de desarrollo</h5>
    <p class="card-text"><ul >
            <li >Análisis de Requerimientos</li>
            <p >Entrevista previa con el cliente</p>
            <li >Diseño de la Solución</li>
            <p >Diagramas Entidad Relacion - DFD - Modelizacion de Bases de Datos</p>
            <li >Desarrollo e Implementación</li>
            <p >Desarrollo de Prototipos - </p>
            <li >Pruebas y Control de Calidad</li>
            <p >Pruebas Unitarias - Pruebas de Integración - Pruebas de Sistema</p>
            <li >Despliegue y Mantenimiento</li>
            <p >Implementación en el entorno de producción - Mantenimiento Correctivo y Evolutivo</p>
        </ul> 
        <Link to="/curso_react/"><button class="btn btn-primary mb-2 mt-2 float-end">Volver al Inicio</button></Link>
</p>
  </div>
</div>
  
  
  


    
      </>
  )
}

export default Servicios