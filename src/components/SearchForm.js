import { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setFetch } from '../store/userReducer'
// import { change, fetchPosts } from '../reducers/reposReducers'


const SearchForm = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)
  const [form,setForm] = useState({
    input: '',
    option: '',
  })

  const writing = e => {
    setForm({...form,...{input: e.target.value}
    })
  }

  const changing = e => {
    setForm({...form,...{option: e.target.value}})
  }


      const sub = (e) => {
        e.preventDefault()
        if(user) {
          const  users = JSON.parse(localStorage.users)
        if(!users[user].history.length > 1){
          let str = []
          str.push({
            input: form.input,
            option: form.option
          })
          localStorage.users = JSON.stringify(users,{[user] : {
            history : str
           }})
        } else {
          const str = users[user].history
          str.push({
            input: form.input,
            option: form.option
          })
          localStorage.users = JSON.stringify(users,{[user] : {
            history : str
           }
          })
        }
        dispatch(setFetch({input: form.input, option: form.option}))
        if(location.pathname !== "/searching") navigate("/searching")
      }else{
        dispatch(setFetch({input: form.input, option: form.option}))
        if(location.pathname !== "/searching") navigate("/searching")
      }
      setForm({
        input: '',
        option: ''
      })
      }

    


    return (
<form onSubmit={sub}>
    <div className="input_texts">
      <input type="text" 
    id="every"
    placeholder="Введите ключевые слова/буквы или оставьте пустым"
    value={form.input}
    onChange={writing} 
      />
    </div>
  <div className="radios">
   <input type="radio" 
     id="path1"
     name="select_path"
     value="characters"
     onClick={changing}
    />
    <label htmlFor="path1">Characters</label>
    <input type="radio"
     id="path2"
     name="select_path" 
     value="episodes"
     onClick={changing}
     />
    <label htmlFor="path2">Episodes</label>
    <input type="radio" 
     id="path3"
     name="select_path" 
     value="quotes"
     onClick={changing}
     />
    <label htmlFor="path3">Quotes</label>
    <input type="radio" 
     id="path4"
     name="select_path" 
     value="deaths"
     onClick={changing}
     />
    <label htmlFor="path4">Deaths</label>
    </div>
    <div>
      <input type="submit" value="Поиск" id="submit"></input>
    </div>
</form>
    )
}

export { SearchForm }