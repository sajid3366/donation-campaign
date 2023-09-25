import swal from 'sweetalert';
import PropTypes from 'prop-types';


const DonatedCard = ({ card }) => {

    const handleAddToLS = () => {

        const addCardArray = [];

        const donateItem = JSON.parse(localStorage.getItem('card'));

        if (!donateItem) {
            addCardArray.push(card);
            localStorage.setItem('card', JSON.stringify(addCardArray))
            // swal("Thank you for your donation");
            swal( {
                icon: "success",
                title:"Thank you for your donation"
            });
        }
        else {
            addCardArray.push(...donateItem, card)
            localStorage.setItem('card', JSON.stringify(addCardArray))
            // swal("Thank you for your donation");
            swal( {
                icon: "success",
                title:"Thank you for your donation"
            });

        }
    }


    const { id, picture, title, description, price, text_color } = card;
    return (
        <div className="my-12">

            <img className="w-full rounded-lg " src={picture} alt="" />

            <button onClick={handleAddToLS} style={{ background: text_color }} className=" text-white text-xl px-4 py-2 rounded-lg absolute -mt-[80px] ml-[20px] font-semibold">Donate ${price}</button>

            <h1 className="mt-[50px] text-[40px] font-bold mb-6">{title}</h1>
            <p className="text-[#0B0B0BB3]">{description}</p>

        </div>
    );
};

DonatedCard.propTypes = {
    card: PropTypes.object
}

export default DonatedCard;