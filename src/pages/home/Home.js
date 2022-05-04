import { SearchForm } from "../../components/forms/SearchForm"
import logo from '../../sass/img/main.jpg'

const Home = () => {

    return <div className="main">
        <h1 className="greeting">Welcome to the Breaking Bad project!</h1>
        <img src={logo} alt='logo' />
        <div className="input">
            <SearchForm />
        </div>
    </div>
}

export { Home }