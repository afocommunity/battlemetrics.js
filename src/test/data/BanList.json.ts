import { APIDefinitions } from "../../../definitions"
export const BanListJSON: APIDefinitions.APIBanList = {
  "type": "banList",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "attributes": {
    "name": "example",
    "action": "none",
    "permManage": true,
    "permCreate": true,
    "permUpdate": true,
    "permDelete": true,
    "defaultIdentifiers": [
      "steamID",
      "ip"
    ],
    "defaultReasons": [
      "{{uid}} - Reason - ({{admin}})"
    ],
    "defaultAutoAddEnabled": true,
    "defaultNativeEnabled": true,
    "nativeBanTTL": null,
    "nativeBanTempMaxExpires": null,
    "nativeBanPermMaxExpires": null
  },
  "relationships": {
    "organization": {
      "data": {
        "type": "organization",
        "id": "1"
      }
    },
    "owner": {
      "data": {
        "type": "organization",
        "id": "1"
      }
    }
  }
}
