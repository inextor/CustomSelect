import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/search-input/search-input.component';

@Component({
  selector: 'app-caller',
  templateUrl: './caller.component.html',
  styleUrls: ['./caller.component.css']
})
export class CallerComponent implements OnInit {

  items:SearchItem[] = [];

  constructor() { }


  ngOnInit() {
		this.items = [ 1,2,3,4 ].map((i)=>{
			return {
				primaryText: i+' text'
				,secondaryText: i+'secondary text'
				,imagePath: '/assets/image.jpg'
				,item: i
			};
		});
		console.log("The items has",this.items);

  }

	searchChanges(value:string)
	{
		this.items = [ 1,2,3,4 ].map((i)=>{
			return {
				primaryText: i+' text'
				,secondaryText: i+'secondary text'
				,imagePath: '/assets/image.png'
				,item: i
			};
		});
		console.log("The items has",this.items);
	}
}
