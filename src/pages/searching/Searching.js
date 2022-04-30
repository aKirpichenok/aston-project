import { useFetchCardsQuery } from "../../store/userAPI"

const Searching = () => {


    const {data:cards, isFetching, isError} = useFetchCardsQuery('deaths')
    return <div>
        {isFetching && <h1>Loading...</h1>}
        {isError && <h1>Error while loading cards</h1>}
        {cards && console.log('cards',cards)}
    </div>
}

export { Searching }