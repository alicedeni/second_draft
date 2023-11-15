let courses = new Map();
courses.set("Информатика и вычислительная техника", "ИВТ");
courses.set("Информационная безопасность", "ИБ");
courses.set("Прикладная математика", "ПМ");
courses.set("Прикладная математика и информатика", "ПМИ");

function eventWork(value) {
    let work = document.querySelector('#work2');
    work.textContent = value;
}
function myFunction() {
    document.querySelector("#myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.querySelector("#myDropdown2").classList.toggle("show2");
}

function myFunction3() {
    document.querySelector("#myDropdown3").classList.toggle("show3");
}
window.onclick = function(event) {
    if (event.target.matches('.v2')) {
        let text2 = event.target.textContent;
        let dropdowns2 = document.getElementsByClassName("dropdown-content2");
         let i;
        for (i = 0; i < dropdowns2.length; i++) {
            let openDropdown2 = dropdowns2[i];
            if (openDropdown2.classList.contains('show2')) {
                document.querySelector('#step2').textContent = text2;
                openDropdown2.classList.remove('show2');
                if (document.querySelector('#student').checked)
                    document.querySelector('#education23').textContent = text2 + ',';
            }
        }
    }
    else if (event.target.matches('.v1')) {
        let text1 = event.target.textContent;
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            document.querySelector('#step1').textContent = text1;
            openDropdown.classList.remove('show');
            if (document.querySelector('#student').checked)
                document.querySelector('#education22').textContent = text1 + ',';
          }
        }
      }
    else if (event.target.matches('.v3')) {
        let dropdowns3 = document.getElementsByClassName("dropdown-content3");
        let i;
        let text3 = event.target.textContent;
        for (i = 0; i < dropdowns3.length; i++) {
          let openDropdown3 = dropdowns3[i];
          if (openDropdown3.classList.contains('show3')) {
            document.querySelector('#step3').textContent = text3;
            openDropdown3.classList.remove('show3');
            if (document.querySelector('#student').checked)
                document.querySelector('#education24').textContent = courses.get(text3);
          }
        }
      }
  }




window.addEventListener("DOMContentLoaded",() => {
    let range = new rSlider({
        element: "#range",
        tick: 1
    });
});
class rSlider {
    constructor(args) {
        this.el = document.querySelector(args.element);
        this.min = +this.el.min || 0;
        this.max = +this.el.max || 100;
        this.step = +this.el.step || 1;
        this.tick = args.tick || this.step;
        this.addTicks();
        this.dataRange = document.createElement("div");
        this.dataRange.className = "data-range";
        this.el.parentElement.appendChild(this.dataRange,this.el);    
        this.updatePos();
        this.el.addEventListener("input",() => {
            this.updatePos();
        });
    }
    addTicks() {
        let wrap = document.createElement("div");
        wrap.className = "range";
        this.el.parentElement.insertBefore(wrap,this.el);
        wrap.appendChild(this.el);
        let ticks = document.createElement("div");
        ticks.className = "range-ticks";
        wrap.appendChild(ticks);
        for (let t = this.min; t <= this.max; t += this.tick) {
            let tick = document.createElement("span");
            tick.className = "range-tick";
            ticks.appendChild(tick);
            let tickText = document.createElement("span");
            tickText.className = "range-tick-text";
            tick.appendChild(tickText);
            tickText.textContent = t;
        }
    }    
    getRangePercent() {
        let max = this.el.max,
        min = this.el.min,
        relativeValue = this.el.value - min,
        ticks = max - min,
        percent = relativeValue / ticks;
        return percent;
    }    
    updatePos() {
        let percent = this.getRangePercent(),
        left = percent * 100,
        emAdjust = percent * 3;
        this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;
        this.dataRange.innerHTML = this.el.value;
    }    
}  

function eventRange() {
    if (document.querySelector('#student').checked)
        document.querySelector('#education21').textContent = document.querySelector('#range').value + ' курс,';
}

function eventGalka() {
    if (document.querySelector('#student').checked)
        document.querySelector('#education21').textContent = 'Выпускник,';

}