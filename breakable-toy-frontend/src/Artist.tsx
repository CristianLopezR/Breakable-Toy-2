import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Album from "./Album";
import AssetPortrait from "./AssetPortrait";

export default function Artist(){
    const [artistName]=useSearchParams()
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
        const Artist = async () => {
                const response = await fetch(`http://localhost:8080/artist?name=${artistName.get("name")}`
            , {
          method: 'GET'
        });
        const result = await response.json()
        setData(result);
        console.log(result)
    };
    Artist()
    },[])
    return(
        <div>
            <div className="min-h-screen flex flex-col bg-black">
                    <Navbar/>
                    <main>
                        <Sidebar/>
                        <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
                            <AssetPortrait image={data?.artist?.images[0].url} id={data?.artist?.id} name={data?.artist?.name} type={"Artist"} Songs={data?.topTracks?.tracks}/>
                            <div className="mb-4">
                                <h1 className="my-5 font-bold text-2xl">Albums</h1>
                                <div className="flex overflow-auto">
                                    {data?.albums?.items?.filter((album: any) => 
                                        album.artists[0].name === data.artist.name).map((album: any) => (
                                        <Album key={album.id} image={album.images[0].url} name={album.name}  desc={album.artists[0].name} id={album.id} />))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <h1 className="my-5 font-bold text-2xl">Appears On</h1>
                                <div className="flex overflow-auto">
                                    {data?.albums?.items?.filter((album: any) => 
                                        album.artists[0].name != data.artist.name).map((album: any) => (
                                        <Album key={album.id} image={album.images[0].url} name={album.name}  desc={album.artists[0].name} id={album.id}/>))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
        </div>
    )
}