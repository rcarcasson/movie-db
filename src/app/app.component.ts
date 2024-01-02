import { Component, OnInit, inject } from '@angular/core';
import { FooterProvider } from './shared/providers/footer.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Películas DB';
  private footerProvider = inject(FooterProvider);
  public showFooter = true;

  public ngOnInit(): void {
    this.footerProvider.getShowingIntercept().subscribe((show: boolean) => this.showFooter = show)
  }
}
