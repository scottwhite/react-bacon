import Location from './components/location'
import Weather from './components/weather'
import App  from './App'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Location },
  childRoutes: [
    {
      path: '/weather/:latlng',
      component: Weather
    }
  ]
}
