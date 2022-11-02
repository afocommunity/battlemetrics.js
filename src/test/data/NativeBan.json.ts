import { APIStructure } from "../../../definitions";

export const NativeBanJSON: APIStructure.APINativeBan = {
  "type": "banNative",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "attributes": {
    "state": "added",
    "createdAt": "2016-10-05T14:35:51.962Z",
    "updatedAt": "2016-10-05T14:35:51.962Z",
    "updateAt": "2016-10-05T14:35:51.962Z",
    "reason": "41opA0OgW - Scammer (Sisko)",
    "expires": "2016-11-05T14:35:51.962Z",
    "type": "steamID",
    "identifier": "76561197960265720"
  },
  "relationships": {
    "ban": {
      "data": {
        "type": "ban",
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
    }
  }
}
