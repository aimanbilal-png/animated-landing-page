
 

const revealElements = document.querySelectorAll(".reveal");


 

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            // Check if element is visible

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);



revealElements.forEach(function (element) {

    observer.observe(element);

});

