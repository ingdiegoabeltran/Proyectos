// Crear primero objeto litearl
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprovados: [
        "Curso Definitivo HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    // crear un metodo
    aprobarCurso(nuevoCursito) {
        this.cursosAprovados.push(nuevoCursito);
    }

};

// crear prototipo student
// Necesitamos que cada estudiante nos diga su nmbre, edad, cursos aprobados
function student(name, age, cursosAprovados) {
    this.name = name;
    this.age = age;
    this.cursosAprovados = cursosAprovados;
}

student.prototype.aprobarCurso = function (nuevocursito) {
    this.cursosAprovados.push(nuevocursito);
}

// crear instancia del prototipo
const juanita = new student(
    "Juanita",
    15,
    [
        "Curso de Introduccion a los Videojuegos",
        "Curso de creacion de Personajes",
    ],
);

// prototipos con la sintaxis de clases
class student2 {
    constructor({
        name,
        age,
        email,
        cursosAprovados = [],
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprovados = cursosAprovados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprovados.push(nuevoCursito);

    }
}

const miguelito = new student2({
    name: "MIguel",
    age: 28,
    email: "miguelito@platzi.com",
});





// Natalia apruebe otro curso
// Cursos aprobados es un atributo
// otra forma de ingresar un curso
// natalia.cursosAprovados.push("Curso Responsive design");

