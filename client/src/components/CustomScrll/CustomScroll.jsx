const CustomScroll = (element, scrollSpeed) => {
  element.addEventListener("wheel", (e) => {
    e.preventDefault();
    const deltaY = e.deltaY;
    element.scrollTop += deltaY * scrollSpeed;
  });
};

export default CustomScroll;
