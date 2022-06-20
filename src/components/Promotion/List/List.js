import React from "react";
import PromotionCard from "../Card/Card";
import './List.css';

const PromotionList = ({loading, promotions}) => {
    if(loading){
        return <div>carregando...</div>;
    }
    return(
        <div className="promotion-list">
            {promotions.map((promotion) => (
                <PromotionCard key={promotion.id} promotion={promotion}/>
            ))}
        </div>
    )
}

export default PromotionList;