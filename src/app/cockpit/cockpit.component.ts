import { Component, ElementRef, EventEmitter,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output()
  serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()
  bluprintcreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  onAddServer(nameInput:HTMLInputElement){
    //console.log(nameInput.value)
    console.log(this.serverContentInput)
   this.serverCreated.emit({
    // serverName: this.newServerName,
    //serverContent:this.newServerContent,
    serverName:nameInput.value,
    serverContent:this.serverContentInput.nativeElement.value

   
  })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {

    // console.log("bbbbb")
    this.bluprintcreated.emit({
       // serverName: this.newServerName,
    //   serverContent:this.newServerContent,
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
      
     })
  }

}
