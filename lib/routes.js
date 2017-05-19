FlowRouter.route("/",{
	name:"mainLayout",
	action(){
		BlazeLayout.render("mainLayout",{agregar:"agregarCursos"});
	}
});

FlowRouter.route("/Perfil",{
	name:"perfil",
	action(){
		BlazeLayout.render("mainLayout",{main:"perfil"});
	}
});

FlowRouter.route("/agregarCursos",{
	name:"mainLayout",
	action(){
		BlazeLayout.render("curso",{agregar:"curso",cursos:"allCursos"});
	}
});

FlowRouter.route("/soporte",{
	name:"mainLayout",
	action(){
		BlazeLayout.render("templateSupport",{banner:"baner_nav",content:"soporteTemplate"});
	}
});