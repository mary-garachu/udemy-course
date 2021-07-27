import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  ServerCreationStatus="No server was created!";
  ServerName= 'TestUnits';
  Username= "garachu.muthoni@gmail.com";
 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)

  }

  ngOnInit(): void {
  }
  onCreateServerStatus() {
    this.ServerCreationStatus="Server was created!";
  };
 
  onUpdateServerName (event:Event) {
    this.ServerName=(<HTMLInputElement> event.target).value;
  };

  onUpdateUsername() {
    this.Username="username";
  }

}
