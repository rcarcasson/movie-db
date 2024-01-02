import { Component, OnInit, inject } from '@angular/core';
import { FooterProvider } from 'src/app/shared/providers/footer.provider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private footerProvider = inject(FooterProvider);

  ngOnInit(): void {
    this.footerProvider.hideFooter();    
  }

}
