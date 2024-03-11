import JSONinfo from "../data/events.json"
import {useState} from "react"
const useEventsData = () =>{
    const [data,setData] = useState(JSONinfo)
    const {_embedded: {events}} = data
    return {
        events
    }
}
export default useEventsData