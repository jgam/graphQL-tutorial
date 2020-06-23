export const people = [
  {
    id: '0',
    name: 'jimmy',
    age: 25,
    gender: 'male',
  },
  {
    id: '1',
    name: 'jimmyasd',
    age: 251,
    gender: 'female',
  },
  {
    id: '2',
    name: 'jiaammy',
    age: 225,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
