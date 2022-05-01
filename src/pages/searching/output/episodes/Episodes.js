export const Episodes = ({ cards }) => {

    return  <div className="episodes">
    {cards.length > 0 ? 
    cards.map(item => {
        return <div key={item.episode_id} className="episodes_item">
            <h1>{`Серия: ${item.title} Эпизод: ${item.episode}`}</h1>
            <h2>{`Сезон: ${item.season}`}</h2>
            <p>{`Герои: ${item.characters.reduce((prev,item) => prev+item+', ','')}`}</p>
            <p>{`Дата выхода: ${item.air_date}`}</p>
            <div className="like">
                    <button>like</button>
                </div>
        </div>
    })
: 
<p>Nothing was found</p>}
</div>
}