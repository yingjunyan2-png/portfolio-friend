(() => {
  const media = (name) => {
    const optimizedName = name.replace(/\.(png|jpe?g)$/i, '.webp');
    return optimizedName.includes('/') ? optimizedName : `assets/projects/media/${optimizedName}`;
  };

  // 每条动态保留 PDF 中原本的视觉分组：横排数据、双图、纵向流程或完整 IP 组合。
  const projects = [
    {
      number: '项目 1',
      place: '宁波·酷乐潮玩文化创意有限公司',
      title: '酷乐潮玩多 IP 账号运营',
      posts: [
        {
          title: '项目概览',
          text: '负责多 IP 账号内容运营，完成选题判断、AIGC 辅助创作、素材制作、短视频剪辑、平台发布与数据复盘的完整流程。',
          layout: 'moments-grid',
          images: ['pinned-poster.jpg']
        },
        {
          title: '1. 项目成果',
          text: '小红书单篇内容最高曝光 35 万，多篇内容点赞破千破万；抖音作品获得百万平台流量，形成从选题、制作、发布到复盘的完整内容链路。',
          layout: 'moments-grid',
          images: ['p03-i03', 'p03-i04', 'p03-i05', 'p03-i06']
        },
        {
          title: '2. 账号定位与内容问题',
          text: '面向喜欢潮玩、可爱 IP 和情绪化内容的年轻用户，通过角色日常、产品展示和生活场景增强情绪连接；同时针对内容单一、互动有限与 IP 风格不统一等问题进行调整。',
          layout: 'moments-grid',
          images: ['p04-i01', 'p04-i02']
        },
        {
          title: '3. 内容选题方法',
          text: '结合 IP 特点、平台用户和内容目标建立选题方法，将角色日常、产品展示、生活化场景与话题趋势组合成可持续测试的内容栏目。',
          layout: 'moments-grid',
          images: ['p05-i02', 'p05-i03']
        },
        {
          title: '4. AIGC 内容生产工作流',
          text: '从确定主题、拆解画面需求、编写 Prompt 生成初稿，到人工筛选与修正、平台化包装，按工作流完成内容生产。左侧四张素材保持 PDF 中从上到下的原始顺序。',
          layout: 'moments-grid',
          images: ['p05-i04', 'p06-i02', 'p06-i03', 'p06-i04']
        },
        {
          title: '5. 发布与数据复盘',
          text: '将已发布内容进行平台测试和数据记录，从曝光、完读、点赞、评论等指标中判断哪些内容值得继续迭代，为下一轮选题提供依据。',
          layout: 'moments-grid',
          images: ['p07-i04']
        }
      ]
    },
    {
      number: '项目 2',
      place: '个人 IP · 君君和她的朋友们',
      title: '个人 IP 内容运营',
      posts: [
        {
          title: '1. IP 设定',
          text: '以“君君”和小动物的故事为内容基础，在小红书与抖音尝试图文、短视频与 AI 辅助视觉创作，建立具有情绪表达和陪伴感的角色世界观。',
          layout: 'moments-grid',
          images: ['p08-i02', 'p08-i03', 'p08-i04']
        },
        {
          title: '2. 内容视觉尝试',
          text: '围绕角色日常、情绪表达和节日互动设计图文素材，通过 AI 生成、人工筛选和细节优化，测试更适合账号风格的表达方式。',
          layout: 'moments-grid',
          images: ['p09-i04', 'p09-i05', 'p09-i06']
        },
        {
          title: '3. 账号运营与平台发布',
          text: '根据不同平台的展示特点调整图文、封面和发布方式，记录账号视觉与内容产出的演进过程。',
          layout: 'moments-grid',
          images: ['p10-i04', 'p10-i05']
        },
        {
          title: '4. 数据记录与迭代',
          text: '对图文与短视频的曝光、互动和用户反馈进行记录与复盘，持续测试账号的内容方向。',
          sideTitle: '5.目前双平台均有破万数据',
          layout: 'moments-grid',
          images: ['p10-i06', 'p10-i07', 'p10-i08']
        }
      ]
    },
    {
      number: '项目 3',
      place: '宁波 · 领养日',
      title: '领养日 AI 视觉设计',
      posts: [
        {
          title: '1. 活动主视觉',
          text: '参与宠物领养公益活动的视觉设计与线下落地，完成活动标识、活动主海报和主 KV，让线上线下传播保持一致。',
          layout: 'moments-grid',
          images: ['p11-i03', 'p11-i04']
        },
        {
          title: '2. 领养规则与流程',
          text: '将领养条件、报名与领养流程整理成清晰的信息海报，降低现场用户的理解门槛，让必要信息更容易阅读和执行。',
          layout: 'moments-grid',
          images: ['p11-i05', 'p11-i06', 'p11-i07', 'p11-i08']
        },
        {
          title: '3. 线下活动现场',
          text: '记录宁波领养日的线下活动现场，包括领养互动、信息展示、活动物料与公益摊位的执行细节。',
          layout: 'moments-grid',
          images: [
            'assets/projects/media/adoption-scene-01.jpg',
            'assets/projects/media/adoption-scene-02.jpg',
            'assets/projects/media/adoption-scene-03.jpg',
            'assets/projects/media/adoption-scene-04.jpg',
            'assets/projects/media/adoption-scene-05.jpg',
            'assets/projects/media/adoption-scene-06.jpg'
          ]
        }
      ]
    }
  ];

  const imageTemplate = (image, post, extraClass = '') =>
    `<img class="project-media ${extraClass}" src="${media(image)}" alt="${post.title}" loading="lazy" tabindex="0">`;

  const mediaTemplate = (post) => {
    if (post.layout === 'ip-composite') {
      return `<div class="grouped-moment-media layout-ip-composite" aria-label="${post.title}">
        ${imageTemplate(post.images[0], post, 'ip-person')}
        ${imageTemplate(post.images[1], post, 'ip-xhs')}
        ${imageTemplate(post.images[2], post, 'ip-douyin')}
      </div>`;
    }

    const images = post.images.map((image) => imageTemplate(image, post)).join('');
    return `<div class="grouped-moment-media layout-${post.layout}">${images}</div>`;
  };

  const postTemplate = (post) =>
    `<article class="grouped-moment grouped-moment--${post.layout}">
      ${mediaTemplate(post)}
      <div class="grouped-moment-copy"><h3>${post.title}</h3><p>${post.text}</p>${post.sideTitle ? `<h4>${post.sideTitle}</h4>` : ''}<small>点击图片可查看大图</small></div>
    </article>`;

  const render = () => {
    const feed = document.querySelector('#momentsPage .feed');
    const lightbox = document.querySelector('.lightbox');
    if (!feed) return;

    feed.className = 'feed grouped-timeline';
    feed.innerHTML = `<section class="timeline-greeting"><b>明天</b><p>希望有机会加入贵公司，与优秀的人一起创造更好的明天。</p></section>${projects.map((project, index) => `<section class="grouped-project" id="project-${index + 1}"><header><b>${project.number}</b><span>${project.place}</span><strong>${project.title}</strong></header>${project.posts.map(postTemplate).join('')}</section>`).join('')}<p class="moments-end">朋友圈仅展示最近三年的项目记录</p>`;

    const pinnedGallery = document.querySelector('#momentsPage .pinned .gallery');
    if (pinnedGallery && !pinnedGallery.dataset.projectLinks) {
      pinnedGallery.dataset.projectLinks = 'true';
      pinnedGallery.querySelectorAll('span').forEach((tile, index) => {
        if (index > 2) return;
        const openProject = () => {
          const target = feed.querySelector(`#project-${index + 1}`);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        tile.tabIndex = 0;
        tile.setAttribute('role', 'button');
        tile.setAttribute('aria-label', `跳转到项目 ${index + 1}`);
        tile.addEventListener('click', openProject);
        tile.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProject();
          }
        });
      });
    }

    if (!document.querySelector('#groupedMomentsStyle')) {
      const style = document.createElement('style');
      style.id = 'groupedMomentsStyle';
      style.textContent = `
        #momentsPage .feed.grouped-timeline{padding:28px 35px 56px;background:#fff}
        #momentsPage .grouped-timeline .timeline-greeting{display:grid;grid-template-columns:120px minmax(0,1fr);align-items:start;padding:0 0 23px;border-bottom:1px solid #e9ebea}
        #momentsPage .grouped-timeline .timeline-greeting b{color:#202423;font-size:25px;line-height:1.2}
        #momentsPage .grouped-timeline .timeline-greeting p{margin:4px 0 0;color:#656b6a;font-size:13px;line-height:1.4;white-space:nowrap}
        #momentsPage .grouped-project{padding-top:30px}
        #momentsPage .grouped-project+ .grouped-project{margin-top:9px;padding-top:33px;border-top:1px solid #e9ebea}
        #momentsPage .grouped-project>header{display:grid;grid-template-columns:78px minmax(0,1fr);column-gap:14px;align-items:start;margin-bottom:14px}
        #momentsPage .grouped-project>header>b{grid-row:span 2;color:#202423;font-size:25px;line-height:1.2}
        #momentsPage .grouped-project>header>span{color:#9ca1a0;font-size:12px;line-height:1.35}
        #momentsPage .grouped-project>header>strong{margin-top:3px;color:#303534;font-size:15px;line-height:1.35}
        #momentsPage .grouped-moment{display:grid;grid-template-columns:318px minmax(0,1fr);gap:18px;align-items:start;padding:18px 0;border-top:1px solid #eff0ef}
        #momentsPage .grouped-moment-media{box-sizing:border-box;min-width:0;max-width:318px}
        #momentsPage .grouped-moment-media .project-media{box-sizing:border-box;display:block;max-width:100%;object-fit:contain;object-position:center;cursor:zoom-in;transition:transform .2s ease,box-shadow .2s ease}
        #momentsPage .grouped-moment-media .project-media:hover,#momentsPage .grouped-moment-media .project-media:focus-visible{outline:none;transform:translateY(-3px);box-shadow:0 8px 18px rgba(66,46,52,.15)}
        #momentsPage .layout-single-poster{display:flex;align-items:center;height:172px}
        #momentsPage .layout-single-poster .project-media{width:172px;height:172px;background:#050505}
        #momentsPage .layout-data-row{display:flex;align-items:flex-end;gap:3px;height:150px;overflow:visible}
        #momentsPage .layout-data-row .project-media{width:auto;height:150px;flex:0 0 auto;border:1px solid #eeeeed;background:#fafafa}
        /* 项目 1：每一条都按朋友圈九宫格展示，缩略图无白底，点击可查看完整原图。 */
        #momentsPage .grouped-moment--moments-grid{grid-template-columns:318px minmax(0,1fr);align-items:start}
        #momentsPage .layout-moments-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;width:318px;align-content:start}
        #momentsPage .layout-moments-grid .project-media{width:100%;height:auto;aspect-ratio:auto;object-fit:initial;object-position:initial}
        #momentsPage .grouped-moment--moments-grid .grouped-moment-copy{padding-top:4px;min-height:96px}
        #momentsPage .layout-phone-pair{display:flex;align-items:flex-start;gap:8px;min-height:188px}
        #momentsPage .layout-phone-pair .project-media{width:auto;height:188px;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-compact-stack{display:flex;flex-direction:column;gap:6px;width:270px}
        #momentsPage .layout-compact-stack .project-media{width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-workflow-stack{display:flex;flex-direction:column;gap:7px;width:280px}
        #momentsPage .layout-workflow-stack .project-media{width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-portrait-with-stack{display:grid;grid-template-columns:116px 1fr;gap:7px;align-items:start}
        #momentsPage .layout-portrait-with-stack .project-media:first-child{grid-row:span 2;width:116px;height:224px;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-portrait-with-stack .project-media:not(:first-child){width:100%;height:108px;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-wide-single{display:block;width:318px}
        #momentsPage .layout-wide-single .project-media{width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-ip-composite{position:relative;width:270px;height:244px;overflow:hidden;border-radius:16px;background:linear-gradient(145deg,#fff4f8,#ffe8f1);border:1px solid #f8d5e2}
        #momentsPage .layout-ip-composite .project-media{position:absolute;background:transparent;border:0;box-shadow:none!important}
        #momentsPage .layout-ip-composite .ip-person{z-index:2;left:50%;bottom:3px;width:163px;height:244px;transform:translateX(-50%)}
        #momentsPage .layout-ip-composite .ip-xhs,#momentsPage .layout-ip-composite .ip-douyin{z-index:3;width:75px;height:75px;padding:14px;border-radius:50%;background:#ffb6d1;box-sizing:border-box;box-shadow:0 6px 14px rgba(183,69,112,.16)!important}
        #momentsPage .layout-ip-composite .ip-xhs{left:15px;top:103px}
        #momentsPage .layout-ip-composite .ip-douyin{right:15px;top:103px}
        #momentsPage .layout-ip-composite .project-media:hover,#momentsPage .layout-ip-composite .project-media:focus-visible{transform:translateY(-3px);box-shadow:0 8px 18px rgba(66,46,52,.15)!important}
        #momentsPage .layout-ip-composite .ip-person:hover,#momentsPage .layout-ip-composite .ip-person:focus-visible{transform:translateX(-50%) translateY(-3px)}
        #momentsPage .layout-visual-story{display:flex;flex-direction:column;gap:7px;width:278px}
        #momentsPage .layout-visual-story .project-media{width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-wide-with-phones{display:grid;grid-template-columns:1fr 1fr;gap:7px;width:282px}
        #momentsPage .layout-wide-with-phones .project-media:first-child{grid-column:1 / -1;width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-wide-with-phones .project-media:not(:first-child){width:100%;height:166px;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-poster-and-wide{display:grid;grid-template-columns:104px 1fr;gap:7px;align-items:start}
        #momentsPage .layout-poster-and-wide .project-media:first-child{width:104px;height:186px;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-poster-and-wide .project-media:last-child{width:100%;height:auto;border:1px solid #eeeeed;background:#fafafa}
        #momentsPage .layout-wide-pair{display:flex;align-items:flex-start;gap:7px;width:300px}
        #momentsPage .layout-wide-pair .project-media{width:calc(50% - 4px);height:auto;border:1px solid #eeeeed;background:#fafafa}
        /* 保持每张图片的原始长宽比例，只清除额外的边框和底色。 */
        #momentsPage .grouped-moment-media:not(.layout-ip-composite) .project-media{background:transparent!important;border:0!important}
        #momentsPage .grouped-moment-copy{min-width:0;padding-top:3px}
        #momentsPage .grouped-moment-copy h3{margin:0 0 7px;color:#282c2b;font-size:15px;line-height:1.35}
        #momentsPage .grouped-moment-copy p{margin:0;color:#666b6a;font-size:12px;line-height:1.7}
        #momentsPage .grouped-moment-copy h4{margin:12px 0 0;color:#313635;font-size:14px;line-height:1.45}
        #momentsPage .grouped-moment-copy small{display:block;margin-top:8px;color:#abb0ae;font-size:10px;line-height:1.35}
        #momentsPage .pinned .gallery span:nth-child(-n+3){cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
        #momentsPage .pinned .gallery span:nth-child(-n+3):hover,#momentsPage .pinned .gallery span:nth-child(-n+3):focus-visible{outline:none;transform:translateY(-5px);box-shadow:0 10px 16px rgba(70,44,52,.22)}
        #momentsPage .grouped-timeline .moments-end{margin:32px 0 0;text-align:center;color:#b3b6b5;font-size:12px}
        @media(max-width:620px){
          #momentsPage .feed.grouped-timeline{padding-left:24px;padding-right:24px}
          #momentsPage .grouped-timeline .timeline-greeting{grid-template-columns:1fr;gap:7px}
          #momentsPage .grouped-moment{grid-template-columns:1fr;gap:12px}
          #momentsPage .grouped-moment--moments-grid{grid-template-columns:1fr}
          #momentsPage .layout-moments-grid{width:100%;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}
          #momentsPage .grouped-timeline .timeline-greeting p{white-space:normal}
          #momentsPage .grouped-moment-copy p{font-size:11px;line-height:1.62}
        }
      `;
      document.head.appendChild(style);
    }

    if (lightbox && !feed.dataset.groupedLightbox) {
      feed.dataset.groupedLightbox = 'true';
      feed.addEventListener('click', (event) => {
        const image = event.target.closest('.project-media');
        if (!image) return;
        const preview = lightbox.querySelector('img');
        if (!preview) return;
        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt;
        lightbox.classList.add('show', 'project-preview');
      });
      feed.addEventListener('keydown', (event) => {
        const image = event.target.closest('.project-media');
        if (!image || (event.key !== 'Enter' && event.key !== ' ')) return;
        event.preventDefault();
        image.click();
      });
    }
  };

  window.addEventListener('load', () => window.setTimeout(render, 30));
})();
