import { useState } from "react";

interface AlbumProps {
  image: string;
  name: string;
  id:String;
  type:String;
  Songs:any;
}
const AssetPortrait: React.FC<AlbumProps> = ({ image, name ,type, Songs}) => {
    const [showAll, setShowAll] = useState(false);
    const visibleSongs = type === "album" ? Songs : showAll ? Songs : Songs?.slice(0, 5);
    return (
        <>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={image} className="w-60 h-60"/>
            <div className="flex flex-col">
                <h2 className="text-3xl">{type}</h2>
                <h2 className="text-5xl font-bold mb-4 md:text-7xl">{name}</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 mb-4 pl-2 text-[#a7a7a7]">
            <p><b className="mr-4">#</b>Tittle</p>
            {type !== "album" && (
                <p>Album</p>
            )}
        </div>
        <hr />

        {visibleSongs?.map((Song: any, index: number) => (
            <div key={Song.id} className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-hover cursor-pointer">
                <p className="text-white">
                    <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                    {type !== "album" && (
                        <img className="inline w-10 mr-5 rounded-md" src={Song?.album?.images[0]?.url}/>
                    )}

                    {Song.name}
                </p>
                <p className="text-[15px]">{Song?.album?.name}</p>
            </div>
            ))}

            {Songs?.length > 5 && type !== "album" && (
            <button onClick={() => setShowAll(!showAll)} className="mt-4 text-[#a7a7a7] font-semibold hover:underline">
                {showAll ? "Mostrar menos" : "Mostrar más"}
            </button>
            )}
        </>
  )
}

export default AssetPortrait