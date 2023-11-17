import { Component , Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void{}
  

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
