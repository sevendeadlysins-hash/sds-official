document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');

    // メニュー開閉
    menuBtn.onclick = () => navMenu.classList.toggle('open');

    // ページ切り替え
    navLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-page');
            navMenu.classList.remove('open');
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(`page-${target}`).classList.add('active');
            
            if(target === 'cast') backToCastSelect();
            window.scrollTo(0, 0);
        };
    });
});

const castData = {
    envy: {
        name: "Envidia J'acinto",
        jpName: "エンヴィディア ハシント",
        sin: "Envy / 嫉妬",
        like: "\n甘い物、オーナー、お姫様",
        skill: "\n紅茶占い、タロット占い",
        message: "お姫様と楽しい時間を過ごせたら良いなぁ～♡\nあ、そうそう、俺ねぇ～占い得意なの♡特別にオーナーから教えてもらったんだぁ♡\nお姫様の事も隅から隅まで知りたいから占わせてよ♡",
        img: "Envidia J'acinto.png"
    },
    lust: {
        name: "Yu White",
        jpName: "ユウ ホワイト",
        sin: "Lust / 色欲",
        like: "\n甘い物、バラとサクラ",
        skill: "\n記憶力がちょっといいかも？",
        message: "沢山愛して、ね？",
        img: "Yu White.png"
    },
    pride: {
        name: "Rhea Kukvos",
        jpName: "レア ククヴォス",
        sin: "Pride / 傲慢",
        like: "\n酒",
        skill: "\nカードゲーム",
        message: "勘違いしていい。\n態々時間を割いてやるんだ、俺を選んだ幸運を噛み締めると良い。",
        img: "Rhea Kukvos.png"
    },
    gluttony: {
        name: "Nepenthes Plant",
        jpName: "ネペンテス プラント",
        sin: "Gluttony / 暴食",
        like: "\n食べ物全般、お姫様",
        skill: "\n紅茶占い、タロット占い",
        message: "ここに来たら美味しいものが食べられるって聞いたんだけど。\nでも食べるのも良いけど、お姫様とお話するのも楽しいかもしれないなぁ…。\n僕ともっとお話しして？僕の事お腹いっぱいにしてよ。",
        img: "Nepenthes Plant.png"
    }
};

function showCastDetail(key) {
    const data = castData[key];
    if (!data) return;

    document.getElementById('detail-sin-title').innerText = data.sin;
    document.getElementById('detail-name').innerText = data.name;
    document.getElementById('detail-jp-name').innerText = data.jpName;
    document.getElementById('detail-like').innerText = data.like;
    document.getElementById('detail-skill').innerText = data.skill;
    document.getElementById('detail-message').innerHTML = data.message.replace(/\n/g, '<br>');
    document.getElementById('detail-img-src').src = data.img;

    document.getElementById('cast-select-container').style.display = 'none';
    document.getElementById('cast-detail-view').style.display = 'block';
    window.scrollTo(0, 0);
}

function backToCastSelect() {
    document.getElementById('cast-select-container').style.display = 'block';
    document.getElementById('cast-detail-view').style.display = 'none';
}