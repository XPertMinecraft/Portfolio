const shiny = document.querySelector(".shiny_block");
const sec1 = document.querySelector(".section1");
const sec2 = document.querySelector(".section2");
let expTop = document.getElementById("exp").offsetTop;
const translations = {
    uk: {
        left_h1: "Шаповал Кирило",
        left_h3: "Фронтенд-розробник",
        left_text_p: "Я розроблю гарний, функціональний <br> сайт для Вас.",
        sec1: "ПРО МЕНЕ",
        sec2: "МОЇ РОБОТИ",
        about_me_p1: "Я - <span>фронтенд-розробник</span> із досвідом створення функціональних і візуально довершених вебсайтів. Особливу увагу приділяю якості реалізації, <span>гнучкості</span> рішень та <span>деталям</span> дизайну. У своїй роботі прагну гармонійно поєднувати естетику та <span>функціональність</span>, щоб створювати зручні, сучасні та ефективні цифрові продукти.",
        about_me_p2: "Наразі я не працюю, проте <span>навчаюся</span> на профілі інформаційних технологій (ІТ) у <span>Криворізькому Покровському ліцеї</span> та здобуваю спеціальність фронтенд-розробника в Школі Комп'ютерної Майстерності. У майбутньому планую отримати <span>вищу освіту</span> у сфері веброзробки та продовжити професійний розвиток у цьому напрямі.",
        about_me_p3: "Попри відсутність комерційного досвіду, я вже працював над <span>багатьма проєктами</span>, які моделювали реальні завдання та виклики, з якими стикаються веброзробники (усі роботи можна переглянути нижче в розділі «Мої роботи»). Маю досвід <span>командної розробки</span> та роботи з <span>GitHub</span>. У деяких проєктах використовував <span>PHP, SQL та різні API</span>, а в одному з них реалізував зберігання даних за допомогою <span>Google Таблиць замість традиційної бази даних</span>.",
        about_me_p4: "У вільний час <span>люблю читати, грати в шахи</span>, працювати над своїми сайтами (так, навіть в вільний час). Також <span>активно беру участь у громадських ініціативах</span> і допомагаю розвитку свого ліцею та міста. Серед моїх досягнень поза сферою веброзробки — <span>2-ге місце на всеукраїнському конкурсі</span> з робототехніки, 4-те місце на міському шаховому турнірі, <span>1-е місце на міському захисті наукових робіт з математики</span> та 4-е на обласному рівні. Крім того, <span>я є засновником і ведучим книжкового клубу для учнів свого ліцею</span>.",
        my_skills: "Мої навички:",
        skills: "HTML5, CSS3, Responsive Design, JavaScript (ES6+), React, jQuery, Git, GitHub, Vite, npm, робота з REST API, основи роботи з базами даних, PHP (базовий рівень), SQL (базовий рівень).",
        date1: "березень 2026 - квітень 2026",
        name1: "Інтернет-магазин <span>↗</span>",
        des1: "Один з перших моїх сайтів створенний на React, а також найскладніший на мою думку. При розробці було застосованно більшість моїх знань з веб-розробки, API Нової Пошти, кастомні хуки, а також Google таблиця замість традиційної БД.",
        date2: "квітень 2026 - травень 2026",
        des2: "Сайт барпершопу, створенний мною з нуля. Один з великих проєктів для практики фронтенд розробики, який я створив. Для створення сайту я дуже часто викоритсовува JS, але жодної бібліотеки. Таке рішення я прийняв, щоб мати якумога бульше практики з чистим JavaScript. Також в цю роботу вкладенно багато моїх знань з верстки HTML & CSS",
        date3: "травень 2026 - червень 2026",
        des3: "Найбільший сайт, який був створенний в команді за моєї участі. Моя робота була в створенні логіці сайта, та написання всього JS коду. На жаль, ця робота так і не було завершенна.",
        date4: "жовтень 2025 - сьогодні",
        des4: "Моя персональна онлайн-копія відомої гри Cookie Cliker. Надзвичайно проста в дизайні, але має досить складну логіку, написанну таким чином, що можна без проблем додавати будь-яку кількість нового контенту. Вся логіка написанна на чистому JavaScript, а також HTML атрибутах.",
        date5: "жовтень 2025 - січень 2026",
        des5: "Сайт, де акцент зробленний на функціональності, а не дизайні. Всі рухомі елементи сайту стали такими завдяки великому JS коду, а саме бібліотеці JQuery. Це досить відома бібліотека, яку часту використовують для розширення можливостей JavaScript та покращення роботи сайту.",
        date6: "жовтень 2025 - листопад 2025",
        name6: "Туристичний сайт <span>↗</span>",
        des6: "Робота, яка імітує реальну задачу по створенню сайту. Весь фронтенд виконано в кращому вигляді і, навіть, є заготовки для роботи бекенд розробника.",
        resume: "Переглянути повне резюме <span>↗</span>",
        about_h3: "ПРО МЕНЕ",
        exp_h3: "РОБОТИ",
    },
    en: {
        left_h1: "Kirill Shapoval",
        left_h3: "Frontend developer",
        left_text_p: "I will develop a beautiful, functional <br> website for you.",
        sec1: "ABOUT ME",
        sec2: "MY WORKS",
        about_me_p1: "I am a <span>front-end developer</span> with experience in creating functional and visually sophisticated websites. I pay special attention to the quality of implementation, <span>flexibility</span> of solutions, and <span>details</span> of design. In my work, I strive to harmoniously combine aesthetics and <span>functionality</span> to create convenient, modern, and effective digital products.",
        about_me_p2: "I am currently unemployed, but I am studying information technology (IT) at the <span>Kryvyi Rih Pokrovsky Lyceum</span> and am majoring in front-end development at the School of Computer Skills. In the future, I plan to obtain a <span>university degree</span> in web development and continue my professional development in this area.",
        about_me_p3: "Despite my lack of commercial experience, I have already worked on <span>many projects</span> that modeled real-world tasks and challenges faced by web developers (all works can be viewed below in the 'My Works' section). I have experience in <span>team development</span> and working with <span>GitHub</span>. In some projects, I used <span>PHP, SQL, and various APIs</span>, and in one of them, I implemented data storage using <span>Google Sheets instead of a traditional database</span>.",
        about_me_p4: "In my free time, I <span>like to read, play chess</span>, and work on my websites (yes, even in my free time). I also <span>actively participate in community initiatives</span> and help develop my lyceum and city. Among my achievements outside of web development are <span>2nd place in the All-Ukrainian Robotics Competition</span>, 4th place in the city chess tournament, <span>1st place in the city defense of scientific papers in mathematics</span>, and 4th place at the regional level. In addition, <span>I am the founder and leader of a book club for students at my lyceum</span>.",
        my_skills: "My skills:",
        skills: "HTML5, CSS3, Responsive Design, JavaScript (ES6+), React, jQuery, Git, GitHub, Vite, npm, working with REST API, basics of working with databases, PHP (basic level), SQL (basic level).",
        date1: "March 2026 - April 2026",
        name1: "Online store <span>↗</span>",
        des1: "One of my first sites built on React, and also the most complex in my opinion. It used most of my web development knowledge, the Nova Poshta API, custom hooks, and Google Sheets instead of a traditional database.",
        date2: "April 2026 - May 2026",
        des2: "A barbershop website created by me from scratch. One of the big frontend development practice projects I created. To create the site I often use JS, but no libraries. I made this decision to have as much practice with pure JavaScript as possible. Also, a lot of my knowledge of HTML & CSS layout is invested in this work",
        date3: "May 2026 - June 2026",
        des3: "The largest site that was created in the team with my participation. My work was in creating the logic of the site, and writing all the JS code. Unfortunately, this work was never completed.",
        date4: "October 2025 - present",
        des4: "My personal online copy of the famous game Cookie Cliker. Extremely simple in design, but has quite complex logic, written in such a way that you can easily add any amount of new content. All logic is written in pure JavaScript, as well as HTML attributes.",
        date5: "October 2025 - January 2026",
        des5: "A site where the emphasis is on functionality, not design. All the moving elements of the site became so thanks to a large JS code, namely the JQuery library. This is a fairly well-known library that is often used to extend JavaScript capabilities and improve site performance.",
        date6: "October 2025 - November 2025",
        name6: "Tourist site <span>↗</span>",
        des6: "A job that simulates the real task of creating a website. The entire frontend is done in the best possible way and even serves as the basis for the backend developer's work.",
        resume: "View Full Resume <span>↗</span>",
        about_h3: "ABOUT",
        exp_h3: "EXPERIENCE",
    }
};


document.addEventListener("mousemove", (event) => {
    shiny.style.left = event.clientX + "px";
    shiny.style.top = event.clientY + "px";
});

window.onscroll = () => {
    if (window.scrollY >= expTop) {
        sec2.classList.add("active");
        sec1.classList.remove("active");
    } else {
        sec1.classList.add("active");
        sec2.classList.remove("active");
    }
}

function changeLang(lang){
    const elements = document.querySelectorAll('[lang]');

    elements.forEach(el => {
        const key = el.getAttribute('lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

changeLang(localStorage.getItem("language"));