import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import AssetPortrait from './AssetPortrait'
import { useSearchParams } from 'react-router-dom'

function AlbumDisplay() {
    const [albumName]=useSearchParams()
    const [data, setData] = useState<any>(null);
    
    useEffect(()=>{
        const Artist = async () => {
                const response = await fetch(`http://localhost:8080/album?name=${albumName.get("name")}`
            , {
          method: 'GET'
        });
        const result = await response.json()
        setData(result);
        console.log(result)
    };
    Artist()
    },[])
  return (
    <div>
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar/>
            <main>
                <Sidebar/>
                <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
                    <AssetPortrait type={"album"} name={data?.name} image={data?.images[0]?.url} id={data?.id} Songs={data?.tracks.items}/>
                </div>
            </main>
        </div>
    </div>
  )
}

export default AlbumDisplay