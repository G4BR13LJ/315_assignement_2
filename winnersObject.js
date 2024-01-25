//INPUT: 'matches' data (array of objects)
//OUTPUT: dict of participant names and who they beat
function winnersObject(matches) {
    // initialize winners and particpicants
    let participants = new Set();
    let winnersDict = {};
    
    // iterate over all matches
    matches.forEach(match => {
        // initialize a winner and a lsoer of each match
        let { winner, loser } = match;

        // add all curent players to particpants
        participants.add(winner);
        participants.add(loser);

        // if a winner doesnt exist, initialize their beaten list to empty
        if (!winnersDict[winner]) {
        winnersDict[winner] = [];
        }

        // initialize winners beaten list, if their beaten list doesnt have current lsoer, add that loser
        let winnersValues = winnersDict[winner];
        if (!winnersValues.includes(loser)) {
            winnersDict[winner].push(loser);
        }

    });

    // Sort dict, and create a new final dict incase a contestant had no beaten list, and and an expty one for that player
    const sortedParticipants = Array.from(participants).sort();

    const finalDict = {};
    sortedParticipants.forEach(player => {
        finalDict[player] = winnersDict[player] || [];
    });
    
    // return dict of players and who they have beaten
    return finalDict;
}
