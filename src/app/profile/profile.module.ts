import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileComponent, AccountsComponent],
  exports: [ProfileComponent, AccountsComponent],
})
export class ProfileModule {}
