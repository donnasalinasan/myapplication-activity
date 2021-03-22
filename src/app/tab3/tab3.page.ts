import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName="";
  contNumber="";
  contacts=[];
  constructor(public alertController: AlertController)  {}

  saveC() {
    let contact = {
      name: this.contName,
      number: this.contNumber

    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();

  }
  clearField() {
    this.contName = "";
    this.contNumber = "";
  }
  

  async deleteContact(i) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete!',
      message: 'Delete this contact?',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm delete')
            this.contacts.splice(i,1);
          }
        }
      ]
    });

    await alert.present();
  }


    

}