/**
 * Created by Iaroslav Zhbankov on 21.04.2016.
 */
window.addEventListener("message",
    function (e) {
        if (e.origin !== 'http://localhost:8000') {
            return;
        }
        if (e.data == "up") {
            window.scrollTo(0, 0);
        }
    },
    false);