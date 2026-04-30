import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email!: string
  Message: string = ""
  constructor(private http: HttpClient) { }
  sendMessage(form: NgForm) {
    if (form.invalid) return;
    this.Message = 'Message sending please wait...'
    this.http.post('https://messiah-backend.onrender.com/send-email', form.value)
      .subscribe({
        next: () => {
          this.Message = "Message sent successfully!..."
          form.resetForm();
          setTimeout(() => {
            this.Message = ""
          }, 1500);
        },
        error: (err) => {
          console.error(err);
          alert(err.error?.error || 'Failed to send');
        }
      });
  }
}
