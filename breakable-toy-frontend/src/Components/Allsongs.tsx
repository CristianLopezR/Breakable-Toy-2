type AllsongsProps = {
  data: any;
};
export default function Allsongs({ data }: AllsongsProps){
    
    return(
        <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
            <h2 className="text-2xl text-white mb-3 font-semibold">Top Artist</h2>
                     {data?.items ? (
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {data.items.map((artist: any) => (
                            <a key={artist.id} href={`/artist?name=${artist.id}`}>
                                <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
                                    <img src={artist.images[1].url} className="w-full h-50 object-cover rounded-4xl" />
                                    {artist.name}
                                </div>
                            </a>
                            ))}
                        </div>
                    ) : (
                    <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
                    )}

            
        </div>
    )
}