document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

// something fishy
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('R 2=`1-w:v;u-t:-0.d 0.d 0#f,0.e 0.e 0#f;`;3.4(\'%c🚀 m b q 🚀\',\'1-9: p; 5: #o;\'+2);3.4(\'%n: l\',\'5: #7;1-6: 8;\'+2);3.4(\'%c   \',\'1-9:g; i:h(j://k.x-r.z/A/Q/y.P) O-N;\');3.4("%M\'s L, K\'s b J. I H G.",\'5: #7;1-6: 8;\'+2);3.4(\'%c— F a E D C @B\',\'5: #7;1-6: 8;\'+2);',54,54,'|font|css|console|log|color|style|6388cf|italic|size||the||0075em|035em|2b50dc|100px|url|background|https|emoji|Brndn|Build|cIntroducing|fcc2c1|2rem|Future|edge||shadow|text|bold|weight|slack|fd77c1c84b0801e4|com|TRE7KK3C1|itsmingjie|from|hello|warm|sending|visiting|for|Thanks|message|that|it|cThat|repeat|no|png|brandon|var'.split('|'),0,{}))
