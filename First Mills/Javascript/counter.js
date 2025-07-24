// $(document).ready(function () {
//   $(".counter").counterUp({
//     delay: 10,
//     time: 1000,
//   });
// });



$(document).ready(function () {
    function animateCount($el, finalValue, duration = 1000) {
      let start = null;
      const isFloat = finalValue.includes(".");
      const target = parseFloat(finalValue.replace(/,/g, ""));
      const decimals = isFloat ? finalValue.split(".")[1].length : 0;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = target * progress;
        const formatted = isFloat
          ? current.toFixed(decimals)
          : Math.floor(current);

        $el.text(formatted);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          $el.text(finalValue); // Ensure exact final value
        }
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const $el = $(entry.target);

            if ($el.data("counted")) return;
            $el.data("counted", true);

            const finalText = $el.text().trim();
            animateCount($el, finalText);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Only needs to be 25% visible
      }
    );

    $(".counter").each(function () {
      observer.observe(this);
    });
  });
