interface TeacherInterface {
  workFromHome(): string;

  getCoffeeBreak(): string;

  workTeacherTasks(): string;
}

interface DirectorInterface {
  workFromHome(): string;

  getCoffeeBreak(): string;

  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

function createEmployee(salary: number | string): Director | Teacher {
  let salaryInt: number =
    typeof salary == "string" ? parseInt(salary, 2) : salary;
  if (salaryInt < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector<TypeData>(employee: TypeData): boolean {
  return employee instanceof Director;
}

function executeWork<TypeData>(employee: TypeData): string {
  if (isDirector(employee)) {
    return (employee as unknown as Director).workDirectorTasks()
  }
  return (employee as unknown as Teacher).workTeacherTasks()
}