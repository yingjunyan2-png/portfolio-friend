(() => {
  const createTimeline = () => {
    const momentsPage = document.querySelector('#momentsPage');
    const feed = momentsPage?.querySelector('.feed');
    const lightbox = document.querySelector('.lightbox');
    if (!feed || !lightbox) return;

    feed.className = 'feed moments-timeline';
    feed.innerHTML = `
      <section class="timeline-greeting">
        <b>明天</b>
        <p>希望有机会加入贵公司，与优秀的人一起创造更好的明天。</p>
      </section>

      <article class="timeline-post">
        <div class="post-label"><b>项目 1</b><span>宁波 · 酷乐潮玩</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>潮玩 IP 账号内容运营</small></div></div>
        <p>参与酷乐潮玩多 IP 账号运营，负责选题判断、AI 辅助创作、素材制作、短视频剪辑、平台发布和数据复盘，完成从内容生产到复盘迭代的完整流程。</p>
        <div class="project-gallery project-gallery--single">
          <img class="project-media" src="assets/projects/pdf-project-page-03.png" alt="项目 1：酷乐潮玩账号运营项目概览" tabindex="0">
        </div>
        <small class="post-tag">内容运营 · AIGC 辅助 · 小红书 / 抖音</small>
      </article>

      <article class="timeline-post">
        <div class="post-label"><b>项目 1</b><span>内容策略与选题</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>从账号定位到内容判断</small></div></div>
        <p>围绕 IP 特点、平台用户和内容目标建立选题方法，解决内容单一、互动有限、不同 IP 风格不统一等问题，让内容既有角色感，也更贴近真实用户兴趣。</p>
        <div class="project-gallery">
          <img class="project-media" src="assets/projects/pdf-project-page-04.png" alt="项目 1：账号定位与内容问题" tabindex="0">
          <img class="project-media" src="assets/projects/pdf-project-page-05.png" alt="项目 1：选题方法与工作流程" tabindex="0">
        </div>
        <small class="post-tag">选题判断 · 用户洞察 · 内容策划</small>
      </article>

      <article class="timeline-post">
        <div class="post-label"><b>项目 1</b><span>AIGC 制作与复盘</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>AI 全程辅助参与</small></div></div>
        <p>将主题拆解为角色、场景、动作、构图与情绪，再通过 Prompt 编写、素材生成、人工筛选优化和平台化包装完成发布，并根据数据持续调整内容方向。</p>
        <div class="project-gallery">
          <img class="project-media" src="assets/projects/pdf-project-page-06.png" alt="项目 1：AIGC 内容生产流程" tabindex="0">
          <img class="project-media" src="assets/projects/pdf-project-page-07.png" alt="项目 1：内容数据复盘与迭代" tabindex="0">
        </div>
        <small class="post-tag">Prompt 编写 · 视频剪辑 · 数据复盘</small>
      </article>

      <article class="timeline-post">
        <div class="post-label"><b>项目 2</b><span>个人 IP · 君君和她的朋友们</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>独立策划与运营</small></div></div>
        <p>以“君君”和小动物的故事为基础进行个人 IP 冷启动实验，通过图文、短视频与 AI 辅助视觉创作，探索具有陪伴感和情绪表达的内容方式。</p>
        <div class="project-gallery project-gallery--single">
          <img class="project-media" src="assets/projects/pdf-project-page-08.png" alt="项目 2：君君和她的朋友们项目介绍" tabindex="0">
        </div>
        <small class="post-tag">IP 设定 · 内容策划 · AI 视觉创作</small>
      </article>

      <article class="timeline-post">
        <div class="post-label"><b>项目 2</b><span>个人 IP 工作流与数据</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>持续测试与优化</small></div></div>
        <p>独立完成选题、Prompt 编写、AI 素材生成、画面优化、图文与短视频发布及数据记录；目前双平台均获得过万浏览，并持续测试更适合账号的内容形态。</p>
        <div class="project-gallery">
          <img class="project-media" src="assets/projects/pdf-project-page-09.png" alt="项目 2：AIGC 内容工作流程" tabindex="0">
          <img class="project-media" src="assets/projects/pdf-project-page-10.png" alt="项目 2：账号数据与复盘" tabindex="0">
        </div>
        <small class="post-tag">账号运营 · 图文 / 视频 · 数据记录</small>
      </article>

      <article class="timeline-post">
        <div class="post-label"><b>项目 3</b><span>宁波 · 领养日</span></div>
        <div class="post-author"><span>应</span><div><strong>应君艳</strong><small>领养日 AI 视觉设计</small></div></div>
        <p>参与宠物领养公益活动的视觉设计与线下落地，完成活动 KV、宣传海报、报名流程、领养条件及现场物料，并协作完成印刷、核对和现场布置。</p>
        <div class="project-gallery project-gallery--single">
          <img class="project-media" src="assets/projects/pdf-project-page-11.png" alt="项目 3：宁波领养日视觉设计项目" tabindex="0">
        </div>
        <small class="post-tag">公益视觉设计 · 线下物料 · AI 辅助创作</small>
      </article>

      <p class="moments-end">朋友仅展示最近三年的朋友圈</p>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #momentsPage .feed.moments-timeline{padding:28px 35px 52px;background:#fff}
      #momentsPage .timeline-greeting{display:grid;grid-template-columns:158px minmax(0,1fr);align-items:center;padding:0 0 28px;border-bottom:1px solid #e9ebea}
      #momentsPage .timeline-greeting b,#momentsPage .post-label b{display:block;color:#202423;font-size:25px;line-height:1.2}
      #momentsPage .timeline-greeting p{margin:0;color:#656b6a;font-size:13px;line-height:1.65}
      #momentsPage .timeline-post{padding:29px 0 30px;border-bottom:1px solid #e9ebea}
      #momentsPage .post-label{margin-bottom:15px}
      #momentsPage .post-label span{display:block;margin-top:7px;color:#a1a6a5;font-size:13px}
      #momentsPage .post-author{display:flex;align-items:center;gap:10px;margin-bottom:12px}
      #momentsPage .post-author>span{display:grid;place-items:center;width:33px;height:33px;flex:none;border-radius:8px;background:#e5a566;color:#fff;font-size:15px;font-weight:700}
      #momentsPage .post-author strong{display:block;color:#222625;font-size:14px;line-height:1.25}
      #momentsPage .post-author small{display:block;margin-top:3px;color:#9aa09e;font-size:11px;line-height:1.25}
      #momentsPage .timeline-post>p{margin:0 0 13px;color:#606665;font-size:13px;line-height:1.72}
      #momentsPage .project-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
      #momentsPage .project-gallery--single{grid-template-columns:minmax(0,235px)}
      #momentsPage .project-media{display:block;width:100%;aspect-ratio:1080/1215;object-fit:contain;object-position:center;background:#f5f4f3;cursor:zoom-in;border:1px solid #f0eeee;transition:transform .22s ease,box-shadow .22s ease}
      #momentsPage .project-media:hover,#momentsPage .project-media:focus-visible{outline:none;transform:translateY(-3px);box-shadow:0 8px 18px rgba(68,48,54,.15)}
      #momentsPage .post-tag{display:block;margin-top:10px;color:#a5a9a8;font-size:11px;line-height:1.45}
      .lightbox.project-preview img{max-width:min(94vw,900px);max-height:92vh;border-radius:8px}
      @media(max-width:410px){
        #momentsPage .feed.moments-timeline{padding-left:24px;padding-right:24px}
        #momentsPage .timeline-greeting p{margin-left:0}
        #momentsPage .timeline-post>p{font-size:12px}
        #momentsPage .project-gallery--single{grid-template-columns:minmax(0,100%)}
      }
    `;
    document.head.appendChild(style);

    const showProjectImage = (image) => {
      const preview = lightbox.querySelector('img');
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      lightbox.classList.add('show', 'project-preview');
    };

    feed.addEventListener('click', (event) => {
      const image = event.target.closest('.project-media');
      if (image) showProjectImage(image);
    });
    feed.addEventListener('keydown', (event) => {
      const image = event.target.closest('.project-media');
      if (image && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        showProjectImage(image);
      }
    });

    const avatarButton = document.querySelector('#avatarButton');
    if (avatarButton) {
      avatarButton.onclick = () => {
        lightbox.querySelector('img').src = 'avatar.jpg';
        lightbox.querySelector('img').alt = '应君艳头像';
        lightbox.classList.remove('project-preview');
        lightbox.classList.add('show');
      };
    }
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox || event.target.tagName === 'BUTTON') {
        lightbox.classList.remove('project-preview');
      }
    });
  };

  window.addEventListener('load', () => window.setTimeout(createTimeline, 0));
})();
