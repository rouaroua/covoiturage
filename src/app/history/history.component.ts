import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})

export class HistoryComponent implements OnInit {
  availableRides = [
    { title: 'Matin - Covoiturage vers le centre-ville', departureLocation: 'Location A', arrivalLocation: 'Location B', date: new Date(), time: '08:00', seats: 3 },
    // Add more available rides
  ];

  pastRides = [
    { title: 'Soir - Covoiturage retour', departureLocation: 'Location B', arrivalLocation: 'Location A', date: new Date('2023-11-01'), time: '18:00' },
    // Add more past rides
  ];

  constructor() {}

  ngOnInit(): void {}
}
