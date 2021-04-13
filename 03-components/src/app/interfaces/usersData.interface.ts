// To parse this data:
//
//   import { Convert } from "./file";
//
//   const usersData = Convert.toUsersData(json);

export interface UsersData {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsersData(json: string): UsersData[] {
        return JSON.parse(json);
    }

    public static usersDataToJson(value: UsersData[]): string {
        return JSON.stringify(value);
    }
}
