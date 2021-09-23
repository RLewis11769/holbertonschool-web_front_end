function studentHogwarts () {
  // Module for each student
  let privateScore = 0;
  let name = null;

  function changeScoreBy (points) {
    // Private method to change privateScore by points
    privateScore += points;
  }

  return {
    // Gives access to public methods outside of studentHogwarts module

    setName: function (newName) {
      // Sets name to newName
      name = newName;
    },

    rewardStudent: function () {
      // Adds 1 point to privateScore
      changeScoreBy(1);
    },

    penalizeStudent: function () {
      // Subtracts 1 point from privateScore
      changeScoreBy(-1);
    },

    getScore: function () {
      // Returns privateScore
      return (name + ': ' + privateScore);
    }
  };
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

// Note: harry and draco are constructors
