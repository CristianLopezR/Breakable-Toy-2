export default function Page(){
    const Ask = async () => {
        const response = await fetch('http://localhost:8080/auth/spotify', {
          method: 'POST'
        });
        const data=await response.text()
        window.location.replace(data)
      };
    return(
        <div className="h-screen flex justify-center items-center w-full bg:hover">
            <button onClick={Ask} className="bg-Spotify justify-center flex items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%] cursor-pointer">
                <img src="/Images/spotify_icon-white.png" alt="logo" width={500} height={500} className="h-11 w-11" />
                <h2 className="ml-3 text-white font-bold">Log in</h2>
            </button>

        </div>
    )
}