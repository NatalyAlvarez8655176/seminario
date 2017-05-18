import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
  	"agregarRoles": function(){
  		Roles.addUsersToRoles("x48hZaxWhqMHeuNDe",["Admin"])
  	},
  	"agregarMateria" : function(nombre,idUsuario){
  		CURSO.insert({Nombre:nombre,idUsuario:idUsuario});
  	}
  });
});

