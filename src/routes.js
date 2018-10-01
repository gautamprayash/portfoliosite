import Home from './components/Home'
import Bio from './components/Bio'
import error from './components/404'

export const routes = [
	{path: "/about", component: Bio },
	{path: "/", component: Home},
	{path: '*', component: error}
]
