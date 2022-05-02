const natalia = {
	name: "Natalia",
	age: 20,
	cursosAprobados: [
		"Curso definito de HTML y CSS",
		"Curso prácticp de HTML y CSS"
	]
}

natalia.cursosAprobados.push("Curso profesional práctico de JavaScript");


function Student(name, age, cursosAprobados) {
	this.name = name,
	this.age = age,
	this.cursosAprobados = cursosAprobados
}

Student.prototype.aprobarCursos = function(nuevoCurso) {
	this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
	"Juana",
	40,
	[
		"Curso definitivo de HTML",
		"Curso definitivo de CSS"
	]
);

juanita.aprobarCursos("Curso práctico de JavaScript");
juanita.aprobarCursos("Curso práctico de Webpack");
juanita.aprobarCursos("Curso práctico Mobile First");


// Prototipos con la sintaxis de clases

class Student2 {
	constructor({
		name,
		age,
		cursosAprobados = [],
		email,
	})
	{
		this.name = name;
		this.edad = age;
		this.email = email;
		this.cursosAprobados = cursosAprobados;
	}

	aprobarCursos(nuevoCurso) {
		this.cursosAprobados.push(nuevoCurso);
	}
}


const miguelito = new Student2({
	name: "Miguel",
	age: 30,
	cursosAprobados:
	[
		"Curso Mobile First",
		"Curso de CSS práctico"
	],
	email: "miguelEsGay@gmail.com"
});
