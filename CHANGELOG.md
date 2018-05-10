# 1.0.0

- Adding badges(🔥), changelog, contributing docs
- Extracting schema outside of src/ folder. Changing folder structure around a bit
- Adding logic to make REST calls as well as respect search parameters in the graphql request
- Placeholder for tests. No tests yet.
- Adding Travis
- Changing name to world-countries-graphql-api
- Changing regionalBlocks to enum type

# 1.1.0

- Making Apollo Engine optional. Only if an env var ( ENGINE_API_KEY ) is specified then Apollo Engine will be enabled.

# 1.2.0

- Out with TravisCI ( because not free anymore ) and in with CircleCI

# 1.3.0

- Adding docker capabilities
    - Dockerfile for node
    - Docker compose for node, nginx
    - nginx conf ( but nginx no workies yet 😭🤒)