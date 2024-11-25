import { differenceInYears } from 'date-fns';

export function calculateAge(birthdate: Date) {
  return differenceInYears(new Date(), birthdate);
}
