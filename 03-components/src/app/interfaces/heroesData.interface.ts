// To parse this data:
//
//   import { Convert } from "./file";
//
//   const heroesData = Convert.toHeroesData(json);

export interface HeroesData {
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toHeroesData(json: string): HeroesData[] {
        return JSON.parse(json);
    }

    public static heroesDataToJson(value: HeroesData[]): string {
        return JSON.stringify(value);
    }
}
