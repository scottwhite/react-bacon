import Location from './containers/locations'
import Weather from './containers/weather'
import App  from './App'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Location }, //default route to show
  childRoutes: [
    {
      path: '/weather/:latlng',
      component: Weather
    }
  ]
}
