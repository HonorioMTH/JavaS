class ContaBanco {
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;

    constructor(
        titular: string,
        agencia: string,
        conta: string,
        saldo: number,
    ){
        this.titular = titular
        this.agencia = agencia
        this.conta = conta
        this.saldo = saldo
    }
}