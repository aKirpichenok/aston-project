import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setFetch } from '../../store/slices/userReducer'


const SearchForm = () => {

  const { input: inputUser, option: optionUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    input: '',
    option: '',
  })

  const writing = e => {
    setForm({
      ...form, ...{ input: e.target.value }
    })
  }

  const changing = e => {
    setForm({ ...form, ...{ option: e.target.value } })
  }


  const sub = (e) => {
    e.preventDefault()
    if (form.option === '') return undefined
    dispatch(setFetch({ input: form.input, option: form.option }))
    if (location.pathname !== "/searching") navigate("/searching")
    setForm({
      input: '',
      option: ''
    })
  }

  useEffect(() => {
    if (location.state === 'history') {
      location.state = null
      setForm({
        input: inputUser,
        option: optionUser
      })
    }
  }, [])



  return (
    <form onSubmit={sub} className="searchForm">

      <input type="text"
        id="every"
        placeholder="Введите ключевые слова/буквы или оставьте пустым"
        value={form.input}
        onChange={writing}
      />

      <button type="submit" value="Поиск">Поиск</button>
      <div className="radios">
        <input type="radio"
          id="path1"
          name="select_path"
          value="characters"
          onChange={changing}
          checked={form.option === 'characters' ? true : false}
        />
        <label htmlFor="path1">Characters</label>
        <input type="radio"
          id="path2"
          name="select_path"
          value="episodes"
          onChange={changing}
          checked={form.option === 'episodes' ? true : false}
        />
        <label htmlFor="path2">Episodes</label>
        <input type="radio"
          id="path3"
          name="select_path"
          value="quotes"
          onChange={changing}
          checked={form.option === 'quotes' ? true : false}
        />
        <label htmlFor="path3">Quotes</label>
        <input type="radio"
          id="path4"
          name="select_path"
          value="deaths"
          onChange={changing}
          checked={form.option === 'deaths' ? true : false}
        />
        <label htmlFor="path4">Deaths</label>
      </div>
    </form>
  )
}

export { SearchForm }