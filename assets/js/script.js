const target = "Miúda mais incrível"; 

const text = `No meio de tanta emoções e distrações no dia a dia, há conexões que surgem para trazer leveza e fazer as coisas fazerem mais sentido.\n\nQueria apenas que soubesses, da forma mais sincera possível, que a tua presença acalma o meu caos e o teu sorriso consegue mudar o ritmo de qualquer dia comum. Tens uma energia única e cativante.\n\nPara mim, tu és a miúda mais incrível que já conheci, e poder partilhar momentos e conversas contigo é, sem dúvida, o meu detalhe favorito da rotina. Obrigado por seres exatamente quem és. ❤️`;

function revelarSurpresa() {
    const audio = document.getElementById('musica');
    audio.volume = 0.4; 
    audio.play().catch(e => console.log("Áudio aguardando permissão"));

    document.getElementById('botao').style.display = 'none';
    
    const heading = document.getElementById('titulo');
    heading.innerText = `Para a ${target}`;
    heading.style.color = "#ff4d6d";
    heading.style.fontWeight = "600";
    heading.style.fontSize = "22px";
    heading.style.textShadow = "0 0 15px rgba(255, 77, 109, 0.7)";

    typeEffect(document.getElementById('conteudo-secreto'), text, 0, () => {
        const box = document.getElementById('conteudo-secreto');
        box.innerHTML = box.innerHTML.replace(
            "tu és a miúda mais incrível", 
            '<span class="destaque">tu és a miúda mais incrível</span>'
        );

        const footerWrapper = document.createElement('div');
        footerWrapper.style.marginTop = "35px";
        footerWrapper.style.textAlign = "right";
        footerWrapper.style.opacity = "0";
        footerWrapper.style.transition = "opacity 1.2s ease";

        const footerText = document.createElement('p');
        footerText.innerText = "Com todo o meu carinho, Alguém Especial";
        footerText.style.color = "#ff4d6d";
        footerText.style.fontSize = "15px";
        footerText.style.fontWeight = "500";
        footerText.style.marginBottom = "10px";

        const contactBtn = document.createElement('a'); 
        contactBtn.href = "https://wa.me/244952850762?text=Ol%C3%A1!%20Vi%20a%20tua%20surpresa.";
        contactBtn.target = "_blank";
        contactBtn.innerText = "→";

        contactBtn.style.display = "inline-block";
        contactBtn.style.textDecoration = "none"; 
        contactBtn.style.color = "#fff"; 
        contactBtn.style.background = "rgba(255, 77, 109, 0.2)";
        contactBtn.style.border = "1px solid #ff4d6d";
        contactBtn.style.padding = "8px 16px";
        contactBtn.style.borderRadius = "20px";
        contactBtn.style.fontSize = "13px";

        footerWrapper.appendChild(footerText);
        footerWrapper.appendChild(contactBtn);
        box.appendChild(footerWrapper);

        setTimeout(() => footerWrapper.style.opacity = "1", 100);
    });

    setInterval(spawnHeart, 100);
}

function typeEffect(element, content, i, callback) {
    if (i < content.length) {
        if (content.substring(i, i + 2) === '\n\n') {
            element.innerHTML += '<br><br>';
            i += 2;
        } else {
            element.innerHTML += content.charAt(i);
            i++;
        }
        setTimeout(() => typeEffect(element, content, i, callback), 40);
    } else if (callback) {
        callback();
    }
}

function spawnHeart() {
    const item = document.createElement('div');
    item.classList.add('coracao');
    
    const set = ['❤️', '💖', '✨', '❤️','😘'];
    item.innerText = set[Math.floor(Math.random() * set.length)];
    
    item.style.left = Math.random() * 100 + 'vw';
    item.style.setProperty('--lateral', (Math.random() * 80 - 40) + 'px');
    item.style.setProperty('--rotacao', (Math.random() * 360) + 'deg');
    
    const randomSize = (Math.random() * 18 + 16) + 'px';
    item.style.fontSize = randomSize;
    item.style.animationDuration = (Math.random() * 2 + 2.8) + 's'; 
    
    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 4000);
}