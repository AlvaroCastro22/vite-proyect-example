import EventItem from "./component/EventItem"
import JSONinfo from "../../data/events.json"
import { useState } from "react"
import useEventsData from "../../hooks/useEventsData"
const Events = ({searchTerm}) => {
    const {events} = useEventsData();
    const handleEventItemClick = (id) => {
        console.log("evento clickeado",id);
    }

    //console.log(events.filter(x=>x.name==searchTerm))


    const renderEvents = ()=>{
        let eventsFiltered =events
        if (searchTerm.length>0) {
            
            eventsFiltered = eventsFiltered.filter(item=>{
                return item.name.toLowerCase().includes(searchTerm)
            })
            console.log(eventsFiltered.length);
        }
        return eventsFiltered.map(evento=><EventItem key={evento.id} props={evento} onEventClick={handleEventItemClick}/>)
    }
    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    )
}
export default Events