import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { rollsRes, cakeRes, biryaniRes } from "./utils/mockData";

const Body = () => {
    const allRes = [...rollsRes, ...cakeRes, ...biryaniRes];
    // const allRes=rollsRes;
    const [listOfResturants, setListOfResturants] = useState(allRes);
    // const [name] = useState("Abhishek");

    const filterTopRated = () => {
        const filterdRes = allRes.filter(
            res => Number(res.card?.card?.info?.avgRating) > 4.4
        );
        setListOfResturants(filterdRes);
    };

    return (
        <div>
            <div className="filter">
                <button className="rateFilter" onClick={filterTopRated}>
                    Top Rated
                    
                </button>
            </div>

            <div className="res-cont">
                {
                    listOfResturants
                    .filter(item => item.card?.card?.info)
                    .map((item,index) =>
                        <ResturantCard key={index} resData={item.card.card}/>
                    )
                }
            </div>
        </div>
    );
};

export default Body;
