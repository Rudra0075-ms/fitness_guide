function calculateFitness(){

let age=parseInt(document.getElementById("age").value);
let gender=document.getElementById("gender").value;
let height=parseFloat(document.getElementById("height").value);
let weight=parseFloat(document.getElementById("weight").value);
let goal=document.getElementById("goal").value;

if(!age || !gender || !height || !weight || !goal){

alert("Please fill all fields.");
return;

}

let bmi=(weight/((height/100)**2)).toFixed(1);

let status="";
let workout=[];
let diet=[];
let calories=0;

if(gender=="Male")
calories=Math.round(10*weight+6.25*height-5*age+5);
else
calories=Math.round(10*weight+6.25*height-5*age-161);

let water=(weight*0.035).toFixed(1);

if(bmi<18.5){
status="Underweight";
diet=[
"🥛 Milk",
"🥜 Nuts",
"🍳 Eggs",
"🍗 Chicken",
"🍌 Banana"
];
workout=[
"Light Strength Training",
"Yoga",
"Walking"
];
}

else if(bmi<25){
status="Healthy";
diet=[
"🥗 Vegetables",
"🍎 Fruits",
"🍚 Brown Rice",
"🍗 Lean Protein",
"🥛 Dairy"
];
workout=[
"Gym (4 Days)",
"Running",
"Cycling",
"Swimming"
];
}

else if(bmi<30){
status="Overweight";
diet=[
"🥦 Green Vegetables",
"🍗 Chicken Breast",
"🥣 Oats",
"🍎 Fruits"
];
workout=[
"Cardio",
"HIIT",
"Walking",
"Cycling"
];
}

else{
status="Obese";
diet=[
"🥗 Salad",
"🥦 Vegetables",
"🥣 Oats",
"🍗 Lean Protein"
];
workout=[
"Walking",
"Yoga",
"Light Cardio"
];
}

if(goal=="Weight Loss")
calories-=500;

if(goal=="Muscle Gain")
calories+=300;

let html=`

<h2>📊 Your Fitness Report</h2>

<p><b>BMI :</b> ${bmi}</p>

<p><b>Status :</b> ${status}</p>

<p><b>Calories Needed :</b> ${calories} kcal/day</p>

<p><b>Water Intake :</b> ${water} Litres/day</p>

<h3>🥗 Recommended Diet</h3>

<ul>

${diet.map(item=>`<li>${item}</li>`).join("")}

</ul>

<h3>💪 Workout Plan</h3>

<ul>

${workout.map(item=>`<li>${item}</li>`).join("")}

</ul>

<h3>🌟 Daily Motivation</h3>

<p>"Small progress every day leads to big results."</p>

`;

let result=document.getElementById("result");

result.style.display="block";

result.innerHTML=html;

result.scrollIntoView({behavior:"smooth"});

}
