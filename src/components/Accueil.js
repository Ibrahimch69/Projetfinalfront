import React from 'react'
// import logoblogsport from '../images/logoblogsport.png'
import logo from '../images/logo.png'
import courir from '../images/courir.jpg'	
import Components from '../components.css'
import Navbar from './Navbar'
import Footer from './Footer'
 import erwin from '../images/erwin.jpg'
import img from '../images/img.png'
import 'animate.css';

function Accueil() {
  return (



<div>
<Navbar/>  
<section>
<div class="container-fluid mt-5">
  <div className="row ">
    <div className="col-lg-5 mr-auto ">

      <img src={img} className="img-fluid w-25 rounded mx-auto d-block " alt="logo"   /> 
        <h1 className='text-center animate__animated animate__bounce'>SPORTBLOG</h1>
        <p className='text-center'>Le sport c'est la vie</p> 
        <div class="col text-center">
        <button type="button" class="btn btn-warning orange  ">Articles</button>
        </div>
      </div>

    <div class="col-lg-7 courir">
         <img src={courir} className="img-fluid " alt="courir"  /> 
    </div>
  </div>
</div>



</section>
 <h1 className='d-flex justify-content-center mda'>Mes derniers articles</h1>  
 <div class="container ">
  <div class="row mda">
  <div class="col-md-4 col-12 col-lg-3">
      <div class="card">
        <img src="https://cdn.pixabay.com/photo/2019/04/14/17/54/woman-4127336_960_720.jpg" class="card-img-top img-fluid " alt="..." />
        <div class="card-body">
          <h5 class="card-title">Erwin</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
            </div> 
             </div> 
             <div class="col-md-4 col-12 col-lg-3">
      <div class="card">
        <img src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Erwin</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
            </div> 
             </div> 
             <div class="col-md-4 col-12 col-lg-3">
      <div class="card">
        <img src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_960_720.jpg" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Erwin</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
            </div> 
             </div> 
             <div class="col-md-4 col-12 col-lg-3">
      <div class="card">
        <img src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_960_720.jpg" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Erwin</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
            </div> 
             </div> 
             
             
              </div>
              

</div> 


       <h1 className=' d-flex justify-content-center mda '>A propos</h1>
 

  <div class="container">
 
 <div class="clearfix mda">
 <img src={erwin} class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid w-50 " alt="..."/>

 <p className=''>
 Ce blog ??mane d???un sentiment de ?? d??j??-vu ?? sur la tr??s grande majorit?? des sites web d??di??s au sport sur lesquels
 je me suis rendu depuis plusieurs ann??es. Sans critiquer de mani??re gratuite, je me suis souvent retrouv?? d????u par 
 la pauvret?? des articles et des contenus qui m?????taient propos??s quel que soit le type de sujet trait??. Pendant trop longtemps,
 </p>

 <p>
 j???ai err?? sur un nombre tr??s important de sites pr??f??rant la tendance appel??e ?? fast content ?? qui, en d???autres termes,
  signifie que l???information est trait??e de mani??re superficielle quasiment toujours dans un souci d???instantan??it??
 </p>

 <p>
 et de faire partie de la course au buzz. j???ai err?? sur un nombre tr??s important de sites pr??f??rant la tendance appel??e ?? fast content ?? qui, en d???autres termes,
  signifie que l???information est trait??e de mani??re superficielle quasiment toujours dans un souci d???instantan??it?? j???ai err?? sur un nombre tr??s important de sites pr??f??rant la tendance appel??e ?? fast content ?? qui, en d???autres termes,
  signifie que l???information est trait??e de mani??re superficielle quasiment toujours dans un souci d???instantan??it??
 </p>

</div>
 </div>
















<Footer/>

  </div>
  )
}

export default Accueil