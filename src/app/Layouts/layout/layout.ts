import { Component } from '@angular/core';
import { Sidebar } from "../../Components/sidebar/sidebar";
import { Navbar } from "../../Components/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../Components/footer/footer";

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Navbar, RouterOutlet, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
