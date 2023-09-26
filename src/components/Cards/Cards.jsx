import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Statistics from '../Statistics/Statistics';
const Cards = ({cards}) => {
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[100px] gap-5'>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>
                
                )
            
            }
            {
                cards.map(card=><Statistics key={card.id} card={card}></Statistics>
                )
            }
        </div>
    );
};

Cards.propTypes={
    cards:PropTypes.array
}

export default Cards;