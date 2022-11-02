import { APIDefinitions } from "../../../definitions"
export const CommandStatsJSON: APIDefinitions.APICommandStats = {
  "id": "1:1",
  "type": "commandStats",
  "attributes": {
  },
  "relationships": {
    "organization": {
      "data": {
        "type": "organization",
        "id": "42"
      }
    },
    "games": {
      "data": [
        {
          "type": "game",
          "id": "ark"
        }
      ]
    },
    "user": {
      "data": {
        "type": "user",
        "id": "42"
      }
    }
  }
}
