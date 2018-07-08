var createPolitician = function (name) {

  var politician ={};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  
  politician.tallyUpTotalVotes = function () {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i]; 
    };
  };
  
  return politician;
};

var dorinda = createPolitician ("Dorinda Medley");
var erika = createPolitician ("Erika Jayne");

dorinda.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
erika.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

dorinda.electionResults [9] = 1;
erika.electionResults [9] = 28;

dorinda.electionResults [4] = 17;
erika.electionResults [4] = 38;

dorinda.electionResults [43] = 11;
erika.electionResults [43] = 27;

dorinda.tallyUpTotalVotes();
erika.tallyUpTotalVotes();

var winner =""; 

if (dorinda.totalVotes > erika.totalVotes){
  winner = dorinda.name;
}
else if (dorinda.totalVotes < erika.totalVotes) {
  winner = erika.name;
}
else {
  winner = "DRAW."
};
