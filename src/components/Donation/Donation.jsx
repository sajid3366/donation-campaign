import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {


    const [cards, setCards] = useState([]);
    const [noData, setNoData] = useState('');
    const [isShow, setIsShow]=useState(false);
    console.log(cards);

    useEffect(()=>{
        const donatedItem = JSON.parse(localStorage.getItem('card'));
        if(donatedItem){
            setCards(donatedItem);
        }
        else{
            setNoData("You haven't commit any donation!");
        }
        


    },[])

    return (
        <div className="my-12">
            {
                noData?<h1>{noData}</h1>: <div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                        {
                            isShow?cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>):
                            cards.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                    {
                        cards.length >4 ?<button onClick={()=>setIsShow(!isShow)} className={!isShow?"bg-[#009444] text-white px-5 py-3 rounded-lg mt-4 font-semibold":'hidden'}>See All</button>:
                        ""
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;