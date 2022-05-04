import { useDispatch } from "react-redux"
import { addFavouriteQUote } from "../../../store/slices/favouriteReducer"

export const Quotes = ({ cards }) => {
    const dispatch = useDispatch()

    return <div className="quotes">
        {cards.length > 0 ?
            cards.map(item => {
                return <div className="items" key={item.quote_id}>
                    <h1>Цитата: {item.quote}</h1>
                    <h2>Автор: {item.author}</h2>
                    <p>Series: {item.series}</p>
                    <div className="like">
                        <button
                            className="button"
                            onClick={() => dispatch(addFavouriteQUote({ option: 'quotes', item }))}>❤</button>
                    </div>
                </div>
            })
            :
            <p>Nothing was found</p>
        }
    </div>
}