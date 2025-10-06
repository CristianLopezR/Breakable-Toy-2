import { useEffect, useState } from "react";
import Allsongs from "./Components/Allsongs";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Player from "./Player";

function Home(){
    const [data, setData] = useState<any>(null);
    useEffect(() => {
            const Artist = async () => {
            const response = await fetch('http://localhost:8080/me/top/artists', {
            method: 'GET'
            });
            const result=await response.json()
            setData(result);
            console.log(result)
        };
        Artist()
    },[])
    return (
    <div className="min-h-screen flex flex-col bg-black">
        <Navbar/>
        <main>
            <Sidebar/>
            <Allsongs data={data}/>
        </main>
        <Player/>
    </div>
        );
}
export default Home;
