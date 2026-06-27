<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="manifest" href="manifest.webmanifest">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<script>
  // Keep only the locked viewport meta (some engines honor the FIRST one parsed).
  (function(){
    try{
      var want="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";
      var metas=document.querySelectorAll('meta[name="viewport"]');
      for(var i=0;i<metas.length-1;i++){ metas[i].parentNode.removeChild(metas[i]); }
      var last=document.querySelector('meta[name="viewport"]');
      if(last) last.setAttribute("content",want);
    }catch(e){}
  })();
</script>
<meta name="theme-color" content="#1b2326">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="راديو البلد">
<link rel="apple-touch-icon" href="icons/apple-touch.png">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;700;800;900&family=Reem+Kufi:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
<script src="image-slot.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
  if ('serviceWorker' in navigator) {
    var __reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (__reloaded) return; __reloaded = true; window.location.reload();
    });
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').then(function (reg) {
        if (reg && reg.update) { try { reg.update(); } catch (e) {} }
      }).catch(function () {});
    });
  }
</script>
<style>
  *{box-sizing:border-box;}
  html,body{margin:0;background:#cfc9bb;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;}
  @keyframes crawl{from{transform:translateX(0);}to{transform:translateX(-50%);}}
  @keyframes livepulse{0%,100%{opacity:1;}50%{opacity:.25;}}
  [data-mv="box"], [data-mv="box"] p{ word-spacing: var(--wordSp, normal); line-height: var(--lineH, 1.65) !important; }
  .lab{font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:12px;color:#aeb6b8;display:block;margin-bottom:5px;}
  .ic{font-family:'IBM Plex Sans Arabic',sans-serif;font-size:13px;padding:8px 10px;border-radius:7px;border:1px solid #3a4448;background:#222b2f;color:#fdf6e3;width:100%;}
  .grp{background:#212a2e;border:1px solid #313b3f;border-radius:11px;padding:14px 15px;margin-bottom:12px;}
  .grp h4{font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:700;font-size:13px;color:#f2d47e;margin:0 0 11px;}
  .col{width:100%;height:34px;border:1px solid #3a4448;border-radius:7px;background:none;cursor:pointer;padding:2px;}
  .rng{width:100%;accent-color:#c1624c;}
  .btn{font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:14px;border:none;border-radius:9px;padding:10px 18px;cursor:pointer;white-space:nowrap;}
  .ck{display:flex;align-items:center;gap:8px;color:#fdf6e3;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:500;font-size:13px;cursor:pointer;}
  .ck input{accent-color:#c1624c;width:16px;height:16px;}
  image-slot{display:block;}
  .mobile-save{display:none;}
  @media (max-width:760px){
    .mobile-save{display:block !important;}
    .desk-only{display:none !important;}
    .edit-body{flex-direction:column !important;}
    .edit-preview{order:-1;height:44svh;min-height:240px;flex:none !important;position:sticky;top:0;z-index:6;background:#d6d0c3;padding:12px !important;box-shadow:0 3px 10px rgba(0,0,0,.18);}
    .edit-panel{width:100% !important;max-height:none !important;}
    /* 16px on form controls stops iOS Safari from auto-zooming when a field is focused */
    .ic,textarea.ic,select.ic,input.ic{font-size:16px !important;}
    .btn{font-size:15px;}
  }
  input,textarea,select,button{touch-action:manipulation;}
</style>
</helmet>
<div dir="rtl" ref="{{ rootRef }}" style="--dark:#1b2326;--brick:#c1624c;--deep:#b94126;--cream:#fdf6e3;--gold:#f2d47e;--radius:0px;--barH:7px;--patURL:url(assets/pattern-soft.png);--patURLalt:url(assets/pattern-brick.png);--logoLight:url(assets/logo-white.png);--logoDark:url(assets/logo-main.png);--customLogo:url(assets/logo-white.png);--logoCur:url(assets/logo-brick.png);--ptopOp:0.9;--ptopSize:130%;--ptopY:0px;--pbotOp:0.9;--pbotSize:130%;--pbotY:0px;--pboxOp:0.5;--pboxSize:85%;--txtAlign:justify;--headScale:1;--txtPad:28px;--imgY:0px;--boxY:0px;--badgeY:0px;--dateTop:14%;--dateLeft:7%;--dateW:36%;--dateFs:11px;--bodyW:400;--fontHead:'IBM Plex Sans Arabic';--fontBody:'IBM Plex Sans Arabic';font-family:var(--fontBody),sans-serif;font-weight:var(--bodyW);min-height:100vh;">

  <!-- ================= HOME ================= -->
  <sc-if value="{{ isHome }}" hint-placeholder-val="{{ true }}">
    <div style="min-height:100vh;background:var(--dark);position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;">
      <div style="position:absolute;top:0;right:0;left:0;height:7px;background:var(--gold);"></div>
      <button onClick="{{ openSettings }}" style="position:absolute;top:22px;left:22px;background:#2a3338;color:#f2d47e;border:1px solid #3a4448;border-radius:9px;width:42px;height:42px;font-size:19px;cursor:pointer;">⚙</button>
      <div style="position:relative;width:229px;height:150px;background:var(--logoCur) center/contain no-repeat;filter:drop-shadow(0 6px 18px rgba(0,0,0,.5));"></div>
      <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:42px;margin-top:30px;">استوديو الهوية البصرية</div>
      <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:18px;margin-top:8px;letter-spacing:1px;">{{ fmLine }}</div>
      <button onClick="{{ goPick }}" class="btn" style="position:relative;background:var(--brick);color:var(--cream);font-size:18px;padding:15px 46px;margin-top:38px;">اختر تصميماً ←</button>
      <button onClick="{{ openTour }}" style="position:relative;margin-top:16px;background:none;border:none;color:#8a9295;font-family:var(--fontHead),sans-serif;font-weight:600;font-size:14px;cursor:pointer;text-decoration:underline;">؟ كيف يعمل الاستوديو</button>
    </div>
  </sc-if>

  <!-- ================= TOUR ================= -->
  <sc-if value="{{ showTour }}" hint-placeholder-val="{{ false }}">
    <div style="position:fixed;inset:0;z-index:120;background:rgba(10,14,16,.74);display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="background:#1b2326;border:1px solid #313b3f;border-radius:16px;padding:30px 28px;width:520px;max-width:100%;box-shadow:0 18px 50px rgba(0,0,0,.5);">
        <div style="display:flex;align-items:center;gap:13px;margin-bottom:18px;">
          <div style="width:54px;height:36px;background:var(--logoCur) center/contain no-repeat;flex:none;"></div>
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:21px;">أهلاً بك في استوديو الهوية</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:15px;">
          <sc-for list="{{ tourSteps }}" as="ts" hint-placeholder-count="4">
            <div style="display:flex;gap:13px;align-items:flex-start;">
              <div style="width:34px;height:34px;flex:none;border-radius:9px;background:#26312f;border:1px solid #34403d;display:flex;align-items:center;justify-content:center;font-size:17px;">{{ ts.icon }}</div>
              <div>
                <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:15px;">{{ ts.title }}</div>
                <div style="font-family:var(--fontHead),sans-serif;font-weight:500;color:#9aa2a4;font-size:13px;line-height:1.7;margin-top:2px;">{{ ts.body }}</div>
              </div>
            </div>
          </sc-for>
        </div>
        <button onClick="{{ closeTour }}" class="btn" style="width:100%;margin-top:24px;background:var(--brick);color:#fdf6e3;font-size:15px;">فهمت، لنبدأ ←</button>
      </div>
    </div>
  </sc-if>

  <!-- ================= PICK ================= -->
  <sc-if value="{{ isPick }}" hint-placeholder-val="{{ false }}">
    <div style="min-height:100vh;background:#e7e2d6;">
      <div style="position:sticky;top:0;z-index:10;background:var(--dark);padding:16px 26px;display:flex;align-items:center;gap:14px;border-bottom:3px solid var(--gold);">
        <button onClick="{{ goHome }}" class="btn" style="background:#2a3338;color:#fdf6e3;font-size:14px;padding:9px 16px;">← الرئيسية</button>
        <div style="width:52px;height:34px;background:var(--logoCur) center/contain no-repeat;"></div>
        <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:19px;">اختر التصميم الذي تريد تعديله</div>
        <button onClick="{{ genAll }}" class="btn" style="margin-right:auto;background:#26312f;color:#f2d47e;border:1px solid #34403d;font-size:14px;padding:9px 16px;">{{ genAllLabel }}</button>
        <button onClick="{{ openSettings }}" class="btn" style="background:#2a3338;color:#f2d47e;font-size:14px;padding:9px 16px;">⚙ الإعدادات</button>
      </div>
      <div style="padding:20px 30px 0;">
        <div style="background:#fff;border:1px solid #d8d0bd;border-radius:12px;padding:16px 18px;box-shadow:0 2px 8px rgba(0,0,0,.06);">
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;color:#1b2326;margin-bottom:11px;">✍️ خبر سريع — اكتب النص وارفع صورة، يُطبّقان على كل قوالب الخبر دفعةً واحدة</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">
            <textarea value="{{ quickHeadline }}" onInput="{{ onQuickHeadline }}" placeholder="اكتب نص الخبر هنا..." style="flex:1;min-width:240px;font-family:'IBM Plex Sans Arabic',sans-serif;font-size:14px;padding:9px 11px;border-radius:8px;border:1px solid #cdc4af;background:#faf7ef;color:#1b2326;resize:vertical;min-height:46px;line-height:1.6;"></textarea>
            <label style="display:flex;align-items:center;gap:7px;cursor:pointer;background:#faf7ef;border:1px solid #cdc4af;border-radius:8px;padding:10px 14px;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:13px;color:#1b2326;">
              <span>🖼️ {{ quickImgLabel }}</span>
              <input type="file" accept="image/*" onChange="{{ onQuickImage }}" style="display:none;">
            </label>
            <button onClick="{{ applyQuickNews }}" class="btn" style="background:var(--brick);color:#fdf6e3;">طبّق على الكل ←</button>
          </div>
        </div>
      </div>
      <div style="padding:24px 30px 34px;display:flex;flex-wrap:wrap;gap:24px;">
        <sc-if value="{{ hasRecent }}">
          <div style="width:100%;margin-bottom:4px;">
            <div style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:13px;color:#7a7158;margin-bottom:13px;letter-spacing:.5px;">↻ آخر ما استُخدم</div>
            <div style="display:flex;flex-wrap:wrap;gap:16px;">
              <sc-for list="{{ recentDesigns }}" as="rz" hint-placeholder-count="0">
                <div onClick="{{ rz.open }}" style="flex:none;width:150px;cursor:pointer;">
                  <div style="height:108px;border-radius:9px;overflow:hidden;background:var(--dark);position:relative;box-shadow:0 2px 8px rgba(0,0,0,.14);display:flex;align-items:center;justify-content:center;">
                    <sc-if value="{{ rz.hasThumb }}"><div style="{{ rz.thumbStyle }}"></div></sc-if>
                    <sc-if value="{{ rz.noThumb }}"><div style="position:relative;width:46px;height:30px;background:var(--logoCur) center/contain no-repeat;opacity:.9;"></div></sc-if>
                    <span style="position:absolute;top:0;right:0;left:0;height:4px;background:var(--gold);"></span>
                  </div>
                  <div style="font-family:var(--fontHead),sans-serif;font-weight:600;font-size:12px;color:#1b2326;margin-top:7px;">{{ rz.name }}</div>
                </div>
              </sc-for>
            </div>
            <div style="height:1px;background:#cfc7b4;margin:26px 0 2px;"></div>
          </div>
        </sc-if>
        <sc-for list="{{ designs }}" as="dz" hint-placeholder-count="0">
          <div onClick="{{ dz.open }}" style="flex:none;width:210px;cursor:pointer;">
            <div style="height:150px;border-radius:10px;overflow:hidden;background:var(--dark);position:relative;box-shadow:0 2px 8px rgba(0,0,0,.14);display:flex;align-items:center;justify-content:center;">
              <sc-if value="{{ dz.hasThumb }}">
                <div style="{{ dz.thumbStyle }}"></div>
              </sc-if>
              <sc-if value="{{ dz.noThumb }}">
                <div style="position:absolute;inset:0;background-image:var(--patURL);background-size:cover;opacity:.5;"></div>
                <div style="position:relative;width:64px;height:42px;background:var(--logoCur) center/contain no-repeat;opacity:.92;"></div>
              </sc-if>
              <span style="position:absolute;top:0;right:0;left:0;height:5px;background:var(--gold);"></span>
              <sc-if value="{{ dz.canDelete }}">
                <span onClick="{{ dz.reset }}" title="حذف المنشور" style="position:absolute;top:9px;left:9px;width:26px;height:26px;border-radius:7px;background:rgba(185,65,38,.92);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;z-index:3;">🗑</span>
              </sc-if>
              <span style="position:absolute;bottom:8px;right:10px;font-family:var(--fontHead),sans-serif;font-weight:600;font-size:11px;color:var(--gold);background:rgba(0,0,0,.55);padding:3px 8px;border-radius:5px;">{{ dz.cat }}</span>
            </div>
            <div style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;color:#1b2326;margin-top:9px;">{{ dz.name }}</div>
          </div>
        </sc-for>

        <div onClick="{{ openBuilder }}" style="flex:none;width:210px;cursor:pointer;">
          <div style="height:150px;border-radius:10px;border:2px dashed #b3a98f;background:#efeada;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#8a7f63;">
            <span style="font-size:38px;line-height:1;">＋</span>
            <span style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:13px;">تصميم جديد</span>
          </div>
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;color:#1b2326;margin-top:9px;">أنشئ تصميماً بمقاس وعناصر مخصّصة</div>
        </div>
        <sc-for list="{{ templates }}" as="tp" hint-placeholder-count="0">
          <div style="flex:none;width:210px;">
            <div onClick="{{ tp.open }}" style="height:150px;border-radius:10px;overflow:hidden;background:var(--dark);position:relative;box-shadow:0 2px 8px rgba(0,0,0,.14);display:flex;align-items:center;justify-content:center;cursor:pointer;">
              <span style="position:absolute;top:0;right:0;left:0;height:5px;background:var(--gold);"></span>
              <div style="width:80px;height:52px;background:var(--logoCur) center/contain no-repeat;"></div>
              <span style="position:absolute;bottom:8px;right:10px;font-family:var(--fontHead),sans-serif;font-weight:700;font-size:11px;color:var(--gold);background:rgba(0,0,0,.35);padding:3px 8px;border-radius:5px;">قالب محفوظ</span>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:9px;"><span style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;color:#1b2326;">{{ tp.name }}</span><span onClick="{{ tp.del }}" style="cursor:pointer;color:#b94126;font-size:13px;">حذف</span></div>
          </div>
        </sc-for>

        <div onClick="{{ openGenerator }}" style="flex:none;width:210px;cursor:pointer;">
          <div style="height:150px;border-radius:10px;border:2px solid var(--gold);background:linear-gradient(135deg,var(--dark) 0%,var(--brick) 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
            <div style="font-size:36px;">🤖</div>
            <div style="color:#fdf6e3;font-weight:700;font-size:13px;">مولّد</div>
            <div style="color:#f2d47e;font-size:11px;">المنشورات</div>
          </div>
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;color:#1b2326;margin-top:9px;">اكتب الخبر وارفع صورة</div>
        </div>
        </sc-for>
      </div>
    </div>
  </sc-if>

  <!-- ================= EDIT ================= -->
  <sc-if value="{{ isEdit }}" hint-placeholder-val="{{ false }}">
    <div style="min-height:100vh;background:#d6d0c3;display:flex;flex-direction:column;">
      <div style="background:var(--dark);padding:13px 22px;display:flex;flex-wrap:wrap;align-items:center;gap:10px;border-bottom:3px solid var(--gold);">
        <button onClick="{{ goBack }}" class="btn" style="background:#2a3338;color:#fdf6e3;font-size:14px;padding:9px 15px;">→ التصاميم</button>
        <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:14px;white-space:nowrap;">{{ selName }}</div>
        <button onClick="{{ openSettings }}" class="btn" style="margin-right:auto;background:#2a3338;color:#f2d47e;font-size:14px;padding:9px 15px;">⚙ الإعدادات</button>
        <button onClick="{{ saveTpl }}" class="desk-only btn" style="background:#2a3338;color:#f2d47e;font-size:14px;padding:9px 15px;">★ حفظ كقالب</button>
        <button onClick="{{ copyImg }}" class="desk-only btn" style="background:#2a3338;color:#f2d47e;font-size:14px;padding:9px 15px;">⧉ نسخ</button>
        <button onClick="{{ shareImg }}" class="desk-only btn" style="background:#2a3338;color:#f2d47e;font-size:14px;padding:9px 15px;">↗ مشاركة</button>
        <button onClick="{{ exportPng }}" class="desk-only btn" style="background:var(--brick);color:#fdf6e3;font-size:14px;padding:9px 20px;">⤓ حفظ بدقة عالية</button>
      </div>
      <div class="edit-body" style="display:flex;flex:1;align-items:stretch;">
        <div class="edit-panel" style="width:300px;flex:none;background:#1b2326;padding:18px 16px;overflow:auto;max-height:calc(100vh - 56px);">
          <button onClick="{{ toggleAdv }}" class="btn" style="width:100%;margin-bottom:14px;background:{{ advBtnBg }};color:{{ advBtnFg }};border:1px solid #34403d;font-size:14px;padding:11px;">{{ advBtnLabel }}</button>
          <sc-if value="{{ adv }}">
          <sc-if value="{{ bgToggle }}">
          <div class="grp">
            <h4>خلفية التصميم</h4>
            <span class="lab" style="margin-bottom:8px;">اختر لون الخلفية — يتبدّل اللوغو والتردد تلقائياً</span>
            <div style="display:flex;gap:10px;">
              <button onClick="{{ setBgDark }}" style="flex:1;cursor:pointer;border-radius:9px;padding:12px 6px;border:2px solid {{ bgDarkBorder }};background:#1b2326;color:#fdf6e3;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;gap:7px;">
                <span style="width:30px;height:20px;border-radius:4px;background:#1b2326;border:1px solid #4a5559;"></span>داكن
              </button>
              <button onClick="{{ setBgBrick }}" style="flex:1;cursor:pointer;border-radius:9px;padding:12px 6px;border:2px solid {{ bgBrickBorder }};background:#2a3338;color:#fdf6e3;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;gap:7px;">
                <span style="width:30px;height:20px;border-radius:4px;background:#c1624c;border:1px solid #d98a76;"></span>طوبي
              </button>
            </div>
          </div>
          </sc-if>
          <div class="grp">
            <h4>الألوان</h4>
            <span class="lab" style="margin-bottom:7px;">ألوان الهوية الأساسية — استعادة</span>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:13px;">
              <sc-for list="{{ palettes }}" as="pal" hint-placeholder-count="5">
                <div onClick="{{ pal.apply }}" title="{{ pal.name }}" style="cursor:pointer;border:1px solid #3a4448;border-radius:8px;overflow:hidden;width:52px;">
                  <div style="display:flex;height:20px;">
                    <span style="flex:1;background:{{ pal.c0 }};"></span><span style="flex:1;background:{{ pal.c1 }};"></span><span style="flex:1;background:{{ pal.c2 }};"></span><span style="flex:1;background:{{ pal.c3 }};"></span>
                  </div>
                  <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:9px;color:#aeb6b8;text-align:center;padding:3px 0;background:#222b2f;">{{ pal.name }}</div>
                </div>
              </sc-for>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div><span class="lab">داكن</span><input type="color" class="col" value="{{ t.dark }}" onInput="{{ onDark }}"></div>
              <div><span class="lab">طوبي</span><input type="color" class="col" value="{{ t.brick }}" onInput="{{ onBrick }}"></div>
              <div><span class="lab">أحمر</span><input type="color" class="col" value="{{ t.deep }}" onInput="{{ onDeep }}"></div>
              <div><span class="lab">كريمي</span><input type="color" class="col" value="{{ t.cream }}" onInput="{{ onCream }}"></div>
              <div><span class="lab">ذهبي</span><input type="color" class="col" value="{{ t.gold }}" onInput="{{ onGold }}"></div>
            </div>
          </div>
          <div class="grp">
            <h4>العناصر الظاهرة</h4>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <label class="ck"><input type="checkbox" checked="{{ showLogo }}" onChange="{{ onShowLogo }}"> إظهار اللوغو</label>
              <label class="ck"><input type="checkbox" checked="{{ showFreq }}" onChange="{{ onShowFreq }}"> إظهار التردد / FM</label>
              <label class="ck"><input type="checkbox" checked="{{ showPhoto }}" onChange="{{ onShowPhoto }}"> إظهار الصورة</label>
              <sc-if value="{{ isBreakingType }}"><label class="ck"><input type="checkbox" checked="{{ showBadge }}" onChange="{{ onShowBadge }}"> إظهار شارة «عاجل»</label></sc-if>
              <sc-if value="{{ canScrim }}"><label class="ck"><input type="checkbox" checked="{{ textScrim }}" onChange="{{ onTextScrim }}"> تظليل خلف النص (لوضوح النص فوق الصورة)</label></sc-if>
            </div>
            <sc-if value="{{ scrimOn }}"><span class="lab" style="margin-top:11px;">قوة التظليل (×{{ scrimAmt }})</span><input type="range" class="rng" min="0.15" max="1.4" step="0.05" value="{{ scrimAmt }}" onInput="{{ onScrimAmt }}"></sc-if>
            <sc-if value="{{ isBoxWidth }}"><span class="lab" style="margin-top:11px;">عرض المربع ({{ boxW }}%)</span><input type="range" class="rng" min="55" max="100" step="1" value="{{ boxW }}" onInput="{{ onBoxW }}"></sc-if>
            <span class="lab" style="margin-top:13px;">لون اللوغو والتردد</span>
            <div style="display:flex;gap:7px;margin-top:6px;">
              <button onClick="{{ setToneAuto }}" style="flex:1;cursor:pointer;border-radius:8px;padding:9px 4px;border:2px solid {{ toneAutoB }};background:#222b2f;color:#fdf6e3;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:12px;">تلقائي</button>
              <button onClick="{{ setToneGold }}" style="flex:1;cursor:pointer;border-radius:8px;padding:9px 4px;border:2px solid {{ toneGoldB }};background:#222b2f;color:#f2d47e;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:12px;">ذهبي</button>
              <button onClick="{{ setToneBrick }}" style="flex:1;cursor:pointer;border-radius:8px;padding:9px 4px;border:2px solid {{ toneBrickB }};background:#222b2f;color:#cf7d68;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:12px;">طوبي</button>
            </div>
          </div>
          <div class="grp">
            <h4>النقشة — تحكّم منفصل</h4>
            <div style="font-family:'IBM Plex Sans Arabic';font-weight:700;font-size:12px;color:#c98a78;margin:2px 0 6px;">▲ النقشة العلوية</div>
            <span class="lab">الشدّة</span><input type="range" class="rng" min="0" max="2" step="0.05" value="{{ ptopOp }}" onInput="{{ onPtopOp }}">
            <span class="lab" style="margin-top:7px;">الحجم</span><input type="range" class="rng" min="40" max="240" step="2" value="{{ ptopSize }}" onInput="{{ onPtopSize }}">
            <span class="lab" style="margin-top:7px;">الموضع (عمودي)</span><input type="range" class="rng" min="-400" max="300" step="2" value="{{ ptopY }}" onInput="{{ onPtopY }}">
            <div style="font-family:'IBM Plex Sans Arabic';font-weight:700;font-size:12px;color:#c98a78;margin:13px 0 6px;">▼ النقشة السفلية</div>
            <span class="lab">الشدّة</span><input type="range" class="rng" min="0" max="2" step="0.05" value="{{ pbotOp }}" onInput="{{ onPbotOp }}">
            <span class="lab" style="margin-top:7px;">الحجم</span><input type="range" class="rng" min="40" max="240" step="2" value="{{ pbotSize }}" onInput="{{ onPbotSize }}">
            <span class="lab" style="margin-top:7px;">الموضع (عمودي)</span><input type="range" class="rng" min="-400" max="300" step="2" value="{{ pbotY }}" onInput="{{ onPbotY }}">
            <div style="font-family:'IBM Plex Sans Arabic';font-weight:700;font-size:12px;color:#c98a78;margin:13px 0 6px;">▢ نقشة مربّع النص</div>
            <span class="lab">الشدّة</span><input type="range" class="rng" min="0" max="2" step="0.05" value="{{ pboxOp }}" onInput="{{ onPboxOp }}">
            <span class="lab" style="margin-top:7px;">الحجم</span><input type="range" class="rng" min="40" max="200" step="2" value="{{ pboxSize }}" onInput="{{ onPboxSize }}">
            <div style="font-family:'IBM Plex Sans Arabic';font-weight:700;font-size:12px;color:#c98a78;margin:13px 0 6px;">⬗ تدرّج/تلاشي النقشة (أعلى وأسفل)</div>
            <span class="lab" style="margin-top:7px;">شدّة التلاشي</span><input type="range" class="rng" min="0" max="1" step="0.05" value="{{ patFadeAmt }}" onInput="{{ onPatFadeAmt }}">
            <hr style="border:none;border-top:1px solid #313b3f;margin:14px 0;">
            <span class="lab">استدارة الزوايا</span><input type="range" class="rng" min="0" max="32" step="1" value="{{ radius }}" onInput="{{ onRadius }}">
            <label class="ck" style="margin-top:12px;"><input type="checkbox" checked="{{ bar }}" onChange="{{ onBar }}"> الشريط الذهبي</label>
          </div>
          <div class="grp">
            <h4>الخط</h4>
            <select class="ic" value="{{ font }}" onChange="{{ onFont }}"><option value="plex">IBM Plex Sans Arabic</option><option value="cairo">Cairo + Tajawal</option><option value="tajawal">Tajawal</option><option value="reem">Reem Kufi + Cairo</option></select>
            <label class="ck" style="margin-top:12px;"><input type="checkbox" checked="{{ bold }}" onChange="{{ onBold }}"> خط عريض (Bold)</label>
          </div>
          </sc-if>
          <sc-if value="{{ hasTextFields }}">
          <div class="grp">
            <h4>النصوص</h4>
            <sc-if value="{{ fHeadline }}"><span class="lab">{{ headlineLabel }}</span><textarea class="ic" rows="4" style="resize:vertical;line-height:1.75;min-height:104px;" value="{{ headline }}" onInput="{{ onHeadline }}"></textarea>
            <span class="lab" style="margin-top:11px;">حجم النص (×{{ headScale }})</span><input type="range" class="rng" min="0.6" max="3" step="0.02" value="{{ headScale }}" onInput="{{ onHeadScale }}"></sc-if>
            <sc-if value="{{ fTicker }}"><span class="lab" style="margin-top:10px;">الشريط المتحرك</span><textarea class="ic" rows="3" style="resize:vertical;line-height:1.7;min-height:78px;" value="{{ ticker }}" onInput="{{ onTicker }}"></textarea></sc-if>
            <sc-if value="{{ fGuest }}"><span class="lab" style="margin-top:10px;">اسم الضيف</span><input type="text" class="ic" value="{{ guest }}" onInput="{{ onGuest }}"></sc-if>
            <sc-if value="{{ fGuestTitle }}"><span class="lab" style="margin-top:10px;">صفة الضيف</span><input type="text" class="ic" value="{{ guestTitle }}" onInput="{{ onGuestTitle }}"></sc-if>
            <sc-if value="{{ fProgram }}"><span class="lab" style="margin-top:10px;">اسم البرنامج</span><input type="text" class="ic" value="{{ program }}" onInput="{{ onProgram }}"></sc-if>
            <sc-if value="{{ fHost }}"><span class="lab" style="margin-top:10px;">المذيع</span><input type="text" class="ic" value="{{ host }}" onInput="{{ onHost }}"></sc-if>
            <sc-if value="{{ fAgLabel }}"><span class="lab" style="margin-top:10px;">عنوان الأوديوغرام (الأعلى)</span><input type="text" class="ic" value="{{ agLabel }}" onInput="{{ onAgLabel }}"></sc-if>
          </div>
          </sc-if>
          <sc-if value="{{ adv }}">
          <div class="grp">
            <h4>تنسيق النص</h4>
            <label class="ck" style="margin-bottom:11px;"><input type="checkbox" checked="{{ autoFit }}" onChange="{{ onAutoFit }}"> ملاءمة تلقائية للنص الطويل</label>
            <span class="lab">حجم النص</span><input type="range" class="rng" min="0.6" max="3" step="0.02" value="{{ headScale }}" onInput="{{ onHeadScale }}">
            <span class="lab" style="margin-top:9px;">محاذاة النص</span><select class="ic" value="{{ txtAlign }}" onChange="{{ onTxtAlign }}"><option value="justify">ضبط (Justify)</option><option value="right">يمين</option><option value="center">وسط</option></select>
            <span class="lab" style="margin-top:9px;">هوامش النص</span><input type="range" class="rng" min="6" max="80" step="1" value="{{ txtPad }}" onInput="{{ onTxtPad }}">
            <span class="lab" style="margin-top:9px;">تقارب الكلمات ({{ wordSp }})</span><input type="range" class="rng" min="-12" max="18" step="1" value="{{ wordSp }}" onInput="{{ onWordSp }}">
            <span class="lab" style="margin-top:9px;">ارتفاع الأسطر (×{{ lineH }})</span><input type="range" class="rng" min="1" max="2.6" step="0.05" value="{{ lineH }}" onInput="{{ onLineH }}">
            <sc-if value="{{ fHeadline }}">
              <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-top:9px;">ℹ️ عند اختيار محاذاة «ضبط» تُملأ الأسطر بالكشيدة (مطّ الحروف الموصولة) تلقائياً بدل تباعد الكلمات — حسب قواعد الخط العربي.</div>
            </sc-if>
          </div>
          </sc-if>
          <sc-if value="{{ isCarousel }}">
            <div class="grp">
              <h4>محتوى الشريحة الحالية</h4>
              <span class="lab">عنوان الشريحة</span><input type="text" class="ic" value="{{ carHead }}" onInput="{{ onCarHead }}">
              <span class="lab" style="margin-top:10px;">نص الشريحة</span><textarea class="ic" rows="3" style="resize:vertical;line-height:1.6;" value="{{ carBody }}" onInput="{{ onCarBody }}"></textarea>
            </div>
          </sc-if>
          <sc-if value="{{ isWeather }}">
            <div class="grp">
              <h4>بيانات الطقس</h4>
              <span class="lab">المدينة</span><input type="text" class="ic" value="{{ wCity }}" onInput="{{ onWCity }}">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">
                <div><span class="lab">الحرارة</span><input type="text" class="ic" value="{{ wTemp }}" onInput="{{ onWTemp }}"></div>
                <div><span class="lab">الأيقونة</span><input type="text" class="ic" value="{{ wIcon }}" onInput="{{ onWIcon }}" placeholder="☀ ☁ ⛅ 🌧"></div>
                <div><span class="lab">الصغرى</span><input type="text" class="ic" value="{{ wLo }}" onInput="{{ onWLo }}"></div>
                <div><span class="lab">الكبرى</span><input type="text" class="ic" value="{{ wHi }}" onInput="{{ onWHi }}"></div>
              </div>
              <span class="lab" style="margin-top:10px;">الحالة</span><input type="text" class="ic" value="{{ wCond }}" onInput="{{ onWCond }}">
            </div>
          </sc-if>
          <sc-if value="{{ isMatch }}">
            <div class="grp">
              <h4>بيانات المباراة</h4>
              <span class="lab">البطولة</span><input type="text" class="ic" value="{{ mLeague }}" onInput="{{ onMLeague }}">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">
                <div><span class="lab">الفريق الأول</span><input type="text" class="ic" value="{{ mTeamA }}" onInput="{{ onMTeamA }}"></div>
                <div><span class="lab">الفريق الثاني</span><input type="text" class="ic" value="{{ mTeamB }}" onInput="{{ onMTeamB }}"></div>
                <div><span class="lab">نتيجة الأول</span><input type="text" class="ic" value="{{ mScoreA }}" onInput="{{ onMScoreA }}"></div>
                <div><span class="lab">نتيجة الثاني</span><input type="text" class="ic" value="{{ mScoreB }}" onInput="{{ onMScoreB }}"></div>
              </div>
              <span class="lab" style="margin-top:10px;">الحالة</span><input type="text" class="ic" value="{{ mStatus }}" onInput="{{ onMStatus }}">
            </div>
          </sc-if>
          <sc-if value="{{ isBroadcast }}">
            <div class="grp">
              <h4>عناصر البث</h4>
              <span class="lab">عنوان شريط الأخبار</span><input type="text" class="ic" value="{{ tickerLabel }}" onInput="{{ onTickerLabel }}" placeholder="عاجل / أخبار / رياضة">
              <label class="ck" style="margin-top:12px;"><input type="checkbox" checked="{{ showRerun }}" onChange="{{ onShowRerun }}"> شارة «إعادة»</label>
            </div>
          </sc-if>
          <sc-if value="{{ isSchedule }}">
            <div class="grp">
              <h4>برامج الجدول</h4>
              <sc-for list="{{ scheduleRows }}" as="r" hint-placeholder-count="5">
                <div style="border:1px solid #313b3f;border-radius:9px;padding:9px;margin-bottom:9px;">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;"><span class="lab" style="margin:0;">برنامج {{ r.n }}</span><span onClick="{{ r.del }}" style="cursor:pointer;color:#b94126;font-size:12px;">حذف</span></div>
                  <input type="text" class="ic" value="{{ r.name }}" onInput="{{ r.onName }}" placeholder="اسم البرنامج">
                  <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-top:7px;">
                    <input type="text" class="ic" value="{{ r.host }}" onInput="{{ r.onHost }}" placeholder="المذيع">
                    <input type="text" class="ic" value="{{ r.time }}" onInput="{{ r.onTime }}" placeholder="08:00" style="direction:ltr;text-align:center;">
                  </div>
                </div>
              </sc-for>
              <button onClick="{{ schedAdd }}" class="btn" style="width:100%;background:#26312f;color:#f2d47e;border:1px solid #34403d;">＋ أضف برنامجاً</button>
            </div>
          </sc-if>
          <sc-if value="{{ hasPhoto }}">
            <div class="grp">
              <h4>الصورة</h4>
              <div style="display:flex;gap:8px;">
                <button onClick="{{ slotReplace }}" class="btn" style="flex:1;background:#26312f;color:#f2d47e;border:1px solid #34403d;">⟳ استبدال</button>
                <button onClick="{{ slotClear }}" class="btn" style="flex:1;background:#3a2420;color:#f2d47e;border:1px solid #5a382f;">🗑 حذف</button>
              </div>
              <sc-if value="{{ isNewsPhoto }}"><div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-top:9px;">💡 <b style="color:#cfd6d8;">اسحب الصورة مباشرةً</b> على التصميم لتحريكها، أو استخدم المنزلقات بالأسفل. «حجم الصورة» يكبّرها، والموضع يحرّكها.</div></sc-if>
              <sc-if value="{{ notNewsPhoto }}"><div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-top:9px;">💡 الإطار ثابت — لتكبير الصورة أو تحريكها داخله: <b style="color:#cfd6d8;">انقر مرتين</b> على الصورة ثم اسحبها أو اسحب الزوايا. الإطار لا يتحرك.</div></sc-if>
              <sc-if value="{{ isNewsPhoto }}"><span class="lab" style="margin-top:12px;">حجم الصورة (تكبير ×{{ imgScale }})</span><input type="range" class="rng" min="0.5" max="3" step="0.05" value="{{ imgScale }}" onInput="{{ onImgScale }}"><span class="lab" style="margin-top:10px;">موضع الصورة (أفقي)</span><input type="range" class="rng" min="-160" max="160" step="2" value="{{ imgX }}" onInput="{{ onImgX }}"><span class="lab" style="margin-top:10px;">موضع الصورة (عمودي)</span><input type="range" class="rng" min="-160" max="160" step="2" value="{{ imgY }}" onInput="{{ onImgY }}"></sc-if>
              <sc-if value="{{ notNewsPhoto }}"><span class="lab" style="margin-top:12px;">حجم الإطار (×{{ imgScale }})</span><input type="range" class="rng" min="0.5" max="2" step="0.05" value="{{ imgScale }}" onInput="{{ onImgScale }}"></sc-if>
            </div>
          </sc-if>
          <sc-if value="{{ isCustomSel }}">
            <div class="grp">
              <h4>الصورة المحددة</h4>
              <sc-if value="{{ hasSelPng }}">
                <span class="lab">حجم صورة {{ selPngNum }} (×{{ selPngScale }})</span>
                <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
                  <button onClick="{{ selPngSmaller }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:5px 13px;font-size:16px;">−</button>
                  <input type="range" class="rng" style="flex:1;" min="0.2" max="4" step="0.05" value="{{ selPngScale }}" onInput="{{ onSelPngScale }}">
                  <button onClick="{{ selPngBigger }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:5px 13px;font-size:16px;">＋</button>
                </div>
                <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.6;margin-top:8px;">اسحب الصورة لتحريكها · هذا الشريط أو عجلة الماوس فوقها للتكبير/التصغير.</div>
              </sc-if>
              <sc-if value="{{ noSelPng }}">
                <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:12px;color:#8a9295;line-height:1.7;">انقر على أي صورة مرفقة في التصميم لتحديدها، ثم كبّرها أو صغّرها من هنا.</div>
              </sc-if>
            </div>
            <sc-if value="{{ cImgOn }}">
            <div class="grp">
              <h4>صورة الخلفية — الحجم والموضع</h4>
              <span class="lab">الحجم ({{ cimgW }}%)</span><input type="range" class="rng" min="20" max="240" step="1" value="{{ cimgW }}" onInput="{{ onCimgSize }}">
              <span class="lab" style="margin-top:8px;">الموضع (أفقي)</span><input type="range" class="rng" min="-300" max="300" step="2" value="{{ cimgPX }}" onInput="{{ onCimgPX }}">
              <span class="lab" style="margin-top:8px;">الموضع (عمودي)</span><input type="range" class="rng" min="-300" max="300" step="2" value="{{ cimgPY }}" onInput="{{ onCimgPY }}">
              <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.6;margin-top:8px;">💡 أو اسحب الزوايا الذهبية مباشرةً على التصميم لتغيير المساحة. الصورة تحافظ على نسبها دائماً.</div>
              <button onClick="{{ cimgReset }}" class="btn" style="width:100%;margin-top:10px;background:#2a3338;color:#f2d47e;border:1px solid #34403d;">إعادة ضبط الخلفية</button>
            </div>
            </sc-if>
            <div class="grp">
              <h4>الطبقات (الأعلى فوق)</h4>
              <sc-for list="{{ layerList }}" as="ly" hint-placeholder-count="3">
                <div style="padding:7px 9px;margin-bottom:7px;border:1px solid #313b3f;border-radius:8px;background:#222b2e;">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span style="flex:1;color:#cfd6d8;font-size:13px;font-family:'IBM Plex Sans Arabic',sans-serif;">{{ ly.name }}</span>
                    <button onClick="{{ ly.up }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:4px 10px;font-size:13px;" title="لأعلى">▲</button>
                    <button onClick="{{ ly.down }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:4px 10px;font-size:13px;" title="لأسفل">▼</button>
                  </div>
                  <sc-if value="{{ ly.isImg }}">
                    <button onClick="{{ ly.toggleFit }}" class="btn" style="width:100%;margin-top:7px;background:#26312f;color:#f2d47e;border:1px solid #34403d;font-size:12px;">طريقة العرض: {{ ly.fitLabel }} ⇄</button>
                  </sc-if>
                  <sc-if value="{{ ly.resizable }}">
                    <div style="display:flex;align-items:center;gap:7px;margin-top:7px;">
                      <button onClick="{{ ly.smaller }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:3px 11px;font-size:15px;">−</button>
                      <input type="range" class="rng" style="flex:1;" min="0.2" max="4" step="0.05" value="{{ ly.scale }}" onInput="{{ ly.onScale }}">
                      <button onClick="{{ ly.bigger }}" class="btn" style="background:#2a3338;color:#f2d47e;padding:3px 11px;font-size:15px;">＋</button>
                      <sc-if value="{{ ly.isPng }}"><span onClick="{{ ly.del }}" style="cursor:pointer;color:#b94126;font-size:12px;font-family:'IBM Plex Sans Arabic',sans-serif;">حذف</span></sc-if>
                    </div>
                  </sc-if>
                </div>
              </sc-for>
              <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.6;margin-top:4px;">العنصر في الأعلى يظهر فوق البقية. للصور: حرّك المؤشّر لتغيير الحجم.</div>
            </div>
          </sc-if>
          <sc-if value="{{ adv }}">
          <div class="grp">
            <h4>المواضع (لأعلى / لأسفل)</h4>
            <span class="lab" style="margin-top:8px;">موضع النص</span><input type="range" class="rng" min="-220" max="220" step="2" value="{{ boxY }}" onInput="{{ onBoxY }}">
            <span class="lab" style="margin-top:8px;">موضع شارة العاجل</span><input type="range" class="rng" min="-180" max="180" step="2" value="{{ badgeY }}" onInput="{{ onBadgeY }}">
          </div>
          <div class="grp">
            <h4>خيارات التصدير</h4>
            <span class="lab">جودة التصدير (×{{ exportScale }})</span><input type="range" class="rng" min="2" max="5" step="0.5" value="{{ exportScale }}" onInput="{{ onExportScale }}">
            <label class="ck" style="margin-top:12px;"><input type="checkbox" checked="{{ exportTransparent }}" onChange="{{ onExportTransparent }}"> خلفية شفافة (PNG)</label>
          </div>
          <button onClick="{{ resetAll }}" class="btn" style="width:100%;background:#3a2420;color:#f2d47e;border:1px solid #5a382f;">استعادة الافتراضي</button>
          </sc-if>
          <button onClick="{{ exportPng }}" class="mobile-save btn" style="width:100%;margin-top:10px;background:var(--brick);color:#fdf6e3;font-size:16px;padding:14px;">⤓ حفظ الصورة بدقة عالية</button>
          <div class="mobile-save" style="display:flex;gap:8px;margin-top:8px;"><button onClick="{{ shareImg }}" class="btn" style="flex:1;background:#2a3338;color:#f2d47e;">↗ مشاركة</button><button onClick="{{ copyImg }}" class="btn" style="flex:1;background:#2a3338;color:#f2d47e;">⧉ نسخ</button></div>
          <button onClick="{{ saveTpl }}" class="mobile-save btn" style="width:100%;margin-top:8px;background:#26312f;color:#f2d47e;border:1px solid #34403d;">★ حفظ كقالب</button>
        </div>

        <div class="edit-preview" style="flex:1;overflow:auto;display:flex;align-items:center;justify-content:center;padding:40px;">
        <div class="edit-stage" ref="{{ stageRef }}" style="display:flex;align-items:center;justify-content:center;transform-origin:center center;">

          <sc-if value="{{ d.breaking_photo }}">
            <div data-export-node="1" data-w="1080" data-h="1440" style="width:380px;height:507px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:absolute;bottom:var(--pbotY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskBot);mask-image:var(--patMaskBot);background-repeat:no-repeat;background-position:center center;background-size:var(--pbotSize);opacity:var(--pbotOp);pointer-events:none;"></div>
              <sc-if value="{{ showPhoto }}"><image-slot id="bp_photo" style="width:100%;height:calc(258px * var(--imgScale));" shape="rect" placeholder="اسحب صورة الخبر"></image-slot></sc-if>
              <sc-if value="{{ showBadge }}"><div style="position:absolute;top:238px;right:22px;display:inline-block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.4));transform:translate(var(--badgeX), var(--badgeY)) scale(var(--badgeS));cursor:move;" data-mv="badge"><img src="assets/badge-aajel-plain.png" style="height:64px;display:block;"><div style="position:absolute;top:var(--dateTop);left:var(--dateLeft);width:var(--dateW);text-align:center;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);direction:ltr;line-height:1.05;font-size:var(--dateFs);">{{ dateDM }}<br>{{ dateY }}</div></div></sc-if>
              <p style="position:relative;padding:30px var(--txtPad) 0;font-family:var(--fontBody),sans-serif;color:var(--cream);font-size:calc(19px*var(--headScale));line-height:1.95;margin:0;text-align:var(--txtAlign);text-justify:inter-word;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ headline }}</p>
              <sc-if value="{{ showFreq }}"><div data-mv="fm" style="position:absolute;transform:translate(var(--fmX),var(--fmY)) scale(var(--fmS));cursor:move;left:24px;bottom:20px;width:58px;height:36px;background:var(--fmCur) center/contain no-repeat;"></div></sc-if>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;right:24px;bottom:18px;width:55px;height:36px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.breaking_text }}">
            <div data-export-node="1" data-w="1080" data-h="1440" style="width:380px;height:507px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:26px;">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:absolute;bottom:var(--pbotY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskBot);mask-image:var(--patMaskBot);background-repeat:no-repeat;background-position:center center;background-size:var(--pbotSize);opacity:var(--pbotOp);pointer-events:none;"></div>
              <sc-if value="{{ showBadge }}"><div style="position:relative;width:fit-content;margin:0 auto 18px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.25));transform:translate(var(--badgeX), var(--badgeY)) scale(var(--badgeS));cursor:move;" data-mv="badge"><img src="assets/badge-aajel-plain.png" style="height:56px;display:block;"><div style="position:absolute;top:var(--dateTop);left:var(--dateLeft);width:var(--dateW);text-align:center;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);direction:ltr;line-height:1.05;font-size:var(--dateFs);">{{ dateDM }}<br>{{ dateY }}</div></div></sc-if>
              <div style="position:relative;width:var(--boxWidth);margin-left:auto;margin-right:auto;background:var(--cream);border-radius:16px;padding:24px var(--txtPad);min-height:285px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">
                <div style="position:absolute;inset:0;background-image:var(--patURLalt);background-repeat:no-repeat;background-position:center;background-size:var(--pboxSize);opacity:var(--pboxOp);pointer-events:none;"></div>
                <p style="position:relative;font-family:var(--fontBody),sans-serif;color:var(--dark);font-size:calc(18px*var(--headScale));line-height:1.95;margin:0;text-align:var(--txtAlign);text-justify:inter-word;">{{ headline }}</p>
              </div>
              <sc-if value="{{ showFreq }}"><div data-mv="fm" style="position:absolute;transform:translate(var(--fmX),var(--fmY)) scale(var(--fmS));cursor:move;left:24px;bottom:20px;width:55px;height:34px;background:var(--fmCur) center/contain no-repeat;"></div></sc-if>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;right:24px;bottom:18px;width:52px;height:34px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.news_photo }}">
            <div data-export-node="1" data-w="1080" data-h="1350" style="width:384px;height:480px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);z-index:5;"></div></sc-if>
              <sc-if value="{{ showPhoto }}"><div data-mv="img" style="position:absolute;top:0;left:-9%;right:-9%;height:70%;transform:translate(var(--imgX), var(--imgY)) scale(var(--imgScale));transform-origin:center;cursor:move;"><image-slot id="np_photo" fit="cover" style="position:absolute;inset:0;width:100%;height:100%;" shape="rect" placeholder="اسحب صورة الخبر"></image-slot></div></sc-if>
              <div style="position:absolute;top:0;left:0;right:0;height:62%;background:linear-gradient(180deg, rgba(27,35,38,0) 50%, rgba(27,35,38,.92) 100%);pointer-events:none;z-index:1;"></div>
              <div style="position:absolute;left:0;right:0;bottom:0;height:40%;background:var(--rootBg);z-index:0;"></div>
              <div style="position:absolute;bottom:var(--pbotY);left:0;right:0;height:34%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskBot);mask-image:var(--patMaskBot);background-repeat:no-repeat;background-position:left bottom;background-size:150%;opacity:var(--pbotOp);pointer-events:none;z-index:1;"></div>
              <div style="position:absolute;top:calc(62% - 17px);right:26px;z-index:4;display:flex;align-items:center;gap:10px;">
                <span style="background:var(--gold);color:var(--dark);font-family:var(--fontHead),sans-serif;font-weight:700;font-size:14px;padding:6px 18px;border-radius:5px;letter-spacing:.5px;direction:ltr;box-shadow:0 5px 14px rgba(0,0,0,.4);">{{ dateFull }}</span>
                <span style="width:50px;height:3px;background:var(--gold);border-radius:2px;"></span>
              </div>
              <p style="position:absolute;top:65.5%;right:26px;left:26px;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:calc(24px*var(--headScale));line-height:1.5;margin:0;z-index:3;transform:translate(var(--boxX),var(--boxY)) scale(var(--boxS));transform-origin:top right;cursor:move;text-align:var(--txtAlign);" data-mv="box">{{ headline }}</p>
              <div style="position:absolute;left:26px;right:26px;bottom:20px;display:flex;align-items:center;justify-content:space-between;z-index:4;">
                <sc-if value="{{ showFreq }}"><div data-mv="fm" style="transform:translate(var(--fmX),var(--fmY)) scale(var(--fmS));cursor:move;width:56px;height:34px;background:var(--fmCur) center/contain no-repeat;"></div></sc-if>
                <sc-if value="{{ showLogo }}"><div data-mv="logo" style="transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;width:56px;height:36px;background:var(--logoCur) center/contain no-repeat;"></div></sc-if>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.news_text }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);display:flex;flex-direction:column;">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:48%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center top;background-size:135%;opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:absolute;bottom:var(--pbotY);left:0;right:0;height:42%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskBot);mask-image:var(--patMaskBot);background-repeat:no-repeat;background-position:center bottom;background-size:135%;opacity:var(--pbotOp);pointer-events:none;"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);z-index:3;"></div></sc-if>
              <div style="position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:42px var(--txtPad);z-index:2;transform:translate(var(--boxX),var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">
                <span style="background:var(--gold);color:var(--dark);font-family:var(--fontHead),sans-serif;font-weight:700;font-size:15px;padding:6px 22px;border-radius:5px;letter-spacing:1px;direction:ltr;">{{ dateFull }}</span>
                <span style="width:44px;height:3px;background:var(--gold);border-radius:2px;margin:18px 0;opacity:.85;"></span>
                <p style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:calc(29px*var(--headScale));line-height:1.55;margin:0;text-align:center;">{{ headline }}</p>
                <span style="width:44px;height:3px;background:var(--gold);border-radius:2px;margin:18px 0 0;opacity:.85;"></span>
              </div>
              <div style="position:relative;display:flex;align-items:center;justify-content:center;gap:13px;padding-bottom:22px;z-index:2;">
                <sc-if value="{{ showLogo }}"><div data-mv="logo" style="transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;width:52px;height:34px;background:var(--logoCur) center/contain no-repeat;"></div></sc-if>
                <sc-if value="{{ showFreq }}"><span style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:13px;opacity:.85;">{{ fmLine }}</span></sc-if>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.text_photo }}">
            <div data-export-node="1" data-w="1080" data-h="1440" style="width:380px;height:507px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:absolute;bottom:var(--pbotY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskBot);mask-image:var(--patMaskBot);background-repeat:no-repeat;background-position:center center;background-size:var(--pbotSize);opacity:var(--pbotOp);pointer-events:none;"></div>
              <sc-if value="{{ showPhoto }}"><image-slot id="tp_photo" style="position:relative;display:block;width:calc(100% - 96px);height:calc(250px * var(--imgScale));margin:0 48px 0;border-bottom:3px solid var(--gold);" shape="rect" placeholder="اسحب الصورة"></image-slot></sc-if>
              <p style="position:relative;font-family:var(--fontBody),sans-serif;color:var(--cream);font-size:calc(18px*var(--headScale));line-height:1.95;margin:24px 0 0;padding:0 48px;text-align:var(--txtAlign);text-justify:inter-word;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ headline }}</p>
              <sc-if value="{{ showFreq }}"><div data-mv="fm" style="position:absolute;transform:translate(var(--fmX),var(--fmY)) scale(var(--fmS));cursor:move;left:48px;bottom:20px;width:55px;height:34px;background:var(--fmCur) center/contain no-repeat;"></div></sc-if>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;right:48px;bottom:18px;width:52px;height:34px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.quote }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--cream);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:42px 38px;display:flex;flex-direction:column;justify-content:center;">
              <div style="position:absolute;inset:0;background-image:var(--patURLalt);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;font-size:90px;color:var(--brick);line-height:.5;height:46px;">”</div>
              <p style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:600;font-size:30px;line-height:1.6;color:var(--dark);margin:14px 0;">{{ headline }}</p>
              <div style="position:relative;display:flex;align-items:center;gap:11px;">
                <span style="width:38px;height:4px;background:var(--gold);border-radius:2px;"></span>
                <span style="font-family:var(--fontHead),sans-serif;font-weight:600;font-size:17px;color:var(--deep);">{{ guest }} · {{ guestTitle }}</span>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.square }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);z-index:2;"></div></sc-if>
              <sc-if value="{{ showPhoto }}"><image-slot id="sq_photo" style="width:100%;height:calc(226px * var(--imgScale));" shape="rect" placeholder="اسحب الصورة"></image-slot></sc-if>
              <div style="padding:26px 28px;position:relative;">
                <div style="display:inline-block;background:var(--brick);color:var(--cream);font-family:var(--fontHead),sans-serif;font-weight:600;font-size:14px;padding:5px 15px;border-radius:5px;">منوّعات</div>
                <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:calc(31px * var(--headScale));margin-top:14px;line-height:1.3;text-align:var(--txtAlign);transform:translate(var(--boxX),var(--boxY)) scale(var(--boxS));transform-origin:top right;cursor:move;" data-mv="box">{{ headline }}</div>
                <sc-if value="{{ showLogo }}"><div style="width:52px;height:34px;margin-top:18px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.story }}">
            <div data-export-node="1" data-w="1080" data-h="1920" style="width:250px;height:444px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <div style="position:absolute;inset:0;background-image:var(--patURL);-webkit-mask-image:var(--patMaskFull);mask-image:var(--patMaskFull);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <sc-if value="{{ showPhoto }}"><image-slot id="st_photo" style="position:absolute;inset:0;width:100%;height:100%;" shape="rect" placeholder="اسحب خلفية (اختياري)"></image-slot></sc-if>
              <sc-if value="{{ textScrim }}"><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,calc(0.12 * var(--scrimMul))) 0%,rgba(0,0,0,calc(0.32 * var(--scrimMul))) 45%,rgba(0,0,0,calc(0.62 * var(--scrimMul))) 100%);pointer-events:none;"></div></sc-if>
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 26px;pointer-events:none;">
                <sc-if value="{{ showBadge }}"><div style="position:relative;display:inline-block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3));transform:translate(var(--badgeX), var(--badgeY)) scale(var(--badgeS));cursor:move;" data-mv="badge"><img src="assets/badge-aajel-plain.png" style="height:52px;display:block;"><div style="position:absolute;top:var(--dateTop);left:var(--dateLeft);width:var(--dateW);text-align:center;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);direction:ltr;line-height:1.05;font-size:var(--dateFs);">{{ dateDM }}<br>{{ dateY }}</div></div></sc-if>
                <div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:calc(19px*var(--headScale));margin-top:20px;line-height:1.5;text-shadow:0 2px 6px rgba(0,0,0,.4);transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;text-align:var(--txtAlign);" data-mv="box">{{ headline }}</div>
              </div>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);width:46px;height:30px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.full_screen }}">
            <div data-export-node="1" data-w="1920" data-h="1080" style="width:900px;height:506px;border-radius:var(--radius);overflow:hidden;position:relative;background:var(--dark);box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <sc-if value="{{ showPhoto }}"><image-slot id="fs_video" style="position:absolute;inset:0;width:100%;height:100%;" shape="rect" placeholder="اسحب خلفية البث"></image-slot></sc-if>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;top:20px;right:24px;width:70px;height:46px;background:var(--logoCur) center/contain no-repeat;filter:drop-shadow(0 2px 6px rgba(0,0,0,.6));"></div></sc-if>
              <div style="position:absolute;top:24px;left:24px;display:flex;align-items:center;gap:10px;">
                <div style="display:flex;align-items:center;gap:8px;background:var(--deep);border-radius:5px;padding:6px 13px;"><span style="width:9px;height:9px;border-radius:50%;background:var(--cream);animation:livepulse 1.4s infinite;"></span><span style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:14px;">مباشر</span></div>
                <sc-if value="{{ showRerun }}"><div style="background:var(--gold);border-radius:5px;padding:6px 13px;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--dark);font-size:14px;">إعادة</div></sc-if>
              </div>
              <div style="position:absolute;right:30px;bottom:106px;display:flex;align-items:stretch;border-radius:6px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.5);transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box"><div style="width:8px;background:var(--gold);"></div><div style="background:rgba(27,35,38,.92);padding:12px 24px;"><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:24px;">{{ guest }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:14px;margin-top:2px;">{{ guestTitle }}</div></div></div>
              <div style="position:absolute;left:0;right:0;bottom:0;height:78px;display:flex;align-items:stretch;"><div style="background:var(--deep);display:flex;align-items:center;padding:0 20px;"><span style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:19px;">{{ tickerLabel }}</span></div><div style="flex:1;background:rgba(27,35,38,.94);overflow:hidden;display:flex;align-items:center;border-top:3px solid var(--gold);"><div style="display:flex;white-space:nowrap;animation:crawl 26s linear infinite;"><span style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:18px;padding:0 38px;">{{ ticker }}</span><span style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:18px;padding:0 38px;">{{ ticker }}</span></div></div><div style="background:var(--gold);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 18px;"><span style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--dark);font-size:21px;direction:ltr;">{{ clock }}</span><sc-if value="{{ showFreq }}"><span style="font-family:var(--fontHead),sans-serif;font-weight:600;color:#7a5a2a;font-size:10px;">FM 102.6</span></sc-if></div></div>
            </div>
          </sc-if>

          <sc-if value="{{ d.fb_cover }}">
            <div data-export-node="1" data-w="1640" data-h="608" style="width:800px;height:297px;border-radius:var(--radius);overflow:hidden;position:relative;background:var(--dark);box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <sc-if value="{{ showPhoto }}"><image-slot id="fb_citadel" style="position:absolute;inset:0;width:100%;height:100%;" shape="rect" placeholder="اسحب صورة قلعة حلب"></image-slot></sc-if>
              <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(27,35,38,.95) 0%,rgba(27,35,38,.55) 45%,rgba(27,35,38,.22) 100%);"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
              <div style="position:absolute;right:48px;top:50%;transform:translateY(-50%);">
                <sc-if value="{{ showLogo }}"><div style="width:141px;height:92px;background:var(--logoCur) center/contain no-repeat;filter:drop-shadow(0 4px 12px rgba(0,0,0,.7));"></div></sc-if>
                <sc-if value="{{ showFreq }}"><div style="display:flex;align-items:center;gap:10px;margin-top:14px;color:var(--gold);font-family:var(--fontHead),sans-serif;font-weight:600;font-size:17px;"><span style="width:24px;height:3px;background:var(--gold);"></span> {{ fmLine }}</div></sc-if>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.schedule }}">
            <div data-export-node="1" data-w="1080" data-h="1620" style="width:320px;height:480px;border-radius:var(--radius);overflow:hidden;background:var(--cream);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);">
              <div style="background:var(--dark);padding:22px 24px;display:flex;align-items:center;justify-content:space-between;"><div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:22px;">جدول البرامج</div><div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:12px;">هذا الأسبوع</div></div><sc-if value="{{ showLogo }}"><div style="width:52px;height:34px;background:var(--logoCur) center/contain no-repeat;transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;" data-mv="logo"></div></sc-if></div>
              <div style="padding:6px 24px;">
                <sc-for list="{{ schedule }}" as="row" hint-placeholder-count="5">
                  <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid #e4d8bd;"><div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--dark);font-size:16px;">{{ row.name }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:500;color:#9a7a4a;font-size:11px;">{{ row.host }}</div></div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--deep);font-size:14px;direction:ltr;">{{ row.time }}</div></div>
                </sc-for>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.now_air }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 36px;">
              <div style="position:absolute;inset:0;background-image:var(--patURL);-webkit-mask-image:var(--patMaskFull);mask-image:var(--patMaskFull);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
              <div style="position:relative;display:flex;align-items:center;gap:9px;background:var(--dark);border-radius:6px;padding:9px 19px;"><span style="width:10px;height:10px;border-radius:50%;background:var(--gold);animation:livepulse 1.4s infinite;"></span><span style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:16px;">الآن على الهواء</span></div>
              <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:38px;margin-top:24px;line-height:1.1;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ program }}</div>
              <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:17px;margin-top:9px;opacity:.85;">{{ host }}</div>
              <sc-if value="{{ showLogo }}"><div style="position:relative;width:49px;height:32px;background:var(--logoCur) center/contain no-repeat;margin-top:26px;"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.quote_deco }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:46px 40px;display:flex;flex-direction:column;justify-content:center;">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:60%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:absolute;inset:18px;border:2px solid var(--gold);border-radius:14px;pointer-events:none;opacity:.55;"></div>
              <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;font-size:110px;color:var(--gold);line-height:.45;height:52px;text-align:center;">”</div>
              <p style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;font-size:30px;line-height:1.65;color:var(--cream);margin:20px 0;text-align:center;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ headline }}</p>
              <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;">
                <span style="width:54px;height:3px;background:var(--gold);border-radius:2px;"></span>
                <span style="font-family:var(--fontHead),sans-serif;font-weight:700;font-size:19px;color:var(--gold);">{{ guest }}</span>
                <span style="font-family:var(--fontHead),sans-serif;font-weight:500;font-size:14px;color:var(--cream);opacity:.8;">{{ guestTitle }}</span>
              </div>
              <sc-if value="{{ showLogo }}"><div style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);width:48px;height:31px;background:var(--logoCur) center/contain no-repeat;opacity:.9;"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.carousel }}">
            <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
              <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:{{ carBg }};position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:44px 40px;display:flex;flex-direction:column;justify-content:center;">
                <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:58%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
                <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
                <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--gold);font-size:15px;">{{ carNum }}</div>
                <div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:34px;line-height:1.25;margin-top:14px;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ carHead }}</div>
                <p style="position:relative;font-family:var(--fontBody),sans-serif;color:var(--cream);font-size:18px;line-height:1.9;margin:16px 0 0;opacity:.92;text-align:var(--txtAlign);">{{ carBody }}</p>
                <div style="position:absolute;bottom:24px;right:40px;left:40px;display:flex;align-items:center;justify-content:space-between;">
                  <div style="display:flex;gap:7px;">
                    <sc-for list="{{ carDots }}" as="dot" hint-placeholder-count="4"><span style="width:9px;height:9px;border-radius:50%;background:{{ dot.c }};"></span></sc-for>
                  </div>
                  <sc-if value="{{ showLogo }}"><div style="width:46px;height:30px;background:var(--logoCur) center/contain no-repeat;"></div></sc-if>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:12px;background:#1b2326;border:1px solid #313b3f;border-radius:10px;padding:8px 12px;">
                <button onClick="{{ carPrev }}" class="btn" style="background:#2a3338;color:#fdf6e3;padding:7px 14px;">←</button>
                <span style="font-family:var(--fontHead),sans-serif;font-weight:600;color:#9aa2a4;font-size:13px;">شريحة {{ carPos }}</span>
                <button onClick="{{ carNext }}" class="btn" style="background:#2a3338;color:#fdf6e3;padding:7px 14px;">→</button>
                <button onClick="{{ carAdd }}" class="btn" style="background:#26312f;color:#f2d47e;padding:7px 12px;">＋ شريحة</button>
                <button onClick="{{ carDel }}" class="btn" style="background:#3a2420;color:#f2d47e;padding:7px 12px;">حذف</button>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.weather }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:linear-gradient(160deg,var(--dark) 0%,var(--brick) 130%);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:38px 36px;display:flex;flex-direction:column;">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:55%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
              <div style="position:relative;display:flex;align-items:center;justify-content:space-between;">
                <div>
                  <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--gold);font-size:14px;">حالة الطقس</div>
                  <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:30px;margin-top:3px;">{{ wCity }}</div>
                </div>
                <sc-if value="{{ showLogo }}"><div style="width:54px;height:35px;background:var(--logoCur) center/contain no-repeat;"></div></sc-if>
              </div>
              <div style="position:relative;flex:1;display:flex;align-items:center;justify-content:center;gap:18px;">
                <div style="font-size:96px;line-height:1;filter:drop-shadow(0 4px 10px rgba(0,0,0,.3));">{{ wIcon }}</div>
                <div style="text-align:center;">
                  <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:78px;line-height:.9;direction:ltr;">{{ wTemp }}°</div>
                  <div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:17px;margin-top:6px;">{{ wCond }}</div>
                </div>
              </div>
              <div style="position:relative;display:flex;justify-content:center;gap:26px;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:16px;">
                <span>الصغرى <span style="color:var(--gold);direction:ltr;">{{ wLo }}°</span></span>
                <span>الكبرى <span style="color:var(--gold);direction:ltr;">{{ wHi }}°</span></span>
              </div>
            </div>
          </sc-if>

          <sc-if value="{{ d.match }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:34px 30px;display:flex;flex-direction:column;">
              <div style="position:absolute;top:var(--ptopY);left:0;right:0;height:50%;background-image:var(--patURL);-webkit-mask-image:var(--patMaskTop);mask-image:var(--patMaskTop);background-repeat:no-repeat;background-position:center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
              <div style="position:relative;text-align:center;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--gold);font-size:16px;">{{ mLeague }}</div>
              <div style="position:relative;flex:1;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:6px;">
                <div style="flex:1;text-align:center;"><div style="width:74px;height:74px;margin:0 auto 12px;border-radius:50%;background:var(--brick);display:flex;align-items:center;justify-content:center;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:30px;">{{ mInitA }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:18px;">{{ mTeamA }}</div></div>
                <div style="text-align:center;"><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:52px;line-height:1;direction:ltr;">{{ mScoreA }} <span style="color:var(--gold);">·</span> {{ mScoreB }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:13px;margin-top:8px;">{{ mStatus }}</div></div>
                <div style="flex:1;text-align:center;"><div style="width:74px;height:74px;margin:0 auto 12px;border-radius:50%;background:var(--deep);display:flex;align-items:center;justify-content:center;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:30px;">{{ mInitB }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:18px;">{{ mTeamB }}</div></div>
              </div>
              <sc-if value="{{ showLogo }}"><div style="position:relative;width:50px;height:33px;margin:0 auto;background:var(--logoCur) center/contain no-repeat;"></div></sc-if>
            </div>
          </sc-if>

          <sc-if value="{{ d.audiogram }}">
            <div data-export-node="1" data-w="1080" data-h="1080" style="width:430px;height:430px;border-radius:var(--radius);overflow:hidden;background:var(--rootBg);position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);padding:34px 32px;display:flex;flex-direction:column;">
              <div style="position:absolute;inset:0;background-image:var(--patURL);-webkit-mask-image:var(--patMaskFull);mask-image:var(--patMaskFull);background-repeat:no-repeat;background-position:center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <div style="position:relative;display:flex;align-items:center;gap:9px;"><span style="width:10px;height:10px;border-radius:50%;background:var(--gold);animation:livepulse 1.4s infinite;"></span><span style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:15px;">{{ agLabel }}</span></div>
              <div style="position:relative;display:flex;align-items:center;gap:16px;margin-top:22px;">
                <sc-if value="{{ showPhoto }}"><image-slot id="ag_photo" style="width:calc(96px * var(--imgScale));height:calc(96px * var(--imgScale));flex:none;" shape="circle" placeholder="صورة الضيف"></image-slot></sc-if>
                <div><div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:22px;">{{ guest }}</div><div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);font-size:14px;margin-top:3px;">{{ guestTitle }}</div></div>
              </div>
              <p style="position:relative;flex:1;display:flex;align-items:center;font-family:var(--fontHead),sans-serif;font-weight:700;color:var(--cream);font-size:24px;line-height:1.55;margin:18px 0;transform:translate(var(--boxX), var(--boxY)) scale(var(--boxS));cursor:move;" data-mv="box">{{ headline }}</p>
              <div style="position:relative;display:flex;align-items:flex-end;gap:4px;height:46px;">
                <sc-for list="{{ waveBars }}" as="wb" hint-placeholder-count="40"><span style="flex:1;background:var(--gold);border-radius:2px;height:{{ wb.h }}%;opacity:.9;"></span></sc-for>
              </div>
              <div style="position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:14px;"><div style="font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--cream);font-size:13px;opacity:.85;">{{ program }}</div><sc-if value="{{ showLogo }}"><div style="width:48px;height:31px;background:var(--logoCur) center/contain no-repeat;"></div></sc-if></div>
            </div>
          </sc-if>

          <sc-if value="{{ d.custom }}">
            <div data-export-node="1" data-w="{{ cfg.w }}" data-h="{{ cfg.h }}" style="width:{{ cfg.dispW }}px;height:{{ cfg.dispH }}px;border-radius:var(--radius);overflow:hidden;position:relative;box-shadow:0 6px 26px rgba(0,0,0,.28);background:{{ cfg.bgColor }};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;">
              <sc-if value="{{ cfg.showImg }}"><div data-cimgframe="1" style="position:absolute;left:50%;top:50%;width:var(--cimgW);height:var(--cimgH);z-index:{{ cfg.zImage }};transform:translate(calc(-50% + var(--cimgPX)), calc(-50% + var(--cimgPY)));transform-origin:center;"><image-slot id="custom_photo" fit="{{ cfg.imgFit }}" style="position:absolute;inset:0;width:100%;height:100%;" shape="rect" placeholder="اسحب الصورة"></image-slot><span data-cimgresize="1" data-ccorner="nw" style="position:absolute;left:-8px;top:-8px;width:16px;height:16px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nwse-resize;z-index:40;"></span><span data-cimgresize="1" data-ccorner="ne" style="position:absolute;right:-8px;top:-8px;width:16px;height:16px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nesw-resize;z-index:40;"></span><span data-cimgresize="1" data-ccorner="sw" style="position:absolute;left:-8px;bottom:-8px;width:16px;height:16px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nesw-resize;z-index:40;"></span><span data-cimgresize="1" data-ccorner="se" style="position:absolute;right:-8px;bottom:-8px;width:16px;height:16px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nwse-resize;z-index:40;"></span></div></sc-if>
              <sc-if value="{{ cfg.showImg }}"><div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.45),transparent 55%);pointer-events:none;z-index:{{ cfg.zImage }};"></div></sc-if>
              <div style="position:absolute;inset:0;background-image:var(--patURL);-webkit-mask-image:var(--patMaskFull);mask-image:var(--patMaskFull);background-repeat:no-repeat;background-position:center center;background-size:var(--ptopSize);opacity:var(--ptopOp);pointer-events:none;"></div>
              <sc-if value="{{ bar }}"><div style="position:absolute;top:0;right:0;left:0;height:var(--barH);background:var(--gold);"></div></sc-if>
              <sc-if value="{{ cfg.showBadge }}"><div style="position:relative;display:inline-block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3));margin-bottom:18px;z-index:{{ cfg.zBadge }};"><img src="assets/badge-aajel-plain.png" style="height:58px;display:block;"><div style="position:absolute;top:var(--dateTop);left:var(--dateLeft);width:var(--dateW);text-align:center;font-family:var(--fontHead),sans-serif;font-weight:600;color:var(--gold);direction:ltr;line-height:1.05;font-size:var(--dateFs);">{{ dateDM }}<br>{{ dateY }}</div></div></sc-if>
              <sc-for list="{{ cfg.pngsR }}" as="pg" hint-placeholder-count="0"><div data-pidx="{{ pg.i }}" style="position:absolute;left:50%;top:42%;margin-left:{{ pg.x }}px;margin-top:{{ pg.y }}px;width:{{ pg.w }}px;transform:translate(-50%,-50%);z-index:{{ pg.z }};outline:{{ pg.outline }};outline-offset:3px;cursor:move;"><div style="{{ pg.imgStyle }}"></div><sc-if value="{{ pg.selected }}"><span data-presize="{{ pg.i }}" style="position:absolute;left:-7px;top:-7px;width:13px;height:13px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nwse-resize;"></span><span data-presize="{{ pg.i }}" style="position:absolute;right:-7px;top:-7px;width:13px;height:13px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nesw-resize;"></span><span data-presize="{{ pg.i }}" style="position:absolute;left:-7px;bottom:-7px;width:13px;height:13px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nesw-resize;"></span><span data-presize="{{ pg.i }}" style="position:absolute;right:-7px;bottom:-7px;width:13px;height:13px;background:#f2d47e;border:2px solid #1b2326;border-radius:50%;cursor:nwse-resize;"></span></sc-if></div></sc-for>
              <sc-if value="{{ cfg.showText }}"><div style="position:relative;font-family:var(--fontHead),sans-serif;font-weight:700;color:{{ cfg.fgColor }};font-size:30px;line-height:1.4;text-shadow:0 2px 8px rgba(0,0,0,.35);z-index:{{ cfg.zText }};">{{ headline }}</div></sc-if>
              <sc-if value="{{ cfg.showLogo }}"><div data-mv="logo" style="position:relative;width:55px;height:36px;background:var(--customLogo) center/contain no-repeat;margin-top:22px;z-index:{{ cfg.zLogo }};transform:translate(var(--logoX),var(--logoY)) scale(var(--logoS));cursor:move;"></div></sc-if>
            </div>
          </sc-if>

        </div>
        </div>
      </div>
    </div>
  </sc-if>

  <!-- ================= SETTINGS ================= -->
  <sc-if value="{{ isSettings }}" hint-placeholder-val="{{ false }}">
    <div style="position:fixed;inset:0;z-index:100;background:rgba(10,14,16,.6);display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="background:#1b2326;border:1px solid #313b3f;border-radius:16px;padding:26px;width:460px;max-width:100%;max-height:90vh;overflow:auto;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:20px;">الإعدادات العامة</div>
          <button onClick="{{ closeSettings }}" class="btn" style="background:#2a3338;color:#fdf6e3;padding:7px 14px;">✕</button>
        </div>
        <div class="grp">
          <h4>الشعار (يُطبّق على كل التصاميم)</h4>
          <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-bottom:11px;">ارفع لوغو راديو البلد بنسختين (يُفضّل دقة عالية، عرض ≥ 1500 بكسل). يُختار النوع المناسب تلقائياً حسب لون خلفية كل تصميم.</div>
          <span class="lab">① للخلفية الطوبية — اللوغو باللون الذهبي/الفاتح</span>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:13px;"><div style="background:var(--brick);border-radius:8px;padding:10px;"><div style="width:54px;height:35px;background:var(--logoWhite) center/contain no-repeat;"></div></div><input type="file" accept="image/*" onChange="{{ onLogoBrickVer }}" style="color:#cfd6d8;font-size:12px;"></div>
          <span class="lab">② للخلفية الداكنة — اللوغو باللون الطوبي</span>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:13px;"><div style="background:var(--dark);border-radius:8px;padding:10px;"><div style="width:54px;height:35px;background:var(--logoLight) center/contain no-repeat;"></div></div><input type="file" accept="image/*" onChange="{{ onLogoDarkVer }}" style="color:#cfd6d8;font-size:12px;"></div>
          <button onClick="{{ resetLogos }}" class="btn" style="width:100%;background:#3a2420;color:#f2d47e;border:1px solid #5a382f;">↺ إزالة اللوغو واستعادة الافتراضي</button>
        </div>
        <div class="grp">
          <h4>لوغو التردد (FM)</h4>
          <span class="lab">① للخلفية الطوبية — باللون الذهبي/الفاتح</span>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:13px;"><div style="background:var(--brick);border-radius:8px;padding:10px;"><div style="width:48px;height:31px;background:var(--fmWhite) center/contain no-repeat;"></div></div><input type="file" accept="image/*" onChange="{{ onFmBrickVer }}" style="color:#cfd6d8;font-size:12px;"></div>
          <span class="lab">② للخلفية الداكنة — باللون الطوبي</span>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:13px;"><div style="background:var(--dark);border-radius:8px;padding:10px;"><div style="width:48px;height:31px;background:var(--fmBrick) center/contain no-repeat;"></div></div><input type="file" accept="image/*" onChange="{{ onFmDarkVer }}" style="color:#cfd6d8;font-size:12px;"></div>
          <button onClick="{{ resetFm }}" class="btn" style="width:100%;background:#3a2420;color:#f2d47e;border:1px solid #5a382f;">↺ إزالة لوغو التردد</button>
        </div>
        <div class="grp">
          <h4>عمق بصري (تدرّج)</h4>
          <label class="ck"><input type="checkbox" checked="{{ gradBg }}" onChange="{{ onGradBg }}"> خلفية متدرّجة للتصاميم الداكنة والملوّنة</label>
          <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-top:8px;">يضيف لمسة عمق ناعمة على الخلفية في كل التصاميم. (تدرّج النقشة يُضبط من لوحة التحرير اليمنى لكل تصميم.)</div>
        </div>
        <div class="grp">
          <h4>النقشة المخصّصة</h4>
          <span class="lab">ارفع صورة نقشة (PNG شفاف) لتُطبّق على الكل</span>
          <input type="file" accept="image/*" onChange="{{ onPatternFile }}" style="color:#cfd6d8;font-size:12px;">
        </div>
        <div class="grp">
          <h4>النصوص الثابتة</h4>
          <span class="lab">سطر التردد</span><input type="text" class="ic" value="{{ fmLine }}" onInput="{{ onFm }}">
          <span class="lab" style="margin-top:10px;">الشعار النصي</span><input type="text" class="ic" value="{{ station }}" onInput="{{ onStation }}">
        </div>
        <div class="grp">
          <h4>تاريخ «عاجل»</h4>
          <label class="ck"><input type="checkbox" checked="{{ autoDate }}" onChange="{{ onAutoDate }}"> تاريخ اليوم تلقائياً</label>
          <span class="lab" style="margin-top:11px;">أو تاريخ يدوي (DD.MM.YYYY)</span><input type="text" class="ic" value="{{ manualDate }}" onInput="{{ onManualDate }}" placeholder="مثال: 12.06.2026">
          <span class="lab" style="margin-top:13px;">ضبط مكان التاريخ — أفقي</span><input type="range" class="rng" min="0" max="46" step="0.5" value="{{ dateLeft }}" onInput="{{ onDateLeft }}">
          <span class="lab" style="margin-top:8px;">عمودي</span><input type="range" class="rng" min="0" max="45" step="0.5" value="{{ dateTop }}" onInput="{{ onDateTop }}">
          <span class="lab" style="margin-top:8px;">حجم الخط</span><input type="range" class="rng" min="6" max="18" step="0.5" value="{{ dateFs }}" onInput="{{ onDateFs }}">
        </div>
        <div class="grp">
          <h4>نسخ احتياطي ومشاركة</h4>
          <span class="lab">صدّر كل إعداداتك وقوالبك كملف لمشاركتها أو نقلها لجهاز آخر</span>
          <button onClick="{{ exportSettings }}" class="btn" style="width:100%;background:#26312f;color:#f2d47e;border:1px solid #34403d;margin-top:8px;">⤓ تصدير الإعدادات (JSON)</button>
          <span class="lab" style="margin-top:13px;">تثبيت المنشورات الحالية كنسخة افتراضية للتطبيق</span>
          <button onClick="{{ exportSeed }}" class="btn" style="width:100%;background:var(--brick);color:#fdf6e3;margin-top:8px;">⭐ حفظ كنسخة التطبيق (seed.json)</button>
          <div style="font-family:'IBM Plex Sans Arabic',sans-serif;font-size:11px;color:#8a9295;line-height:1.7;margin-top:6px;">ينزّل ملف seed.json — ضعه بجانب index.html قبل الرفع، فتفتح كل المنشورات جاهزة عند تثبيت التطبيق لأول مرة.</div>
          <span class="lab" style="margin-top:13px;">استيراد ملف إعدادات</span>
          <input type="file" accept="application/json,.json" onChange="{{ onImportSettings }}" style="color:#cfd6d8;font-size:12px;">
        </div>
        <button onClick="{{ closeSettings }}" class="btn" style="width:100%;background:var(--brick);color:#fdf6e3;">تم</button>
      </div>
    </div>
  </sc-if>

  <!-- ================= BUILDER ================= -->
  <sc-if value="{{ isBuilder }}" hint-placeholder-val="{{ false }}">
    <div style="position:fixed;inset:0;z-index:100;background:rgba(10,14,16,.6);display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="background:#1b2326;border:1px solid #313b3f;border-radius:16px;padding:26px;width:460px;max-width:100%;max-height:90vh;overflow:auto;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:20px;">تصميم جديد</div>
          <button onClick="{{ closeBuilder }}" class="btn" style="background:#2a3338;color:#fdf6e3;padding:7px 14px;">✕</button>
        </div>
        <div class="grp">
          <h4>المقاس</h4>
          <select class="ic" value="{{ cfg.size }}" onChange="{{ onCfgSize }}">
            <option value="1080x1080">مربّع · 1080×1080</option>
            <option value="1080x1350">عمودي · 1080×1350</option>
            <option value="1080x1920">ستوري · 1080×1920</option>
            <option value="1920x1080">أفقي · 1920×1080</option>
            <option value="1200x630">منشور فيسبوك عرضي · 1200×630</option>
            <option value="1200x675">عرضي · 1200×675</option>
            <option value="1640x624">غلاف فيسبوك · 1640×624</option>
            <option value="custom">مخصّص (تحديد يدوي) ✎</option>
          </select>
          <sc-if value="{{ isCustomSize }}">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:11px;">
              <div><span class="lab">العرض (px)</span><input type="number" class="ic" min="200" max="4000" value="{{ cfg.customW }}" onInput="{{ onCfgW }}" style="direction:ltr;text-align:center;"></div>
              <div><span class="lab">الارتفاع (px)</span><input type="number" class="ic" min="200" max="4000" value="{{ cfg.customH }}" onInput="{{ onCfgH }}" style="direction:ltr;text-align:center;"></div>
            </div>
          </sc-if>
        </div>
        <div class="grp">
          <h4>الخلفية</h4>
          <select class="ic" value="{{ cfg.bg }}" onChange="{{ onCfgBg }}">
            <option value="dark">داكن</option>
            <option value="brick">طوبي</option>
            <option value="deep">أحمر</option>
            <option value="cream">كريمي</option>
          </select>
        </div>
        <div class="grp">
          <h4>العناصر</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <label class="ck"><input type="checkbox" checked="{{ cfg.showImg }}" onChange="{{ onCfgImg }}"> صورة خلفية (سحب وإفلات)</label>
            <label class="ck"><input type="checkbox" checked="{{ cfg.showBadge }}" onChange="{{ onCfgBadge }}"> شارة «عاجل» + تاريخ اليوم</label>
            <label class="ck"><input type="checkbox" checked="{{ cfg.showText }}" onChange="{{ onCfgText }}"> نص (عنوان الخبر)</label>
            <label class="ck"><input type="checkbox" checked="{{ cfg.showLogo }}" onChange="{{ onCfgLogo }}"> اللوغو</label>
          </div>
        </div>
        <div class="grp">
          <h4>عناصر PNG مرفقة</h4>
          <span class="lab">أضف صور PNG شفافة لتظهر في التصميم</span>
          <input type="file" accept="image/png,image/*" multiple onChange="{{ onCfgPngs }}" style="color:#cfd6d8;font-size:12px;">
          <div style="font-family:var(--fontHead),sans-serif;font-size:12px;color:#9aa2a4;margin-top:8px;">المرفقة: {{ cfg.pngCount }} — بعد الإنشاء: اسحبها بالماوس، عجلة الماوس للتحجيم، «للأمام» للطبقات.</div>
          <sc-for list="{{ pngList }}" as="pl" hint-placeholder-count="0"><div style="display:flex;justify-content:space-between;align-items:center;padding:5px 2px;border-bottom:1px solid #2a3338;"><span style="color:#cfd6d8;font-size:12px;font-family:var(--fontHead),sans-serif;">صورة {{ pl.n }}</span><span><span onClick="{{ pl.front }}" style="cursor:pointer;color:#f2d47e;font-size:12px;margin-left:12px;">للأمام</span><span onClick="{{ pl.del }}" style="cursor:pointer;color:#b94126;font-size:12px;">حذف</span></span></div></sc-for>
        </div>
        <button onClick="{{ createCustom }}" class="btn" style="width:100%;background:var(--brick);color:#fdf6e3;">إنشاء وبدء التعديل ←</button>
      </div>
    </div>
  </sc-if>

  <!-- ================= GENERATOR ================= -->
  <sc-if value="{{ isGenerator }}" hint-placeholder-val="{{ false }}">
    <div style="position:fixed;inset:0;z-index:100;background:rgba(10,14,16,.62);display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="background:#1b2326;border:1px solid #313b3f;border-radius:16px;padding:26px;width:760px;max-width:100%;max-height:92vh;overflow:auto;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:21px;">🤖 مولّد المنشورات</div>
          <button onClick="{{ closeGenerator }}" class="btn" style="background:#2a3338;color:#fdf6e3;padding:7px 14px;">✕</button>
        </div>
        <div style="font-family:var(--fontHead),sans-serif;font-size:13px;color:#9aa2a4;margin-bottom:16px;">اكتب الخبر وارفع صورة — يجهّز لك ٣ قوالب فوراً بالنص والصورة، تختار أيها تكمّل عليه.</div>
        <div style="display:flex;gap:18px;flex-wrap:wrap;">
          <div style="flex:1;min-width:280px;">
            <div class="grp">
              <h4>نص الخبر</h4>
              <span class="lab">العنوان / المتن</span>
              <textarea class="ic" rows="4" style="resize:vertical;line-height:1.7;" value="{{ genHeadline }}" onInput="{{ onGenHeadline }}" placeholder="اكتب نص الخبر هنا..."></textarea>
              <span class="lab" style="margin-top:11px;">الشريط المتحرك (اختياري)</span>
              <input type="text" class="ic" value="{{ genTicker }}" onInput="{{ onGenTicker }}" placeholder="نص التيكر السفلي">
            </div>
            <div class="grp">
              <h4>صورة الخبر</h4>
              <span class="lab">ارفع صورة لتظهر في القوالب</span>
              <input type="file" accept="image/*" onChange="{{ onGenImage }}" style="color:#cfd6d8;font-size:12px;">
              <sc-if value="{{ genHasImage }}"><div style="margin-top:12px;height:120px;border-radius:9px;background-image:{{ genImageBg }};background-size:cover;background-position:center;border:1px solid #3a4448;"></div></sc-if>
            </div>
          </div>
          <div style="flex:1;min-width:280px;">
            <div class="grp" style="height:100%;">
              <h4>اختر القالب الجاهز</h4>
              <sc-for list="{{ genTpls }}" as="g" hint-placeholder-count="3">
                <div onClick="{{ g.go }}" style="display:flex;align-items:center;gap:13px;padding:13px;margin-bottom:10px;border-radius:11px;background:#26312f;border:1px solid #34403d;cursor:pointer;">
                  <div style="width:46px;height:60px;flex:none;border-radius:6px;overflow:hidden;background:var(--dark);position:relative;display:flex;align-items:center;justify-content:center;">
                    <div style="position:absolute;inset:0;background-image:var(--patURL);background-size:cover;opacity:.45;"></div>
                    <span style="position:absolute;top:0;right:0;left:0;height:3px;background:var(--gold);"></span>
                    <div style="position:relative;width:26px;height:17px;background:var(--logoCur) center/contain no-repeat;"></div>
                  </div>
                  <div style="flex:1;">
                    <div style="font-family:var(--fontHead),sans-serif;font-weight:700;color:#fdf6e3;font-size:14px;">{{ g.name }}</div>
                    <div style="font-family:var(--fontHead),sans-serif;font-weight:500;color:#9aa2a4;font-size:11px;margin-top:2px;">{{ g.desc }}</div>
                  </div>
                  <span style="color:var(--gold);font-size:18px;">←</span>
                </div>
              </sc-for>
              <div style="font-family:var(--fontHead),sans-serif;font-size:11px;color:#7e8688;margin-top:4px;">سيُفتح التصميم بالنص والصورة جاهزَين — وتقدر تعدّل كل شيء بعدها.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  constructor(props){
    super(props);
    this.rootRef = React.createRef();
    this.stageRef = React.createRef();
    this.defaults = { dark:"#1b2326", brick:"#c1624c", deep:"#b94126", cream:"#fdf6e3", gold:"#f2d47e" };
    this.DEFAULTS_DS = { ptopOp:0.9, ptopSize:130, ptopY:0, pbotOp:0.9, pbotSize:130, pbotY:0, pboxOp:0.5, pboxSize:85, radius:0, bar:true, bold:false, headScale:1, autoFit:true, bgMode:null, logoTone:"auto", showBadge:true, textScrim:false, scrimAmt:0.6, boxW:100, wordSp:0, lineH:1.65, txtAlign:"justify", txtPad:28, imgScale:1, cimgS:1, cimgW:100, cimgH:100, cimgPX:0, cimgPY:0, patFadeAmt:0, patFadeDir:"bottom", imgX:0, imgY:0, boxX:0, boxY:0, badgeX:0, badgeY:0, logoX:0, logoY:0, fmX:0, fmY:0, boxS:1, badgeS:1, logoS:1, fmS:1, showLogo:true, showFreq:true, showPhoto:true, headline:"عنوان الخبر العاجل يُكتب هنا ضمن مساحة مريحة للقراءة.", ticker:"شريط الأخبار المتحرك يعرض العناوين المتتالية على مدار البث المباشر لراديو البلد.", guest:"اسم الضيف", guestTitle:"صفة الضيف / المنصب", program:"اسم البرنامج", host:"مع المذيع" };
    this.state = {
      screen:"home", selected:null, settingsOpen:false, builderOpen:false, generatorOpen:false, ds:{}, templates:[], selPng:null, thumbs:{}, recent:[], tourSeen:false, tourOpen:false, quickHeadline:"", quickImage:"", pendingImage:"", pendingImageFor:[],
      genHeadline:"", genImage:"", genAllBusy:false, genAllN:0,
      customCfg:{ size:"1080x1080", bg:"dark", showImg:true, showBadge:false, showText:true, showLogo:true, pngs:[], imgFit:"cover", customW:1200, customH:800 },
      t:{...this.defaults}, radius:0, bar:true, font:"plex",
      showLogo:true, showFreq:true, showPhoto:true,
      patUrl:null, ptopOp:0.9, ptopSize:130, ptopY:0, pbotOp:0.9, pbotSize:130, pbotY:0, pboxOp:0.5, pboxSize:85, bold:false, headScale:1, txtAlign:"justify", txtPad:28, imgScale:1, cimgS:1, cimgW:100, cimgH:100, cimgPX:0, cimgPY:0, patFadeAmt:0, patFadeDir:"bottom", imgX:0, imgY:0, boxX:0, boxY:0, badgeX:0, badgeY:0, logoX:0, logoY:0, fmX:0, fmY:0, boxS:1, badgeS:1, logoS:1, fmS:1, dateTop:14, dateLeft:7, dateFs:11,
      station:"صوت البلد · من قلب حلب", fmLine:"FM 102.6 · من قلب حلب",
      gradBg:false, gradPat:false,
      autoDate:true, manualDate:"",
      logoLight:null, logoDark:null, logoWhite:null, logoMain:null,
      fmWhite:null, fmBrick:null, fmDark:null, fmMain:null,
      headline:"عنوان الخبر العاجل يُكتب هنا ضمن مساحة مريحة للقراءة.",
      ticker:"شريط الأخبار المتحرك يعرض العناوين المتتالية على مدار البث المباشر لراديو البلد.",
      guest:"اسم الضيف", guestTitle:"صفة الضيف / المنصب",
      program:"اسم البرنامج", host:"مع المذيع", agLabel:"بودكاست راديو البلد",
      clock:"20:00",
      tickerLabel:"عاجل", showRerun:false, exportTransparent:false, exportScale:4,
      wCity:"حلب", wTemp:"24", wCond:"مشمس جزئياً", wHi:"27", wLo:"15", wIcon:"☀",
      mLeague:"الدوري الممتاز", mTeamA:"الاتحاد", mTeamB:"الوحدة", mScoreA:"2", mScoreB:"1", mStatus:"انتهت المباراة",
      schedule:[
        {name:"صباح البلد",host:"تقديم المذيع",time:"08:00"},
        {name:"نشرة الأخبار",host:"غرفة الأخبار",time:"12:00"},
        {name:"بين السطور",host:"تقديم المذيع",time:"16:00"},
        {name:"ضيف وحكاية",host:"تقديم المذيع",time:"21:00"},
        {name:"موسيقى البلد",host:"منوّعات",time:"23:00"}
      ],
      carIdx:0, carSlides:[
        {head:"العنوان الرئيسي للكاروسيل", body:"اكتب هنا مقدّمة الموضوع التي تجذب القارئ للمتابعة."},
        {head:"النقطة الأولى", body:"تفصيل أول فكرة بشكل مختصر وواضح ضمن سطرين أو ثلاثة."},
        {head:"النقطة الثانية", body:"تفصيل ثاني فكرة مع الحفاظ على نفس الإيقاع البصري."},
        {head:"تابعونا", body:"راديو البلد · FM 102.6 — من قلب حلب."}
      ]
    };
  }
  componentDidMount(){
    let restored=false;
    try{ const s=JSON.parse(localStorage.getItem("albalad-studio")||"null"); if(s){ restored=true; this.setState(s,()=>{ this.migratePngs(); this.applyVars(); this.compactStorage(); }); } }catch(e){}
    if(!restored){ try{ fetch("seed.json",{cache:"no-store"}).then(r=>r.ok?r.json():null).then(o=>{ if(o&&typeof o==="object"){ this.setState(o,()=>{ this.migratePngs(); this.applyVars(); this.persist(); }); } }).catch(()=>{}); }catch(e){} }
    this.applyVars();
    const tick=()=>{ const d=new Date(); this.setState({clock:String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}); };
    tick(); this._t=setInterval(tick,20000);
    this._onDown=(e)=>{ if(this.state.screen!=="edit")return; const cr=e.target.closest&&e.target.closest("[data-cimgresize]"); if(cr){ e.preventDefault(); const node=this.rootRef.current&&this.rootRef.current.querySelector("[data-export-node]"); const rect=node?node.getBoundingClientRect():{width:1,height:1}; this._cimgrz={corner:cr.getAttribute("data-ccorner")||"se",sx:e.clientX,sy:e.clientY,sw:this.state.cimgW||100,sh:this.state.cimgH||100,rw:rect.width||1,rh:rect.height||1,nw:null,nh:null}; return; } const rs=e.target.closest&&e.target.closest("[data-presize]"); if(rs){ e.preventDefault(); const i=+rs.getAttribute("data-presize"); const cont=rs.parentElement; const r=cont.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2; const p=this.state.customCfg.pngs[i]; const s0=p?(p.s||1):1; const d0=Math.hypot(e.clientX-cx,e.clientY-cy)||1; this._presize={i,cont,cx,cy,s0,d0,ns:null}; return; } const pe=e.target.closest&&e.target.closest("[data-pidx]"); if(pe){ const i=+pe.getAttribute("data-pidx"); const p=this.state.customCfg.pngs[i]; if(p){ e.preventDefault(); if(this.state.selPng!==i) this.setState({selPng:i}); this._pdrag={i,sx:e.clientX,sy:e.clientY,ox:p.x,oy:p.y,el:pe,nx:null}; } return; } const el=e.target.closest&&e.target.closest("[data-mv]"); if(!el)return; const k=el.getAttribute("data-mv"); if(k==="img"){ const slot=el.querySelector&&el.querySelector("image-slot"); if(!slot||!slot.hasAttribute("data-filled")) return; } else if(!this.state.adv){ return; } e.preventDefault(); const node=this.rootRef.current&&this.rootRef.current.querySelector("[data-export-node]"); this._drag={k,el,node,sx:e.clientX,sy:e.clientY,ox:this.state[k+"X"]||0,oy:this.state[k+"Y"]||0,nx:null}; };
    this._onMove=(e)=>{ if(this._cimgrz){ const z=this._cimgrz; const dxF=(e.clientX-z.sx)/z.rw*100, dyF=(e.clientY-z.sy)/z.rh*100; const sX=z.corner.indexOf("e")>=0?1:-1, sY=z.corner.indexOf("s")>=0?1:-1; let nw=Math.max(10,Math.min(220,z.sw+sX*dxF*2)); let nh=Math.max(10,Math.min(220,z.sh+sY*dyF*2)); z.nw=nw; z.nh=nh; const rt=this.rootRef.current; if(rt){ rt.style.setProperty("--cimgW",nw+"%"); rt.style.setProperty("--cimgH",nh+"%"); } return; } if(this._presize){ const pr=this._presize; const d=Math.hypot(e.clientX-pr.cx,e.clientY-pr.cy); let ns=pr.s0*(d/pr.d0); ns=Math.max(0.2,Math.min(4,ns)); pr.ns=ns; pr.cont.style.width=(ns*120)+"px"; return; } if(this._pdrag){ const nx=this._pdrag.ox+(e.clientX-this._pdrag.sx), ny=this._pdrag.oy+(e.clientY-this._pdrag.sy); this._pdrag.el.style.marginLeft=nx+"px"; this._pdrag.el.style.marginTop=ny+"px"; this._pdrag.nx=nx; this._pdrag.ny=ny; return; } if(!this._drag)return; let nx=this._drag.ox+(e.clientX-this._drag.sx), ny=this._drag.oy+(e.clientY-this._drag.sy); const rt=this.rootRef.current; const TH=7; let snapV=false,snapH=false; const dr=this._drag; if(dr.node&&dr.el){ rt.style.setProperty("--"+dr.k+"X",nx+"px"); rt.style.setProperty("--"+dr.k+"Y",ny+"px"); const nr=dr.node.getBoundingClientRect(), er=dr.el.getBoundingClientRect(); const dx=(nr.left+nr.width/2)-(er.left+er.width/2); const dy=(nr.top+nr.height/2)-(er.top+er.height/2); if(Math.abs(dx)<TH){ nx+=dx; snapV=true; } if(Math.abs(dy)<TH){ ny+=dy; snapH=true; } } if(rt){ rt.style.setProperty("--"+dr.k+"X",nx+"px"); rt.style.setProperty("--"+dr.k+"Y",ny+"px"); } this.showGuides(dr.node,snapV,snapH); this._drag.nx=nx; this._drag.ny=ny; };
    this._onUp=()=>{ if(this._cimgrz){ const z=this._cimgrz; this._cimgrz=null; if(z.nw!=null) this.up({cimgW:Math.round(z.nw),cimgH:Math.round(z.nh)}); return; } if(this._presize){ const pr=this._presize; this._presize=null; if(pr.ns!=null) this.setPngScale(pr.i,pr.ns); return; } if(this._pdrag){ const pd=this._pdrag; this._pdrag=null; if(pd.nx!=null){ this.setState(s=>{ const pngs=s.customCfg.pngs.slice(); pngs[pd.i]={...pngs[pd.i],x:Math.round(pd.nx),y:Math.round(pd.ny)}; return {customCfg:{...s.customCfg,pngs}}; },()=>this.persist()); } return; } if(!this._drag)return; const k=this._drag.k,nx=this._drag.nx,ny=this._drag.ny; this._drag=null; this.hideGuides(); if(nx!=null) this.up({[k+"X"]:Math.round(nx),[k+"Y"]:Math.round(ny)}); };
    document.addEventListener("pointerdown",this._onDown); document.addEventListener("pointermove",this._onMove); document.addEventListener("pointerup",this._onUp);
    this._onWheel=(e)=>{ const pe=e.target.closest&&e.target.closest("[data-pidx]"); if(pe){ e.preventDefault(); const i=+pe.getAttribute("data-pidx"); this.setState(s=>{ const pngs=s.customCfg.pngs.slice(); const cur=pngs[i]; if(!cur)return null; let ns=(cur.s||1)-e.deltaY*0.0015; ns=Math.max(0.2,Math.min(4,ns)); pngs[i]={...cur,s:ns}; return {customCfg:{...s.customCfg,pngs}}; },()=>this.persist()); return; } if(this.state.screen!=="edit")return; const el=e.target.closest&&e.target.closest("[data-mv]"); if(!el)return; e.preventDefault(); const k=el.getAttribute("data-mv"); let s=(this.state[k+"S"]||1)-e.deltaY*0.0015; s=Math.max(0.3,Math.min(3,s)); const rt=this.rootRef.current; if(rt) rt.style.setProperty("--"+k+"S",s); clearTimeout(this._wt); this._wt=setTimeout(()=>this.up({[k+"S"]:Math.round(s*100)/100}),260); };
    document.addEventListener("wheel",this._onWheel,{passive:false});
    this._onResize=()=>{ this.fitStage(); this.justifyKashida(); }; window.addEventListener("resize",this._onResize);
    this.fitStage();
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>this.justifyKashida());
  }
  componentDidUpdate(){ this.fitStage(); if(this._kraf2) cancelAnimationFrame(this._kraf2); this._kraf2=requestAnimationFrame(()=>this.justifyKashida()); }
  fitStage(){ const st=this.stageRef&&this.stageRef.current; if(!st)return; const prev=st.parentElement; const node=st.querySelector("[data-export-node]"); if(!prev||!node){ st.style.transform=""; return; } const availW=prev.clientWidth-24, availH=prev.clientHeight-24; const nw=node.offsetWidth||1, nh=node.offsetHeight||1; let sc=Math.min(availW/nw, availH/nh, 1); if(!isFinite(sc)||sc<=0) sc=1; st.style.transform="scale("+sc+")"; }
  componentWillUnmount(){ clearInterval(this._t); document.removeEventListener("pointerdown",this._onDown); document.removeEventListener("pointermove",this._onMove); document.removeEventListener("pointerup",this._onUp); document.removeEventListener("wheel",this._onWheel); window.removeEventListener("resize",this._onResize); }
  showGuides(node,v,h){
    if(!node){ this.hideGuides(); return; }
    if(!this._gv){ this._gv=document.createElement("div"); this._gv.style.cssText="position:fixed;width:0;border-left:1.5px dashed #f2d47e;z-index:9999;pointer-events:none;display:none;box-shadow:0 0 4px rgba(242,212,126,.6);"; document.body.appendChild(this._gv); }
    if(!this._gh){ this._gh=document.createElement("div"); this._gh.style.cssText="position:fixed;height:0;border-top:1.5px dashed #f2d47e;z-index:9999;pointer-events:none;display:none;box-shadow:0 0 4px rgba(242,212,126,.6);"; document.body.appendChild(this._gh); }
    const r=node.getBoundingClientRect();
    if(v){ this._gv.style.display="block"; this._gv.style.left=(r.left+r.width/2)+"px"; this._gv.style.top=r.top+"px"; this._gv.style.height=r.height+"px"; } else this._gv.style.display="none";
    if(h){ this._gh.style.display="block"; this._gh.style.top=(r.top+r.height/2)+"px"; this._gh.style.left=r.left+"px"; this._gh.style.width=r.width+"px"; } else this._gh.style.display="none";
  }
  hideGuides(){ if(this._gv)this._gv.style.display="none"; if(this._gh)this._gh.style.display="none"; }
  curSlot(){ const rt=this.rootRef.current; if(!rt)return null; return rt.querySelector("[data-export-node] image-slot"); }
  slotReplace(){ const s=this.curSlot(); if(s&&s.shadowRoot){ const b=s.shadowRoot.querySelector('[data-act="replace"]'); if(b)b.click(); else { const i=s.shadowRoot.querySelector('input[type=file]'); if(i)i.click(); } } }
  slotClear(){ const s=this.curSlot(); if(s&&s.shadowRoot){ const b=s.shadowRoot.querySelector('[data-act="clear"]'); if(b)b.click(); } }
  applyVars(){
    const r=this.rootRef.current; if(!r) return; const t=this.state.t;
    r.style.setProperty("--dark",t.dark); r.style.setProperty("--brick",t.brick); r.style.setProperty("--deep",t.deep);
    r.style.setProperty("--cream",t.cream); r.style.setProperty("--gold",t.gold);
    r.style.setProperty("--radius",this.state.radius+"px");
    r.style.setProperty("--barH",this.state.bar?"7px":"0px");
    const pu=this.state.patUrl?("url("+this.state.patUrl+")"):"url(assets/pattern-soft.png)";
    r.style.setProperty("--patURL",pu);
    r.style.setProperty("--patURLalt",this.state.patUrl?("url("+this.state.patUrl+")"):"url(assets/pattern-brick.png)");
    r.style.setProperty("--dateTop",this.state.dateTop+"%"); r.style.setProperty("--dateLeft",this.state.dateLeft+"%"); r.style.setProperty("--dateFs",this.state.dateFs+"px");
    r.style.setProperty("--ptopOp",this.state.ptopOp); r.style.setProperty("--ptopSize",this.state.ptopSize+"%"); r.style.setProperty("--ptopY",this.state.ptopY+"px");
    r.style.setProperty("--pbotOp",this.state.pbotOp); r.style.setProperty("--pbotSize",this.state.pbotSize+"%"); r.style.setProperty("--pbotY",this.state.pbotY+"px");
    r.style.setProperty("--pboxOp",this.state.pboxOp); r.style.setProperty("--pboxSize",this.state.pboxSize+"%"); r.style.setProperty("--bodyW",this.state.bold?"600":"400");
    r.style.setProperty("--headScale",this.fitScale()); r.style.setProperty("--txtAlign",this.state.txtAlign); r.style.setProperty("--txtPad",this.state.txtPad+"px");
    r.style.setProperty("--imgY",this.state.imgY+"px"); r.style.setProperty("--boxY",this.state.boxY+"px"); r.style.setProperty("--badgeY",this.state.badgeY+"px");
    r.style.setProperty("--imgScale",this.state.imgScale);
    r.style.setProperty("--scrimMul", this.state.scrimAmt==null?0.6:this.state.scrimAmt);
    r.style.setProperty("--boxWidth", (this.state.boxW==null?100:this.state.boxW)+"%");
    r.style.setProperty("--wordSp", (this.state.wordSp==null?0:this.state.wordSp)+"px");
    r.style.setProperty("--lineH", this.state.lineH==null?1.65:this.state.lineH);
    const gOv="linear-gradient(155deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,.30) 100%)";
    r.style.setProperty("--darkBg", this.state.gradBg?(gOv+", var(--dark)"):"var(--dark)");
    r.style.setProperty("--brickBg", this.state.gradBg?(gOv+", var(--brick)"):"var(--brick)");
    const fa=Math.max(0,Math.min(1,this.state.patFadeAmt||0)); const fEnd=(1-fa).toFixed(3);
    if(fa<=0){ r.style.setProperty("--patMaskTop","none"); r.style.setProperty("--patMaskBot","none"); r.style.setProperty("--patMaskFull","none"); }
    else{
      r.style.setProperty("--patMaskTop","linear-gradient(to bottom, #000 0%, rgba(0,0,0,"+fEnd+") 100%)");
      r.style.setProperty("--patMaskBot","linear-gradient(to top, #000 0%, rgba(0,0,0,"+fEnd+") 100%)");
      r.style.setProperty("--patMaskFull","linear-gradient(to bottom, rgba(0,0,0,"+fEnd+") 0%, #000 38%, #000 62%, rgba(0,0,0,"+fEnd+") 100%)");
    }
    r.style.setProperty("--cimgS",this.state.cimgS||1);
    r.style.setProperty("--cimgW",(this.state.cimgW||100)+"%"); r.style.setProperty("--cimgH",(this.state.cimgH||100)+"%");
    r.style.setProperty("--cimgPX",(this.state.cimgPX||0)+"px"); r.style.setProperty("--cimgPY",(this.state.cimgPY||0)+"px");
    r.style.setProperty("--imgX",this.state.imgX+"px"); r.style.setProperty("--boxX",this.state.boxX+"px"); r.style.setProperty("--badgeX",this.state.badgeX+"px");
    r.style.setProperty("--logoX",this.state.logoX+"px"); r.style.setProperty("--logoY",this.state.logoY+"px"); r.style.setProperty("--fmX",this.state.fmX+"px"); r.style.setProperty("--fmY",this.state.fmY+"px");
    r.style.setProperty("--boxS",this.state.boxS); r.style.setProperty("--badgeS",this.state.badgeS); r.style.setProperty("--logoS",this.state.logoS); r.style.setProperty("--fmS",this.state.fmS);
    const u=(s)=> s ? ("url(\""+s+"\")") : "none";
    const lwhite=this.state.logoWhite||"";
    const lbrick=this.state.logoLight||"";
    const ld=this.state.logoLight||this.state.logoDark||"";
    r.style.setProperty("--logoWhite",u(lwhite)); r.style.setProperty("--logoLight",u(lbrick)); r.style.setProperty("--logoDark",u(ld));
    const onBrick=u(lwhite);
    const onDark=u(lbrick);
    const naturalBrick=["breaking_text","news_text","story","now_air","audiogram"];
    const sel0=this.state.selected;
    let effBg = this.state.bgMode || (naturalBrick.indexOf(sel0)>=0 ? "brick" : "dark");
    const tone=this.state.logoTone||"auto";
    let cur = (tone==="gold") ? onBrick : (tone==="brick" ? onDark : (effBg==="brick" ? onBrick : onDark));
    if(sel0==="custom"){ const b=this.state.customCfg.bg; effBg=(b==="brick"||b==="deep")?"brick":(b==="cream"?"cream":"dark"); cur=(tone==="gold")?onBrick:(tone==="brick"?onDark:((b==="brick"||b==="deep")?onBrick:(b==="cream"?u(ld):onDark))); }
    const baseCol = effBg==="brick" ? "var(--brick)" : "var(--dark)";
    r.style.setProperty("--rootBg", this.state.gradBg?(gOv+", "+baseCol):baseCol);
    r.style.setProperty("--logoOnBrick",onBrick); r.style.setProperty("--logoOnDark",onDark); r.style.setProperty("--logoCur",cur);
    const fmw=this.state.fmWhite||"", fmb=this.state.fmBrick||"", fmd=this.state.fmBrick||this.state.fmDark||"";
    r.style.setProperty("--fmWhite",u(fmw)); r.style.setProperty("--fmBrick",u(fmb)); r.style.setProperty("--fmDark",u(fmd));
    const fmOnBrick=u(fmw), fmOnDark=u(fmb);
    let fmCur = (tone==="gold") ? fmOnBrick : (tone==="brick" ? fmOnDark : (effBg==="brick" ? fmOnBrick : fmOnDark));
    if(sel0==="custom"){ const b=this.state.customCfg.bg; fmCur=(tone==="gold")?fmOnBrick:(tone==="brick"?fmOnDark:((b==="brick"||b==="deep")?fmOnBrick:(b==="cream"?u(fmd):fmOnDark))); }
    r.style.setProperty("--fmCur",fmCur);
    const cb=this.state.customCfg.bg; const clogo=(cb==="cream")?ld:((cb==="brick"||cb==="deep")?lwhite:lbrick);
    r.style.setProperty("--customLogo",u(clogo));
    const fonts={plex:["'IBM Plex Sans Arabic'","'IBM Plex Sans Arabic'"],cairo:["'Tajawal'","'Cairo'"],tajawal:["'Tajawal'","'Tajawal'"],reem:["'Reem Kufi'","'Cairo'"]};
    const [fh,fb]=fonts[this.state.font]||fonts.plex; r.style.setProperty("--fontHead",fh); r.style.setProperty("--fontBody",fb);
    if(this._kraf) cancelAnimationFrame(this._kraf); this._kraf=requestAnimationFrame(()=>this.justifyKashida());
  }
  persist(){
    const {t,font,patUrl,dateTop,dateLeft,dateFs,station,fmLine,gradBg,gradPat,autoDate,manualDate,logoLight,logoDark,logoWhite,logoMain,fmWhite,fmBrick,fmDark,fmMain,ds,templates,carSlides,wCity,wTemp,wCond,wHi,wLo,wIcon,mLeague,mTeamA,mTeamB,mScoreA,mScoreB,mStatus,schedule,customCfg,thumbs,recent,tourSeen,pendingImage,pendingImageFor}=this.state;
    try{ localStorage.setItem("albalad-studio",JSON.stringify({t,font,patUrl,dateTop,dateLeft,dateFs,station,fmLine,gradBg,gradPat,autoDate,manualDate,logoLight,logoDark,logoWhite,logoMain,fmWhite,fmBrick,fmDark,fmMain,ds,templates,carSlides,wCity,wTemp,wCond,wHi,wLo,wIcon,mLeague,mTeamA,mTeamB,mScoreA,mScoreB,mStatus,schedule,customCfg,thumbs,recent,tourSeen,pendingImage,pendingImageFor})); }catch(e){}
  }
  up(patch){ this.setState(patch,()=>{ this.applyVars(); if(this.state.screen==="edit" && this.state.selected) this.saveDs(); else this.persist(); }); }
  saveDs(){ const sel=this.state.selected; if(!sel){ this.persist(); return; } const snap={}; Object.keys(this.DEFAULTS_DS).forEach(k=>snap[k]=this.state[k]); const ds={...this.state.ds,[sel]:snap}; this.setState({ds},()=>this.persist()); }
  openDesign(id){ this.pushRecent(id); const d={...this.DEFAULTS_DS, ...(this.state.ds[id]||{})}; this.setState({screen:"edit", selected:id, adv:false, ...d}, ()=>{ this.applyVars(); this.maybeFillPending(id); }); }
  genAllThumbs(){
    if(this.state.genAllBusy) return;
    const ids=["breaking_photo","breaking_text","news_photo","news_text","text_photo","quote","square","story","quote_deco","carousel","weather","match","audiogram","full_screen","fb_cover","schedule","now_air"];
    const prevSel=this.state.selected;
    this.setState({genAllBusy:true, genAllN:0});
    const run=async()=>{
      for(let i=0;i<ids.length;i++){ const id=ids[i];
        await new Promise(res=>{ const d={...this.DEFAULTS_DS, ...(this.state.ds[id]||{})}; this.setState({screen:"edit", selected:id, adv:false, genAllN:i+1, ...d}, ()=>{ this.applyVars(); setTimeout(()=>{ this.captureThumb(()=>res()); }, 340); }); });
      }
      this.setState({screen:"pick", selected:prevSel, genAllBusy:false}, ()=>{ this.applyVars(); this.flash("\u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0643\u0644 \u0627\u0644\u0645\u0635\u063a\u0651\u0631\u0627\u062a \u2713"); });
    };
    run();
  }
  applyQuickNews(){
    const txt=(this.state.quickHeadline||"").trim();
    const img=this.state.quickImage||"";
    if(!txt && !img){ this.flash("اكتب نص الخبر أو أضف صورة أولاً"); return; }
    const ids=["breaking_photo","breaking_text","news_photo","news_text","text_photo","quote","square","story","quote_deco","audiogram","full_screen"];
    const photoIds=["breaking_photo","text_photo","square","story","news_photo","audiogram","full_screen"];
    this.setState(s=>{ const ds={...s.ds}; if(txt) ids.forEach(id=>{ ds[id]={...(ds[id]||{}), headline:txt}; }); return {ds, pendingImage: img||s.pendingImage, pendingImageFor: img?photoIds.slice():s.pendingImageFor}; },()=>{ this.persist(); if(img) this.maybeFillPending(this.state.selected); });
    this.flash((txt&&img)?"طُبّق النص والصورة — افتح أي قالب ✓":(txt?"طُبّق الخبر على القوالب ✓":"ستُطبَّق الصورة عند فتح قوالب الصور ✓"));
  }
  maybeFillPending(id){
    const img=this.state.pendingImage; if(!img) return;
    const list=this.state.pendingImageFor||[]; if(list.indexOf(id)<0) return;
    const slotMap={breaking_photo:"bp_photo",text_photo:"tp_photo",square:"sq_photo",story:"st_photo",news_photo:"np_photo",audiogram:"ag_photo",full_screen:"fs_video"};
    const sid=slotMap[id]; if(!sid) return;
    const tryFill=(tries)=>{
      const slot=this.rootRef.current && this.rootRef.current.querySelector("#"+sid);
      if(!slot){ if(tries>0) setTimeout(()=>tryFill(tries-1),150); return; }
      try{ const arr=img.split(","); const mime=(arr[0].match(/:(.*?);/)||[])[1]||"image/png"; const bin=atob(arr[1]); let n=bin.length; const u8=new Uint8Array(n); while(n--) u8[n]=bin.charCodeAt(n); const file=new File([new Blob([u8],{type:mime})],"news."+(mime.split("/")[1]||"png"),{type:mime}); slot._ingest(file); }catch(e){}
      this.setState(s=>({pendingImageFor:(s.pendingImageFor||[]).filter(x=>x!==id)}),()=>this.persist());
    };
    setTimeout(()=>tryFill(16),180);
  }
  pushRecent(id){ this.setState(s=>{ const r=[id, ...(s.recent||[]).filter(x=>x!==id)].slice(0,6); return {recent:r}; },()=>this.persist()); }
  applyVarsAfterQuick(){}
  resetDesign(id){ this.setState(s=>{ const ds={...s.ds}; delete ds[id]; const thumbs={...(s.thumbs||{})}; delete thumbs[id]; return {ds,thumbs}; },()=>this.persist()); }
  saveTemplate(){ if(!this.state.selected) return; const name=prompt("اسم القالب:"); if(!name) return; const snap={}; Object.keys(this.DEFAULTS_DS).forEach(k=>snap[k]=this.state[k]); const tp={id:"tpl"+Date.now(),name,base:this.state.selected,snap}; this.setState(s=>({templates:[...s.templates,tp]}),()=>this.persist()); }
  openTemplate(tp){ this.setState({screen:"edit", selected:tp.base, ...tp.snap}, ()=>this.applyVars()); }
  deleteTemplate(id){ this.setState(s=>({templates:s.templates.filter(x=>x.id!==id)}),()=>this.persist()); }
  setColor(k,v){ this.setState(s=>({t:{...s.t,[k]:v}}),()=>{ this.applyVars(); this.persist(); }); }
  applyPalette(p){ this.setState({t:{dark:p.dark,brick:p.brick,deep:p.deep,cream:p.cream,gold:p.gold}},()=>{ this.applyVars(); this.persist(); }); }
  pickFile(key,file){ if(!file) return; const r=new FileReader(); r.onload=()=>this.up({[key]:r.result}); r.readAsDataURL(file); }
  _dsImg(dataUrl,max,fmt){ return new Promise(res=>{ const im=new Image(); im.onload=()=>{ try{ const sc=Math.min(1,max/Math.max(im.naturalWidth,im.naturalHeight)); const w=Math.max(1,Math.round(im.naturalWidth*sc)),h=Math.max(1,Math.round(im.naturalHeight*sc)); const cv=document.createElement('canvas'); cv.width=w; cv.height=h; const ctx=cv.getContext('2d'); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high'; ctx.drawImage(im,0,0,w,h); let u; try{ u=(fmt==='webp')?cv.toDataURL('image/webp',0.9):cv.toDataURL('image/png'); }catch(e){ u=cv.toDataURL('image/png'); } res(u); }catch(e){ res(dataUrl); } }; im.onerror=()=>res(dataUrl); im.src=dataUrl; }); }
  pickPattern(file){ if(!file) return; const r=new FileReader(); r.onload=()=>{ this._dsImg(r.result,1100,'png').then(u=>this.up({patUrl:u})); }; r.readAsDataURL(file); }
  compactStorage(){ try{ const big=(s)=> typeof s==="string"&&s.length>180000; const jobs=[]; const patch={}; if(big(this.state.patUrl)) jobs.push(this._dsImg(this.state.patUrl,1100,'png').then(u=>{patch.patUrl=u;})); const cfg=this.state.customCfg||{}; const pngs=(cfg.pngs||[]).map(p=>p); const idxs=[]; pngs.forEach((p,i)=>{ if(big(p&&p.url)) idxs.push(i); }); idxs.forEach(i=>{ jobs.push(this._dsImg(pngs[i].url,1400,'webp').then(u=>{ pngs[i]={...pngs[i],url:u}; })); }); if(this.state.pendingImage) patch.pendingImage=""; if(!jobs.length && !this.state.pendingImage) return; Promise.all(jobs).then(()=>{ if(idxs.length) patch.customCfg={...cfg,pngs}; if(Object.keys(patch).length){ this.setState(patch,()=>{ this.applyVars(); this.persist(); }); } }); }catch(e){} }
  pickLogo(key,file){ if(!file) return; const r=new FileReader(); r.onload=()=>{ const im=new Image(); im.onload=()=>{ try{ const MAX=1400; const sc=Math.min(1, MAX/Math.max(im.naturalWidth,im.naturalHeight)); const w=Math.max(1,Math.round(im.naturalWidth*sc)), h=Math.max(1,Math.round(im.naturalHeight*sc)); const cv=document.createElement('canvas'); cv.width=w; cv.height=h; const ctx=cv.getContext('2d'); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high'; ctx.drawImage(im,0,0,w,h); let url; try{ url=cv.toDataURL('image/png'); }catch(e){ url=r.result; } this.up({[key]:url, logoMain:null, fmMain:null, thumbs:{}}); }catch(e){ this.up({[key]:r.result, logoMain:null, fmMain:null, thumbs:{}}); } }; im.onerror=()=>this.up({[key]:r.result, logoMain:null, fmMain:null, thumbs:{}}); im.src=r.result; }; r.readAsDataURL(file); }
  pickFileMulti(keys,file){ if(!file) return; const r=new FileReader(); r.onload=()=>{ const patch={}; keys.forEach(k=>patch[k]=r.result); this.up(patch); }; r.readAsDataURL(file); }
  pickMainLogo(file){ if(!file) return; const r=new FileReader(); r.onload=()=>this.up({logoMain:r.result, logoWhite:null, logoLight:null, logoDark:null}); r.readAsDataURL(file); }
  pickMainFm(file){ if(!file) return; const r=new FileReader(); r.onload=()=>this.up({fmMain:r.result, fmWhite:null, fmBrick:null, fmDark:null}); r.readAsDataURL(file); }
  resetLogos(){ this.up({logoMain:null, logoWhite:null, logoLight:null, logoDark:null, thumbs:{}}); this.flash("تم حذف اللوغو — ارفع لوغوك الجديد ✓"); }
  resetFm(){ this.up({fmMain:null, fmWhite:null, fmBrick:null, fmDark:null, thumbs:{}}); this.flash("تم حذف لوغو التردد ✓"); }
  removeKashida(s){ return (s||"").replace(/\u0640/g,""); }
  fillLineKashida(line,n){
    if(n<=0) return line;
    const DUAL=new Set("بتثجحخسشصضطظعغفقكلمنهيئ".split(""));
    const AR=/[\u0621-\u064A]/;
    const pos=[];
    for(let i=0;i<line.length-1;i++){ if(DUAL.has(line[i])&&AR.test(line[i+1])) pos.push(i); }
    if(!pos.length) return line;
    const counts={};
    for(let k=0;k<n;k++){ const p=pos[k%pos.length]; counts[p]=(counts[p]||0)+1; }
    let out="";
    for(let i=0;i<line.length;i++){ out+=line[i]; if(counts[i]) out+="\u0640".repeat(counts[i]); }
    return out;
  }
  justifyKashida(){
    try{
      const root=this.rootRef.current; if(!root) return;
      const node=root.querySelector("[data-export-node]"); if(!node) return;
      const raw=this.removeKashida(this.state.headline||"").replace(/\s+/g," ").trim();
      const useK=this.state.txtAlign==="justify" && raw.length>0;
      const cands=[...node.querySelectorAll("p,div,span")].filter(el=>{
        if(el.children.length) return false;
        return this.removeKashida(el.textContent).replace(/\s+/g," ").trim()===raw;
      });
      cands.forEach(el=>{
        const block=(el.clientWidth>20)?el:(el.parentElement||el);
        // Keep the design's NATIVE justify + wrapping (flush edges, correct line
        // count). Only undo any earlier manual wrapping and inject kashida-elongated
        // text, so native justification has far less blank space to push between words.
        block.style.whiteSpace="";
        const target = useK ? this.addKashida(raw, 6) : raw;
        if(el.textContent!==target) el.textContent=target;
      });
    }catch(e){}
  }
  addKashida(s, density){
    s = this.removeKashida(s);
    // Dual-joining letters connect to BOTH sides — a kashida (ـ U+0640) may be
    // inserted only AFTER one of these AND before another Arabic letter.
    // Right-joining-only letters (ا أ إ آ د ذ ر ز و ؤ ة ء ى) never connect to the
    // next letter, so no kashida may follow them. Spaces/punctuation excluded.
    const DUAL = new Set("بتثجحخسشصضطظعغفقكلمنهيئ".split(""));
    const ARLET = /[\u0621-\u064A]/;
    const KAF="ك", LAM="ل";
    return s.split(/(\s+)/).map(w=>{
      if(/\s/.test(w) || w.length<3) return w;
      const pos=[];
      for(let i=0;i<w.length-1;i++){ if(DUAL.has(w[i]) && ARLET.test(w[i+1])) pos.push(i); }
      if(!pos.length) return w;
      // Classical priority: after kaf/before lam first, then before the final
      // letter, then a middle point. Density caps how many per word.
      const ranked = pos.slice().sort((a,b)=>{
        const score=(i)=> (w[i]===KAF?3:0) + (w[i+1]===LAM?2:0) + (i===pos[pos.length-1]?1:0);
        return score(b)-score(a);
      });
      const chosen = ranked.slice(0, Math.max(1, Math.min(density, pos.length)));
      const set = new Set(chosen);
      const arr=[];
      for(let i=0;i<w.length;i++){ arr.push(w[i]); if(set.has(i)) arr.push("\u0640"); }
      return arr.join("");
    }).join("");
  }
  genPickImage(file){ if(!file) return; const r=new FileReader(); r.onload=()=>this.setState({genImage:r.result}); r.readAsDataURL(file); }
  fillSlot(slotId,dataUrl){
    if(!dataUrl) return;
    try{
      const arr=dataUrl.split(","); const mime=(arr[0].match(/:(.*?);/)||[])[1]||"image/png";
      const bin=atob(arr[1]); let n=bin.length; const u8=new Uint8Array(n); while(n--) u8[n]=bin.charCodeAt(n);
      const file=new File([u8],"news."+(mime.split("/")[1]||"png"),{type:mime});
      const tryDrop=(tries)=>{
        const el=this.rootRef.current && this.rootRef.current.querySelector("#"+slotId);
        if(!el){ if(tries>0) setTimeout(()=>tryDrop(tries-1),120); return; }
        const dt=new DataTransfer(); dt.items.add(file);
        el.dispatchEvent(new DragEvent("drop",{bubbles:true,cancelable:true,dataTransfer:dt}));
      };
      setTimeout(()=>tryDrop(12),140);
    }catch(e){}
  }
  genGo(id){
    const slotMap={breaking_photo:"bp_photo",text_photo:"tp_photo",story:"st_photo"};
    const patch={};
    if(this.state.genHeadline && this.state.genHeadline.trim()) patch.headline=this.state.genHeadline;
    if(this.state.genTicker && this.state.genTicker.trim()) patch.ticker=this.state.genTicker;
    const d={...this.DEFAULTS_DS, ...(this.state.ds[id]||{}), ...patch, showPhoto:true};
    this.setState({screen:"edit", selected:id, generatorOpen:false, adv:false, ...d}, ()=>{
      this.applyVars();
      if(this.state.genImage && slotMap[id]) this.fillSlot(slotMap[id], this.state.genImage);
    });
  }
  setCfg(patch){ this.setState(s=>({customCfg:{...s.customCfg,...patch}}),()=>this.applyVars()); }
  addPngs(files){ const arr=Array.from(files||[]); Promise.all(arr.map(f=>new Promise(res=>{const r=new FileReader();r.onload=()=>{ const im=new Image(); im.onload=()=>res({u:r.result,ar:(im.naturalWidth&&im.naturalHeight)?(im.naturalWidth/im.naturalHeight):1}); im.onerror=()=>res({u:r.result,ar:1}); im.src=r.result; };r.readAsDataURL(f);}))).then(items=>this.setState(s=>{ const np=items.map((it,k)=>({url:it.u,x:0,y:0,s:1,ar:it.ar,id:"p"+Date.now()+"_"+k})); const layers=(s.customCfg.layers||[]).concat(np.map(p=>"png:"+p.id)); return {customCfg:{...s.customCfg,pngs:[...s.customCfg.pngs,...np],layers}}; },()=>this.persist())); }
  moveLayer(id,dir){ this.setState(s=>{ const lay=this.effOrder(s.customCfg); const i=lay.indexOf(id); const j=i+dir; if(i<0||j<0||j>=lay.length) return null; const a=lay.slice(); const tmp=a[i]; a[i]=a[j]; a[j]=tmp; return {customCfg:{...s.customCfg,layers:a}}; },()=>{this.persist();this.applyVars();}); }
  effOrder(c){ const base=(c.layers&&c.layers.length)?c.layers.slice():["image","badge","text","logo"]; const active=[]; if(c.showImg)active.push("image"); if(c.showBadge)active.push("badge"); if(c.showText)active.push("text"); if(c.showLogo)active.push("logo"); (c.pngs||[]).forEach(p=>active.push("png:"+p.id)); let ord=base.filter(x=>active.includes(x)); active.forEach(x=>{ if(!ord.includes(x))ord.push(x); }); return ord; }
  pngToFront(i){ this.setState(s=>{ const pngs=s.customCfg.pngs.slice(); const x=pngs.splice(i,1)[0]; pngs.push(x); return {customCfg:{...s.customCfg,pngs}}; },()=>this.persist()); }
  pngDel(i){ this.setState(s=>{ const pngs=s.customCfg.pngs.slice(); const rm=pngs.splice(i,1)[0]; const layers=(s.customCfg.layers||[]).filter(x=>x!=="png:"+(rm&&rm.id)); return {customCfg:{...s.customCfg,pngs,layers},selPng:null}; },()=>this.persist()); }
  setPngScale(i,v){ this.setState(s=>{ const pngs=s.customCfg.pngs.slice(); if(!pngs[i])return null; pngs[i]={...pngs[i],s:Math.max(0.2,Math.min(4,v))}; return {customCfg:{...s.customCfg,pngs}}; },()=>this.persist()); }
  migratePngs(){ this.setState(s=>{ const c=s.customCfg||{}; const pngs=(c.pngs||[]); let changed=false; const np=pngs.map((p,i)=>{ if(p && !p.id){ changed=true; return {...p, id:"p"+Date.now()+"_"+i, s:(p.s||1), x:(p.x||0), y:(p.y||0)}; } return p; }); if(!changed) return null; const layers=(c.layers||[]).slice(); np.forEach(p=>{ if(!layers.includes("png:"+p.id)) layers.push("png:"+p.id); }); return {customCfg:{...c, pngs:np, layers}}; },()=>{this.persist(); this.backfillAr();}); }
  backfillAr(){ const pngs=(this.state.customCfg&&this.state.customCfg.pngs)||[]; pngs.forEach((p,i)=>{ if(p && p.url && !p.ar){ const im=new Image(); im.onload=()=>{ const ar=(im.naturalWidth&&im.naturalHeight)?(im.naturalWidth/im.naturalHeight):1; this.setState(s=>{ const arr=s.customCfg.pngs.slice(); if(arr[i]&&arr[i].id===p.id) arr[i]={...arr[i],ar}; return {customCfg:{...s.customCfg,pngs:arr}}; },()=>this.persist()); }; im.src=p.url; } }); }
  _capture(cb){
    const node=this.rootRef.current && this.rootRef.current.querySelector("[data-export-node]");
    if(!node || !window.html2canvas){ alert("جارٍ تحميل أداة التصدير، حاول بعد لحظات."); return; }
    const st=document.createElement("style"); st.textContent="image-slot::part(empty){display:none!important}image-slot::part(ring){display:none!important}[data-cimgresize]{display:none!important}"; document.head.appendChild(st);
    const stg=this.stageRef&&this.stageRef.current; const stgT=stg?stg.style.transform:""; if(stg) stg.style.transform="";
    const w=+node.getAttribute("data-w")||node.offsetWidth;
    const q=Math.max(2,this.state.exportScale||3);
    const scale=(w/node.offsetWidth)*q;
    const trans=this.state.exportTransparent;
    const prevBg=node.style.background;
    if(trans) node.style.background="transparent";
    const done=()=>{ node.style.background=prevBg; st.remove(); if(stg) stg.style.transform=stgT; };
    const rs=getComputedStyle(this.rootRef.current);
    const pick=(p)=>{ const v=rs.getPropertyValue(p).trim(); return (v.match(/url\((?:["']?)(.*?)(?:["']?)\)/)||[])[1]||""; };
    const abs=(s)=> (s && !/^data:/.test(s)) ? (new URL(s, location.href)).href : s;
    const curSrc=abs(pick("--logoCur")), fmSrc=abs(pick("--fmCur"));
    let exBg="rgb(27,35,38)"; try{ const c=getComputedStyle(node).backgroundColor; if(c && c!=="rgba(0, 0, 0, 0)" && c!=="transparent") exBg=c; }catch(e){}
    const onclone=(doc)=>{ try{
      doc.querySelectorAll("*").forEach(el=>{
        const stl=el.getAttribute&&el.getAttribute("style"); if(!stl) return;
        let src=""; if(stl.indexOf("var(--logoCur)")>=0) src=curSrc; else if(stl.indexOf("var(--fmCur)")>=0) src=fmSrc; else return;
        if(!src) return;
        el.style.backgroundImage="none";
        if(getComputedStyle(el).position==="static") el.style.position="relative";
        const img=doc.createElement("img"); img.src=src; img.setAttribute("crossorigin","anonymous");
        img.style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;";
        el.appendChild(img);
      });
      doc.querySelectorAll("*").forEach(el=>{
        const stl=el.getAttribute&&el.getAttribute("style"); if(!stl||stl.indexOf("var(--patMask")<0) return;
        let g;
        if(stl.indexOf("patMaskTop")>=0) g="linear-gradient(to bottom, transparent 0%, "+exBg+" 100%)";
        else if(stl.indexOf("patMaskBot")>=0) g="linear-gradient(to top, transparent 0%, "+exBg+" 100%)";
        else g="linear-gradient(to bottom, "+exBg+" 0%, transparent 32%, transparent 68%, "+exBg+" 100%)";
        el.style.webkitMaskImage="none"; el.style.maskImage="none";
        if(!el.parentElement) return;
        const ov=doc.createElement("div"); ov.style.cssText="position:absolute;left:"+el.offsetLeft+"px;top:"+el.offsetTop+"px;width:"+el.offsetWidth+"px;height:"+el.offsetHeight+"px;pointer-events:none;background:"+g+";";
        el.parentElement.insertBefore(ov, el.nextSibling);
      });
    }catch(e){} };
    window.html2canvas(node,{scale,backgroundColor:null,useCORS:true,logging:false,imageTimeout:15000,onclone}).then(c=>{ done(); cb(c,trans); }).catch(()=>{ done(); });
  }
  exportPng(){ this._capture((c,trans)=>{ const a=document.createElement("a"); a.download="albalad-"+this.state.selected+(trans?"-transparent":"")+".png"; a.href=c.toDataURL("image/png"); a.click(); }); }
  sharePng(){
    this._capture((c)=>{ c.toBlob(async(blob)=>{ if(!blob) return; const file=new File([blob],"albalad-"+this.state.selected+".png",{type:"image/png"});
      try{ if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file], title:"راديو البلد", text:"راديو البلد · FM 102.6"}); return; } }catch(e){ return; }
      const a=document.createElement("a"); a.download=file.name; a.href=URL.createObjectURL(blob); a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),2000); this.flash("المشاركة غير مدعومة — تم التنزيل بدلاً منها");
    },"image/png"); });
  }
  copyPng(){
    this._capture((c)=>{ c.toBlob(async(blob)=>{ if(!blob) return;
      try{ await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]); this.flash("تم نسخ الصورة ✓"); }
      catch(e){ this.flash("النسخ غير مدعوم — استخدم «تنزيل»"); }
    },"image/png"); });
  }
  flash(msg){
    let el=document.createElement("div"); el.textContent=msg;
    el.style.cssText="position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#1b2326;color:#fdf6e3;border:1px solid #f2d47e;border-radius:10px;padding:11px 22px;font-family:'IBM Plex Sans Arabic',sans-serif;font-weight:600;font-size:14px;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.4);opacity:0;transition:opacity .2s;";
    document.body.appendChild(el); requestAnimationFrame(()=>el.style.opacity="1");
    setTimeout(()=>{ el.style.opacity="0"; setTimeout(()=>el.remove(),300); },1900);
  }
  captureThumb(done){
    const sel=this.state.selected;
    const node=this.rootRef.current && this.rootRef.current.querySelector("[data-export-node]");
    if(!sel || !node || !window.html2canvas){ if(done)done(); return; }
    const st=document.createElement("style"); st.textContent="image-slot::part(empty){display:none!important}image-slot::part(ring){display:none!important}[data-cimgresize]{display:none!important}"; document.head.appendChild(st);
    const stg=this.stageRef&&this.stageRef.current; const stgT=stg?stg.style.transform:""; if(stg) stg.style.transform="";
    const scale=Math.min(1, 360/(node.offsetWidth||360));
    window.html2canvas(node,{scale,backgroundColor:null,useCORS:true,logging:false,imageTimeout:0}).then(c=>{
      let url=""; try{ url=c.toDataURL("image/jpeg",0.7); }catch(e){}
      st.remove(); if(stg) stg.style.transform=stgT;
      if(url){ this.setState(s=>({thumbs:{...(s.thumbs||{}),[sel]:url}}),()=>{ this.persist(); if(done)done(); }); }
      else if(done) done();
    }).catch(()=>{ st.remove(); if(stg) stg.style.transform=stgT; if(done)done(); });
  }
  leaveEdit(to){ if(this.state.screen==="edit"){ this.captureThumb(()=>this.setState({screen:to})); } else { this.setState({screen:to}); } }
  fitScale(){ let hs=this.state.headScale; if(this.state.autoFit){ const sel=this.state.selected; let txt=this.state.headline||""; if(sel==="now_air") txt=(this.state.program||"")+" "+(this.state.host||""); const n=txt.trim().length; let f=1; if(n>=190) f=0.5; else if(n>45) f=1-((n-45)/145)*0.5; hs=hs*f; } return hs; }
  dates(){
    const d=new Date(); const dd=String(d.getDate()).padStart(2,"0"); const mm=String(d.getMonth()+1).padStart(2,"0"); const yyyy=""+d.getFullYear();
    if(this.state.autoDate) return {dm:dd+"."+mm, y:yyyy, full:dd+"."+mm+"."+yyyy};
    const m=this.state.manualDate||""; const p=m.split(".");
    if(p.length>=3) return {dm:p[0]+"."+p[1], y:p.slice(2).join("."), full:m};
    return {dm:m, y:"", full:m};
  }
  renderVals(){
    const ev=h=>e=>h(e.target.value); const dd=this.dates();
    const logoLight=this.state.logoLight||"assets/logo-white.png";
    const logoDark=this.state.logoDark||"assets/logo-main.png";
    const sel=this.state.selected;
    const list=[
      {id:"breaking_photo",name:"عاجل — صورة + نص",cat:"منشور"},
      {id:"breaking_text",name:"عاجل — نص",cat:"منشور"},
      {id:"news_photo",name:"خبر — صورة",cat:"منشور"},
      {id:"news_text",name:"خبر — بدون صورة",cat:"منشور"},
      {id:"text_photo",name:"نص + صورة",cat:"منشور"},
      {id:"quote",name:"اقتباس",cat:"منشور"},
      {id:"square",name:"منشور مربّع",cat:"منشور"},
      {id:"story",name:"ستوري عاجل",cat:"منشور"},
      {id:"quote_deco",name:"اقتباس مزخرف",cat:"منشور"},
      {id:"carousel",name:"كاروسيل",cat:"منشور"},
      {id:"weather",name:"بطاقة الطقس",cat:"سوشيال"},
      {id:"match",name:"نتائج مباريات",cat:"سوشيال"},
      {id:"audiogram",name:"أوديوغرام بودكاست",cat:"بث"},
      {id:"full_screen",name:"شاشة بث كاملة",cat:"بث"},
      {id:"fb_cover",name:"غلاف فيسبوك",cat:"سوشيال"},
      {id:"schedule",name:"جدول البرامج",cat:"سوشيال"},
      {id:"now_air",name:"الآن على الهواء",cat:"سوشيال"}
    ];
    const designs=list.map(x=>{ const thumb=(this.state.thumbs||{})[x.id]; const edited=!!thumb||!!(this.state.ds||{})[x.id]; return {...x, open:()=>this.openDesign(x.id), hasThumb:!!thumb, noThumb:!thumb, canDelete:edited, hideDelete:!edited, reset:(e)=>{ if(e&&e.stopPropagation)e.stopPropagation(); if(confirm("حذف هذا المنشور وإرجاعه للحالة الافتراضية؟")) this.resetDesign(x.id); }, thumbStyle: thumb?{position:"absolute",inset:0,width:"100%",height:"100%",backgroundImage:'url("'+thumb+'")',backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"#11171a"}:null }; });
    const selName=(list.find(x=>x.id===sel)||{}).name||"";
    const byId=Object.fromEntries(designs.map(d=>[d.id,d]));
    const recentDesigns=(this.state.recent||[]).map(id=>byId[id]).filter(Boolean).slice(0,5);
    return {
      hasRecent:recentDesigns.length>0,
      recentDesigns,
      quickHeadline:this.state.quickHeadline,
      onQuickHeadline:ev(v=>this.setState({quickHeadline:v})),
      quickImgLabel:this.state.quickImage?"الصورة جاهزة ✓":"أضف صورة",
      onQuickImage:e=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=()=>this.setState({quickImage:r.result}); r.readAsDataURL(f); },
      applyQuickNews:()=>this.applyQuickNews(),
      showTour:this.state.tourOpen || (this.state.screen==="home" && !this.state.tourSeen),
      openTour:()=>this.setState({tourOpen:true}),
      closeTour:()=>this.setState({tourOpen:false, tourSeen:true},()=>this.persist()),
      tourSteps:[
        {icon:"\uD83D\uDDBC\uFE0F", title:"اختر تصميماً", body:"اضغط «اختر تصميماً» ثم انقر أي قالب لفتحه — عاجل، خبر، اقتباس، بث، طقس، وغيرها."},
        {icon:"\u270F\uFE0F", title:"اكتب وبدّل الصورة", body:"عدّل النص واسحب صورتك مباشرةً على التصميم. النص الطويل يصغّر نفسه تلقائياً."},
        {icon:"\u2699\uFE0F", title:"تعديل كامل", body:"زر «تعديل التصميم» يفتح الألوان والنقشة والمواضع. الإعدادات للوغو والتردد العام."},
        {icon:"\u2913", title:"احفظ وشارك", body:"«حفظ بدقة عالية» ينزّل الصورة، و«مشاركة»/«نسخ» للنشر السريع على السوشيال."}
      ],
      rootRef:this.rootRef,
      stageRef:this.stageRef,
      adv:this.state.adv,
      toggleAdv:()=>this.setState(s=>({adv:!s.adv})),
      advBtnLabel:this.state.adv?"✓ وضع التعديل الكامل (اضغط للإخفاء)":"✎ تعديل التصميم (ألوان، نقشة، مواضع…)",
      advBtnBg:this.state.adv?"#26312f":"var(--brick)",
      advBtnFg:this.state.adv?"#f2d47e":"#fdf6e3",
      adv:this.state.adv,
      toggleAdv:()=>this.setState(s=>({adv:!s.adv})),
      advBtnLabel:this.state.adv?"✓ وضع التعديل الكامل (اضغط للإخفاء)":"✎ تعديل التصميم (ألوان، نقشة، مواضع…)",
      advBtnBg:this.state.adv?"#26312f":"var(--brick)",
      advBtnFg:this.state.adv?"#f2d47e":"#fdf6e3",
      isHome:this.state.screen==="home", isPick:this.state.screen==="pick", isEdit:this.state.screen==="edit",
      isSettings:this.state.settingsOpen,
      isGenerator:this.state.generatorOpen,
      openGenerator:()=>this.setState({generatorOpen:true}),
      closeGenerator:()=>this.setState({generatorOpen:false}),
      genHeadline:this.state.genHeadline, genTicker:this.state.genTicker,
      genHasImage:!!this.state.genImage, genImageBg:this.state.genImage?("url("+this.state.genImage+")"):"none",
      onGenHeadline:ev(v=>this.setState({genHeadline:v})), onGenTicker:ev(v=>this.setState({genTicker:v})),
      onGenImage:e=>this.genPickImage(e.target.files[0]),
      genTpls:[
        {id:"breaking_photo",name:"عاجل — صورة + نص",desc:"شارة عاجل + صورة أعلى النص"},
        {id:"text_photo",name:"نص + صورة",desc:"صورة مؤطّرة فوق المتن"},
        {id:"story",name:"ستوري عاجل",desc:"عمودي للستوريز بخلفية"}
      ].map(g=>({...g, go:()=>this.genGo(g.id)})),
      designs, selName,
      templates:this.state.templates.map(tp=>({...tp, open:()=>this.openTemplate(tp), del:(e)=>{ if(e&&e.stopPropagation)e.stopPropagation(); this.deleteTemplate(tp.id); }})),
      saveTpl:()=>this.saveTemplate(),
      d:{...Object.fromEntries(list.map(x=>[x.id, sel===x.id])), custom: sel==="custom"},
      isBuilder:this.state.builderOpen,
      cfg:(()=>{ const c=this.state.customCfg; let w,h; if(c.size==="custom"){ w=Math.max(200,Math.min(4000,parseInt(c.customW)||1200)); h=Math.max(200,Math.min(4000,parseInt(c.customH)||800)); } else { const a=c.size.split("x").map(Number); w=a[0]; h=a[1]; } const sc=470/Math.max(w,h); const t=this.state.t;
        const bgMap={dark:t.dark,brick:t.brick,deep:t.deep,cream:t.cream}; const bgSolid=bgMap[c.bg]||t.dark; const bgColor=(this.state.gradBg&&c.bg!=="cream")?("linear-gradient(155deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,.30) 100%), "+bgSolid):bgSolid;
        const ord=this.effOrder(c); const zMap={}; ord.forEach((id,i)=>zMap[id]=i+1);
        return {...c, imgFit:(c.imgFit==="contain"?"contain":"cover"), w, h, dispW:Math.round(w*sc), dispH:Math.round(h*sc), bgColor, fgColor:c.bg==="cream"?t.dark:t.cream, logo:c.bg==="cream"?logoDark:logoLight, pngCount:c.pngs.length, zImage:zMap["image"]||0, zBadge:zMap["badge"]||0, zText:zMap["text"]||0, zLogo:zMap["logo"]||0, pngsR:c.pngs.map((p,i)=>({x:p.x,y:p.y,w:Math.round((p.s||1)*120),z:zMap["png:"+p.id]||(i+1),i,outline:this.state.selPng===i?"2px dashed #f2d47e":"none",selected:this.state.selPng===i,imgStyle:{width:"100%",aspectRatio:String(p.ar||1),backgroundImage:'url("'+p.url+'")',backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",pointerEvents:"none"}})) }; })(),
      t:this.state.t, radius:this.state.radius, bar:this.state.bar,
      ptopOp:this.state.ptopOp, ptopSize:this.state.ptopSize, ptopY:this.state.ptopY, pbotOp:this.state.pbotOp, pbotSize:this.state.pbotSize, pbotY:this.state.pbotY, pboxOp:this.state.pboxOp, pboxSize:this.state.pboxSize,
      font:this.state.font,
      showLogo:this.state.showLogo, showFreq:this.state.showFreq, showPhoto:this.state.showPhoto,
      dateTop:this.state.dateTop, dateLeft:this.state.dateLeft, dateFs:this.state.dateFs,
      station:this.state.station, fmLine:this.state.fmLine,
      gradBg:this.state.gradBg, gradPat:this.state.gradPat,
      patFadeAmt:this.state.patFadeAmt, patFadeDir:this.state.patFadeDir,
      onGradBg:e=>this.up({gradBg:e.target.checked}), onGradPat:e=>this.up({gradPat:e.target.checked}),
      onPatFadeAmt:ev(v=>this.up({patFadeAmt:parseFloat(v)})), onPatFadeDir:ev(v=>this.up({patFadeDir:v})),
      autoDate:this.state.autoDate, manualDate:this.state.manualDate,
      headline:this.state.headline, ticker:this.state.ticker,
      guest:this.state.guest, guestTitle:this.state.guestTitle, program:this.state.program, host:this.state.host, agLabel:this.state.agLabel,
      wCity:this.state.wCity, wTemp:this.state.wTemp, wCond:this.state.wCond, wHi:this.state.wHi, wLo:this.state.wLo, wIcon:this.state.wIcon,
      mLeague:this.state.mLeague, mTeamA:this.state.mTeamA, mTeamB:this.state.mTeamB, mScoreA:this.state.mScoreA, mScoreB:this.state.mScoreB, mStatus:this.state.mStatus,
      mInitA:(this.state.mTeamA||" ").trim().charAt(0), mInitB:(this.state.mTeamB||" ").trim().charAt(0),
      waveBars:Array.from({length:42}).map(()=>({h:Math.round(18+Math.random()*82)})),
      carBg:(this.state.carIdx%2===0)?this.state.t.dark:this.state.t.brick,
      carNum:"0"+(this.state.carIdx+1)+" / 0"+this.state.carSlides.length,
      carPos:(this.state.carIdx+1)+" من "+this.state.carSlides.length,
      carHead:(this.state.carSlides[this.state.carIdx]||{}).head||"",
      carBody:(this.state.carSlides[this.state.carIdx]||{}).body||"",
      carDots:this.state.carSlides.map((s,i)=>({c:i===this.state.carIdx?this.state.t.gold:"rgba(253,246,227,.3)"})),
      carPrev:()=>this.setState(s=>({carIdx:Math.max(0,s.carIdx-1)})),
      carNext:()=>this.setState(s=>({carIdx:Math.min(s.carSlides.length-1,s.carIdx+1)})),
      carAdd:()=>this.setState(s=>({carSlides:[...s.carSlides,{head:"شريحة جديدة",body:"اكتب المحتوى هنا."}],carIdx:s.carSlides.length}),()=>this.persist()),
      carDel:()=>this.setState(s=>{ if(s.carSlides.length<=1)return null; const cs=s.carSlides.slice(); cs.splice(s.carIdx,1); return {carSlides:cs,carIdx:Math.max(0,s.carIdx-1)}; },()=>this.persist()),
      onCarHead:ev(v=>this.setState(s=>{const cs=s.carSlides.slice();cs[s.carIdx]={...cs[s.carIdx],head:v};return{carSlides:cs};},()=>this.persist())),
      onCarBody:ev(v=>this.setState(s=>{const cs=s.carSlides.slice();cs[s.carIdx]={...cs[s.carIdx],body:v};return{carSlides:cs};},()=>this.persist())),
      onWCity:ev(v=>this.up({wCity:v})), onWTemp:ev(v=>this.up({wTemp:v})), onWCond:ev(v=>this.up({wCond:v})), onWHi:ev(v=>this.up({wHi:v})), onWLo:ev(v=>this.up({wLo:v})), onWIcon:ev(v=>this.up({wIcon:v})),
      onMLeague:ev(v=>this.up({mLeague:v})), onMTeamA:ev(v=>this.up({mTeamA:v})), onMTeamB:ev(v=>this.up({mTeamB:v})), onMScoreA:ev(v=>this.up({mScoreA:v})), onMScoreB:ev(v=>this.up({mScoreB:v})), onMStatus:ev(v=>this.up({mStatus:v})),
      isCarousel:sel==="carousel", isWeather:sel==="weather", isMatch:sel==="match",
      isBroadcast:sel==="full_screen",
      tickerLabel:this.state.tickerLabel, showRerun:this.state.showRerun,
      onTickerLabel:ev(v=>this.up({tickerLabel:v})), onShowRerun:e=>this.up({showRerun:e.target.checked}),
      exportTransparent:this.state.exportTransparent, exportScale:this.state.exportScale,
      onExportTransparent:e=>this.up({exportTransparent:e.target.checked}),
      onExportScale:ev(v=>this.up({exportScale:parseFloat(v)})),
      imgY:this.state.imgY, boxY:this.state.boxY, badgeY:this.state.badgeY, imgX:this.state.imgX,
      clock:this.state.clock, logoLight, logoDark,
      dateDM:dd.dm, dateY:dd.y, dateFull:dd.full,
      goPick:()=>this.setState({screen:"pick"}),
      goHome:()=>this.leaveEdit("home"),
      goBack:()=>this.leaveEdit("pick"),
      openSettings:()=>this.setState({settingsOpen:true}),
      genAll:()=>this.genAllThumbs(),
      genAllLabel:this.state.genAllBusy?("\u062c\u0627\u0631\u064d\u2026 "+(this.state.genAllN||0)+"/17"):"\u21bb \u062a\u0648\u0644\u064a\u062f \u0643\u0644 \u0627\u0644\u0645\u0635\u063a\u0651\u0631\u0627\u062a",
      closeSettings:()=>this.setState({settingsOpen:false}),
      exportPng:()=>this.exportPng(),
      shareImg:()=>this.sharePng(),
      copyImg:()=>this.copyPng(),
      resetAll:()=>this.up({...this.DEFAULTS_DS}),
      onDark:ev(v=>this.setColor("dark",v)), onBrick:ev(v=>this.setColor("brick",v)), onDeep:ev(v=>this.setColor("deep",v)),
      bgToggle:["breaking_photo","breaking_text","news_photo","news_text","text_photo","square","quote_deco","match","story","now_air","audiogram"].indexOf(sel)>=0,
      bgEff:(this.state.bgMode || (["breaking_text","news_text","story","now_air","audiogram"].indexOf(sel)>=0?"brick":"dark")),
      bgDarkBorder:((this.state.bgMode || (["breaking_text","news_text","story","now_air","audiogram"].indexOf(sel)>=0?"brick":"dark"))==="dark")?"#f2d47e":"#3a4448",
      bgBrickBorder:((this.state.bgMode || (["breaking_text","news_text","story","now_air","audiogram"].indexOf(sel)>=0?"brick":"dark"))==="brick")?"#f2d47e":"#3a4448",
      setBgDark:()=>this.up({bgMode:"dark"}), setBgBrick:()=>this.up({bgMode:"brick"}),
      palettes:[
        {name:"ألوان الهوية", dark:"#1b2326", brick:"#c1624c", deep:"#b94126", cream:"#fdf6e3", gold:"#f2d47e"}
      ].map(p=>({name:p.name, c0:p.dark, c1:p.brick, c2:p.deep, c3:p.gold, apply:()=>this.applyPalette(p)})),
      onCream:ev(v=>this.setColor("cream",v)), onGold:ev(v=>this.setColor("gold",v)),
      onRadius:ev(v=>this.up({radius:parseInt(v)})),
      onPtopOp:ev(v=>this.up({ptopOp:parseFloat(v)})), onPtopSize:ev(v=>this.up({ptopSize:parseInt(v)})), onPtopY:ev(v=>this.up({ptopY:parseInt(v)})),
      onPbotOp:ev(v=>this.up({pbotOp:parseFloat(v)})), onPbotSize:ev(v=>this.up({pbotSize:parseInt(v)})), onPbotY:ev(v=>this.up({pbotY:parseInt(v)})),
      onPboxOp:ev(v=>this.up({pboxOp:parseFloat(v)})), onPboxSize:ev(v=>this.up({pboxSize:parseInt(v)})),
      onBar:e=>this.up({bar:e.target.checked}), onFont:ev(v=>this.up({font:v})),
      onShowLogo:e=>this.up({showLogo:e.target.checked}), onShowFreq:e=>this.up({showFreq:e.target.checked}), onShowPhoto:e=>this.up({showPhoto:e.target.checked}),
      showBadge:this.state.showBadge, textScrim:this.state.textScrim,
      onShowBadge:e=>this.up({showBadge:e.target.checked}), onTextScrim:e=>this.up({textScrim:e.target.checked}),
      isBreakingType:["breaking_photo","breaking_text","story"].indexOf(sel)>=0,
      canScrim:["story"].indexOf(sel)>=0,
      scrimOn:["story"].indexOf(sel)>=0 && !!this.state.textScrim,
      scrimAmt:this.state.scrimAmt==null?0.6:this.state.scrimAmt,
      onScrimAmt:ev(v=>this.up({scrimAmt:parseFloat(v)})),
      isBoxWidth:sel==="breaking_text",
      boxW:this.state.boxW==null?100:this.state.boxW,
      onBoxW:ev(v=>this.up({boxW:parseInt(v)})),
      setToneAuto:()=>this.up({logoTone:"auto"}), setToneGold:()=>this.up({logoTone:"gold"}), setToneBrick:()=>this.up({logoTone:"brick"}),
      toneAutoB:(this.state.logoTone||"auto")==="auto"?"#f2d47e":"#3a4448", toneGoldB:this.state.logoTone==="gold"?"#f2d47e":"#3a4448", toneBrickB:this.state.logoTone==="brick"?"#f2d47e":"#3a4448",
      onPatternFile:e=>this.pickPattern(e.target.files[0]),
      openBuilder:()=>this.setState({builderOpen:true}),
      closeBuilder:()=>this.setState({builderOpen:false}),
      createCustom:()=>{ const d={...this.DEFAULTS_DS, ...(this.state.ds["custom"]||{})}; this.setState({selected:"custom",screen:"edit",builderOpen:false, adv:true, ...d},()=>this.applyVars()); },
      onCfgSize:e=>this.setCfg({size:e.target.value}), onCfgBg:e=>this.setCfg({bg:e.target.value}),
      isCustomSize:this.state.customCfg.size==="custom",
      onCfgW:e=>this.setCfg({customW:e.target.value}), onCfgH:e=>this.setCfg({customH:e.target.value}),
      onCfgImg:e=>this.setCfg({showImg:e.target.checked}), onCfgBadge:e=>this.setCfg({showBadge:e.target.checked}),
      onCfgText:e=>this.setCfg({showText:e.target.checked}), onCfgLogo:e=>this.setCfg({showLogo:e.target.checked}),
      onCfgPngs:e=>this.addPngs(e.target.files),
      pngList:this.state.customCfg.pngs.map((p,i)=>({n:i+1, front:()=>this.pngToFront(i), del:()=>this.pngDel(i)})),
      layerList:(()=>{ const c=this.state.customCfg; const names={image:"الصورة",badge:"شارة عاجل",text:"النص",logo:"اللوغو"}; const ord=this.effOrder(c); const pIdx={}; c.pngs.forEach((p,i)=>pIdx["png:"+p.id]=i); return ord.slice().reverse().map((id,k)=>{ const pi=(id in pIdx)?pIdx[id]:-1; const png=pi>=0?c.pngs[pi]:null; const isLogo=id==="logo"; const isImg=id==="image"; const ls=this.state.logoS||1; const cz=this.state.cimgS||1; const fit=(c.imgFit||"cover")==="contain"?"contain":"cover"; const fitNext=fit==="cover"?"contain":"cover"; const fitLbl=fit==="cover"?"يملأ الإطار":"كامل الصورة"; return { id, name: png?("صورة "+(pi+1)):(names[id]||id), top:k===0, bottom:k===ord.length-1, up:()=>this.moveLayer(id,1), down:()=>this.moveLayer(id,-1), isPng:!!png, isImg, fitLabel: fitLbl, toggleFit:()=>this.setCfg({imgFit:fitNext}), resizable:!!png||isLogo||isImg, scale: png?(png.s||1):(isLogo?ls:(isImg?cz:1)), onScale: png?ev(v=>this.setPngScale(pi,parseFloat(v))):(isLogo?ev(v=>this.up({logoS:parseFloat(v)})):(isImg?ev(v=>this.up({cimgS:parseFloat(v)})):null)), bigger: png?(()=>this.setPngScale(pi,(png.s||1)+0.1)):(isLogo?(()=>this.up({logoS:Math.min(3,ls+0.1)})):(isImg?(()=>this.up({cimgS:Math.min(4,cz+0.1)})):null)), smaller: png?(()=>this.setPngScale(pi,(png.s||1)-0.1)):(isLogo?(()=>this.up({logoS:Math.max(0.3,ls-0.1)})):(isImg?(()=>this.up({cimgS:Math.max(0.5,cz-0.1)})):null)), del: png?(()=>this.pngDel(pi)):null }; }); })(),
      bold:this.state.bold,
      headScale:this.state.headScale, txtAlign:this.state.txtAlign, txtPad:this.state.txtPad, autoFit:this.state.autoFit,
      onAutoFit:e=>this.up({autoFit:e.target.checked}),
      onBold:e=>this.up({bold:e.target.checked}),
      onHeadScale:ev(v=>this.up({headScale:parseFloat(v)})), onTxtAlign:ev(v=>this.up({txtAlign:v})), onTxtPad:ev(v=>this.up({txtPad:parseInt(v)})),
      wordSp:this.state.wordSp==null?0:this.state.wordSp, lineH:this.state.lineH==null?1.65:this.state.lineH,
      onWordSp:ev(v=>this.up({wordSp:parseInt(v)})), onLineH:ev(v=>this.up({lineH:parseFloat(v)})),
      onImgY:ev(v=>this.up({imgY:parseInt(v)})), onImgX:ev(v=>this.up({imgX:parseInt(v)})), onBoxY:ev(v=>this.up({boxY:parseInt(v)})), onBadgeY:ev(v=>this.up({badgeY:parseInt(v)})),
      slotReplace:()=>this.slotReplace(), slotClear:()=>this.slotClear(),
      imgScale:this.state.imgScale, onImgScale:ev(v=>this.up({imgScale:parseFloat(v)})),
      hasPhoto:["breaking_photo","text_photo","square","story","full_screen","audiogram","news_photo"].includes(sel),
      isNewsPhoto:sel==="news_photo",
      notNewsPhoto:sel!=="news_photo",
      fHeadline:["breaking_photo","breaking_text","text_photo","quote","square","story","quote_deco","audiogram","news_photo","news_text"].includes(sel),
      fTicker:["full_screen"].includes(sel),
      fGuest:["quote","full_screen","quote_deco","audiogram"].includes(sel),
      fGuestTitle:["quote","full_screen","quote_deco","audiogram"].includes(sel),
      fProgram:["now_air","audiogram"].includes(sel),
      fHost:["now_air"].includes(sel),
      fAgLabel:["audiogram"].includes(sel),
      hasTextFields:["breaking_photo","breaking_text","text_photo","quote","square","story","full_screen","now_air","quote_deco","audiogram","news_photo","news_text"].includes(sel),
      headlineLabel:["quote","quote_deco","audiogram"].includes(sel)?"نص الاقتباس / الجملة":"عنوان الخبر",
      isCustomSel:sel==="custom",
      cImgOn:sel==="custom" && !!this.state.customCfg.showImg,
      cimgW:this.state.cimgW, cimgH:this.state.cimgH, cimgPX:this.state.cimgPX, cimgPY:this.state.cimgPY, cimgS:this.state.cimgS,
      onCimgW:ev(v=>this.up({cimgW:parseInt(v)})), onCimgH:ev(v=>this.up({cimgH:parseInt(v)})),
      onCimgSize:ev(v=>this.up({cimgW:parseInt(v),cimgH:parseInt(v)})),
      onCimgPX:ev(v=>this.up({cimgPX:parseInt(v)})), onCimgPY:ev(v=>this.up({cimgPY:parseInt(v)})),
      onCimgS:ev(v=>this.up({cimgS:parseFloat(v)})),
      cimgReset:()=>this.up({cimgW:100,cimgH:100,cimgPX:0,cimgPY:0,cimgS:1}),
      selPng:this.state.selPng,
      hasSelPng:this.state.selPng!=null && !!this.state.customCfg.pngs[this.state.selPng],
      noSelPng:!(this.state.selPng!=null && !!this.state.customCfg.pngs[this.state.selPng]),
      selPngNum:(this.state.selPng!=null)?(this.state.selPng+1):0,
      selPngScale:(this.state.selPng!=null && this.state.customCfg.pngs[this.state.selPng])?(this.state.customCfg.pngs[this.state.selPng].s||1):1,
      onSelPngScale:ev(v=>this.setPngScale(this.state.selPng,parseFloat(v))),
      selPngBigger:()=>{ const i=this.state.selPng; if(i!=null){ const p=this.state.customCfg.pngs[i]; if(p) this.setPngScale(i,(p.s||1)+0.1); } },
      selPngSmaller:()=>{ const i=this.state.selPng; if(i!=null){ const p=this.state.customCfg.pngs[i]; if(p) this.setPngScale(i,(p.s||1)-0.1); } },
      onDateTop:ev(v=>this.up({dateTop:parseFloat(v)})), onDateLeft:ev(v=>this.up({dateLeft:parseFloat(v)})), onDateFs:ev(v=>this.up({dateFs:parseFloat(v)})),
      onStation:ev(v=>this.up({station:v})), onFm:ev(v=>this.up({fmLine:v})),
      onAutoDate:e=>this.up({autoDate:e.target.checked}), onManualDate:ev(v=>this.up({manualDate:v,autoDate:false})),
      onHeadline:ev(v=>this.up({headline:v})), onTicker:ev(v=>this.up({ticker:v})),
      onGuest:ev(v=>this.up({guest:v})), onGuestTitle:ev(v=>this.up({guestTitle:v})),
      onProgram:ev(v=>this.up({program:v})), onHost:ev(v=>this.up({host:v})), onAgLabel:ev(v=>this.up({agLabel:v})),
      onLogoLight:e=>this.pickFile("logoLight",e.target.files[0]), onLogoDark:e=>this.pickFile("logoDark",e.target.files[0]), onLogoWhite:e=>this.pickFile("logoWhite",e.target.files[0]),
      onLogoBrickVer:e=>this.pickLogo("logoWhite",e.target.files[0]), onLogoDarkVer:e=>this.pickLogo("logoLight",e.target.files[0]),
      onFmBrickVer:e=>this.pickLogo("fmWhite",e.target.files[0]), onFmDarkVer:e=>this.pickLogo("fmBrick",e.target.files[0]),
      resetLogos:()=>this.resetLogos(), resetFm:()=>this.resetFm(),
      onFmWhite:e=>this.pickFile("fmWhite",e.target.files[0]), onFmBrick:e=>this.pickFile("fmBrick",e.target.files[0]), onFmDark:e=>this.pickFile("fmDark",e.target.files[0]),
      schedule:this.state.schedule,
      isSchedule:sel==="schedule",
      scheduleRows:this.state.schedule.map((row,i)=>({
        ...row, n:i+1,
        onName:ev(v=>this.editSched(i,"name",v)),
        onHost:ev(v=>this.editSched(i,"host",v)),
        onTime:ev(v=>this.editSched(i,"time",v)),
        del:()=>this.setState(s=>{const sc=s.schedule.slice();sc.splice(i,1);return{schedule:sc};},()=>this.persist())
      })),
      schedAdd:()=>this.setState(s=>({schedule:[...s.schedule,{name:"برنامج جديد",host:"المذيع",time:"00:00"}]}),()=>this.persist()),
      exportSettings:()=>this.exportSettings(),
      exportSeed:()=>this.exportSeed(),
      onImportSettings:e=>this.importSettings(e.target.files[0])
    };
  }
  editSched(i,k,v){ this.setState(s=>{ const sc=s.schedule.slice(); sc[i]={...sc[i],[k]:v}; return {schedule:sc}; },()=>this.persist()); }
  exportSettings(){
    const keys=["t","font","patUrl","dateTop","dateLeft","dateFs","station","fmLine","gradBg","gradPat","autoDate","manualDate","logoLight","logoDark","logoWhite","logoMain","fmWhite","fmBrick","fmDark","fmMain","ds","templates","carSlides","wCity","wTemp","wCond","wHi","wLo","wIcon","mLeague","mTeamA","mTeamB","mScoreA","mScoreB","mStatus","schedule","customCfg"];
    const out={}; keys.forEach(k=>out[k]=this.state[k]);
    const blob=new Blob([JSON.stringify(out,null,2)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="albalad-identity-settings.json"; a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  }
  exportSeed(){
    const keys=["t","font","patUrl","dateTop","dateLeft","dateFs","station","fmLine","gradBg","gradPat","autoDate","manualDate","logoLight","logoDark","logoWhite","fmWhite","fmBrick","fmDark","ds","templates","carSlides","wCity","wTemp","wCond","wHi","wLo","wIcon","mLeague","mTeamA","mTeamB","mScoreA","mScoreB","mStatus","schedule","customCfg","thumbs"];
    const out={}; keys.forEach(k=>out[k]=this.state[k]);
    const blob=new Blob([JSON.stringify(out)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="seed.json"; a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),2000);
    alert("تم تنزيل seed.json — ضعه بجانب index.html قبل الرفع، وستفتح المنشورات جاهزة عند تثبيت التطبيق لأول مرة.");
  }
  importSettings(file){
    if(!file) return; const r=new FileReader();
    r.onload=()=>{ try{ const o=JSON.parse(r.result); this.setState(o,()=>{ this.applyVars(); this.persist(); alert("تم استيراد الإعدادات بنجاح ✓"); }); }catch(e){ alert("ملف غير صالح."); } };
    r.readAsText(file);
  }
}
</script>
</body>
</html>
