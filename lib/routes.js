FlowRouter.route("/",{
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{main:"main"});
	}
});

FlowRouter.route("/Perfil",{
	name:"perfil",
	action(){
		BlazeLayout.render("mainLayout",{main:"perfil"});
	}
});

FlowRouter.route("/AgregarCursos",{
	name:"AgregarCursos",
	action(){
		BlazeLayout.render("mainLayout",{main:"curso"});
	}
});