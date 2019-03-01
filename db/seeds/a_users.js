// populates database table users with fake users
//called a_users for sorting and quality of life reasons
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
		knex('users')
			.del()
			// Deletes ALL existing entries
			.then(function() {
				return knex('users').insert([
					/* add actual values to test the database */
					{
						first_name: 'Leslie',
						last_name: 'Plumb',
						email: 'souris@fromage.com',
						phone_number: '5147894563',
						password: 'abc123',
						profile_type: 'life_style',
						sms_good_days: 'yes',
						sms_bad_days: 'no'
					},
					{
						first_name: 'Sonia',
						last_name: 'Barret',
						email: 'grenouille@mare.com',
						phone_number: '5141234567',
						password: 'abc123',
						profile_type: 'medical',
						sms_good_days: 'yes',
						sms_bad_days: 'yes'
					},
					{
						first_name: 'Justin',
						last_name: 'Mao',
						email: 'bird@birdy.com',
						phone_number: '5148765432',
						password: 'abc123',
						profile_type: 'general',
						sms_good_days: 'no',
						sms_bad_days: 'no'
					}
				]);
			})
	]);
};
