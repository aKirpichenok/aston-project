
export const Deaths = ({ cards }) => {
    return <div className="deaths">
    {cards.length > 0 ?
    cards.map(item => {
        return <div key={item.death_id} className="deaths_item">
            <h1>Умер {item.death}</h1>
            <h2>Причина: {item.cause}</h2>
            <h2>Убийца: {item.responsible}</h2>
            <p>Последние слова: {item.last_words}</p>
            <p>Эпизод: {item.episode}</p>
            <div className="like">
                     <button>like</button>
                 </div>
        </div>
    })
 :
 <p>Nothing was found</p>
 }
 </div>
}