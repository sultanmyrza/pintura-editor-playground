import { Component, ViewChild } from '@angular/core';
import { ColorMatrix, getEditorDefaults } from '@pqina/pintura';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('pinturaEditor') pintura?: any;

  readonly pinturaEditorOptions: any = {
    ...getEditorDefaults({
      enableUtils: false,
      enableZoomControls: false,
      cropEnableRotationInput: false,
      cropEnableZoomInput: false,
      cropEnableButtonFlipHorizontal: false,
      cropEnableButtonRotateLeft: false,
      cropEnableImageSelection: false,
      enableToolbar: false,
    }),
  };

  private toggleBlackAndWhiteFilter = true;

  applyBlackAndWhiteFilter() {
    const monoFilter: ColorMatrix = [
      0.212, 0.715, 0.114, 0, 0, 0.212, 0.715, 0.114, 0, 0, 0.212, 0.715, 0.114,
      0, 0, 0, 0, 0, 1, 0,
    ];

    const filter = this.toggleBlackAndWhiteFilter ? monoFilter : undefined;

    // this.pintura.editor.editImage({ imageColorMatrix: { filter } }); // not working!
    this.pintura.editor.processImage({ imageColorMatrix: { filter } });

    this.toggleBlackAndWhiteFilter = !this.toggleBlackAndWhiteFilter;
  }

  handleEditorProcess(imageWriterResult: any): void {
    console.log(imageWriterResult.imageState);
  }
}
