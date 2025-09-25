import { Link } from 'react-router';
import ButtonDetail from '../ButtonDetail/ButtonDetail';
import './Item.css'

export default function Item( {id, title, img, price} ){
  return ( 
    <div className="item-card">
      <h2 className="item-card-title"> {title} </h2>
      <img className="item-card-img" src={img} alt={title}/>
      <h3 className="item-card-price">Precio: $ {price}</h3>
      <Link to={`/detalle/${id}`}>
        <ButtonDetail>
        </ButtonDetail>
      </Link>
    </div>
  )
}