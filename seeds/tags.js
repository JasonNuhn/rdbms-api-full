exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('tags')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('tags').insert([
                { 'id': 1, tag: 'suck' },
                { 'id': 2, tag: 'duck' },
                { 'id': 3, tag: 'awesome' },
            ]);
        });
  };