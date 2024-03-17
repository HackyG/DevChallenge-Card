window.addEventListener('load', function() {
    // Ensure the elements are fully loaded
    var tagsContainer = document.querySelector('.tags');
    var ul = tagsContainer.querySelector('ul');

    // Calculate the width
    var containerWidth = tagsContainer.offsetWidth;
    var ulWidth = ul.offsetWidth;
    var maxX = containerWidth - ulWidth;

    // Apply GSAP Draggable
    Draggable.create(".tags ul", {
      type: "x",
      bounds: tagsContainer,
      inertia: true,
      edgeResistance: 0.1,
      onClick: function() {
        console.log("clicked");
      },
      onDragEnd: function() {
        console.log("drag ended");
      },
      onDrag: function() {
        // Adjust bounds dynamically if necessary, e.g., if contents change size
        var newUlWidth = ul.offsetWidth;
        var newMaxX = containerWidth - newUlWidth;
        this.applyBounds({minX: newMaxX, maxX: 0});
      }
    });
  });