function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    if(pageId === 'collection') {
        filterNFT('all');
    }
}

const nfts = [
    { type: 'ape', name: 'Angry Monkey', price: '4.2 ETH', img: 'AngryMonkeyNFT.jpg' },
    { type: 'car', name: 'Neon Gatsby Car', price: '15 ETH', img: 'NeonGatsbyNFT.jpg' },
    { type: 'error', name: 'Error Nft', price: '0.9 ETH', img: 'ErrorNFT.jpg' },
    { type: 'nasa', name: 'Nasa`s Chameleon', price: '2.1 ETH', img: 'Nasa`sChameleonNFT.jpg' },
    { type: 'ape', name: 'Confused Monkey', price: '6.5 ETH', img: 'ConfusedMonkeyNFT.jpg' },
    { type: 'car', name: 'Cyber Stratos Car', price: '9 ETH', img: 'CyberStratosNFT.jpg' }
];

function filterNFT(category) {
    const grid = document.getElementById('nftGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' ? nfts : nfts.filter(n => n.type === category);
    
    filtered.forEach(nft => {
        const div = document.createElement('div');
        div.className = 'nft-card';
        div.innerHTML = `
            <img src="${nft.img}" alt="${nft.name}">
            <div style="display:flex; justify-content:space-between; margin-top:15px">
                <h4>${nft.name}</h4>
                <b style="color:#00f2ff">${nft.price}</b>
            </div>
            <button class="btn-primary" style="width:100%; margin-top:15px; background:transparent; border:1px solid var(--primary)">Teklif Ver</button>
        `;
        grid.appendChild(div);
    });
}

function connectWallet() {
    alert("Web3 Cüzdan Bağlantısı Başlatıldı...");
}