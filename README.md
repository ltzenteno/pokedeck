# Poke Deck

## Running locally

This application has the following requirement:

- Node 20.13.1
- Yarn

If you have `nvm` installed you can run the following inside the root folder:

```shell
nvm use
```

Then install the dependencies with:
```shell
yarn
```

**IMPORTANT**: Before running the local server you must create a `.env.local` file in the root folder copying the content of `.env.example`

Now you can run it with:
```shell
yarn dev
```

### Notes and Assumptions:

1. Search functionality was implemented 100% on the front end side by only filtering the current paginated results, ideally there should be a `search` endpoint on the server / API side which receives a `search` query parameter and based on that return a list of matches (I couldn't find a search endpoint at first sight).

2. In the detail page I couldn't find the relationship which links the `Pokemon` entity with the `EvolutionChain`, hence I didn't integrate that API call to display it in the "Detail" page.

3. For the Pokemon Image I used the value from `sprites.front_default`, I'm unsure which would be the correct image field on the API response JSON object.

4. I added a retry logic inside the `fetchPokemons` async function and an Alert component which displays when an error is dispatched onto the store in the `getPaginatedPokemons` action.

5. I added basic responsive design, i. e. the pages are responsive by default, although I didn't change any specific layout for mobile / desktop screens.

6. I used Redux for the state management and to store the Favorite Pokemons array as well.

### Future improvements

- improve async functionality and caching with the help of Tanstack Query.