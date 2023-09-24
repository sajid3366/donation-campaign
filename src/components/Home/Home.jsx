import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {


    const cards = useLoaderData();
    console.log(cards);

    return (
        <div>
            <Banner></Banner>
            <Cards cards={cards}></Cards>

        </div>
    );
};

export default Home;