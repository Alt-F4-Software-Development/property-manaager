export type FirebasePropertyData = {
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    Image: string;
    ExcelSheet: string | "none";
    floorplanEnabled: boolean;
    financingEnabled: boolean;
}
export const FirebasePropertyDataDefault = {
    Name: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Image: "",
    ExcelSheet: "none",
    floorplanEnabled: false,
    financingEnabled: false
}