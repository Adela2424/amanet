import React from "react";
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart'

function Itemcard(props) {
    const { addItem } = useCart();
    return (
    
         <div className="container_cards_items">
           <Link className="cards_link" to={props.path}>
               <div className="container_img" data-catgory={props.label}>
                  <img src={props.src} alt="" className="img_in_cards" />
               </div>
               <div className="cards_info">
                    <h4 className="cards_text">{props.text} </h4>
                    <p className="text_stoc">  {props.text_stoc} </p>
                    <p className="text_pret">  {props.text_pret} </p>
               </div>
               
               <button 
               onClick={() => addItem(props.item)}
               > Add to cart </button>
           </Link>
       </div>
    
        
    )
}

export default Itemcard;
