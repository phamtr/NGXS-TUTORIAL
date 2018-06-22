import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
// Other imports removed for brevity

import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
