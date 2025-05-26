const btnNext = document.getElementById('next')
const btnPrevious = document.getElementById('previous')
const slider = document.querySelector('slider')
const card = document.querySelector('card')

const { width: slideWidth } = window.getComputedStyle(slider)
const { width: cardWidth } = window.getComputedStyle(card)

const slideProps = {
    width: parseInt(slideWidth),
    scroll: 0,
}

function controlSlide({ target: { id } }) {
    switch (id) {
        case 'next': {
            if (slideProps.scroll + slideProps.width < parseInt(cardWidht)) {
                slideProps.scroll += slideProps.width;
            }
            return slider.scrollLeft = slideProps.scroll;
        }
                    
        case 'previous':
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            return slider.scrollLeft = slideProps.scroll;

        default:
            break;
    }
}

btnNext.addEventListener('click', controlSlide)
btnPrevious.addEventListener('click, controlSlide')