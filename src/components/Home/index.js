// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-bg">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
