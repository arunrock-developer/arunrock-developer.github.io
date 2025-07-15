import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [
    './template.component.scss',
  ]
})


export class TemplateComponent implements OnInit {
  darkTheme :boolean=false

  constructor(
        private route: ActivatedRoute,
        private viewportScroller: ViewportScroller,
        private spinner : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.startTypingEffect();
  }



  theme(isDark: boolean){
    this.darkTheme = isDark
  }

    words: string[] = [
    "Frontend Developer",
    "Flutter Developer",
    "Angular Developer",
    "Figma Designer",

  ];
    currentWord: string = this.words[0];
  wordIndex: number = 0;



  startTypingEffect(): void {
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 6000); // Change every 3 seconds to match animation
  }




  projects = [
  {
    title: 'Full-Featured E-Commerce Platform',
    description: 'Designed and developed a scalable eCommerce platform from scratch where product providers can upload products, manage inventory, and process orders. Customers can browse by category, place orders, and receive real-time updates.',
    techStack: ['Angular', 'Angular Material', 'Bootstrap', 'REST APIs'],
    link: 'https://allz.store/#/'
  },
  {
    title: 'Location-Based Essentials Ordering App',
    description: 'A mobile app built with Flutter that allows users to order daily essentials from shops within a 5km radius. Included shop registration, order tracking, secure payments, and real-time delivery status using GetX.',
    techStack: ['Flutter', 'Dart', 'GetX', 'REST APIs'],
  },
  {
    title: 'Medical Product Ordering System',
    description: 'Built a user-friendly mobile app for ordering medical products from verified sellers. Included prescription upload, product search, and secure order handling.',
    techStack: ['Flutter', 'Dart', 'GetX', 'REST APIs'],
  },
  {
    title: 'Rental Marketplace Application',
    description: 'Developed a rental listing and booking platform allowing vendors to list properties and users to book them with payment and calendar integration.',
    techStack: ['Angular', 'Angular Material', 'Bootstrap', 'REST APIs'],
    link: 'https://ne.rentaldev.varnik.cloud/#/'
  }
];









  personalForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required,Validators.email]),
    message: new UntypedFormControl('', Validators.required),
  });


  personalErrorForm = {
    name: '',
    email: '',
    message: '',
  }


  formValidation() {
    this.personalErrorForm.name = ''
    this.personalErrorForm.email = ''
    this.personalErrorForm.message = ''

    let hasError = false

    if (this.personalForm.get('name')?.invalid) {
      this.personalForm.get('name')?.markAsTouched()
      hasError = true
    }
    if (this.personalForm.get('email')?.invalid) {
      this.personalForm.get('email')?.markAsTouched()
      hasError = true
    }
    if (this.personalForm.get('message')?.invalid) {
      this.personalForm.get('message')?.markAsTouched()
      hasError = true
    }

    if(!hasError){
      console.log("form",this.personalForm.value);
      console.log("Form is valid. Sending email...");
      const formContent = this.personalForm.value;
      this.sendEmail(formContent);
    }else {
      console.log("Form is invalid. Please check the inputs.");
  }

  }


  sendEmail(formContent: any) {
    this.spinner.show();
      emailjs.send('service_tn5cphf', 'template_k69sizp', {
        to_name: 'Arun Kumar',
        from_name: formContent.name,
        from_email: formContent.email,
        message: formContent.message, // Ensure 'message' matches the key in your template
    }, 'McvVrNswgF5atRBbJ')
    .then((response) => {
      this.spinner.hide();
      this.personalForm.reset();
      this.sweetalert()
        console.log('Email sent successfully!', response.status, response.text);
    }, (error) => {
        console.log('Failed to send email.', error);
    });
}

sweetalert(){
  Swal.fire({
    title: 'Email Sent!',
    text: 'Your email has been sent successfully. I will reply soon, sir/madam.',
    icon: 'success',
    showConfirmButton: false,
    showCancelButton: false,
    timer: 5000
  })
}


}
