const reviewDetails = [{
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    name: "Vaibhav Varma",
    job: "Web Developer",
    review: "Facilis culpa obcaecati eaque qui dolorem eos nobis ea placeat, saepe voluptate sit suscipit aspernatur adipisci sint aut laboriosam. Quae, officiis ut."
},
{
    img: "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d",
    name: "Sai Kiran",
    job: "Intern",
    review: "Quos recusandae dolore ipsam vero corporis labore nisi excepturi. Cupiditate explicabo veniam numquam accusamus, hic fuga enim possimus inventore excepturi maxime? Doloremque?",
},
{
    img: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
    name: "Sandeep",
    job: "Bussiness Man",
    review: "Iusto magni ipsa, repellat rerum non suscipit tempore impedit dicta eveniet cupiditate, eum harum laboriosam! Quisquam facilis optio voluptatibus unde dolorem. Voluptate!",
},
{
    img: "https://saint313.com/wp-content/uploads/2018/04/pexels-photo-428341-1024x683.jpeg",
    name: "Bijili Karthik",
    job: "Lawyer",
    review: "Excepturi nihil error architecto quibusdam repellat magni aliquam maiores consequatur iusto laborum, voluptate, necessitatibus laudantium aperiam. Aspernatur id libero tenetur exercitationem quis?",
},
{
    img: "https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg",
    name: "Vangala Sumanth",
    job: "Senior Web Developer",
    review: "Sequi vero officiis culpa illo nulla deleniti incidunt veritatis harum saepe tempora expedita delectus, magnam quas eius at cumque consectetur inventore quibusdam.",
},
{
    img: "https://static6.businessinsider.com/image/56a8f50ddd089553198b4731-1200/ditch-the-smirk-when-it-comes-to-profile-pictures-only-2-of-the-top-ranked-profiles-on-okcupid-featured-people-hiding-their-smiles-instead-try-smiling-with-your-teeth.jpg",
    name: "Kommu Ashwanth",
    job: "Cloud Engineer",
    review: "Necessitatibus nam nesciunt tempora sequi. Quo eos necessitatibus distinctio vel, quasi cupiditate rem molestiae possimus et suscipit quos. Atque libero dolorum culpa!",
}]

const image = document.getElementById("img");
const fullName = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const buttonSurprise = document.getElementById("surprise");

let currentItem = 0;

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * reviewDetails.length);
    return randomNum; 
}

function updateReview() {
    image.setAttribute("src", reviewDetails[currentItem].img);
    fullName.textContent = reviewDetails[currentItem].name;
    job.textContent = reviewDetails[currentItem].job;
    review.textContent = reviewDetails[currentItem].review;
}

nextButton.addEventListener("click", () => {
    currentItem++;
    if(currentItem === 6) {
        currentItem = 0;
    }
    updateReview();
});

prevButton.addEventListener("click", () => {
    currentItem--;
    if(currentItem === -1) {
        currentItem = 5;
    }
    updateReview();
});

buttonSurprise.addEventListener("click", () => {
    currentItem = getRandomNumber();
    updateReview();
} );














