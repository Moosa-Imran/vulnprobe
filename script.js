new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    scrollingSpeed: 1500,
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('scan-button').addEventListener('click', function () {
        Swal.fire({
            title: 'Scanning...',
            html: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>',
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
                // Simulate scanning process or API call
                setTimeout(() => {
                    const scanSuccessful = false; // Replace with actual scanning logic result
                    if (scanSuccessful) {
                        Swal.close(); // Close the SweetAlert when scanning is successful
                    } else {
                        // Display error message and option to join waitlist
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong! It\'s Not your Fault.',
                            footer: '<a href="https://forms.gle/VFnvfWKLwDfktFuA8" target="_blank">Join Waitlist</a>',
                            allowOutsideClick: false,
                            allowEscapeKey: false
                        });
                    }
                }, 3000); // Replace 3000 with the time needed for your scanning process
            }
        });
    });
});
