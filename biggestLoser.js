//INPUT: 'matches' data (array of objects)
//OUTPUT: dict of participant names and who they beat
function biggestLoser(matches) {
    //initializee a dict
    let loser_Scores = {};

    // iterter over matches and set all players loser scores in dict 0;
    matches.forEach(match => {
        loser_Scores[match.winner] = 0;
        loser_Scores[match.loser] = 0;
    });

    // iterate over matches and start tallying loser scores for each player
    matches.forEach(match => { 
        points = match.loser_points;
        loser_Scores[match.winner] -= points;
        loser_Scores[match.loser] += points;
    });

    // initialize values to check for higher loser score in dict
    let highestValue = -Infinity;
    let highestPerson = null;

    // iterate over loser scores and find key with highest loser score 
    for (const person in loser_Scores) {
        if (loser_Scores.hasOwnProperty(person)) {
            const value = loser_Scores[person];

            if (value > highestValue) {
            highestValue = value;
            highestPerson = person;
            }
        }
    }
    // return name of key with highest loser score
    return highestPerson;
}
