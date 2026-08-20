(() => {
  'use strict';

  const downloads = {
    thanks: {
      href: 'https://github.com/yingjunyan2-png/portfolio-friend/raw/refs/heads/downloads/assets/downloads/xiaoying-resume.pdf',
      name: '应君艳-个人简历（AIGC内容运营）.pdf'
    },
    'portfolio-pdf': {
      href: 'https://github.com/yingjunyan2-png/portfolio-friend/raw/refs/heads/downloads/assets/downloads/xiaoying-portfolio.pdf',
      name: '应君艳-作品集（AIGC内容运营）.pdf'
    }
  };

  const messageIcon = [
    '<svg viewBox="0 0 42 42" aria-hidden="true">',
    '<path d="M20.9 5.5C12 5.5 4.8 11.2 4.8 18.2c0 3.1 1.4 5.9 3.8 8.1l-1.2 5.2 5.6-2.6c2.4.8 5 1.2 7.9 1.2 8.9 0 16.1-5.7 16.1-12.7S29.8 5.5 20.9 5.5Z"/>',
    '</svg>'
  ].join('');

  const callIcon = [
    '<svg viewBox="0 0 42 42" aria-hidden="true">',
    '<path d="M14.4 5.8c.9-.3 1.9.1 2.4.9l2.7 5.1c.4.8.3 1.8-.4 2.4l-2.4 2.3c1.7 3.3 4.5 6.1 7.8 7.8l2.3-2.4c.7-.7 1.7-.9 2.5-.4l5 2.7c.9.5 1.3 1.5 1 2.4l-1 3.2c-.4 1.2-1.6 2-2.9 1.9C17.8 30.5 11.5 24.2 10.2 10.7c-.1-1.3.7-2.5 1.9-2.9l2.3-.7Z"/>',
    '<rect x="26.2" y="7.2" width="10.2" height="8.2" rx="1.3"/>',
    '<path d="m36.4 9.3 3 2v2l-3 2"/>',
    '</svg>'
  ].join('');

  const actionList = document.querySelector('#homePage .action-list');
  if (actionList) {
    actionList.innerHTML = [
      '<button class="action-row exact-message" type="button" aria-label="发消息" data-tip="添加好友才可以发消息哦~">',
      messageIcon,
      '<span data-tip="添加好友才可以发消息哦~">发消息</span>',
      '</button>',
      '<button class="action-row exact-call" type="button" aria-label="音视频通话" data-tip="是不是还没加我好友！">',
      callIcon,
      '<span data-tip="是不是还没加我好友！">音视频通话</span>',
      '</button>'
    ].join('');
  }

  const downloadFile = async (info, button) => {
    const label = button.textContent;
    button.disabled = true;
    button.textContent = '正在下载…';

    try {
      const response = await fetch(info.href, { mode: 'cors', credentials: 'omit' });
      if (!response.ok) throw new Error('Download request failed');
      const file = await response.blob();
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = info.name;
      link.style.display = 'none';
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    } catch (error) {
      const link = document.createElement('a');
      link.href = info.href;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.append(link);
      link.click();
      link.remove();
    } finally {
      window.setTimeout(() => {
        button.disabled = false;
        button.textContent = label;
      }, 350);
    }
  };

  document.querySelectorAll('#homePage .island button[data-section]').forEach((button) => {
    const download = downloads[button.dataset.section];
    if (!download) return;
    button.onclick = (event) => {
      event.preventDefault();
      downloadFile(download, button);
    };
  });

  const styles = [
    '#homePage .action-list{position:relative;display:block;height:auto;min-height:0;margin-top:10px;background:#fff!important;}',
    '#homePage .action-row{position:relative;left:auto;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;height:76px;min-height:76px;margin:0;padding:0;border:0;border-bottom:1px solid #e9e9e9;background:#fff!important;color:#5c6f94!important;font:600 26px/1 -apple-system,BlinkMacSystemFont,PingFang SC,Microsoft YaHei,sans-serif!important;letter-spacing:0!important;cursor:pointer;}',
    '#homePage .action-row:last-child{border-bottom:0;}',
    '#homePage .action-row svg{display:block;width:31px;height:31px;flex:0 0 auto;fill:none!important;stroke:currentColor!important;stroke-width:2.15!important;stroke-linecap:round;stroke-linejoin:round;}',
    '#homePage .action-row span{position:relative;display:block;color:inherit!important;font:inherit!important;line-height:1!important;}',
    '#homePage .action-row:hover{background:#faf8fb!important;}',
    '#homePage .action-list,#homePage .action-row{overflow:visible!important;}',
    '#homePage .action-row::after{display:none!important;}',
    '#homePage .action-row span::after{position:absolute;z-index:5;left:50%;bottom:calc(100% + 6px);transform:translate(-50%,4px);display:block;width:max-content;min-width:max-content;max-width:none;padding:8px 11px;border-radius:8px;background:#29313a;color:#fff;content:attr(data-tip);font:13px/1.25 -apple-system,BlinkMacSystemFont,PingFang SC,Microsoft YaHei,sans-serif;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease;}',
    '#homePage .action-row:hover span::after,#homePage .action-row:focus-visible span::after{opacity:1;transform:translate(-50%,0);}',
    '@media (max-width:600px){',
    'body{overflow-x:hidden;}',
    '#homePage .status-bar{height:58px!important;padding-top:0!important;}',
    '#homePage .status-bar .island{top:10px!important;width:min(232px,calc(100vw - 128px))!important;height:32px!important;padding:0 3px!important;gap:0!important;}',
    '#homePage .status-bar .island button{min-width:0!important;padding:3px 3px!important;color:#111!important;font-size:clamp(9px,2.5vw,10px)!important;font-weight:600!important;line-height:1!important;letter-spacing:0!important;white-space:nowrap!important;}',
    '#homePage .status-bar .island button.active{color:#111!important;}',
    '#homePage .status-bar>span:first-child{left:16px!important;top:12px!important;height:26px!important;font-size:16px!important;line-height:26px!important;}',
    '#homePage .status-bar>.network{right:16px!important;top:11px!important;height:28px!important;font-size:12px!important;line-height:28px!important;}',
    '#homePage .status-bar .battery{padding:3px 4px!important;font-size:12px!important;line-height:1!important;}',
    '#momentsPage .sub-section.pinned{display:flex!important;min-height:72px!important;padding:12px 16px!important;gap:9px!important;align-items:center!important;flex-wrap:nowrap!important;}',
    '#momentsPage .sub-section.pinned>b{flex:0 0 auto!important;font-size:20px!important;line-height:1!important;white-space:nowrap!important;}',
    '#momentsPage .sub-section.pinned .gallery{display:flex!important;flex:1 1 auto!important;min-width:0!important;width:auto!important;height:48px!important;gap:4px!important;background:none!important;}',
    '#momentsPage .sub-section.pinned .gallery span{display:block!important;min-width:0!important;height:48px!important;flex:1 1 0!important;background-size:cover!important;background-position:center!important;}',
    '#momentsPage .sub-section.pinned .gallery span:nth-child(n+4){display:none!important;}',
    '#momentsPage .sub-section.pinned>i{flex:0 0 auto!important;font-size:27px!important;}',
    '#momentsPage .moments-cover .cover-art{background-image:url("moments-background-3.png")!important;background-color:transparent!important;filter:none!important;}',
    '#momentsPage .cover-profile p{display:none!important;}',
    '#momentsPage .cover-note{display:block!important;margin:0!important;padding:12px 16px 14px!important;background:#fff!important;border-bottom:1px solid #ececec!important;color:#747474!important;text-align:center!important;font-size:14px!important;line-height:1.5!important;white-space:nowrap!important;text-shadow:none!important;}',
    '#homePage .action-row{height:68px!important;min-height:68px!important;font-size:23px!important;gap:9px!important;}',
    '#homePage .action-row svg{width:29px!important;height:29px!important;}',
    '}'
  ].join('\n');

  const style = document.createElement('style');
  style.id = 'mobile-quality-fixes';
  style.textContent = styles;
  document.head.append(style);

  const momentsPage = document.querySelector('#momentsPage');
  const cover = momentsPage && momentsPage.querySelector('.moments-cover');
  const pinned = momentsPage && momentsPage.querySelector('.sub-section.pinned');
  const coverNote = cover && cover.querySelector('.cover-profile p');
  if (coverNote && pinned && window.matchMedia('(max-width: 600px)').matches) {
    const note = document.createElement('p');
    note.className = 'cover-note';
    note.textContent = coverNote.textContent;
    pinned.insertAdjacentElement('afterend', note);
    coverNote.remove();
  }
})();
