import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'advert-ui';
}

/* 
main page component powinien:
    - zawierac component z wszystkimi ogloszeniami - advertisements
      * wyswietlanie wszystkiego gdzies po srodku z form filtrem obok
    - nav bar z miejscem do szybkiego logowania i z przyciskiem do przekierowania do register
      * logowanie wrzuca tez nazwe uzytkownika do localStorage
    - footer z linkiem do kodu źródłowego
component z user account:
    - wyswietlasz ogloszenia danego uzytkownika rowniez z mozliwością filtrowania  


1. ogarniecie logowania z autoryzacja
2. wyswietlanie wszystkich ogloszen na main page i ogloszen danego uzytkownika po zalogowaniu
*/
