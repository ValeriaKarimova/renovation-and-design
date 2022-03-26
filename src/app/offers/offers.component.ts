import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  isActive: boolean = false;
  isService: boolean = false;
  isWorks: boolean = false;
  isDesign: boolean = false;
  isRepair: boolean = false;


  handleMouseOver(event: MouseEvent) {
    if (event.target === null) return;
    const target = event.target as HTMLElement;
    switch (target.innerText) {
      case 'Услуги по ремонту':
      this.isService = true;
      this.changeStyle('2', 'Услуги по ремонту');
      break;
      case 'Виды работ':
      this.isWorks = true;
      this.changeStyle('3', 'Виды работ по ремонту');
      break;
      case 'Дизайн интерьера':
      this.isDesign = true;
      this.changeStyle('4', 'Дизайн интерьера');
      break;
      case 'Ремонт помещений':
      this.isRepair = true;
      this.changeStyle('5', 'Ремонт помещений');
      break;
    }
  }

  changeStyle(imgNum: string, text: string) {
    const container = document.querySelector('.container') as HTMLElement;
    const wrapper = document.querySelector('.offers__wrapper') as HTMLElement;
    const header = document.querySelector('.header__navigation-list') as HTMLElement;
    const title = document.querySelector('.title__highlighted') as HTMLElement;
    title.innerHTML = `${text}`;
    this.isActive = true;
    container.style.backgroundImage = `url(../../assets/images/main${imgNum}.png)`;
    wrapper.style.background = 'transparent';
    header.style.color = 'rgba(255, 255, 255, 1)';
  }

  handleMouseOut(event: MouseEvent) {
    const container = document.querySelector('.container') as HTMLElement;
    const wrapper = document.querySelector('.offers__wrapper') as HTMLElement;
    const header = document.querySelector('.header__navigation-list') as HTMLElement;
    const title = document.querySelector('.title') as HTMLElement;
    title.innerHTML = '<span class="title__highlighted">Ремонт и дизайн</span><br> в Москве и Московской области'
    header.style.color = 'rgba(34, 34, 34, 0.7)';
    wrapper.style.background = '';
    container.style.background = '';
    this.isActive = false;
    this.isService = false;
    this.isWorks = false;
    this.isDesign = false;
    this.isRepair = false;
  }

}
