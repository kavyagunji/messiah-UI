import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  countryCode: string = '+91';
  phone = '';
  phonePattern = '^[6-9]\\d{9}$'; // default India
  Message: string = ""
  email!: string
  constructor(private http: HttpClient) { }

  currentYear: number = new Date().getFullYear();

  sendPrayer(form: any) {

    console.log("FORM INVALID:", form.invalid);
    console.log("FORM VALUE:", form.value);

    if (form.invalid) {
      alert('Please fill all required fields');
      return;
    }
    this.Message = 'Message sending please wait...'
    this.http.post('https://messiah-backend-1.onrender.com/send-email', form.value)
      .subscribe({
        next: (res) => {
          console.log("SUCCESS:", res);
          this.Message = "Message sent successfully!..."
          form.resetForm({
            countryCode: '+91'
          });
          setTimeout(() => {
            this.Message = ""
          }, 1500);
        },
        error: (err) => {
          console.error("ERROR:", err);
          alert('Failed to send');
        }
      });
  }

  updatePattern() {
    switch (this.countryCode) {
      case '+91':
        this.phonePattern = '^[6-9]\\d{9}$';
        break;

      case '+1':
        this.phonePattern = '^\\d{10}$';
        break;

      case '+44':
        this.phonePattern = '^\\d{10,11}$';
        break;

      case '+61':
        this.phonePattern = '^\\d{9}$';
        break;

      default:
        this.phonePattern = '^\\d{6,14}$';
    }

    // clear old value when switching country
    this.phone = '';
  }
}
