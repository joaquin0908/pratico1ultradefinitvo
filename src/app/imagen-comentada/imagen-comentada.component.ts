import { Component } from '@angular/core';
//creo un objeto o arreglo con interface llamado comment, cuyos elementos son texto y editando.
interface Comment {
  texto: string;
  editando: boolean;
}

@Component({
  selector: 'app-image-comments',
  templateUrl: './imagen-comentada.component.html',
  styleUrls: ['./imagen-comentada.component.css']
})
export class ImageCommentsComponent {
  //a comment lo inicializo en vacio y dentro de la clase se llama comentarios.
  comentarios: Comment[] = [];
//funcion que sirve para agregar comentarios 
  addComment(comment: string) {
    let newComment: Comment = {
      texto: comment,
      editando: false
    };
    this.comentarios.push(newComment);
  }
//funcion que sirve para borrar comentarios
  deleteComment(index: number) {
    this.comentarios.splice(index, 1);
  }
//funcion que sirve para editar comentarios 
  editComment(index: number) {
    this.comentarios[index].editando = true;
  }
//funcion que sirve para guardar la edicion
  saveComment(index: number) {
    this.comentarios[index].editando = false;
  }
}