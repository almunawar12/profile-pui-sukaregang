
    document.addEventListener('DOMContentLoaded', function(){
        let typed = new Typed('.typed-text', {
            strings: ["Welcome to ArCe"],
            typeSpeed: 100, // Kecepatan ketik (ms)
            backSpeed: 50, // Kecepatan menghapus teks (ms)
            loop: false, // Tidak mengulang animasi
            showCursor: false // Menghilangkan kursor kedip-kedip
        });

        let typed2 = new Typed('.typed-text-2', {
            strings: ["Aman, Cepat dan Terpercaya"],
            typeSpeed: 50, // Kecepatan ketik (ms)
            backSpeed: 50, // Kecepatan menghapus teks (ms)
            loop: false, // Tidak mengulang animasi
            showCursor: false // Menghilangkan kursor kedip-kedip
        });
    });
    const myCarousel = document.getElementById('myCarousel')
    myCarousel.addEventListener('slid.bs.carousel', function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
      document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
    })
