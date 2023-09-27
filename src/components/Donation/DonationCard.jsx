import PropTypes from 'prop-types';

const DonationCard = ({ card }) => {
    const { picture, text_color, title, category, category_bg, price, card_bg } = card;
    return (
        <div>
            <div style={{ background: card_bg }} className='flex gap-5 h-[200px] rounded-xl '>
                <img className='w-[220px] h-[200px] rounded-l-lg' src={picture} alt="" />
                <div className='my-5'>

                    <div>
                        <h1 style={{ background: category_bg, color:text_color }} className=' flex justify-center items-center rounded-lg px-4 py-2 text-sm mb-2 w-[90px]'>{category}</h1>
                        <p className='mb-2 text-3xl font-semibold'>{title}</p>
                        <p style={{ color: text_color }}>${price}</p>
                    </div>

                    <p style={{ background: text_color }} className='rounded-lg px-4 py-2 text-white text-lg font-semibold mt-4 w-[150px]'>View Details</p>

                </div>

            </div>
        </div>
    );
};
DonationCard.propTypes = {
    card: PropTypes.object
}

export default DonationCard;