class UsuarioEstacao {
    Matricula: string;
    Nome: string;
    AcessoNivel: number;
    EstacoesResponsaveis: string[];
    UltimoLogin: Date;

    constructor(nome: string, acesso: number, estacoes: string[], login: Date) {
        this.Nome = nome;
        this.AcessoNivel = acesso;
        this.EstacoesResponsaveis = estacoes;
        this.UltimoLogin = login;
    }
}

export default UsuarioEstacao;