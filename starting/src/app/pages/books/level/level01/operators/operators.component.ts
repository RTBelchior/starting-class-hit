import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  imports: [CommonModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent  implements OnInit{
  // Operador Logico (||) operador OR
  // Descrição: Retorna o primeiro valor Verdadeiro encontrado ou o ultimo valor se todos forem falsos
  a = 0;
  b = null;
  c = 'Olá';
  resultadoLogico = this.a || this.b || this.c;
  
  //Operador de Coalescência Nula (??)
  //Nullish Coalescing Operator.
  //Descrição: Retorna o valor d direita APENAS se o valor da esquerda for NULL ou UNDERFINED.
  
  valor1 = null;
  valor2 = undefined;
  valor3 = 0;
  valor4= 'Texto';
  resultadoCoalescencia = this.valor1 ?? this.valor2 ?? this.valor3 ?? this.valor4
  
  // Operador ternario no Ts, Opttional Chainig
  // Descrição: Verifica se uma propriedade ou metodo existe antes de acessá-lo e evita erros
  
  idade = 18;
  resultadoTernario = this.idade >= 18 ? 'É maior' : 'É menor' ;
  
  // Operador de Atribuição Condicional (?)
  // nome: Opttional Chaining, Elves.
  // Descrição: Verifica se uma propridade ou metodo existe antes de acede-lo e evita erros
  resultadoAtribuicaoCondicional = {
    nome: 'João',
    endereco: {cidade: 'Lisboa'},
    contacto: {telefone: undefined}
  }
  
  // Operador de Negação (!)
  // Nome: Logical NOT
  //Descrição: Inverte o valor booleano
  
  //Operador de DUPLA NEGAÇÃO (!!)
  //Nome: Double NOT
  //Descrição: Converte um valor para um booleano 
  
  operadorNegacao = false;
  operadorNegacaoNumero = 0;
  
  
  ngOnInit(): void {
     console.log(this.resultadoAtribuicaoCondicional?.endereco?.cidade);  // Saída: "Lisboa"
    console.log(this.resultadoAtribuicaoCondicional?.contacto?.telefone); // Saída: undefined Explicação: Se qualquer parte da cadeia for undefin
  }
  
}
