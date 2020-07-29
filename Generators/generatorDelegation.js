const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// need is to iterate over all employees in engineering team and also in the testing team (no need to know size or department)
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam); // creates a generator
  yield* testingTeamGenerator; // yeild* - I am currently in a generator, but I have another generator, that has few more yield statements  - delegation
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

// need single for-of loop to iterate over both the teams
const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
};

console.log(names);