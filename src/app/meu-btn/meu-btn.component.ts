import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-btn',
  templateUrl: './meu-btn.component.html',
  styleUrls: ['./meu-btn.component.css']
})
export class MeuBtnComponent implements OnInit {

  title : string = "Testando"

  constructor() {
  }

  ngOnInit(): void {
  }

  mudarCor(event){
    let classesCores = ["yellow", "red", "green"];
    let corIndex = 0;
    setInterval(function(){
      event.target.class = classesCores[corIndex];
      corIndex++;
      if(corIndex === 3){
        corIndex = 0;
      }
    }, 1000)
  }


}
