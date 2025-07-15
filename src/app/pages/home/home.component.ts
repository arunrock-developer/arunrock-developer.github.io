import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { About, ABOUT_DATA } from 'src/app/model/aboutDetails';
import { Testimonial, TESTIMONIALS_DATA } from 'src/app/model/testimonial';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public currentYear: string = DateTime.now().toFormat('y');
  filteredPortFolioImages:any[]=[]
  aboutText: About[] = ABOUT_DATA;
  testimonialData:Testimonial[] = TESTIMONIALS_DATA;
  darkTheme:boolean=true;
  
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private spinner : NgxSpinnerService
  ) { }


 
 
  ngOnInit(): void {
    this.filteredPortFolioImages = this.portFolioImages;
    this.startTypingEffect();
    this.portFolioImages.sort(() => Math.random() - 0.5);

    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });

  }

  words: string[] = [
    "Angular Developer",
    "Frontend Developer",
    "Figma Designer",
    "Flutter Developer",
  ];





  // aboutText = [
  //   {
  //     "option": "Full Name",
  //     "answer": "AunKumar R"
  //   },
  //   {
  //     "option": "DOB",
  //     "answer": "06 June 2002  "
  //   },
  //   {
  //     "option": "Experience",
  //     "answer": "2.5 years"
  //   },
  //   {
  //     "option": "Address",
  //     "answer": "Tirupur"
  //   },
  //   {
  //     "option": "Freelance",
  //     "answer": "Available"
  //   },
  //   {
  //     "option": "Phone",
  //     "answer": "+91 96988 77357"
  //   },
  //   {
  //     "option": "Email",
  //     "answer": "arunrock1264708@gmail.com"
  //   },
  // ]


  portFolioImages=[
    {
      'imagepath' : '../../../assets/img/portfolio-images/web-portfolio-img.png',
      'type' : 'website',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/web-portfolio-img-2.png',
      'type' : 'website',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/web-portfolio-img-3.png',
      'type' : 'website',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-1.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-2.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-3.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-4.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-5.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-6.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-7.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-8.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/img-9.jpg',
      'type' : 'App',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/figma-1.png',
      'type' : 'Figma',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/figma-2.png',
      'type' : 'Figma',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/figma-3.png',
      'type' : 'Figma',
    },
    {
      'imagepath' : '../../../assets/img/portfolio-images/figma-4.png',
      'type' : 'Figma',
    },
  ]


  currentWord: string = this.words[0];
  wordIndex: number = 0;



  startTypingEffect(): void {
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 6000); // Change every 3 seconds to match animation
  }


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



// filter working images
filterWorkingImages(value: string): any {
  console.log("filter-value-0", value);
  console.log("filter-value", this.portFolioImages);

  switch (value) {
    case 'all':
      this.filteredPortFolioImages = this.portFolioImages;
      break;
    case 'web':
      this.filteredPortFolioImages = this.portFolioImages.filter(image => image.type === 'website');
      break;
    case 'app':
      this.filteredPortFolioImages = this.portFolioImages.filter(image => image.type === 'App');
      break;
    case 'figma':
      this.filteredPortFolioImages = this.portFolioImages.filter(image => image.type === 'Figma');
      break;
  }
}




slides = [
  { img: "assets/img/portfolio-images/img-6.jpg" },
  { img: "assets/img/portfolio-images/img-7.jpg" },
  { img: "assets/img/portfolio-images/img-8.jpg" },
  
];


slideConfig = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplayDelay: 1000,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  infinite: true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};





@ViewChild('slickModal') slickModal!: SlickCarouselComponent;
prev() {
  this.slickModal.slickPrev();
}

next() {
  this.slickModal.slickNext();
}


onThemeChanged(isDark: boolean) {
  console.log('Dark Theme Enabled:', isDark);
  // Apply dark theme logic here
  this.darkTheme = isDark
}



}
