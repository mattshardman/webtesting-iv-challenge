exports.seed = (knex, Promise) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users")
        .truncate()
        .insert([
          { id: 1, name: "Matt", email: "matt@x.com" },
          { id: 2, name: "Brian", email: "brian@x.com" }
        ]);
    });
};
