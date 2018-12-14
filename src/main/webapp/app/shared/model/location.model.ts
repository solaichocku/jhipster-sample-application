import { ICountry } from 'app/shared/model//country.model';

export interface ILocation {
    id?: number;
    streetAddress?: string;
    postalCode?: number;
    city?: string;
    stateProvince?: string;
    country?: ICountry;
}

export class Location implements ILocation {
    constructor(
        public id?: number,
        public streetAddress?: string,
        public postalCode?: number,
        public city?: string,
        public stateProvince?: string,
        public country?: ICountry
    ) {}
}
