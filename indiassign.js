document.querySelector('.scroll-button').addEventListener('click', () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' });
});
/*
when an element with the class 'scroll-button' is clicked,
 the page will smoothly scroll to the vertical position of 1500 pixels from the top.

 1.document.querySelector('.scroll-button'):will add element with name scroll-button.
 2.addEventListener('click', () => :when click the function will be executed.
 3. window.scrollTo({ top: 1500, behavior: 'smooth' }):to smoothly scroll to the specified position 
 which is top: 1500, behavior: 'smooth' 
 */
