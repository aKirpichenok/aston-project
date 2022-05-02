import { useSelector } from "react-redux"
import { useFetchCardsQuery } from "../../../store/userAPI"
import { Characters } from "./characters/Characters"
import { Deaths } from "./deaths/Deaths"
import { Episodes } from "./episodes/Episodes"
import { Quotes } from "./quotes/Quotes"

export const Output = () => {
    const { option,input } = useSelector(state => state.user)
    const {data: cards, isFetching, isError} = useFetchCardsQuery({option,input})
    
    


    const show = () => {
        console.log("output",option)
        switch(option) {
            case 'characters' : 
            return <Characters cards={cards} />;
            case 'episodes' :
            return <Episodes cards={cards} />;
            case 'quotes' :
            return <Quotes cards={cards} />;
            case 'deaths' :
            return <Deaths cards={cards} /> ;
            default: break;
        }
    }


return <>
    {
        !option ? <h1>enter text and select option</h1> :
        isFetching ? <div>Loading...</div> :
        isError ? <h1>Error</h1> :
        cards ? show() :
        null
    }
    </>
}