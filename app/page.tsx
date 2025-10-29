import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {events} from "@/lib/constants";



const Page = () => {
    return (
        <div>
            <h1 className={"text-3xl font-bold text-center"}><span className={"text-5xl text-gradient"}>Dev-Events</span>
            <br/>
                <p className={"mt-4"}>A place for every hackathon, meetups, and other events</p>
            </h1>
            <ExploreBtn/>
            <div className={"mt-20 space-y-7"}>
                <h3>Featured Events</h3>
                <ul className={"events"}>
                {events.map((event)=>(
                    <li key={event.title}>
                        <EventCard {...event}/>
                    </li>
                ))}
                </ul>
            </div>
            
        </div>
    )
}
export default Page
