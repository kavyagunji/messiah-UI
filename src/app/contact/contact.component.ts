import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private http: HttpClient) {}
sendMessage(form: NgForm) {
  if (form.invalid) return;

  this.http.post('https://messiah-backend-19.onrender.com/send-email', form.value)
    .subscribe({
      next: () => {
        alert('Message sent successfully!');
          form.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.error || 'Failed to send');
      }
    });
}
}
