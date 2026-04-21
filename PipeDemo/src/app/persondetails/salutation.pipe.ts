import { Pipe, PipeTransform } from '@angular/core';

export interface PersonDetails {
  name: string;
  age: number;
  gender: 'male' | 'female';
  maritalStatus: 'married' | 'single';
}

@Pipe({
  name: 'salutation',
  standalone: true,
})
export class SalutationPipe implements PipeTransform {
  transform(person: PersonDetails | null | undefined): string {
    if (!person) {
      return '';
    }

    const gender = person.gender?.toLowerCase();
    const maritalStatus = person.maritalStatus?.toLowerCase();

    if (gender === 'male') {
      return `Mr. ${person.name}`;
    }

    if (gender === 'female' && maritalStatus === 'married') {
      return `Mrs. ${person.name}`;
    }

    if (gender === 'female') {
      return `Ms. ${person.name}`;
    }

    return person.name;
  }
}