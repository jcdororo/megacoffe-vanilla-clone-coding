var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'Ppe5NIRco8A',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'Ppe5NIRco8A',
      controls: 0
    },
    events: {
      onReady: function(event) {
        event.target.mute();
      }
    }
  });
}
