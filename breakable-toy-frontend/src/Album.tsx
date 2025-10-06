interface AlbumProps {
  image: string;
  name: string;
  desc: string;
  id:String;
}
const Album : React.FC<AlbumProps> = ({ image, name, desc, id}) => {
  return (
    <a href={`/album?name=${id}`}>
        <div className='min-w-[180px] rounded cursor-pointer hover:bg-hover p-2'>
            <img className="w-45 h-45 object-cover rounded-md" src={image}/>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    </a>
  )
}

export default Album