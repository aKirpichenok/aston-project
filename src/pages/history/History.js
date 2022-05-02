import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFetch } from "../../store/userReducer"

const History = () => {
    const [history,setHistory] = useState([])
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const users = JSON.parse(localStorage.users)
        const history = users[user].history
        setHistory(history)
    },[user])

    const clear = () => {
        const users = JSON.parse(localStorage.users)
        const history = users[user].history
        history.splice(0)
        setHistory()
        localStorage.users = JSON.stringify(users,{[user] : {
            history: history
        }})
        
    }

    const forward = (input,option) => {
        console.log(input,option)
        dispatch(setFetch({input,option,from:'history'}))
    //     dispatch(change({input,option}))
    //     dispatch(fetchPosts({option,input}))
      navigate('/searching') 
    }

    return (
        <div>
            <h1>History of searching:</h1>
            {history && history.map((item,index) => {
                return <h3 key={index} className="history_item">
                    <div className="history_value">
                        <p>{`Value: ${item.input ? item.input : 'none'}`}</p>
                    </div>
                    <div className="history_input">
                    <p>{`Option: ${item.option}`}</p>
                    </div>
                    <button onClick={() =>forward(item.input,item.option)}>go to this</button>
                </h3>
            })}
            <button onClick={clear}>CLear history</button>
        </div>
    )
}

export { History }