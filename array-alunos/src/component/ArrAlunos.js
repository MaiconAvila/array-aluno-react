import React from 'react';
import "../App.css"
export default class Alunos extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      alunos: [
        {
            nome: "Jorge",
            idade: 58,
            polo: "Alemão"
        },
        {
            nome: "Lucas",
            idade: 24,
            polo: "Alemão"
        },
        {
            nome: "Geysa",
            idade: 20,
            polo: "Prazeres"
        },
        {
            nome: "Zaíra",
            idade: 19,
            polo: "Prazeres"
        },
        {
            nome: "Dandara",
            idade: 24,
            polo: "Alemão"
        },
        {
            nome: "Caroline",
            idade: 19,
            polo: "Prazeres"
        },
        {
            nome: "Luan",
            idade: 25,
            polo: "Alemão"
        },
        {
            nome: "Cleiton",
            idade: 19,
            polo: "Alemão"
        },
        {
            nome: "Ester",
            idade: 22,
            polo: "Prazeres"
        },
        {
            nome: "Victor",
            idade: 24,
            polo: "Alemão"
        },
        {
            nome: "Artur",
            idade: 24,
            polo: "Alemão"
        },
        {
            nome:" Ruan",
            idade: 20,
            polo: "Prazeres"
        },
        {
            nome: "Cassio",
            idade: 21,
            polo: "Prazeres"
        },
        {
            nome: "Douglas",
            idade: 24,
            polo:"Alemão"
        },
        {
            nome: "Renan",
            idade: 15,
            polo: "Prazeres"
        },
        {
            nome: "Priscila",
            idade: 32,
            polo: "Prazeres"
        },
        {
            nome: "Cicero",
            idade: 24,
            polo: "Prazeres"
        }
      ]
    } 
  }

//   deBobeira= () => {
    
//   }

  render () {
      return (
        <div className="caixa-de-lunos">
            {this.state.alunos.map((aluno, index) => {
            return (
                    <div className="aluno" key={index}>
                        <h1>{aluno.nome}</h1>
                        <p>{aluno.idade}</p>
                        <p>{aluno.polo}</p>
                    </div>
            )
            })}
        </div>
      )
  }
}