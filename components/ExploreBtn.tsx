"use client";
import React from 'react'

const ExploreBtn = () => {
    return (
        <div>
            <button  type="button" id="explore-btn" onClick={()=>{console.log("click")}} className={"hover:bg-dark-100 mx-auto rounded-lg px-4 py-2 mt-4 active:bg-dark-200"}>
                <a href={"#events"}>
                    Explore events
                    <img src={"./icons/arrow-down.svg"} alt="down-arrow" className={"width={24} height={24}"}/>
                </a>
            </button>
        </div>
    )
}
export default ExploreBtn
