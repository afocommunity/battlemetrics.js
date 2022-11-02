declare interface APIIdentifier {
  type: "steamID" | "BEGUID" | "legacyBEGUID" | "ip" | "name" | "surviv|Name" | "steamFamilyShareOwner" | "conanCharName" | "egsID" | "funcomID" | "playFabID" | "mcUUID" | "7dtdEOS" | "battlebitHWID"
  identifier: string;
  manual?: Nullable<boolean>;
}
