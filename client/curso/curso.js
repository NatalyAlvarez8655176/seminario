Template.curso.events({
	'click #btnnombreC': function (e) {
		e.preventDefault();
		var nombre = document.getElementById("nombreC").value;

		Meteor.call('agregarMateria', nombre, Accounts.userId());

	},
	'click #modal1' :function (e)
	{
		e.preventDefault()
		$('#modal1').modal('open');
	}
});
