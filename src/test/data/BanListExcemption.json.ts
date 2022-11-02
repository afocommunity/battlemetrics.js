import { APIDefinitions } from "../../../definitions"
export const BanListExcemptionJSON: APIDefinitions.APIBanListExcemption = {
  "type": "banExemption",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "attributes": {
    "reason": null
  },
  "relationships": {
    "organization": {
      "data": {
        "type": "organization",
        "id": "1"
      }
    },
    "ban": {
      "data": {
        "type": "ban",
        "id": "1"
      }
    }
  }
}
