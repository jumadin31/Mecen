window.onload=function(){
    const url ="https://www.youtube.com/watch?v=dOKdDK9ch2E";
    const videoId = getYouTubeVideoID(url);

    if(videoId){
        const iframe = document.createElement('iframe');
        iframe.src =`https://www.youtube.com/watch?v=dOKdDK9ch2E${videoId}`;
        iframe.allow="accelerometer; autoplay;clipboard-write;gyroscope;picture-in-picture";
        iframe.allowFullscreen = true;
        const continer = document.getElementById('videoContainer');
        continer.appendChild(iframe);

    }

};
function getYouTubeVideoID(url){
    const registr =/^.*(?:youtu\.be\/|v=|\/|\/v\/)([^#$?]*).*/;
    const text = url.match(registr);
    return text && text[1].length === 11? text[1] : null;
}
