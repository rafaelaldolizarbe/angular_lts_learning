import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookcards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookcards.component.html',
  styleUrl: './bookcards.component.css'
})
export class BookcardsComponent {
  @Input() book: any;
}
