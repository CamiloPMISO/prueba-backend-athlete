import { Country } from '../country/country';

export type City = {
    id: string;
    name: string;
    country: Country;
}