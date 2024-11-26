window.onload = function() {
    var opts = {
        globalCompositeOperation: 'lighter',
        renderHandler: function(currTime) {
            // Render handler logic here
        }
    };

    var ctx = document.getElementById('cv').getContext('2d');
    var imageSrcList = ctx.canvas.innerHTML.trim().split(/\s+/);
    var ks = kaleidoscope(ctx, imageSrcList, opts);

    // Handle title fade-out on click
    document.body.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        var canvas = document.getElementById('cv');
        popup.classList.add('fade-out');
        canvas.classList.add('clear-blur');
        setTimeout(function() {
            popup.style.display = 'none';
            ks.stopMovementAfterDelay(1000); // Stop movement after 1 second
        }, 500); // Match the transition duration
    });
};