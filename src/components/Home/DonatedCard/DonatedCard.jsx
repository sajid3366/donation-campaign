
const DonatedCard = ({ card }) => {

    const handleAddToLS=()=>{
        const donateItem= JSON.parse(localStorage.getItem('card'))
    }


    const { id, picture, title, description, price } = card;
    return (
        <div className="my-12">

            <img className="w-full rounded-lg " src={picture} alt="" />
           
                <button onClick={handleAddToLS} className="bg-red-500 text-white text-xl px-4 py-2 rounded-lg absolute -mt-[80px] ml-[20px] font-semibold">Donate ${price}</button>
           
            <h1 className="mt-[50px] text-[40px] font-bold mb-6">{title}</h1>
            <p className="text-[#0B0B0BB3]">{description}</p>

        </div>
    );
};

export default DonatedCard;