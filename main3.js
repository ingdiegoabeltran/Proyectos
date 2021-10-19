// cambiar objetos literales a clases
class learningPaths {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
}
  
  const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
      "cursoJS",
      "cursoReact",
      "cursoNextJS",
    ],
  });
  
  const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
      "cursoPython",
      "CursoMatematicas",
      "CursoExcel",
    ],
  });

class student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new student({
    name: "juandc",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
    ],
    approvedCourses: [
      "cursoPython",
      "CursoMatematicas",
      "CursoExcel",
    ]


});


const miguelito2 = new student({
    name: "miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
});