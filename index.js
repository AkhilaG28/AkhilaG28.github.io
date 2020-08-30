let mode = document.getElementById('mode')
let theme =  document.getElementById('theme')

function changeMode(){
    console.log(mode.checked);
    console.log(theme);
    mode.checked ? (
        document.getElementById('themeName').textContent='Dark',theme.href="dark.css")
        :(document.getElementById('themeName').textContent='Light',theme.href="light.css")
}

mode.addEventListener("click",changeMode)
// let keyboard = document.getElementById( 'player' )
// window.addEventListener( 'load', () => {
//     let videos = document.querySelectorAll( '.video' )
//     for ( let i = 0; i < videos.length; i++ ) {
//         videos[ i ].addEventListener( 'click', playVideo )
//     }
// } )

// playVideo = () => {
//     let projectName = event.target.parentElement.previousElementSibling.textContent
//     console.log( projectName );
//     keyboard.load();
//     keyboard.play();
// }   

AOS.init( {
    disable: function () {
        var maxWidth = 746;
        return window.innerWidth < maxWidth;
    }
} )