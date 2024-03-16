import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Collapse, CollapseInterface, CollapseOptions } from 'flowbite';
import { HomeComponent } from './home/home.component';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  sun: any = faSun
  moon: any = faMoon
  modeicon: any



  navmenu: any = [
    {
      name: "HOME",
      path: ""
    },
    {
      name: "SALE",
      path: "sale"
    },
    {
      name: "STORE",
      path: "store"
    }
  ]

  ngOnInit(): void {


    if (localStorage.getItem("theme") == "dark") {
      let body = document.documentElement
      body.classList.add("dark")
      this.modeicon = this.sun
    } else {
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = this.moon
    }

  }





  dark() {

    if (localStorage.getItem("theme") == "light") {
      let body = document.documentElement
      body.classList.add("dark")

      this.modeicon = this.sun
      localStorage.setItem("theme", "dark")
    } else {
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = this.moon


      localStorage.setItem("theme", "light")

    }
  }

  toggler() {


    const $targetEl: any = document.getElementById('targetEl');
    const $triggerEl: any = document.getElementById('triggerEl');
    const options: CollapseOptions = {
      onCollapse: () => {
        console.log('element has been collapsed')
      },
      onExpand: () => {
        console.log('element has been expanded')
      },
      onToggle: () => {
        console.log('element has been toggled')
      }
    };

    /*
    * $targetEl: required
    * $triggerEl: optional
    * options: optional
    */
    const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);

    collapse.expand()
  }



}
