import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FontSizeComponent } from './font-size/font-size.component';
import { QualityComponent } from './quality/quality.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { FontSize } from './font-size/font-size.enum';
import { Fidelity } from './quality/fidelity.enum';

@Component({
  selector: 'px-footer',
  templateUrl: './px-footer.component.html',
  styleUrls: ['./px-footer.component.scss']
})
export class PxFooterComponent {
  @Input() light = false;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() fontSize: FontSize = FontSize.Normal;
  @Input() backgroundColor?: string;

  @Output() onThemeChange = new EventEmitter<boolean>();
  @Output() onFontSizeChange = new EventEmitter<FontSize>();

  public get classes(): string[] {
    const mode = this.light ? 'footer--light' : 'footer--dark';

    return ['footer', mode];
  }

  changeFontSize(s: FontSize) { 
    this.fontSize = s;
    this.onFontSizeChange.emit(this.fontSize);
  }

  toggleTheme() { 
    this.light = !this.light;
    this.onThemeChange.emit(this.light);
  }
}
