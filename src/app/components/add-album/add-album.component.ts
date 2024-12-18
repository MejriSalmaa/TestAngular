import { Component } from '@angular/core';
import { Album } from 'modele/Album';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
album:Album= new Album();

constructor(private crud: CrudService) {
  this.album=new Album();
}
onSubmit(album:Album){
album.archived=0;
  this.crud.post(album).subscribe();
  
}
}
