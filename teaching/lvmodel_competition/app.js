// Initialize default parameters
let params = {
    r1: 0.5, K1: 50, alpha12: 0.5,
    r2: 0.5, K2: 50, alpha21: 0.5,
    initialN1: 10, initialN2: 10,
  };
  
// Create sliders with linked inputs and scale
// Create sliders with linked inputs and scale
function createSliders() {
  const sliderContainer = document.getElementById("sliders");
  sliderContainer.innerHTML = ""; // Clear old sliders
  // Desired order of sliders
  const sliderOrder = ["r1", "K1", "initialN1", "r2", "K2", "initialN2", "alpha12", "alpha21"];
  
  // Map parameter keys to descriptive titles
  const titles = {
    r1: "Growth rate of species 1 (r1)",
    r2: "Growth rate of species 2 (r2)",
    K1: "Carrying capacity of species 1 (K1)",
    K2: "Carrying capacity of species 2 (K2)",
    initialN1: "Initial population size of species 1 (N1)",
    initialN2: "Initial population size of species 2 (N2)",
    alpha12: "Effect of sp 2 on 1 (α_12)",
    alpha21: "Effect of sp 1 on 2 (α_21)",
  };

  // Iterate over the custom slider order
  sliderOrder.forEach((key) => {
    const container = document.createElement("div");
    container.className = "slider-container";
  
    // Label
    const label = document.createElement("label");
    label.textContent = titles[key] || key; // Use descriptive title or fallback to key
    label.style.marginBottom = "5px";
  
    // Set font color for species-specific sliders
    if (key === "alpha12" || key === "alpha21") {
      label.style.color = "black"; // Black for competition coefficients
    } else {
      label.style.color = key.includes("1") ? "red" : "blue"; // Red for species 1, blue for species 2
    }
  
    // Slider
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = key.includes("r") || key.includes("alpha") ? 0 : 1;
    
    // Correctly assign max based on the key
    if (key.includes("r")) {
      slider.max = 5;
    } else if (key.includes("alpha")) {
      slider.max = 2;
    } else {
      slider.max = 100;
    }

    slider.step = 0.1;
    slider.value = params[key];
  
    // Input box
    const input = document.createElement("input");
    input.type = "number";
    input.step = 0.1;
    input.value = params[key];
    input.style.width = "60px";
    input.style.marginLeft = "10px";
  
    // Sync slider and input box
    slider.oninput = (e) => {
      params[key] = parseFloat(e.target.value);
      input.value = e.target.value;
      updatePlots();
    };
    input.onchange = (e) => {
      params[key] = parseFloat(e.target.value);
      slider.value = e.target.value;
      updatePlots();
    };
  
    // Custom Tick Marks
    const scale = document.createElement("div");
    scale.className = `slider-scale`;
    const minValue = document.createElement("span");
    const maxValue = document.createElement("span");
    minValue.textContent = slider.min;
    maxValue.textContent = slider.max;
  
    scale.appendChild(minValue);
    scale.appendChild(maxValue);
  
    // Append to container
    container.appendChild(label);
    container.appendChild(slider);
    container.appendChild(input);
    container.appendChild(scale);
    sliderContainer.appendChild(container);
  });
}  
// Remaining functions
function runLotkaVolterra() {
  const { r1, K1, alpha12, r2, K2, alpha21, initialN1, initialN2 } = params;
  const dt = 0.01;
  const tMax = 50;
  const time = [];
  const N1 = [];
  const N2 = [];
  let n1 = initialN1;
  let n2 = initialN2;

  for (let t = 0; t <= tMax; t += dt) {
    time.push(t);
    N1.push(n1);
    N2.push(n2);
    const dN1 = r1 * n1 * (1 - (n1 + alpha12 * n2) / K1);
    const dN2 = r2 * n2 * (1 - (n2 + alpha21 * n1) / K2);
    n1 += dN1 * dt;
    n2 += dN2 * dt;
  }
  return { time, N1, N2 };
}


function runLotkaVolterraRK4() {
  const { r1, K1, alpha12, r2, K2, alpha21, initialN1, initialN2 } = params;
  const dt = 0.01;
  const tMax = 50;
  const time = [];
  const N1 = [];
  const N2 = [];
  let n1 = initialN1;
  let n2 = initialN2;

  for (let t = 0; t <= tMax; t += dt) {
    time.push(t);
    N1.push(n1);
    N2.push(n2);

    // Define the derivatives
    const f1 = r1 * n1 * (1 - (n1 + alpha12 * n2) / K1);
    const f2 = r2 * n2 * (1 - (n2 + alpha21 * n1) / K2);

    // RK4 Steps
    const k1_n1 = f1;
    const k1_n2 = f2;

    const k2_n1 = r1 * (n1 + 0.5 * dt * k1_n1) * (1 - (n1 + 0.5 * dt * k1_n1 + alpha12 * (n2 + 0.5 * dt * k1_n2)) / K1);
    const k2_n2 = r2 * (n2 + 0.5 * dt * k1_n2) * (1 - (n2 + 0.5 * dt * k1_n2 + alpha21 * (n1 + 0.5 * dt * k1_n1)) / K2);

    const k3_n1 = r1 * (n1 + 0.5 * dt * k2_n1) * (1 - (n1 + 0.5 * dt * k2_n1 + alpha12 * (n2 + 0.5 * dt * k2_n2)) / K1);
    const k3_n2 = r2 * (n2 + 0.5 * dt * k2_n2) * (1 - (n2 + 0.5 * dt * k2_n2 + alpha21 * (n1 + 0.5 * dt * k2_n1)) / K2);

    const k4_n1 = r1 * (n1 + dt * k3_n1) * (1 - (n1 + dt * k3_n1 + alpha12 * (n2 + dt * k3_n2)) / K1);
    const k4_n2 = r2 * (n2 + dt * k3_n2) * (1 - (n2 + dt * k3_n2 + alpha21 * (n1 + dt * k3_n1)) / K2);

    // Update populations
    n1 += (dt / 6) * (k1_n1 + 2 * k2_n1 + 2 * k3_n1 + k4_n1);
    n2 += (dt / 6) * (k1_n2 + 2 * k2_n2 + 2 * k3_n2 + k4_n2);
  }
  return { time, N1, N2 };
}
  
function calculateIsoclines() {
  const { K1, alpha12, K2, alpha21 } = params;
  const N2_1 = [...Array(100).keys()].map((n2) => n2);
  const N1_1 = N2_1.map((n2) => K1 - alpha12 * n2);
  const N1_2 = [...Array(100).keys()].map((n1) => n1);
  const N2_2 = N1_2.map((n1) => K2 - alpha21 * n1);
  return { N1_1, N2_1, N1_2, N2_2 };
}
  
function calculateVectors() {
  const { r1, K1, alpha12, r2, K2, alpha21 } = params;

  // Define grid points for N1 and N2
  const gridSize = 15; // Number of grid points
  const N1 = Array.from({ length: gridSize }, (_, i) => i * K1 / gridSize);
  const N2 = Array.from({ length: gridSize }, (_, i) => i * K2 / gridSize);

  const vectors = { x: [], y: [], u: [], v: [] }; // x, y (positions), u, v (vector components)

  for (const n1 of N1) {
    for (const n2 of N2) {
      const dN1 = r1 * n1 * (1 - (n1 + alpha12 * n2) / K1);
      const dN2 = r2 * n2 * (1 - (n2 + alpha21 * n1) / K2);

      const magnitude = Math.sqrt(dN1 ** 2 + dN2 ** 2); // Calculate vector magnitude
      const scale = 0.5; // Scaling factor for arrow lengths

      vectors.x.push(n1);
      vectors.y.push(n2);

      // Scale and optionally normalize vectors
      vectors.u.push((dN1 / magnitude) * scale || 0); // Avoid NaN for zero-length vectors
      vectors.v.push((dN2 / magnitude) * scale || 0);
    }
  }

  return vectors;
}

// Function to calculate vectors for the Phase Plot
function calculatePhaseVectors(params) {
  const { r1, K1, alpha12, r2, K2, alpha21, initialN1, initialN2 } = params;

  // Define grid points for N1 and N2
  const gridSize = 10; // Number of vectors per axis; adjust for density
  const N1_values = Array.from({ length: gridSize }, (_, i) => (i / (gridSize - 1)) * params.K1 * 1.2+initialN1/2);
  const N2_values = Array.from({ length: gridSize }, (_, i) => (i / (gridSize - 1)) * params.K2 * 1.2+initialN2/2);

  const vectors = { x: [], y: [], u: [], v: [] };

  for (const n1 of N1_values) {
    for (const n2 of N2_values) {
      // Calculate derivatives
      const dN1 = r1 * n1 * (1 - (n1 + alpha12 * n2) / K1);
      const dN2 = r2 * n2 * (1 - (n2 + alpha21 * n1) / K2);

      // Calculate magnitude
      const magnitude = Math.sqrt(dN1 ** 2 + dN2 ** 2);

      // Scaling factor for arrow lengths
      const scale = 5;

      // Normalize vectors to have consistent arrow lengths
      const u = magnitude !== 0 ? (dN1 / magnitude) * scale : 0;
      const v = magnitude !== 0 ? (dN2 / magnitude) * scale : 0;

      vectors.x.push(n1);
      vectors.y.push(n2);
      vectors.u.push(u);
      vectors.v.push(v);
    }
  }

  return vectors;
}

// Function to generate Plotly annotations for arrows
function generateArrowAnnotations(vectors) {
  const annotations = vectors.x.map((n1, i) => ({
    ax: n1,
    ay: vectors.y[i],
    x: n1 + vectors.u[i],
    y: vectors.y[i] + vectors.v[i],
    xref: 'x',
    yref: 'y',
    axref: 'x',
    ayref: 'y',
    showarrow: true,
    arrowhead: 2,
    arrowsize: 1,
    arrowwidth: 1,
    arrowcolor: 'gray',
  }));
  return annotations;
}

function updatePlots() {
  const { time, N1, N2 } = runLotkaVolterra();
  //const { time, N1, N2 } = runLotkaVolterraRK4(); // Use the RK4 function
    
  const { N1_1, N2_1, N1_2, N2_2 } = calculateIsoclines();
  const vectors = calculateVectors();
  
   // Calculate vectors and annotations for phase plot
  const phaseVectors = calculatePhaseVectors(params);
  const phaseAnnotations = generateArrowAnnotations(phaseVectors);


  // Initial and final conditions
  const initialN1 = params.initialN1;
  const initialN2 = params.initialN2;
  const finalN1 = N1[N1.length - 1];
  const finalN2 = N2[N2.length - 1];
  
  // Define arrow annotations
  const arrowScale = 4; // Adjust arrow length
  const annotations = vectors.x.map((n1, i) => ({
    ax: n1, // Start x position
    ay: vectors.y[i], // Start y position
    x: n1 + arrowScale * vectors.u[i], // End x position
    y: vectors.y[i] + arrowScale * vectors.v[i], // End y position
    xref: "x",
    yref: "y",
    axref: "x",
    ayref: "y",
    arrowhead: 2, // Arrowhead style (2 for a triangular head)
    arrowsize: 1, // Arrowhead size (adjust to make arrowheads larger)
    arrowwidth: 1, // Width of the arrow line
    arrowcolor: "gray", // Arrow color
  }));

  // Time plot
  Plotly.newPlot("timePlot", [
    { x: time, y: N1, mode: "lines", name: "Species 1", line: { color: "red" } },
    { x: time, y: N2, mode: "lines", name: "Species 2", line: { color: "blue" } },
  ], {
    title: "Population dynamics",
    xaxis: { title: "Time" },
    yaxis: { title: "Population Size" },
  });

  // Phase Plot with arrows always shown
  Plotly.newPlot("phasePlot", [
    {
      x: N1,
      y: N2,
      mode: "lines",
      name: "Trajectory",
      line: { color: "gray", width: 2 },
    },
    {
      x: [initialN1],
      y: [initialN2],
      mode: "markers",
      name: "Initial Condition",
      marker: {
        size: 10,
        color: "orange",
        symbol: "circle",
      },
    },
    {
      x: [finalN1],
      y: [finalN2],
      mode: "markers",
      name: "Final Condition",
      marker: {
        size: 10,
        color: "purple",
        symbol: "circle",
      },
    },
  ], {
    title: "Abundance phase plot",
    xaxis: { title: "Species 1 Population", range: [0, params.K1 * 1.2+initialN1/2] },
    yaxis: { title: "Species 2 Population", range: [0, params.K2 * 1.2+initialN2/2] },
    annotations: phaseAnnotations, // Add arrow annotations unconditionally
  });


  // Isocline plot with arrows
  Plotly.newPlot("isoclinePlot", [
    // Species 1 isocline
    {
      x: N1_1,
      y: N2_1,
      mode: "lines",
      name: "Species 1 Isocline",
      line: { color: "red", dash: "dot" },
    },
    // Species 2 isocline
    {
      x: N1_2,
      y: N2_2,
      mode: "lines",
      name: "Species 2 Isocline",
      line: { color: "blue", dash: "dot" },
    },
    {
      x: [initialN1],
      y: [initialN2],
      mode: "markers",
      name: "Initial Condition",
      marker: {
        size: 10,
        color: "orange",
        symbol: "circle",
      },
    },
    {
      x: [finalN1],
      y: [finalN2],
      mode: "markers",
      name: "Final Condition",
      marker: {
        size: 10,
        color: "purple",
        symbol: "circle",
      },
    }
  ], {
    title: "Zero-growth isoclines",
    xaxis: { title: "Species 1 Population", range: [0, params.K1 * 1.2] },
    yaxis: { title: "Species 2 Population", range: [0, params.K2 * 1.2] },
    annotations: annotations, // Add arrow annotations
  });
}
  
function init() {
  createSliders();
  updatePlots();
  document.getElementById("resetButton").onclick = () => {
    params = {
      r1: 0.5, K1: 50, alpha12: 0.5,
      r2: 0.5, K2: 50, alpha21: 0.5,
      initialN1: 10, initialN2: 10,
    };
    createSliders();
    updatePlots();
  };
}
  
document.addEventListener("DOMContentLoaded", init);