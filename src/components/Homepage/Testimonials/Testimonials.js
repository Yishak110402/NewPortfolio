import Testimonial from "./Testimonial";
import "./Testimonials.css"
export default function Testimonials() {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-container">
                <Testimonial />
            </div>
        </div>
    );
}