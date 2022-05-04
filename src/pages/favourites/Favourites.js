import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Characters } from "../../components/output/characters/Characters"
import { Deaths } from "../../components/output/deaths/Deaths"
import { Episodes } from "../../components/output/episodes/Episodes"
import { Quotes } from "../../components/output/quotes/Quotes"

export const Favourites = () => {

    const { favourites } = useSelector(state => state.favourites)
    const [nonEmptyFavourites, setFavourites] = useState(Object.entries(favourites))

    const showFavourites = (item) => {
        if (item[0] === 'characters' && Object.values(item[1]).length > 0) return <div ><Characters cards={Object.values(item[1])} /></div>
        if (item[0] === 'deaths' && Object.values(item[1]).length > 0) return <div ><Deaths cards={Object.values(item[1])} /></div>
        if (item[0] === 'quotes' && Object.values(item[1]).length > 0) return <div ><Quotes cards={Object.values(item[1])} /></div>
        if (item[0] === 'episodes' && Object.values(item[1]).length > 0) return <div ><Episodes cards={Object.values(item[1])} /></div>
    }
    useEffect(() => {
        setFavourites(Object.entries(favourites))
    }, [favourites])

    return (
        <div className="favourites">
            {nonEmptyFavourites.length > 0 ? nonEmptyFavourites.map(item => showFavourites(item)) : <h1>No favourites cards</h1>}
        </div>
    )
}