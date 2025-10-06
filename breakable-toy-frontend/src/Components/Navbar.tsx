import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    
    const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/Search?q=${encodeURIComponent(query)}`);
    } else {
      navigate("/Search");
    }
  };
    return(
          <nav className="h-15 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
        <div className="flex gap-6 items-center">
            <img src="/Images/spotify_icon-white.png" 
                alt="logo-spotify" 
                width={500} 
                height={500}
                className="w-9 h-9"/>
            <a href="/Home" className="bg-background w-11 h-11 grid place-items-center text-white text-3xl rounded-full">
                <MdHomeFilled color="white"/>
            </a>
            <div className="lg:flex  bg-background flex items-center h-11 w-90 px-3 gap-3 text-primary-text rounded-full">
                <button onClick={handleSearch}>
                <GoSearch className="text-primary-text shrink-0" size={20}/> </button>
                <input className="h-full w-full outline-none placeholder:text-primary-text" type="text" placeholder="What do you want to play?" value={query} onChange={(e) => setQuery(e.target.value)}/>
                
            </div>
        </div>
        <div className="flex items-center gap-8">
            <div className="flex gap-2 text-secondary-text">
                <a href="/login" className="h-11 bg-white text-gray-950 rounded-full font-bold hover:bg-secondary-text grid px-8 place-items-center">Log Out</a>
            </div>
        </div>
      </nav>
    )
}
