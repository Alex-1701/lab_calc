const calculate_N = () => {
  const x = document.getElementById("input_x").value;

  document.getElementById("n16_result").value = (x * 16 * 0.031).toFixed(3);
  document.getElementById("n4_result").value = (x * 4 * 0.031).toFixed(3);
  document.getElementById("n2_result").value = (x * 2 * 0.031).toFixed(3);
  document.getElementById("n1_result").value = (x * 1 * 0.031).toFixed(3);

  document.getElementById("a16_result").value = (x * 16 / 3).toFixed(3);
  document.getElementById("a4_result").value = (x * 4 / 3).toFixed(3);
  document.getElementById("a2_result").value = (x * 2 / 3).toFixed(3);
  document.getElementById("a1_result").value = (x * 1 / 3).toFixed(3);
}

document.getElementById("input_x").addEventListener("input", calculate_N)

const calculate_KA = () => {
  const a = document.getElementById("input_a").value;
  const b = document.getElementById("input_b").value;

  if (a && b) {
    document.getElementById("KA_result").value = ((a - b) / b).toFixed(0);
  } else {
    document.getElementById("KA_result").value = "";
  }
}

document.getElementById("input_a").addEventListener("input", calculate_KA)
document.getElementById("input_b").addEventListener("input", calculate_KA)

// calculate_KA()
