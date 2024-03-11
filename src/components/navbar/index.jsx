
import { useState,useEffect } from "react";
const Navbar = ({onSearch}) => {
    const [search, setSearch] = useState('');
    useEffect(()=>{
        console.log("Hola")
    },[search,onSearch])
    const handleInputChange = (evt) => {
        setSearch (evt.target.value);
    };
    const handleInputKeyDown = (evt) =>{
        if (evt.code == "Enter"){
            onSearch(evt.target.value)
        }
    }

    //console.log(search);
        return (
            <div>
            <p>Mi boletera</p>
            <input
            placeholder="Busca tu evento favorito"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
            />
            </div>
    )}
export default Navbar;