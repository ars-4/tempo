const { createApp } = Vue;

let global = createApp({
    data() {
        return {
            brand: "Hustler's Desk",
            home: "Home",
            services: "Our Services",
            trial: "How It Works",
            pricing: "Pricing",
            team: "Team",
            contact: "Contact Us",
            user: "Login",
            listicon: "fa fa-check-circle",
            iframe: "https://www.youtube.com/embed/Cp_iAFXvzaw"
        }
    }
}).mount('#main')

