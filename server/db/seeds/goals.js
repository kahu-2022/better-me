/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("goals").del();
  await knex("goals").insert([
    { id: 1, details: "Complete Dev Academy", completed: true },
    { id: 2, details: "Go to the gym 5 times a week", completed: false },
    { id: 3, details: "Getting full drivers license", completed: true },
  ]);
};
