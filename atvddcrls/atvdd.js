class Funcionario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.atividades = [];
    }

    adicionarAtividade(atividade) {
        this.atividades.push(atividade);
    }

    listarAtividades() {
        if (this.atividades.length === 0) {
            console.log(`${this.nome} não tem atividades atribuídas.`);
        } else {
            console.log(`Atividades de ${this.nome}:`);
            this.atividades.forEach((atividade, index) => {
                console.log(`${index + 1}. ${atividade}`);
            });
        }
    }
}

// Classe Programador que herda de Funcionario
class Programador extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade);
        this.linguagem = linguagem;
    }

    exibirLinguagem() {
        console.log(`${this.nome} é programador especializado em ${this.linguagem}.`);
    }
}

// Classe Medico que herda de Funcionario
class Medico extends Funcionario {
    constructor(nome, idade, especialidade) {
        super(nome, idade);
        this.especialidade = especialidade;
    }

    exibirEspecialidade() {
        console.log(`${this.nome} é médico especializado em ${this.especialidade}.`);
    }
}

// Classe para Gerenciar Funcionarios
class GerenciamentoFuncionarios {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    listarFuncionarios() {
        this.funcionarios.forEach((funcionario, index) => {
            console.log(`${index + 1}. ${funcionario.nome}, ${funcionario.constructor.name}`);
        });
    }

    listarAtividadesDeTodos() {
        this.funcionarios.forEach(funcionario => {
            funcionario.listarAtividades();
        });
    }
}

// Testando o sistema
const gerenciador = new GerenciamentoFuncionarios();

const programador1 = new Programador('Carlos', 28, 'JavaScript');
programador1.adicionarAtividade('Desenvolver sistema de gerenciamento');
programador1.adicionarAtividade('Corrigir bugs no backend');

const medico1 = new Medico('Ana', 35, 'Cardiologia');
medico1.adicionarAtividade('Consulta de rotina');
medico1.adicionarAtividade('Cirurgia de coração');

gerenciador.adicionarFuncionario(programador1);
gerenciador.adicionarFuncionario(medico1);

console.log("Lista de funcionários:");
gerenciador.listarFuncionarios();

console.log("\nAtividades de todos os funcionários:");
gerenciador.listarAtividadesDeTodos();

// Exibindo detalhes específicos
programador1.exibirLinguagem();
medico1.exibirEspecialidade();
