https://demo.goodlayers.com/kingster/homepage-2/


/* Reset and base styles */ body { margin: 0; padding: 0; font-family: 'Sans-serif', sans-serif; font-size: 16px; line-height: 1.6; overflow-x: hidden; }

body::-webkit-scrollbar { width: 12px; }

body::-webkit-scrollbar-track { background: white; border-radius: 12px; margin: 4px 0; }

body::-webkit-scrollbar-thumb { background: rgb(115, 115, 115); border-radius: 30px; border: 3px solid rgb(115, 115, 115); }

/* Header */ #hedd { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background: url(images/loaf.jpg) no-repeat left top, url(images/board.jpg) no-repeat right top; background-size: cover; padding: 1rem; height: auto; font-family: 'Libre Caslon Display'; }

#call { padding-top: 15px; height: 30px; }

#menu { font-size: small; }

#menu a { text-decoration: none; font-weight: 600; color: rgb(63, 62, 62); padding: 0.5rem; font-size: 18px; }

#menu a:hover { color: rgba(175, 96, 42, 0.65); }

/* Headings */ .headingg, .headinggg, .headingg2, .headingg3, .headingg33, .headingg5, .headingg6, .headingg61, .headingg62 { font-family: 'Libre Caslon Display'; color: #2a2a2a; font-weight: 400; line-height: 1.2; text-align: center; padding: 0.5rem 1rem; }

.headingg { font-size: 4rem; } .headingg2 { font-size: 2.5rem; padding-bottom: 2rem; } .headingg3, .headingg5, .headingg33 { text-align: left; padding-left: 1rem; font-size: 2rem; }

/* Subheadings */ .subheadingg, .subheadingg2, .subheadingg1, .subheadingg11, .subheadingg112 { font-size: 1.125rem; font-weight: 350; padding: 2rem 1rem; color: rgba(141, 78, 6, 0.589); text-align: center; }

.subheadingg1, .subheadingg11, .subheadingg112 { text-align: left; }

.subheadingg112 { font-size: 1.375rem; }

/* Buttons */ .button, .button1, .buttonn { display: flex; justify-content: center; align-items: center; border-radius: 1000px; padding: 1rem 1.5rem; font-size: 1rem; width: 90%; max-width: 250px; margin: 1rem auto; transition: 0.4s; cursor: pointer; border: none; }

.button, .button1 { background-color: #1b1a1a; color: #fff; }

.buttonn { background-color: #fff; color: #000; border: 1px solid #fff; }

.button:hover, .button1:hover { background-color: rgba(175, 96, 42, 0.65); }

.buttonn:hover { background-color: #000; color: #fff; border-color: #000; }

/* Section Layouts */ .secgray, .secwhiteaftergrey, .lastsecgray { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem 1rem; background-color: #f1f4ef; background-size: cover; background-position: center; }

.secgray { background: url('images/wheatt.jpg') no-repeat bottom center, url(images/cookie.jpg) no-repeat top center; }

.secwhiteaftergrey { background-color: #fff; }

.lastsecgray { height: auto; }

/* Text Blocks */ .greyy, .greyy1, .greyy2, .greyy3, .greyy32, .greyy33 { color: gray; font-size: 1.125rem; font-weight: 300; font-family: 'Noto sans'; line-height: 1.5; text-align: center; padding: 1rem; }

.greyy1, .greyy2, .greyy3, .greyy32, .greyy33 { text-align: left; }

.greyy33 a { text-decoration: none; font-size: 1.75rem; color: #777; }

.greyy33 a:hover { color: rgba(175, 96, 42, 0.65); }

/* Flex Layouts */ .flex-row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1.5rem; padding: 1rem; }

.text-block, .image-block { flex: 1 1 45%; min-width: 280px; }

/* Images and Videos */ img, video { max-width: 100%; height: auto; display: block; }

#myVideo { width: 100%; height: auto; object-fit: cover; }

/* Responsive Queries */ @media (max-width: 1024px) { .headingg { font-size: 3rem; } .headingg2 { font-size: 2rem; } .headingg3, .headingg5, .headingg33 { font-size: 1.75rem; } .subheadingg112 { font-size: 1.125rem; } #hedd { flex-direction: column; text-align: center; } .flex-row { flex-direction: column; align-items: center; } }

@media (max-width: 768px) { .headingg { font-size: 2.5rem; } .headingg2, .headingg3, .headingg5 { font-size: 1.5rem; } .subheadingg, .subheadingg1, .subheadingg11, .subheadingg2 { font-size: 1rem; padding: 1rem; } .button, .button1, .buttonn { font-size: 0.9rem; padding: 0.8rem; } .text-block, .image-block { flex: 1 1 100%; } #menu a { font-size: 1rem; } }

@media (max-width: 480px) { .headingg { font-size: 2rem; } .button, .button1, .buttonn { width: 100%; font-size: 0.875rem; } .subheadingg112 { font-size: 1rem; } .greyy33 a { font-size: 1.25rem; } }
