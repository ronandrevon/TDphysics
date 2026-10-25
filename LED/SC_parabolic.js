// Physical Parameters (Simplified / Normalized for Silicon-like system)
const Nd = 1e16; // Donor concentration in n-type (cm^-3)
const Na = 2e16; // Acceptor concentration in p-type (cm^-3)
const ni = 1.5e10; // Intrinsic carrier concentration (cm^-3)
const Vt = 0.0259; // Thermal voltage (k*T/q) at 300K (~26mV)
const Eg = 1.12; // Band gap of Si (eV)

// Built-in potential (V_bi = Vt * ln(Nd * Na / ni^2))
const Vbi = Vt * Math.log((Nd * Na) / (ni * ni)); // ~0.718 V

// Canvas Elements
const diagramCanvas = document.getElementById('diagramCanvas');
const ctxD = diagramCanvas.getContext('2d');
const ivCanvas = document.getElementById('ivCanvas');
const ctxIV = ivCanvas.getContext('2d');

// Controls
const biasSlider = document.getElementById('biasSlider');
const biasValDisplay = document.getElementById('biasVal');
const resetBtn = document.getElementById('resetBtn');

let Va = parseFloat(biasSlider.value);

// Update loop
function update() {
    Va = parseFloat(biasSlider.value);
    biasValDisplay.textContent = Va.toFixed(2) + " V";
    drawSpatialDiagrams();
    drawIVCurve();
}

biasSlider.addEventListener('input', update);
resetBtn.addEventListener('click', () => {
    biasSlider.value = 0;
    update();
});

// Main rendering function for spatial profiles
function drawSpatialDiagrams() {
    const w = diagramCanvas.width;
    const h = diagramCanvas.height;
    ctxD.clearRect(0, 0, w, h);

    // Depletion parameters under bias
    const V_total = Math.max(0.01, Vbi - Va); // Effective barrier height

    // Scaled depletion width (relative units for rendering)
    const W_rel = Math.sqrt(V_total / Vbi) * 120; // depletion width in px
    const x_n = W_rel * (Na / (Nd + Na)); // Extension into n-side (left)
    const x_p = W_rel * (Nd / (Nd + Na)); // Extension into p-side (right)

    const midX = w / 2;
    const leftDepletion = midX - x_n;
    const rightDepletion = midX + x_p;

    // Divide canvas into 4 vertical zones:
    // 1. Regions (N / P labels)
    // 2. Band Diagram (Ec, Ev, EFn, EFp)
    // 3. Electric Field
    // 4. Log Carrier Concentrations (n, p)

    // --- Zone 1: Region Headers ---
    ctxD.fillStyle = 'rgba(255,255,255,0.05)';
    ctxD.fillRect(0, 0, leftDepletion, h); // N region bulk
    ctxD.fillRect(rightDepletion, 0, w - rightDepletion, h); // P region bulk

    ctxD.fillStyle = '#888';
    ctxD.font = 'bold 14px sans-serif';
    ctxD.fillText("n-type region", leftDepletion / 2 - 40, 25);
    ctxD.fillText("p-type region", rightDepletion + (w - rightDepletion) / 2 - 40, 25);

    // Draw Depletion boundaries
    ctxD.strokeStyle = 'rgba(255,255,255,0.2)';
    ctxD.setLineDash([4, 4]);
    ctxD.beginPath();
    ctxD.moveTo(leftDepletion, 30); ctxD.lineTo(leftDepletion, h);
    ctxD.moveTo(rightDepletion, 30); ctxD.lineTo(rightDepletion, h);
    ctxD.stroke();
    ctxD.setLineDash([]);

    ctxD.fillStyle = '#aaa';
    ctxD.font = '12px sans-serif';
    ctxD.fillText("Depletion Layer", midX - 42, 25);

    // --- Zone 2: Energy Band Diagram ---
    // Y-axis range for Band Diagram: y = 50 to y = 250
    const bandCenterY = 150;
    const bandScale = 80; // pixels per eV

    // Energy calculations across space x
    function getPotential(x) {
        if (x < leftDepletion) {
            return 0; // Reference potential at bulk n
        } else if (x > rightDepletion) {
            return V_total; // Bulk p potential shifted by barrier
        } else {
            // Parabolic potential profile inside depletion layer
            const relX = x - leftDepletion;
            const W = leftDepletion - rightDepletion;
            if (x < midX) {
                return (V_total / (x_n + x_p)) * (relX * relX / x_n) / 2;
            } else {
                const relXp = rightDepletion - x;
                return V_total - (V_total / (x_n + x_p)) * (relXp * relXp / x_p) / 2;
            }
        }
    }

    // Energy of conduction band: Ec(x) = Ec_ref - q * V(x)
    // In n-type bulk: Ef is close to Ec
    const Ec_n = -0.2; // eV
    const Ev_n = Ec_n - Eg; // eV

    ctxD.lineWidth = 2;

    // Plot Ec, Ev
    ctxD.beginPath();
    ctxD.strokeStyle = '#00d2ff'; // Ec
    for (let x = 0; x <= w; x += 2) {
        const V = getPotential(x);
        const Ec = Ec_n + V; // Electron energy shifts UP with potential barrier
        const y = bandCenterY + Ec * bandScale;
        if (x === 0) ctxD.moveTo(x, y); else ctxD.lineTo(x, y);
    }
    ctxD.stroke();

    ctxD.beginPath();
    ctxD.strokeStyle = '#ff4757'; // Ev
    for (let x = 0; x <= w; x += 2) {
        const V = getPotential(x);
        const Ev = Ev_n + V;
        const y = bandCenterY + Ev * bandScale;
        if (x === 0) ctxD.moveTo(x, y); else ctxD.lineTo(x, y);
    }
    ctxD.stroke();

    // Plot Quasi-Fermi Levels
    ctxD.strokeStyle = '#eccc68'; // EFn / EFp
    ctxD.setLineDash([6, 3]);

    if (Math.abs(Va) < 0.001) {
        // Equilibrium Fermi Level
        const Ef = Ec_n + Vt * Math.log(Nd / ni); // ~ mid band
        const yEf = bandCenterY + Ef * bandScale;
        ctxD.beginPath();
        ctxD.moveTo(0, yEf); ctxD.lineTo(w, yEf);
        ctxD.stroke();
    } else {
        // Quasi-Fermi levels split by q*Va under bias
        const Efn = Ec_n + Vt * Math.log(Nd / ni);
        const Efp = Efn + Va;

        // Efn on n-side
        ctxD.strokeStyle = '#70a1ff';
        ctxD.beginPath();
        ctxD.moveTo(0, bandCenterY + Efn * bandScale);
        ctxD.lineTo(rightDepletion, bandCenterY + Efn * bandScale);
        ctxD.stroke();

        // Efp on p-side
        ctxD.strokeStyle = '#ff6b81';
        ctxD.beginPath();
        ctxD.moveTo(leftDepletion, bandCenterY + Efp * bandScale);
        ctxD.lineTo(w, bandCenterY + Efp * bandScale);
        ctxD.stroke();
    }
    ctxD.setLineDash([]);

    // Section Titles
    ctxD.fillStyle = '#fff';
    ctxD.font = '12px sans-serif';
    ctxD.fillText("Energy Band Diagram (eV)", 15, 55);

    // --- Zone 3: Electric Field Profile ---
    // Y-range: 280 to 440
    const efieldBaseY = 410;
    ctxD.fillStyle = '#fff';
    ctxD.fillText("Electric Field E(x)", 15, 285);

    // Axis line
    ctxD.strokeStyle = '#444';
    ctxD.lineWidth = 1;
    ctxD.beginPath();
    ctxD.moveTo(0, efieldBaseY); ctxD.lineTo(w, efieldBaseY);
    ctxD.stroke();

    // Linear E-field inside depletion zone pointing from n to p (negative direction)
    const E_max_height = Math.min(100, 30 * Math.sqrt(V_total)); // Scaled height for display
    ctxD.strokeStyle = '#2ed573';
    ctxD.lineWidth = 2;
    ctxD.beginPath();
    ctxD.moveTo(0, efieldBaseY);
    ctxD.lineTo(leftDepletion, efieldBaseY);
    ctxD.lineTo(midX, efieldBaseY - E_max_height);
    ctxD.lineTo(rightDepletion, efieldBaseY);
    ctxD.lineTo(w, efieldBaseY);
    ctxD.stroke();

    // Fill area under E-field
    ctxD.fillStyle = 'rgba(46, 213, 115, 0.15)';
    ctxD.beginPath();
    ctxD.moveTo(leftDepletion, efieldBaseY);
    ctxD.lineTo(midX, efieldBaseY - E_max_height);
    ctxD.lineTo(rightDepletion, efieldBaseY);
    ctxD.closePath();
    ctxD.fill();

    // --- Zone 4: Carrier Concentrations (Log Scale) ---
    // Y-range: 470 to 720
    const carrierBaseY = 700;
    const logScaleHeight = 200; // Total height for ~20 orders of magnitude
    ctxD.fillStyle = '#fff';
    ctxD.fillText("Carrier Concentrations (log scale)", 15, 470);

    // Grid lines for log density
    ctxD.strokeStyle = '#333';
    ctxD.lineWidth = 1;
    ctxD.beginPath();
    ctxD.moveTo(0, carrierBaseY); ctxD.lineTo(w, carrierBaseY);
    ctxD.moveTo(0, carrierBaseY - logScaleHeight); ctxD.lineTo(w, carrierBaseY - logScaleHeight);
    ctxD.stroke();

    // Densities:
    // Majority: n_n = Nd = 1e16, p_p = Na = 1e16
    // Minority eq: p_n0 = ni^2/Nd = 2.25e4, n_p0 = ni^2/Na = 2.25e4
    // Under bias Va: injected minority at boundaries = p_n0 * exp(Va/Vt)
    const logMax = 17; // log10(1e17)
    const logMin = 2;  // log10(1e2)

    function densityToY(density) {
        const logVal = Math.max(logMin, Math.min(logMax, Math.log10(density)));
        const norm = (logVal - logMin) / (logMax - logMin);
        return carrierBaseY - norm * logScaleHeight;
    }

    const n_bulk = Nd;
    const p_bulk = Na;
    const p_min_0 = (ni * ni) / Nd;
    const n_min_0 = (ni * ni) / Na;

    // Injected boundary carrier densities (law of the junction)
    const p_boundary = p_min_0 * Math.exp(Math.min(30, Va / Vt));
    const n_boundary = n_min_0 * Math.exp(Math.min(30, Va / Vt));

    // Draw Electron Concentration n(x) - CYAN
    ctxD.strokeStyle = '#00d2ff';
    ctxD.lineWidth = 2;
    ctxD.beginPath();
    // n-side bulk
    ctxD.moveTo(0, densityToY(n_bulk));
    ctxD.lineTo(leftDepletion, densityToY(n_bulk));
    // Across depletion (simple transition approximation)
    ctxD.lineTo(rightDepletion, densityToY(n_boundary));
    // p-side minority decay/bulk
    ctxD.lineTo(w, densityToY(n_boundary));
    ctxD.stroke();

    // Draw Hole Concentration p(x) - RED
    ctxD.strokeStyle = '#ff4757';
    ctxD.lineWidth = 2;
    ctxD.beginPath();
    // n-side minority
    ctxD.moveTo(0, densityToY(p_boundary));
    ctxD.lineTo(leftDepletion, densityToY(p_boundary));
    // Across depletion
    ctxD.lineTo(rightDepletion, densityToY(p_bulk));
    // p-side bulk
    ctxD.lineTo(w, densityToY(p_bulk));
    ctxD.stroke();

    // Log Scale Labels
    ctxD.fillStyle = '#777';
    ctxD.font = '10px monospace';
    ctxD.fillText("10¹⁶ cm⁻³", 20, densityToY(1e16) - 4);
    ctxD.fillText("10⁴ cm⁻³", 20, densityToY(1e4) - 4);
}

// Render I-V Characteristic Curve
function drawIVCurve() {
    const w = ivCanvas.width;
    const h = ivCanvas.height;
    ctxIV.clearRect(0, 0, w, h);

    const originX = 120;
    const originY = h - 60;
    const scaleV = 180; // pixels per Volt
    const scaleI = 140; // pixels per mA (normalized)

    // Axes
    ctxIV.strokeStyle = '#666';
    ctxIV.lineWidth = 1;
    ctxIV.beginPath();
    // X-axis (Voltage)
    ctxIV.moveTo(20, originY); ctxIV.lineTo(w - 20, originY);
    // Y-axis (Current)
    ctxIV.moveTo(originX, 20); ctxIV.lineTo(originX, h - 20);
    ctxIV.stroke();

    // Axis Labels
    ctxIV.fillStyle = '#ccc';
    ctxIV.font = '12px sans-serif';
    ctxIV.fillText("V_a (V)", w - 55, originY - 10);
    ctxIV.fillText("I (A)", originX + 10, 30);

    // Shockley Diode Equation model for visualization curve
    // I = I0 * (exp(Va / (n*Vt)) - 1)
    const I0 = 1e-4; // Normalized reverse saturation current for plot scaling
    const n_ideality = 1.2;

    function calculateCurrent(v) {
        return I0 * (Math.exp(v / (n_ideality * Vt)) - 1);
    }

    // Draw IV curve plot
    ctxIV.strokeStyle = '#ffa502';
    ctxIV.lineWidth = 2.5;
    ctxIV.beginPath();

    let first = true;
    for (let v = -1.5; v <= 0.65; v += 0.01) {
        const i = calculateCurrent(v);
        const x = originX + v * scaleV;
        const y = originY - i * scaleI;

        // Clamp to canvas area
        const clampedY = Math.max(15, Math.min(h - 15, y));

        if (first) {
            ctxIV.moveTo(x, clampedY);
            first = false;
        } else {
            ctxIV.lineTo(x, clampedY);
        }
    }
    ctxIV.stroke();

    // Current Operating Point Marker
    const currentI = calculateCurrent(Va);
    const opX = originX + Va * scaleV;
    const opY = Math.max(15, Math.min(h - 15, originY - currentI * scaleI));

    // Operating point dashed indicator lines
    ctxIV.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctxIV.setLineDash([3, 3]);
    ctxIV.beginPath();
    ctxIV.moveTo(opX, originY); ctxIV.lineTo(opX, opY);
    ctxIV.moveTo(originX, opY); ctxIV.lineTo(opX, opY);
    ctxIV.stroke();
    ctxIV.setLineDash([]);

    // Red Dot
    ctxIV.fillStyle = '#ff4757';
    ctxIV.beginPath();
    ctxIV.arc(opX, opY, 6, 0, Math.PI * 2);
    ctxIV.fill();
    ctxIV.strokeStyle = '#fff';
    ctxIV.lineWidth = 1.5;
    ctxIV.stroke();

    // Value text on graph
    ctxIV.fillStyle = '#ffa502';
    ctxIV.font = 'bold 12px monospace';
    ctxIV.fillText(`V = ${Va.toFixed(2)} V`, opX + 10, opY - 10);
}

// Initial render
update();
