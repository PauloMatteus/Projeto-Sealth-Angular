import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  username: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getUsernameFromLocalStorage();
  }
  
  openInfoComponent() {
    this.router.navigate(['/info']);
  }
  openConfigComponent(){
    this.router.navigate(['/config']);
  }
  openHealthComponent(){
    this.router.navigate(['/health']);
  }
  openAppointmentsComponent(){
    this.router.navigate(['/appointment']);
  }
  openMedicinesComponent(){
    this.router.navigate(['/medicines']);
  }

  confirmLogout(): void {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja realmente sair?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#046B46',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Certeza',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login'; 
      }
    });
  }

  getUsernameFromLocalStorage(): void {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      const parts = storedUsername.split(' ');
      const firstName = parts[0];
      this.username = firstName;
    }
  }
}
