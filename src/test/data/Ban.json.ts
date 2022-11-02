import { APIStructure } from "../../../definitions"
export const BanJSON: APIStructure.APIBan = {
  "type": "ban",
  "id": "42",
  "attributes": {
    "id": "42",
    "uid": "41opA0OgW",
    "timestamp": "2016-10-05T14:35:51.962Z",
    "reason": "41opA0OgW - Scammer (Sisko)",
    "note": "Quark was reported by another player. Video showing scam: https://example.com/video",
    "expires": "2016-11-05T14:35:51.962Z",
    "identifiers": [
      1000,
      {
        "type": "steamID",
        "identifier": "1111111111111111",
        "manual": true
      }
    ],
    "orgWide": true,
    "autoAddEnabled": true,
    "nativeEnabled": null
  },
  "meta": {
    "player": "example"
  },
  "relationships": {
    "player": {
      "data": {
        "type": "player",
        "id": "42"
      }
    },
    "server": {
      "data": {
        "type": "server",
        "id": "42"
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
    },
    "banList": {
      "data": {
        "type": "banList",
        "id": "01234567-89ab-cdef-0123-456789abcdef"
      }
    },
    "trigger": {
      "data": {
        "type": "trigger",
        "id": "01234567-89ab-cdef-0123-456789abcdef"
      }
    }
  }
}
