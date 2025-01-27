interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
  [key: string]: unknown; // I use unknown for a better typechecking
}

interface Director extends Teacher {
  numberOfReports: number;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
