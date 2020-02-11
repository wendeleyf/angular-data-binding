import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnDisabled : boolean = true;
  title : string = 'projeto-data-binding';
  valorSelect : string;
  paragrafo : string;
  paragrafoForm : string;

  style = {
    marginLeft: "0px"
  }

  heroes = [
    {
      "nome":"Homem de Ferro",
      "mostrar":false
    },
    {
      "nome":"Homem Aranha",
      "mostrar":false
    },
    {
      "nome":"Viúva Negra",
      "mostrar":false
    },
    {
      "nome":"Thor",
      "mostrar":false
    }
  ]
  items = []

  mudarCor(event){
    let colors = ["cyan", "green", "red", "yellow"];
    let indice = 0;

    setInterval(function(){
      event.target.style = "background-color:" + colors[indice];
      indice++;

      if(indice === 4){
        indice = 0;
      }
    }, 500)
  }

  click(event){
    console.log(event.target.id);
  }

  valorPeloInput(event){
    this.paragrafo = event.target.value;
  }

  pegarValorSelect(event){
    this.valorSelect = event.target.value;
  }

  submeterForm(valor){
    this.paragrafoForm = valor;
  }

  pegarValorMoverDiv(valor){
    this.style.marginLeft = valor+"px"
  }

  moverHerois(event){
    let heroi = event.target.value

  }
}
