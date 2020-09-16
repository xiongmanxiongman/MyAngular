import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSyntaxRoutingModule } from './template-syntax-routing.module';
import { TemplateSyntaxComponent } from './template-syntax.component';


import { FormsModule } from '@angular/forms';
import { BigHeroDetailComponent, HeroDetailComponent } from './hero-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';
import { HeroFormComponent } from './hero-form.component';
import { heroSwitchComponents } from './hero-switch.components';
import { SizerComponent } from './sizer.component';
import { SvgComponent } from './svg.component';


@NgModule({
  imports: [
    CommonModule,
    TemplateSyntaxRoutingModule,
    FormsModule
  ],
  declarations: [
    TemplateSyntaxComponent,
    BigHeroDetailComponent,
    HeroDetailComponent,
    HeroFormComponent,
    heroSwitchComponents,
    ClickDirective,
    ClickDirective2,
    SizerComponent,
    SvgComponent
  ]
})
export class TemplateSyntaxModule { }
