import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
isLoading: boolean = false;

constructor(private http: HttpClient) {}

currentYear: number = new Date().getFullYear();

  sendPrayer(form: any) {

  if (form.invalid) {
    alert('Please fill all required fields');
    return;
  }

  this.http.post('https://messiah-backend-2.onrender.com/send-email', form.value)
    .pipe(
      timeout(10000),
      catchError((err) => {
        console.error("ERROR:", err);

        if (err.name === 'TimeoutError') {
          alert('Server is slow. Please try again.');
        } else {
          alert('Failed to send request');
        }

        return throwError(() => err);
      })
    )
    .subscribe({
      next: () => {
        alert('Message sent successfully!');
        form.reset();
      }
    });
}
}
