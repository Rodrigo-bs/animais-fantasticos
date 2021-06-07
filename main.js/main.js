(()=>{"use strict";class t{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const o=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){this.numeros.length&&this.observerTarget&&this.addMutationObserver()}}function e(t,e,i){const s=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>s.removeEventListener(t,n))),i())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,n)))})),t.setAttribute(o,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addlinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addlinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccoidionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccoidionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.tabContent[0].classList.add(this.activeClass),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",(t=>this.onMouseOver(t)))}))}init(){return this.tooltips.length&&this.addTooltipsEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.cliqueForaModal=this.cliqueForaModal.bind(this),this.toggleModal=this.toggleModal.bind(this)}toggleModal(t){t.preventDefault(),this.containerModal.classList.toggle("ativo")}cliqueForaModal(t){t.target===t.currentTarget&&this.toggleModal(t)}addModalEvent(){this.botaoAbrir.addEventListener("click",this.toggleModal),this.botaoFechar.addEventListener("click",this.toggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t,e,i){this.url=t,this.className=i,this.numberContainer=document.querySelector(e)}createAnimal(t){const e=document.createElement("div");return e.classList.add(this.className),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}createNumber(e){e.forEach((t=>{const e=this.createAnimal(t);this.numberContainer.appendChild(e)})),new t("[data-numero]",".numeros","ativo").init()}fetchAnimais(t){try{fetch(t).then((t=>t.json())).then((t=>this.createNumber(t)))}catch(t){console.log(t)}}init(){this.className&&this.numberContainer&&this.fetchAnimais(this.url)}}("http://127.0.0.1:5500/animaisapi.json",".numeros-grid","numero-animal").init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.className=e,this.handleClick=this.handleClick.bind(this)}handleClick(t){t.preventDefault(),t.currentTarget.classList.add(this.className),this.dropdownMenus.forEach((t=>{e(t,["touchstart","click"],(()=>{t.classList.remove(this.className)}))}))}adicionarEvents(){this.dropdownMenus.forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,this.handleClick)}))}))}init(){this.dropdownMenus.length&&this.adicionarEvents()}}("[data-dropdown]","active").init(),function(){const t=document.querySelector('[data-menu="button"]'),i=document.querySelector('[data-menu="list"]'),s=["click","touchstart"];function o(){i.classList.add("active"),t.classList.add("active"),e(i,s,(()=>{i.classList.remove("active"),t.classList.remove("active")}))}t&&s.forEach((e=>t.addEventListener(e,o)))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),s=new Date,o=s.getDay(),n=s.getHours(),a=-1!==e.indexOf(o),r=n>=i[0]&&n<i[1];a&&r&&t.classList.add("aberto")}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>console.log(Error(t)))),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function i(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(i(),window.addEventListener("scroll",i))}()})();