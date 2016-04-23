/**
 * Created by Iaroslav Zhbankov on 21.04.2016.
 */
$.receiveMessage(
    function(e){
        alert( e.data );
    },
    'http://localhost:8000/js-eng-init-clone/02-browser/08-project-iframe-parent-child/index2.html'
);
