let ori_rate;
let ori_weight;

document.querySelector(".ori_rate").addEventListener("input", () => {
  ori_rate = document.querySelector(".ori_rate").value;
  console.log(ori_rate);
});

document.querySelector(".ori_weight").addEventListener("input", () => {
  ori_weight = document.querySelector(".ori_weight").value;
  console.log(ori_weight);
});

let input_weight;
let input_amount;

let final_weight;
let final_amount;

document.querySelector(".input_weight").addEventListener("input", () => {
  input_weight = document.querySelector(".input_weight").value;
  document.querySelector(".show_weight_gm").innerHTML = input_weight * 1000;

  document.querySelector(".show_amount").innerHTML =
    (input_weight * ori_rate) / ori_weight;
});

document.querySelector(".input_rate").addEventListener("input", () => {
  input_amount = document.querySelector(".input_rate").value;

  document.querySelector(".show_weight").innerHTML =
    (ori_weight * input_amount) / ori_rate;

  document.querySelector(".show_in_gm").innerHTML =
    ((ori_weight * input_amount) / ori_rate) * 1000;
});
