import { Component, OnInit, Input, Output, SimpleChanges,OnChanges,EventEmitter } from '@angular/core';

interface SarchItem{
	primaryText:string;
	secondaryText:string;
	imagePath:string;
	item:any
};

export interface SearchItem
{
	primaryText:string;
	secondaryText:string;
	imagePath:string;
	item:any;
}

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent implements OnInit,OnChanges
{
	@Input() items:SearchItem[] = [];
	@Input() defaultImagePath:string = null;
	@Input() defaultText:string = null;
	@Input() overColor:string = '#c3dbf7';
	@Output() searchChange = new EventEmitter<string>();
	@Output() itemSelected = new EventEmitter<any>();

	imagePath:string = null;
	primaryText:string = null;
	is_open:boolean = false;
	selectetItem:SearchItem = null;

	constructor() 
	{ 
		
	}

	ngOnInit() 
	{

	}

	changeSearch(value:string)
	{
		this.searchChange.emit(value);
	}

	onItemSelected(item:any)
	{
		if( item == null )
		{
			this.imagePath = this.defaultImagePath;
			this.primaryText = this.defaultText;
			this.itemSelected.emit( null );
			this.is_open = false;
			return;
		}
		
		this.imagePath		= item.imagePath == null ? this.defaultImagePath : item.imagePath;
		this.primaryText	= item.primaryText;
		this.itemSelected.emit(item.item);
		//this.selectedItem = item;
		console.log( item.item );
		this.is_open = false;
	}
	onClick()
	{
		this.is_open = !this.is_open;
	}

	ngOnChanges(changes:SimpleChanges)
	{
			console.log("Changes",changes);
		if( changes['defaultText'] && this.primaryText == null )
			this.primaryText = this.defaultText;
	}
}
