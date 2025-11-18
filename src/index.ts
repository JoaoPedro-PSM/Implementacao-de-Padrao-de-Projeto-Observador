class Cliente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

}

class LojaDeFrutas {
    precos: { [fruta: string]: number } = {};
    clientes: Cliente[] = new Array<Cliente>();

    constructor() {
        this.precos['Manga'] = 10;
        this.precos['Morango'] = 5;
    }

    public adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(`[Loja] Cliente ${cliente.nome} adicionado ao sistema.`);
    }

    public getPreco(fruta: string): number {
        return this.precos[fruta] || 0;
    }
}

const loja = new LojaDeFrutas();

const joao = new Cliente('João');
const maria = new Cliente('Maria');
const carlos = new Cliente('Carlos');

loja.adicionarCliente(joao);
loja.adicionarCliente(maria);
loja.adicionarCliente(carlos);