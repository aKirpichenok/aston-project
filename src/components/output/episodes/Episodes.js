import { useDispatch } from "react-redux"
import { addFavouriteEpisode } from "../../../store/slices/favouriteReducer"

export const Episodes = ({ cards }) => {
    const dispatch = useDispatch()

    return <div className="episodes">
        {cards.length > 0 ?
            cards.map(item => {
                return <div key={item.episode_id} className="items">
                    <h1>{`Серия: ${item.title} Эпизод: ${item.episode}`}</h1>
                    <h2>{`Сезон: ${item.season}`}</h2>
                    <p>{`Герои: ${item.characters.reduce((prev, item) => prev + item + ', ', '')}`}</p>
                    <p>{`Дата выхода: ${item.air_date}`}</p>
                    <div className="like">
                        <button
                            className="button"
                            style={{ marginTop: '-3.5%', fontSize: '33px' }}
                            onClick={() => dispatch(addFavouriteEpisode({ option: 'episodes', item }))}>❤</button>
                    </div>
                </div>
            })
            :
            <p>Nothing was found</p>}
    </div>
}