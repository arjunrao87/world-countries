# World Countries [![CircleCI](https://circleci.com/gh/arjunrao87/world-countries-graphql-api.svg?style=svg)](https://circleci.com/gh/arjunrao87/world-countries-graphql-api)   [![dependencies Status](https://david-dm.org/arjunrao87/world-countries-graphql-api/status.svg)](https://david-dm.org/arjunrao87/world-countries-graphql-api)

## Make GraphQL requests to http://104.236.66.151:5000/graphql
## Use Playground at http://104.236.66.151:5000/playground

Get information about countries using a GraphQL API

Simple GraphQL wrapper around [REST Countries](https://restcountries.eu) which acts as the source of data

Schema is available at [World Countries Schema](typeDefs.js)

- Sample query
```

# Try to write your query here

# Try to write your query here

{

  countries(input:{

    regionalBlock: EU

  }){

    name

    nativeName

    demonym

    flag

    capital

    population

    latitude

    longitude

    translations{

      de

      es

      fr

      ja

      it

      br

      pt

    }

    languages{

      iso639_1

      iso639_2

      name

      nativeName

    }

    timezones

    currencies{

      code

      name

      symbol

    }

    topLevelDomain

    altSpellings

    region

    subregion

    area

    gini

    timezones

    borders

      alpha2Code

      alpha3Code

      callingCodes

      cioc

      numericCode

    regionalBlocs{

      acronym

      name

      otherAcronyms

      otherNames

    }

  }

}

```
