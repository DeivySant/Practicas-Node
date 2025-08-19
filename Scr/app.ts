const opciones: string[] = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
let puntosJugador: number = 0;
let puntosComputadora: number = 0;

const resultDiv = document.getElementById("result") as HTMLDivElement;
const scoreDiv = document.getElementById("score") as HTMLDivElement;
const playerIcon = document.getElementById("playerIcon") as HTMLDivElement;
const computerIcon = document.getElementById("computerIcon") as HTMLDivElement;

// Iconos asociados
const iconos: Record<string, string> = {
  "Piedra": "✊",
  "Papel": "✋",
  "Tijera": "✌️",
  "Lagarto": "🦎",
  "Spock": "🖖"
};

function play(jugador: string): void {
  const computadora: string = opciones[Math.floor(Math.random() * opciones.length)];
  let resultado: string = "";

  // Mostrar iconos en la "batalla"
  playerIcon.textContent = iconos[jugador];
  computerIcon.textContent = iconos[computadora];

  if (jugador === computadora) {
    resultado = `Empate! Ambos eligieron ${jugador}`;
  } else if (
    (jugador === "Piedra" && (computadora === "Tijera" || computadora === "Lagarto")) ||
    (jugador === "Papel" && (computadora === "Piedra" || computadora === "Spock")) ||
    (jugador === "Tijera" && (computadora === "Papel" || computadora === "Lagarto")) ||
    (jugador === "Lagarto" && (computadora === "Spock" || computadora === "Papel")) ||
    (jugador === "Spock" && (computadora === "Tijera" || computadora === "Piedra"))
  ) {
    resultado = `✅ Ganaste! ${jugador} vence a ${computadora}`;
    puntosJugador++;
  } else {
    resultado = `❌ Perdiste! ${computadora} vence a ${jugador}`;
    puntosComputadora++;
  }

  resultDiv.innerText = resultado;
  scoreDiv.innerText = `Jugador: ${puntosJugador} | Computadora: ${puntosComputadora}`;
}

function init(): void {
  const botones = document.querySelectorAll("button[data-choice]");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const choice = (boton as HTMLButtonElement).dataset.choice!;
      play(choice);
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
