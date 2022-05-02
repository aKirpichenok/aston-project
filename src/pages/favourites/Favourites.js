import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Characters } from "../searching/output/characters/Characters"
import { Deaths } from "../searching/output/deaths/Deaths"
import { Episodes } from "../searching/output/episodes/Episodes"
import { Quotes } from "../searching/output/quotes/Quotes"

export const Favourites = () => {

    const { favourites } = useSelector(state => state.favourites)
    const [nonEmptyFavourites,setFavourites] = useState(Object.entries(favourites))

    const showFavourites = (item) => {
       if (item[0] === 'characters') return <div><Characters cards={Object.values(item[1])} /></div>
       if (item[0] === 'deaths') return <div><Deaths cards={Object.values(item[1])} /></div>
       if (item[0] === 'quotes') return <div><Quotes cards={Object.values(item[1])} /></div>
       if (item[0] === 'episodes') return <div><Episodes cards={Object.values(item[1])} /></div>
    }
    useEffect(() => {
        setFavourites(Object.entries(favourites))
    },[favourites])
        
    return (
        <div className="favourites">
            {nonEmptyFavourites &&  nonEmptyFavourites.map(item => showFavourites(item))}
        </div>
    )
}