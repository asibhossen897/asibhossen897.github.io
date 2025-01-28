class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span><span class="cursor">|</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const element = document.querySelector('.typewriter');
    const words = ['Asib Hossen', 'a Developer', 'a Designer'];
    const wait = 3000;
    
    new TypeWriter(element, words, wait);

    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    menuBtn.addEventListener('click', () => {
        const icon = menuBtn.querySelector('i');
        navMenu.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
} 