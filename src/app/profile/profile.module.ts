import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [ProfileComponent, AccountsComponent],
  exports: [ProfileComponent, AccountsComponent]
})
export class ProfileModule {}
