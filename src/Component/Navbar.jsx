import React from 'react'



function Navbar(){
	return(
		<>
		<nav class="navbar navbar-expand-lg fixed-top shadow App background">
  <div class="container-fluid">
    <a class="navbar-brand logo" ><span className="bold-nav"><h4>NOTES &nbsp;<i class="bi bi-book"></i></h4></span></a>
   
    
      
      <button type="button" class="btn btn-warning form" data-bs-toggle="modal" data-bs-target="#exampleModal">
   <i class="bi bi-plus-circle-fill area"></i>
</button>

   
   
  </div>
</nav>
		</>
		)
}

export default Navbar;