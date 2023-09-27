import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonatedCard from "./DonatedCard/DonatedCard";

const Donate = () => {
    const [card, setCard] = useState({})

    const donate = useLoaderData();
    const {id} = useParams()

    useEffect(()=>{
        const findCards = donate.find(card => card.id == id);
        setCard(findCards)
    },[donate,id])

    return (
        <div>
            <DonatedCard card={card}></DonatedCard>
        </div>
    );
};

export default Donate;