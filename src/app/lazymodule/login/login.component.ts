import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrato = true;
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  controllaPwd(pwd: any, bar: any, result: any){
    this.isHidden = false;

    let x = 0;
    let password = pwd;
    let barra = bar;
    let res = result;

    //controllo numeri
    const check=/[0-9]/;
    if(check.test(password.value)){
      x += 20;
    }

    //controllo minuscole
    const check2=/[a-z]/;
    if(check2.test(password.value)){
      x += 20;
    }

    //controllo maiuscole
    const check3=/[A-Z]/;
    if(check3.test(password.value)){
      x += 20;
    }

    //controllo simboli
    const check4=/[$-/:-?{-~!"^_`\[\]]/;
    if(check4.test(password.value)){
      x += 20;
    }

    // controllo lunghezza (minore o uguale a 10 caratteri)
    if(password.value.length >= 10){
      x += 20;
    }

    // risultato
    barra.style.width = x + "%";
    if (x == 100) {
      barra.style.backgroundColor = "green";
        res.innerHTML = "Eccellente";
    }
    if (x >60) {
      barra.style.backgroundColor = "green";
      res.innerHTML = "Ottima";
    }
    if (x <=40) {
      barra.style.backgroundColor = "goldenrod";
      res.innerHTML = "Buona";
    }
    //voto minimo 20
    if (x <=20) {
      barra.style.backgroundColor = "red";
      res.innerHTML = "Pessima";
    }

    // if(password.value.length == 0){
    //   x == 0;
    //   res.innerHTML = "";
    // }

    //controllo spazi bianchi
    const check5=/\s\S/;
    if(check5.test(password.value)){
      res.innerHTML = "La password non deve contenere spazi bianchi";
    }
  }

  spegniBarra(){
    this.isHidden = true;
  }

  formRegistrazione(){
    this.registrato = !this.registrato;
  }

}
