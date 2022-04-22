import {gql} from "@apollo/client"
export const GET_WEATHER_QUERY = gql `
  query getCityByName ($name: String!) {
    getCityByName(name:$name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
        }
        wind {
          speed
        }
      }
    }
  }
`