document.addEventListener("DOMContentLoaded", () => {
            // Lógica original de la misión
            const acceptButton = document.getElementById("acceptMission");
            const villain = document.querySelector(".villain-small");
            const mission1 = document.getElementById("mission1");
            const main = document.querySelector("main");
            
            acceptButton.addEventListener("click", () => {
                villain.classList.add("hidden");
                main.classList.add("hidden");
                mission1.classList.remove("hidden");
            });
            
            // Lógica de selección de tarjetas y confeti
            const cards = document.querySelectorAll(".card");
            
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    const isCorrect = card.dataset.correct === "true";
                    card.classList.add("flipped");
                    
                    if (isCorrect) {
                        lanzarConfetti();
                    }
                });
            });
            
            function lanzarConfetti() {
                const container = document.querySelector(".confetti-container");
                
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement("div");
                    confetti.classList.add("confetti");
                    confetti.style.left = Math.random() * 100 + "vw";
                    confetti.style.animationDelay = Math.random() * 2 + "s";
                    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                    container.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }
            }
        });