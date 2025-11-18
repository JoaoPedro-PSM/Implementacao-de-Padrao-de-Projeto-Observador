class Cliente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public verificarPreco(fruta: string, preco: number): void {
        console.log(`O preço da ${fruta} foi atualizado.`);
        console.log(`Preço atual: R$ ${preco.toFixed(2)}.`);

        if (preco < 5.00) {
            console.log(`${this.nome}:comprar ${fruta} o preço esta mt bom`);
        } else {
            console.log(`esta mt caro, vou esperar`);
        }
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

    public atualizarPreco(fruta: string, novoPreco: number): void {
        console.log(`atualizando o preço de ${fruta} para ${novoPreco.toFixed(2)}`);
        this.precos[fruta] = novoPreco;

        this.clientes.forEach(cliente => {
            cliente.verificarPreco(fruta, novoPreco); 
        });
    }
}

const loja = new LojaDeFrutas();

const joao = new Cliente('João');
const maria = new Cliente('Maria');
const carlos = new Cliente('Carlos');

loja.adicionarCliente(joao);
loja.adicionarCliente(maria);
loja.adicionarCliente(carlos);

loja.atualizarPreco('Manga',4);
loja.atualizarPreco('Morango',8);