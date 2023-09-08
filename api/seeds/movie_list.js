/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movie_list').del()
  await knex('movie_list').insert([
    { title: 'Mean Girls', description: " we " },
    { title: 'Hackers', description: " are " },
    { title: 'The Grey', description: " not " },
    { title: 'Sunshine', description: " willing " },
    { title: 'Ex Machina', description: " . " }
  ]);
};






