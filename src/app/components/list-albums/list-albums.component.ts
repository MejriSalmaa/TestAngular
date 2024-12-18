import { Component, OnInit } from '@angular/core';
import { Album } from 'modele/Album';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  listalbum:any[]=[];
constructor(private serv:CrudService , private route:ActivatedRoute) { }

ngOnInit(): void {
  this.serv.getall().subscribe((data:any)=>this.listalbum=data);
}
}
