import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';3

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() heading: string;
  @Input() color: string;
  @Output() event = new EventEmitter();
  public defaultColors: string[] = [
    '#ffffff',
    '#ffff00',
    '#ff0000',
    '#0000ff',
    '#00ff00',
    '#7f00ff',  
  ];
  public show = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleColors() {
    this.show = !this.show;
  }

 /**
 * Change color from default colors
 * @param {string} color
 */
public changeColor(color: string) {
  this.color = color;
  this.event.emit(this.color); // Return color
  this.show = false;
}


/**
 * Change color from input
 * @param {string} color
 */
public changeColorManual(color: string) {
  const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

  if (isValid) {
    this.color = color;
    this.event.emit(this.color); // Return color
  }
}

}
