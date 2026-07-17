import { ChangeDetectionStrategy, Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-experience-pdf',
  imports: [FontAwesomeModule, NgxExtendedPdfViewerModule],
  providers: [NgxExtendedPdfViewerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-pdf.html',
  styleUrl: './experience-pdf.scss',
})
export class ExperiencePdf {
  source = "https://raw.githubusercontent.com/daibeemachine/Resume/162ff3b7ae7f4c68216b55fcfe6d2404fe7c1f5a/main.pdf";
  zoomValue = 1;

  public zoom(value: number) {
    this.zoomValue = (this.zoomValue + value);
  }






  // Source - https://stackoverflow.com/a/58363499
// Posted by Rahmat Ali
// Retrieved 2026-07-16, License - CC BY-SA 4.0

  // called after pdf page is rendered

}
