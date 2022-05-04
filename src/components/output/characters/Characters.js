import { useDispatch } from "react-redux"
import { addFavouriteCharacter } from "../../../store/slices/favouriteReducer"

import PropTypes from 'prop-types'

function Characters({ cards }) {

    const dispatch = useDispatch()

    return <div className="characters">

        {cards.length > 0 ?
            cards.map(item => {
                return <div key={item.char_id} className="items">
                    <h1>{`Name: ${item.name} nickname:${item.nickname}`}</h1>
                    <h2>Birthday:{item.birthday}</h2>
                    <p>{`Actor ${item.portrayed}`}</p>
                    <img src={item.img} alt={item.name} />
                    <div className="like">
                        <button
                            className="button"
                            onClick={() => dispatch(addFavouriteCharacter({ option: 'characters', item: item }))}>❤</button>
                    </div>


                </div>
            })
            :
            <p>Nothing was find</p>
        }
    </div>
}

Characters.propTypes = {
    cards: PropTypes.array
}

export { Characters }