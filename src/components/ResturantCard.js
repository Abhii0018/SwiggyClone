import {CDN_URL} from "./utils/constants";

const ResturantCard=({resData})=>{
    
    if (!resData|| !resData.info) {
  return <div>Invalid restaurant data!</div>;
}
    return(
        <div className="res-container">
        
            <div className="res-card">
                 <div className="food-img">
                    <img  className="food" src={CDN_URL+resData.info.cloudinaryImageId} alt={resData.info.name}/>
                 </div>
                 <div className="about-res">
                    <h1 className="res-name">{resData.info.name}</h1>
                    <div className="res-info">
                        <p className="ratings">⭐{resData.info.avgRating}</p>
                    <p className="time">{resData.info.sla.deliveryTime}  minutes</p>
                    </div>
                    
                    <p className="cuisines">{resData.info.cuisines.join(", ")}</p>
                 </div>

                 <div className="location">
                        Outlet - <span className="area-name">{resData.info.areaName}</span>
                 </div>

                 <div className="cost">
                        {resData.info.costForTwo}
                 </div>
                 
            
        </div>
     </div>
   
    );
};

export default ResturantCard;