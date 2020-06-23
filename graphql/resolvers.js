//something that resolves queries
const jgam = {
  name: 'jimmy',
  age: 25,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => jgam,
  },
};

export default resolvers;
