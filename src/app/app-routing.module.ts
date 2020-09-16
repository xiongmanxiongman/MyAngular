import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';

export const routesAngular: Routes = [
  /*******************************angular*******************************/
  /*显示数据*/
  {
    path: 'guide/displaying-data',
    loadChildren: () => import('./angular/guide/displaying-data/displaying-data.module').then(m => m.DisplayingDataModule)
  },
  /*模板语法*/
  {
    path: 'guide/template-syntax',
    loadChildren: () => import('./angular/guide/template-syntax/template-syntax.module').then(m => m.TemplateSyntaxModule)
  },
  /*用户输入*/
  {
    path: 'guide/user-input',
    loadChildren: () => import('./angular/guide/user-input/user-input.module').then(m => m.UserInputModule)
  },
  /*属性型指令*/
  {
    path: 'guide/attribute-directives',
    loadChildren: () => import('./angular/guide/attribute-directives/attribute-directives.module').then(m => m.AttributeDirectivesModule)
  },
  /*结构型指令*/
  {
    path: 'guide/structural-directives',
    loadChildren: () => import('./angular/guide/structural-directives/structural-directives.module').then(m => m.StructuralDirectivesModule)
  },
  /*管道*/
  {path: 'guide/pipes', loadChildren: () => import('./angular/guide/pipes/pipes.module').then(m => m.PipesModule)},
  /*生命周期*/
  {
    path: 'guide/lifecycle-hooks',
    loadChildren: () => import('./angular/guide/lifecycle-hooks/lifecycle-hooks.module').then(m => m.LifecycleHooksModule)
  },
  /*组件交互*/
  {
    path: 'guide/component-interaction',
    loadChildren: () => import('./angular/guide/component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  },
  /*组件样式*/
  {
    path: 'guide/component-styles',
    loadChildren: () => import('./angular/guide/component-styles/component-styles.module').then(m => m.ComponentStylesModule)
  },
  /*动态组件*/
  {
    path: 'guide/dynamic-component-loader',
    loadChildren: () => import('./angular/guide/dynamic-component-loader/dynamic-component-loader.module').then(m => m.DynamicComponentLoaderModule)
  },
  /*Angular元素*/
  {
    path: 'guide/elements',
    loadChildren: () => import('./angular/guide/elements/elements.module').then(m => m.ElementsModule)
  },
  /*响应式表单*/
  {
    path: 'guide/reactive-forms',
    loadChildren: () => import('./angular/guide/reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsModule)
  },
  /*表单验证*/
  {
    path: 'guide/form-validation',
    loadChildren: () => import('./angular/guide/form-validation/form-validation.module').then(m => m.FormValidationModule)
  },
  /*动态表单*/
  {
    path: 'guide/dynamic-form',
    loadChildren: () => import('./angular/guide/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
];
export const routesAntDesign: Routes = [
  /*******************************ant.design*******************************/
  {
    path: 'antdesign/components/button',
    loadChildren: () => import('./antdesign/components/button/button.module').then(m => m.ButtonModule)
  },
  {
    path: 'antdesign/components/icon',
    loadChildren: () => import('./antdesign/components/icon/icon.module').then(m => m.IconModule)
  },
  {
    path: 'antdesign/components/typography',
    loadChildren: () => import('./antdesign/components/typography/typography.module').then(m => m.TypographyModule)
  },
  {
    path: 'antdesign/components/grid',
    loadChildren: () => import('./antdesign/components/grid/grid.module').then(m => m.GridModule)
  },
  {
    path: 'antdesign/components/layout',
    loadChildren: () => import('./antdesign/components/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'antdesign/components/affix',
    loadChildren: () => import('./antdesign/components/affix/affix.module').then(m => m.AffixModule)
  },
  {
    path: 'antdesign/components/breadcrumb',
    loadChildren: () => import('./antdesign/components/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule)
  },
  {
    path: 'antdesign/components/dropdown',
    loadChildren: () => import('./antdesign/components/dropdown/dropdown.module').then(m => m.DropdownModule)
  },
  {
    path: 'antdesign/components/menu',
    loadChildren: () => import('./antdesign/components/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'antdesign/components/page-header',
    loadChildren: () => import('./antdesign/components/page-header/page-header.module').then(m => m.PageHeaderModule)
  },
  {
    path: 'antdesign/components/pagination',
    loadChildren: () => import('./antdesign/components/pagination/pagination.module').then(m => m.PaginationModule)
  },
  {
    path: 'antdesign/components/steps',
    loadChildren: () => import('./antdesign/components/steps/steps.module').then(m => m.StepsModule)
  },
  {
    path: 'antdesign/components/auto-complete',
    loadChildren: () => import('./antdesign/components/auto-complete/auto-complete.module').then(m => m.AutoCompleteModule)
  },
  {
    path: 'antdesign/components/cascader',
    loadChildren: () => import('./antdesign/components/cascader/cascader.module').then(m => m.CascaderModule)
  },
  {
    path: 'antdesign/components/checkbox',
    loadChildren: () => import('./antdesign/components/checkbox/checkbox.module').then(m => m.CheckboxModule)
  },
  {
    path: 'antdesign/components/date-picker',
    loadChildren: () => import('./antdesign/components/date-picker/date-picker.module').then(m => m.DatePickerModule)
  },
  {
    path: 'antdesign/components/form',
    loadChildren: () => import('./antdesign/components/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'antdesign/components/input',
    loadChildren: () => import('./antdesign/components/input/input.module').then(m => m.InputModule)
  },
  {
    path: 'antdesign/components/input-number',
    loadChildren: () => import('./antdesign/components/input-number/input-number.module').then(m => m.InputNumberModule)
  },
  {
    path: 'antdesign/components/mention',
    loadChildren: () => import('./antdesign/components/mention/mention.module').then(m => m.MentionModule)
  },
  {
    path: 'antdesign/components/radio',
    loadChildren: () => import('./antdesign/components/radio/radio.module').then(m => m.RadioModule)
  },
  {
    path: 'antdesign/components/rate',
    loadChildren: () => import('./antdesign/components/rate/rate.module').then(m => m.RateModule)
  },
  {
    path: 'antdesign/components/select',
    loadChildren: () => import('./antdesign/components/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'antdesign/components/slider',
    loadChildren: () => import('./antdesign/components/slider/slider.module').then(m => m.SliderModule)
  },
  {
    path: 'antdesign/components/switch',
    loadChildren: () => import('./antdesign/components/switch/switch.module').then(m => m.SwitchModule)
  },
  {
    path: 'antdesign/components/time-picker',
    loadChildren: () => import('./antdesign/components/time-picker/time-picker.module').then(m => m.TimePickerModule)
  },
  {
    path: 'antdesign/components/transfer',
    loadChildren: () => import('./antdesign/components/transfer/transfer.module').then(m => m.TransferModule)
  },
  {
    path: 'antdesign/components/tree-select',
    loadChildren: () => import('./antdesign/components/tree-select/tree-select.module').then(m => m.TreeSelectModule)
  },
  {
    path: 'antdesign/components/upload',
    loadChildren: () => import('./antdesign/components/upload/upload.module').then(m => m.UploadModule)
  },
  {
    path: 'antdesign/components/avatar',
    loadChildren: () => import('./antdesign/components/avatar/avatar.module').then(m => m.AvatarModule)
  },
  {
    path: 'antdesign/components/badge',
    loadChildren: () => import('./antdesign/components/badge/badge.module').then(m => m.BadgeModule)
  },
  {
    path: 'antdesign/components/calendar',
    loadChildren: () => import('./antdesign/components/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'antdesign/components/card',
    loadChildren: () => import('./antdesign/components/card/card.module').then(m => m.CardModule)
  },
  {
    path: 'antdesign/components/carousel',
    loadChildren: () => import('./antdesign/components/carousel/carousel.module').then(m => m.CarouselModule)
  },
  {
    path: 'antdesign/components/collapse',
    loadChildren: () => import('./antdesign/components/collapse/collapse.module').then(m => m.CollapseModule)
  },
  {
    path: 'antdesign/components/descriptions',
    loadChildren: () => import('./antdesign/components/descriptions/descriptions.module').then(m => m.DescriptionsModule)
  },
  {
    path: 'antdesign/components/empty',
    loadChildren: () => import('./antdesign/components/empty/empty.module').then(m => m.EmptyModule)
  },
  {
    path: 'antdesign/components/list',
    loadChildren: () => import('./antdesign/components/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'antdesign/components/popover',
    loadChildren: () => import('./antdesign/components/popover/popover.module').then(m => m.PopoverModule)
  },
  {
    path: 'antdesign/components/table',
    loadChildren: () => import('./antdesign/components/table/table.module').then(m => m.TableModule)
  },
  {
    path: 'antdesign/components/tabs',
    loadChildren: () => import('./antdesign/components/tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: 'antdesign/components/tag',
    loadChildren: () => import('./antdesign/components/tag/tag.module').then(m => m.TagModule)
  },
  {
    path: 'antdesign/components/timeline',
    loadChildren: () => import('./antdesign/components/timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'antdesign/components/tooltip',
    loadChildren: () => import('./antdesign/components/tooltip/tooltip.module').then(m => m.TooltipModule)
  },
  {
    path: 'antdesign/components/tree',
    loadChildren: () => import('./antdesign/components/tree/tree.module').then(m => m.TreeModule)
  },
  {
    path: 'antdesign/components/alert',
    loadChildren: () => import('./antdesign/components/alert/alert.module').then(m => m.AlertModule)
  },
  {
    path: 'antdesign/components/drawer',
    loadChildren: () => import('./antdesign/components/drawer/drawer.module').then(m => m.DrawerModule)
  },
  {
    path: 'antdesign/components/message',
    loadChildren: () => import('./antdesign/components/message/message.module').then(m => m.MessageModule)
  },
  {
    path: 'antdesign/components/modal',
    loadChildren: () => import('./antdesign/components/modal/modal.module').then(m => m.ModalModule)
  },
  {
    path: 'antdesign/components/notification',
    loadChildren: () => import('./antdesign/components/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'antdesign/components/popconfirm',
    loadChildren: () => import('./antdesign/components/popconfirm/popconfirm.module').then(m => m.PopconfirmModule)
  },
  {
    path: 'antdesign/components/progress',
    loadChildren: () => import('./antdesign/components/progress/progress.module').then(m => m.ProgressModule)
  },
  {
    path: 'antdesign/components/result',
    loadChildren: () => import('./antdesign/components/result/result.module').then(m => m.ResultModule)
  },
  {
    path: 'antdesign/components/skeleton',
    loadChildren: () => import('./antdesign/components/skeleton/skeleton.module').then(m => m.SkeletonModule)
  },
  {
    path: 'antdesign/components/spin',
    loadChildren: () => import('./antdesign/components/spin/spin.module').then(m => m.SpinModule)
  },
  {
    path: 'antdesign/components/anchor',
    loadChildren: () => import('./antdesign/components/anchor/anchor.module').then(m => m.AnchorModule)
  },
  {
    path: 'antdesign/components/back-top',
    loadChildren: () => import('./antdesign/components/back-top/back-top.module').then(m => m.BackTopModule)
  },
  {
    path: 'antdesign/components/divider',
    loadChildren: () => import('./antdesign/components/divider/divider.module').then(m => m.DividerModule)
  },
];
const routes: Routes = [
  /*
  {path: 'first-component', component: FirstComponent},
  */
  {path: '', redirectTo: '/guide/displaying-data', pathMatch: 'full'},
  ...routesAngular,
  ...routesAntDesign,
  {path: '**', component: FirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
