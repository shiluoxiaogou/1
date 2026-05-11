// 热门短剧数据
const shortDramas = [
    { id: 1, title: '重生八零：开局娶了校花', views: '2.3亿', likes: '568万', episodes: 80, category: 'reborn', tags: ['#重生', '#年代', '#爱情'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=80s%20chinese%20drama%20romance%20vintage%20style&image_size=landscape_4_3' },
    { id: 2, title: '闪婚后，总裁每天都在装穷', views: '1.8亿', likes: '423万', episodes: 50, category: 'romance', tags: ['#言情', '#总裁', '#甜宠'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20chinese%20romance%20drama%20business%20man&image_size=landscape_4_3' },
    { id: 3, title: '修仙从卖烧烤开始', views: '9800万', likes: '312万', episodes: 60, category: 'xianxia', tags: ['#仙侠', '#逆袭', '#轻松'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=chinese%20fantasy%20immortal%20cultivation%20street%20food&image_size=landscape_4_3' },
    { id: 4, title: '我在精神病院学斩神', views: '1.5亿', likes: '389万', episodes: 72, category: 'urban', tags: ['#都市', '#热血', '#玄幻'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=urban%20fantasy%20action%20drama%20mysterious%20hospital&image_size=landscape_4_3' },
    { id: 5, title: '穿越古代：我靠美食征服全世界', views: '1.2亿', likes: '276万', episodes: 45, category: 'time', tags: ['#穿越', '#美食', '#种田'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=ancient%20chinese%20cuisine%20food%20drama%20royal&image_size=landscape_4_3' },
    { id: 6, title: '离婚后，她惊艳了全世界', views: '2.1亿', likes: '456万', episodes: 65, category: 'romance', tags: ['#言情', '#逆袭', '#爽文'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20woman%20empowerment%20romance%20drama&image_size=landscape_4_3' },
    { id: 7, title: '全球冰封：我打造了末日安全屋', views: '8900万', likes: '234万', episodes: 55, category: 'suspense', tags: ['#悬疑', '#末日', '#求生'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=apocalyptic%20ice%20world%20survival%20bunker&image_size=landscape_4_3' },
    { id: 8, title: '开局地摊卖大力丸', views: '7600万', likes: '189万', episodes: 40, category: 'comedy', tags: ['#喜剧', '#穿越', '#搞笑'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=comedy%20chinese%20period%20drama%20street%20vendor&image_size=landscape_4_3' },
    { id: 9, title: '退婚后，我成了真千金', views: '1.6亿', likes: '345万', episodes: 58, category: 'urban', tags: ['#都市', '#豪门', '#爽文'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20rich%20family%20drama%20young%20woman&image_size=landscape_4_3' },
    { id: 10, title: '穿成炮灰女配后我逆袭了', views: '1.3亿', likes: '267万', episodes: 48, category: 'time', tags: ['#穿越', '#女配', '#逆袭'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=fantasy%20novel%20female%20lead%20costume%20drama&image_size=landscape_4_3' },
    { id: 11, title: '我的徒弟都是大反派', views: '9200万', likes: '298万', episodes: 52, category: 'xianxia', tags: ['#仙侠', '#系统', '#轻松'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=chinese%20xianxia%20master%20disciples%20fantasy&image_size=landscape_4_3' },
    { id: 12, title: '四合院：从暴打傻柱开始', views: '8500万', likes: '245万', episodes: 44, category: 'reborn', tags: ['#年代', '#重生', '#打脸'], image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=chinese%20siheyuan%20courtyard%20period%20drama&image_size=landscape_4_3' },
];

// 排行榜数据
const rankingData = [
    { rank: 1, title: '重生八零：开局娶了校花', views: '2.3亿', likes: '568万', episodes: 80, image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=80s%20chinese%20drama%20romance%20vintage%20style&image_size=portrait_4_3' },
    { rank: 2, title: '离婚后，她惊艳了全世界', views: '2.1亿', likes: '456万', episodes: 65, image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20woman%20empowerment%20romance%20drama&image_size=portrait_4_3' },
    { rank: 3, title: '闪婚后，总裁每天都在装穷', views: '1.8亿', likes: '423万', episodes: 50, image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20chinese%20romance%20drama%20business%20man&image_size=portrait_4_3' },
    { rank: 4, title: '我在精神病院学斩神', views: '1.5亿', likes: '389万', episodes: 72, image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=urban%20fantasy%20action%20drama%20mysterious%20hospital&image_size=portrait_4_3' },
    { rank: 5, title: '退婚后，我成了真千金', views: '1.6亿', likes: '345万', episodes: 58, image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20rich%20family%20drama%20young%20woman&image_size=portrait_4_3' },
];

// DOM元素
let hotGrid, categoryGrid, categoryBtns, indicators, generateBtn;
let playModal, playTitle, episodeList, aiResultModal;
let resultTitle, resultGenre, resultEpisodes, resultScript, navLinks;

// 生成短剧卡片
function createDramaCard(drama) {
    return `
        <div class="drama-card" onclick="openPlayModal(${drama.id})">
            <div class="drama-cover" style="background-image: url('${drama.image}'); background-size: cover; background-position: center;">
                <div class="cover-overlay"></div>
                <i class="fas fa-play-circle play-icon"></i>
            </div>
            <div class="drama-info">
                <h3 class="drama-title">${drama.title}</h3>
                <div class="drama-stats">
                    <span><i class="fas fa-eye"></i> ${drama.views}</span>
                    <span><i class="fas fa-heart"></i> ${drama.likes}</span>
                    <span>${drama.episodes}集</span>
                </div>
                <div class="drama-tags">
                    ${drama.tags.map(tag => `<span class="drama-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// 渲染热门短剧
function renderHotDramas() {
    const hotDramas = shortDramas.slice(0, 8);
    hotGrid.innerHTML = hotDramas.map(createDramaCard).join('');
}

// 渲染分类短剧
function renderCategoryDramas(category) {
    let filteredDramas = shortDramas;
    if (category !== 'all') {
        filteredDramas = shortDramas.filter(d => d.category === category);
    }
    categoryGrid.innerHTML = filteredDramas.map(createDramaCard).join('');
}

// 渲染排行榜
function renderRanking() {
    const rankingList = document.querySelector('.ranking-list');
    rankingList.innerHTML = rankingData.map(item => `
        <div class="ranking-item" onclick="openPlayModal(${item.rank})">
            <span class="rank-number ${item.rank <= 3 ? 'top' : ''}">${item.rank}</span>
            <div class="ranking-cover" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
            <div class="ranking-info">
                <h4 class="ranking-title">${item.title}</h4>
                <div class="ranking-stats">
                    <span><i class="fas fa-eye"></i> ${item.views}</span>
                    <span><i class="fas fa-heart"></i> ${item.likes}</span>
                    <span>${item.episodes}集</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 打开播放弹窗
function openPlayModal(dramaId) {
    const drama = shortDramas.find(d => d.id === dramaId) || rankingData.find(r => r.rank === dramaId);
    if (drama) {
        playTitle.textContent = drama.title;
        episodeList.innerHTML = '';
        for (let i = 1; i <= Math.min(drama.episodes, 20); i++) {
            episodeList.innerHTML += `
                <div class="episode-item">
                    <span class="episode-number">${i}</span>
                    <span class="episode-title">第${i}集</span>
                    <span class="episode-duration">03:45</span>
                </div>
            `;
        }
        playModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// 关闭播放弹窗
function closePlayModal() {
    playModal.style.display = 'none';
    document.body.style.overflow = '';
}

// 关闭AI结果弹窗
function closeAIResultModal() {
    aiResultModal.style.display = 'none';
    document.body.style.overflow = '';
}

// 初始化函数
function init() {
    // 获取DOM元素
    hotGrid = document.getElementById('hotGrid');
    categoryGrid = document.getElementById('categoryGrid');
    categoryBtns = document.querySelectorAll('.category-btn');
    indicators = document.querySelectorAll('.indicator');
    generateBtn = document.getElementById('generateBtn');
    playModal = document.getElementById('playModal');
    playTitle = document.getElementById('playTitle');
    episodeList = document.getElementById('episodeList');
    aiResultModal = document.getElementById('aiResultModal');
    resultTitle = document.getElementById('resultTitle');
    resultGenre = document.getElementById('resultGenre');
    resultEpisodes = document.getElementById('resultEpisodes');
    resultScript = document.getElementById('resultScript');
    navLinks = document.querySelectorAll('.nav-link');

    // AI生成短剧
    generateBtn.addEventListener('click', () => {
        const prompt = document.getElementById('aiPrompt').value;
        const genre = document.getElementById('aiGenre').value;
        const length = document.getElementById('aiLength').value;
        
        const genreNames = {
            romance: '言情',
            reborn: '重生',
            xianxia: '仙侠',
            urban: '都市',
            time: '穿越'
        };
        
        const episodeCounts = {
            short: 10,
            medium: 20,
            long: 50
        };
        
        const scripts = [
            '一场意外的穿越，让平凡的主人公来到了一个陌生的世界。在这里，他/她必须凭借智慧和勇气，一步步揭开隐藏的秘密，最终实现逆袭。',
            '豪门恩怨，爱恨情仇。当真相浮出水面，主角该如何面对这一切？是选择原谅，还是选择复仇？',
            '修仙之路，困难重重。但主角凭借不屈的意志和奇遇，一步步攀登巅峰，成为一代传奇。',
            '现代都市，隐藏着无数的机遇与挑战。主角从底层起步，凭借努力和智慧，创造了属于自己的商业帝国。',
            '回到过去，主角带着未来的记忆，开启了一段传奇人生。改变命运，弥补遗憾，书写新的篇章。'
        ];
        
        resultTitle.textContent = prompt || 'AI生成短剧';
        resultGenre.textContent = genreNames[genre];
        resultEpisodes.textContent = episodeCounts[length] + '集';
        resultScript.textContent = scripts[Math.floor(Math.random() * scripts.length)];
        
        aiResultModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // 分类按钮点击
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategoryDramas(btn.dataset.category);
        });
    });

    // 轮播切换
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            indicators.forEach(i => i.classList.remove('active'));
            indicator.classList.add('active');
            
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        });
    });

    // 自动轮播
    let carouselIndex = 0;
    setInterval(() => {
        carouselIndex = (carouselIndex + 1) % indicators.length;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === carouselIndex);
        });
        
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            item.classList.toggle('active', index === carouselIndex);
        });
    }, 5000);

    // 导航点击
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 渲染数据
    renderHotDramas();
    renderCategoryDramas('all');
    renderRanking();
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);