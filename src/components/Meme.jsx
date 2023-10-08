import memesData from "../data/memesData"

export default function Meme() {

    const randomMeme = () => {
        let randNum = Math.floor(Math.random() * memesData.data.memes.length)
        console.log(memesData.data.memes[randNum].url)
    }


    return (
        <>
            <div className="grid grid-cols-2 gap-4 mx-9 my-9">
                <input type="text" placeholder="Top text.." className="col-span-1 h-9 rounded-md border placeholder:pl-2" />
                <input type="text" placeholder="Bottom text.." className="col-span-1 h-9 rounded-md border placeholder:pl-2" />
                <button 
                    className="col-span-2 h-10 rounded-md text-white font-bold bg-gradient-to-r from-[#672280] to-[#A626D3]"
                    onClick={randomMeme}
                >
                    Get a new meme image
                </button>
            </div>
        </>
    )
}