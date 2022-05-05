import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit, OnDestroy {
  @Input() label: string = 'Checkbox';
  @Input() default: boolean = false;
  @Output() checkedState: EventEmitter<boolean> = new EventEmitter<boolean>();

  private checkbox!: HTMLElement | null;
  private checked!: BehaviorSubject<boolean>;

  ngOnInit(): void {
    this.checkbox = document.getElementById("checkbox");
    this.checked = new BehaviorSubject<boolean>(this.default);

    this.checked.subscribe((isChecked) => {
      this.setCheckedState(isChecked);
    });
  }

  ngOnDestroy(): void {
    this.checked.unsubscribe();
  }

  emitCheckedState() {
    this.checkedState.emit(this.checked.value);
  }

  setCheckedState(state: boolean): void {
    if (state) {
      this.checkbox?.setAttribute("checked", "checked");
    } else {
      this.checkbox?.removeAttribute("checked");
    }
    this.emitCheckedState();
  }

  onClick(): void {
    this.checked.next(!this.checked.value);
  }

}
