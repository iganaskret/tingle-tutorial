import tingle from "tingle.js";

// instanciate new modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen: function() {
    console.log("modal open");
  },
  onClose: function() {
    console.log("modal closed");
  },
  beforeClose: function() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  }
});

// set content
modal.setContent("<h1>This is my content</h1>");

// add a button
modal.addFooterBtn("Cancel", "tingle-btn tingle-btn--primary", function() {
  // here goes some logic
  modal.close();
});

document
  .querySelector("button.open-modal")
  .addEventListener("click", () => modal.open());

// close modal
modal.close();
