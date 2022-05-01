export const filterCharacters = (cards,input) => {
    return cards.filter(item => item.name.toLowerCase().startsWith(input.toLowerCase()))
}


export const filterQuotes = (cards,input) => {
return cards.filter(item => item.quote.toLowerCase().startsWith(input.toLowerCase()))
}


export const filterDeaths = (cards,input) => {
    return cards.filter(item => item.death.toLowerCase().startsWith(input.toLowerCase()))
}


export const filterEpisodes = (cards,input) => {
      return cards.filter(item => item.title.toLowerCase().startsWith(input.toLowerCase()))
}