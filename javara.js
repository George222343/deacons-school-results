const urlParams = new URLSearchParams(window.location.search);
const passedValue = urlParams.get("value");

const nam = document.getElementById("name");
nam.textContent = passedValue;
const nam1 = document.getElementById("classname");
const nam2 = document.getElementById("alhan");
const nam3 = document.getElementById("taks");
const nam4 = document.getElementById("akeda");
const nam5 = document.getElementById("coptic");
const nam6 = document.getElementById("kodasAbsence");
const nam7 = document.getElementById("classAbsence");
const nam8 = document.getElementById("tasbhaAbsence");
const nam9 = document.getElementById("slok");
const nam00 = document.getElementById("total");
const nam01 = document.getElementById("moahl");
const nam02 = document.getElementById("finalkodas");
const nam03 = document.getElementById("finalHesa");
const nam04 = document.getElementById("finalTasbha");
const nam05 = document.getElementById("finalPresent");
const nn = document.getElementById("tt");
const moa = document.getElementById("mmm");
const dss = document.getElementById("totald");
const fsf = document.getElementById("ewe");
const copt = document.getElementById("copt");
const kod = document.getElementById("kod");
const sub = document.getElementById("finalSubjects");
const sas = document.getElementById("sas");
fetch("./المجمع.json")
  .then((response) => response.json())
  .then((data) => {
    const student = data.find((item) => item.name.includes(passedValue));
    nam1.innerText = student.className;

    if (student.alhan === -1) {
      nam2.innerText = "لم يؤدي الامتحان";
    } else {
      nam2.innerText = student.alhan.toFixed(1);
    }
    if (student.taks === -1) {
      nam3.innerText = "لم يؤدي الامتحان";
    } else {
      nam3.innerText = student.taks;
    }
    if (student.akeda === -1) {
      nam4.innerText = "لم يؤدي الامتحان";
    } else {
      nam4.innerText = student.akeda;
    }
    if (student.className === "مارقريوس ابو سيفين") {
      copt.style = "display: none;";
    } else {
      copt.style = "display: block;";
    }
    if (student.coptic === -1) {
      nam5.innerText = "لم يؤدي الامتحان";
    } else {
      nam5.innerText = student.coptic;
    }
    nam6.innerText = student.kodas;
    nam7.innerText = student.hesa;
    if (student.tasbha === -1) {
      nn.style = "display: none;";
    } else {
      nn.style = "display: block;";
    }
    nam8.innerText = student.tasbha;
    nam8.innerText = student.tasbha;
    nam9.innerText = student.totalPresent;
    const presenttt = Math.round(
      (student.totalPresent / student.finalPresent) * 100
    );
    if (presenttt < 50) {
      nam9.style.color = "red";
      fsf.style.color = "red";
    } else {
      nam9.style.color = "white";
      fsf.style.color = "white";
    }
    const persa = Math.round(
      (student.totalSubjects / student.finalSubjects) * 100
    );
    if (student.totalSubjects === -1) {
      nam00.innerText = "لا يوجد درجات للطالب";
    } else {
      nam00.innerText = student.totalSubjects.toFixed(1);
      if (persa < 50) {
        nam00.style.color = "red";
        dss.style.color = "red";
      } else {
        nam00.style.color = "white";
        dss.style.color = "white";
      }
    }
    nam01.innerText = student.Rehabilitation;
    if (
      student.Rehabilitation === "غير مؤهلة" ||
      student.Rehabilitation === "غير مؤهل"
    ) {
      moa.style.backgroundColor = "red";
    } else {
      moa.style.backgroundColor = "darkgreen";
    }
    nam02.innerText = student.finalKodas;
    nam03.innerText = student.finalHesa;
    nam04.innerText = student.finalTasbha;
    nam05.innerText = student.finalPresent;
    sub.innerText = student.finalSubjects;
    if(student.totalSubjects === -1){
      sas.style =  "display: none;";
    }
    else{ sas.style = "display: block;";}
    sas.onclick = () => {
      window.location.href =
        "thirdnatega.html?value=" + encodeURIComponent(passedValue);
    };
  });

  