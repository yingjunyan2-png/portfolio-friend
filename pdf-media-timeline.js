(() => {
  const renderPdfMediaTimeline = () => {
    const feed = document.querySelector('#momentsPage .feed');
    if (!feed) return;

    const projects = [
      {
        number: '项目 1',
        title: '酷乐潮玩多 IP 账号运营',
        place: '宁波 · 酷乐潮玩',
        entries: [
          ['1. 项目成果', '项目总览', '参与潮玩 IP 账号内容运营，完成选题、AI 辅助创作、剪辑发布和数据复盘的完整链路。', 'p03-i02'],
          ['1. 项目成果', '小红书数据 01', '小红书内容数据截图：以内容结构、情绪点和平台表达持续测试互动效果。', 'p03-i03'],
          ['1. 项目成果', '小红书数据 02', '小红书内容数据截图：多篇内容获得较高点赞、收藏和互动表现。', 'p03-i04'],
          ['1. 项目成果', '小红书数据 03', '小红书内容数据截图：持续对不同选题与表达方式进行对比复盘。', 'p03-i05'],
          ['1. 项目成果', '抖音数据', '抖音后台数据截图：作品获得百万级平台流量，并为后续内容迭代提供参考。', 'p03-i06'],
          ['2. 账号定位', '小红书账号页面', '围绕年轻用户喜欢的潮玩、可爱 IP 与情绪化内容，建立更有陪伴感的账号表达。', 'p04-i01'],
          ['2. 账号定位', '抖音账号页面', '同步观察短视频平台的内容表现，调整角色呈现方式与作品节奏。', 'p04-i02'],
          ['3. 内容问题', '问题梳理', '将账号现状拆成内容形式、互动表现、IP 风格和制作效率等问题，再逐项制定解决方向。', 'p05-i02'],
          ['4. 选题方法', '选题矩阵', '选题不只看“好不好看”，而是结合 IP 特点、平台用户、内容目标和趋势进行判断。', 'p05-i03'],
          ['4. 选题方法', '内容样本', '把角色、场景、动作、构图、色彩和情绪拆解成可执行的创作任务。', 'p05-i04'],
          ['5. AIGC 内容生产', '画面生成', '先确定主题，再编写 Prompt 生成视觉初稿，建立稳定的角色形象和场景语言。', 'p06-i02'],
          ['5. AIGC 内容生产', '图文制作', '对生成素材进行人工筛选与细节修正，确保画面、文字和角色设定一致。', 'p06-i03'],
          ['5. AIGC 内容生产', '平台包装', '完成封面、字幕、文案、标签和发布页包装，使内容适配对应平台。', 'p06-i04'],
          ['6. 数据复盘', 'AI 角色素材', '将 AI 生成的角色素材整理为可复用内容资产，提高后续创作效率。', 'p07-i02'],
          ['6. 数据复盘', '内容发布记录', '记录不同内容在发布端的表现，观察用户对角色、场景与情绪表达的反馈。', 'p07-i03'],
          ['6. 数据复盘', '数据对照表', '以曝光、点赞、评论、收藏等数据作为判断依据，持续测试并优化内容。', 'p07-i04']
        ]
      },
      {
        number: '项目 2',
        title: '君君和她的朋友们',
        place: '个人 IP · 冷启动实验',
        entries: [
          ['1. IP 设定', '君君角色形象', '以“君君”和小动物的故事为基础，建立带有陪伴感与情绪表达的个人 IP。', 'p08-i02'],
          ['2. 发布平台', '小红书', '在小红书测试图文、故事与角色内容，观察用户互动与收藏反馈。', 'p08-i03'],
          ['2. 发布平台', '抖音', '在抖音测试短视频内容表达，探索更适合角色和平台的呈现节奏。', 'p08-i04'],
          ['3. AI 辅助创作', '互动内容', '从生活化选题出发，使用 AI 生成互动感更强的图文内容并进行人工优化。', 'p09-i04'],
          ['3. AI 辅助创作', '短视频素材', '围绕角色、动作、场景和情绪调整生成效果，形成短视频创作素材。', 'p09-i05'],
          ['3. AI 辅助创作', '素材管理', '将角色相关素材按主题整理，便于连续创作和维持视觉一致性。', 'p09-i06'],
          ['4. 数据复盘', '小红书后台', '记录小红书内容的曝光、互动和收藏表现，作为选题与形式优化依据。', 'p10-i04'],
          ['4. 数据复盘', '抖音后台', '记录抖音内容数据，持续比较图文与短视频在不同平台的表现。', 'p10-i05'],
          ['4. 数据复盘', '数据汇总', '统一整理浏览、点赞、评论等核心数据，形成可持续的复盘表。', 'p10-i06'],
          ['4. 数据复盘', '内容表现', '针对单条内容的传播表现做拆解，判断角色设定和表达方式是否有效。', 'p10-i07'],
          ['4. 数据复盘', '账号数据', '账号数据截图：双平台均获得过万浏览，目前仍在持续测试与优化。', 'p10-i08'],
          ['5. 视觉延展', 'IP 视觉素材', '在内容测试中持续丰富个人 IP 的视觉语言，为后续品牌化积累资产。', 'p10-i10']
        ]
      },
      {
        number: '项目 3',
        title: '宁波领养日 AI 视觉设计',
        place: '公益活动 · 视觉设计与线下落地',
        entries: [
          ['1. 活动标识', '合作视觉标识', '为宠物领养公益活动建立清晰、友好的合作标识与视觉基调。', 'p11-i02'],
          ['2. 活动主海报', '第 115 届宁波宠物领养日', '完成活动主海报设计，用轻松温暖的视觉传达活动时间、地点与主题。', 'p11-i03'],
          ['3. 主视觉 KV', '活动主视觉', '围绕公益与宠物领养主题完成主视觉延展，保证线上线下传播的一致性。', 'p11-i04'],
          ['4. 领养条件', '信息海报', '把领养条件整理成清晰易读的视觉信息，降低用户理解门槛。', 'p11-i05'],
          ['5. 领养流程', '流程说明', '完成报名和领养流程说明，让现场用户能够按步骤快速参与。', 'p11-i06'],
          ['6. 线上宣传', '宣传海报', '制作适配线上传播的宣传物料，增强活动预热与报名触达。', 'p11-i07'],
          ['7. 现场物料', '活动须知', '参与印刷沟通、物料核对、现场布置和活动协作，确保视觉设计真实落地。', 'p11-i08']
        ]
      }
    ];

    const rows = projects.map((project) => `
      <section class="pdf-project">
        <header class="pdf-project-header">
          <b>${project.number}</b>
          <div><strong>${project.title}</strong><small>${project.place}</small></div>
        </header>
        <div class="pdf-project-entries">
          ${project.entries.map(([step, title, description, image]) => `
            <article class="pdf-moment-row">
              <img class="project-media" src="assets/projects/media/${image}.png" alt="${project.number}：${title}" loading="lazy" tabindex="0">
              <div class="pdf-moment-copy">
                <small>${step}</small>
                <h3>${title}</h3>
                <p>${description}</p>
                <span>点击图片查看大图</span>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `).join('');

    feed.className = 'feed pdf-media-feed';
    feed.innerHTML = `
      <section class="pdf-future-note"><b>明天</b><p>希望有机会加入贵公司，与优秀的人一起创造更好的明天。</p></section>
      ${rows}
      <p class="moments-end">朋友仅展示最近三年的朋友圈</p>
    `;

    const style = document.createElement('style');
    style.textContent = `
      #momentsPage .feed.pdf-media-feed{padding:28px 35px 52px;background:#fff}
      #momentsPage .pdf-future-note{padding:0 0 28px;border-bottom:1px solid #e9ebea}
      #momentsPage .pdf-future-note b,#momentsPage .pdf-project-header>b{display:block;color:#202423;font-size:25px;line-height:1.2}
      #momentsPage .pdf-future-note p{margin:10px 0 0 104px;color:#656b6a;font-size:13px;line-height:1.65}
      #momentsPage .pdf-project{padding-top:30px}
      #momentsPage .pdf-project+.pdf-project{margin-top:2px}
      #momentsPage .pdf-project-header{display:flex;align-items:flex-start;gap:14px;margin:0 0 17px}
      #momentsPage .pdf-project-header>b{min-width:64px}
      #momentsPage .pdf-project-header strong{display:block;padding-top:2px;color:#222625;font-size:16px;line-height:1.35}
      #momentsPage .pdf-project-header small{display:block;margin-top:4px;color:#9ca1a0;font-size:12px;line-height:1.45}
      #momentsPage .pdf-project-entries{border-top:1px solid #eff0ef}
      #momentsPage .pdf-moment-row{display:grid;grid-template-columns:124px minmax(0,1fr);gap:15px;padding:16px 0;border-bottom:1px solid #eff0ef}
      #momentsPage .pdf-moment-row .project-media{display:block;width:124px;height:124px;object-fit:contain;background:#f5f5f4;border:1px solid #eeeeed;cursor:zoom-in;transition:transform .2s ease,box-shadow .2s ease}
      #momentsPage .pdf-moment-row .project-media:hover,#momentsPage .pdf-moment-row .project-media:focus-visible{outline:none;transform:translateY(-2px);box-shadow:0 8px 17px rgba(66,46,52,.15)}
      #momentsPage .pdf-moment-copy{min-width:0;padding-top:2px}
      #momentsPage .pdf-moment-copy>small{display:block;color:#e19aad;font-size:11px;line-height:1.3}
      #momentsPage .pdf-moment-copy h3{margin:4px 0 7px;color:#282c2b;font-size:15px;line-height:1.35}
      #momentsPage .pdf-moment-copy p{margin:0;color:#666b6a;font-size:12px;line-height:1.66}
      #momentsPage .pdf-moment-copy span{display:block;margin-top:8px;color:#abb0ae;font-size:10px}
      #momentsPage .pdf-media-feed .moments-end{margin:32px 0 0;text-align:center;color:#b3b6b5;font-size:12px}
      @media(max-width:410px){
        #momentsPage .feed.pdf-media-feed{padding-left:24px;padding-right:24px}
        #momentsPage .pdf-future-note p{margin-left:0}
        #momentsPage .pdf-moment-row{grid-template-columns:106px minmax(0,1fr);gap:12px}
        #momentsPage .pdf-moment-row .project-media{width:106px;height:106px}
        #momentsPage .pdf-moment-copy h3{font-size:14px}
        #momentsPage .pdf-moment-copy p{font-size:11px;line-height:1.55}
      }
    `;
    document.head.appendChild(style);
  };

  window.addEventListener('load', () => window.setTimeout(renderPdfMediaTimeline, 0));
})();
