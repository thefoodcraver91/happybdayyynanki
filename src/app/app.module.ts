 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AudioComponent } from './audio/audio.component';
import { MessageComponent } from './message/message.component';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
{path:'',redirectTo:'users',pathMatch:'full'},  
{path:'message',component:MessageComponent},
{path:'video',component:VideoComponent},
{path:'audio',component:AudioComponent},
{path:'**',component:MessageComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AudioComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
