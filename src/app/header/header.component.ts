import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {




  @Output() onMenuBtnClick=new EventEmitter()

  menubtnClicked(){
    this.onMenuBtnClick.emit()


    setTimeout(() => {
      window.dispatchEvent(
      new Event('resize')
      )
    }, 100);

  }

}
