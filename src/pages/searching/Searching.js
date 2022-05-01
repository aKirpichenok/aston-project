import { useSelector } from "react-redux"
import { SearchForm } from "../../components/SearchForm"
import { Output } from "./output"

const Searching = () => {
    
    const { option } = useSelector(state => state.user)


   
    return <div>

        <SearchForm />
        <Output option={option}/>
        
    </div>
}

export { Searching }