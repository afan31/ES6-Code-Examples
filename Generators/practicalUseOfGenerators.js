const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}


// need is to iterate over all employees in engineering team (no need to know size or department)

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
};

console.log(names);