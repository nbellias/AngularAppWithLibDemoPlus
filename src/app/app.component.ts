import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannersComponent} from '../../designsystem/banners/src/lib/banners.component';
import { SpecialBannerComponent } from '../../designsystem/banners/src/lib/special-banner/special-banner.component';
import {ButtonsComponent} from '../../designsystem/buttons/src/lib/buttons.component';
import {SpecialButtonComponent} from '../../designsystem/buttons/src/lib/special-button/special-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannersComponent, SpecialBannerComponent, ButtonsComponent, SpecialButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAppWithLibDemoPlus';
}
