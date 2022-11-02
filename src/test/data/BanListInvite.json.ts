import { APIStructure } from "../../../definitions"
export const BanListInviteJSON: APIStructure.APIBanListInvite = {
  "type": "banListInvite",
  "id": "rygK6AV7YW",
  "attributes": {
    "uses": 42,
    "limit": 42,
    "permManage": true,
    "permCreate": true,
    "permUpdate": true,
    "permDelete": true
  },
  "relationships": {
    "banList": {
      "data": {
        "type": "banList",
        "id": "01234567-89ab-cdef-0123-456789abcdef"
      }
    },
    "organization": {
      "data": {
        "type": "organization",
        "id": "42"
      }
    },
    "user": {
      "data": {
        "type": "user",
        "id": "42"
      }
    }
  }
}
