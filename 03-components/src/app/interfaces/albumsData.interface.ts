// To parse this data:
//
//   import { Convert } from "./file";
//
//   const albumsData = Convert.toAlbumsData(json);

export interface AlbumsData {
    userId: number;
    id:     number;
    title:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAlbumsData(json: string): AlbumsData[] {
        return JSON.parse(json);
    }

    public static albumsDataToJson(value: AlbumsData[]): string {
        return JSON.stringify(value);
    }
}
