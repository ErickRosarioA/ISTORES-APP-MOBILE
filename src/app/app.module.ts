import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import{ServiceImageService} from '../app/services/service-image.service';
import{File}from'@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ModalViewPageModule } from './page/modal-view/modal-view.module';
import {Network} from '@ionic-native/network/ngx';
import {Downloader, DownloadRequest,NotificationVisibility,DestinationDirectory,DownloadHttpHeader} from '@ionic-native/downloader/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
  ModalViewPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceImageService,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    AndroidPermissions,
    FileTransfer,
    Downloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
