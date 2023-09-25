import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {

    const { id, title, picture, category, category_bg, card_bg, text_color } = card;

    return (
        
        <NavLink to={`/cards/${id}`}>
            <div style={{ background: card_bg }} className='rounded-lg cursor-pointer'>
            <figure><img className='h-[200px] w-full' src={picture} alt="" /></figure>
            <div className="card-body">
                <div style={{background: category_bg}} className='rounded-md'>
                    <p style={{color: text_color}} className='px-4 font-medium text-sm py-2'>{category}</p>
                </div>
                <p style={{color: text_color}} className='text-xl font-semibold'>{title}</p>

            </div>
        </div>
        </NavLink>
        
        
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;