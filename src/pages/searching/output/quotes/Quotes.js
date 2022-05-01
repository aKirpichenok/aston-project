export const Quotes = ({ cards }) => {

    return <div className="quotes">
    {cards.length > 0 ?
    cards.map(item => {
        return <div className="quotes_item" key={item.quote_id}>
            <h1>Цитата: {item.quote}</h1>
            <h2>Автор: {item.author}</h2>
            <p>Series: {item.series}</p>
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