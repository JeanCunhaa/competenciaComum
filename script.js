// Array para armazenar as atividades
let atividades = [];

// Função para adicionar uma atividade
function adicionarAtividade(event) {
  event.preventDefault();

  // Obter os valores do formulário
  let titulo = document.getElementById('titulo').value;
  let descricao = document.getElementById('descricao').value;

  // Criar um objeto de atividade
  let atividade = {
    titulo: titulo,
    descricao: descricao
  };

  // Adicionar a atividade ao array
  atividades.push(atividade);

  // Limpar o formulário
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';

  // Chamar a função para exibir as atividades
  exibirAtividades();
}

// Função para exibir as atividades
function exibirAtividades() {
  // Obter o container das atividades
  let container = document.getElementById('atividadeContainer');

  // Limpar o container
  //container.innerHTML = '';

  // Iterar sobre as atividades e criar os elementos HTML correspondentes
  atividades.forEach(function(atividade) {
    // Criar um elemento div para a atividade
    let divAtividade = document.createElement('div');
    divAtividade.classList.add('atividade');

    // Criar elementos para o título e descrição da atividade
    let tituloAtividade = document.createElement('h3');
    tituloAtividade.textContent = atividade.titulo;
    let descricaoAtividade = document.createElement('p');
    descricaoAtividade.classList.add('conteudo');
    descricaoAtividade.textContent = atividade.descricao;

    // Adicionar os elementos à div da atividade
    divAtividade.appendChild(tituloAtividade);
    divAtividade.appendChild(descricaoAtividade);

    // Adicionar a div da atividade ao container
    container.appendChild(divAtividade);
  });
}

// Associar a função adicionarAtividade ao evento de submit do formulário
document.getElementById('atividadeForm').addEventListener('submit', adicionarAtividade);