const EventItem = ({props,onEventClick}) =>{ 
    const {name,info,images,id} = props
    const handleSeeMoreClick = (evt) => {
        
            evt.stopPropagation()
            onEventClick(id)
        
    }
    return (<div onClick={()=>{console.log("Padre Clickeado")}}>
        <img src={images[0].url} alt="" width={200} height={200}/>
        <h2>{name}</h2>
        <p>{info}</p>
        <button
        onClick={handleSeeMoreClick}
        >Ver mas</button>
    </div>)
}
export default EventItem