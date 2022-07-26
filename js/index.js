"use strict";

const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");
const slides = document.querySelectorAll(".slide");
const avatar = document.querySelector(".avatar");
const quote = document.querySelector(".quote");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
// const avatars = document.querySelectorAll(".avatar");
// const contents = document.querySelectorAll(".profile__content");

const testimonials = [
	{
		name: "Tanya Sinclair",
		occupation: "UX Engineer",
		img: "images/image-tanya.jpg",
		quote: `
    “I’ve been interested in coding for a while but never taken the
    jump, until now. I couldn’t recommend this course enough. I’m now
    in the job of my dreams and so excited about the future. ”
    `,
	},
	{
		name: "John Tarkpor",
		occupation: "Junior Front-end Developer",
		img: "images/image-john.jpg",
		quote: `
    “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”
    `,
	},
];
// console.log(testimonials.length);
// console.log(avatar.src);
let currentTestimonial = 0;
// slides.forEach((s) => s.classList.add("hide"));
// slides[currentTestimonial].classList.remove("hide");
// const tl = gsap.timeline();
const tl = gsap.timeline({
  paused: true,
  // reversed: true
});

tl
	.fromTo(".avatar", {
		clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
		autoAlpha: 0,
		x: 50,
	}, {
		autoAlpha: 1,
		x: 0,
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: 'back',
		duration: 2,
	}).from(".animate-profile", {
		autoAlpha: 0,
		y: 30,
		stagger: 0.2,
	}, "-=1.8");

gsap.set(".avatar", {
	x: 0,
	autoAlpha: 1,
	clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

})
gsap.set(".animate-profile", {
	y: 0,
	autoAlpha: 1,
});

const hideSlide = () => {
	gsap.set(".animate-profile", {
		y: 0,
		autoAlpha: 0,
	});
	gsap.set(".animate-profile", {
		y: 0,
		autoAlpha: 0,
	});
}
const goToPrev = () => {
	hideSlide();
	tl.restart();

	currentTestimonial === 0
		? (currentTestimonial = testimonials.length)
		: currentTestimonial;
	currentTestimonial--;
	avatar.src = testimonials[currentTestimonial].img;
	profileName.textContent = testimonials[currentTestimonial].name;
	profileOccupation.textContent = testimonials[currentTestimonial].occupation;
	quote.textContent = testimonials[currentTestimonial].quote;


};
const goToNext = () => {
	hideSlide();
	tl.restart();
	// tl.play();

	currentTestimonial === testimonials.length - 1
		? (currentTestimonial = -1)
		: currentTestimonial;
	currentTestimonial++;
	avatar.src = testimonials[currentTestimonial].img;
	profileName.textContent = testimonials[currentTestimonial].name;
	profileOccupation.textContent = testimonials[currentTestimonial].occupation;
	quote.textContent = testimonials[currentTestimonial].quote;
	

	// tl.from(".avatar", {
	// 	autoAlpha: 0,
	// 	x: -50,
	// }).from(".animate-profile", {
	// 	y: 30,
	// 	stagger: 0.2,
	// 	autoAlpha: 0,
	// });
};


prevBtn.addEventListener("click", goToPrev);
nextBtn.addEventListener("click", goToNext);

document.addEventListener("keydown", (e) => {
	e.key === "ArrowLeft" && goToPrev();

	e.key === "ArrowRight" && goToNext();
});
