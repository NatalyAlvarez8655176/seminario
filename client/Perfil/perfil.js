Template.perfil.events({
	'click #rol': function (e) {
		e.preventDefault();
		//var idusuario = Accounts.userId()
		Meteor.call('agregarRoles');
	}
});