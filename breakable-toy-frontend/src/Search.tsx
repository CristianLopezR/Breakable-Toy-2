import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Album from "./Album";

export default function SearchTool() {
    const [searchParam]=useSearchParams()
    const [data, setData] = useState<any>(null);

    useEffect(()=>{
            const q = searchParam.get("q") || "";
            const Artist = async () => {
                    const response = await fetch(`http://localhost:8080/search?q=${q}`
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
                    <h1 className="hidden">{data?.artist?.href || "Loading..."}</h1>
                    
                    <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl">Artists</h1>
                        <div className="flex overflow-auto">
                            {data?.artist?.artists?.items?.map((artist: any) => 
                                    <Album key={artist.id} image={artist.images[0].url} name={artist.name}  desc={""} id={artist.id} />)}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl">Albums</h1>
                        <div className="flex overflow-auto">
                            {data?.albums?.albums?.items?.map((album: any) => 
                                    <Album key={album.id} image={album.images[0].url} name={album.name}  desc={album.artists[0].name} id={album.id} />)}
                        </div>
                    </div>

                     <div className="mb-4">
                        <h1 className="my-5 font-bold text-2xl">Songs</h1>
                        <div className="flex overflow-auto">
                            {data?.topTracks?.tracks?.items?.map((album: any) => 
                                    <Album key={album.id} image={album.album.images[0].url} name={album.name}  desc={album.artists[0].name} id={album.id} />)}
                        </div>
                    </div>
                </div>                
            </main>
        </div>
    </div>
    )
}
