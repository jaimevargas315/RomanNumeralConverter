
const entry = document.querySelector("#entry");
const number = document.querySelector("#number");
const convert_btn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

convert_btn.onclick = convert;

function convert()
{
  output.innerText="";
  output.style.backgroundColor = '#35344b';
  output.style.borderColor = 'white';
  output.style.color = 'white';

  output.style.visibility = 'visible';  

  let input = number.value;
  let error = false;

  if(input.length <1) { error1(); error = true;}
  if(input < 0) { error2(); error = true;}
  if(input >= 4000) { error3(); error = true;}

  while(input>0 & error == false)
  {
    if(input>=1000)
    {
      output.innerText +="M";
      input-=1000;
      continue;
    }
    if(input>=900)
    {
      output.innerText +=("CM");
      input-=900;
      continue;
    }
    if(input>=800)
    {
      output.innerText +=("DCCC");
      input-=800;
      continue;
    }
    if(input>=700)
    {
      output.innerText +=("DCC");
      input-=700;
      continue;
    }
    if(input>=600)
    {
      output.innerText +=("DC");
      input-=600;
      continue;
    }
    if(input>=500)
    {
      output.innerText +=("D");
      input-=500;
      continue;
    }
    if(input>=400)
    {
      output.innerText +=("CD");
      input-=400;
      continue;
    }
    if(input>=300)
    {
      output.innerText +=("CCC");
      input-=300;
      continue;
    }
    if(input>=200)
    {
      output.innerText +=("CC");
      input-=200;
      continue;
    }
    if(input>=100)
    {
      output.innerText +=("C");
      input-=100;
      continue;
    }
    if(input>=90)
    {
      output.innerText +=("XC");
      input-=90;
      continue;
    }
    if(input>=80)
    {
      output.innerText +=("LXXX");
      input-=80;
      continue;
    }
    if(input>=70)
    {
      output.innerText +=("LXX");
      input-=70;
      continue;
    }
    if(input>=60)
    {
      output.innerText +=("LX");
      input-=60;
      continue;
    }
    if(input>=50)
    {
      output.innerText +=("L");
      input-=50;
      continue;
    }
    if(input>=40)
    {
      output.innerText +=("XL");
      input-=40;
      continue;
    }
    if(input>=30)
    {
      output.innerText +=("XXX");
      input-=30;
      continue;
    }
    if(input>=20)
    {
      output.innerText +=("XX");
      input-=20;
      continue;
    }
    if(input>=10)
    {
      output.innerText +=("X");
      input-=10;
      continue;
    }
    if(input>=9)
    {
      output.innerText +=("IX");
      input-=9;
      continue;
    }
    if(input>=8)
    {
      output.innerText +=("VIII");
      input-=8;
      continue;
    }
    if(input>=7)
    {
      output.innerText +=("VII");
      input-=7;
      continue;
    }
    if(input>=6)
    {
      output.innerText +=("VI");
      input-=6;
      continue;
    }
    if(input>=5)
    {
      output.innerText +=("V");
      input-=5;
      continue;
    }
    if(input>=4)
    {
      output.innerText +=("IV");
      input-=4;
      continue;
    }
    if(input>=3)
    {
      output.innerText +=("III");
      input-=3;
      continue;
    }
    if(input>=2)
    {
      output.innerText +=("II");
      input-=2;
      continue;
    }
    if(input==1)
    {
      output.innerText +=("I");
      input-=1;
      continue;
    }
  }
  
}

function error1(){
  output.style.backgroundColor = 'pink';
  output.style.borderColor = 'red';
  output.style.color = 'red';
  output.innerText = "Please enter a valid number";

}
function error2(){
  output.style.backgroundColor = 'pink';
  output.style.borderColor = 'red';
  output.style.color = 'red';
  output.innerText = "Please enter a number greater than or equal to 1";

}
function error3(){
  output.style.backgroundColor = 'pink';
  output.style.borderColor = 'red';
  output.style.color = 'red';
  output.innerText = "Please enter a number less than or equal to 3999";
}
