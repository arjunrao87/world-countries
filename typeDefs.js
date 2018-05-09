const typeDefs =
`
type Query{
    countries(input: CountryInput): [Country]
}

type Country{
    name: String
    nativeName: String
    demonym: String
    flag: String
    capital: String
    alpha2Code: String
    alpha3Code: String
    callingCodes: [String]
    cioc: String
    numericCode: String
    population: Int
    latitude: Float
    longitude: Float
    translations: Translations
    topLevelDomain:[String]
    altSpellings: [String]
    region: String
    subregion: String
    area: Float
    gini: Float
    timezones: [String]
    borders: [String]
    currencies: [Currency]
    languages: [Language]
    regionalBlocs: [RegionalBlock]
}

type RegionalBlock{
    acronym: String
    name: String
    otherAcronyms: [String]
    otherNames: [String]
}

type Translations{
    de: String
    es: String
    fr: String
    ja: String
    it: String
    br: String
    pt: String
}

type Language{
    iso639_1: String
    iso639_2: String
    name: String
    nativeName: String
}

type Currency{
    code: String
    name: String
    symbol: String
}

input CountryInput{
    allCountries: Boolean
    name: String
    fullName: String
    isoCodes: [String]
    currency: String
    language: String
    capital: String
    callingCode: String
    region: String
    regionalBlock: String
}`;

export default typeDefs;
