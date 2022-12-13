import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class NotificationService{
  toasts: any[] = [];

  show(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
