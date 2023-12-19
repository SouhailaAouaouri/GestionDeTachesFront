import { Component, OnInit,ElementRef } from '@angular/core';
import {Projet} from "../../Models/projet";
import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDrag,CdkDropList} from "@angular/cdk/drag-drop";
import {Task} from "../../Models/task";
@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {
  affecterDeveloper: boolean = false;
  detailsTask: boolean = false;
  newTask: boolean = false;

  task :Task= new Task();
  projet :Projet= new Projet();
  developers: any[] = [
    { nom: 'Nom1', prenom: 'Prenom1', specialite: 'Spécialité1', nbTachesEffectuees: 10, photoUrl: 'url_de_la_photo1.jpg' },
    { nom: 'Nom2', prenom: 'Prenom2', specialite: 'Spécialité2', nbTachesEffectuees: 5, photoUrl: 'url_de_la_photo2.jpg' },
    // Ajoutez d'autres développeurs ici
  ];
  todo = ['Tâche 1', 'Tâche 2', 'Tâche 3'];
  inProgress = ['Tâche 4', 'Tâche 5'];
  done = ['Tâche 6', 'Tâche 7'];

  constructor() { }

  ngOnInit(): void {
  }
  BackToListProjets() {

  }
  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.sortLists();

  }
  sortLists(): void {
    this.todo.sort();
    this.inProgress.sort();
    this.done.sort();
  }

  seeDetailsTask() {
    console.log('see task details');
    this.affecterDeveloper = false;
    this.detailsTask = true;
  }

  AffecterTask() {
    console.log('affected task to developer');
    this.affecterDeveloper = true;
    this.detailsTask = false;
  }
  createTask() {
    console.log('create task');
    this.newTask = true;
  }
}
