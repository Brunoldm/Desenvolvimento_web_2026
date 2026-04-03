type Tarefa = {
    descricao:string;
    prioridade: number;
    concluida: boolean;
}

const tarefa : Tarefa[] = [
    {descricao:"Fazer relatorio", prioridade: 2, concluida: false},
    {descricao:"Enviar e-mail", prioridade: 3, concluida: false},
    {descricao: "Fazer projeto", prioridade: 1, concluida: false}
];

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void { 
    console.log(`Tarefa concluída: ${descricao}`); 
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`); 
}

function executarTarefas(tarefas: Tarefa[], callback:(descricao: string, indice: number, totalTarefas: number)=> void, timer: number = 1000){
    tarefas.sort((a,b)=>b.prioridade - a.prioridade);
    let contador = 0;

    const interval = setInterval(()=>{
        if(contador >= tarefas.length || tarefas[contador]?.descricao === "CANCELAR"){
            clearInterval(interval);
        }else{
            const tarefa = tarefas[contador];
            if(tarefa){
                tarefa.concluida = true;
                callback(tarefa.descricao, contador, tarefas.length);
                contador++;
            }
        }
    },timer);
}

executarTarefas(tarefa,imprimirTarefa, 1500);




