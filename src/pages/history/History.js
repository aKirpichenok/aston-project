import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFetch } from "../../store/slices/userReducer"

const History = () => {
    const [history, setHistory] = useState([])
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const users = JSON.parse(localStorage.users)
        const history = users[user]['history']
        setHistory(history)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const clear = () => {
        const users = JSON.parse(localStorage.users)
        const history = users[user].history
        history.splice(0)
        setHistory()
        localStorage.users = JSON.stringify(users, {
            [user]: {
                history
            }
        })

    }

    const forward = (input, option) => {
        dispatch(setFetch({ input, option, from: 'history' }))
        navigate('/searching', { state: 'history' })
    }

    return (
        <div className="history_items">
            <h1>History of searching:</h1>
            {history?.length > 0 ? history.map((item, index) => {
                return <h3 key={index} className="history_item">
                    <div className="history_value">
                        <p>{`Value: ${item.input ? item.input : 'none'}`}</p>
                    </div>
                    <div className="history_input">
                        <p>{`Option: ${item.option}`}</p>
                    </div>
                    <button
                        className="button_history"
                        onClick={() => forward(item.input, item.option)}><span>go to this</span></button>
                </h3>
            }) : <h2>History is empty</h2>}
            {history?.length > 0 && <button className="clear_history" onClick={clear}>CLear history</button>}
        </div>
    )
}

export { History }