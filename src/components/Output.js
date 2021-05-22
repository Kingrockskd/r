import React,{useState,useEffect} from 'react'
import Card from './Card'
function Output({recipe}){
    /* ingredients,label,image
     const [show,setShow]=useState(false) */
    const i_a=recipe.ingredientLines;
    const [show,setShow]=useState(recipe?true:false)
    console.log(show);
   useEffect(() => {
       setShow(false)
   }, [recipe])
 function togle(e){e.preventDefault();
     setShow(!show)} 
    
return(
     <Card key={recipe.calories}>
       <div>
       <h1 className='title'>{recipe.label}</h1>
       </div>
       <div className='image'>
       <img src={recipe.image}></img>
       </div> 
        
        <button onClick={togle}>{show?'Hide':'ingredients'}</button>
        {show?(<div >
            <ol>
            {
                i_a.map(e=>
                    <li key={Math.random()}> {e}</li>)
            }
            </ol>
        </div>):console.log('ok')}
    </Card> 
)
}
export default Output;
