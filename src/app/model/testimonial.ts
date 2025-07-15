export class Testimonial {
    name: string;
    description: string;
    rating: number;

    constructor(name: string, description: string, rating: number) {
        this.name = name;
        this.description = description;
        this.rating = rating;
    }
}

export const TESTIMONIALS_DATA: Testimonial[] = [
    new Testimonial("Website Development", "Great experience in building websites with a professional touch.", 5),
    new Testimonial("Web App Development", "Developed a smooth and responsive web application.", 4.5),
    new Testimonial("Flutter UI Design", "Designed a modern and user-friendly Flutter UI.", 4.8),
    new Testimonial("API Integration", "Seamless API integration for various applications.", 4.7),
    new Testimonial("Figma UI Design", "Created stunning UI designs using Figma.", 4.6),
    new Testimonial("REST APIs", "Implemented secure and efficient REST API solutions.", 5),
];
