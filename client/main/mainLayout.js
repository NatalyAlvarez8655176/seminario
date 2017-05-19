Template.mainLayout.helpers({
	username : function(){
		return Accounts.user().username;
	}
}),
Template.allCursos.helpers({
	allCursos : function(){
		return CURSO.find().fetch();
	}
}),

Template.mainLayout.events({
	"click #login" : function(){
		console.log("ok")
		$(".panelForm").css("opacity",1);
		FlowRouter.go("/Perfil");
	},
	"click #logout" : function(){
		Meteor.logout();
	}
	
});
