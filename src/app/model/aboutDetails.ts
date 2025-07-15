export class About {
    option: string;
    answer: string;
  
    constructor(option: string, answer: string) {
      this.option = option;
      this.answer = answer;
    }
  }
  
  export const ABOUT_DATA: About[] = [
    new About("Full Name", "AunKumar R"),
    new About("DOB", "06 June 2002"),
    new About("Experience", "2.5 years"),
    new About("Address", "Tirupur"),
    new About("Freelance", "Available"),
    new About("Phone", "+91 96988 77357"),
    new About("Email", "arunrock1264708@gmail.com"),
  ];
  