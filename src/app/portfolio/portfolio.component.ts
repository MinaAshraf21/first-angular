import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  img1Src: string = 'poert1.png';
  img2Src: string = 'port2.png';
  img3Src: string = 'port3.png';

  onImgClick(imgSrc: string): void {
    const cover = document.getElementById('cover');
    const clickedImg = document.getElementById('clickedImg');

    if (cover && clickedImg) {
      cover.classList.replace('d-none', 'd-flex'); // Show the cover
      clickedImg.style.backgroundImage = `url(${imgSrc})`; // Set the background image
      clickedImg.style.backgroundSize = 'cover'; // Ensure the image covers the div
      clickedImg.style.backgroundPosition = 'center'; // Center the image
      cover.addEventListener('click', (event) => {
        if (event.target === cover) {
          cover.classList.replace('d-flex', 'd-none'); // Hide the cover
        }
      });
    }
  }
}
