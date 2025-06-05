// sketch.js

// Título da Obra: Rosca Cinética Reluzente

// Descrição: Uma Rosca multifacetada que gira suavemente,
// respondendo ao movimento do mouse para revelar novos ângulos e brilhos.

let anguloXAnimacao = 0;
let anguloYAnimacao = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220, 210, 200); // Um fundo claro, neutro

  // Iluminação
  ambientLight(80, 80, 80); // Luz ambiente mais clara
  directionalLight(255, 255, 240, 0.7, 0.6, -0.8); // Luz direcional principal, levemente amarelada
  pointLight(100, 200, 255, 0, 0, 250); // Luz pontual azulada para realces

  // Interação com o mouse para rotação
  // Mapeia a posição do mouse para um ângulo de rotação, com sensibilidade ajustada
  let rotXMouse = map(mouseY, 0, height, -PI, PI) * 0.3;
  let rotYMouse = map(mouseX, 0, width, -PI, PI) * 0.3;

  // Animação de rotação automática suave
  anguloXAnimacao += 0.003;
  anguloYAnimacao += 0.005;

  // --- Gema Principal (Torus) ---
  push(); // Isola as transformações da gema principal
  translate(0, 0, 0); // Centraliza a gema

  rotateX(anguloXAnimacao + rotXMouse); // Rotação combinada (automática + mouse) no eixo X
  rotateY(anguloYAnimacao + rotYMouse); // Rotação combinada (automática + mouse) no eixo Y

  // Material da gema
  specularMaterial(80, 180, 200); // Material azul-esverdeado brilhante
  shininess(60); // Define o quão "polida" a gema parece

  // Forma 3D: Torus (rosquinha) como a gema principal
  // Parâmetros: raio do torus, raio do tubo, detalheX, detalheY
  torus(100, 40, 24, 16);
  pop(); // Restaura o estado de transformação anterior

  // --- Elemento Secundário Decorativo (Esfera Orbitante) ---
  push(); // Isola as transformações do elemento secundário
  // Movimento orbital animado
  let orbitaX = 200 * sin(frameCount * 0.02);
  let orbitaZ = 200 * cos(frameCount * 0.02);
  translate(orbitaX, 0, orbitaZ); // Posiciona a esfera em sua órbita

  rotateY(frameCount * -0.04); // Rotação própria da esfera

  ambientMaterial(200, 100, 100); // Material avermelhado para contraste

  // Forma 3D: Esfera pequena
  sphere(25);
  pop(); // Restaura o estado de transformação anterior
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
