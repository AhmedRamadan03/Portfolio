import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faLaravel,faHtml5,faCss3,faNodeJs,faBootstrap,faGithub,faLine } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  faAngular   = faAngular;
  faPhp       = faPhp;
  faJava      = faJava;
  faLaravel   = faLaravel;
  faHtml5     = faHtml5;
  faCss3      = faCss3;
  faNodeJs    = faNodeJs;
  faBootstrap = faBootstrap;
  faGithub    = faGithub;
  faLine      = faLine;
  constructor() { }

  ngOnInit(): void {
  }

}
