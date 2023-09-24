import PropTypes from 'prop-types';

const Card = ({ card }) => {

    const { id, title, picture, category, category_bg, card_bg } = card;
    console.log(card_bg);

    return (
        <div style={{background:card_bg}} className='rounded-lg'>
            <figure><img src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title ">{category}</h2>
                <p className='text-xl font-semibold'>{title}</p>

            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;