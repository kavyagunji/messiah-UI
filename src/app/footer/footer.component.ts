import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


constructor(private http: HttpClient) {}

currentYear: number = new Date().getFullYear();

   sendPrayer(form: any) {
    if (form.invalid) {
    alert('Please fill all required fields');
    return; // 🔥 stops execution
  }

    this.http.post('https://messiah-backend.onrender.com/send-email', form.value)
      .subscribe({
        next: () => {
          alert('Message sent successfully!');
          form.reset();
        },
        error: (err) => {
          console.error("SERVER ERROR:", err);
          alert(err.error?.error || 'Failed to send');
        }
      });
  }
}
