import { uniqueId } from './component-id.decorator';
import { sealed } from './sealed.decorator';

@uniqueId
@sealed
export class SealedDemo {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return 'Hello, ' + this.greeting;
  }
}
