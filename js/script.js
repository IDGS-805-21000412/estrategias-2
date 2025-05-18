
        document.addEventListener("DOMContentLoaded", () => {
            // Variables para contar aciertos
            let correctAnswers = 0;
            const correctCountElement = document.getElementById('correctCount');
            const rewardAlert = document.getElementById('rewardAlert');
            const closeRewardBtn = document.getElementById('closeReward');
            
            // Lógica de selección de tarjetas
            const cards = document.querySelectorAll(".card");
            
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    // Si la carta ya fue volteada, no hacer nada
                    if (card.classList.contains('flipped')) return;
                    
                    const isCorrect = card.dataset.correct === "true";
                    card.classList.add("flipped");
                    
                    if (isCorrect) {
                        correctAnswers++;
                        correctCountElement.textContent = correctAnswers;
                        lanzarConfetti();
                        
                        // Verificar si ha acertado las 3 preguntas
                        if (correctAnswers === 3) {
                            setTimeout(() => {
                                rewardAlert.classList.add('show');
                                lanzarConfettiExtra();
                            }, 1000);
                        }
                    }
                });
            });
            
            // Cerrar la alerta de recompensa
            closeRewardBtn.addEventListener('click', () => {
                rewardAlert.classList.remove('show');
            });
            
            // Función para lanzar confeti normal
            function lanzarConfetti() {
                const container = document.querySelector(".confetti-container");
                
                for (let i = 0; i < 30; i++) {
                    const confetti = document.createElement("div");
                    confetti.classList.add("confetti");
                    confetti.style.left = Math.random() * 100 + "vw";
                    confetti.style.animationDelay = Math.random() * 2 + "s";
                    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                    container.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }
            }
            
            // Función para lanzar más confeti al ganar
            function lanzarConfettiExtra() {
                const container = document.querySelector(".confetti-container");
                
                for (let i = 0; i < 150; i++) {
                    const confetti = document.createElement("div");
                    confetti.classList.add("confetti");
                    confetti.style.left = Math.random() * 100 + "vw";
                    confetti.style.animationDelay = Math.random() * 2 + "s";
                    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                    confetti.style.width = '12px';
                    confetti.style.height = '12px';
                    container.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }
            }
            
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
        });
