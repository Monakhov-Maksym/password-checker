import { Component } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent {
  indicatorColor = {
    length: 'gray',
    letters: 'gray',
    numbers: 'gray',
    symbols: 'gray'
  }

  onPasswordInput(event: Event): void {
    const password = (event.target as HTMLInputElement).value
    this.updateStrengthIndicator(password)
  }
  updateStrengthIndicator(password: string): void {
    const length = password.length;
    const hasLowerCaseLetters = /[a-z]/.test(password);
    const hasUpperCaseLetters = /[A-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);


    if (length < 8) {
      this.indicatorColor.length = "red";
    } else if (length >= 8 ) {
      this.indicatorColor.length = "green";
    }

    if (hasLowerCaseLetters && hasUpperCaseLetters) {
      this.indicatorColor.letters = "green";
    } else if (hasLowerCaseLetters) {
      this.indicatorColor.letters = "yellow";
    } else if (hasUpperCaseLetters) {
      this.indicatorColor.letters = "yellow";
    } else {
      this.indicatorColor.letters = "red";
    }

    if (hasNumbers) {
      this.indicatorColor.numbers = "green";
    } else {
      this.indicatorColor.numbers = "red";
    }

    if (hasSymbols) {
      this.indicatorColor.symbols = "green";
    } else {
      this.indicatorColor.symbols = "red";
    }


    this.checkPasswordStrength();
  }
  checkPasswordStrength(): void {
    const colorCount = {
      green: 0,
      yellow: 0,
      red: 0,
      gray: 0
    };

    Object.values(this.indicatorColor).forEach(color => {
      // @ts-ignore
      colorCount[color]++;
    });
    console.log(colorCount);
    // Убедимся, что нет ни одного красного индикатора и хотя бы один зеленый и один желтый
    if (colorCount.green === 4) {
      console.log('strong'); // Все критерии хорошие
    } else if (colorCount.green >= 2 && colorCount.red <= 1) {
      console.log('medium'); // Минимум два зеленых и не более одного красного
    } else if (colorCount.red > 0 || colorCount.gray > 0) {
      console.log('easy'); // Хотя бы один критерий красный или серый
    } else {
      // Этот случай отлавливает все остальные возможные комбинации
      console.log('undefined strength'); // Неопределенная сила, возможно, нужна дополнительная логика
    }
  }
}
