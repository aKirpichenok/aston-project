
export const Characters = ({ cards }) => {

    return <div className="characters">

    {cards.length > 0 ?
    cards.map(item => {
            return <div key={item.char_id} className="characters_item">
                <h1>{`Name: ${item.name} nickname:${item.nickname}`}</h1>
                <h2>Birthday:{item.birthday}</h2>
                <p>{`Actor ${item.portrayed}`}</p>
                <img src={item.img} alt={item.name}/>
                <div className="like">
                    <button>like</button>
                </div>
                
            </div>
        })
        : 
        <p>Nothing was find</p>
    }
</div>
}