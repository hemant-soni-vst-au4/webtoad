import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import {NavController} from '@ionic/angular'
import ReactOnBoardingPage from 'src/reactapp/pages/onBoarding/OnBoarding'
import {IonContent, IonPage} from '@ionic/react'
const containerElementName = 'rwOnBoarding'

@Component({
  selector: 'app-on-boarding',
  // template: `<ion-content><div #${containerElementName}></div></ion-content>`,
  template: `<div #${containerElementName}></div>`,
  encapsulation: ViewEncapsulation.None,
})
export class OnBoardingPage implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef

  constructor(private navController: NavController) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.render()
  }

  ngAfterViewInit() {
    this.render()
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement)
  }

  private render() {
    if (this.containerRef) {
      ReactDOM.render(
        <React.StrictMode>
          <IonPage>
            <IonContent>
              <React.Suspense fallback={null}>
                <ReactOnBoardingPage />
              </React.Suspense>
            </IonContent>
          </IonPage>
        </React.StrictMode>,
        this.containerRef.nativeElement,
      )
    }
  }
}
