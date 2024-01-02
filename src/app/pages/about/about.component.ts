import { Component, OnInit, inject } from '@angular/core';
import { FooterProvider } from 'src/app/shared/providers/footer.provider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private footerProvider = inject(FooterProvider);

  ngOnInit(): void {
    this.footerProvider.showFooter();
  }

}
