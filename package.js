Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor.",
	version: "2.0.0",
	name: "mrgalaxy:stripe",
	git: "https://github.com/tyler-johnson/stripe-meteor.git"
});

Npm.depends({ "stripe": "3.1.0" });

Package.onUse(function(api) {
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_checkout.js', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.on_test(function(api) {
	api.use(['tinytest','mrgalaxy:stripe']);
	api.add_files([ "tests/client.js", "tests/checkout.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});