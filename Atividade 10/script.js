var aluno1 = {
    nome: "Nicolas",
    ra: "00304"
};

alert("Objeto: aluno1" + " nome: " + aluno1.nome + " ra: " + aluno1.ra);

function Aluno2(nome, ra) {
    this.nome = nome;
    this.ra = ra;
}

var objAluno2 = new Aluno2("Joao", "00305");

alert("Objeto: aluno2" + " nome: " + objAluno2.nome + " ra: " + objAluno2.ra);


var objAluno3 = Object.create(Aluno2);
objAluno3.nome = "Carlos";
objAluno3.ra = "00306"

alert("Objeto: aluno3" + " nome: " + objAluno3.nome + " ra: " + objAluno3.ra);