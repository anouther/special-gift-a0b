
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('The One I’m Lucky to Love').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Hi kakak sayang. Thank you for being so kind, thoughtful, and always here for me. I feel so lucky to love you and to be loved by you. You’re my favorite comfort, my calm, and my home. I love you wholeheartedly 🤍 -Eiren";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
