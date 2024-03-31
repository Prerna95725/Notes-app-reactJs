import React,{useState} from 'react'


function Home(){

      const[title,setTitle]=useState('');
      const[description,setDescription]=useState('')
      const[notes,setNotes]=useState([])
   

      const handlerTitle=(e)=>
      {
         setTitle(e.target.value);
        console.log(title);
      }

      const handlerDescription=(e)=>{
         setDescription(e.target.value)
         console.log(description);
      }

       const submitted=()=>{
         let newNotes={
            newTitle:title,
            newDescription: description
         }

         let updatedNotes  = [...notes];
         updatedNotes.push(newNotes);
         setNotes(updatedNotes);
         setTitle("")
         setDescription("")
       }

         function deleteList(i){
   const removeData = notes.filter((elem, id)=>{
      return i!=id;
    })
   setNotes(removeData)
}

  return(
    
   <div className="backg">



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Keep Notes</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
  <div class="mb-3">
      <input type="email" placeholder="title" value={title} onChange={handlerTitle} class="form-control" id="exampleInputEmail1" />
     </div>
  <div class="mb-3">
    <textarea value={description} onChange={handlerDescription} placeholder="Keep Notes..." class="form-control" id="exampleInputPassword1"/>
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" onClick={submitted}>Save </button>
      </div>
    </div>
  </div>
</div>


   
 <div className="container card-top">
<div className="row">
{
  notes.map((note,i)=>{
   return(
<div className="col-sm-4 py-3 py-sm-0">

<div class="card" >

      <div class="card-body">
      
    <h5 class="card-title">{note.newTitle}</h5>
    <hr/>
    <p class="card-text">{note.newDescription}</p>
    
     <div class="row justify-content-evenly">
    <div class="col-4">
      
    </div>
    <div class="col-4">
      
    </div>
     <span class="position-absolute top-0 start-100 translate-middle badge p-2 bg-danger border border-light rounded-circle del">
   <i onClick={()=>deleteList(i)} class="bi bi-x-lg"></i>
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
  </div>
</div>
</div>
)
  })
  



}

</div>
</div>
   </div>
    
    )
}

export default Home;