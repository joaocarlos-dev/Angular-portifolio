import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' }),
        ),
      ]),
    ]),
  ],
})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private languageService: LanguageService = inject(LanguageService);
  public sending = false;

  secretKey: string = 'xeogpkbl';
  statusMessage: string | null = null;
  statusClass: 'success' | 'error' | null = null;

  emailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(private httpClient: HttpClient) {}

  get isPt() {
    return this.languageService.isPortuguese();
  }

  get labels() {
    return this.isPt
      ? {
          heading:
            'Estou aberto a novas oportunidades e colaborações. Quer criar algo incrível ou deixar um feedback? Me mande uma mensagem pelo formulário abaixo — vamos conversar!',
          name: 'Nome:',
          email: 'Email:',
          message: 'Mensagem:',
          send: this.sending ? 'Enviando...' : 'Enviar',
          success: 'Email enviado com sucesso!',
          error: 'Ocorreu um erro ao enviar o email.',
          validation: 'Por favor, preencha todos os campos corretamente.',
          cooldown: 'Aguarde alguns segundos antes de tentar novamente.',
        }
      : {
          heading:
            'I’m open to new opportunities and collaborations. Want to build something great or give feedback? Just send me a message using the form below — let’s talk!',
          name: 'Name:',
          email: 'Email:',
          message: 'Message:',
          send: this.sending ? 'Sending...' : 'Send',
          success: 'Email successfully sent!',
          error: 'An error occurred while sending the email.',
          validation: 'Please fill out all fields correctly.',
          cooldown: 'Please wait a few seconds before trying again.',
        };
  }

  sendEmail(name: string, email: string, message: string) {
    if (this.emailForm.invalid) {
      this.showStatus(this.labels.validation, 'error');
      return;
    }

    if (this.sending) {
      this.showStatus(this.labels.cooldown, 'error');
      return;
    }

    this.sending = true;

    const url = 'https://formspree.io/f/' + this.secretKey;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    const data = `name=${name}&email=${email}&message=${message}`;
    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.showStatus(this.labels.success, 'success');
        this.emailForm.reset();
      },
      error: () => {
        this.showStatus(this.labels.error, 'error');
      },
    });

    setTimeout(() => {
      this.sending = false;
    }, 5000);
  }

  private showStatus(message: string, status: 'success' | 'error') {
    this.statusMessage = message;
    this.statusClass = status;

    setTimeout(() => {
      this.statusMessage = null;
      this.statusClass = null;
    }, 3000);
  }
}
