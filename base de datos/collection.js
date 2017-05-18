CURSO = new Mongo.Collection("curso");
var Schemas={}
Schemas.Curso= new SimpleSchema({
	Nombre:{
		type : String,
		label : "nombre del curso"
	},
	idUsuario:{
		type : String,
	}
});

MATERIAL = new Mongo.Collection("material");
var Schemas={}
Schemas.Material= new SimpleSchema({
	Nombre :{
		type : String,
		label : "nombre material"
	},
	idCurso:{
		type : String,
	},
	Descripcion:{
		type : String
	}
});
