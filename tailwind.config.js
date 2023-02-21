/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xmd': '970px',
      },
      colors: {
        'softRedFEM': 'hsl(7, 99%, 70%)',
        'yellowFEM': 'hsl(51, 100%, 49%)',
        'graphicDesignTextFEM': 'hsl(167, 40%, 24%)',
        'photographyTextFEM': 'hsl(198, 62%, 26%)',
        'footerFEM': 'hsl(168, 34%, 41%)',
        'desatBlueFEM': 'hsl(212, 27%, 19%)',
        'grayBlueFEM': 'hsl(210, 4%, 67%)',
        'darkGrayBlueFEM': 'hsl(232, 10%, 55%)',
        'darkerGrayBlueFEM': 'hsl(213, 9%, 39%)',
        'clientSectionFEM': 'hsl(25, 100%, 98%)',
        'footerBgFEM': 'hsl(166, 44%, 69%)'
      },
      fontFamily: {
        'barlow': 'Barlow, sans-serif',
        'fraunces': 'Fraunces, serif',
      },
      backgroundImage: {
        'heroMobile': 'url(../images/mobile/image-header.jpg)',
        'coneMobile': 'url(../images/mobile/image-gallery-cone.jpg)',
        'milkMobile': 'url(../images/mobile/image-gallery-milkbottles.jpg)',
        'orangeMobile': 'url(../images/mobile/image-gallery-orange.jpg)',
        'sugarMobile': 'url(../images/mobile/image-gallery-sugar-cubes.jpg)',
        'designMobile': 'url(../images/mobile/image-graphic-design.jpg)',
        'photographyMobile': 'url(../images/mobile/image-photography.jpg)',
        'standoutMobile': 'url(../images/mobile/image-stand-out.jpg)',
        'eggMobile': 'url(../images/mobile/image-transform.jpg)',
        
        'heroDesktop': 'url(../images/desktop/image-header.jpg)',
        'coneDesktop': 'url(../images/desktop/image-gallery-cone.jpg)',
        'milkDesktop': 'url(../images/desktop/image-gallery-milkbottles.jpg)',
        'orangeDesktop': 'url(../images/desktop/image-gallery-orange.jpg)',
        'sugarDesktop': 'url(../images/desktop/image-gallery-sugar-cubes.jpg)',
        'designDesktop': 'url(../images/desktop/image-graphic-design.jpg)',
        'photographyDesktop': 'url(../images/desktop/image-photography.jpg)',
        'standoutDesktop': 'url(../images/desktop/image-stand-out.jpg)',
        'eggDesktop': 'url(../images/desktop/image-transform.jpg)',
      }
    },
  },
  plugins: [],
}