barba.init({
    transitions: [{
        async leave(data) {
            const done = this.async();

            // GSAP animation for leaving the page
            gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5,
                onComplete: done,
            });
        },

        enter(data) {
            // GSAP animation for entering the new page
            gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    // Ensure opacity is reset to 1
                    gsap.set(data.next.container, { opacity: 1 });
                },
            });
        },
    }],
});
