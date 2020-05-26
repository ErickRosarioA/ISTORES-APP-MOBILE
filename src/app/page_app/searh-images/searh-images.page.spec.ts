import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearhImagesPage } from './searh-images.page';

describe('SearhImagesPage', () => {
  let component: SearhImagesPage;
  let fixture: ComponentFixture<SearhImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearhImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
