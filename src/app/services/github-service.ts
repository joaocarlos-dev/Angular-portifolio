// services/github-service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Certifique-se que está assim
})
export class GithubReadmeService {
  constructor(private http: HttpClient) {} // Nome correto do serviço

  getReadme(user: string, repo: string): Observable<string> {
    const url = `https://raw.githubusercontent.com/${user}/${repo}/main/README.md`;
    return this.http.get(url, { responseType: 'text' });
  }
}
