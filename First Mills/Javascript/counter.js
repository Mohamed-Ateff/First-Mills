// $(document).ready(function () {
//   $(".counter").counterUp({
//     delay: 10,
//     time: 1000,
//   });
// });



// $(document).ready(function () {
//   $(".counter").each(function () {
//     const $el = $(this);
//     const finalValue = $el.text().replace(/,/g, "").trim();

//     // Run the counter
//     $el.counterUp({
//       delay: 10,
//       time: 1000,
//     });

//     // Force-set the correct final number after animation completes beacuse 2024 shows as 2023 so i added this
//     setTimeout(function () {
//       $el.text(Number(finalValue).toLocaleString());
//     }, 1100); // Added a buffer slightly longer than counter time
//   });
// });


$(document).ready(function () {
  $(".counter").each(function () {
    const $el = $(this);
    const finalText = $el.text().trim(); // Keep it as text exactly

    // Run the counter animation
    $el.counterUp({
      delay: 10,
      time: 1000,
    });

    // Force reassign original text exactly (no rounding, no commas)
    setTimeout(function () {
      $el.text(finalText);
    }, 1500);
  });
});
