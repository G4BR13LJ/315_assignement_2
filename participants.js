//INPUT: 'matches' data (array of objects)
//OUTPUT: set of participant names from the matches
function participants(matches) {
  // initialize set of players
    let playerNamesSet = new Set();

    // add each player from a match to the set
    matches.forEach(match => {
      playerNamesSet.add(match.winner);
      playerNamesSet.add(match.loser);
    });
    
    // return set of players
    return playerNamesSet;
}
