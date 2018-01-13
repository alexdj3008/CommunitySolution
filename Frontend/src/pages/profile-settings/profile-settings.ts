import { ToastService } from '../../providers/util/toast.service';
import { AlertService } from '../../providers/util/alert.service';
import { Component, ViewChild  } from '@angular/core';
import { IonicPage, ViewController  } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})

export class ProfileSettingsPage {
  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  user = {
    name: 'Marty Mcfly',
    imageUrl: 'assets/imgs/avatar/marty-avatar.png'
  };
@ViewChild('fileInput') fileInput;


  isReadyToSave: boolean;

  item: any;

  form: FormGroup;


    constructor(
    public alertService: AlertService,
    public toastCtrl: ToastService,
    public viewCtrl: ViewController,
    public camera: Camera) {
    

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }


  logOut() {
    this.alertService.presentAlertWithCallback('Are you sure?',
      'This will log you out of this application.').then((yes) => {
        if (yes) {
          this.toastCtrl.create('Logged out of the application');
        }
      });
  }
}