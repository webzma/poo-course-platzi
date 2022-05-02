function videoPlay(id) {
  const urlSecreta = "https:platziurlsecretamasquelanasa/" + id;
  console.log("Se está reproduciendo el vídeo desde esta url:" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https:platziurlsecretamasquelanasa/" + id;
  console.log("Se está pausando el vídeo desde esta url:" + urlSecreta);
}

class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Comments {
  constructor({
    content,
    studentName,
    studentRole = "Estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} Likes`);
    console.log(this.content);
  }
}

class Student {
  constructor ({
    name,
    age,
    username,
    email,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourse = [],
    learningPaths = []
  })
  {
    this.name = name;
    this.age = age;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      instagram,
      twitter,
      facebook,
    };
    this.approvedCourse = approvedCourse;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comments({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  };
};

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(nuevoCursito) {
    if (nuevoCursito.isFree) {
      this.approvedCourse.push(nuevoCursito);
    } else {
      console.log('Lo siento, ' + this.name + ' este curso no es gratis.');
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(nuevoCursito) {
    if (nuevoCursito.lang !== 'en') {
      this.approvedCourse.push(nuevoCursito);
    } else {
      console.log('Lo siento ' + this.name  +',' + ' no puedes tomar cursos en inglés.');
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

   approveCourse(nuevoCursito) {
    this.approvedCourse.push(nuevoCursito);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

   approveCourse(nuevoCursito) {
    this.approvedCourse.push(nuevoCursito);
  }

   publicarComentario(commentContent) {
    const comment = new Comments({
      content: commentContent,
      studentName: this.name,
      studentRole: "Teacher"
    });
    comment.publicar();
  };
}

// INSTRUCTORES
const freddyVega = new TeacherStudent({
  name: "Freddy Vega",
  username: "Freddier",
  instagram: "Freddy Vega",
  facebook: "John Freddy Vega",
  twitter: "Freddy Vega",
  age: 35,
  id: 1,
  rango: "CEO",
  email: "no.send.me.emails@gmail.com",
});

const juanDc = new TeacherStudent({
  name: "Juan...",
  username: "JuanDC",
  instagram: "JuanDC",
  facebook: undefined,
  twitter: "JuanDC",
  age: 21,
  id: 77,
  rango: "Instructor",
  email: "juandc@gmail.com",
});

const diegoDeGranda = new TeacherStudent({
  name: "Diego De Granda",
  username: "Diego de Granda",
  instagram: "DiegoGranda",
  facebook: undefined,
  twitter: "dGranda19",
  age: 30,
  id: 24,
  rango: "Instructor",
  email: "dieguitoGrande@gmail.com",
});

class Course {
   constructor({
    name,
    instructor,
    classes = [],
    isFree = false,
    lang = "es"
  })

  {
    this._name = name;
    this.instructor = instructor;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    if (this.name === "Curso malito de programación básica") {
      console.error("Wey... No!");
    } else {
      this._name = nuevoNombre;
    }
  }
}

class LearningPaths {
  constructor({
    namePath,
    courses = [],
  })

  {
    this.namePath = namePath;
    this.courses = courses;
  }
}

// CURSOS
const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  instructor: freddyVega.name,
  isFree: true,
});

const cursoDefinitivoDeHtml = new Course({
  name: "Curso definitivo de HTML",
  instructor: diegoDeGranda.name,
  lang: "en",
});

const cursoPracticoDeHtml = new Course({
  name: "Curso práctico de HTML",
  instructor: diegoDeGranda.name,
});

const cursoDefinitivoJavascript = new Course({
  name: "Curso Definitivo de JavaScript",
  instructor: diegoDeGranda.name,
});

const cursoPracticoJavascript = new Course({
  name: "Curso Práctico de JavaScript",
  instructor: juanDc.name,
});

const cursoDataBussines = new Course({
  name: "Curso de Data Bussines",
  instructor: juanDc.name,
});

// RUTAS DE APRENDIZAJES
const webDevelopment = new LearningPaths({
  namePath: "Escuela de Desarrollo Web",
  courses:
  [
    cursoProgBasica,
    cursoDefinitivoDeHtml,
    cursoPracticoDeHtml,
  ]
});

const escuelaJavascript = new LearningPaths({
  namePath: "Escuela de JavaScript",
  courses:
  [
    cursoProgBasica,
    cursoDefinitivoJavascript,
    cursoPracticoJavascript,
  ]
});

const escuelaData = new LearningPaths({
  namePath: "Escuela de Data Science",
  courses:
  [
    cursoDataBussines,
    "Curso de Dataviz"
  ]
});

const escuelaVideogame = new LearningPaths({
  namePath: "Escuela de Videojuegos",
  courses:
  [
    "Curso de Unity",
    "Curso de Unreal"
  ]
});

// ESTUDIANTES
const santiago = new FreeStudent({
  name: "Santiago",
  age: 17,
  username: "santi08",
  email: "santiago08@gmail.com",
  instagram: "santi08",
  facebook: "santi08ago",
  learningPaths:
  [
    webDevelopment,
    escuelaVideogame,
    escuelaData,
    escuelaJavascript,
  ],
});

const manuel = new ExpertStudent({
  name: "Manuel",
  age: 18,
  username: "manuel00",
  email: "manuel@gmail.com",
  instagram: undefined,
  facebook: undefined,
  twitter: "manuelitooosalsedanas",
  learningPaths:
  [
    webDevelopment,
    escuelaVideogame,
  ],
});

console.log(santiago);
console.log(manuel);
console.log(freddyVega);
