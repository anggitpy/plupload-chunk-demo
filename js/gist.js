$("form").submit(function(e) {
    var uploader = $("#uploader").pluploadQueue();

    // Validate number of uploaded files
    if (uploader.total.uploaded == 0) {
        // Files in queue upload them first
        if (uploader.files.length > 0) {
            // When all files are uploaded submit form
            uploader.bind("StateChanged", function() {
                if (uploader.total.uploaded == uploader.files.length)
                    $("form").submit();
            });

            uploader.start();
        } else
            alert("You must at least upload one file.");

        e.preventDefault();
    }
});