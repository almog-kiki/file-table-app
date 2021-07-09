import '../polyfills';

 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventEmitterService } from './services/event-emitter.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileContentComponent } from './components/file-content/file-content.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { HeaderTitleComponent } from './components/common/header-title/header-title.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileContentComponent,
    SpinnerComponent,
    HeaderTitleComponent,
    TableDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
