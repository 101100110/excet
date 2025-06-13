/*********** 
 * 测试 *
 ***********/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '测试';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// 获取 PsychoJS 主对象
const psychoJS = new window.PsychoJS.PsychoJS({
    debug: true
});

// 初始化实验窗口
psychoJS.openWindow({
    fullscr: false,
    color: new window.PsychoJS.util.Color('black'),
    units: 'height'
});

// 创建一个文本刺激
const textStim = new window.PsychoJS.visual.TextStim({
    win: psychoJS.window,
    text: '你好，PsychoJS！',
    color: new window.PsychoJS.util.Color('white'),
    height: 0.1
});

// 显示文本
psychoJS.schedule(() => {
    textStim.setAutoDraw(true);
    return window.PsychoJS.Scheduler.Event.NEXT;
});

// 等待2秒后结束实验
psychoJS.schedule(window.PsychoJS.util.createWait(2.0));
psychoJS.schedule(() => {
    psychoJS.quit();
    return window.PsychoJS.Scheduler.Event.QUIT;
});

// 启动实验
psychoJS.start({
    expName: 'demo',
    expInfo: {}
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introductions_1RoutineBegin());
flowScheduler.add(introductions_1RoutineEachFrame());
flowScheduler.add(introductions_1RoutineEnd());
flowScheduler.add(apple0RoutineBegin());
flowScheduler.add(apple0RoutineEachFrame());
flowScheduler.add(apple0RoutineEnd());
flowScheduler.add(apple1RoutineBegin());
flowScheduler.add(apple1RoutineEachFrame());
flowScheduler.add(apple1RoutineEnd());
flowScheduler.add(xiaomi1RoutineBegin());
flowScheduler.add(xiaomi1RoutineEachFrame());
flowScheduler.add(xiaomi1RoutineEnd());
flowScheduler.add(trial_xiaomi0RoutineBegin());
flowScheduler.add(trial_xiaomi0RoutineEachFrame());
flowScheduler.add(trial_xiaomi0RoutineEnd());
flowScheduler.add(introductions_2RoutineBegin());
flowScheduler.add(introductions_2RoutineEachFrame());
flowScheduler.add(introductions_2RoutineEnd());
flowScheduler.add(trial_zhuoziRoutineBegin());
flowScheduler.add(trial_zhuoziRoutineEachFrame());
flowScheduler.add(trial_zhuoziRoutineEnd());
flowScheduler.add(trial_qingshu0RoutineBegin());
flowScheduler.add(trial_qingshu0RoutineEachFrame());
flowScheduler.add(trial_qingshu0RoutineEnd());
flowScheduler.add(trial_caoyuanRoutineBegin());
flowScheduler.add(trial_caoyuanRoutineEachFrame());
flowScheduler.add(trial_caoyuanRoutineEnd());
flowScheduler.add(trial_heimei0RoutineBegin());
flowScheduler.add(trial_heimei0RoutineEachFrame());
flowScheduler.add(trial_heimei0RoutineEnd());
flowScheduler.add(trial_weicheng1RoutineBegin());
flowScheduler.add(trial_weicheng1RoutineEachFrame());
flowScheduler.add(trial_weicheng1RoutineEnd());
flowScheduler.add(trial_hongniu0RoutineBegin());
flowScheduler.add(trial_hongniu0RoutineEachFrame());
flowScheduler.add(trial_hongniu0RoutineEnd());
flowScheduler.add(trial_shirenRoutineBegin());
flowScheduler.add(trial_shirenRoutineEachFrame());
flowScheduler.add(trial_shirenRoutineEnd());
flowScheduler.add(trial_hongqi1RoutineBegin());
flowScheduler.add(trial_hongqi1RoutineEachFrame());
flowScheduler.add(trial_hongqi1RoutineEnd());
flowScheduler.add(trial_diannaoRoutineBegin());
flowScheduler.add(trial_diannaoRoutineEachFrame());
flowScheduler.add(trial_diannaoRoutineEnd());
flowScheduler.add(trial_qingshu1RoutineBegin());
flowScheduler.add(trial_qingshu1RoutineEachFrame());
flowScheduler.add(trial_qingshu1RoutineEnd());
flowScheduler.add(trial_niunaiRoutineBegin());
flowScheduler.add(trial_niunaiRoutineEachFrame());
flowScheduler.add(trial_niunaiRoutineEnd());
flowScheduler.add(trial_baoma1RoutineBegin());
flowScheduler.add(trial_baoma1RoutineEachFrame());
flowScheduler.add(trial_baoma1RoutineEnd());
flowScheduler.add(trial_jiaofu0RoutineBegin());
flowScheduler.add(trial_jiaofu0RoutineEachFrame());
flowScheduler.add(trial_jiaofu0RoutineEnd());
flowScheduler.add(trial_yintian0RoutineBegin());
flowScheduler.add(trial_yintian0RoutineEachFrame());
flowScheduler.add(trial_yintian0RoutineEnd());
flowScheduler.add(trial_chaguan0RoutineBegin());
flowScheduler.add(trial_chaguan0RoutineEachFrame());
flowScheduler.add(trial_chaguan0RoutineEnd());
flowScheduler.add(trial_shuyeRoutineBegin());
flowScheduler.add(trial_shuyeRoutineEachFrame());
flowScheduler.add(trial_shuyeRoutineEnd());
flowScheduler.add(trial_baixiang0RoutineBegin());
flowScheduler.add(trial_baixiang0RoutineEachFrame());
flowScheduler.add(trial_baixiang0RoutineEnd());
flowScheduler.add(trial_sinian1RoutineBegin());
flowScheduler.add(trial_sinian1RoutineEachFrame());
flowScheduler.add(trial_sinian1RoutineEnd());
flowScheduler.add(trial_chengshiRoutineBegin());
flowScheduler.add(trial_chengshiRoutineEachFrame());
flowScheduler.add(trial_chengshiRoutineEnd());
flowScheduler.add(trial_sinian0RoutineBegin());
flowScheduler.add(trial_sinian0RoutineEachFrame());
flowScheduler.add(trial_sinian0RoutineEnd());
flowScheduler.add(trial_xiaoshuoRoutineBegin());
flowScheduler.add(trial_xiaoshuoRoutineEachFrame());
flowScheduler.add(trial_xiaoshuoRoutineEnd());
flowScheduler.add(trial_fuqin0RoutineBegin());
flowScheduler.add(trial_fuqin0RoutineEachFrame());
flowScheduler.add(trial_fuqin0RoutineEnd());
flowScheduler.add(trial_guangming1RoutineBegin());
flowScheduler.add(trial_guangming1RoutineEachFrame());
flowScheduler.add(trial_guangming1RoutineEnd());
flowScheduler.add(trial_baimao0RoutineBegin());
flowScheduler.add(trial_baimao0RoutineEachFrame());
flowScheduler.add(trial_baimao0RoutineEnd());
flowScheduler.add(trial_xiongdi1RoutineBegin());
flowScheduler.add(trial_xiongdi1RoutineEachFrame());
flowScheduler.add(trial_xiongdi1RoutineEnd());
flowScheduler.add(trial_lianxiang1RoutineBegin());
flowScheduler.add(trial_lianxiang1RoutineEachFrame());
flowScheduler.add(trial_lianxiang1RoutineEnd());
flowScheduler.add(trial_chaguan1RoutineBegin());
flowScheduler.add(trial_chaguan1RoutineEachFrame());
flowScheduler.add(trial_chaguan1RoutineEnd());
flowScheduler.add(trial_mifanRoutineBegin());
flowScheduler.add(trial_mifanRoutineEachFrame());
flowScheduler.add(trial_mifanRoutineEnd());
flowScheduler.add(trial_baimao1RoutineBegin());
flowScheduler.add(trial_baimao1RoutineEachFrame());
flowScheduler.add(trial_baimao1RoutineEnd());
flowScheduler.add(trial_yanjingRoutineBegin());
flowScheduler.add(trial_yanjingRoutineEachFrame());
flowScheduler.add(trial_yanjingRoutineEnd());
flowScheduler.add(trial_tiankongRoutineBegin());
flowScheduler.add(trial_tiankongRoutineEachFrame());
flowScheduler.add(trial_tiankongRoutineEnd());
flowScheduler.add(trial_luotuo1RoutineBegin());
flowScheduler.add(trial_luotuo1RoutineEachFrame());
flowScheduler.add(trial_luotuo1RoutineEnd());
flowScheduler.add(trial_fuqin1RoutineBegin());
flowScheduler.add(trial_fuqin1RoutineEachFrame());
flowScheduler.add(trial_fuqin1RoutineEnd());
flowScheduler.add(trial_luotuo0RoutineBegin());
flowScheduler.add(trial_luotuo0RoutineEachFrame());
flowScheduler.add(trial_luotuo0RoutineEnd());
flowScheduler.add(trial_weicheng0RoutineBegin());
flowScheduler.add(trial_weicheng0RoutineEachFrame());
flowScheduler.add(trial_weicheng0RoutineEnd());
flowScheduler.add(trial_chuanghuRoutineBegin());
flowScheduler.add(trial_chuanghuRoutineEachFrame());
flowScheduler.add(trial_chuanghuRoutineEnd());
flowScheduler.add(trial_mutouRoutineBegin());
flowScheduler.add(trial_mutouRoutineEachFrame());
flowScheduler.add(trial_mutouRoutineEnd());
flowScheduler.add(trial_jiemeiRoutineBegin());
flowScheduler.add(trial_jiemeiRoutineEachFrame());
flowScheduler.add(trial_jiemeiRoutineEnd());
flowScheduler.add(trial_huahai1RoutineBegin());
flowScheduler.add(trial_huahai1RoutineEachFrame());
flowScheduler.add(trial_huahai1RoutineEnd());
flowScheduler.add(trial_lixiang0RoutineBegin());
flowScheduler.add(trial_lixiang0RoutineEachFrame());
flowScheduler.add(trial_lixiang0RoutineEnd());
flowScheduler.add(trial_heimei1RoutineBegin());
flowScheduler.add(trial_heimei1RoutineEachFrame());
flowScheduler.add(trial_heimei1RoutineEnd());
flowScheduler.add(trial_yintian1RoutineBegin());
flowScheduler.add(trial_yintian1RoutineEachFrame());
flowScheduler.add(trial_yintian1RoutineEnd());
flowScheduler.add(trial_danche0RoutineBegin());
flowScheduler.add(trial_danche0RoutineEachFrame());
flowScheduler.add(trial_danche0RoutineEnd());
flowScheduler.add(trial_baoma0RoutineBegin());
flowScheduler.add(trial_baoma0RoutineEachFrame());
flowScheduler.add(trial_baoma0RoutineEnd());
flowScheduler.add(trial_huahai0RoutineBegin());
flowScheduler.add(trial_huahai0RoutineEachFrame());
flowScheduler.add(trial_huahai0RoutineEnd());
flowScheduler.add(trial_lixiang1RoutineBegin());
flowScheduler.add(trial_lixiang1RoutineEachFrame());
flowScheduler.add(trial_lixiang1RoutineEnd());
flowScheduler.add(trial_beiying0RoutineBegin());
flowScheduler.add(trial_beiying0RoutineEachFrame());
flowScheduler.add(trial_beiying0RoutineEnd());
flowScheduler.add(trial_lianxiang0RoutineBegin());
flowScheduler.add(trial_lianxiang0RoutineEachFrame());
flowScheduler.add(trial_lianxiang0RoutineEnd());
flowScheduler.add(trial_gongfu1RoutineBegin());
flowScheduler.add(trial_gongfu1RoutineEachFrame());
flowScheduler.add(trial_gongfu1RoutineEnd());
flowScheduler.add(trial_miantiaoRoutineBegin());
flowScheduler.add(trial_miantiaoRoutineEachFrame());
flowScheduler.add(trial_miantiaoRoutineEnd());
flowScheduler.add(trial_heimaoRoutineBegin());
flowScheduler.add(trial_heimaoRoutineEachFrame());
flowScheduler.add(trial_heimaoRoutineEnd());
flowScheduler.add(trial_beiying1RoutineBegin());
flowScheduler.add(trial_beiying1RoutineEachFrame());
flowScheduler.add(trial_beiying1RoutineEnd());
flowScheduler.add(trial_danche1RoutineBegin());
flowScheduler.add(trial_danche1RoutineEachFrame());
flowScheduler.add(trial_danche1RoutineEnd());
flowScheduler.add(trial_dianyingRoutineBegin());
flowScheduler.add(trial_dianyingRoutineEachFrame());
flowScheduler.add(trial_dianyingRoutineEnd());
flowScheduler.add(trial_shitouRoutineBegin());
flowScheduler.add(trial_shitouRoutineEachFrame());
flowScheduler.add(trial_shitouRoutineEnd());
flowScheduler.add(trial_xiongdi0RoutineBegin());
flowScheduler.add(trial_xiongdi0RoutineEachFrame());
flowScheduler.add(trial_xiongdi0RoutineEnd());
flowScheduler.add(trial_senlinRoutineBegin());
flowScheduler.add(trial_senlinRoutineEachFrame());
flowScheduler.add(trial_senlinRoutineEnd());
flowScheduler.add(trial_hongqi0RoutineBegin());
flowScheduler.add(trial_hongqi0RoutineEachFrame());
flowScheduler.add(trial_hongqi0RoutineEnd());
flowScheduler.add(trial_shenhai0RoutineBegin());
flowScheduler.add(trial_shenhai0RoutineEachFrame());
flowScheduler.add(trial_shenhai0RoutineEnd());
flowScheduler.add(trial_feihe0RoutineBegin());
flowScheduler.add(trial_feihe0RoutineEachFrame());
flowScheduler.add(trial_feihe0RoutineEnd());
flowScheduler.add(trial_shenhai1RoutineBegin());
flowScheduler.add(trial_shenhai1RoutineEachFrame());
flowScheduler.add(trial_shenhai1RoutineEnd());
flowScheduler.add(trial_shoujiRoutineBegin());
flowScheduler.add(trial_shoujiRoutineEachFrame());
flowScheduler.add(trial_shoujiRoutineEnd());
flowScheduler.add(trial_hongniu1RoutineBegin());
flowScheduler.add(trial_hongniu1RoutineEachFrame());
flowScheduler.add(trial_hongniu1RoutineEnd());
flowScheduler.add(trial_guangming0RoutineBegin());
flowScheduler.add(trial_guangming0RoutineEachFrame());
flowScheduler.add(trial_guangming0RoutineEnd());
flowScheduler.add(trial_qicheRoutineBegin());
flowScheduler.add(trial_qicheRoutineEachFrame());
flowScheduler.add(trial_qicheRoutineEnd());
flowScheduler.add(trial_gongfu0RoutineBegin());
flowScheduler.add(trial_gongfu0RoutineEachFrame());
flowScheduler.add(trial_gongfu0RoutineEnd());
flowScheduler.add(trial_yusanRoutineBegin());
flowScheduler.add(trial_yusanRoutineEachFrame());
flowScheduler.add(trial_yusanRoutineEnd());
flowScheduler.add(trial_jiaofu1RoutineBegin());
flowScheduler.add(trial_jiaofu1RoutineEachFrame());
flowScheduler.add(trial_jiaofu1RoutineEnd());
flowScheduler.add(trial_baixiang1RoutineBegin());
flowScheduler.add(trial_baixiang1RoutineEachFrame());
flowScheduler.add(trial_baixiang1RoutineEnd());
flowScheduler.add(trial_canguanRoutineBegin());
flowScheduler.add(trial_canguanRoutineEachFrame());
flowScheduler.add(trial_canguanRoutineEnd());
flowScheduler.add(trial_feihe1RoutineBegin());
flowScheduler.add(trial_feihe1RoutineEachFrame());
flowScheduler.add(trial_feihe1RoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'audio/apple0.wav', 'path': 'audio/apple0.wav'},
    {'name': 'audio/apple1.wav', 'path': 'audio/apple1.wav'},
    {'name': 'audio/xiaomi1.wav', 'path': 'audio/xiaomi1.wav'},
    {'name': 'audio/xiaomi0.wav', 'path': 'audio/xiaomi0.wav'},
    {'name': 'audio/zhuozi.wav', 'path': 'audio/zhuozi.wav'},
    {'name': 'audio/qingshu0.wav', 'path': 'audio/qingshu0.wav'},
    {'name': 'audio/caoyuan.wav', 'path': 'audio/caoyuan.wav'},
    {'name': 'audio/heimei0.wav', 'path': 'audio/heimei0.wav'},
    {'name': 'audio/weicheng1.wav', 'path': 'audio/weicheng1.wav'},
    {'name': 'audio/hongniu0.wav', 'path': 'audio/hongniu0.wav'},
    {'name': 'audio/shiren.wav', 'path': 'audio/shiren.wav'},
    {'name': 'audio/hongqi1.wav', 'path': 'audio/hongqi1.wav'},
    {'name': 'audio/diannao.wav', 'path': 'audio/diannao.wav'},
    {'name': 'audio/qingshu1.wav', 'path': 'audio/qingshu1.wav'},
    {'name': 'audio/niunai.wav', 'path': 'audio/niunai.wav'},
    {'name': 'audio/baoma1.wav', 'path': 'audio/baoma1.wav'},
    {'name': 'audio/jiaofu0.wav', 'path': 'audio/jiaofu0.wav'},
    {'name': 'audio/yintian0.wav', 'path': 'audio/yintian0.wav'},
    {'name': 'audio/chaguan0.wav', 'path': 'audio/chaguan0.wav'},
    {'name': 'audio/shuye.wav', 'path': 'audio/shuye.wav'},
    {'name': 'audio/baixiang0.wav', 'path': 'audio/baixiang0.wav'},
    {'name': 'audio/sinian1.wav', 'path': 'audio/sinian1.wav'},
    {'name': 'audio/chengshi.wav', 'path': 'audio/chengshi.wav'},
    {'name': 'audio/sinian0.wav', 'path': 'audio/sinian0.wav'},
    {'name': 'audio/xiaoshuo.wav', 'path': 'audio/xiaoshuo.wav'},
    {'name': 'audio/fuqin0.wav', 'path': 'audio/fuqin0.wav'},
    {'name': 'audio/guangming1.wav', 'path': 'audio/guangming1.wav'},
    {'name': 'audio/baimao0.wav', 'path': 'audio/baimao0.wav'},
    {'name': 'audio/xiongdi1.wav', 'path': 'audio/xiongdi1.wav'},
    {'name': 'audio/lianxiang1.wav', 'path': 'audio/lianxiang1.wav'},
    {'name': 'audio/chaguan1.wav', 'path': 'audio/chaguan1.wav'},
    {'name': 'audio/mifan.wav', 'path': 'audio/mifan.wav'},
    {'name': 'audio/baimao1.wav', 'path': 'audio/baimao1.wav'},
    {'name': 'audio/yanjing.wav', 'path': 'audio/yanjing.wav'},
    {'name': 'audio/tiankong.wav', 'path': 'audio/tiankong.wav'},
    {'name': 'audio/luotuo1.wav', 'path': 'audio/luotuo1.wav'},
    {'name': 'audio/fuqin1.wav', 'path': 'audio/fuqin1.wav'},
    {'name': 'audio/luotuo0.wav', 'path': 'audio/luotuo0.wav'},
    {'name': 'audio/weicheng0.wav', 'path': 'audio/weicheng0.wav'},
    {'name': 'audio/chuanghu.wav', 'path': 'audio/chuanghu.wav'},
    {'name': 'audio/mutou.wav', 'path': 'audio/mutou.wav'},
    {'name': 'audio/jiemei.wav', 'path': 'audio/jiemei.wav'},
    {'name': 'audio/huahai1.wav', 'path': 'audio/huahai1.wav'},
    {'name': 'audio/lixiang0.wav', 'path': 'audio/lixiang0.wav'},
    {'name': 'audio/heimei1.wav', 'path': 'audio/heimei1.wav'},
    {'name': 'audio/yintian1.wav', 'path': 'audio/yintian1.wav'},
    {'name': 'audio/danche0.wav', 'path': 'audio/danche0.wav'},
    {'name': 'audio/baoma0.wav', 'path': 'audio/baoma0.wav'},
    {'name': 'audio/huahai0.wav', 'path': 'audio/huahai0.wav'},
    {'name': 'audio/lixiang1.wav', 'path': 'audio/lixiang1.wav'},
    {'name': 'audio/beiying0.wav', 'path': 'audio/beiying0.wav'},
    {'name': 'audio/lianxiang0.wav', 'path': 'audio/lianxiang0.wav'},
    {'name': 'audio/gongfu1.wav', 'path': 'audio/gongfu1.wav'},
    {'name': 'audio/miantiao.wav', 'path': 'audio/miantiao.wav'},
    {'name': 'audio/heimao.wav', 'path': 'audio/heimao.wav'},
    {'name': 'audio/beiying1.wav', 'path': 'audio/beiying1.wav'},
    {'name': 'audio/danche1.wav', 'path': 'audio/danche1.wav'},
    {'name': 'audio/dianying.wav', 'path': 'audio/dianying.wav'},
    {'name': 'audio/shitou.wav', 'path': 'audio/shitou.wav'},
    {'name': 'audio/xiongdi0.wav', 'path': 'audio/xiongdi0.wav'},
    {'name': 'audio/senlin.wav', 'path': 'audio/senlin.wav'},
    {'name': 'audio/hongqi0.wav', 'path': 'audio/hongqi0.wav'},
    {'name': 'audio/shenhai0.wav', 'path': 'audio/shenhai0.wav'},
    {'name': 'audio/feihe0.wav', 'path': 'audio/feihe0.wav'},
    {'name': 'audio/shenhai1.wav', 'path': 'audio/shenhai1.wav'},
    {'name': 'audio/shouji.wav', 'path': 'audio/shouji.wav'},
    {'name': 'audio/hongniu1.wav', 'path': 'audio/hongniu1.wav'},
    {'name': 'audio/guangming0.wav', 'path': 'audio/guangming0.wav'},
    {'name': 'audio/qiche.wav', 'path': 'audio/qiche.wav'},
    {'name': 'audio/gongfu0.wav', 'path': 'audio/gongfu0.wav'},
    {'name': 'audio/yusan.wav', 'path': 'audio/yusan.wav'},
    {'name': 'audio/jiaofu1.wav', 'path': 'audio/jiaofu1.wav'},
    {'name': 'audio/baixiang1.wav', 'path': 'audio/baixiang1.wav'},
    {'name': 'audio/canguan.wav', 'path': 'audio/canguan.wav'},
    {'name': 'audio/feihe1.wav', 'path': 'audio/feihe1.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introductions_1Clock;
var text_introductions;
var key_resp;
var apple0Clock;
var text_apple0;
var sound_apple0;
var text;
var text_2;
var key_resp_apple0;
var apple1Clock;
var text_apple1;
var sound_apple1;
var text_3;
var text_4;
var key_resp_apple1;
var xiaomi1Clock;
var text_xiaomi1;
var sound_xiaomi1;
var text_5;
var text_6;
var key_resp_xiaomi1;
var trial_xiaomi0Clock;
var text_xiaomi0;
var sound_xiaomi0;
var text_9;
var text_10;
var key_xiaomi0;
var introductions_2Clock;
var instructions2;
var key_resp_ins;
var trial_zhuoziClock;
var text_zhuozi;
var sound_zhuozi;
var text_7;
var text_8;
var key_resp_zhuozi;
var trial_qingshu0Clock;
var text_qingshu0;
var sound_qingshu0;
var text_11;
var text_12;
var key_resp_2qingshu0;
var trial_caoyuanClock;
var caoyuan;
var sound_caoyuan;
var text_161;
var text_162;
var key_resp_caoyuan;
var trial_heimei0Clock;
var text_heimei0;
var sound_heimei0;
var text_149;
var text_150;
var key_resp_heimei0;
var trial_weicheng1Clock;
var text_weicheng1;
var sound_weicheng1;
var text_13;
var text_14;
var key_resp_weicheng1;
var trial_hongniu0Clock;
var text_hongniu0;
var sound_hongniu0;
var text_15;
var text_16;
var key_resp_hongniu0;
var trial_shirenClock;
var text_shiren;
var sound_shiren;
var text_19;
var text_20;
var key_resp_shiren;
var trial_hongqi1Clock;
var text_hongqi1;
var sound_hongqi1;
var text_1ruodian1;
var text_18;
var key_resp_hongqi1;
var trial_diannaoClock;
var text_diannao;
var sound_diannao;
var text_21;
var text_22;
var key_resp_diannao;
var trial_qingshu1Clock;
var text_qingshu1;
var sound_qingshu1;
var text_23;
var text_24;
var key_resp_3;
var trial_niunaiClock;
var text_niunai;
var sound_niunai;
var text_25;
var text_26;
var key_resp_niunai;
var trial_baoma1Clock;
var text_baoma1;
var sound_baoma1;
var text_27;
var text_28;
var key_resp_baoma1;
var trial_jiaofu0Clock;
var text_jiaofu0;
var sound_jiaofu0;
var text_29;
var text_30;
var key_resp_jiaofu0;
var trial_yintian0Clock;
var text_yintian0;
var sound_yintian0;
var text_33;
var text_34;
var key_resp_yintian0;
var trial_chaguan0Clock;
var text_chaguan0;
var sound_chaguan0;
var text_35;
var text_36;
var key_resp_chaguan0;
var trial_shuyeClock;
var shuye;
var sound_shuye;
var text_163;
var text_164;
var key_resp_shuye;
var trial_baixiang0Clock;
var text_baixiang0;
var sound_baixiang0;
var text_37;
var text_38;
var key_resp_baixiang0;
var trial_sinian1Clock;
var text_sinian1;
var sound_sinian1;
var text_39;
var text_40;
var key_resp_sinian1;
var trial_chengshiClock;
var text_chengshi;
var sound_chengshi;
var text_151;
var text_152;
var key_resp_chengshi;
var trial_sinian0Clock;
var text_sinian0;
var sound_sinian;
var text_41;
var text_42;
var key_resp_sinian0;
var trial_xiaoshuoClock;
var text_xiaoshuo;
var sound_xiaoshuo;
var text_43;
var text_44;
var key_resp_xiaoshuo;
var trial_fuqin0Clock;
var text_fuqin0;
var sound_fuqin0;
var text_45;
var text_46;
var key_resp_fuqin0;
var trial_guangming1Clock;
var text_guangming1;
var sound_guangming1;
var text_47;
var text_48;
var key_resp_guangming1;
var trial_baimao0Clock;
var text_baimao0;
var sound_baimao0;
var text_49;
var text_50;
var key_resp_baimao0;
var trial_xiongdi1Clock;
var text_xiongdi1;
var sound_xiongdi1;
var text_51;
var text_52;
var key_resp_xiongdi1;
var trial_lianxiang1Clock;
var text_lianxiang1;
var sound_lianxiang1;
var text_53;
var text_54;
var key_resp_lianxiang1;
var trial_chaguan1Clock;
var text_chaguan1;
var sound_chaguan1;
var text_55;
var text_56;
var key_resp_chaguan1;
var trial_mifanClock;
var text_mifan;
var sound_mifan;
var text_57;
var text_58;
var key_resp_mifan;
var trial_baimao1Clock;
var text_baimao1;
var sound_baimao1;
var text_59;
var text_60;
var key_resp_baimao1;
var trial_yanjingClock;
var text_yanjing;
var sound_yanjing;
var text_61;
var text_62;
var key_resp_yanjing;
var trial_tiankongClock;
var text_tiankong;
var sound_tiankong;
var text_63;
var text_64;
var key_resp_tiankong;
var trial_luotuo1Clock;
var text_luotuo1;
var sound_luotuo1;
var text_65;
var text_66;
var key_resp_luotuo1;
var trial_fuqin1Clock;
var text_fuqin1;
var sound_fuqin1;
var text_67;
var text_68;
var key_resp_fuqin1;
var trial_luotuo0Clock;
var text_luotuo0;
var sound_luotuo0;
var text_69;
var text_70;
var key_resp_luotuo0;
var trial_weicheng0Clock;
var text_weicheng0;
var sound_weicheng0;
var text_71;
var text_72;
var key_resp_weicheng0;
var trial_chuanghuClock;
var text_chuanghu;
var sound_chuanghu;
var text_73;
var text_74;
var key_resp_chuanghu;
var trial_mutouClock;
var text_mutou;
var sound_mutou;
var text_79;
var text_80;
var key_resp_mutou;
var trial_jiemeiClock;
var text_jiemei;
var sound_jiemei;
var text_81;
var text_82;
var key_resp_jiemei;
var trial_huahai1Clock;
var text_huahai1;
var sound_huahi1;
var text_83;
var text_84;
var key_resp_huahai1;
var trial_lixiang0Clock;
var text_lixiang0;
var sound_lixiang0;
var text_85;
var text_86;
var key_resp_lixiang0;
var trial_heimei1Clock;
var text_heimei1;
var sound_heimei1;
var text_87;
var text_88;
var key_resp_heimei1;
var trial_yintian1Clock;
var text_yintian1;
var sound_yintian1;
var text_89;
var text_90;
var key_resp_yintian1;
var trial_danche0Clock;
var text_danche0;
var sound_danche0;
var text_91;
var text_92;
var key_resp_danche0;
var trial_baoma0Clock;
var text_baoma0;
var sound_baoma0;
var text_93;
var text_94;
var key_resp_baoma0;
var trial_huahai0Clock;
var text_huahai0;
var sound_huahai0;
var text_95;
var text_96;
var key_resp_huahai0;
var trial_lixiang1Clock;
var text_lixiang1;
var sound_lixiang1;
var text_97;
var text_98;
var key_resp_lixiang1;
var trial_beiying0Clock;
var text_beiying0;
var sound_beiying0;
var text_99;
var text_100;
var key_resp_beiying0;
var trial_lianxiang0Clock;
var text_lianxiang0;
var sound_lianxiang0;
var text_101;
var text_102;
var key_resp_lianxiang0;
var trial_gongfu1Clock;
var text_gongfu1;
var sound_gongfu1;
var text_105;
var text_106;
var key_resp_gongfu1;
var trial_miantiaoClock;
var text_miantiao;
var sound_miantiao;
var text_107;
var text_108;
var key_resp_miantiao;
var trial_heimaoClock;
var text_heimao;
var sound_heimao;
var text_109;
var text_110;
var key_resp_heimao;
var trial_beiying1Clock;
var text_beiying1;
var sound_beiying1;
var text_111;
var text_112;
var key_resp_beiying1;
var trial_danche1Clock;
var text_danche1;
var sound_danche1;
var text_113;
var text_114;
var key_resp_danche1;
var trial_dianyingClock;
var text_dianying;
var sound_dianying;
var text_115;
var text_116;
var key_resp_dianying;
var trial_shitouClock;
var text_shitou;
var sound_shitou;
var text_117;
var text_118;
var key_resp_shitou;
var trial_xiongdi0Clock;
var text_xiongdi0;
var sound_xiongdi0;
var text_119;
var text_120;
var key_resp_xiongdi0;
var trial_senlinClock;
var text_senlin;
var sound_senlin;
var text_123;
var text_124;
var key_resp_senlin;
var trial_hongqi0Clock;
var text_hongqi_0;
var sound_hongqi_0;
var text_153;
var text_154;
var key_resp_hongqi_0;
var trial_shenhai0Clock;
var text_shenhai0;
var sound_shenhai0;
var text_125;
var text_126;
var key_resp_shenhai0;
var trial_feihe0Clock;
var text_feihe0;
var sound_feihe0;
var text_127;
var text_128;
var key_resp_feihe0;
var trial_shenhai1Clock;
var text_shenhai1;
var sound_shenhai1;
var text_129;
var text_130;
var key_resp_shenhai1;
var trial_shoujiClock;
var text_shouji;
var sound_shouji;
var text_165;
var text_166;
var key_resp_shouji;
var trial_hongniu1Clock;
var text_hongniu1;
var sound_hongniu1;
var text_131;
var text_132;
var key_resp_hongniu1;
var trial_guangming0Clock;
var text_guangming0;
var sound_guangming0;
var text_133;
var text_134;
var key_resp_guangming0;
var trial_qicheClock;
var text_qiche;
var sound_qiche;
var text_135;
var text_136;
var key_resp_qiche;
var trial_gongfu0Clock;
var text_gongfu0;
var sound_gongfu0;
var text_137;
var text_138;
var key_resp_gongfu0;
var trial_yusanClock;
var textyusan;
var soundyusan;
var text_157;
var text_158;
var key_respyusan;
var trial_jiaofu1Clock;
var text_jiaofu1;
var sound_jiaofu1;
var text_141;
var text_142;
var key_resp_jiaofu1;
var trial_baixiang1Clock;
var text_baixiang_1;
var sound_baixiang_1;
var text_159;
var text_160;
var key_resp_baixiang_1;
var trial_canguanClock;
var text_canguan;
var sound_canguan;
var text_143;
var text_144;
var key_resp_canguan;
var trial_feihe1Clock;
var text_feihe1;
var sound_feihe1;
var text_147;
var text_148;
var key_resp_feihe1;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "introductions_1"
  introductions_1Clock = new util.Clock();
  text_introductions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_introductions',
    text: '请仔细听句子\n判断目标词\n 普通名词（按←）\n 专有名词（按→）\n准备好了请按“空格”',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "apple0"
  apple0Clock = new util.Clock();
  text_apple0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_apple0',
    text: '苹果',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_apple0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_apple0.setVolume(1.0);
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '请听句子...',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '普通名词“←”\n专有名词“→”',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_apple0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "apple1"
  apple1Clock = new util.Clock();
  text_apple1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_apple1',
    text: '苹果',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_apple1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_apple1.setVolume(1.0);
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '请听句子...',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '普通名词“←”\n专有名词“→”',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_apple1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "xiaomi1"
  xiaomi1Clock = new util.Clock();
  text_xiaomi1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_xiaomi1',
    text: '小米',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_xiaomi1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_xiaomi1.setVolume(1.0);
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '请听句子...',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '普通名词“←”\n专有名词“→”',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_xiaomi1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_xiaomi0"
  trial_xiaomi0Clock = new util.Clock();
  text_xiaomi0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_xiaomi0',
    text: '小米',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_xiaomi0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_xiaomi0.setVolume(1.0);
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_xiaomi0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introductions_2"
  introductions_2Clock = new util.Clock();
  instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions2',
    text: '正式开始\n准备好后按“空格”继续',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_ins = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_zhuozi"
  trial_zhuoziClock = new util.Clock();
  text_zhuozi = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_zhuozi',
    text: '桌子',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_zhuozi = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_zhuozi.setVolume(1.0);
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_zhuozi = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_qingshu0"
  trial_qingshu0Clock = new util.Clock();
  text_qingshu0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_qingshu0',
    text: '情书',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_qingshu0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_qingshu0.setVolume(1.0);
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_2qingshu0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_caoyuan"
  trial_caoyuanClock = new util.Clock();
  caoyuan = new visual.TextStim({
    win: psychoJS.window,
    name: 'caoyuan',
    text: '草原',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_caoyuan = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_caoyuan.setVolume(1.0);
  text_161 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_161',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_162 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_162',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_caoyuan = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_heimei0"
  trial_heimei0Clock = new util.Clock();
  text_heimei0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_heimei0',
    text: '黑莓',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_heimei0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_heimei0.setVolume(1.0);
  text_149 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_149',
    text: '请听句子...',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_150 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_150',
    text: '普通名词“←”\n专有名词“→”',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_heimei0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_weicheng1"
  trial_weicheng1Clock = new util.Clock();
  text_weicheng1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_weicheng1',
    text: '围城',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_weicheng1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_weicheng1.setVolume(1.0);
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_weicheng1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_hongniu0"
  trial_hongniu0Clock = new util.Clock();
  text_hongniu0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hongniu0',
    text: '红牛',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_hongniu0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_hongniu0.setVolume(1.0);
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_hongniu0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shiren"
  trial_shirenClock = new util.Clock();
  text_shiren = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shiren',
    text: '诗人',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shiren = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shiren.setVolume(1.0);
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shiren = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_hongqi1"
  trial_hongqi1Clock = new util.Clock();
  text_hongqi1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hongqi1',
    text: '红旗',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_hongqi1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_hongqi1.setVolume(1.0);
  text_1ruodian1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1ruodian1',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_hongqi1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_diannao"
  trial_diannaoClock = new util.Clock();
  text_diannao = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_diannao',
    text: '电脑',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_diannao = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_diannao.setVolume(1.0);
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_diannao = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_qingshu1"
  trial_qingshu1Clock = new util.Clock();
  text_qingshu1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_qingshu1',
    text: '情书',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_qingshu1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_qingshu1.setVolume(1.0);
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_niunai"
  trial_niunaiClock = new util.Clock();
  text_niunai = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_niunai',
    text: '牛奶',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_niunai = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_niunai.setVolume(1.0);
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_niunai = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baoma1"
  trial_baoma1Clock = new util.Clock();
  text_baoma1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baoma1',
    text: '宝马',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baoma1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baoma1.setVolume(1.0);
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baoma1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_jiaofu0"
  trial_jiaofu0Clock = new util.Clock();
  text_jiaofu0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_jiaofu0',
    text: '教父',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_jiaofu0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_jiaofu0.setVolume(1.0);
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_jiaofu0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_yintian0"
  trial_yintian0Clock = new util.Clock();
  text_yintian0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_yintian0',
    text: '阴天',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_yintian0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_yintian0.setVolume(1.0);
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_34',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_yintian0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_chaguan0"
  trial_chaguan0Clock = new util.Clock();
  text_chaguan0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chaguan0',
    text: '茶馆',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_chaguan0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_chaguan0.setVolume(1.0);
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_chaguan0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shuye"
  trial_shuyeClock = new util.Clock();
  shuye = new visual.TextStim({
    win: psychoJS.window,
    name: 'shuye',
    text: '树叶',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shuye = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shuye.setVolume(1.0);
  text_163 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_163',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_164 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_164',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shuye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baixiang0"
  trial_baixiang0Clock = new util.Clock();
  text_baixiang0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baixiang0',
    text: '白象',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baixiang0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baixiang0.setVolume(1.0);
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baixiang0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_sinian1"
  trial_sinian1Clock = new util.Clock();
  text_sinian1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sinian1',
    text: '思念',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_sinian1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_sinian1.setVolume(1.0);
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_sinian1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_chengshi"
  trial_chengshiClock = new util.Clock();
  text_chengshi = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chengshi',
    text: '城市',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_chengshi = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_chengshi.setVolume(1.0);
  text_151 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_151',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_152 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_152',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_chengshi = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_sinian0"
  trial_sinian0Clock = new util.Clock();
  text_sinian0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sinian0',
    text: '思念',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_sinian = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_sinian.setVolume(1.0);
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_sinian0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_xiaoshuo"
  trial_xiaoshuoClock = new util.Clock();
  text_xiaoshuo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_xiaoshuo',
    text: '小说',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_xiaoshuo = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_xiaoshuo.setVolume(1.0);
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_xiaoshuo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_fuqin0"
  trial_fuqin0Clock = new util.Clock();
  text_fuqin0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fuqin0',
    text: '父亲',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_fuqin0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_fuqin0.setVolume(1.0);
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_fuqin0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_guangming1"
  trial_guangming1Clock = new util.Clock();
  text_guangming1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_guangming1',
    text: '光明',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_guangming1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_guangming1.setVolume(1.0);
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: '请听句子...',
    font: 'SImHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_guangming1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baimao0"
  trial_baimao0Clock = new util.Clock();
  text_baimao0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baimao0',
    text: '白猫',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baimao0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baimao0.setVolume(1.0);
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baimao0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_xiongdi1"
  trial_xiongdi1Clock = new util.Clock();
  text_xiongdi1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_xiongdi1',
    text: '兄弟',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_xiongdi1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_xiongdi1.setVolume(1.0);
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_xiongdi1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_lianxiang1"
  trial_lianxiang1Clock = new util.Clock();
  text_lianxiang1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lianxiang1',
    text: '联想',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_lianxiang1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_lianxiang1.setVolume(1.0);
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_lianxiang1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_chaguan1"
  trial_chaguan1Clock = new util.Clock();
  text_chaguan1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chaguan1',
    text: '茶馆',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_chaguan1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_chaguan1.setVolume(1.0);
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_chaguan1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_mifan"
  trial_mifanClock = new util.Clock();
  text_mifan = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_mifan',
    text: '米饭',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_mifan = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_mifan.setVolume(1.0);
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_58 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_58',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_mifan = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baimao1"
  trial_baimao1Clock = new util.Clock();
  text_baimao1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baimao1',
    text: '白猫',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baimao1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baimao1.setVolume(1.0);
  text_59 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_59',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_60 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_60',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baimao1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_yanjing"
  trial_yanjingClock = new util.Clock();
  text_yanjing = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_yanjing',
    text: '眼睛',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_yanjing = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_yanjing.setVolume(1.0);
  text_61 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_61',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_62 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_62',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_yanjing = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_tiankong"
  trial_tiankongClock = new util.Clock();
  text_tiankong = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_tiankong',
    text: '天空',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_tiankong = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_tiankong.setVolume(1.0);
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_64 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_64',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_tiankong = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_luotuo1"
  trial_luotuo1Clock = new util.Clock();
  text_luotuo1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_luotuo1',
    text: '骆驼',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_luotuo1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_luotuo1.setVolume(1.0);
  text_65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_65',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_66 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_66',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_luotuo1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_fuqin1"
  trial_fuqin1Clock = new util.Clock();
  text_fuqin1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fuqin1',
    text: '父亲',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_fuqin1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_fuqin1.setVolume(1.0);
  text_67 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_67',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_68',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_fuqin1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_luotuo0"
  trial_luotuo0Clock = new util.Clock();
  text_luotuo0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_luotuo0',
    text: '骆驼',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_luotuo0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_luotuo0.setVolume(1.0);
  text_69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_69',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_70 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_70',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_luotuo0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_weicheng0"
  trial_weicheng0Clock = new util.Clock();
  text_weicheng0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_weicheng0',
    text: '围城',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_weicheng0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_weicheng0.setVolume(1.0);
  text_71 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_71',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_72',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_weicheng0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_chuanghu"
  trial_chuanghuClock = new util.Clock();
  text_chuanghu = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chuanghu',
    text: '窗户',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_chuanghu = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_chuanghu.setVolume(1.0);
  text_73 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_73',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_74 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_74',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_chuanghu = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_mutou"
  trial_mutouClock = new util.Clock();
  text_mutou = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_mutou',
    text: '木头',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_mutou = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_mutou.setVolume(1.0);
  text_79 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_79',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_80 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_80',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_mutou = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_jiemei"
  trial_jiemeiClock = new util.Clock();
  text_jiemei = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_jiemei',
    text: '姐妹',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_jiemei = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_jiemei.setVolume(1.0);
  text_81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_81',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_82 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_82',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_jiemei = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_huahai1"
  trial_huahai1Clock = new util.Clock();
  text_huahai1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_huahai1',
    text: '花海',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_huahi1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_huahi1.setVolume(1.0);
  text_83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_83',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_84 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_84',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_huahai1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_lixiang0"
  trial_lixiang0Clock = new util.Clock();
  text_lixiang0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lixiang0',
    text: '理想',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_lixiang0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_lixiang0.setVolume(1.0);
  text_85 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_85',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_86 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_86',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_lixiang0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_heimei1"
  trial_heimei1Clock = new util.Clock();
  text_heimei1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_heimei1',
    text: '黑莓',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_heimei1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_heimei1.setVolume(1.0);
  text_87 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_87',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_88 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_88',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_heimei1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_yintian1"
  trial_yintian1Clock = new util.Clock();
  text_yintian1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_yintian1',
    text: '阴天',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_yintian1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_yintian1.setVolume(1.0);
  text_89 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_89',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_yintian1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_danche0"
  trial_danche0Clock = new util.Clock();
  text_danche0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_danche0',
    text: '单车',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_danche0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_danche0.setVolume(1.0);
  text_91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_91',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_92',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_danche0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baoma0"
  trial_baoma0Clock = new util.Clock();
  text_baoma0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baoma0',
    text: '宝马',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baoma0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baoma0.setVolume(1.0);
  text_93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_93',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_94 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_94',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baoma0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_huahai0"
  trial_huahai0Clock = new util.Clock();
  text_huahai0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_huahai0',
    text: '花海',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_huahai0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_huahai0.setVolume(1.0);
  text_95 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_95',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_96 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_96',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_huahai0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_lixiang1"
  trial_lixiang1Clock = new util.Clock();
  text_lixiang1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lixiang1',
    text: '理想',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_lixiang1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_lixiang1.setVolume(1.0);
  text_97 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_97',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_98 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_98',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_lixiang1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_beiying0"
  trial_beiying0Clock = new util.Clock();
  text_beiying0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_beiying0',
    text: '背影',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_beiying0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_beiying0.setVolume(1.0);
  text_99 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_99',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_beiying0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_lianxiang0"
  trial_lianxiang0Clock = new util.Clock();
  text_lianxiang0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_lianxiang0',
    text: '联想',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_lianxiang0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_lianxiang0.setVolume(1.0);
  text_101 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_101',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_102 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_102',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_lianxiang0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_gongfu1"
  trial_gongfu1Clock = new util.Clock();
  text_gongfu1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_gongfu1',
    text: '功夫',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_gongfu1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_gongfu1.setVolume(1.0);
  text_105 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_105',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_106 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_106',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_gongfu1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_miantiao"
  trial_miantiaoClock = new util.Clock();
  text_miantiao = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_miantiao',
    text: '面条',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_miantiao = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_miantiao.setVolume(1.0);
  text_107 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_107',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_108 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_108',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_miantiao = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_heimao"
  trial_heimaoClock = new util.Clock();
  text_heimao = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_heimao',
    text: '黑猫',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_heimao = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_heimao.setVolume(1.0);
  text_109 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_109',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_110 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_110',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_heimao = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_beiying1"
  trial_beiying1Clock = new util.Clock();
  text_beiying1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_beiying1',
    text: '背影',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_beiying1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_beiying1.setVolume(1.0);
  text_111 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_111',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_112 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_112',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_beiying1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_danche1"
  trial_danche1Clock = new util.Clock();
  text_danche1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_danche1',
    text: '单车',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_danche1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_danche1.setVolume(1.0);
  text_113 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_113',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_114 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_114',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_danche1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_dianying"
  trial_dianyingClock = new util.Clock();
  text_dianying = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_dianying',
    text: '电影',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_dianying = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_dianying.setVolume(1.0);
  text_115 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_115',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_116 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_116',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_dianying = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shitou"
  trial_shitouClock = new util.Clock();
  text_shitou = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shitou',
    text: '石头',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shitou = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shitou.setVolume(1.0);
  text_117 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_117',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_118 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_118',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shitou = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_xiongdi0"
  trial_xiongdi0Clock = new util.Clock();
  text_xiongdi0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_xiongdi0',
    text: '兄弟',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_xiongdi0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_xiongdi0.setVolume(1.0);
  text_119 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_119',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_120 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_120',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_xiongdi0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_senlin"
  trial_senlinClock = new util.Clock();
  text_senlin = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_senlin',
    text: '森林',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_senlin = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_senlin.setVolume(1.0);
  text_123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_123',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_124 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_124',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_senlin = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_hongqi0"
  trial_hongqi0Clock = new util.Clock();
  text_hongqi_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hongqi_0',
    text: '红旗',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_hongqi_0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_hongqi_0.setVolume(1.0);
  text_153 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_153',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_154 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_154',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_hongqi_0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shenhai0"
  trial_shenhai0Clock = new util.Clock();
  text_shenhai0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shenhai0',
    text: '深海',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shenhai0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shenhai0.setVolume(1.0);
  text_125 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_125',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_126 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_126',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shenhai0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_feihe0"
  trial_feihe0Clock = new util.Clock();
  text_feihe0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feihe0',
    text: '飞鹤',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_feihe0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_feihe0.setVolume(1.0);
  text_127 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_127',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_128 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_128',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_feihe0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shenhai1"
  trial_shenhai1Clock = new util.Clock();
  text_shenhai1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shenhai1',
    text: '深海',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shenhai1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shenhai1.setVolume(1.0);
  text_129 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_129',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_130 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_130',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shenhai1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_shouji"
  trial_shoujiClock = new util.Clock();
  text_shouji = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_shouji',
    text: '手机',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_shouji = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_shouji.setVolume(1.0);
  text_165 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_165',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_166 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_166',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_shouji = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_hongniu1"
  trial_hongniu1Clock = new util.Clock();
  text_hongniu1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hongniu1',
    text: '红牛',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_hongniu1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_hongniu1.setVolume(1.0);
  text_131 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_131',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_132 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_132',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_hongniu1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_guangming0"
  trial_guangming0Clock = new util.Clock();
  text_guangming0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_guangming0',
    text: '光明',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_guangming0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_guangming0.setVolume(1.0);
  text_133 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_133',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_134 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_134',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_guangming0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_qiche"
  trial_qicheClock = new util.Clock();
  text_qiche = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_qiche',
    text: '汽车',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_qiche = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_qiche.setVolume(1.0);
  text_135 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_135',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_136 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_136',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_qiche = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_gongfu0"
  trial_gongfu0Clock = new util.Clock();
  text_gongfu0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_gongfu0',
    text: '功夫',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_gongfu0 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_gongfu0.setVolume(1.0);
  text_137 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_137',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_138 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_138',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_gongfu0 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_yusan"
  trial_yusanClock = new util.Clock();
  textyusan = new visual.TextStim({
    win: psychoJS.window,
    name: 'textyusan',
    text: '雨伞',
    font: 'Simhei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  soundyusan = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  soundyusan.setVolume(1.0);
  text_157 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_157',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_158 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_158',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_respyusan = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_jiaofu1"
  trial_jiaofu1Clock = new util.Clock();
  text_jiaofu1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_jiaofu1',
    text: '教父',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_jiaofu1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_jiaofu1.setVolume(1.0);
  text_141 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_141',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_142 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_142',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_jiaofu1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_baixiang1"
  trial_baixiang1Clock = new util.Clock();
  text_baixiang_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_baixiang_1',
    text: '白象',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_baixiang_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_baixiang_1.setVolume(1.0);
  text_159 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_159',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_160 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_160',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_baixiang_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_canguan"
  trial_canguanClock = new util.Clock();
  text_canguan = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_canguan',
    text: '餐馆',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_canguan = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_canguan.setVolume(1.0);
  text_143 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_143',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_144 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_144',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_canguan = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_feihe1"
  trial_feihe1Clock = new util.Clock();
  text_feihe1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feihe1',
    text: '飞鹤',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.5,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_feihe1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_feihe1.setVolume(1.0);
  text_147 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_147',
    text: '请听句子...',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_148 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_148',
    text: '普通名词“←”\n专有名词“→”',
    font: 'SimHei',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_feihe1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var introductions_1MaxDurationReached;
var _key_resp_allKeys;
var introductions_1MaxDuration;
var introductions_1Components;
function introductions_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introductions_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introductions_1Clock.reset(routineTimer.getTime());
    routineTimer.add(999.000000);
    introductions_1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('introductions_1.started', globalClock.getTime());
    introductions_1MaxDuration = null
    // keep track of which components have finished
    introductions_1Components = [];
    introductions_1Components.push(text_introductions);
    introductions_1Components.push(key_resp);
    
    for (const thisComponent of introductions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function introductions_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introductions_1' ---
    // get current time
    t = introductions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_introductions* updates
    if (t >= 0.0 && text_introductions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_introductions.tStart = t;  // (not accounting for frame time here)
      text_introductions.frameNStart = frameN;  // exact frame index
      
      text_introductions.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_introductions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_introductions.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        key_resp.duration = _key_resp_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductions_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductions_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introductions_1' ---
    for (const thisComponent of introductions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('introductions_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    if (introductions_1MaxDurationReached) {
        introductions_1Clock.add(introductions_1MaxDuration);
    } else {
        introductions_1Clock.add(999.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var apple0MaxDurationReached;
var _key_resp_apple0_allKeys;
var apple0MaxDuration;
var apple0Components;
function apple0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'apple0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    apple0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    apple0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_apple0.setValue('audio/apple0.wav');
    sound_apple0.secs=3.0;
    sound_apple0.setVolume(1.0);
    key_resp_apple0.keys = undefined;
    key_resp_apple0.rt = undefined;
    _key_resp_apple0_allKeys = [];
    psychoJS.experiment.addData('apple0.started', globalClock.getTime());
    apple0MaxDuration = null
    // keep track of which components have finished
    apple0Components = [];
    apple0Components.push(text_apple0);
    apple0Components.push(sound_apple0);
    apple0Components.push(text);
    apple0Components.push(text_2);
    apple0Components.push(key_resp_apple0);
    
    for (const thisComponent of apple0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function apple0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'apple0' ---
    // get current time
    t = apple0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_apple0* updates
    if (t >= 0.0 && text_apple0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_apple0.tStart = t;  // (not accounting for frame time here)
      text_apple0.frameNStart = frameN;  // exact frame index
      
      text_apple0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_apple0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_apple0.setAutoDraw(false);
    }
    
    // start/stop sound_apple0
    if (t >= 4.0 && sound_apple0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_apple0.tStart = t;  // (not accounting for frame time here)
      sound_apple0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_apple0.play(); });  // screen flip
      sound_apple0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_apple0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_apple0.tStart + 0.5) {
        sound_apple0.stop();  // stop the sound (if longer than duration)
        sound_apple0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text* updates
    if (t >= 3.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 7.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *key_resp_apple0* updates
    if (t >= 7.0 && key_resp_apple0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_apple0.tStart = t;  // (not accounting for frame time here)
      key_resp_apple0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_apple0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_apple0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_apple0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_apple0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_apple0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_apple0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_apple0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_apple0_allKeys = _key_resp_apple0_allKeys.concat(theseKeys);
      if (_key_resp_apple0_allKeys.length > 0) {
        key_resp_apple0.keys = _key_resp_apple0_allKeys[0].name;  // just the first key pressed
        key_resp_apple0.rt = _key_resp_apple0_allKeys[0].rt;
        key_resp_apple0.duration = _key_resp_apple0_allKeys[0].duration;
        // was this correct?
        if (key_resp_apple0.keys == "'left'") {
            key_resp_apple0.corr = 1;
        } else {
            key_resp_apple0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of apple0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function apple0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'apple0' ---
    for (const thisComponent of apple0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('apple0.stopped', globalClock.getTime());
    sound_apple0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_apple0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_apple0.corr = 1;  // correct non-response
      } else {
         key_resp_apple0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_apple0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_apple0.keys', key_resp_apple0.keys);
    psychoJS.experiment.addData('key_resp_apple0.corr', key_resp_apple0.corr);
    if (typeof key_resp_apple0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_apple0.rt', key_resp_apple0.rt);
        psychoJS.experiment.addData('key_resp_apple0.duration', key_resp_apple0.duration);
        routineTimer.reset();
        }
    
    key_resp_apple0.stop();
    if (apple0MaxDurationReached) {
        apple0Clock.add(apple0MaxDuration);
    } else {
        apple0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var apple1MaxDurationReached;
var _key_resp_apple1_allKeys;
var apple1MaxDuration;
var apple1Components;
function apple1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'apple1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    apple1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    apple1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_apple1.setValue('audio/apple1.wav');
    sound_apple1.secs=3.0;
    sound_apple1.setVolume(1.0);
    key_resp_apple1.keys = undefined;
    key_resp_apple1.rt = undefined;
    _key_resp_apple1_allKeys = [];
    psychoJS.experiment.addData('apple1.started', globalClock.getTime());
    apple1MaxDuration = null
    // keep track of which components have finished
    apple1Components = [];
    apple1Components.push(text_apple1);
    apple1Components.push(sound_apple1);
    apple1Components.push(text_3);
    apple1Components.push(text_4);
    apple1Components.push(key_resp_apple1);
    
    for (const thisComponent of apple1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function apple1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'apple1' ---
    // get current time
    t = apple1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_apple1* updates
    if (t >= 0.0 && text_apple1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_apple1.tStart = t;  // (not accounting for frame time here)
      text_apple1.frameNStart = frameN;  // exact frame index
      
      text_apple1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_apple1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_apple1.setAutoDraw(false);
    }
    
    // start/stop sound_apple1
    if (t >= 4.0 && sound_apple1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_apple1.tStart = t;  // (not accounting for frame time here)
      sound_apple1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_apple1.play(); });  // screen flip
      sound_apple1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_apple1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_apple1.tStart + 0.5) {
        sound_apple1.stop();  // stop the sound (if longer than duration)
        sound_apple1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_3* updates
    if (t >= 3.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_4* updates
    if (t >= 7.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    // *key_resp_apple1* updates
    if (t >= 7.0 && key_resp_apple1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_apple1.tStart = t;  // (not accounting for frame time here)
      key_resp_apple1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_apple1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_apple1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_apple1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_apple1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_apple1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_apple1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_apple1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_apple1_allKeys = _key_resp_apple1_allKeys.concat(theseKeys);
      if (_key_resp_apple1_allKeys.length > 0) {
        key_resp_apple1.keys = _key_resp_apple1_allKeys[0].name;  // just the first key pressed
        key_resp_apple1.rt = _key_resp_apple1_allKeys[0].rt;
        key_resp_apple1.duration = _key_resp_apple1_allKeys[0].duration;
        // was this correct?
        if (key_resp_apple1.keys == "'right'") {
            key_resp_apple1.corr = 1;
        } else {
            key_resp_apple1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of apple1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function apple1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'apple1' ---
    for (const thisComponent of apple1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('apple1.stopped', globalClock.getTime());
    sound_apple1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_apple1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_apple1.corr = 1;  // correct non-response
      } else {
         key_resp_apple1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_apple1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_apple1.keys', key_resp_apple1.keys);
    psychoJS.experiment.addData('key_resp_apple1.corr', key_resp_apple1.corr);
    if (typeof key_resp_apple1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_apple1.rt', key_resp_apple1.rt);
        psychoJS.experiment.addData('key_resp_apple1.duration', key_resp_apple1.duration);
        routineTimer.reset();
        }
    
    key_resp_apple1.stop();
    if (apple1MaxDurationReached) {
        apple1Clock.add(apple1MaxDuration);
    } else {
        apple1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var xiaomi1MaxDurationReached;
var _key_resp_xiaomi1_allKeys;
var xiaomi1MaxDuration;
var xiaomi1Components;
function xiaomi1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'xiaomi1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    xiaomi1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    xiaomi1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_xiaomi1.setValue('audio/xiaomi1.wav');
    sound_xiaomi1.secs=3.0;
    sound_xiaomi1.setVolume(1.0);
    key_resp_xiaomi1.keys = undefined;
    key_resp_xiaomi1.rt = undefined;
    _key_resp_xiaomi1_allKeys = [];
    psychoJS.experiment.addData('xiaomi1.started', globalClock.getTime());
    xiaomi1MaxDuration = null
    // keep track of which components have finished
    xiaomi1Components = [];
    xiaomi1Components.push(text_xiaomi1);
    xiaomi1Components.push(sound_xiaomi1);
    xiaomi1Components.push(text_5);
    xiaomi1Components.push(text_6);
    xiaomi1Components.push(key_resp_xiaomi1);
    
    for (const thisComponent of xiaomi1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function xiaomi1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'xiaomi1' ---
    // get current time
    t = xiaomi1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_xiaomi1* updates
    if (t >= 0.0 && text_xiaomi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_xiaomi1.tStart = t;  // (not accounting for frame time here)
      text_xiaomi1.frameNStart = frameN;  // exact frame index
      
      text_xiaomi1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_xiaomi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_xiaomi1.setAutoDraw(false);
    }
    
    // start/stop sound_xiaomi1
    if (t >= 4.0 && sound_xiaomi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_xiaomi1.tStart = t;  // (not accounting for frame time here)
      sound_xiaomi1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_xiaomi1.play(); });  // screen flip
      sound_xiaomi1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_xiaomi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_xiaomi1.tStart + 0.5) {
        sound_xiaomi1.stop();  // stop the sound (if longer than duration)
        sound_xiaomi1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_5* updates
    if (t >= 3.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *text_6* updates
    if (t >= 7.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    
    // *key_resp_xiaomi1* updates
    if (t >= 7.0 && key_resp_xiaomi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_xiaomi1.tStart = t;  // (not accounting for frame time here)
      key_resp_xiaomi1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_xiaomi1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiaomi1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiaomi1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_xiaomi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_xiaomi1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_xiaomi1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_xiaomi1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_xiaomi1_allKeys = _key_resp_xiaomi1_allKeys.concat(theseKeys);
      if (_key_resp_xiaomi1_allKeys.length > 0) {
        key_resp_xiaomi1.keys = _key_resp_xiaomi1_allKeys[0].name;  // just the first key pressed
        key_resp_xiaomi1.rt = _key_resp_xiaomi1_allKeys[0].rt;
        key_resp_xiaomi1.duration = _key_resp_xiaomi1_allKeys[0].duration;
        // was this correct?
        if (key_resp_xiaomi1.keys == "'right'") {
            key_resp_xiaomi1.corr = 1;
        } else {
            key_resp_xiaomi1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of xiaomi1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function xiaomi1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'xiaomi1' ---
    for (const thisComponent of xiaomi1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('xiaomi1.stopped', globalClock.getTime());
    sound_xiaomi1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_xiaomi1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_xiaomi1.corr = 1;  // correct non-response
      } else {
         key_resp_xiaomi1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_xiaomi1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_xiaomi1.keys', key_resp_xiaomi1.keys);
    psychoJS.experiment.addData('key_resp_xiaomi1.corr', key_resp_xiaomi1.corr);
    if (typeof key_resp_xiaomi1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_xiaomi1.rt', key_resp_xiaomi1.rt);
        psychoJS.experiment.addData('key_resp_xiaomi1.duration', key_resp_xiaomi1.duration);
        routineTimer.reset();
        }
    
    key_resp_xiaomi1.stop();
    if (xiaomi1MaxDurationReached) {
        xiaomi1Clock.add(xiaomi1MaxDuration);
    } else {
        xiaomi1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_xiaomi0MaxDurationReached;
var _key_xiaomi0_allKeys;
var trial_xiaomi0MaxDuration;
var trial_xiaomi0Components;
function trial_xiaomi0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_xiaomi0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_xiaomi0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_xiaomi0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_xiaomi0.setValue('audio/xiaomi0.wav');
    sound_xiaomi0.secs=3.0;
    sound_xiaomi0.setVolume(1.0);
    key_xiaomi0.keys = undefined;
    key_xiaomi0.rt = undefined;
    _key_xiaomi0_allKeys = [];
    psychoJS.experiment.addData('trial_xiaomi0.started', globalClock.getTime());
    trial_xiaomi0MaxDuration = null
    // keep track of which components have finished
    trial_xiaomi0Components = [];
    trial_xiaomi0Components.push(text_xiaomi0);
    trial_xiaomi0Components.push(sound_xiaomi0);
    trial_xiaomi0Components.push(text_9);
    trial_xiaomi0Components.push(text_10);
    trial_xiaomi0Components.push(key_xiaomi0);
    
    for (const thisComponent of trial_xiaomi0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_xiaomi0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_xiaomi0' ---
    // get current time
    t = trial_xiaomi0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_xiaomi0* updates
    if (t >= 0.0 && text_xiaomi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_xiaomi0.tStart = t;  // (not accounting for frame time here)
      text_xiaomi0.frameNStart = frameN;  // exact frame index
      
      text_xiaomi0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_xiaomi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_xiaomi0.setAutoDraw(false);
    }
    
    // start/stop sound_xiaomi0
    if (t >= 4.0 && sound_xiaomi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_xiaomi0.tStart = t;  // (not accounting for frame time here)
      sound_xiaomi0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_xiaomi0.play(); });  // screen flip
      sound_xiaomi0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_xiaomi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_xiaomi0.tStart + 0.5) {
        sound_xiaomi0.stop();  // stop the sound (if longer than duration)
        sound_xiaomi0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_9* updates
    if (t >= 3.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    
    // *text_10* updates
    if (t >= 7.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    
    
    // *key_xiaomi0* updates
    if (t >= 7.0 && key_xiaomi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_xiaomi0.tStart = t;  // (not accounting for frame time here)
      key_xiaomi0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_xiaomi0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_xiaomi0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_xiaomi0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_xiaomi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_xiaomi0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_xiaomi0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_xiaomi0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_xiaomi0_allKeys = _key_xiaomi0_allKeys.concat(theseKeys);
      if (_key_xiaomi0_allKeys.length > 0) {
        key_xiaomi0.keys = _key_xiaomi0_allKeys[0].name;  // just the first key pressed
        key_xiaomi0.rt = _key_xiaomi0_allKeys[0].rt;
        key_xiaomi0.duration = _key_xiaomi0_allKeys[0].duration;
        // was this correct?
        if (key_xiaomi0.keys == "'left'") {
            key_xiaomi0.corr = 1;
        } else {
            key_xiaomi0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_xiaomi0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_xiaomi0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_xiaomi0' ---
    for (const thisComponent of trial_xiaomi0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_xiaomi0.stopped', globalClock.getTime());
    sound_xiaomi0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_xiaomi0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_xiaomi0.corr = 1;  // correct non-response
      } else {
         key_xiaomi0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_xiaomi0.corr, level);
    }
    psychoJS.experiment.addData('key_xiaomi0.keys', key_xiaomi0.keys);
    psychoJS.experiment.addData('key_xiaomi0.corr', key_xiaomi0.corr);
    if (typeof key_xiaomi0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_xiaomi0.rt', key_xiaomi0.rt);
        psychoJS.experiment.addData('key_xiaomi0.duration', key_xiaomi0.duration);
        routineTimer.reset();
        }
    
    key_xiaomi0.stop();
    if (trial_xiaomi0MaxDurationReached) {
        trial_xiaomi0Clock.add(trial_xiaomi0MaxDuration);
    } else {
        trial_xiaomi0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var introductions_2MaxDurationReached;
var _key_resp_ins_allKeys;
var introductions_2MaxDuration;
var introductions_2Components;
function introductions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introductions_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introductions_2Clock.reset(routineTimer.getTime());
    routineTimer.add(999.000000);
    introductions_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_ins.keys = undefined;
    key_resp_ins.rt = undefined;
    _key_resp_ins_allKeys = [];
    psychoJS.experiment.addData('introductions_2.started', globalClock.getTime());
    introductions_2MaxDuration = null
    // keep track of which components have finished
    introductions_2Components = [];
    introductions_2Components.push(instructions2);
    introductions_2Components.push(key_resp_ins);
    
    for (const thisComponent of introductions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introductions_2' ---
    // get current time
    t = introductions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions2* updates
    if (t >= 0.0 && instructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions2.tStart = t;  // (not accounting for frame time here)
      instructions2.frameNStart = frameN;  // exact frame index
      
      instructions2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (instructions2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instructions2.setAutoDraw(false);
    }
    
    
    // *key_resp_ins* updates
    if (t >= 0.0 && key_resp_ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_ins.tStart = t;  // (not accounting for frame time here)
      key_resp_ins.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_ins.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ins.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_ins.clearEvents(); });
    }
    
    frameRemains = 0.0 + 999 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_ins.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_ins.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_ins.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_ins.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_ins_allKeys = _key_resp_ins_allKeys.concat(theseKeys);
      if (_key_resp_ins_allKeys.length > 0) {
        key_resp_ins.keys = _key_resp_ins_allKeys[0].name;  // just the first key pressed
        key_resp_ins.rt = _key_resp_ins_allKeys[0].rt;
        key_resp_ins.duration = _key_resp_ins_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introductions_2' ---
    for (const thisComponent of introductions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('introductions_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_ins.corr, level);
    }
    psychoJS.experiment.addData('key_resp_ins.keys', key_resp_ins.keys);
    if (typeof key_resp_ins.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_ins.rt', key_resp_ins.rt);
        psychoJS.experiment.addData('key_resp_ins.duration', key_resp_ins.duration);
        routineTimer.reset();
        }
    
    key_resp_ins.stop();
    if (introductions_2MaxDurationReached) {
        introductions_2Clock.add(introductions_2MaxDuration);
    } else {
        introductions_2Clock.add(999.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_zhuoziMaxDurationReached;
var _key_resp_zhuozi_allKeys;
var trial_zhuoziMaxDuration;
var trial_zhuoziComponents;
function trial_zhuoziRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_zhuozi' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_zhuoziClock.reset(routineTimer.getTime());
    routineTimer.add(11.400000);
    trial_zhuoziMaxDurationReached = false;
    // update component parameters for each repeat
    sound_zhuozi.setValue('audio/zhuozi.wav');
    sound_zhuozi.secs=2.4;
    sound_zhuozi.setVolume(1.0);
    key_resp_zhuozi.keys = undefined;
    key_resp_zhuozi.rt = undefined;
    _key_resp_zhuozi_allKeys = [];
    psychoJS.experiment.addData('trial_zhuozi.started', globalClock.getTime());
    trial_zhuoziMaxDuration = null
    // keep track of which components have finished
    trial_zhuoziComponents = [];
    trial_zhuoziComponents.push(text_zhuozi);
    trial_zhuoziComponents.push(sound_zhuozi);
    trial_zhuoziComponents.push(text_7);
    trial_zhuoziComponents.push(text_8);
    trial_zhuoziComponents.push(key_resp_zhuozi);
    
    for (const thisComponent of trial_zhuoziComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_zhuoziRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_zhuozi' ---
    // get current time
    t = trial_zhuoziClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_zhuozi* updates
    if (t >= 0.0 && text_zhuozi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_zhuozi.tStart = t;  // (not accounting for frame time here)
      text_zhuozi.frameNStart = frameN;  // exact frame index
      
      text_zhuozi.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_zhuozi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_zhuozi.setAutoDraw(false);
    }
    
    // start/stop sound_zhuozi
    if (t >= 4.0 && sound_zhuozi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_zhuozi.tStart = t;  // (not accounting for frame time here)
      sound_zhuozi.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_zhuozi.play(); });  // screen flip
      sound_zhuozi.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_zhuozi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_zhuozi.tStart + 0.5) {
        sound_zhuozi.stop();  // stop the sound (if longer than duration)
        sound_zhuozi.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_7* updates
    if (t >= 3.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    
    // *text_8* updates
    if (t >= 6.4 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 6.4 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    
    // *key_resp_zhuozi* updates
    if (t >= 6.4 && key_resp_zhuozi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zhuozi.tStart = t;  // (not accounting for frame time here)
      key_resp_zhuozi.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zhuozi.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zhuozi.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zhuozi.clearEvents(); });
    }
    
    frameRemains = 6.4 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_zhuozi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_zhuozi.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_zhuozi.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zhuozi.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_zhuozi_allKeys = _key_resp_zhuozi_allKeys.concat(theseKeys);
      if (_key_resp_zhuozi_allKeys.length > 0) {
        key_resp_zhuozi.keys = _key_resp_zhuozi_allKeys[0].name;  // just the first key pressed
        key_resp_zhuozi.rt = _key_resp_zhuozi_allKeys[0].rt;
        key_resp_zhuozi.duration = _key_resp_zhuozi_allKeys[0].duration;
        // was this correct?
        if (key_resp_zhuozi.keys == "'left'") {
            key_resp_zhuozi.corr = 1;
        } else {
            key_resp_zhuozi.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_zhuoziComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_zhuoziRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_zhuozi' ---
    for (const thisComponent of trial_zhuoziComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_zhuozi.stopped', globalClock.getTime());
    sound_zhuozi.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_zhuozi.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_zhuozi.corr = 1;  // correct non-response
      } else {
         key_resp_zhuozi.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_zhuozi.corr, level);
    }
    psychoJS.experiment.addData('key_resp_zhuozi.keys', key_resp_zhuozi.keys);
    psychoJS.experiment.addData('key_resp_zhuozi.corr', key_resp_zhuozi.corr);
    if (typeof key_resp_zhuozi.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zhuozi.rt', key_resp_zhuozi.rt);
        psychoJS.experiment.addData('key_resp_zhuozi.duration', key_resp_zhuozi.duration);
        routineTimer.reset();
        }
    
    key_resp_zhuozi.stop();
    if (trial_zhuoziMaxDurationReached) {
        trial_zhuoziClock.add(trial_zhuoziMaxDuration);
    } else {
        trial_zhuoziClock.add(11.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_qingshu0MaxDurationReached;
var _key_resp_2qingshu0_allKeys;
var trial_qingshu0MaxDuration;
var trial_qingshu0Components;
function trial_qingshu0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_qingshu0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_qingshu0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.600000);
    trial_qingshu0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_qingshu0.setValue('audio/qingshu0.wav');
    sound_qingshu0.secs=2.6;
    sound_qingshu0.setVolume(1.0);
    key_resp_2qingshu0.keys = undefined;
    key_resp_2qingshu0.rt = undefined;
    _key_resp_2qingshu0_allKeys = [];
    psychoJS.experiment.addData('trial_qingshu0.started', globalClock.getTime());
    trial_qingshu0MaxDuration = null
    // keep track of which components have finished
    trial_qingshu0Components = [];
    trial_qingshu0Components.push(text_qingshu0);
    trial_qingshu0Components.push(sound_qingshu0);
    trial_qingshu0Components.push(text_11);
    trial_qingshu0Components.push(text_12);
    trial_qingshu0Components.push(key_resp_2qingshu0);
    
    for (const thisComponent of trial_qingshu0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_qingshu0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_qingshu0' ---
    // get current time
    t = trial_qingshu0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_qingshu0* updates
    if (t >= 0.0 && text_qingshu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_qingshu0.tStart = t;  // (not accounting for frame time here)
      text_qingshu0.frameNStart = frameN;  // exact frame index
      
      text_qingshu0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_qingshu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_qingshu0.setAutoDraw(false);
    }
    
    // start/stop sound_qingshu0
    if (t >= 4 && sound_qingshu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_qingshu0.tStart = t;  // (not accounting for frame time here)
      sound_qingshu0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_qingshu0.play(); });  // screen flip
      sound_qingshu0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 2.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_qingshu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_qingshu0.tStart + 0.5) {
        sound_qingshu0.stop();  // stop the sound (if longer than duration)
        sound_qingshu0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_11* updates
    if (t >= 3.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    
    
    // *text_12* updates
    if (t >= 6.6 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
    }
    
    
    // *key_resp_2qingshu0* updates
    if (t >= 6.6 && key_resp_2qingshu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2qingshu0.tStart = t;  // (not accounting for frame time here)
      key_resp_2qingshu0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2qingshu0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2qingshu0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2qingshu0.clearEvents(); });
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_2qingshu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2qingshu0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_2qingshu0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2qingshu0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2qingshu0_allKeys = _key_resp_2qingshu0_allKeys.concat(theseKeys);
      if (_key_resp_2qingshu0_allKeys.length > 0) {
        key_resp_2qingshu0.keys = _key_resp_2qingshu0_allKeys[0].name;  // just the first key pressed
        key_resp_2qingshu0.rt = _key_resp_2qingshu0_allKeys[0].rt;
        key_resp_2qingshu0.duration = _key_resp_2qingshu0_allKeys[0].duration;
        // was this correct?
        if (key_resp_2qingshu0.keys == "'left'") {
            key_resp_2qingshu0.corr = 1;
        } else {
            key_resp_2qingshu0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_qingshu0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_qingshu0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_qingshu0' ---
    for (const thisComponent of trial_qingshu0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_qingshu0.stopped', globalClock.getTime());
    sound_qingshu0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_2qingshu0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_2qingshu0.corr = 1;  // correct non-response
      } else {
         key_resp_2qingshu0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2qingshu0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2qingshu0.keys', key_resp_2qingshu0.keys);
    psychoJS.experiment.addData('key_resp_2qingshu0.corr', key_resp_2qingshu0.corr);
    if (typeof key_resp_2qingshu0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2qingshu0.rt', key_resp_2qingshu0.rt);
        psychoJS.experiment.addData('key_resp_2qingshu0.duration', key_resp_2qingshu0.duration);
        routineTimer.reset();
        }
    
    key_resp_2qingshu0.stop();
    if (trial_qingshu0MaxDurationReached) {
        trial_qingshu0Clock.add(trial_qingshu0MaxDuration);
    } else {
        trial_qingshu0Clock.add(11.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_caoyuanMaxDurationReached;
var _key_resp_caoyuan_allKeys;
var trial_caoyuanMaxDuration;
var trial_caoyuanComponents;
function trial_caoyuanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_caoyuan' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_caoyuanClock.reset(routineTimer.getTime());
    routineTimer.add(11.600000);
    trial_caoyuanMaxDurationReached = false;
    // update component parameters for each repeat
    sound_caoyuan.setValue('audio/caoyuan.wav');
    sound_caoyuan.secs=2.6;
    sound_caoyuan.setVolume(1.0);
    key_resp_caoyuan.keys = undefined;
    key_resp_caoyuan.rt = undefined;
    _key_resp_caoyuan_allKeys = [];
    psychoJS.experiment.addData('trial_caoyuan.started', globalClock.getTime());
    trial_caoyuanMaxDuration = null
    // keep track of which components have finished
    trial_caoyuanComponents = [];
    trial_caoyuanComponents.push(caoyuan);
    trial_caoyuanComponents.push(sound_caoyuan);
    trial_caoyuanComponents.push(text_161);
    trial_caoyuanComponents.push(text_162);
    trial_caoyuanComponents.push(key_resp_caoyuan);
    
    for (const thisComponent of trial_caoyuanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_caoyuanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_caoyuan' ---
    // get current time
    t = trial_caoyuanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *caoyuan* updates
    if (t >= 0.0 && caoyuan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      caoyuan.tStart = t;  // (not accounting for frame time here)
      caoyuan.frameNStart = frameN;  // exact frame index
      
      caoyuan.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (caoyuan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      caoyuan.setAutoDraw(false);
    }
    
    // start/stop sound_caoyuan
    if (t >= 4 && sound_caoyuan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_caoyuan.tStart = t;  // (not accounting for frame time here)
      sound_caoyuan.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_caoyuan.play(); });  // screen flip
      sound_caoyuan.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 2.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_caoyuan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_caoyuan.tStart + 0.5) {
        sound_caoyuan.stop();  // stop the sound (if longer than duration)
        sound_caoyuan.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_161* updates
    if (t >= 3.0 && text_161.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_161.tStart = t;  // (not accounting for frame time here)
      text_161.frameNStart = frameN;  // exact frame index
      
      text_161.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_161.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_161.setAutoDraw(false);
    }
    
    
    // *text_162* updates
    if (t >= 6.6 && text_162.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_162.tStart = t;  // (not accounting for frame time here)
      text_162.frameNStart = frameN;  // exact frame index
      
      text_162.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_162.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_162.setAutoDraw(false);
    }
    
    
    // *key_resp_caoyuan* updates
    if (t >= 6.6 && key_resp_caoyuan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_caoyuan.tStart = t;  // (not accounting for frame time here)
      key_resp_caoyuan.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_caoyuan.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_caoyuan.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_caoyuan.clearEvents(); });
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_caoyuan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_caoyuan.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_caoyuan.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_caoyuan.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_caoyuan_allKeys = _key_resp_caoyuan_allKeys.concat(theseKeys);
      if (_key_resp_caoyuan_allKeys.length > 0) {
        key_resp_caoyuan.keys = _key_resp_caoyuan_allKeys[0].name;  // just the first key pressed
        key_resp_caoyuan.rt = _key_resp_caoyuan_allKeys[0].rt;
        key_resp_caoyuan.duration = _key_resp_caoyuan_allKeys[0].duration;
        // was this correct?
        if (key_resp_caoyuan.keys == "'left'") {
            key_resp_caoyuan.corr = 1;
        } else {
            key_resp_caoyuan.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_caoyuanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_caoyuanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_caoyuan' ---
    for (const thisComponent of trial_caoyuanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_caoyuan.stopped', globalClock.getTime());
    sound_caoyuan.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_caoyuan.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_caoyuan.corr = 1;  // correct non-response
      } else {
         key_resp_caoyuan.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_caoyuan.corr, level);
    }
    psychoJS.experiment.addData('key_resp_caoyuan.keys', key_resp_caoyuan.keys);
    psychoJS.experiment.addData('key_resp_caoyuan.corr', key_resp_caoyuan.corr);
    if (typeof key_resp_caoyuan.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_caoyuan.rt', key_resp_caoyuan.rt);
        psychoJS.experiment.addData('key_resp_caoyuan.duration', key_resp_caoyuan.duration);
        routineTimer.reset();
        }
    
    key_resp_caoyuan.stop();
    if (trial_caoyuanMaxDurationReached) {
        trial_caoyuanClock.add(trial_caoyuanMaxDuration);
    } else {
        trial_caoyuanClock.add(11.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_heimei0MaxDurationReached;
var _key_resp_heimei0_allKeys;
var trial_heimei0MaxDuration;
var trial_heimei0Components;
function trial_heimei0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_heimei0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_heimei0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_heimei0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_heimei0.setValue('audio/heimei0.wav');
    sound_heimei0.secs=2.5;
    sound_heimei0.setVolume(1.0);
    key_resp_heimei0.keys = undefined;
    key_resp_heimei0.rt = undefined;
    _key_resp_heimei0_allKeys = [];
    psychoJS.experiment.addData('trial_heimei0.started', globalClock.getTime());
    trial_heimei0MaxDuration = null
    // keep track of which components have finished
    trial_heimei0Components = [];
    trial_heimei0Components.push(text_heimei0);
    trial_heimei0Components.push(sound_heimei0);
    trial_heimei0Components.push(text_149);
    trial_heimei0Components.push(text_150);
    trial_heimei0Components.push(key_resp_heimei0);
    
    for (const thisComponent of trial_heimei0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_heimei0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_heimei0' ---
    // get current time
    t = trial_heimei0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_heimei0* updates
    if (t >= 0.0 && text_heimei0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_heimei0.tStart = t;  // (not accounting for frame time here)
      text_heimei0.frameNStart = frameN;  // exact frame index
      
      text_heimei0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_heimei0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_heimei0.setAutoDraw(false);
    }
    
    // start/stop sound_heimei0
    if (t >= 4.0 && sound_heimei0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_heimei0.tStart = t;  // (not accounting for frame time here)
      sound_heimei0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_heimei0.play(); });  // screen flip
      sound_heimei0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_heimei0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_heimei0.tStart + 0.5) {
        sound_heimei0.stop();  // stop the sound (if longer than duration)
        sound_heimei0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_149* updates
    if (t >= 3.0 && text_149.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_149.tStart = t;  // (not accounting for frame time here)
      text_149.frameNStart = frameN;  // exact frame index
      
      text_149.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_149.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_149.setAutoDraw(false);
    }
    
    
    // *text_150* updates
    if (t >= 6.5 && text_150.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_150.tStart = t;  // (not accounting for frame time here)
      text_150.frameNStart = frameN;  // exact frame index
      
      text_150.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_150.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_150.setAutoDraw(false);
    }
    
    
    // *key_resp_heimei0* updates
    if (t >= 6.5 && key_resp_heimei0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_heimei0.tStart = t;  // (not accounting for frame time here)
      key_resp_heimei0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_heimei0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimei0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimei0.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_heimei0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_heimei0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_heimei0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_heimei0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_heimei0_allKeys = _key_resp_heimei0_allKeys.concat(theseKeys);
      if (_key_resp_heimei0_allKeys.length > 0) {
        key_resp_heimei0.keys = _key_resp_heimei0_allKeys[0].name;  // just the first key pressed
        key_resp_heimei0.rt = _key_resp_heimei0_allKeys[0].rt;
        key_resp_heimei0.duration = _key_resp_heimei0_allKeys[0].duration;
        // was this correct?
        if (key_resp_heimei0.keys == "'left'") {
            key_resp_heimei0.corr = 1;
        } else {
            key_resp_heimei0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_heimei0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_heimei0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_heimei0' ---
    for (const thisComponent of trial_heimei0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_heimei0.stopped', globalClock.getTime());
    sound_heimei0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_heimei0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_heimei0.corr = 1;  // correct non-response
      } else {
         key_resp_heimei0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_heimei0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_heimei0.keys', key_resp_heimei0.keys);
    psychoJS.experiment.addData('key_resp_heimei0.corr', key_resp_heimei0.corr);
    if (typeof key_resp_heimei0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_heimei0.rt', key_resp_heimei0.rt);
        psychoJS.experiment.addData('key_resp_heimei0.duration', key_resp_heimei0.duration);
        routineTimer.reset();
        }
    
    key_resp_heimei0.stop();
    if (trial_heimei0MaxDurationReached) {
        trial_heimei0Clock.add(trial_heimei0MaxDuration);
    } else {
        trial_heimei0Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_weicheng1MaxDurationReached;
var _key_resp_weicheng1_allKeys;
var trial_weicheng1MaxDuration;
var trial_weicheng1Components;
function trial_weicheng1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_weicheng1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_weicheng1Clock.reset(routineTimer.getTime());
    routineTimer.add(11.400000);
    trial_weicheng1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_weicheng1.setValue('audio/weicheng1.wav');
    sound_weicheng1.secs=2.4;
    sound_weicheng1.setVolume(1.0);
    key_resp_weicheng1.keys = undefined;
    key_resp_weicheng1.rt = undefined;
    _key_resp_weicheng1_allKeys = [];
    psychoJS.experiment.addData('trial_weicheng1.started', globalClock.getTime());
    trial_weicheng1MaxDuration = null
    // keep track of which components have finished
    trial_weicheng1Components = [];
    trial_weicheng1Components.push(text_weicheng1);
    trial_weicheng1Components.push(sound_weicheng1);
    trial_weicheng1Components.push(text_13);
    trial_weicheng1Components.push(text_14);
    trial_weicheng1Components.push(key_resp_weicheng1);
    
    for (const thisComponent of trial_weicheng1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_weicheng1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_weicheng1' ---
    // get current time
    t = trial_weicheng1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_weicheng1* updates
    if (t >= 0.0 && text_weicheng1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_weicheng1.tStart = t;  // (not accounting for frame time here)
      text_weicheng1.frameNStart = frameN;  // exact frame index
      
      text_weicheng1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_weicheng1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_weicheng1.setAutoDraw(false);
    }
    
    // start/stop sound_weicheng1
    if (t >= 4.0 && sound_weicheng1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_weicheng1.tStart = t;  // (not accounting for frame time here)
      sound_weicheng1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_weicheng1.play(); });  // screen flip
      sound_weicheng1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_weicheng1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_weicheng1.tStart + 0.5) {
        sound_weicheng1.stop();  // stop the sound (if longer than duration)
        sound_weicheng1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_13* updates
    if (t >= 3.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    
    
    // *text_14* updates
    if (t >= 6.4 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    frameRemains = 6.4 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    
    
    // *key_resp_weicheng1* updates
    if (t >= 6.4 && key_resp_weicheng1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_weicheng1.tStart = t;  // (not accounting for frame time here)
      key_resp_weicheng1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_weicheng1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_weicheng1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_weicheng1.clearEvents(); });
    }
    
    frameRemains = 6.4 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_weicheng1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_weicheng1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_weicheng1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_weicheng1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_weicheng1_allKeys = _key_resp_weicheng1_allKeys.concat(theseKeys);
      if (_key_resp_weicheng1_allKeys.length > 0) {
        key_resp_weicheng1.keys = _key_resp_weicheng1_allKeys[0].name;  // just the first key pressed
        key_resp_weicheng1.rt = _key_resp_weicheng1_allKeys[0].rt;
        key_resp_weicheng1.duration = _key_resp_weicheng1_allKeys[0].duration;
        // was this correct?
        if (key_resp_weicheng1.keys == "'right'") {
            key_resp_weicheng1.corr = 1;
        } else {
            key_resp_weicheng1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_weicheng1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_weicheng1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_weicheng1' ---
    for (const thisComponent of trial_weicheng1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_weicheng1.stopped', globalClock.getTime());
    sound_weicheng1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_weicheng1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_weicheng1.corr = 1;  // correct non-response
      } else {
         key_resp_weicheng1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_weicheng1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_weicheng1.keys', key_resp_weicheng1.keys);
    psychoJS.experiment.addData('key_resp_weicheng1.corr', key_resp_weicheng1.corr);
    if (typeof key_resp_weicheng1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_weicheng1.rt', key_resp_weicheng1.rt);
        psychoJS.experiment.addData('key_resp_weicheng1.duration', key_resp_weicheng1.duration);
        routineTimer.reset();
        }
    
    key_resp_weicheng1.stop();
    if (trial_weicheng1MaxDurationReached) {
        trial_weicheng1Clock.add(trial_weicheng1MaxDuration);
    } else {
        trial_weicheng1Clock.add(11.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_hongniu0MaxDurationReached;
var _key_resp_hongniu0_allKeys;
var trial_hongniu0MaxDuration;
var trial_hongniu0Components;
function trial_hongniu0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_hongniu0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_hongniu0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.200000);
    trial_hongniu0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_hongniu0.setValue('audio/hongniu0.wav');
    sound_hongniu0.secs=2.2;
    sound_hongniu0.setVolume(1.0);
    key_resp_hongniu0.keys = undefined;
    key_resp_hongniu0.rt = undefined;
    _key_resp_hongniu0_allKeys = [];
    psychoJS.experiment.addData('trial_hongniu0.started', globalClock.getTime());
    trial_hongniu0MaxDuration = null
    // keep track of which components have finished
    trial_hongniu0Components = [];
    trial_hongniu0Components.push(text_hongniu0);
    trial_hongniu0Components.push(sound_hongniu0);
    trial_hongniu0Components.push(text_15);
    trial_hongniu0Components.push(text_16);
    trial_hongniu0Components.push(key_resp_hongniu0);
    
    for (const thisComponent of trial_hongniu0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_hongniu0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_hongniu0' ---
    // get current time
    t = trial_hongniu0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_hongniu0* updates
    if (t >= 0.0 && text_hongniu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hongniu0.tStart = t;  // (not accounting for frame time here)
      text_hongniu0.frameNStart = frameN;  // exact frame index
      
      text_hongniu0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_hongniu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_hongniu0.setAutoDraw(false);
    }
    
    // start/stop sound_hongniu0
    if (t >= 4.0 && sound_hongniu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_hongniu0.tStart = t;  // (not accounting for frame time here)
      sound_hongniu0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_hongniu0.play(); });  // screen flip
      sound_hongniu0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_hongniu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_hongniu0.tStart + 0.5) {
        sound_hongniu0.stop();  // stop the sound (if longer than duration)
        sound_hongniu0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_15* updates
    if (t >= 3.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }
    
    
    // *text_16* updates
    if (t >= 6.2 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    frameRemains = 6.2 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_16.setAutoDraw(false);
    }
    
    
    // *key_resp_hongniu0* updates
    if (t >= 6.2 && key_resp_hongniu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_hongniu0.tStart = t;  // (not accounting for frame time here)
      key_resp_hongniu0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_hongniu0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongniu0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongniu0.clearEvents(); });
    }
    
    frameRemains = 6.2 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_hongniu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_hongniu0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_hongniu0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_hongniu0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_hongniu0_allKeys = _key_resp_hongniu0_allKeys.concat(theseKeys);
      if (_key_resp_hongniu0_allKeys.length > 0) {
        key_resp_hongniu0.keys = _key_resp_hongniu0_allKeys[0].name;  // just the first key pressed
        key_resp_hongniu0.rt = _key_resp_hongniu0_allKeys[0].rt;
        key_resp_hongniu0.duration = _key_resp_hongniu0_allKeys[0].duration;
        // was this correct?
        if (key_resp_hongniu0.keys == "'left'") {
            key_resp_hongniu0.corr = 1;
        } else {
            key_resp_hongniu0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_hongniu0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_hongniu0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_hongniu0' ---
    for (const thisComponent of trial_hongniu0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_hongniu0.stopped', globalClock.getTime());
    sound_hongniu0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_hongniu0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_hongniu0.corr = 1;  // correct non-response
      } else {
         key_resp_hongniu0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_hongniu0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_hongniu0.keys', key_resp_hongniu0.keys);
    psychoJS.experiment.addData('key_resp_hongniu0.corr', key_resp_hongniu0.corr);
    if (typeof key_resp_hongniu0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_hongniu0.rt', key_resp_hongniu0.rt);
        psychoJS.experiment.addData('key_resp_hongniu0.duration', key_resp_hongniu0.duration);
        routineTimer.reset();
        }
    
    key_resp_hongniu0.stop();
    if (trial_hongniu0MaxDurationReached) {
        trial_hongniu0Clock.add(trial_hongniu0MaxDuration);
    } else {
        trial_hongniu0Clock.add(11.200000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shirenMaxDurationReached;
var _key_resp_shiren_allKeys;
var trial_shirenMaxDuration;
var trial_shirenComponents;
function trial_shirenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shiren' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shirenClock.reset(routineTimer.getTime());
    routineTimer.add(11.200000);
    trial_shirenMaxDurationReached = false;
    // update component parameters for each repeat
    sound_shiren.setValue('audio/shiren.wav');
    sound_shiren.secs=2.2;
    sound_shiren.setVolume(1.0);
    key_resp_shiren.keys = undefined;
    key_resp_shiren.rt = undefined;
    _key_resp_shiren_allKeys = [];
    psychoJS.experiment.addData('trial_shiren.started', globalClock.getTime());
    trial_shirenMaxDuration = null
    // keep track of which components have finished
    trial_shirenComponents = [];
    trial_shirenComponents.push(text_shiren);
    trial_shirenComponents.push(sound_shiren);
    trial_shirenComponents.push(text_19);
    trial_shirenComponents.push(text_20);
    trial_shirenComponents.push(key_resp_shiren);
    
    for (const thisComponent of trial_shirenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shirenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shiren' ---
    // get current time
    t = trial_shirenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_shiren* updates
    if (t >= 0.0 && text_shiren.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shiren.tStart = t;  // (not accounting for frame time here)
      text_shiren.frameNStart = frameN;  // exact frame index
      
      text_shiren.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_shiren.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_shiren.setAutoDraw(false);
    }
    
    // start/stop sound_shiren
    if (t >= 4.0 && sound_shiren.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shiren.tStart = t;  // (not accounting for frame time here)
      sound_shiren.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shiren.play(); });  // screen flip
      sound_shiren.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shiren.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shiren.tStart + 0.5) {
        sound_shiren.stop();  // stop the sound (if longer than duration)
        sound_shiren.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_19* updates
    if (t >= 3.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_19.setAutoDraw(false);
    }
    
    
    // *text_20* updates
    if (t >= 6.2 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    frameRemains = 6.2 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_20.setAutoDraw(false);
    }
    
    
    // *key_resp_shiren* updates
    if (t >= 6.2 && key_resp_shiren.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shiren.tStart = t;  // (not accounting for frame time here)
      key_resp_shiren.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shiren.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shiren.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shiren.clearEvents(); });
    }
    
    frameRemains = 6.2 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shiren.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shiren.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shiren.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shiren.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shiren_allKeys = _key_resp_shiren_allKeys.concat(theseKeys);
      if (_key_resp_shiren_allKeys.length > 0) {
        key_resp_shiren.keys = _key_resp_shiren_allKeys[0].name;  // just the first key pressed
        key_resp_shiren.rt = _key_resp_shiren_allKeys[0].rt;
        key_resp_shiren.duration = _key_resp_shiren_allKeys[0].duration;
        // was this correct?
        if (key_resp_shiren.keys == "'left'") {
            key_resp_shiren.corr = 1;
        } else {
            key_resp_shiren.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shirenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shirenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shiren' ---
    for (const thisComponent of trial_shirenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shiren.stopped', globalClock.getTime());
    sound_shiren.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shiren.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_shiren.corr = 1;  // correct non-response
      } else {
         key_resp_shiren.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shiren.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shiren.keys', key_resp_shiren.keys);
    psychoJS.experiment.addData('key_resp_shiren.corr', key_resp_shiren.corr);
    if (typeof key_resp_shiren.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shiren.rt', key_resp_shiren.rt);
        psychoJS.experiment.addData('key_resp_shiren.duration', key_resp_shiren.duration);
        routineTimer.reset();
        }
    
    key_resp_shiren.stop();
    if (trial_shirenMaxDurationReached) {
        trial_shirenClock.add(trial_shirenMaxDuration);
    } else {
        trial_shirenClock.add(11.200000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_hongqi1MaxDurationReached;
var _key_resp_hongqi1_allKeys;
var trial_hongqi1MaxDuration;
var trial_hongqi1Components;
function trial_hongqi1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_hongqi1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_hongqi1Clock.reset(routineTimer.getTime());
    routineTimer.add(11.400000);
    trial_hongqi1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_hongqi1.setValue('audio/hongqi1.wav');
    sound_hongqi1.secs=2.4;
    sound_hongqi1.setVolume(1.0);
    key_resp_hongqi1.keys = undefined;
    key_resp_hongqi1.rt = undefined;
    _key_resp_hongqi1_allKeys = [];
    psychoJS.experiment.addData('trial_hongqi1.started', globalClock.getTime());
    trial_hongqi1MaxDuration = null
    // keep track of which components have finished
    trial_hongqi1Components = [];
    trial_hongqi1Components.push(text_hongqi1);
    trial_hongqi1Components.push(sound_hongqi1);
    trial_hongqi1Components.push(text_1ruodian1);
    trial_hongqi1Components.push(text_18);
    trial_hongqi1Components.push(key_resp_hongqi1);
    
    for (const thisComponent of trial_hongqi1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_hongqi1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_hongqi1' ---
    // get current time
    t = trial_hongqi1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_hongqi1* updates
    if (t >= 0.0 && text_hongqi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hongqi1.tStart = t;  // (not accounting for frame time here)
      text_hongqi1.frameNStart = frameN;  // exact frame index
      
      text_hongqi1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_hongqi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_hongqi1.setAutoDraw(false);
    }
    
    // start/stop sound_hongqi1
    if (t >= 4.0 && sound_hongqi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_hongqi1.tStart = t;  // (not accounting for frame time here)
      sound_hongqi1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_hongqi1.play(); });  // screen flip
      sound_hongqi1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_hongqi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_hongqi1.tStart + 0.5) {
        sound_hongqi1.stop();  // stop the sound (if longer than duration)
        sound_hongqi1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_1ruodian1* updates
    if (t >= 3.0 && text_1ruodian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1ruodian1.tStart = t;  // (not accounting for frame time here)
      text_1ruodian1.frameNStart = frameN;  // exact frame index
      
      text_1ruodian1.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1ruodian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_1ruodian1.setAutoDraw(false);
    }
    
    
    // *text_18* updates
    if (t >= 6.4 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    frameRemains = 6.4 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_18.setAutoDraw(false);
    }
    
    
    // *key_resp_hongqi1* updates
    if (t >= 6.4 && key_resp_hongqi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_hongqi1.tStart = t;  // (not accounting for frame time here)
      key_resp_hongqi1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_hongqi1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongqi1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongqi1.clearEvents(); });
    }
    
    frameRemains = 6.4 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_hongqi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_hongqi1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_hongqi1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_hongqi1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_hongqi1_allKeys = _key_resp_hongqi1_allKeys.concat(theseKeys);
      if (_key_resp_hongqi1_allKeys.length > 0) {
        key_resp_hongqi1.keys = _key_resp_hongqi1_allKeys[0].name;  // just the first key pressed
        key_resp_hongqi1.rt = _key_resp_hongqi1_allKeys[0].rt;
        key_resp_hongqi1.duration = _key_resp_hongqi1_allKeys[0].duration;
        // was this correct?
        if (key_resp_hongqi1.keys == "'right'") {
            key_resp_hongqi1.corr = 1;
        } else {
            key_resp_hongqi1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_hongqi1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_hongqi1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_hongqi1' ---
    for (const thisComponent of trial_hongqi1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_hongqi1.stopped', globalClock.getTime());
    sound_hongqi1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_hongqi1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_hongqi1.corr = 1;  // correct non-response
      } else {
         key_resp_hongqi1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_hongqi1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_hongqi1.keys', key_resp_hongqi1.keys);
    psychoJS.experiment.addData('key_resp_hongqi1.corr', key_resp_hongqi1.corr);
    if (typeof key_resp_hongqi1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_hongqi1.rt', key_resp_hongqi1.rt);
        psychoJS.experiment.addData('key_resp_hongqi1.duration', key_resp_hongqi1.duration);
        routineTimer.reset();
        }
    
    key_resp_hongqi1.stop();
    if (trial_hongqi1MaxDurationReached) {
        trial_hongqi1Clock.add(trial_hongqi1MaxDuration);
    } else {
        trial_hongqi1Clock.add(11.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_diannaoMaxDurationReached;
var _key_resp_diannao_allKeys;
var trial_diannaoMaxDuration;
var trial_diannaoComponents;
function trial_diannaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_diannao' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_diannaoClock.reset(routineTimer.getTime());
    routineTimer.add(11.100000);
    trial_diannaoMaxDurationReached = false;
    // update component parameters for each repeat
    sound_diannao.setValue('audio/diannao.wav');
    sound_diannao.secs=2.1;
    sound_diannao.setVolume(1.0);
    key_resp_diannao.keys = undefined;
    key_resp_diannao.rt = undefined;
    _key_resp_diannao_allKeys = [];
    psychoJS.experiment.addData('trial_diannao.started', globalClock.getTime());
    trial_diannaoMaxDuration = null
    // keep track of which components have finished
    trial_diannaoComponents = [];
    trial_diannaoComponents.push(text_diannao);
    trial_diannaoComponents.push(sound_diannao);
    trial_diannaoComponents.push(text_21);
    trial_diannaoComponents.push(text_22);
    trial_diannaoComponents.push(key_resp_diannao);
    
    for (const thisComponent of trial_diannaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_diannaoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_diannao' ---
    // get current time
    t = trial_diannaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_diannao* updates
    if (t >= 0.0 && text_diannao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_diannao.tStart = t;  // (not accounting for frame time here)
      text_diannao.frameNStart = frameN;  // exact frame index
      
      text_diannao.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_diannao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_diannao.setAutoDraw(false);
    }
    
    // start/stop sound_diannao
    if (t >= 4.0 && sound_diannao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_diannao.tStart = t;  // (not accounting for frame time here)
      sound_diannao.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_diannao.play(); });  // screen flip
      sound_diannao.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_diannao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_diannao.tStart + 0.5) {
        sound_diannao.stop();  // stop the sound (if longer than duration)
        sound_diannao.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_21* updates
    if (t >= 3.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_21.setAutoDraw(false);
    }
    
    
    // *text_22* updates
    if (t >= 6.1 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    frameRemains = 6.1 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_22.setAutoDraw(false);
    }
    
    
    // *key_resp_diannao* updates
    if (t >= 6.1 && key_resp_diannao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_diannao.tStart = t;  // (not accounting for frame time here)
      key_resp_diannao.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_diannao.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_diannao.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_diannao.clearEvents(); });
    }
    
    frameRemains = 6.1 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_diannao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_diannao.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_diannao.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_diannao.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_diannao_allKeys = _key_resp_diannao_allKeys.concat(theseKeys);
      if (_key_resp_diannao_allKeys.length > 0) {
        key_resp_diannao.keys = _key_resp_diannao_allKeys[0].name;  // just the first key pressed
        key_resp_diannao.rt = _key_resp_diannao_allKeys[0].rt;
        key_resp_diannao.duration = _key_resp_diannao_allKeys[0].duration;
        // was this correct?
        if (key_resp_diannao.keys == "'left'") {
            key_resp_diannao.corr = 1;
        } else {
            key_resp_diannao.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_diannaoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_diannaoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_diannao' ---
    for (const thisComponent of trial_diannaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_diannao.stopped', globalClock.getTime());
    sound_diannao.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_diannao.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_diannao.corr = 1;  // correct non-response
      } else {
         key_resp_diannao.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_diannao.corr, level);
    }
    psychoJS.experiment.addData('key_resp_diannao.keys', key_resp_diannao.keys);
    psychoJS.experiment.addData('key_resp_diannao.corr', key_resp_diannao.corr);
    if (typeof key_resp_diannao.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_diannao.rt', key_resp_diannao.rt);
        psychoJS.experiment.addData('key_resp_diannao.duration', key_resp_diannao.duration);
        routineTimer.reset();
        }
    
    key_resp_diannao.stop();
    if (trial_diannaoMaxDurationReached) {
        trial_diannaoClock.add(trial_diannaoMaxDuration);
    } else {
        trial_diannaoClock.add(11.100000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_qingshu1MaxDurationReached;
var _key_resp_3_allKeys;
var trial_qingshu1MaxDuration;
var trial_qingshu1Components;
function trial_qingshu1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_qingshu1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_qingshu1Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_qingshu1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_qingshu1.setValue('audio/qingshu1.wav');
    sound_qingshu1.secs=2.5;
    sound_qingshu1.setVolume(1.0);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('trial_qingshu1.started', globalClock.getTime());
    trial_qingshu1MaxDuration = null
    // keep track of which components have finished
    trial_qingshu1Components = [];
    trial_qingshu1Components.push(text_qingshu1);
    trial_qingshu1Components.push(sound_qingshu1);
    trial_qingshu1Components.push(text_23);
    trial_qingshu1Components.push(text_24);
    trial_qingshu1Components.push(key_resp_3);
    
    for (const thisComponent of trial_qingshu1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_qingshu1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_qingshu1' ---
    // get current time
    t = trial_qingshu1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_qingshu1* updates
    if (t >= 0.0 && text_qingshu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_qingshu1.tStart = t;  // (not accounting for frame time here)
      text_qingshu1.frameNStart = frameN;  // exact frame index
      
      text_qingshu1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_qingshu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_qingshu1.setAutoDraw(false);
    }
    
    // start/stop sound_qingshu1
    if (t >= 4.0 && sound_qingshu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_qingshu1.tStart = t;  // (not accounting for frame time here)
      sound_qingshu1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_qingshu1.play(); });  // screen flip
      sound_qingshu1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_qingshu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_qingshu1.tStart + 0.5) {
        sound_qingshu1.stop();  // stop the sound (if longer than duration)
        sound_qingshu1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_23* updates
    if (t >= 3.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_23.setAutoDraw(false);
    }
    
    
    // *text_24* updates
    if (t >= 6.5 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_24.setAutoDraw(false);
    }
    
    
    // *key_resp_3* updates
    if (t >= 6.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[0].name;  // just the first key pressed
        key_resp_3.rt = _key_resp_3_allKeys[0].rt;
        key_resp_3.duration = _key_resp_3_allKeys[0].duration;
        // was this correct?
        if (key_resp_3.keys == "'right'") {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_qingshu1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_qingshu1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_qingshu1' ---
    for (const thisComponent of trial_qingshu1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_qingshu1.stopped', globalClock.getTime());
    sound_qingshu1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    if (trial_qingshu1MaxDurationReached) {
        trial_qingshu1Clock.add(trial_qingshu1MaxDuration);
    } else {
        trial_qingshu1Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_niunaiMaxDurationReached;
var _key_resp_niunai_allKeys;
var trial_niunaiMaxDuration;
var trial_niunaiComponents;
function trial_niunaiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_niunai' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_niunaiClock.reset(routineTimer.getTime());
    routineTimer.add(11.400000);
    trial_niunaiMaxDurationReached = false;
    // update component parameters for each repeat
    sound_niunai.setValue('audio/niunai.wav');
    sound_niunai.secs=2.4;
    sound_niunai.setVolume(1.0);
    key_resp_niunai.keys = undefined;
    key_resp_niunai.rt = undefined;
    _key_resp_niunai_allKeys = [];
    psychoJS.experiment.addData('trial_niunai.started', globalClock.getTime());
    trial_niunaiMaxDuration = null
    // keep track of which components have finished
    trial_niunaiComponents = [];
    trial_niunaiComponents.push(text_niunai);
    trial_niunaiComponents.push(sound_niunai);
    trial_niunaiComponents.push(text_25);
    trial_niunaiComponents.push(text_26);
    trial_niunaiComponents.push(key_resp_niunai);
    
    for (const thisComponent of trial_niunaiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_niunaiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_niunai' ---
    // get current time
    t = trial_niunaiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_niunai* updates
    if (t >= 0.0 && text_niunai.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_niunai.tStart = t;  // (not accounting for frame time here)
      text_niunai.frameNStart = frameN;  // exact frame index
      
      text_niunai.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_niunai.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_niunai.setAutoDraw(false);
    }
    
    // start/stop sound_niunai
    if (t >= 4.0 && sound_niunai.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_niunai.tStart = t;  // (not accounting for frame time here)
      sound_niunai.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_niunai.play(); });  // screen flip
      sound_niunai.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_niunai.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_niunai.tStart + 0.5) {
        sound_niunai.stop();  // stop the sound (if longer than duration)
        sound_niunai.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_25* updates
    if (t >= 3.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_25.setAutoDraw(false);
    }
    
    
    // *text_26* updates
    if (t >= 6.4 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }
    
    frameRemains = 6.4 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_26.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_26.setAutoDraw(false);
    }
    
    
    // *key_resp_niunai* updates
    if (t >= 6.4 && key_resp_niunai.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_niunai.tStart = t;  // (not accounting for frame time here)
      key_resp_niunai.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_niunai.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_niunai.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_niunai.clearEvents(); });
    }
    
    frameRemains = 6.4 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_niunai.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_niunai.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_niunai.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_niunai.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_niunai_allKeys = _key_resp_niunai_allKeys.concat(theseKeys);
      if (_key_resp_niunai_allKeys.length > 0) {
        key_resp_niunai.keys = _key_resp_niunai_allKeys[0].name;  // just the first key pressed
        key_resp_niunai.rt = _key_resp_niunai_allKeys[0].rt;
        key_resp_niunai.duration = _key_resp_niunai_allKeys[0].duration;
        // was this correct?
        if (key_resp_niunai.keys == "'left'") {
            key_resp_niunai.corr = 1;
        } else {
            key_resp_niunai.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_niunaiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_niunaiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_niunai' ---
    for (const thisComponent of trial_niunaiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_niunai.stopped', globalClock.getTime());
    sound_niunai.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_niunai.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_niunai.corr = 1;  // correct non-response
      } else {
         key_resp_niunai.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_niunai.corr, level);
    }
    psychoJS.experiment.addData('key_resp_niunai.keys', key_resp_niunai.keys);
    psychoJS.experiment.addData('key_resp_niunai.corr', key_resp_niunai.corr);
    if (typeof key_resp_niunai.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_niunai.rt', key_resp_niunai.rt);
        psychoJS.experiment.addData('key_resp_niunai.duration', key_resp_niunai.duration);
        routineTimer.reset();
        }
    
    key_resp_niunai.stop();
    if (trial_niunaiMaxDurationReached) {
        trial_niunaiClock.add(trial_niunaiMaxDuration);
    } else {
        trial_niunaiClock.add(11.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baoma1MaxDurationReached;
var _key_resp_baoma1_allKeys;
var trial_baoma1MaxDuration;
var trial_baoma1Components;
function trial_baoma1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baoma1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baoma1Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_baoma1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baoma1.setValue('audio/baoma1.wav');
    sound_baoma1.secs=2.5;
    sound_baoma1.setVolume(1.0);
    key_resp_baoma1.keys = undefined;
    key_resp_baoma1.rt = undefined;
    _key_resp_baoma1_allKeys = [];
    psychoJS.experiment.addData('trial_baoma1.started', globalClock.getTime());
    trial_baoma1MaxDuration = null
    // keep track of which components have finished
    trial_baoma1Components = [];
    trial_baoma1Components.push(text_baoma1);
    trial_baoma1Components.push(sound_baoma1);
    trial_baoma1Components.push(text_27);
    trial_baoma1Components.push(text_28);
    trial_baoma1Components.push(key_resp_baoma1);
    
    for (const thisComponent of trial_baoma1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baoma1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baoma1' ---
    // get current time
    t = trial_baoma1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baoma1* updates
    if (t >= 0.0 && text_baoma1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baoma1.tStart = t;  // (not accounting for frame time here)
      text_baoma1.frameNStart = frameN;  // exact frame index
      
      text_baoma1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baoma1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baoma1.setAutoDraw(false);
    }
    
    // start/stop sound_baoma1
    if (t >= 4.0 && sound_baoma1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baoma1.tStart = t;  // (not accounting for frame time here)
      sound_baoma1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baoma1.play(); });  // screen flip
      sound_baoma1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baoma1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baoma1.tStart + 0.5) {
        sound_baoma1.stop();  // stop the sound (if longer than duration)
        sound_baoma1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_27* updates
    if (t >= 3.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_27.setAutoDraw(false);
    }
    
    
    // *text_28* updates
    if (t >= 6.5 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_28.setAutoDraw(false);
    }
    
    
    // *key_resp_baoma1* updates
    if (t >= 6.5 && key_resp_baoma1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baoma1.tStart = t;  // (not accounting for frame time here)
      key_resp_baoma1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baoma1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baoma1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baoma1.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baoma1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baoma1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baoma1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baoma1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baoma1_allKeys = _key_resp_baoma1_allKeys.concat(theseKeys);
      if (_key_resp_baoma1_allKeys.length > 0) {
        key_resp_baoma1.keys = _key_resp_baoma1_allKeys[0].name;  // just the first key pressed
        key_resp_baoma1.rt = _key_resp_baoma1_allKeys[0].rt;
        key_resp_baoma1.duration = _key_resp_baoma1_allKeys[0].duration;
        // was this correct?
        if (key_resp_baoma1.keys == "'right'") {
            key_resp_baoma1.corr = 1;
        } else {
            key_resp_baoma1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baoma1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baoma1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baoma1' ---
    for (const thisComponent of trial_baoma1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baoma1.stopped', globalClock.getTime());
    sound_baoma1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baoma1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_baoma1.corr = 1;  // correct non-response
      } else {
         key_resp_baoma1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baoma1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baoma1.keys', key_resp_baoma1.keys);
    psychoJS.experiment.addData('key_resp_baoma1.corr', key_resp_baoma1.corr);
    if (typeof key_resp_baoma1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baoma1.rt', key_resp_baoma1.rt);
        psychoJS.experiment.addData('key_resp_baoma1.duration', key_resp_baoma1.duration);
        routineTimer.reset();
        }
    
    key_resp_baoma1.stop();
    if (trial_baoma1MaxDurationReached) {
        trial_baoma1Clock.add(trial_baoma1MaxDuration);
    } else {
        trial_baoma1Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_jiaofu0MaxDurationReached;
var _key_resp_jiaofu0_allKeys;
var trial_jiaofu0MaxDuration;
var trial_jiaofu0Components;
function trial_jiaofu0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_jiaofu0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_jiaofu0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.600000);
    trial_jiaofu0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_jiaofu0.setValue('audio/jiaofu0.wav');
    sound_jiaofu0.secs=2.6;
    sound_jiaofu0.setVolume(1.0);
    key_resp_jiaofu0.keys = undefined;
    key_resp_jiaofu0.rt = undefined;
    _key_resp_jiaofu0_allKeys = [];
    psychoJS.experiment.addData('trial_jiaofu0.started', globalClock.getTime());
    trial_jiaofu0MaxDuration = null
    // keep track of which components have finished
    trial_jiaofu0Components = [];
    trial_jiaofu0Components.push(text_jiaofu0);
    trial_jiaofu0Components.push(sound_jiaofu0);
    trial_jiaofu0Components.push(text_29);
    trial_jiaofu0Components.push(text_30);
    trial_jiaofu0Components.push(key_resp_jiaofu0);
    
    for (const thisComponent of trial_jiaofu0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_jiaofu0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_jiaofu0' ---
    // get current time
    t = trial_jiaofu0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_jiaofu0* updates
    if (t >= 0.0 && text_jiaofu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_jiaofu0.tStart = t;  // (not accounting for frame time here)
      text_jiaofu0.frameNStart = frameN;  // exact frame index
      
      text_jiaofu0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_jiaofu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_jiaofu0.setAutoDraw(false);
    }
    
    // start/stop sound_jiaofu0
    if (t >= 4.0 && sound_jiaofu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_jiaofu0.tStart = t;  // (not accounting for frame time here)
      sound_jiaofu0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_jiaofu0.play(); });  // screen flip
      sound_jiaofu0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_jiaofu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_jiaofu0.tStart + 0.5) {
        sound_jiaofu0.stop();  // stop the sound (if longer than duration)
        sound_jiaofu0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_29* updates
    if (t >= 3 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }
    
    frameRemains = 3 + 3.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_29.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_29.setAutoDraw(false);
    }
    
    
    // *text_30* updates
    if (t >= 6.6 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_30.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_30.setAutoDraw(false);
    }
    
    
    // *key_resp_jiaofu0* updates
    if (t >= 6.6 && key_resp_jiaofu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_jiaofu0.tStart = t;  // (not accounting for frame time here)
      key_resp_jiaofu0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu0.clearEvents(); });
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_jiaofu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_jiaofu0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_jiaofu0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_jiaofu0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_jiaofu0_allKeys = _key_resp_jiaofu0_allKeys.concat(theseKeys);
      if (_key_resp_jiaofu0_allKeys.length > 0) {
        key_resp_jiaofu0.keys = _key_resp_jiaofu0_allKeys[0].name;  // just the first key pressed
        key_resp_jiaofu0.rt = _key_resp_jiaofu0_allKeys[0].rt;
        key_resp_jiaofu0.duration = _key_resp_jiaofu0_allKeys[0].duration;
        // was this correct?
        if (key_resp_jiaofu0.keys == "'left'") {
            key_resp_jiaofu0.corr = 1;
        } else {
            key_resp_jiaofu0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_jiaofu0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_jiaofu0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_jiaofu0' ---
    for (const thisComponent of trial_jiaofu0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_jiaofu0.stopped', globalClock.getTime());
    sound_jiaofu0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_jiaofu0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_jiaofu0.corr = 1;  // correct non-response
      } else {
         key_resp_jiaofu0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_jiaofu0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_jiaofu0.keys', key_resp_jiaofu0.keys);
    psychoJS.experiment.addData('key_resp_jiaofu0.corr', key_resp_jiaofu0.corr);
    if (typeof key_resp_jiaofu0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_jiaofu0.rt', key_resp_jiaofu0.rt);
        psychoJS.experiment.addData('key_resp_jiaofu0.duration', key_resp_jiaofu0.duration);
        routineTimer.reset();
        }
    
    key_resp_jiaofu0.stop();
    if (trial_jiaofu0MaxDurationReached) {
        trial_jiaofu0Clock.add(trial_jiaofu0MaxDuration);
    } else {
        trial_jiaofu0Clock.add(11.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_yintian0MaxDurationReached;
var _key_resp_yintian0_allKeys;
var trial_yintian0MaxDuration;
var trial_yintian0Components;
function trial_yintian0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_yintian0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_yintian0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_yintian0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_yintian0.setValue('audio/yintian0.wav');
    sound_yintian0.secs=2.5;
    sound_yintian0.setVolume(1.0);
    key_resp_yintian0.keys = undefined;
    key_resp_yintian0.rt = undefined;
    _key_resp_yintian0_allKeys = [];
    psychoJS.experiment.addData('trial_yintian0.started', globalClock.getTime());
    trial_yintian0MaxDuration = null
    // keep track of which components have finished
    trial_yintian0Components = [];
    trial_yintian0Components.push(text_yintian0);
    trial_yintian0Components.push(sound_yintian0);
    trial_yintian0Components.push(text_33);
    trial_yintian0Components.push(text_34);
    trial_yintian0Components.push(key_resp_yintian0);
    
    for (const thisComponent of trial_yintian0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_yintian0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_yintian0' ---
    // get current time
    t = trial_yintian0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_yintian0* updates
    if (t >= 0.0 && text_yintian0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_yintian0.tStart = t;  // (not accounting for frame time here)
      text_yintian0.frameNStart = frameN;  // exact frame index
      
      text_yintian0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_yintian0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_yintian0.setAutoDraw(false);
    }
    
    // start/stop sound_yintian0
    if (t >= 4.0 && sound_yintian0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_yintian0.tStart = t;  // (not accounting for frame time here)
      sound_yintian0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_yintian0.play(); });  // screen flip
      sound_yintian0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_yintian0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_yintian0.tStart + 0.5) {
        sound_yintian0.stop();  // stop the sound (if longer than duration)
        sound_yintian0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_33* updates
    if (t >= 3.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_33.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_33.setAutoDraw(false);
    }
    
    
    // *text_34* updates
    if (t >= 6.5 && text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_34.tStart = t;  // (not accounting for frame time here)
      text_34.frameNStart = frameN;  // exact frame index
      
      text_34.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_34.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_34.setAutoDraw(false);
    }
    
    
    // *key_resp_yintian0* updates
    if (t >= 6.5 && key_resp_yintian0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_yintian0.tStart = t;  // (not accounting for frame time here)
      key_resp_yintian0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_yintian0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yintian0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yintian0.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_yintian0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_yintian0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_yintian0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_yintian0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_yintian0_allKeys = _key_resp_yintian0_allKeys.concat(theseKeys);
      if (_key_resp_yintian0_allKeys.length > 0) {
        key_resp_yintian0.keys = _key_resp_yintian0_allKeys[0].name;  // just the first key pressed
        key_resp_yintian0.rt = _key_resp_yintian0_allKeys[0].rt;
        key_resp_yintian0.duration = _key_resp_yintian0_allKeys[0].duration;
        // was this correct?
        if (key_resp_yintian0.keys == "'left'") {
            key_resp_yintian0.corr = 1;
        } else {
            key_resp_yintian0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_yintian0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_yintian0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_yintian0' ---
    for (const thisComponent of trial_yintian0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_yintian0.stopped', globalClock.getTime());
    sound_yintian0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_yintian0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_yintian0.corr = 1;  // correct non-response
      } else {
         key_resp_yintian0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_yintian0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_yintian0.keys', key_resp_yintian0.keys);
    psychoJS.experiment.addData('key_resp_yintian0.corr', key_resp_yintian0.corr);
    if (typeof key_resp_yintian0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_yintian0.rt', key_resp_yintian0.rt);
        psychoJS.experiment.addData('key_resp_yintian0.duration', key_resp_yintian0.duration);
        routineTimer.reset();
        }
    
    key_resp_yintian0.stop();
    if (trial_yintian0MaxDurationReached) {
        trial_yintian0Clock.add(trial_yintian0MaxDuration);
    } else {
        trial_yintian0Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_chaguan0MaxDurationReached;
var _key_resp_chaguan0_allKeys;
var trial_chaguan0MaxDuration;
var trial_chaguan0Components;
function trial_chaguan0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_chaguan0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_chaguan0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_chaguan0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_chaguan0.setValue('audio/chaguan0.wav');
    sound_chaguan0.secs=2.5;
    sound_chaguan0.setVolume(1.0);
    key_resp_chaguan0.keys = undefined;
    key_resp_chaguan0.rt = undefined;
    _key_resp_chaguan0_allKeys = [];
    psychoJS.experiment.addData('trial_chaguan0.started', globalClock.getTime());
    trial_chaguan0MaxDuration = null
    // keep track of which components have finished
    trial_chaguan0Components = [];
    trial_chaguan0Components.push(text_chaguan0);
    trial_chaguan0Components.push(sound_chaguan0);
    trial_chaguan0Components.push(text_35);
    trial_chaguan0Components.push(text_36);
    trial_chaguan0Components.push(key_resp_chaguan0);
    
    for (const thisComponent of trial_chaguan0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_chaguan0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_chaguan0' ---
    // get current time
    t = trial_chaguan0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_chaguan0* updates
    if (t >= 0.0 && text_chaguan0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_chaguan0.tStart = t;  // (not accounting for frame time here)
      text_chaguan0.frameNStart = frameN;  // exact frame index
      
      text_chaguan0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_chaguan0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_chaguan0.setAutoDraw(false);
    }
    
    // start/stop sound_chaguan0
    if (t >= 4.0 && sound_chaguan0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_chaguan0.tStart = t;  // (not accounting for frame time here)
      sound_chaguan0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_chaguan0.play(); });  // screen flip
      sound_chaguan0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_chaguan0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_chaguan0.tStart + 0.5) {
        sound_chaguan0.stop();  // stop the sound (if longer than duration)
        sound_chaguan0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_35* updates
    if (t >= 3.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_35.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_35.setAutoDraw(false);
    }
    
    
    // *text_36* updates
    if (t >= 6.5 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_36.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_36.setAutoDraw(false);
    }
    
    
    // *key_resp_chaguan0* updates
    if (t >= 6.5 && key_resp_chaguan0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_chaguan0.tStart = t;  // (not accounting for frame time here)
      key_resp_chaguan0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_chaguan0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chaguan0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chaguan0.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_chaguan0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_chaguan0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_chaguan0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_chaguan0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_chaguan0_allKeys = _key_resp_chaguan0_allKeys.concat(theseKeys);
      if (_key_resp_chaguan0_allKeys.length > 0) {
        key_resp_chaguan0.keys = _key_resp_chaguan0_allKeys[0].name;  // just the first key pressed
        key_resp_chaguan0.rt = _key_resp_chaguan0_allKeys[0].rt;
        key_resp_chaguan0.duration = _key_resp_chaguan0_allKeys[0].duration;
        // was this correct?
        if (key_resp_chaguan0.keys == "'left'") {
            key_resp_chaguan0.corr = 1;
        } else {
            key_resp_chaguan0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_chaguan0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_chaguan0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_chaguan0' ---
    for (const thisComponent of trial_chaguan0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_chaguan0.stopped', globalClock.getTime());
    sound_chaguan0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_chaguan0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_chaguan0.corr = 1;  // correct non-response
      } else {
         key_resp_chaguan0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_chaguan0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_chaguan0.keys', key_resp_chaguan0.keys);
    psychoJS.experiment.addData('key_resp_chaguan0.corr', key_resp_chaguan0.corr);
    if (typeof key_resp_chaguan0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_chaguan0.rt', key_resp_chaguan0.rt);
        psychoJS.experiment.addData('key_resp_chaguan0.duration', key_resp_chaguan0.duration);
        routineTimer.reset();
        }
    
    key_resp_chaguan0.stop();
    if (trial_chaguan0MaxDurationReached) {
        trial_chaguan0Clock.add(trial_chaguan0MaxDuration);
    } else {
        trial_chaguan0Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shuyeMaxDurationReached;
var _key_resp_shuye_allKeys;
var trial_shuyeMaxDuration;
var trial_shuyeComponents;
function trial_shuyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shuye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shuyeClock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_shuyeMaxDurationReached = false;
    // update component parameters for each repeat
    sound_shuye.setValue('audio/shuye.wav');
    sound_shuye.secs=2.5;
    sound_shuye.setVolume(1.0);
    key_resp_shuye.keys = undefined;
    key_resp_shuye.rt = undefined;
    _key_resp_shuye_allKeys = [];
    psychoJS.experiment.addData('trial_shuye.started', globalClock.getTime());
    trial_shuyeMaxDuration = null
    // keep track of which components have finished
    trial_shuyeComponents = [];
    trial_shuyeComponents.push(shuye);
    trial_shuyeComponents.push(sound_shuye);
    trial_shuyeComponents.push(text_163);
    trial_shuyeComponents.push(text_164);
    trial_shuyeComponents.push(key_resp_shuye);
    
    for (const thisComponent of trial_shuyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shuyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shuye' ---
    // get current time
    t = trial_shuyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *shuye* updates
    if (t >= 0.0 && shuye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shuye.tStart = t;  // (not accounting for frame time here)
      shuye.frameNStart = frameN;  // exact frame index
      
      shuye.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (shuye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      shuye.setAutoDraw(false);
    }
    
    // start/stop sound_shuye
    if (t >= 4.0 && sound_shuye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shuye.tStart = t;  // (not accounting for frame time here)
      sound_shuye.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shuye.play(); });  // screen flip
      sound_shuye.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shuye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shuye.tStart + 0.5) {
        sound_shuye.stop();  // stop the sound (if longer than duration)
        sound_shuye.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_163* updates
    if (t >= 3.0 && text_163.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_163.tStart = t;  // (not accounting for frame time here)
      text_163.frameNStart = frameN;  // exact frame index
      
      text_163.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_163.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_163.setAutoDraw(false);
    }
    
    
    // *text_164* updates
    if (t >= 6.5 && text_164.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_164.tStart = t;  // (not accounting for frame time here)
      text_164.frameNStart = frameN;  // exact frame index
      
      text_164.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_164.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_164.setAutoDraw(false);
    }
    
    
    // *key_resp_shuye* updates
    if (t >= 6.5 && key_resp_shuye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shuye.tStart = t;  // (not accounting for frame time here)
      key_resp_shuye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shuye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shuye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shuye.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shuye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shuye.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shuye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shuye.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shuye_allKeys = _key_resp_shuye_allKeys.concat(theseKeys);
      if (_key_resp_shuye_allKeys.length > 0) {
        key_resp_shuye.keys = _key_resp_shuye_allKeys[0].name;  // just the first key pressed
        key_resp_shuye.rt = _key_resp_shuye_allKeys[0].rt;
        key_resp_shuye.duration = _key_resp_shuye_allKeys[0].duration;
        // was this correct?
        if (key_resp_shuye.keys == "'left'") {
            key_resp_shuye.corr = 1;
        } else {
            key_resp_shuye.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shuyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shuyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shuye' ---
    for (const thisComponent of trial_shuyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shuye.stopped', globalClock.getTime());
    sound_shuye.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shuye.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_shuye.corr = 1;  // correct non-response
      } else {
         key_resp_shuye.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shuye.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shuye.keys', key_resp_shuye.keys);
    psychoJS.experiment.addData('key_resp_shuye.corr', key_resp_shuye.corr);
    if (typeof key_resp_shuye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shuye.rt', key_resp_shuye.rt);
        psychoJS.experiment.addData('key_resp_shuye.duration', key_resp_shuye.duration);
        routineTimer.reset();
        }
    
    key_resp_shuye.stop();
    if (trial_shuyeMaxDurationReached) {
        trial_shuyeClock.add(trial_shuyeMaxDuration);
    } else {
        trial_shuyeClock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baixiang0MaxDurationReached;
var _key_resp_baixiang0_allKeys;
var trial_baixiang0MaxDuration;
var trial_baixiang0Components;
function trial_baixiang0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baixiang0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baixiang0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.400000);
    trial_baixiang0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baixiang0.setValue('audio/baixiang0.wav');
    sound_baixiang0.secs=2.4;
    sound_baixiang0.setVolume(1.0);
    key_resp_baixiang0.keys = undefined;
    key_resp_baixiang0.rt = undefined;
    _key_resp_baixiang0_allKeys = [];
    psychoJS.experiment.addData('trial_baixiang0.started', globalClock.getTime());
    trial_baixiang0MaxDuration = null
    // keep track of which components have finished
    trial_baixiang0Components = [];
    trial_baixiang0Components.push(text_baixiang0);
    trial_baixiang0Components.push(sound_baixiang0);
    trial_baixiang0Components.push(text_37);
    trial_baixiang0Components.push(text_38);
    trial_baixiang0Components.push(key_resp_baixiang0);
    
    for (const thisComponent of trial_baixiang0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baixiang0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baixiang0' ---
    // get current time
    t = trial_baixiang0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baixiang0* updates
    if (t >= 0.0 && text_baixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baixiang0.tStart = t;  // (not accounting for frame time here)
      text_baixiang0.frameNStart = frameN;  // exact frame index
      
      text_baixiang0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baixiang0.setAutoDraw(false);
    }
    
    // start/stop sound_baixiang0
    if (t >= 4.0 && sound_baixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baixiang0.tStart = t;  // (not accounting for frame time here)
      sound_baixiang0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baixiang0.play(); });  // screen flip
      sound_baixiang0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baixiang0.tStart + 0.5) {
        sound_baixiang0.stop();  // stop the sound (if longer than duration)
        sound_baixiang0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_37* updates
    if (t >= 3 && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }
    
    frameRemains = 3 + 3.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_37.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_37.setAutoDraw(false);
    }
    
    
    // *text_38* updates
    if (t >= 6.4 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }
    
    frameRemains = 6.4 + 4.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_38.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_38.setAutoDraw(false);
    }
    
    
    // *key_resp_baixiang0* updates
    if (t >= 6.4 && key_resp_baixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baixiang0.tStart = t;  // (not accounting for frame time here)
      key_resp_baixiang0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baixiang0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baixiang0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baixiang0.clearEvents(); });
    }
    
    frameRemains = 6.4 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baixiang0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baixiang0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baixiang0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baixiang0_allKeys = _key_resp_baixiang0_allKeys.concat(theseKeys);
      if (_key_resp_baixiang0_allKeys.length > 0) {
        key_resp_baixiang0.keys = _key_resp_baixiang0_allKeys[0].name;  // just the first key pressed
        key_resp_baixiang0.rt = _key_resp_baixiang0_allKeys[0].rt;
        key_resp_baixiang0.duration = _key_resp_baixiang0_allKeys[0].duration;
        // was this correct?
        if (key_resp_baixiang0.keys == "'left'") {
            key_resp_baixiang0.corr = 1;
        } else {
            key_resp_baixiang0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baixiang0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baixiang0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baixiang0' ---
    for (const thisComponent of trial_baixiang0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baixiang0.stopped', globalClock.getTime());
    sound_baixiang0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baixiang0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_baixiang0.corr = 1;  // correct non-response
      } else {
         key_resp_baixiang0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baixiang0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baixiang0.keys', key_resp_baixiang0.keys);
    psychoJS.experiment.addData('key_resp_baixiang0.corr', key_resp_baixiang0.corr);
    if (typeof key_resp_baixiang0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baixiang0.rt', key_resp_baixiang0.rt);
        psychoJS.experiment.addData('key_resp_baixiang0.duration', key_resp_baixiang0.duration);
        routineTimer.reset();
        }
    
    key_resp_baixiang0.stop();
    if (trial_baixiang0MaxDurationReached) {
        trial_baixiang0Clock.add(trial_baixiang0MaxDuration);
    } else {
        trial_baixiang0Clock.add(11.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_sinian1MaxDurationReached;
var _key_resp_sinian1_allKeys;
var trial_sinian1MaxDuration;
var trial_sinian1Components;
function trial_sinian1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_sinian1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_sinian1Clock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_sinian1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_sinian1.setValue('audio/sinian1.wav');
    sound_sinian1.secs=2.5;
    sound_sinian1.setVolume(1.0);
    key_resp_sinian1.keys = undefined;
    key_resp_sinian1.rt = undefined;
    _key_resp_sinian1_allKeys = [];
    psychoJS.experiment.addData('trial_sinian1.started', globalClock.getTime());
    trial_sinian1MaxDuration = null
    // keep track of which components have finished
    trial_sinian1Components = [];
    trial_sinian1Components.push(text_sinian1);
    trial_sinian1Components.push(sound_sinian1);
    trial_sinian1Components.push(text_39);
    trial_sinian1Components.push(text_40);
    trial_sinian1Components.push(key_resp_sinian1);
    
    for (const thisComponent of trial_sinian1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_sinian1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_sinian1' ---
    // get current time
    t = trial_sinian1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_sinian1* updates
    if (t >= 0.0 && text_sinian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sinian1.tStart = t;  // (not accounting for frame time here)
      text_sinian1.frameNStart = frameN;  // exact frame index
      
      text_sinian1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_sinian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sinian1.setAutoDraw(false);
    }
    
    // start/stop sound_sinian1
    if (t >= 4.0 && sound_sinian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_sinian1.tStart = t;  // (not accounting for frame time here)
      sound_sinian1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_sinian1.play(); });  // screen flip
      sound_sinian1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_sinian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_sinian1.tStart + 0.5) {
        sound_sinian1.stop();  // stop the sound (if longer than duration)
        sound_sinian1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_39* updates
    if (t >= 3.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_39.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_39.setAutoDraw(false);
    }
    
    
    // *text_40* updates
    if (t >= 6.5 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_40.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_40.setAutoDraw(false);
    }
    
    
    // *key_resp_sinian1* updates
    if (t >= 6.5 && key_resp_sinian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_sinian1.tStart = t;  // (not accounting for frame time here)
      key_resp_sinian1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_sinian1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sinian1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sinian1.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_sinian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_sinian1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_sinian1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sinian1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_sinian1_allKeys = _key_resp_sinian1_allKeys.concat(theseKeys);
      if (_key_resp_sinian1_allKeys.length > 0) {
        key_resp_sinian1.keys = _key_resp_sinian1_allKeys[0].name;  // just the first key pressed
        key_resp_sinian1.rt = _key_resp_sinian1_allKeys[0].rt;
        key_resp_sinian1.duration = _key_resp_sinian1_allKeys[0].duration;
        // was this correct?
        if (key_resp_sinian1.keys == "'right'") {
            key_resp_sinian1.corr = 1;
        } else {
            key_resp_sinian1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_sinian1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_sinian1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_sinian1' ---
    for (const thisComponent of trial_sinian1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_sinian1.stopped', globalClock.getTime());
    sound_sinian1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_sinian1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_sinian1.corr = 1;  // correct non-response
      } else {
         key_resp_sinian1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_sinian1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_sinian1.keys', key_resp_sinian1.keys);
    psychoJS.experiment.addData('key_resp_sinian1.corr', key_resp_sinian1.corr);
    if (typeof key_resp_sinian1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_sinian1.rt', key_resp_sinian1.rt);
        psychoJS.experiment.addData('key_resp_sinian1.duration', key_resp_sinian1.duration);
        routineTimer.reset();
        }
    
    key_resp_sinian1.stop();
    if (trial_sinian1MaxDurationReached) {
        trial_sinian1Clock.add(trial_sinian1MaxDuration);
    } else {
        trial_sinian1Clock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_chengshiMaxDurationReached;
var _key_resp_chengshi_allKeys;
var trial_chengshiMaxDuration;
var trial_chengshiComponents;
function trial_chengshiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_chengshi' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_chengshiClock.reset(routineTimer.getTime());
    routineTimer.add(11.600000);
    trial_chengshiMaxDurationReached = false;
    // update component parameters for each repeat
    sound_chengshi.setValue('audio/chengshi.wav');
    sound_chengshi.secs=2.6;
    sound_chengshi.setVolume(1.0);
    key_resp_chengshi.keys = undefined;
    key_resp_chengshi.rt = undefined;
    _key_resp_chengshi_allKeys = [];
    psychoJS.experiment.addData('trial_chengshi.started', globalClock.getTime());
    trial_chengshiMaxDuration = null
    // keep track of which components have finished
    trial_chengshiComponents = [];
    trial_chengshiComponents.push(text_chengshi);
    trial_chengshiComponents.push(sound_chengshi);
    trial_chengshiComponents.push(text_151);
    trial_chengshiComponents.push(text_152);
    trial_chengshiComponents.push(key_resp_chengshi);
    
    for (const thisComponent of trial_chengshiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_chengshiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_chengshi' ---
    // get current time
    t = trial_chengshiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_chengshi* updates
    if (t >= 0.0 && text_chengshi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_chengshi.tStart = t;  // (not accounting for frame time here)
      text_chengshi.frameNStart = frameN;  // exact frame index
      
      text_chengshi.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_chengshi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_chengshi.setAutoDraw(false);
    }
    
    // start/stop sound_chengshi
    if (t >= 4 && sound_chengshi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_chengshi.tStart = t;  // (not accounting for frame time here)
      sound_chengshi.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_chengshi.play(); });  // screen flip
      sound_chengshi.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 2.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_chengshi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_chengshi.tStart + 0.5) {
        sound_chengshi.stop();  // stop the sound (if longer than duration)
        sound_chengshi.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_151* updates
    if (t >= 3.0 && text_151.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_151.tStart = t;  // (not accounting for frame time here)
      text_151.frameNStart = frameN;  // exact frame index
      
      text_151.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_151.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_151.setAutoDraw(false);
    }
    
    
    // *text_152* updates
    if (t >= 6.6 && text_152.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_152.tStart = t;  // (not accounting for frame time here)
      text_152.frameNStart = frameN;  // exact frame index
      
      text_152.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_152.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_152.setAutoDraw(false);
    }
    
    
    // *key_resp_chengshi* updates
    if (t >= 6.6 && key_resp_chengshi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_chengshi.tStart = t;  // (not accounting for frame time here)
      key_resp_chengshi.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_chengshi.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chengshi.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chengshi.clearEvents(); });
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_chengshi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_chengshi.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_chengshi.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_chengshi.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_chengshi_allKeys = _key_resp_chengshi_allKeys.concat(theseKeys);
      if (_key_resp_chengshi_allKeys.length > 0) {
        key_resp_chengshi.keys = _key_resp_chengshi_allKeys[0].name;  // just the first key pressed
        key_resp_chengshi.rt = _key_resp_chengshi_allKeys[0].rt;
        key_resp_chengshi.duration = _key_resp_chengshi_allKeys[0].duration;
        // was this correct?
        if (key_resp_chengshi.keys == "'left'") {
            key_resp_chengshi.corr = 1;
        } else {
            key_resp_chengshi.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_chengshiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_chengshiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_chengshi' ---
    for (const thisComponent of trial_chengshiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_chengshi.stopped', globalClock.getTime());
    sound_chengshi.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_chengshi.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_chengshi.corr = 1;  // correct non-response
      } else {
         key_resp_chengshi.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_chengshi.corr, level);
    }
    psychoJS.experiment.addData('key_resp_chengshi.keys', key_resp_chengshi.keys);
    psychoJS.experiment.addData('key_resp_chengshi.corr', key_resp_chengshi.corr);
    if (typeof key_resp_chengshi.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_chengshi.rt', key_resp_chengshi.rt);
        psychoJS.experiment.addData('key_resp_chengshi.duration', key_resp_chengshi.duration);
        routineTimer.reset();
        }
    
    key_resp_chengshi.stop();
    if (trial_chengshiMaxDurationReached) {
        trial_chengshiClock.add(trial_chengshiMaxDuration);
    } else {
        trial_chengshiClock.add(11.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_sinian0MaxDurationReached;
var _key_resp_sinian0_allKeys;
var trial_sinian0MaxDuration;
var trial_sinian0Components;
function trial_sinian0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_sinian0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_sinian0Clock.reset(routineTimer.getTime());
    routineTimer.add(11.600000);
    trial_sinian0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_sinian.setValue('audio/sinian0.wav');
    sound_sinian.secs=2.6;
    sound_sinian.setVolume(1.0);
    key_resp_sinian0.keys = undefined;
    key_resp_sinian0.rt = undefined;
    _key_resp_sinian0_allKeys = [];
    psychoJS.experiment.addData('trial_sinian0.started', globalClock.getTime());
    trial_sinian0MaxDuration = null
    // keep track of which components have finished
    trial_sinian0Components = [];
    trial_sinian0Components.push(text_sinian0);
    trial_sinian0Components.push(sound_sinian);
    trial_sinian0Components.push(text_41);
    trial_sinian0Components.push(text_42);
    trial_sinian0Components.push(key_resp_sinian0);
    
    for (const thisComponent of trial_sinian0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_sinian0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_sinian0' ---
    // get current time
    t = trial_sinian0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_sinian0* updates
    if (t >= 0.0 && text_sinian0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sinian0.tStart = t;  // (not accounting for frame time here)
      text_sinian0.frameNStart = frameN;  // exact frame index
      
      text_sinian0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_sinian0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sinian0.setAutoDraw(false);
    }
    
    // start/stop sound_sinian
    if (t >= 4.0 && sound_sinian.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_sinian.tStart = t;  // (not accounting for frame time here)
      sound_sinian.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_sinian.play(); });  // screen flip
      sound_sinian.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_sinian.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_sinian.tStart + 0.5) {
        sound_sinian.stop();  // stop the sound (if longer than duration)
        sound_sinian.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_41* updates
    if (t >= 3.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_41.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_41.setAutoDraw(false);
    }
    
    
    // *text_42* updates
    if (t >= 6.6 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_42.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_42.setAutoDraw(false);
    }
    
    
    // *key_resp_sinian0* updates
    if (t >= 6.6 && key_resp_sinian0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_sinian0.tStart = t;  // (not accounting for frame time here)
      key_resp_sinian0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_sinian0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sinian0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_sinian0.clearEvents(); });
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_sinian0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_sinian0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_sinian0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_sinian0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_sinian0_allKeys = _key_resp_sinian0_allKeys.concat(theseKeys);
      if (_key_resp_sinian0_allKeys.length > 0) {
        key_resp_sinian0.keys = _key_resp_sinian0_allKeys[0].name;  // just the first key pressed
        key_resp_sinian0.rt = _key_resp_sinian0_allKeys[0].rt;
        key_resp_sinian0.duration = _key_resp_sinian0_allKeys[0].duration;
        // was this correct?
        if (key_resp_sinian0.keys == "'left'") {
            key_resp_sinian0.corr = 1;
        } else {
            key_resp_sinian0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_sinian0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_sinian0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_sinian0' ---
    for (const thisComponent of trial_sinian0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_sinian0.stopped', globalClock.getTime());
    sound_sinian.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_sinian0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_sinian0.corr = 1;  // correct non-response
      } else {
         key_resp_sinian0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_sinian0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_sinian0.keys', key_resp_sinian0.keys);
    psychoJS.experiment.addData('key_resp_sinian0.corr', key_resp_sinian0.corr);
    if (typeof key_resp_sinian0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_sinian0.rt', key_resp_sinian0.rt);
        psychoJS.experiment.addData('key_resp_sinian0.duration', key_resp_sinian0.duration);
        routineTimer.reset();
        }
    
    key_resp_sinian0.stop();
    if (trial_sinian0MaxDurationReached) {
        trial_sinian0Clock.add(trial_sinian0MaxDuration);
    } else {
        trial_sinian0Clock.add(11.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_xiaoshuoMaxDurationReached;
var _key_resp_xiaoshuo_allKeys;
var trial_xiaoshuoMaxDuration;
var trial_xiaoshuoComponents;
function trial_xiaoshuoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_xiaoshuo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_xiaoshuoClock.reset(routineTimer.getTime());
    routineTimer.add(11.500000);
    trial_xiaoshuoMaxDurationReached = false;
    // update component parameters for each repeat
    sound_xiaoshuo.setValue('audio/xiaoshuo.wav');
    sound_xiaoshuo.secs=2.5;
    sound_xiaoshuo.setVolume(1.0);
    key_resp_xiaoshuo.keys = undefined;
    key_resp_xiaoshuo.rt = undefined;
    _key_resp_xiaoshuo_allKeys = [];
    psychoJS.experiment.addData('trial_xiaoshuo.started', globalClock.getTime());
    trial_xiaoshuoMaxDuration = null
    // keep track of which components have finished
    trial_xiaoshuoComponents = [];
    trial_xiaoshuoComponents.push(text_xiaoshuo);
    trial_xiaoshuoComponents.push(sound_xiaoshuo);
    trial_xiaoshuoComponents.push(text_43);
    trial_xiaoshuoComponents.push(text_44);
    trial_xiaoshuoComponents.push(key_resp_xiaoshuo);
    
    for (const thisComponent of trial_xiaoshuoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_xiaoshuoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_xiaoshuo' ---
    // get current time
    t = trial_xiaoshuoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_xiaoshuo* updates
    if (t >= 0.0 && text_xiaoshuo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_xiaoshuo.tStart = t;  // (not accounting for frame time here)
      text_xiaoshuo.frameNStart = frameN;  // exact frame index
      
      text_xiaoshuo.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_xiaoshuo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_xiaoshuo.setAutoDraw(false);
    }
    
    // start/stop sound_xiaoshuo
    if (t >= 4.0 && sound_xiaoshuo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_xiaoshuo.tStart = t;  // (not accounting for frame time here)
      sound_xiaoshuo.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_xiaoshuo.play(); });  // screen flip
      sound_xiaoshuo.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_xiaoshuo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_xiaoshuo.tStart + 0.5) {
        sound_xiaoshuo.stop();  // stop the sound (if longer than duration)
        sound_xiaoshuo.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_43* updates
    if (t >= 3.0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_43.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_43.setAutoDraw(false);
    }
    
    
    // *text_44* updates
    if (t >= 6.5 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_44.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_44.setAutoDraw(false);
    }
    
    
    // *key_resp_xiaoshuo* updates
    if (t >= 6.5 && key_resp_xiaoshuo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_xiaoshuo.tStart = t;  // (not accounting for frame time here)
      key_resp_xiaoshuo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_xiaoshuo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiaoshuo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiaoshuo.clearEvents(); });
    }
    
    frameRemains = 6.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_xiaoshuo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_xiaoshuo.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_xiaoshuo.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_xiaoshuo.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_xiaoshuo_allKeys = _key_resp_xiaoshuo_allKeys.concat(theseKeys);
      if (_key_resp_xiaoshuo_allKeys.length > 0) {
        key_resp_xiaoshuo.keys = _key_resp_xiaoshuo_allKeys[0].name;  // just the first key pressed
        key_resp_xiaoshuo.rt = _key_resp_xiaoshuo_allKeys[0].rt;
        key_resp_xiaoshuo.duration = _key_resp_xiaoshuo_allKeys[0].duration;
        // was this correct?
        if (key_resp_xiaoshuo.keys == "'left'") {
            key_resp_xiaoshuo.corr = 1;
        } else {
            key_resp_xiaoshuo.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_xiaoshuoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_xiaoshuoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_xiaoshuo' ---
    for (const thisComponent of trial_xiaoshuoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_xiaoshuo.stopped', globalClock.getTime());
    sound_xiaoshuo.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_xiaoshuo.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_xiaoshuo.corr = 1;  // correct non-response
      } else {
         key_resp_xiaoshuo.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_xiaoshuo.corr, level);
    }
    psychoJS.experiment.addData('key_resp_xiaoshuo.keys', key_resp_xiaoshuo.keys);
    psychoJS.experiment.addData('key_resp_xiaoshuo.corr', key_resp_xiaoshuo.corr);
    if (typeof key_resp_xiaoshuo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_xiaoshuo.rt', key_resp_xiaoshuo.rt);
        psychoJS.experiment.addData('key_resp_xiaoshuo.duration', key_resp_xiaoshuo.duration);
        routineTimer.reset();
        }
    
    key_resp_xiaoshuo.stop();
    if (trial_xiaoshuoMaxDurationReached) {
        trial_xiaoshuoClock.add(trial_xiaoshuoMaxDuration);
    } else {
        trial_xiaoshuoClock.add(11.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_fuqin0MaxDurationReached;
var _key_resp_fuqin0_allKeys;
var trial_fuqin0MaxDuration;
var trial_fuqin0Components;
function trial_fuqin0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_fuqin0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_fuqin0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.300000);
    trial_fuqin0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_fuqin0.setValue('audio/fuqin0.wav');
    sound_fuqin0.secs=3.3;
    sound_fuqin0.setVolume(1.0);
    key_resp_fuqin0.keys = undefined;
    key_resp_fuqin0.rt = undefined;
    _key_resp_fuqin0_allKeys = [];
    psychoJS.experiment.addData('trial_fuqin0.started', globalClock.getTime());
    trial_fuqin0MaxDuration = null
    // keep track of which components have finished
    trial_fuqin0Components = [];
    trial_fuqin0Components.push(text_fuqin0);
    trial_fuqin0Components.push(sound_fuqin0);
    trial_fuqin0Components.push(text_45);
    trial_fuqin0Components.push(text_46);
    trial_fuqin0Components.push(key_resp_fuqin0);
    
    for (const thisComponent of trial_fuqin0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_fuqin0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_fuqin0' ---
    // get current time
    t = trial_fuqin0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_fuqin0* updates
    if (t >= 0.0 && text_fuqin0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fuqin0.tStart = t;  // (not accounting for frame time here)
      text_fuqin0.frameNStart = frameN;  // exact frame index
      
      text_fuqin0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fuqin0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fuqin0.setAutoDraw(false);
    }
    
    // start/stop sound_fuqin0
    if (t >= 4.0 && sound_fuqin0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_fuqin0.tStart = t;  // (not accounting for frame time here)
      sound_fuqin0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_fuqin0.play(); });  // screen flip
      sound_fuqin0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_fuqin0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_fuqin0.tStart + 0.5) {
        sound_fuqin0.stop();  // stop the sound (if longer than duration)
        sound_fuqin0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_45* updates
    if (t >= 3.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_45.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_45.setAutoDraw(false);
    }
    
    
    // *text_46* updates
    if (t >= 7.3 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }
    
    frameRemains = 7.3 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_46.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_46.setAutoDraw(false);
    }
    
    
    // *key_resp_fuqin0* updates
    if (t >= 7.3 && key_resp_fuqin0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_fuqin0.tStart = t;  // (not accounting for frame time here)
      key_resp_fuqin0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_fuqin0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_fuqin0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_fuqin0.clearEvents(); });
    }
    
    frameRemains = 7.3 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_fuqin0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_fuqin0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_fuqin0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_fuqin0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_fuqin0_allKeys = _key_resp_fuqin0_allKeys.concat(theseKeys);
      if (_key_resp_fuqin0_allKeys.length > 0) {
        key_resp_fuqin0.keys = _key_resp_fuqin0_allKeys[0].name;  // just the first key pressed
        key_resp_fuqin0.rt = _key_resp_fuqin0_allKeys[0].rt;
        key_resp_fuqin0.duration = _key_resp_fuqin0_allKeys[0].duration;
        // was this correct?
        if (key_resp_fuqin0.keys == "'left'") {
            key_resp_fuqin0.corr = 1;
        } else {
            key_resp_fuqin0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_fuqin0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_fuqin0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_fuqin0' ---
    for (const thisComponent of trial_fuqin0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_fuqin0.stopped', globalClock.getTime());
    sound_fuqin0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_fuqin0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_fuqin0.corr = 1;  // correct non-response
      } else {
         key_resp_fuqin0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_fuqin0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_fuqin0.keys', key_resp_fuqin0.keys);
    psychoJS.experiment.addData('key_resp_fuqin0.corr', key_resp_fuqin0.corr);
    if (typeof key_resp_fuqin0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_fuqin0.rt', key_resp_fuqin0.rt);
        psychoJS.experiment.addData('key_resp_fuqin0.duration', key_resp_fuqin0.duration);
        routineTimer.reset();
        }
    
    key_resp_fuqin0.stop();
    if (trial_fuqin0MaxDurationReached) {
        trial_fuqin0Clock.add(trial_fuqin0MaxDuration);
    } else {
        trial_fuqin0Clock.add(12.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_guangming1MaxDurationReached;
var _key_resp_guangming1_allKeys;
var trial_guangming1MaxDuration;
var trial_guangming1Components;
function trial_guangming1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_guangming1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_guangming1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_guangming1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_guangming1.setValue('audio/guangming1.wav');
    sound_guangming1.secs=3.0;
    sound_guangming1.setVolume(1.0);
    key_resp_guangming1.keys = undefined;
    key_resp_guangming1.rt = undefined;
    _key_resp_guangming1_allKeys = [];
    psychoJS.experiment.addData('trial_guangming1.started', globalClock.getTime());
    trial_guangming1MaxDuration = null
    // keep track of which components have finished
    trial_guangming1Components = [];
    trial_guangming1Components.push(text_guangming1);
    trial_guangming1Components.push(sound_guangming1);
    trial_guangming1Components.push(text_47);
    trial_guangming1Components.push(text_48);
    trial_guangming1Components.push(key_resp_guangming1);
    
    for (const thisComponent of trial_guangming1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_guangming1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_guangming1' ---
    // get current time
    t = trial_guangming1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_guangming1* updates
    if (t >= 0.0 && text_guangming1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_guangming1.tStart = t;  // (not accounting for frame time here)
      text_guangming1.frameNStart = frameN;  // exact frame index
      
      text_guangming1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_guangming1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_guangming1.setAutoDraw(false);
    }
    
    // start/stop sound_guangming1
    if (t >= 4.0 && sound_guangming1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_guangming1.tStart = t;  // (not accounting for frame time here)
      sound_guangming1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_guangming1.play(); });  // screen flip
      sound_guangming1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_guangming1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_guangming1.tStart + 0.5) {
        sound_guangming1.stop();  // stop the sound (if longer than duration)
        sound_guangming1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_47* updates
    if (t >= 3.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_47.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_47.setAutoDraw(false);
    }
    
    
    // *text_48* updates
    if (t >= 7.0 && text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_48.tStart = t;  // (not accounting for frame time here)
      text_48.frameNStart = frameN;  // exact frame index
      
      text_48.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_48.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_48.setAutoDraw(false);
    }
    
    
    // *key_resp_guangming1* updates
    if (t >= 7.0 && key_resp_guangming1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_guangming1.tStart = t;  // (not accounting for frame time here)
      key_resp_guangming1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_guangming1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_guangming1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_guangming1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_guangming1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_guangming1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_guangming1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_guangming1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_guangming1_allKeys = _key_resp_guangming1_allKeys.concat(theseKeys);
      if (_key_resp_guangming1_allKeys.length > 0) {
        key_resp_guangming1.keys = _key_resp_guangming1_allKeys[0].name;  // just the first key pressed
        key_resp_guangming1.rt = _key_resp_guangming1_allKeys[0].rt;
        key_resp_guangming1.duration = _key_resp_guangming1_allKeys[0].duration;
        // was this correct?
        if (key_resp_guangming1.keys == "'right'") {
            key_resp_guangming1.corr = 1;
        } else {
            key_resp_guangming1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_guangming1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_guangming1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_guangming1' ---
    for (const thisComponent of trial_guangming1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_guangming1.stopped', globalClock.getTime());
    sound_guangming1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_guangming1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_guangming1.corr = 1;  // correct non-response
      } else {
         key_resp_guangming1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_guangming1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_guangming1.keys', key_resp_guangming1.keys);
    psychoJS.experiment.addData('key_resp_guangming1.corr', key_resp_guangming1.corr);
    if (typeof key_resp_guangming1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_guangming1.rt', key_resp_guangming1.rt);
        psychoJS.experiment.addData('key_resp_guangming1.duration', key_resp_guangming1.duration);
        routineTimer.reset();
        }
    
    key_resp_guangming1.stop();
    if (trial_guangming1MaxDurationReached) {
        trial_guangming1Clock.add(trial_guangming1MaxDuration);
    } else {
        trial_guangming1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baimao0MaxDurationReached;
var _key_resp_baimao0_allKeys;
var trial_baimao0MaxDuration;
var trial_baimao0Components;
function trial_baimao0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baimao0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baimao0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_baimao0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baimao0.setValue('audio/baimao0.wav');
    sound_baimao0.secs=3.0;
    sound_baimao0.setVolume(1.0);
    key_resp_baimao0.keys = undefined;
    key_resp_baimao0.rt = undefined;
    _key_resp_baimao0_allKeys = [];
    psychoJS.experiment.addData('trial_baimao0.started', globalClock.getTime());
    trial_baimao0MaxDuration = null
    // keep track of which components have finished
    trial_baimao0Components = [];
    trial_baimao0Components.push(text_baimao0);
    trial_baimao0Components.push(sound_baimao0);
    trial_baimao0Components.push(text_49);
    trial_baimao0Components.push(text_50);
    trial_baimao0Components.push(key_resp_baimao0);
    
    for (const thisComponent of trial_baimao0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baimao0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baimao0' ---
    // get current time
    t = trial_baimao0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baimao0* updates
    if (t >= 0.0 && text_baimao0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baimao0.tStart = t;  // (not accounting for frame time here)
      text_baimao0.frameNStart = frameN;  // exact frame index
      
      text_baimao0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baimao0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baimao0.setAutoDraw(false);
    }
    
    // start/stop sound_baimao0
    if (t >= 4.0 && sound_baimao0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baimao0.tStart = t;  // (not accounting for frame time here)
      sound_baimao0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baimao0.play(); });  // screen flip
      sound_baimao0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baimao0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baimao0.tStart + 0.5) {
        sound_baimao0.stop();  // stop the sound (if longer than duration)
        sound_baimao0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_49* updates
    if (t >= 3.0 && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_49.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_49.setAutoDraw(false);
    }
    
    
    // *text_50* updates
    if (t >= 7.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_50.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_50.setAutoDraw(false);
    }
    
    
    // *key_resp_baimao0* updates
    if (t >= 7.0 && key_resp_baimao0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baimao0.tStart = t;  // (not accounting for frame time here)
      key_resp_baimao0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baimao0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baimao0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baimao0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baimao0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baimao0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baimao0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baimao0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baimao0_allKeys = _key_resp_baimao0_allKeys.concat(theseKeys);
      if (_key_resp_baimao0_allKeys.length > 0) {
        key_resp_baimao0.keys = _key_resp_baimao0_allKeys[0].name;  // just the first key pressed
        key_resp_baimao0.rt = _key_resp_baimao0_allKeys[0].rt;
        key_resp_baimao0.duration = _key_resp_baimao0_allKeys[0].duration;
        // was this correct?
        if (key_resp_baimao0.keys == "'left'") {
            key_resp_baimao0.corr = 1;
        } else {
            key_resp_baimao0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baimao0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baimao0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baimao0' ---
    for (const thisComponent of trial_baimao0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baimao0.stopped', globalClock.getTime());
    sound_baimao0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baimao0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_baimao0.corr = 1;  // correct non-response
      } else {
         key_resp_baimao0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baimao0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baimao0.keys', key_resp_baimao0.keys);
    psychoJS.experiment.addData('key_resp_baimao0.corr', key_resp_baimao0.corr);
    if (typeof key_resp_baimao0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baimao0.rt', key_resp_baimao0.rt);
        psychoJS.experiment.addData('key_resp_baimao0.duration', key_resp_baimao0.duration);
        routineTimer.reset();
        }
    
    key_resp_baimao0.stop();
    if (trial_baimao0MaxDurationReached) {
        trial_baimao0Clock.add(trial_baimao0MaxDuration);
    } else {
        trial_baimao0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_xiongdi1MaxDurationReached;
var _key_resp_xiongdi1_allKeys;
var trial_xiongdi1MaxDuration;
var trial_xiongdi1Components;
function trial_xiongdi1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_xiongdi1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_xiongdi1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_xiongdi1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_xiongdi1.setValue('audio/xiongdi1.wav');
    sound_xiongdi1.secs=3.0;
    sound_xiongdi1.setVolume(1.0);
    key_resp_xiongdi1.keys = undefined;
    key_resp_xiongdi1.rt = undefined;
    _key_resp_xiongdi1_allKeys = [];
    psychoJS.experiment.addData('trial_xiongdi1.started', globalClock.getTime());
    trial_xiongdi1MaxDuration = null
    // keep track of which components have finished
    trial_xiongdi1Components = [];
    trial_xiongdi1Components.push(text_xiongdi1);
    trial_xiongdi1Components.push(sound_xiongdi1);
    trial_xiongdi1Components.push(text_51);
    trial_xiongdi1Components.push(text_52);
    trial_xiongdi1Components.push(key_resp_xiongdi1);
    
    for (const thisComponent of trial_xiongdi1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_xiongdi1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_xiongdi1' ---
    // get current time
    t = trial_xiongdi1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_xiongdi1* updates
    if (t >= 0.0 && text_xiongdi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_xiongdi1.tStart = t;  // (not accounting for frame time here)
      text_xiongdi1.frameNStart = frameN;  // exact frame index
      
      text_xiongdi1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_xiongdi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_xiongdi1.setAutoDraw(false);
    }
    
    // start/stop sound_xiongdi1
    if (t >= 4.0 && sound_xiongdi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_xiongdi1.tStart = t;  // (not accounting for frame time here)
      sound_xiongdi1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_xiongdi1.play(); });  // screen flip
      sound_xiongdi1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_xiongdi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_xiongdi1.tStart + 0.5) {
        sound_xiongdi1.stop();  // stop the sound (if longer than duration)
        sound_xiongdi1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_51* updates
    if (t >= 3.0 && text_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_51.tStart = t;  // (not accounting for frame time here)
      text_51.frameNStart = frameN;  // exact frame index
      
      text_51.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_51.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_51.setAutoDraw(false);
    }
    
    
    // *text_52* updates
    if (t >= 7.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_52.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_52.setAutoDraw(false);
    }
    
    
    // *key_resp_xiongdi1* updates
    if (t >= 7 && key_resp_xiongdi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_xiongdi1.tStart = t;  // (not accounting for frame time here)
      key_resp_xiongdi1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_xiongdi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_xiongdi1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_xiongdi1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_xiongdi1.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_xiongdi1_allKeys = _key_resp_xiongdi1_allKeys.concat(theseKeys);
      if (_key_resp_xiongdi1_allKeys.length > 0) {
        key_resp_xiongdi1.keys = _key_resp_xiongdi1_allKeys[0].name;  // just the first key pressed
        key_resp_xiongdi1.rt = _key_resp_xiongdi1_allKeys[0].rt;
        key_resp_xiongdi1.duration = _key_resp_xiongdi1_allKeys[0].duration;
        // was this correct?
        if (key_resp_xiongdi1.keys == "'right'") {
            key_resp_xiongdi1.corr = 1;
        } else {
            key_resp_xiongdi1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_xiongdi1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_xiongdi1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_xiongdi1' ---
    for (const thisComponent of trial_xiongdi1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_xiongdi1.stopped', globalClock.getTime());
    sound_xiongdi1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_xiongdi1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_xiongdi1.corr = 1;  // correct non-response
      } else {
         key_resp_xiongdi1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_xiongdi1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_xiongdi1.keys', key_resp_xiongdi1.keys);
    psychoJS.experiment.addData('key_resp_xiongdi1.corr', key_resp_xiongdi1.corr);
    if (typeof key_resp_xiongdi1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_xiongdi1.rt', key_resp_xiongdi1.rt);
        psychoJS.experiment.addData('key_resp_xiongdi1.duration', key_resp_xiongdi1.duration);
        routineTimer.reset();
        }
    
    key_resp_xiongdi1.stop();
    if (trial_xiongdi1MaxDurationReached) {
        trial_xiongdi1Clock.add(trial_xiongdi1MaxDuration);
    } else {
        trial_xiongdi1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_lianxiang1MaxDurationReached;
var _key_resp_lianxiang1_allKeys;
var trial_lianxiang1MaxDuration;
var trial_lianxiang1Components;
function trial_lianxiang1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_lianxiang1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_lianxiang1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_lianxiang1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_lianxiang1.setValue('audio/lianxiang1.wav');
    sound_lianxiang1.secs=3.0;
    sound_lianxiang1.setVolume(1.0);
    key_resp_lianxiang1.keys = undefined;
    key_resp_lianxiang1.rt = undefined;
    _key_resp_lianxiang1_allKeys = [];
    psychoJS.experiment.addData('trial_lianxiang1.started', globalClock.getTime());
    trial_lianxiang1MaxDuration = null
    // keep track of which components have finished
    trial_lianxiang1Components = [];
    trial_lianxiang1Components.push(text_lianxiang1);
    trial_lianxiang1Components.push(sound_lianxiang1);
    trial_lianxiang1Components.push(text_53);
    trial_lianxiang1Components.push(text_54);
    trial_lianxiang1Components.push(key_resp_lianxiang1);
    
    for (const thisComponent of trial_lianxiang1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_lianxiang1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_lianxiang1' ---
    // get current time
    t = trial_lianxiang1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lianxiang1* updates
    if (t >= 0.0 && text_lianxiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lianxiang1.tStart = t;  // (not accounting for frame time here)
      text_lianxiang1.frameNStart = frameN;  // exact frame index
      
      text_lianxiang1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_lianxiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_lianxiang1.setAutoDraw(false);
    }
    
    // start/stop sound_lianxiang1
    if (t >= 4.0 && sound_lianxiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_lianxiang1.tStart = t;  // (not accounting for frame time here)
      sound_lianxiang1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_lianxiang1.play(); });  // screen flip
      sound_lianxiang1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_lianxiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_lianxiang1.tStart + 0.5) {
        sound_lianxiang1.stop();  // stop the sound (if longer than duration)
        sound_lianxiang1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_53* updates
    if (t >= 3.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_53.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_53.setAutoDraw(false);
    }
    
    
    // *text_54* updates
    if (t >= 7 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_54.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_54.setAutoDraw(false);
    }
    
    
    // *key_resp_lianxiang1* updates
    if (t >= 7 && key_resp_lianxiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lianxiang1.tStart = t;  // (not accounting for frame time here)
      key_resp_lianxiang1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_lianxiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_lianxiang1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_lianxiang1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lianxiang1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_lianxiang1_allKeys = _key_resp_lianxiang1_allKeys.concat(theseKeys);
      if (_key_resp_lianxiang1_allKeys.length > 0) {
        key_resp_lianxiang1.keys = _key_resp_lianxiang1_allKeys[0].name;  // just the first key pressed
        key_resp_lianxiang1.rt = _key_resp_lianxiang1_allKeys[0].rt;
        key_resp_lianxiang1.duration = _key_resp_lianxiang1_allKeys[0].duration;
        // was this correct?
        if (key_resp_lianxiang1.keys == "'right'") {
            key_resp_lianxiang1.corr = 1;
        } else {
            key_resp_lianxiang1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_lianxiang1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_lianxiang1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_lianxiang1' ---
    for (const thisComponent of trial_lianxiang1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_lianxiang1.stopped', globalClock.getTime());
    sound_lianxiang1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_lianxiang1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_lianxiang1.corr = 1;  // correct non-response
      } else {
         key_resp_lianxiang1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lianxiang1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lianxiang1.keys', key_resp_lianxiang1.keys);
    psychoJS.experiment.addData('key_resp_lianxiang1.corr', key_resp_lianxiang1.corr);
    if (typeof key_resp_lianxiang1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lianxiang1.rt', key_resp_lianxiang1.rt);
        psychoJS.experiment.addData('key_resp_lianxiang1.duration', key_resp_lianxiang1.duration);
        routineTimer.reset();
        }
    
    key_resp_lianxiang1.stop();
    if (trial_lianxiang1MaxDurationReached) {
        trial_lianxiang1Clock.add(trial_lianxiang1MaxDuration);
    } else {
        trial_lianxiang1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_chaguan1MaxDurationReached;
var _key_resp_chaguan1_allKeys;
var trial_chaguan1MaxDuration;
var trial_chaguan1Components;
function trial_chaguan1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_chaguan1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_chaguan1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_chaguan1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_chaguan1.setValue('audio/chaguan1.wav');
    sound_chaguan1.secs=3.0;
    sound_chaguan1.setVolume(1.0);
    key_resp_chaguan1.keys = undefined;
    key_resp_chaguan1.rt = undefined;
    _key_resp_chaguan1_allKeys = [];
    psychoJS.experiment.addData('trial_chaguan1.started', globalClock.getTime());
    trial_chaguan1MaxDuration = null
    // keep track of which components have finished
    trial_chaguan1Components = [];
    trial_chaguan1Components.push(text_chaguan1);
    trial_chaguan1Components.push(sound_chaguan1);
    trial_chaguan1Components.push(text_55);
    trial_chaguan1Components.push(text_56);
    trial_chaguan1Components.push(key_resp_chaguan1);
    
    for (const thisComponent of trial_chaguan1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_chaguan1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_chaguan1' ---
    // get current time
    t = trial_chaguan1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_chaguan1* updates
    if (t >= 0.0 && text_chaguan1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_chaguan1.tStart = t;  // (not accounting for frame time here)
      text_chaguan1.frameNStart = frameN;  // exact frame index
      
      text_chaguan1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_chaguan1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_chaguan1.setAutoDraw(false);
    }
    
    // start/stop sound_chaguan1
    if (t >= 4.0 && sound_chaguan1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_chaguan1.tStart = t;  // (not accounting for frame time here)
      sound_chaguan1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_chaguan1.play(); });  // screen flip
      sound_chaguan1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_chaguan1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_chaguan1.tStart + 0.5) {
        sound_chaguan1.stop();  // stop the sound (if longer than duration)
        sound_chaguan1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_55* updates
    if (t >= 3 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_55.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_55.setAutoDraw(false);
    }
    
    
    // *text_56* updates
    if (t >= 7 && text_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_56.tStart = t;  // (not accounting for frame time here)
      text_56.frameNStart = frameN;  // exact frame index
      
      text_56.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_56.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_56.setAutoDraw(false);
    }
    
    
    // *key_resp_chaguan1* updates
    if (t >= 7 && key_resp_chaguan1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_chaguan1.tStart = t;  // (not accounting for frame time here)
      key_resp_chaguan1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_chaguan1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chaguan1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chaguan1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_chaguan1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_chaguan1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_chaguan1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_chaguan1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_chaguan1_allKeys = _key_resp_chaguan1_allKeys.concat(theseKeys);
      if (_key_resp_chaguan1_allKeys.length > 0) {
        key_resp_chaguan1.keys = _key_resp_chaguan1_allKeys[0].name;  // just the first key pressed
        key_resp_chaguan1.rt = _key_resp_chaguan1_allKeys[0].rt;
        key_resp_chaguan1.duration = _key_resp_chaguan1_allKeys[0].duration;
        // was this correct?
        if (key_resp_chaguan1.keys == "'right'") {
            key_resp_chaguan1.corr = 1;
        } else {
            key_resp_chaguan1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_chaguan1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_chaguan1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_chaguan1' ---
    for (const thisComponent of trial_chaguan1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_chaguan1.stopped', globalClock.getTime());
    sound_chaguan1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_chaguan1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_chaguan1.corr = 1;  // correct non-response
      } else {
         key_resp_chaguan1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_chaguan1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_chaguan1.keys', key_resp_chaguan1.keys);
    psychoJS.experiment.addData('key_resp_chaguan1.corr', key_resp_chaguan1.corr);
    if (typeof key_resp_chaguan1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_chaguan1.rt', key_resp_chaguan1.rt);
        psychoJS.experiment.addData('key_resp_chaguan1.duration', key_resp_chaguan1.duration);
        routineTimer.reset();
        }
    
    key_resp_chaguan1.stop();
    if (trial_chaguan1MaxDurationReached) {
        trial_chaguan1Clock.add(trial_chaguan1MaxDuration);
    } else {
        trial_chaguan1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_mifanMaxDurationReached;
var _key_resp_mifan_allKeys;
var trial_mifanMaxDuration;
var trial_mifanComponents;
function trial_mifanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_mifan' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_mifanClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_mifanMaxDurationReached = false;
    // update component parameters for each repeat
    sound_mifan.setValue('audio/mifan.wav');
    sound_mifan.secs=3.0;
    sound_mifan.setVolume(1.0);
    key_resp_mifan.keys = undefined;
    key_resp_mifan.rt = undefined;
    _key_resp_mifan_allKeys = [];
    psychoJS.experiment.addData('trial_mifan.started', globalClock.getTime());
    trial_mifanMaxDuration = null
    // keep track of which components have finished
    trial_mifanComponents = [];
    trial_mifanComponents.push(text_mifan);
    trial_mifanComponents.push(sound_mifan);
    trial_mifanComponents.push(text_57);
    trial_mifanComponents.push(text_58);
    trial_mifanComponents.push(key_resp_mifan);
    
    for (const thisComponent of trial_mifanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_mifanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_mifan' ---
    // get current time
    t = trial_mifanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_mifan* updates
    if (t >= 0.0 && text_mifan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_mifan.tStart = t;  // (not accounting for frame time here)
      text_mifan.frameNStart = frameN;  // exact frame index
      
      text_mifan.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_mifan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_mifan.setAutoDraw(false);
    }
    
    // start/stop sound_mifan
    if (t >= 4.0 && sound_mifan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_mifan.tStart = t;  // (not accounting for frame time here)
      sound_mifan.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_mifan.play(); });  // screen flip
      sound_mifan.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_mifan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_mifan.tStart + 0.5) {
        sound_mifan.stop();  // stop the sound (if longer than duration)
        sound_mifan.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_57* updates
    if (t >= 3.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_57.tStart = t;  // (not accounting for frame time here)
      text_57.frameNStart = frameN;  // exact frame index
      
      text_57.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_57.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_57.setAutoDraw(false);
    }
    
    
    // *text_58* updates
    if (t >= 7.0 && text_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_58.tStart = t;  // (not accounting for frame time here)
      text_58.frameNStart = frameN;  // exact frame index
      
      text_58.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_58.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_58.setAutoDraw(false);
    }
    
    
    // *key_resp_mifan* updates
    if (t >= 7.0 && key_resp_mifan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_mifan.tStart = t;  // (not accounting for frame time here)
      key_resp_mifan.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_mifan.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mifan.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mifan.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_mifan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_mifan.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_mifan.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_mifan.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_mifan_allKeys = _key_resp_mifan_allKeys.concat(theseKeys);
      if (_key_resp_mifan_allKeys.length > 0) {
        key_resp_mifan.keys = _key_resp_mifan_allKeys[0].name;  // just the first key pressed
        key_resp_mifan.rt = _key_resp_mifan_allKeys[0].rt;
        key_resp_mifan.duration = _key_resp_mifan_allKeys[0].duration;
        // was this correct?
        if (key_resp_mifan.keys == "'left'") {
            key_resp_mifan.corr = 1;
        } else {
            key_resp_mifan.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_mifanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_mifanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_mifan' ---
    for (const thisComponent of trial_mifanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_mifan.stopped', globalClock.getTime());
    sound_mifan.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_mifan.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_mifan.corr = 1;  // correct non-response
      } else {
         key_resp_mifan.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_mifan.corr, level);
    }
    psychoJS.experiment.addData('key_resp_mifan.keys', key_resp_mifan.keys);
    psychoJS.experiment.addData('key_resp_mifan.corr', key_resp_mifan.corr);
    if (typeof key_resp_mifan.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_mifan.rt', key_resp_mifan.rt);
        psychoJS.experiment.addData('key_resp_mifan.duration', key_resp_mifan.duration);
        routineTimer.reset();
        }
    
    key_resp_mifan.stop();
    if (trial_mifanMaxDurationReached) {
        trial_mifanClock.add(trial_mifanMaxDuration);
    } else {
        trial_mifanClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baimao1MaxDurationReached;
var _key_resp_baimao1_allKeys;
var trial_baimao1MaxDuration;
var trial_baimao1Components;
function trial_baimao1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baimao1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baimao1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_baimao1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baimao1.setValue('audio/baimao1.wav');
    sound_baimao1.secs=3.0;
    sound_baimao1.setVolume(1.0);
    key_resp_baimao1.keys = undefined;
    key_resp_baimao1.rt = undefined;
    _key_resp_baimao1_allKeys = [];
    psychoJS.experiment.addData('trial_baimao1.started', globalClock.getTime());
    trial_baimao1MaxDuration = null
    // keep track of which components have finished
    trial_baimao1Components = [];
    trial_baimao1Components.push(text_baimao1);
    trial_baimao1Components.push(sound_baimao1);
    trial_baimao1Components.push(text_59);
    trial_baimao1Components.push(text_60);
    trial_baimao1Components.push(key_resp_baimao1);
    
    for (const thisComponent of trial_baimao1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baimao1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baimao1' ---
    // get current time
    t = trial_baimao1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baimao1* updates
    if (t >= 0.0 && text_baimao1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baimao1.tStart = t;  // (not accounting for frame time here)
      text_baimao1.frameNStart = frameN;  // exact frame index
      
      text_baimao1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baimao1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baimao1.setAutoDraw(false);
    }
    
    // start/stop sound_baimao1
    if (t >= 4.0 && sound_baimao1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baimao1.tStart = t;  // (not accounting for frame time here)
      sound_baimao1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baimao1.play(); });  // screen flip
      sound_baimao1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baimao1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baimao1.tStart + 0.5) {
        sound_baimao1.stop();  // stop the sound (if longer than duration)
        sound_baimao1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_59* updates
    if (t >= 3 && text_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_59.tStart = t;  // (not accounting for frame time here)
      text_59.frameNStart = frameN;  // exact frame index
      
      text_59.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_59.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_59.setAutoDraw(false);
    }
    
    
    // *text_60* updates
    if (t >= 7.0 && text_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_60.tStart = t;  // (not accounting for frame time here)
      text_60.frameNStart = frameN;  // exact frame index
      
      text_60.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_60.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_60.setAutoDraw(false);
    }
    
    
    // *key_resp_baimao1* updates
    if (t >= 7 && key_resp_baimao1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baimao1.tStart = t;  // (not accounting for frame time here)
      key_resp_baimao1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baimao1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baimao1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baimao1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baimao1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baimao1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baimao1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baimao1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baimao1_allKeys = _key_resp_baimao1_allKeys.concat(theseKeys);
      if (_key_resp_baimao1_allKeys.length > 0) {
        key_resp_baimao1.keys = _key_resp_baimao1_allKeys[0].name;  // just the first key pressed
        key_resp_baimao1.rt = _key_resp_baimao1_allKeys[0].rt;
        key_resp_baimao1.duration = _key_resp_baimao1_allKeys[0].duration;
        // was this correct?
        if (key_resp_baimao1.keys == "'right'") {
            key_resp_baimao1.corr = 1;
        } else {
            key_resp_baimao1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baimao1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baimao1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baimao1' ---
    for (const thisComponent of trial_baimao1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baimao1.stopped', globalClock.getTime());
    sound_baimao1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baimao1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_baimao1.corr = 1;  // correct non-response
      } else {
         key_resp_baimao1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baimao1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baimao1.keys', key_resp_baimao1.keys);
    psychoJS.experiment.addData('key_resp_baimao1.corr', key_resp_baimao1.corr);
    if (typeof key_resp_baimao1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baimao1.rt', key_resp_baimao1.rt);
        psychoJS.experiment.addData('key_resp_baimao1.duration', key_resp_baimao1.duration);
        routineTimer.reset();
        }
    
    key_resp_baimao1.stop();
    if (trial_baimao1MaxDurationReached) {
        trial_baimao1Clock.add(trial_baimao1MaxDuration);
    } else {
        trial_baimao1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_yanjingMaxDurationReached;
var _key_resp_yanjing_allKeys;
var trial_yanjingMaxDuration;
var trial_yanjingComponents;
function trial_yanjingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_yanjing' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_yanjingClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_yanjingMaxDurationReached = false;
    // update component parameters for each repeat
    sound_yanjing.setValue('audio/yanjing.wav');
    sound_yanjing.secs=3;
    sound_yanjing.setVolume(1.0);
    key_resp_yanjing.keys = undefined;
    key_resp_yanjing.rt = undefined;
    _key_resp_yanjing_allKeys = [];
    psychoJS.experiment.addData('trial_yanjing.started', globalClock.getTime());
    trial_yanjingMaxDuration = null
    // keep track of which components have finished
    trial_yanjingComponents = [];
    trial_yanjingComponents.push(text_yanjing);
    trial_yanjingComponents.push(sound_yanjing);
    trial_yanjingComponents.push(text_61);
    trial_yanjingComponents.push(text_62);
    trial_yanjingComponents.push(key_resp_yanjing);
    
    for (const thisComponent of trial_yanjingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_yanjingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_yanjing' ---
    // get current time
    t = trial_yanjingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_yanjing* updates
    if (t >= 0.0 && text_yanjing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_yanjing.tStart = t;  // (not accounting for frame time here)
      text_yanjing.frameNStart = frameN;  // exact frame index
      
      text_yanjing.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_yanjing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_yanjing.setAutoDraw(false);
    }
    
    // start/stop sound_yanjing
    if (t >= 4.0 && sound_yanjing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_yanjing.tStart = t;  // (not accounting for frame time here)
      sound_yanjing.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_yanjing.play(); });  // screen flip
      sound_yanjing.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_yanjing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_yanjing.tStart + 0.5) {
        sound_yanjing.stop();  // stop the sound (if longer than duration)
        sound_yanjing.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_61* updates
    if (t >= 3 && text_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_61.tStart = t;  // (not accounting for frame time here)
      text_61.frameNStart = frameN;  // exact frame index
      
      text_61.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_61.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_61.setAutoDraw(false);
    }
    
    
    // *text_62* updates
    if (t >= 7 && text_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_62.tStart = t;  // (not accounting for frame time here)
      text_62.frameNStart = frameN;  // exact frame index
      
      text_62.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_62.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_62.setAutoDraw(false);
    }
    
    
    // *key_resp_yanjing* updates
    if (t >= 7 && key_resp_yanjing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_yanjing.tStart = t;  // (not accounting for frame time here)
      key_resp_yanjing.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_yanjing.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yanjing.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yanjing.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_yanjing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_yanjing.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_yanjing.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_yanjing.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_yanjing_allKeys = _key_resp_yanjing_allKeys.concat(theseKeys);
      if (_key_resp_yanjing_allKeys.length > 0) {
        key_resp_yanjing.keys = _key_resp_yanjing_allKeys[0].name;  // just the first key pressed
        key_resp_yanjing.rt = _key_resp_yanjing_allKeys[0].rt;
        key_resp_yanjing.duration = _key_resp_yanjing_allKeys[0].duration;
        // was this correct?
        if (key_resp_yanjing.keys == "'left'") {
            key_resp_yanjing.corr = 1;
        } else {
            key_resp_yanjing.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_yanjingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_yanjingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_yanjing' ---
    for (const thisComponent of trial_yanjingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_yanjing.stopped', globalClock.getTime());
    sound_yanjing.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_yanjing.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_yanjing.corr = 1;  // correct non-response
      } else {
         key_resp_yanjing.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_yanjing.corr, level);
    }
    psychoJS.experiment.addData('key_resp_yanjing.keys', key_resp_yanjing.keys);
    psychoJS.experiment.addData('key_resp_yanjing.corr', key_resp_yanjing.corr);
    if (typeof key_resp_yanjing.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_yanjing.rt', key_resp_yanjing.rt);
        psychoJS.experiment.addData('key_resp_yanjing.duration', key_resp_yanjing.duration);
        routineTimer.reset();
        }
    
    key_resp_yanjing.stop();
    if (trial_yanjingMaxDurationReached) {
        trial_yanjingClock.add(trial_yanjingMaxDuration);
    } else {
        trial_yanjingClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_tiankongMaxDurationReached;
var _key_resp_tiankong_allKeys;
var trial_tiankongMaxDuration;
var trial_tiankongComponents;
function trial_tiankongRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_tiankong' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_tiankongClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_tiankongMaxDurationReached = false;
    // update component parameters for each repeat
    sound_tiankong.setValue('audio/tiankong.wav');
    sound_tiankong.secs=3.0;
    sound_tiankong.setVolume(1.0);
    key_resp_tiankong.keys = undefined;
    key_resp_tiankong.rt = undefined;
    _key_resp_tiankong_allKeys = [];
    psychoJS.experiment.addData('trial_tiankong.started', globalClock.getTime());
    trial_tiankongMaxDuration = null
    // keep track of which components have finished
    trial_tiankongComponents = [];
    trial_tiankongComponents.push(text_tiankong);
    trial_tiankongComponents.push(sound_tiankong);
    trial_tiankongComponents.push(text_63);
    trial_tiankongComponents.push(text_64);
    trial_tiankongComponents.push(key_resp_tiankong);
    
    for (const thisComponent of trial_tiankongComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_tiankongRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_tiankong' ---
    // get current time
    t = trial_tiankongClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_tiankong* updates
    if (t >= 0.0 && text_tiankong.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_tiankong.tStart = t;  // (not accounting for frame time here)
      text_tiankong.frameNStart = frameN;  // exact frame index
      
      text_tiankong.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_tiankong.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_tiankong.setAutoDraw(false);
    }
    
    // start/stop sound_tiankong
    if (t >= 4.0 && sound_tiankong.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_tiankong.tStart = t;  // (not accounting for frame time here)
      sound_tiankong.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_tiankong.play(); });  // screen flip
      sound_tiankong.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_tiankong.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_tiankong.tStart + 0.5) {
        sound_tiankong.stop();  // stop the sound (if longer than duration)
        sound_tiankong.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_63* updates
    if (t >= 3.0 && text_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_63.tStart = t;  // (not accounting for frame time here)
      text_63.frameNStart = frameN;  // exact frame index
      
      text_63.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_63.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_63.setAutoDraw(false);
    }
    
    
    // *text_64* updates
    if (t >= 7 && text_64.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_64.tStart = t;  // (not accounting for frame time here)
      text_64.frameNStart = frameN;  // exact frame index
      
      text_64.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_64.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_64.setAutoDraw(false);
    }
    
    
    // *key_resp_tiankong* updates
    if (t >= 7 && key_resp_tiankong.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tiankong.tStart = t;  // (not accounting for frame time here)
      key_resp_tiankong.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tiankong.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tiankong.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tiankong.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_tiankong.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_tiankong.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_tiankong.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tiankong.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_tiankong_allKeys = _key_resp_tiankong_allKeys.concat(theseKeys);
      if (_key_resp_tiankong_allKeys.length > 0) {
        key_resp_tiankong.keys = _key_resp_tiankong_allKeys[0].name;  // just the first key pressed
        key_resp_tiankong.rt = _key_resp_tiankong_allKeys[0].rt;
        key_resp_tiankong.duration = _key_resp_tiankong_allKeys[0].duration;
        // was this correct?
        if (key_resp_tiankong.keys == "'left'") {
            key_resp_tiankong.corr = 1;
        } else {
            key_resp_tiankong.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_tiankongComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_tiankongRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_tiankong' ---
    for (const thisComponent of trial_tiankongComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_tiankong.stopped', globalClock.getTime());
    sound_tiankong.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_tiankong.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_tiankong.corr = 1;  // correct non-response
      } else {
         key_resp_tiankong.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_tiankong.corr, level);
    }
    psychoJS.experiment.addData('key_resp_tiankong.keys', key_resp_tiankong.keys);
    psychoJS.experiment.addData('key_resp_tiankong.corr', key_resp_tiankong.corr);
    if (typeof key_resp_tiankong.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tiankong.rt', key_resp_tiankong.rt);
        psychoJS.experiment.addData('key_resp_tiankong.duration', key_resp_tiankong.duration);
        routineTimer.reset();
        }
    
    key_resp_tiankong.stop();
    if (trial_tiankongMaxDurationReached) {
        trial_tiankongClock.add(trial_tiankongMaxDuration);
    } else {
        trial_tiankongClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_luotuo1MaxDurationReached;
var _key_resp_luotuo1_allKeys;
var trial_luotuo1MaxDuration;
var trial_luotuo1Components;
function trial_luotuo1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_luotuo1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_luotuo1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_luotuo1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_luotuo1.setValue('audio/luotuo1.wav');
    sound_luotuo1.secs=3;
    sound_luotuo1.setVolume(1.0);
    key_resp_luotuo1.keys = undefined;
    key_resp_luotuo1.rt = undefined;
    _key_resp_luotuo1_allKeys = [];
    psychoJS.experiment.addData('trial_luotuo1.started', globalClock.getTime());
    trial_luotuo1MaxDuration = null
    // keep track of which components have finished
    trial_luotuo1Components = [];
    trial_luotuo1Components.push(text_luotuo1);
    trial_luotuo1Components.push(sound_luotuo1);
    trial_luotuo1Components.push(text_65);
    trial_luotuo1Components.push(text_66);
    trial_luotuo1Components.push(key_resp_luotuo1);
    
    for (const thisComponent of trial_luotuo1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_luotuo1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_luotuo1' ---
    // get current time
    t = trial_luotuo1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_luotuo1* updates
    if (t >= 0.0 && text_luotuo1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_luotuo1.tStart = t;  // (not accounting for frame time here)
      text_luotuo1.frameNStart = frameN;  // exact frame index
      
      text_luotuo1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_luotuo1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_luotuo1.setAutoDraw(false);
    }
    
    // start/stop sound_luotuo1
    if (t >= 4 && sound_luotuo1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_luotuo1.tStart = t;  // (not accounting for frame time here)
      sound_luotuo1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_luotuo1.play(); });  // screen flip
      sound_luotuo1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_luotuo1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_luotuo1.tStart + 0.5) {
        sound_luotuo1.stop();  // stop the sound (if longer than duration)
        sound_luotuo1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_65* updates
    if (t >= 3.0 && text_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_65.tStart = t;  // (not accounting for frame time here)
      text_65.frameNStart = frameN;  // exact frame index
      
      text_65.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_65.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_65.setAutoDraw(false);
    }
    
    
    // *text_66* updates
    if (t >= 7 && text_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_66.tStart = t;  // (not accounting for frame time here)
      text_66.frameNStart = frameN;  // exact frame index
      
      text_66.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_66.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_66.setAutoDraw(false);
    }
    
    
    // *key_resp_luotuo1* updates
    if (t >= 7 && key_resp_luotuo1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_luotuo1.tStart = t;  // (not accounting for frame time here)
      key_resp_luotuo1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_luotuo1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_luotuo1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_luotuo1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_luotuo1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_luotuo1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_luotuo1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_luotuo1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_luotuo1_allKeys = _key_resp_luotuo1_allKeys.concat(theseKeys);
      if (_key_resp_luotuo1_allKeys.length > 0) {
        key_resp_luotuo1.keys = _key_resp_luotuo1_allKeys[0].name;  // just the first key pressed
        key_resp_luotuo1.rt = _key_resp_luotuo1_allKeys[0].rt;
        key_resp_luotuo1.duration = _key_resp_luotuo1_allKeys[0].duration;
        // was this correct?
        if (key_resp_luotuo1.keys == "'right'") {
            key_resp_luotuo1.corr = 1;
        } else {
            key_resp_luotuo1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_luotuo1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_luotuo1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_luotuo1' ---
    for (const thisComponent of trial_luotuo1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_luotuo1.stopped', globalClock.getTime());
    sound_luotuo1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_luotuo1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_luotuo1.corr = 1;  // correct non-response
      } else {
         key_resp_luotuo1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_luotuo1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_luotuo1.keys', key_resp_luotuo1.keys);
    psychoJS.experiment.addData('key_resp_luotuo1.corr', key_resp_luotuo1.corr);
    if (typeof key_resp_luotuo1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_luotuo1.rt', key_resp_luotuo1.rt);
        psychoJS.experiment.addData('key_resp_luotuo1.duration', key_resp_luotuo1.duration);
        routineTimer.reset();
        }
    
    key_resp_luotuo1.stop();
    if (trial_luotuo1MaxDurationReached) {
        trial_luotuo1Clock.add(trial_luotuo1MaxDuration);
    } else {
        trial_luotuo1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_fuqin1MaxDurationReached;
var _key_resp_fuqin1_allKeys;
var trial_fuqin1MaxDuration;
var trial_fuqin1Components;
function trial_fuqin1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_fuqin1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_fuqin1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_fuqin1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_fuqin1.setValue('audio/fuqin1.wav');
    sound_fuqin1.secs=3.0;
    sound_fuqin1.setVolume(1.0);
    key_resp_fuqin1.keys = undefined;
    key_resp_fuqin1.rt = undefined;
    _key_resp_fuqin1_allKeys = [];
    psychoJS.experiment.addData('trial_fuqin1.started', globalClock.getTime());
    trial_fuqin1MaxDuration = null
    // keep track of which components have finished
    trial_fuqin1Components = [];
    trial_fuqin1Components.push(text_fuqin1);
    trial_fuqin1Components.push(sound_fuqin1);
    trial_fuqin1Components.push(text_67);
    trial_fuqin1Components.push(text_68);
    trial_fuqin1Components.push(key_resp_fuqin1);
    
    for (const thisComponent of trial_fuqin1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_fuqin1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_fuqin1' ---
    // get current time
    t = trial_fuqin1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_fuqin1* updates
    if (t >= 0.0 && text_fuqin1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fuqin1.tStart = t;  // (not accounting for frame time here)
      text_fuqin1.frameNStart = frameN;  // exact frame index
      
      text_fuqin1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fuqin1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fuqin1.setAutoDraw(false);
    }
    
    // start/stop sound_fuqin1
    if (t >= 4.0 && sound_fuqin1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_fuqin1.tStart = t;  // (not accounting for frame time here)
      sound_fuqin1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_fuqin1.play(); });  // screen flip
      sound_fuqin1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_fuqin1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_fuqin1.tStart + 0.5) {
        sound_fuqin1.stop();  // stop the sound (if longer than duration)
        sound_fuqin1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_67* updates
    if (t >= 3.0 && text_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_67.tStart = t;  // (not accounting for frame time here)
      text_67.frameNStart = frameN;  // exact frame index
      
      text_67.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_67.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_67.setAutoDraw(false);
    }
    
    
    // *text_68* updates
    if (t >= 7.0 && text_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_68.tStart = t;  // (not accounting for frame time here)
      text_68.frameNStart = frameN;  // exact frame index
      
      text_68.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_68.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_68.setAutoDraw(false);
    }
    
    
    // *key_resp_fuqin1* updates
    if (t >= 7 && key_resp_fuqin1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_fuqin1.tStart = t;  // (not accounting for frame time here)
      key_resp_fuqin1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_fuqin1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_fuqin1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_fuqin1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_fuqin1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_fuqin1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_fuqin1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_fuqin1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_fuqin1_allKeys = _key_resp_fuqin1_allKeys.concat(theseKeys);
      if (_key_resp_fuqin1_allKeys.length > 0) {
        key_resp_fuqin1.keys = _key_resp_fuqin1_allKeys[0].name;  // just the first key pressed
        key_resp_fuqin1.rt = _key_resp_fuqin1_allKeys[0].rt;
        key_resp_fuqin1.duration = _key_resp_fuqin1_allKeys[0].duration;
        // was this correct?
        if (key_resp_fuqin1.keys == "'right'") {
            key_resp_fuqin1.corr = 1;
        } else {
            key_resp_fuqin1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_fuqin1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_fuqin1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_fuqin1' ---
    for (const thisComponent of trial_fuqin1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_fuqin1.stopped', globalClock.getTime());
    sound_fuqin1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_fuqin1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_fuqin1.corr = 1;  // correct non-response
      } else {
         key_resp_fuqin1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_fuqin1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_fuqin1.keys', key_resp_fuqin1.keys);
    psychoJS.experiment.addData('key_resp_fuqin1.corr', key_resp_fuqin1.corr);
    if (typeof key_resp_fuqin1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_fuqin1.rt', key_resp_fuqin1.rt);
        psychoJS.experiment.addData('key_resp_fuqin1.duration', key_resp_fuqin1.duration);
        routineTimer.reset();
        }
    
    key_resp_fuqin1.stop();
    if (trial_fuqin1MaxDurationReached) {
        trial_fuqin1Clock.add(trial_fuqin1MaxDuration);
    } else {
        trial_fuqin1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_luotuo0MaxDurationReached;
var _key_resp_luotuo0_allKeys;
var trial_luotuo0MaxDuration;
var trial_luotuo0Components;
function trial_luotuo0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_luotuo0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_luotuo0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_luotuo0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_luotuo0.setValue('audio/luotuo0.wav');
    sound_luotuo0.secs=3;
    sound_luotuo0.setVolume(1.0);
    key_resp_luotuo0.keys = undefined;
    key_resp_luotuo0.rt = undefined;
    _key_resp_luotuo0_allKeys = [];
    psychoJS.experiment.addData('trial_luotuo0.started', globalClock.getTime());
    trial_luotuo0MaxDuration = null
    // keep track of which components have finished
    trial_luotuo0Components = [];
    trial_luotuo0Components.push(text_luotuo0);
    trial_luotuo0Components.push(sound_luotuo0);
    trial_luotuo0Components.push(text_69);
    trial_luotuo0Components.push(text_70);
    trial_luotuo0Components.push(key_resp_luotuo0);
    
    for (const thisComponent of trial_luotuo0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_luotuo0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_luotuo0' ---
    // get current time
    t = trial_luotuo0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_luotuo0* updates
    if (t >= 0.0 && text_luotuo0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_luotuo0.tStart = t;  // (not accounting for frame time here)
      text_luotuo0.frameNStart = frameN;  // exact frame index
      
      text_luotuo0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_luotuo0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_luotuo0.setAutoDraw(false);
    }
    
    // start/stop sound_luotuo0
    if (t >= 4 && sound_luotuo0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_luotuo0.tStart = t;  // (not accounting for frame time here)
      sound_luotuo0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_luotuo0.play(); });  // screen flip
      sound_luotuo0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_luotuo0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_luotuo0.tStart + 0.5) {
        sound_luotuo0.stop();  // stop the sound (if longer than duration)
        sound_luotuo0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_69* updates
    if (t >= 3.0 && text_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_69.tStart = t;  // (not accounting for frame time here)
      text_69.frameNStart = frameN;  // exact frame index
      
      text_69.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_69.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_69.setAutoDraw(false);
    }
    
    
    // *text_70* updates
    if (t >= 7.0 && text_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_70.tStart = t;  // (not accounting for frame time here)
      text_70.frameNStart = frameN;  // exact frame index
      
      text_70.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_70.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_70.setAutoDraw(false);
    }
    
    
    // *key_resp_luotuo0* updates
    if (t >= 7 && key_resp_luotuo0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_luotuo0.tStart = t;  // (not accounting for frame time here)
      key_resp_luotuo0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_luotuo0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_luotuo0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_luotuo0.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_luotuo0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_luotuo0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_luotuo0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_luotuo0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_luotuo0_allKeys = _key_resp_luotuo0_allKeys.concat(theseKeys);
      if (_key_resp_luotuo0_allKeys.length > 0) {
        key_resp_luotuo0.keys = _key_resp_luotuo0_allKeys[0].name;  // just the first key pressed
        key_resp_luotuo0.rt = _key_resp_luotuo0_allKeys[0].rt;
        key_resp_luotuo0.duration = _key_resp_luotuo0_allKeys[0].duration;
        // was this correct?
        if (key_resp_luotuo0.keys == "'left'") {
            key_resp_luotuo0.corr = 1;
        } else {
            key_resp_luotuo0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_luotuo0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_luotuo0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_luotuo0' ---
    for (const thisComponent of trial_luotuo0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_luotuo0.stopped', globalClock.getTime());
    sound_luotuo0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_luotuo0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_luotuo0.corr = 1;  // correct non-response
      } else {
         key_resp_luotuo0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_luotuo0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_luotuo0.keys', key_resp_luotuo0.keys);
    psychoJS.experiment.addData('key_resp_luotuo0.corr', key_resp_luotuo0.corr);
    if (typeof key_resp_luotuo0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_luotuo0.rt', key_resp_luotuo0.rt);
        psychoJS.experiment.addData('key_resp_luotuo0.duration', key_resp_luotuo0.duration);
        routineTimer.reset();
        }
    
    key_resp_luotuo0.stop();
    if (trial_luotuo0MaxDurationReached) {
        trial_luotuo0Clock.add(trial_luotuo0MaxDuration);
    } else {
        trial_luotuo0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_weicheng0MaxDurationReached;
var _key_resp_weicheng0_allKeys;
var trial_weicheng0MaxDuration;
var trial_weicheng0Components;
function trial_weicheng0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_weicheng0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_weicheng0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_weicheng0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_weicheng0.setValue('audio/weicheng0.wav');
    sound_weicheng0.secs=3;
    sound_weicheng0.setVolume(1.0);
    key_resp_weicheng0.keys = undefined;
    key_resp_weicheng0.rt = undefined;
    _key_resp_weicheng0_allKeys = [];
    psychoJS.experiment.addData('trial_weicheng0.started', globalClock.getTime());
    trial_weicheng0MaxDuration = null
    // keep track of which components have finished
    trial_weicheng0Components = [];
    trial_weicheng0Components.push(text_weicheng0);
    trial_weicheng0Components.push(sound_weicheng0);
    trial_weicheng0Components.push(text_71);
    trial_weicheng0Components.push(text_72);
    trial_weicheng0Components.push(key_resp_weicheng0);
    
    for (const thisComponent of trial_weicheng0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_weicheng0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_weicheng0' ---
    // get current time
    t = trial_weicheng0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_weicheng0* updates
    if (t >= 0.0 && text_weicheng0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_weicheng0.tStart = t;  // (not accounting for frame time here)
      text_weicheng0.frameNStart = frameN;  // exact frame index
      
      text_weicheng0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_weicheng0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_weicheng0.setAutoDraw(false);
    }
    
    // start/stop sound_weicheng0
    if (t >= 4 && sound_weicheng0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_weicheng0.tStart = t;  // (not accounting for frame time here)
      sound_weicheng0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_weicheng0.play(); });  // screen flip
      sound_weicheng0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_weicheng0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_weicheng0.tStart + 0.5) {
        sound_weicheng0.stop();  // stop the sound (if longer than duration)
        sound_weicheng0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_71* updates
    if (t >= 3.0 && text_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_71.tStart = t;  // (not accounting for frame time here)
      text_71.frameNStart = frameN;  // exact frame index
      
      text_71.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_71.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_71.setAutoDraw(false);
    }
    
    
    // *text_72* updates
    if (t >= 7.0 && text_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_72.tStart = t;  // (not accounting for frame time here)
      text_72.frameNStart = frameN;  // exact frame index
      
      text_72.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_72.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_72.setAutoDraw(false);
    }
    
    
    // *key_resp_weicheng0* updates
    if (t >= 7 && key_resp_weicheng0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_weicheng0.tStart = t;  // (not accounting for frame time here)
      key_resp_weicheng0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_weicheng0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_weicheng0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_weicheng0.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_weicheng0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_weicheng0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_weicheng0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_weicheng0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_weicheng0_allKeys = _key_resp_weicheng0_allKeys.concat(theseKeys);
      if (_key_resp_weicheng0_allKeys.length > 0) {
        key_resp_weicheng0.keys = _key_resp_weicheng0_allKeys[0].name;  // just the first key pressed
        key_resp_weicheng0.rt = _key_resp_weicheng0_allKeys[0].rt;
        key_resp_weicheng0.duration = _key_resp_weicheng0_allKeys[0].duration;
        // was this correct?
        if (key_resp_weicheng0.keys == "'left'") {
            key_resp_weicheng0.corr = 1;
        } else {
            key_resp_weicheng0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_weicheng0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_weicheng0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_weicheng0' ---
    for (const thisComponent of trial_weicheng0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_weicheng0.stopped', globalClock.getTime());
    sound_weicheng0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_weicheng0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_weicheng0.corr = 1;  // correct non-response
      } else {
         key_resp_weicheng0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_weicheng0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_weicheng0.keys', key_resp_weicheng0.keys);
    psychoJS.experiment.addData('key_resp_weicheng0.corr', key_resp_weicheng0.corr);
    if (typeof key_resp_weicheng0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_weicheng0.rt', key_resp_weicheng0.rt);
        psychoJS.experiment.addData('key_resp_weicheng0.duration', key_resp_weicheng0.duration);
        routineTimer.reset();
        }
    
    key_resp_weicheng0.stop();
    if (trial_weicheng0MaxDurationReached) {
        trial_weicheng0Clock.add(trial_weicheng0MaxDuration);
    } else {
        trial_weicheng0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_chuanghuMaxDurationReached;
var _key_resp_chuanghu_allKeys;
var trial_chuanghuMaxDuration;
var trial_chuanghuComponents;
function trial_chuanghuRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_chuanghu' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_chuanghuClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_chuanghuMaxDurationReached = false;
    // update component parameters for each repeat
    sound_chuanghu.setValue('audio/chuanghu.wav');
    sound_chuanghu.secs=3.0;
    sound_chuanghu.setVolume(1.0);
    key_resp_chuanghu.keys = undefined;
    key_resp_chuanghu.rt = undefined;
    _key_resp_chuanghu_allKeys = [];
    psychoJS.experiment.addData('trial_chuanghu.started', globalClock.getTime());
    trial_chuanghuMaxDuration = null
    // keep track of which components have finished
    trial_chuanghuComponents = [];
    trial_chuanghuComponents.push(text_chuanghu);
    trial_chuanghuComponents.push(sound_chuanghu);
    trial_chuanghuComponents.push(text_73);
    trial_chuanghuComponents.push(text_74);
    trial_chuanghuComponents.push(key_resp_chuanghu);
    
    for (const thisComponent of trial_chuanghuComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_chuanghuRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_chuanghu' ---
    // get current time
    t = trial_chuanghuClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_chuanghu* updates
    if (t >= 0.0 && text_chuanghu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_chuanghu.tStart = t;  // (not accounting for frame time here)
      text_chuanghu.frameNStart = frameN;  // exact frame index
      
      text_chuanghu.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_chuanghu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_chuanghu.setAutoDraw(false);
    }
    
    // start/stop sound_chuanghu
    if (t >= 4.0 && sound_chuanghu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_chuanghu.tStart = t;  // (not accounting for frame time here)
      sound_chuanghu.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_chuanghu.play(); });  // screen flip
      sound_chuanghu.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_chuanghu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_chuanghu.tStart + 0.5) {
        sound_chuanghu.stop();  // stop the sound (if longer than duration)
        sound_chuanghu.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_73* updates
    if (t >= 3.0 && text_73.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_73.tStart = t;  // (not accounting for frame time here)
      text_73.frameNStart = frameN;  // exact frame index
      
      text_73.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_73.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_73.setAutoDraw(false);
    }
    
    
    // *text_74* updates
    if (t >= 7.0 && text_74.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_74.tStart = t;  // (not accounting for frame time here)
      text_74.frameNStart = frameN;  // exact frame index
      
      text_74.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_74.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_74.setAutoDraw(false);
    }
    
    
    // *key_resp_chuanghu* updates
    if (t >= 7.0 && key_resp_chuanghu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_chuanghu.tStart = t;  // (not accounting for frame time here)
      key_resp_chuanghu.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_chuanghu.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chuanghu.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_chuanghu.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_chuanghu.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_chuanghu.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_chuanghu.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_chuanghu.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_chuanghu_allKeys = _key_resp_chuanghu_allKeys.concat(theseKeys);
      if (_key_resp_chuanghu_allKeys.length > 0) {
        key_resp_chuanghu.keys = _key_resp_chuanghu_allKeys[0].name;  // just the first key pressed
        key_resp_chuanghu.rt = _key_resp_chuanghu_allKeys[0].rt;
        key_resp_chuanghu.duration = _key_resp_chuanghu_allKeys[0].duration;
        // was this correct?
        if (key_resp_chuanghu.keys == "'left'") {
            key_resp_chuanghu.corr = 1;
        } else {
            key_resp_chuanghu.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_chuanghuComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_chuanghuRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_chuanghu' ---
    for (const thisComponent of trial_chuanghuComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_chuanghu.stopped', globalClock.getTime());
    sound_chuanghu.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_chuanghu.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_chuanghu.corr = 1;  // correct non-response
      } else {
         key_resp_chuanghu.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_chuanghu.corr, level);
    }
    psychoJS.experiment.addData('key_resp_chuanghu.keys', key_resp_chuanghu.keys);
    psychoJS.experiment.addData('key_resp_chuanghu.corr', key_resp_chuanghu.corr);
    if (typeof key_resp_chuanghu.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_chuanghu.rt', key_resp_chuanghu.rt);
        psychoJS.experiment.addData('key_resp_chuanghu.duration', key_resp_chuanghu.duration);
        routineTimer.reset();
        }
    
    key_resp_chuanghu.stop();
    if (trial_chuanghuMaxDurationReached) {
        trial_chuanghuClock.add(trial_chuanghuMaxDuration);
    } else {
        trial_chuanghuClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_mutouMaxDurationReached;
var _key_resp_mutou_allKeys;
var trial_mutouMaxDuration;
var trial_mutouComponents;
function trial_mutouRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_mutou' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_mutouClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_mutouMaxDurationReached = false;
    // update component parameters for each repeat
    sound_mutou.setValue('audio/mutou.wav');
    sound_mutou.secs=3.0;
    sound_mutou.setVolume(1.0);
    key_resp_mutou.keys = undefined;
    key_resp_mutou.rt = undefined;
    _key_resp_mutou_allKeys = [];
    psychoJS.experiment.addData('trial_mutou.started', globalClock.getTime());
    trial_mutouMaxDuration = null
    // keep track of which components have finished
    trial_mutouComponents = [];
    trial_mutouComponents.push(text_mutou);
    trial_mutouComponents.push(sound_mutou);
    trial_mutouComponents.push(text_79);
    trial_mutouComponents.push(text_80);
    trial_mutouComponents.push(key_resp_mutou);
    
    for (const thisComponent of trial_mutouComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_mutouRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_mutou' ---
    // get current time
    t = trial_mutouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_mutou* updates
    if (t >= 0.0 && text_mutou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_mutou.tStart = t;  // (not accounting for frame time here)
      text_mutou.frameNStart = frameN;  // exact frame index
      
      text_mutou.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_mutou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_mutou.setAutoDraw(false);
    }
    
    // start/stop sound_mutou
    if (t >= 4.0 && sound_mutou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_mutou.tStart = t;  // (not accounting for frame time here)
      sound_mutou.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_mutou.play(); });  // screen flip
      sound_mutou.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_mutou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_mutou.tStart + 0.5) {
        sound_mutou.stop();  // stop the sound (if longer than duration)
        sound_mutou.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_79* updates
    if (t >= 3.0 && text_79.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_79.tStart = t;  // (not accounting for frame time here)
      text_79.frameNStart = frameN;  // exact frame index
      
      text_79.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_79.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_79.setAutoDraw(false);
    }
    
    
    // *text_80* updates
    if (t >= 7.0 && text_80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_80.tStart = t;  // (not accounting for frame time here)
      text_80.frameNStart = frameN;  // exact frame index
      
      text_80.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_80.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_80.setAutoDraw(false);
    }
    
    
    // *key_resp_mutou* updates
    if (t >= 7.0 && key_resp_mutou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_mutou.tStart = t;  // (not accounting for frame time here)
      key_resp_mutou.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_mutou.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mutou.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_mutou.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_mutou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_mutou.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_mutou.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_mutou.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_mutou_allKeys = _key_resp_mutou_allKeys.concat(theseKeys);
      if (_key_resp_mutou_allKeys.length > 0) {
        key_resp_mutou.keys = _key_resp_mutou_allKeys[0].name;  // just the first key pressed
        key_resp_mutou.rt = _key_resp_mutou_allKeys[0].rt;
        key_resp_mutou.duration = _key_resp_mutou_allKeys[0].duration;
        // was this correct?
        if (key_resp_mutou.keys == "'left'") {
            key_resp_mutou.corr = 1;
        } else {
            key_resp_mutou.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_mutouComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_mutouRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_mutou' ---
    for (const thisComponent of trial_mutouComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_mutou.stopped', globalClock.getTime());
    sound_mutou.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_mutou.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_mutou.corr = 1;  // correct non-response
      } else {
         key_resp_mutou.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_mutou.corr, level);
    }
    psychoJS.experiment.addData('key_resp_mutou.keys', key_resp_mutou.keys);
    psychoJS.experiment.addData('key_resp_mutou.corr', key_resp_mutou.corr);
    if (typeof key_resp_mutou.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_mutou.rt', key_resp_mutou.rt);
        psychoJS.experiment.addData('key_resp_mutou.duration', key_resp_mutou.duration);
        routineTimer.reset();
        }
    
    key_resp_mutou.stop();
    if (trial_mutouMaxDurationReached) {
        trial_mutouClock.add(trial_mutouMaxDuration);
    } else {
        trial_mutouClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_jiemeiMaxDurationReached;
var _key_resp_jiemei_allKeys;
var trial_jiemeiMaxDuration;
var trial_jiemeiComponents;
function trial_jiemeiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_jiemei' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_jiemeiClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_jiemeiMaxDurationReached = false;
    // update component parameters for each repeat
    sound_jiemei.setValue('audio/jiemei.wav');
    sound_jiemei.secs=3.0;
    sound_jiemei.setVolume(1.0);
    key_resp_jiemei.keys = undefined;
    key_resp_jiemei.rt = undefined;
    _key_resp_jiemei_allKeys = [];
    psychoJS.experiment.addData('trial_jiemei.started', globalClock.getTime());
    trial_jiemeiMaxDuration = null
    // keep track of which components have finished
    trial_jiemeiComponents = [];
    trial_jiemeiComponents.push(text_jiemei);
    trial_jiemeiComponents.push(sound_jiemei);
    trial_jiemeiComponents.push(text_81);
    trial_jiemeiComponents.push(text_82);
    trial_jiemeiComponents.push(key_resp_jiemei);
    
    for (const thisComponent of trial_jiemeiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_jiemeiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_jiemei' ---
    // get current time
    t = trial_jiemeiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_jiemei* updates
    if (t >= 0.0 && text_jiemei.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_jiemei.tStart = t;  // (not accounting for frame time here)
      text_jiemei.frameNStart = frameN;  // exact frame index
      
      text_jiemei.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_jiemei.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_jiemei.setAutoDraw(false);
    }
    
    // start/stop sound_jiemei
    if (t >= 4.0 && sound_jiemei.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_jiemei.tStart = t;  // (not accounting for frame time here)
      sound_jiemei.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_jiemei.play(); });  // screen flip
      sound_jiemei.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_jiemei.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_jiemei.tStart + 0.5) {
        sound_jiemei.stop();  // stop the sound (if longer than duration)
        sound_jiemei.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_81* updates
    if (t >= 3.0 && text_81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_81.tStart = t;  // (not accounting for frame time here)
      text_81.frameNStart = frameN;  // exact frame index
      
      text_81.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_81.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_81.setAutoDraw(false);
    }
    
    
    // *text_82* updates
    if (t >= 7.0 && text_82.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_82.tStart = t;  // (not accounting for frame time here)
      text_82.frameNStart = frameN;  // exact frame index
      
      text_82.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_82.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_82.setAutoDraw(false);
    }
    
    
    // *key_resp_jiemei* updates
    if (t >= 7.0 && key_resp_jiemei.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_jiemei.tStart = t;  // (not accounting for frame time here)
      key_resp_jiemei.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_jiemei.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiemei.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiemei.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_jiemei.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_jiemei.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_jiemei.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_jiemei.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_jiemei_allKeys = _key_resp_jiemei_allKeys.concat(theseKeys);
      if (_key_resp_jiemei_allKeys.length > 0) {
        key_resp_jiemei.keys = _key_resp_jiemei_allKeys[0].name;  // just the first key pressed
        key_resp_jiemei.rt = _key_resp_jiemei_allKeys[0].rt;
        key_resp_jiemei.duration = _key_resp_jiemei_allKeys[0].duration;
        // was this correct?
        if (key_resp_jiemei.keys == "'left'") {
            key_resp_jiemei.corr = 1;
        } else {
            key_resp_jiemei.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_jiemeiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_jiemeiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_jiemei' ---
    for (const thisComponent of trial_jiemeiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_jiemei.stopped', globalClock.getTime());
    sound_jiemei.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_jiemei.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_jiemei.corr = 1;  // correct non-response
      } else {
         key_resp_jiemei.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_jiemei.corr, level);
    }
    psychoJS.experiment.addData('key_resp_jiemei.keys', key_resp_jiemei.keys);
    psychoJS.experiment.addData('key_resp_jiemei.corr', key_resp_jiemei.corr);
    if (typeof key_resp_jiemei.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_jiemei.rt', key_resp_jiemei.rt);
        psychoJS.experiment.addData('key_resp_jiemei.duration', key_resp_jiemei.duration);
        routineTimer.reset();
        }
    
    key_resp_jiemei.stop();
    if (trial_jiemeiMaxDurationReached) {
        trial_jiemeiClock.add(trial_jiemeiMaxDuration);
    } else {
        trial_jiemeiClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_huahai1MaxDurationReached;
var _key_resp_huahai1_allKeys;
var trial_huahai1MaxDuration;
var trial_huahai1Components;
function trial_huahai1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_huahai1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_huahai1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_huahai1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_huahi1.setValue('audio/huahai1.wav');
    sound_huahi1.secs=3.0;
    sound_huahi1.setVolume(1.0);
    key_resp_huahai1.keys = undefined;
    key_resp_huahai1.rt = undefined;
    _key_resp_huahai1_allKeys = [];
    psychoJS.experiment.addData('trial_huahai1.started', globalClock.getTime());
    trial_huahai1MaxDuration = null
    // keep track of which components have finished
    trial_huahai1Components = [];
    trial_huahai1Components.push(text_huahai1);
    trial_huahai1Components.push(sound_huahi1);
    trial_huahai1Components.push(text_83);
    trial_huahai1Components.push(text_84);
    trial_huahai1Components.push(key_resp_huahai1);
    
    for (const thisComponent of trial_huahai1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_huahai1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_huahai1' ---
    // get current time
    t = trial_huahai1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_huahai1* updates
    if (t >= 0.0 && text_huahai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_huahai1.tStart = t;  // (not accounting for frame time here)
      text_huahai1.frameNStart = frameN;  // exact frame index
      
      text_huahai1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_huahai1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_huahai1.setAutoDraw(false);
    }
    
    // start/stop sound_huahi1
    if (t >= 4.0 && sound_huahi1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_huahi1.tStart = t;  // (not accounting for frame time here)
      sound_huahi1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_huahi1.play(); });  // screen flip
      sound_huahi1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_huahi1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_huahi1.tStart + 0.5) {
        sound_huahi1.stop();  // stop the sound (if longer than duration)
        sound_huahi1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_83* updates
    if (t >= 3.0 && text_83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_83.tStart = t;  // (not accounting for frame time here)
      text_83.frameNStart = frameN;  // exact frame index
      
      text_83.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_83.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_83.setAutoDraw(false);
    }
    
    
    // *text_84* updates
    if (t >= 7.0 && text_84.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_84.tStart = t;  // (not accounting for frame time here)
      text_84.frameNStart = frameN;  // exact frame index
      
      text_84.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_84.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_84.setAutoDraw(false);
    }
    
    
    // *key_resp_huahai1* updates
    if (t >= 7.0 && key_resp_huahai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_huahai1.tStart = t;  // (not accounting for frame time here)
      key_resp_huahai1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_huahai1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_huahai1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_huahai1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_huahai1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_huahai1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_huahai1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_huahai1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_huahai1_allKeys = _key_resp_huahai1_allKeys.concat(theseKeys);
      if (_key_resp_huahai1_allKeys.length > 0) {
        key_resp_huahai1.keys = _key_resp_huahai1_allKeys[0].name;  // just the first key pressed
        key_resp_huahai1.rt = _key_resp_huahai1_allKeys[0].rt;
        key_resp_huahai1.duration = _key_resp_huahai1_allKeys[0].duration;
        // was this correct?
        if (key_resp_huahai1.keys == "'right'") {
            key_resp_huahai1.corr = 1;
        } else {
            key_resp_huahai1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_huahai1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_huahai1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_huahai1' ---
    for (const thisComponent of trial_huahai1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_huahai1.stopped', globalClock.getTime());
    sound_huahi1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_huahai1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_huahai1.corr = 1;  // correct non-response
      } else {
         key_resp_huahai1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_huahai1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_huahai1.keys', key_resp_huahai1.keys);
    psychoJS.experiment.addData('key_resp_huahai1.corr', key_resp_huahai1.corr);
    if (typeof key_resp_huahai1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_huahai1.rt', key_resp_huahai1.rt);
        psychoJS.experiment.addData('key_resp_huahai1.duration', key_resp_huahai1.duration);
        routineTimer.reset();
        }
    
    key_resp_huahai1.stop();
    if (trial_huahai1MaxDurationReached) {
        trial_huahai1Clock.add(trial_huahai1MaxDuration);
    } else {
        trial_huahai1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_lixiang0MaxDurationReached;
var _key_resp_lixiang0_allKeys;
var trial_lixiang0MaxDuration;
var trial_lixiang0Components;
function trial_lixiang0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_lixiang0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_lixiang0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_lixiang0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_lixiang0.setValue('audio/lixiang0.wav');
    sound_lixiang0.secs=3.0;
    sound_lixiang0.setVolume(1.0);
    key_resp_lixiang0.keys = undefined;
    key_resp_lixiang0.rt = undefined;
    _key_resp_lixiang0_allKeys = [];
    psychoJS.experiment.addData('trial_lixiang0.started', globalClock.getTime());
    trial_lixiang0MaxDuration = null
    // keep track of which components have finished
    trial_lixiang0Components = [];
    trial_lixiang0Components.push(text_lixiang0);
    trial_lixiang0Components.push(sound_lixiang0);
    trial_lixiang0Components.push(text_85);
    trial_lixiang0Components.push(text_86);
    trial_lixiang0Components.push(key_resp_lixiang0);
    
    for (const thisComponent of trial_lixiang0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_lixiang0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_lixiang0' ---
    // get current time
    t = trial_lixiang0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lixiang0* updates
    if (t >= 0.0 && text_lixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lixiang0.tStart = t;  // (not accounting for frame time here)
      text_lixiang0.frameNStart = frameN;  // exact frame index
      
      text_lixiang0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_lixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_lixiang0.setAutoDraw(false);
    }
    
    // start/stop sound_lixiang0
    if (t >= 4.0 && sound_lixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_lixiang0.tStart = t;  // (not accounting for frame time here)
      sound_lixiang0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_lixiang0.play(); });  // screen flip
      sound_lixiang0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_lixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_lixiang0.tStart + 0.5) {
        sound_lixiang0.stop();  // stop the sound (if longer than duration)
        sound_lixiang0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_85* updates
    if (t >= 3.0 && text_85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_85.tStart = t;  // (not accounting for frame time here)
      text_85.frameNStart = frameN;  // exact frame index
      
      text_85.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_85.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_85.setAutoDraw(false);
    }
    
    
    // *text_86* updates
    if (t >= 7.0 && text_86.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_86.tStart = t;  // (not accounting for frame time here)
      text_86.frameNStart = frameN;  // exact frame index
      
      text_86.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_86.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_86.setAutoDraw(false);
    }
    
    
    // *key_resp_lixiang0* updates
    if (t >= 7.0 && key_resp_lixiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lixiang0.tStart = t;  // (not accounting for frame time here)
      key_resp_lixiang0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lixiang0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lixiang0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lixiang0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_lixiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_lixiang0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_lixiang0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lixiang0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_lixiang0_allKeys = _key_resp_lixiang0_allKeys.concat(theseKeys);
      if (_key_resp_lixiang0_allKeys.length > 0) {
        key_resp_lixiang0.keys = _key_resp_lixiang0_allKeys[0].name;  // just the first key pressed
        key_resp_lixiang0.rt = _key_resp_lixiang0_allKeys[0].rt;
        key_resp_lixiang0.duration = _key_resp_lixiang0_allKeys[0].duration;
        // was this correct?
        if (key_resp_lixiang0.keys == "'left'") {
            key_resp_lixiang0.corr = 1;
        } else {
            key_resp_lixiang0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_lixiang0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_lixiang0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_lixiang0' ---
    for (const thisComponent of trial_lixiang0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_lixiang0.stopped', globalClock.getTime());
    sound_lixiang0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_lixiang0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_lixiang0.corr = 1;  // correct non-response
      } else {
         key_resp_lixiang0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lixiang0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lixiang0.keys', key_resp_lixiang0.keys);
    psychoJS.experiment.addData('key_resp_lixiang0.corr', key_resp_lixiang0.corr);
    if (typeof key_resp_lixiang0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lixiang0.rt', key_resp_lixiang0.rt);
        psychoJS.experiment.addData('key_resp_lixiang0.duration', key_resp_lixiang0.duration);
        routineTimer.reset();
        }
    
    key_resp_lixiang0.stop();
    if (trial_lixiang0MaxDurationReached) {
        trial_lixiang0Clock.add(trial_lixiang0MaxDuration);
    } else {
        trial_lixiang0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_heimei1MaxDurationReached;
var _key_resp_heimei1_allKeys;
var trial_heimei1MaxDuration;
var trial_heimei1Components;
function trial_heimei1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_heimei1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_heimei1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_heimei1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_heimei1.setValue('audio/heimei1.wav');
    sound_heimei1.secs=3;
    sound_heimei1.setVolume(1.0);
    key_resp_heimei1.keys = undefined;
    key_resp_heimei1.rt = undefined;
    _key_resp_heimei1_allKeys = [];
    psychoJS.experiment.addData('trial_heimei1.started', globalClock.getTime());
    trial_heimei1MaxDuration = null
    // keep track of which components have finished
    trial_heimei1Components = [];
    trial_heimei1Components.push(text_heimei1);
    trial_heimei1Components.push(sound_heimei1);
    trial_heimei1Components.push(text_87);
    trial_heimei1Components.push(text_88);
    trial_heimei1Components.push(key_resp_heimei1);
    
    for (const thisComponent of trial_heimei1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_heimei1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_heimei1' ---
    // get current time
    t = trial_heimei1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_heimei1* updates
    if (t >= 0.0 && text_heimei1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_heimei1.tStart = t;  // (not accounting for frame time here)
      text_heimei1.frameNStart = frameN;  // exact frame index
      
      text_heimei1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_heimei1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_heimei1.setAutoDraw(false);
    }
    
    // start/stop sound_heimei1
    if (t >= 4 && sound_heimei1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_heimei1.tStart = t;  // (not accounting for frame time here)
      sound_heimei1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_heimei1.play(); });  // screen flip
      sound_heimei1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_heimei1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_heimei1.tStart + 0.5) {
        sound_heimei1.stop();  // stop the sound (if longer than duration)
        sound_heimei1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_87* updates
    if (t >= 3.0 && text_87.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_87.tStart = t;  // (not accounting for frame time here)
      text_87.frameNStart = frameN;  // exact frame index
      
      text_87.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_87.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_87.setAutoDraw(false);
    }
    
    
    // *text_88* updates
    if (t >= 7.0 && text_88.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_88.tStart = t;  // (not accounting for frame time here)
      text_88.frameNStart = frameN;  // exact frame index
      
      text_88.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_88.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_88.setAutoDraw(false);
    }
    
    
    // *key_resp_heimei1* updates
    if (t >= 7.0 && key_resp_heimei1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_heimei1.tStart = t;  // (not accounting for frame time here)
      key_resp_heimei1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_heimei1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimei1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimei1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_heimei1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_heimei1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_heimei1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_heimei1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_heimei1_allKeys = _key_resp_heimei1_allKeys.concat(theseKeys);
      if (_key_resp_heimei1_allKeys.length > 0) {
        key_resp_heimei1.keys = _key_resp_heimei1_allKeys[0].name;  // just the first key pressed
        key_resp_heimei1.rt = _key_resp_heimei1_allKeys[0].rt;
        key_resp_heimei1.duration = _key_resp_heimei1_allKeys[0].duration;
        // was this correct?
        if (key_resp_heimei1.keys == "'right'") {
            key_resp_heimei1.corr = 1;
        } else {
            key_resp_heimei1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_heimei1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_heimei1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_heimei1' ---
    for (const thisComponent of trial_heimei1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_heimei1.stopped', globalClock.getTime());
    sound_heimei1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_heimei1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_heimei1.corr = 1;  // correct non-response
      } else {
         key_resp_heimei1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_heimei1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_heimei1.keys', key_resp_heimei1.keys);
    psychoJS.experiment.addData('key_resp_heimei1.corr', key_resp_heimei1.corr);
    if (typeof key_resp_heimei1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_heimei1.rt', key_resp_heimei1.rt);
        psychoJS.experiment.addData('key_resp_heimei1.duration', key_resp_heimei1.duration);
        routineTimer.reset();
        }
    
    key_resp_heimei1.stop();
    if (trial_heimei1MaxDurationReached) {
        trial_heimei1Clock.add(trial_heimei1MaxDuration);
    } else {
        trial_heimei1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_yintian1MaxDurationReached;
var _key_resp_yintian1_allKeys;
var trial_yintian1MaxDuration;
var trial_yintian1Components;
function trial_yintian1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_yintian1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_yintian1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_yintian1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_yintian1.setValue('audio/yintian1.wav');
    sound_yintian1.secs=3.0;
    sound_yintian1.setVolume(1.0);
    key_resp_yintian1.keys = undefined;
    key_resp_yintian1.rt = undefined;
    _key_resp_yintian1_allKeys = [];
    psychoJS.experiment.addData('trial_yintian1.started', globalClock.getTime());
    trial_yintian1MaxDuration = null
    // keep track of which components have finished
    trial_yintian1Components = [];
    trial_yintian1Components.push(text_yintian1);
    trial_yintian1Components.push(sound_yintian1);
    trial_yintian1Components.push(text_89);
    trial_yintian1Components.push(text_90);
    trial_yintian1Components.push(key_resp_yintian1);
    
    for (const thisComponent of trial_yintian1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_yintian1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_yintian1' ---
    // get current time
    t = trial_yintian1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_yintian1* updates
    if (t >= 0.0 && text_yintian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_yintian1.tStart = t;  // (not accounting for frame time here)
      text_yintian1.frameNStart = frameN;  // exact frame index
      
      text_yintian1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_yintian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_yintian1.setAutoDraw(false);
    }
    
    // start/stop sound_yintian1
    if (t >= 4.0 && sound_yintian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_yintian1.tStart = t;  // (not accounting for frame time here)
      sound_yintian1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_yintian1.play(); });  // screen flip
      sound_yintian1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_yintian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_yintian1.tStart + 0.5) {
        sound_yintian1.stop();  // stop the sound (if longer than duration)
        sound_yintian1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_89* updates
    if (t >= 3.0 && text_89.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_89.tStart = t;  // (not accounting for frame time here)
      text_89.frameNStart = frameN;  // exact frame index
      
      text_89.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_89.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_89.setAutoDraw(false);
    }
    
    
    // *text_90* updates
    if (t >= 7.0 && text_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_90.tStart = t;  // (not accounting for frame time here)
      text_90.frameNStart = frameN;  // exact frame index
      
      text_90.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_90.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_90.setAutoDraw(false);
    }
    
    
    // *key_resp_yintian1* updates
    if (t >= 7.0 && key_resp_yintian1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_yintian1.tStart = t;  // (not accounting for frame time here)
      key_resp_yintian1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_yintian1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yintian1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_yintian1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_yintian1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_yintian1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_yintian1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_yintian1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_yintian1_allKeys = _key_resp_yintian1_allKeys.concat(theseKeys);
      if (_key_resp_yintian1_allKeys.length > 0) {
        key_resp_yintian1.keys = _key_resp_yintian1_allKeys[0].name;  // just the first key pressed
        key_resp_yintian1.rt = _key_resp_yintian1_allKeys[0].rt;
        key_resp_yintian1.duration = _key_resp_yintian1_allKeys[0].duration;
        // was this correct?
        if (key_resp_yintian1.keys == "'right'") {
            key_resp_yintian1.corr = 1;
        } else {
            key_resp_yintian1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_yintian1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_yintian1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_yintian1' ---
    for (const thisComponent of trial_yintian1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_yintian1.stopped', globalClock.getTime());
    sound_yintian1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_yintian1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_yintian1.corr = 1;  // correct non-response
      } else {
         key_resp_yintian1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_yintian1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_yintian1.keys', key_resp_yintian1.keys);
    psychoJS.experiment.addData('key_resp_yintian1.corr', key_resp_yintian1.corr);
    if (typeof key_resp_yintian1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_yintian1.rt', key_resp_yintian1.rt);
        psychoJS.experiment.addData('key_resp_yintian1.duration', key_resp_yintian1.duration);
        routineTimer.reset();
        }
    
    key_resp_yintian1.stop();
    if (trial_yintian1MaxDurationReached) {
        trial_yintian1Clock.add(trial_yintian1MaxDuration);
    } else {
        trial_yintian1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_danche0MaxDurationReached;
var _key_resp_danche0_allKeys;
var trial_danche0MaxDuration;
var trial_danche0Components;
function trial_danche0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_danche0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_danche0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_danche0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_danche0.setValue('audio/danche0.wav');
    sound_danche0.secs=3.0;
    sound_danche0.setVolume(1.0);
    key_resp_danche0.keys = undefined;
    key_resp_danche0.rt = undefined;
    _key_resp_danche0_allKeys = [];
    psychoJS.experiment.addData('trial_danche0.started', globalClock.getTime());
    trial_danche0MaxDuration = null
    // keep track of which components have finished
    trial_danche0Components = [];
    trial_danche0Components.push(text_danche0);
    trial_danche0Components.push(sound_danche0);
    trial_danche0Components.push(text_91);
    trial_danche0Components.push(text_92);
    trial_danche0Components.push(key_resp_danche0);
    
    for (const thisComponent of trial_danche0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_danche0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_danche0' ---
    // get current time
    t = trial_danche0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_danche0* updates
    if (t >= 0.0 && text_danche0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_danche0.tStart = t;  // (not accounting for frame time here)
      text_danche0.frameNStart = frameN;  // exact frame index
      
      text_danche0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_danche0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_danche0.setAutoDraw(false);
    }
    
    // start/stop sound_danche0
    if (t >= 4.0 && sound_danche0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_danche0.tStart = t;  // (not accounting for frame time here)
      sound_danche0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_danche0.play(); });  // screen flip
      sound_danche0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_danche0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_danche0.tStart + 0.5) {
        sound_danche0.stop();  // stop the sound (if longer than duration)
        sound_danche0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_91* updates
    if (t >= 3.0 && text_91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_91.tStart = t;  // (not accounting for frame time here)
      text_91.frameNStart = frameN;  // exact frame index
      
      text_91.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_91.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_91.setAutoDraw(false);
    }
    
    
    // *text_92* updates
    if (t >= 7.0 && text_92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_92.tStart = t;  // (not accounting for frame time here)
      text_92.frameNStart = frameN;  // exact frame index
      
      text_92.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_92.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_92.setAutoDraw(false);
    }
    
    
    // *key_resp_danche0* updates
    if (t >= 7.0 && key_resp_danche0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_danche0.tStart = t;  // (not accounting for frame time here)
      key_resp_danche0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_danche0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_danche0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_danche0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_danche0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_danche0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_danche0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_danche0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_danche0_allKeys = _key_resp_danche0_allKeys.concat(theseKeys);
      if (_key_resp_danche0_allKeys.length > 0) {
        key_resp_danche0.keys = _key_resp_danche0_allKeys[0].name;  // just the first key pressed
        key_resp_danche0.rt = _key_resp_danche0_allKeys[0].rt;
        key_resp_danche0.duration = _key_resp_danche0_allKeys[0].duration;
        // was this correct?
        if (key_resp_danche0.keys == "'left'") {
            key_resp_danche0.corr = 1;
        } else {
            key_resp_danche0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_danche0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_danche0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_danche0' ---
    for (const thisComponent of trial_danche0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_danche0.stopped', globalClock.getTime());
    sound_danche0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_danche0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_danche0.corr = 1;  // correct non-response
      } else {
         key_resp_danche0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_danche0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_danche0.keys', key_resp_danche0.keys);
    psychoJS.experiment.addData('key_resp_danche0.corr', key_resp_danche0.corr);
    if (typeof key_resp_danche0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_danche0.rt', key_resp_danche0.rt);
        psychoJS.experiment.addData('key_resp_danche0.duration', key_resp_danche0.duration);
        routineTimer.reset();
        }
    
    key_resp_danche0.stop();
    if (trial_danche0MaxDurationReached) {
        trial_danche0Clock.add(trial_danche0MaxDuration);
    } else {
        trial_danche0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baoma0MaxDurationReached;
var _key_resp_baoma0_allKeys;
var trial_baoma0MaxDuration;
var trial_baoma0Components;
function trial_baoma0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baoma0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baoma0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_baoma0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baoma0.setValue('audio/baoma0.wav');
    sound_baoma0.secs=3.0;
    sound_baoma0.setVolume(1.0);
    key_resp_baoma0.keys = undefined;
    key_resp_baoma0.rt = undefined;
    _key_resp_baoma0_allKeys = [];
    psychoJS.experiment.addData('trial_baoma0.started', globalClock.getTime());
    trial_baoma0MaxDuration = null
    // keep track of which components have finished
    trial_baoma0Components = [];
    trial_baoma0Components.push(text_baoma0);
    trial_baoma0Components.push(sound_baoma0);
    trial_baoma0Components.push(text_93);
    trial_baoma0Components.push(text_94);
    trial_baoma0Components.push(key_resp_baoma0);
    
    for (const thisComponent of trial_baoma0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baoma0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baoma0' ---
    // get current time
    t = trial_baoma0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baoma0* updates
    if (t >= 0.0 && text_baoma0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baoma0.tStart = t;  // (not accounting for frame time here)
      text_baoma0.frameNStart = frameN;  // exact frame index
      
      text_baoma0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baoma0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baoma0.setAutoDraw(false);
    }
    
    // start/stop sound_baoma0
    if (t >= 4.0 && sound_baoma0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baoma0.tStart = t;  // (not accounting for frame time here)
      sound_baoma0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baoma0.play(); });  // screen flip
      sound_baoma0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baoma0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baoma0.tStart + 0.5) {
        sound_baoma0.stop();  // stop the sound (if longer than duration)
        sound_baoma0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_93* updates
    if (t >= 3.0 && text_93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_93.tStart = t;  // (not accounting for frame time here)
      text_93.frameNStart = frameN;  // exact frame index
      
      text_93.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_93.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_93.setAutoDraw(false);
    }
    
    
    // *text_94* updates
    if (t >= 7.0 && text_94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_94.tStart = t;  // (not accounting for frame time here)
      text_94.frameNStart = frameN;  // exact frame index
      
      text_94.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_94.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_94.setAutoDraw(false);
    }
    
    
    // *key_resp_baoma0* updates
    if (t >= 7.0 && key_resp_baoma0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baoma0.tStart = t;  // (not accounting for frame time here)
      key_resp_baoma0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baoma0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baoma0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baoma0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baoma0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baoma0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baoma0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baoma0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baoma0_allKeys = _key_resp_baoma0_allKeys.concat(theseKeys);
      if (_key_resp_baoma0_allKeys.length > 0) {
        key_resp_baoma0.keys = _key_resp_baoma0_allKeys[0].name;  // just the first key pressed
        key_resp_baoma0.rt = _key_resp_baoma0_allKeys[0].rt;
        key_resp_baoma0.duration = _key_resp_baoma0_allKeys[0].duration;
        // was this correct?
        if (key_resp_baoma0.keys == "'left'") {
            key_resp_baoma0.corr = 1;
        } else {
            key_resp_baoma0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baoma0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baoma0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baoma0' ---
    for (const thisComponent of trial_baoma0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baoma0.stopped', globalClock.getTime());
    sound_baoma0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baoma0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_baoma0.corr = 1;  // correct non-response
      } else {
         key_resp_baoma0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baoma0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baoma0.keys', key_resp_baoma0.keys);
    psychoJS.experiment.addData('key_resp_baoma0.corr', key_resp_baoma0.corr);
    if (typeof key_resp_baoma0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baoma0.rt', key_resp_baoma0.rt);
        psychoJS.experiment.addData('key_resp_baoma0.duration', key_resp_baoma0.duration);
        routineTimer.reset();
        }
    
    key_resp_baoma0.stop();
    if (trial_baoma0MaxDurationReached) {
        trial_baoma0Clock.add(trial_baoma0MaxDuration);
    } else {
        trial_baoma0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_huahai0MaxDurationReached;
var _key_resp_huahai0_allKeys;
var trial_huahai0MaxDuration;
var trial_huahai0Components;
function trial_huahai0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_huahai0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_huahai0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_huahai0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_huahai0.setValue('audio/huahai0.wav');
    sound_huahai0.secs=3.0;
    sound_huahai0.setVolume(1.0);
    key_resp_huahai0.keys = undefined;
    key_resp_huahai0.rt = undefined;
    _key_resp_huahai0_allKeys = [];
    psychoJS.experiment.addData('trial_huahai0.started', globalClock.getTime());
    trial_huahai0MaxDuration = null
    // keep track of which components have finished
    trial_huahai0Components = [];
    trial_huahai0Components.push(text_huahai0);
    trial_huahai0Components.push(sound_huahai0);
    trial_huahai0Components.push(text_95);
    trial_huahai0Components.push(text_96);
    trial_huahai0Components.push(key_resp_huahai0);
    
    for (const thisComponent of trial_huahai0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_huahai0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_huahai0' ---
    // get current time
    t = trial_huahai0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_huahai0* updates
    if (t >= 0.0 && text_huahai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_huahai0.tStart = t;  // (not accounting for frame time here)
      text_huahai0.frameNStart = frameN;  // exact frame index
      
      text_huahai0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_huahai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_huahai0.setAutoDraw(false);
    }
    
    // start/stop sound_huahai0
    if (t >= 4.0 && sound_huahai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_huahai0.tStart = t;  // (not accounting for frame time here)
      sound_huahai0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_huahai0.play(); });  // screen flip
      sound_huahai0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_huahai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_huahai0.tStart + 0.5) {
        sound_huahai0.stop();  // stop the sound (if longer than duration)
        sound_huahai0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_95* updates
    if (t >= 3.0 && text_95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_95.tStart = t;  // (not accounting for frame time here)
      text_95.frameNStart = frameN;  // exact frame index
      
      text_95.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_95.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_95.setAutoDraw(false);
    }
    
    
    // *text_96* updates
    if (t >= 7.0 && text_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_96.tStart = t;  // (not accounting for frame time here)
      text_96.frameNStart = frameN;  // exact frame index
      
      text_96.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_96.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_96.setAutoDraw(false);
    }
    
    
    // *key_resp_huahai0* updates
    if (t >= 7.0 && key_resp_huahai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_huahai0.tStart = t;  // (not accounting for frame time here)
      key_resp_huahai0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_huahai0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_huahai0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_huahai0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_huahai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_huahai0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_huahai0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_huahai0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_huahai0_allKeys = _key_resp_huahai0_allKeys.concat(theseKeys);
      if (_key_resp_huahai0_allKeys.length > 0) {
        key_resp_huahai0.keys = _key_resp_huahai0_allKeys[0].name;  // just the first key pressed
        key_resp_huahai0.rt = _key_resp_huahai0_allKeys[0].rt;
        key_resp_huahai0.duration = _key_resp_huahai0_allKeys[0].duration;
        // was this correct?
        if (key_resp_huahai0.keys == "'left'") {
            key_resp_huahai0.corr = 1;
        } else {
            key_resp_huahai0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_huahai0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_huahai0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_huahai0' ---
    for (const thisComponent of trial_huahai0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_huahai0.stopped', globalClock.getTime());
    sound_huahai0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_huahai0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_huahai0.corr = 1;  // correct non-response
      } else {
         key_resp_huahai0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_huahai0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_huahai0.keys', key_resp_huahai0.keys);
    psychoJS.experiment.addData('key_resp_huahai0.corr', key_resp_huahai0.corr);
    if (typeof key_resp_huahai0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_huahai0.rt', key_resp_huahai0.rt);
        psychoJS.experiment.addData('key_resp_huahai0.duration', key_resp_huahai0.duration);
        routineTimer.reset();
        }
    
    key_resp_huahai0.stop();
    if (trial_huahai0MaxDurationReached) {
        trial_huahai0Clock.add(trial_huahai0MaxDuration);
    } else {
        trial_huahai0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_lixiang1MaxDurationReached;
var _key_resp_lixiang1_allKeys;
var trial_lixiang1MaxDuration;
var trial_lixiang1Components;
function trial_lixiang1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_lixiang1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_lixiang1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_lixiang1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_lixiang1.setValue('audio/lixiang1.wav');
    sound_lixiang1.secs=3.0;
    sound_lixiang1.setVolume(1.0);
    key_resp_lixiang1.keys = undefined;
    key_resp_lixiang1.rt = undefined;
    _key_resp_lixiang1_allKeys = [];
    psychoJS.experiment.addData('trial_lixiang1.started', globalClock.getTime());
    trial_lixiang1MaxDuration = null
    // keep track of which components have finished
    trial_lixiang1Components = [];
    trial_lixiang1Components.push(text_lixiang1);
    trial_lixiang1Components.push(sound_lixiang1);
    trial_lixiang1Components.push(text_97);
    trial_lixiang1Components.push(text_98);
    trial_lixiang1Components.push(key_resp_lixiang1);
    
    for (const thisComponent of trial_lixiang1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_lixiang1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_lixiang1' ---
    // get current time
    t = trial_lixiang1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lixiang1* updates
    if (t >= 0.0 && text_lixiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lixiang1.tStart = t;  // (not accounting for frame time here)
      text_lixiang1.frameNStart = frameN;  // exact frame index
      
      text_lixiang1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_lixiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_lixiang1.setAutoDraw(false);
    }
    
    // start/stop sound_lixiang1
    if (t >= 4.0 && sound_lixiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_lixiang1.tStart = t;  // (not accounting for frame time here)
      sound_lixiang1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_lixiang1.play(); });  // screen flip
      sound_lixiang1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_lixiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_lixiang1.tStart + 0.5) {
        sound_lixiang1.stop();  // stop the sound (if longer than duration)
        sound_lixiang1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_97* updates
    if (t >= 3.0 && text_97.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_97.tStart = t;  // (not accounting for frame time here)
      text_97.frameNStart = frameN;  // exact frame index
      
      text_97.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_97.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_97.setAutoDraw(false);
    }
    
    
    // *text_98* updates
    if (t >= 7.0 && text_98.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_98.tStart = t;  // (not accounting for frame time here)
      text_98.frameNStart = frameN;  // exact frame index
      
      text_98.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_98.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_98.setAutoDraw(false);
    }
    
    
    // *key_resp_lixiang1* updates
    if (t >= 7.0 && key_resp_lixiang1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lixiang1.tStart = t;  // (not accounting for frame time here)
      key_resp_lixiang1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lixiang1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lixiang1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lixiang1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_lixiang1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_lixiang1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_lixiang1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lixiang1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_lixiang1_allKeys = _key_resp_lixiang1_allKeys.concat(theseKeys);
      if (_key_resp_lixiang1_allKeys.length > 0) {
        key_resp_lixiang1.keys = _key_resp_lixiang1_allKeys[0].name;  // just the first key pressed
        key_resp_lixiang1.rt = _key_resp_lixiang1_allKeys[0].rt;
        key_resp_lixiang1.duration = _key_resp_lixiang1_allKeys[0].duration;
        // was this correct?
        if (key_resp_lixiang1.keys == "'right'") {
            key_resp_lixiang1.corr = 1;
        } else {
            key_resp_lixiang1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_lixiang1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_lixiang1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_lixiang1' ---
    for (const thisComponent of trial_lixiang1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_lixiang1.stopped', globalClock.getTime());
    sound_lixiang1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_lixiang1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_lixiang1.corr = 1;  // correct non-response
      } else {
         key_resp_lixiang1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lixiang1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lixiang1.keys', key_resp_lixiang1.keys);
    psychoJS.experiment.addData('key_resp_lixiang1.corr', key_resp_lixiang1.corr);
    if (typeof key_resp_lixiang1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lixiang1.rt', key_resp_lixiang1.rt);
        psychoJS.experiment.addData('key_resp_lixiang1.duration', key_resp_lixiang1.duration);
        routineTimer.reset();
        }
    
    key_resp_lixiang1.stop();
    if (trial_lixiang1MaxDurationReached) {
        trial_lixiang1Clock.add(trial_lixiang1MaxDuration);
    } else {
        trial_lixiang1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_beiying0MaxDurationReached;
var _key_resp_beiying0_allKeys;
var trial_beiying0MaxDuration;
var trial_beiying0Components;
function trial_beiying0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_beiying0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_beiying0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_beiying0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_beiying0.setValue('audio/beiying0.wav');
    sound_beiying0.secs=3;
    sound_beiying0.setVolume(1.0);
    key_resp_beiying0.keys = undefined;
    key_resp_beiying0.rt = undefined;
    _key_resp_beiying0_allKeys = [];
    psychoJS.experiment.addData('trial_beiying0.started', globalClock.getTime());
    trial_beiying0MaxDuration = null
    // keep track of which components have finished
    trial_beiying0Components = [];
    trial_beiying0Components.push(text_beiying0);
    trial_beiying0Components.push(sound_beiying0);
    trial_beiying0Components.push(text_99);
    trial_beiying0Components.push(text_100);
    trial_beiying0Components.push(key_resp_beiying0);
    
    for (const thisComponent of trial_beiying0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_beiying0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_beiying0' ---
    // get current time
    t = trial_beiying0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_beiying0* updates
    if (t >= 0.0 && text_beiying0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_beiying0.tStart = t;  // (not accounting for frame time here)
      text_beiying0.frameNStart = frameN;  // exact frame index
      
      text_beiying0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_beiying0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_beiying0.setAutoDraw(false);
    }
    
    // start/stop sound_beiying0
    if (t >= 4 && sound_beiying0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_beiying0.tStart = t;  // (not accounting for frame time here)
      sound_beiying0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_beiying0.play(); });  // screen flip
      sound_beiying0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_beiying0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_beiying0.tStart + 0.5) {
        sound_beiying0.stop();  // stop the sound (if longer than duration)
        sound_beiying0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_99* updates
    if (t >= 3.0 && text_99.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_99.tStart = t;  // (not accounting for frame time here)
      text_99.frameNStart = frameN;  // exact frame index
      
      text_99.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_99.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_99.setAutoDraw(false);
    }
    
    
    // *text_100* updates
    if (t >= 7.0 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_100.setAutoDraw(false);
    }
    
    
    // *key_resp_beiying0* updates
    if (t >= 7.0 && key_resp_beiying0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_beiying0.tStart = t;  // (not accounting for frame time here)
      key_resp_beiying0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_beiying0.clock.reset();
      key_resp_beiying0.start();
      key_resp_beiying0.clearEvents();
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_beiying0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_beiying0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_beiying0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_beiying0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_beiying0_allKeys = _key_resp_beiying0_allKeys.concat(theseKeys);
      if (_key_resp_beiying0_allKeys.length > 0) {
        key_resp_beiying0.keys = _key_resp_beiying0_allKeys[0].name;  // just the first key pressed
        key_resp_beiying0.rt = _key_resp_beiying0_allKeys[0].rt;
        key_resp_beiying0.duration = _key_resp_beiying0_allKeys[0].duration;
        // was this correct?
        if (key_resp_beiying0.keys == "'left'") {
            key_resp_beiying0.corr = 1;
        } else {
            key_resp_beiying0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_beiying0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_beiying0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_beiying0' ---
    for (const thisComponent of trial_beiying0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_beiying0.stopped', globalClock.getTime());
    sound_beiying0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_beiying0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_beiying0.corr = 1;  // correct non-response
      } else {
         key_resp_beiying0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_beiying0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_beiying0.keys', key_resp_beiying0.keys);
    psychoJS.experiment.addData('key_resp_beiying0.corr', key_resp_beiying0.corr);
    if (typeof key_resp_beiying0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_beiying0.rt', key_resp_beiying0.rt);
        psychoJS.experiment.addData('key_resp_beiying0.duration', key_resp_beiying0.duration);
        routineTimer.reset();
        }
    
    key_resp_beiying0.stop();
    if (trial_beiying0MaxDurationReached) {
        trial_beiying0Clock.add(trial_beiying0MaxDuration);
    } else {
        trial_beiying0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_lianxiang0MaxDurationReached;
var _key_resp_lianxiang0_allKeys;
var trial_lianxiang0MaxDuration;
var trial_lianxiang0Components;
function trial_lianxiang0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_lianxiang0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_lianxiang0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_lianxiang0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_lianxiang0.setValue('audio/lianxiang0.wav');
    sound_lianxiang0.secs=3.0;
    sound_lianxiang0.setVolume(1.0);
    key_resp_lianxiang0.keys = undefined;
    key_resp_lianxiang0.rt = undefined;
    _key_resp_lianxiang0_allKeys = [];
    psychoJS.experiment.addData('trial_lianxiang0.started', globalClock.getTime());
    trial_lianxiang0MaxDuration = null
    // keep track of which components have finished
    trial_lianxiang0Components = [];
    trial_lianxiang0Components.push(text_lianxiang0);
    trial_lianxiang0Components.push(sound_lianxiang0);
    trial_lianxiang0Components.push(text_101);
    trial_lianxiang0Components.push(text_102);
    trial_lianxiang0Components.push(key_resp_lianxiang0);
    
    for (const thisComponent of trial_lianxiang0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_lianxiang0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_lianxiang0' ---
    // get current time
    t = trial_lianxiang0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_lianxiang0* updates
    if (t >= 0.0 && text_lianxiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_lianxiang0.tStart = t;  // (not accounting for frame time here)
      text_lianxiang0.frameNStart = frameN;  // exact frame index
      
      text_lianxiang0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_lianxiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_lianxiang0.setAutoDraw(false);
    }
    
    // start/stop sound_lianxiang0
    if (t >= 4.0 && sound_lianxiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_lianxiang0.tStart = t;  // (not accounting for frame time here)
      sound_lianxiang0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_lianxiang0.play(); });  // screen flip
      sound_lianxiang0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_lianxiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_lianxiang0.tStart + 0.5) {
        sound_lianxiang0.stop();  // stop the sound (if longer than duration)
        sound_lianxiang0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_101* updates
    if (t >= 3.0 && text_101.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_101.tStart = t;  // (not accounting for frame time here)
      text_101.frameNStart = frameN;  // exact frame index
      
      text_101.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_101.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_101.setAutoDraw(false);
    }
    
    
    // *text_102* updates
    if (t >= 7.0 && text_102.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_102.tStart = t;  // (not accounting for frame time here)
      text_102.frameNStart = frameN;  // exact frame index
      
      text_102.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_102.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_102.setAutoDraw(false);
    }
    
    
    // *key_resp_lianxiang0* updates
    if (t >= 7.0 && key_resp_lianxiang0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_lianxiang0.tStart = t;  // (not accounting for frame time here)
      key_resp_lianxiang0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_lianxiang0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_lianxiang0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_lianxiang0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_lianxiang0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_lianxiang0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_lianxiang0_allKeys = _key_resp_lianxiang0_allKeys.concat(theseKeys);
      if (_key_resp_lianxiang0_allKeys.length > 0) {
        key_resp_lianxiang0.keys = _key_resp_lianxiang0_allKeys[0].name;  // just the first key pressed
        key_resp_lianxiang0.rt = _key_resp_lianxiang0_allKeys[0].rt;
        key_resp_lianxiang0.duration = _key_resp_lianxiang0_allKeys[0].duration;
        // was this correct?
        if (key_resp_lianxiang0.keys == "'left'") {
            key_resp_lianxiang0.corr = 1;
        } else {
            key_resp_lianxiang0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_lianxiang0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_lianxiang0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_lianxiang0' ---
    for (const thisComponent of trial_lianxiang0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_lianxiang0.stopped', globalClock.getTime());
    sound_lianxiang0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_lianxiang0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_lianxiang0.corr = 1;  // correct non-response
      } else {
         key_resp_lianxiang0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_lianxiang0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_lianxiang0.keys', key_resp_lianxiang0.keys);
    psychoJS.experiment.addData('key_resp_lianxiang0.corr', key_resp_lianxiang0.corr);
    if (typeof key_resp_lianxiang0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_lianxiang0.rt', key_resp_lianxiang0.rt);
        psychoJS.experiment.addData('key_resp_lianxiang0.duration', key_resp_lianxiang0.duration);
        routineTimer.reset();
        }
    
    key_resp_lianxiang0.stop();
    if (trial_lianxiang0MaxDurationReached) {
        trial_lianxiang0Clock.add(trial_lianxiang0MaxDuration);
    } else {
        trial_lianxiang0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_gongfu1MaxDurationReached;
var _key_resp_gongfu1_allKeys;
var trial_gongfu1MaxDuration;
var trial_gongfu1Components;
function trial_gongfu1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_gongfu1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_gongfu1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_gongfu1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_gongfu1.setValue('audio/gongfu1.wav');
    sound_gongfu1.secs=3.0;
    sound_gongfu1.setVolume(1.0);
    key_resp_gongfu1.keys = undefined;
    key_resp_gongfu1.rt = undefined;
    _key_resp_gongfu1_allKeys = [];
    psychoJS.experiment.addData('trial_gongfu1.started', globalClock.getTime());
    trial_gongfu1MaxDuration = null
    // keep track of which components have finished
    trial_gongfu1Components = [];
    trial_gongfu1Components.push(text_gongfu1);
    trial_gongfu1Components.push(sound_gongfu1);
    trial_gongfu1Components.push(text_105);
    trial_gongfu1Components.push(text_106);
    trial_gongfu1Components.push(key_resp_gongfu1);
    
    for (const thisComponent of trial_gongfu1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_gongfu1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_gongfu1' ---
    // get current time
    t = trial_gongfu1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_gongfu1* updates
    if (t >= 0.0 && text_gongfu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_gongfu1.tStart = t;  // (not accounting for frame time here)
      text_gongfu1.frameNStart = frameN;  // exact frame index
      
      text_gongfu1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_gongfu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_gongfu1.setAutoDraw(false);
    }
    
    // start/stop sound_gongfu1
    if (t >= 4.0 && sound_gongfu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_gongfu1.tStart = t;  // (not accounting for frame time here)
      sound_gongfu1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_gongfu1.play(); });  // screen flip
      sound_gongfu1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_gongfu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_gongfu1.tStart + 0.5) {
        sound_gongfu1.stop();  // stop the sound (if longer than duration)
        sound_gongfu1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_105* updates
    if (t >= 3.0 && text_105.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_105.tStart = t;  // (not accounting for frame time here)
      text_105.frameNStart = frameN;  // exact frame index
      
      text_105.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_105.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_105.setAutoDraw(false);
    }
    
    
    // *text_106* updates
    if (t >= 7.0 && text_106.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_106.tStart = t;  // (not accounting for frame time here)
      text_106.frameNStart = frameN;  // exact frame index
      
      text_106.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_106.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_106.setAutoDraw(false);
    }
    
    
    // *key_resp_gongfu1* updates
    if (t >= 7.0 && key_resp_gongfu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_gongfu1.tStart = t;  // (not accounting for frame time here)
      key_resp_gongfu1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_gongfu1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gongfu1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gongfu1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_gongfu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_gongfu1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_gongfu1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_gongfu1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_gongfu1_allKeys = _key_resp_gongfu1_allKeys.concat(theseKeys);
      if (_key_resp_gongfu1_allKeys.length > 0) {
        key_resp_gongfu1.keys = _key_resp_gongfu1_allKeys[0].name;  // just the first key pressed
        key_resp_gongfu1.rt = _key_resp_gongfu1_allKeys[0].rt;
        key_resp_gongfu1.duration = _key_resp_gongfu1_allKeys[0].duration;
        // was this correct?
        if (key_resp_gongfu1.keys == "'right'") {
            key_resp_gongfu1.corr = 1;
        } else {
            key_resp_gongfu1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_gongfu1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_gongfu1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_gongfu1' ---
    for (const thisComponent of trial_gongfu1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_gongfu1.stopped', globalClock.getTime());
    sound_gongfu1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_gongfu1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_gongfu1.corr = 1;  // correct non-response
      } else {
         key_resp_gongfu1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_gongfu1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_gongfu1.keys', key_resp_gongfu1.keys);
    psychoJS.experiment.addData('key_resp_gongfu1.corr', key_resp_gongfu1.corr);
    if (typeof key_resp_gongfu1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_gongfu1.rt', key_resp_gongfu1.rt);
        psychoJS.experiment.addData('key_resp_gongfu1.duration', key_resp_gongfu1.duration);
        routineTimer.reset();
        }
    
    key_resp_gongfu1.stop();
    if (trial_gongfu1MaxDurationReached) {
        trial_gongfu1Clock.add(trial_gongfu1MaxDuration);
    } else {
        trial_gongfu1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_miantiaoMaxDurationReached;
var _key_resp_miantiao_allKeys;
var trial_miantiaoMaxDuration;
var trial_miantiaoComponents;
function trial_miantiaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_miantiao' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_miantiaoClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_miantiaoMaxDurationReached = false;
    // update component parameters for each repeat
    sound_miantiao.setValue('audio/miantiao.wav');
    sound_miantiao.secs=3.0;
    sound_miantiao.setVolume(1.0);
    key_resp_miantiao.keys = undefined;
    key_resp_miantiao.rt = undefined;
    _key_resp_miantiao_allKeys = [];
    psychoJS.experiment.addData('trial_miantiao.started', globalClock.getTime());
    trial_miantiaoMaxDuration = null
    // keep track of which components have finished
    trial_miantiaoComponents = [];
    trial_miantiaoComponents.push(text_miantiao);
    trial_miantiaoComponents.push(sound_miantiao);
    trial_miantiaoComponents.push(text_107);
    trial_miantiaoComponents.push(text_108);
    trial_miantiaoComponents.push(key_resp_miantiao);
    
    for (const thisComponent of trial_miantiaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_miantiaoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_miantiao' ---
    // get current time
    t = trial_miantiaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_miantiao* updates
    if (t >= 0.0 && text_miantiao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_miantiao.tStart = t;  // (not accounting for frame time here)
      text_miantiao.frameNStart = frameN;  // exact frame index
      
      text_miantiao.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_miantiao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_miantiao.setAutoDraw(false);
    }
    
    // start/stop sound_miantiao
    if (t >= 4.0 && sound_miantiao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_miantiao.tStart = t;  // (not accounting for frame time here)
      sound_miantiao.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_miantiao.play(); });  // screen flip
      sound_miantiao.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_miantiao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_miantiao.tStart + 0.5) {
        sound_miantiao.stop();  // stop the sound (if longer than duration)
        sound_miantiao.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_107* updates
    if (t >= 3.0 && text_107.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_107.tStart = t;  // (not accounting for frame time here)
      text_107.frameNStart = frameN;  // exact frame index
      
      text_107.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_107.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_107.setAutoDraw(false);
    }
    
    
    // *text_108* updates
    if (t >= 7.0 && text_108.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_108.tStart = t;  // (not accounting for frame time here)
      text_108.frameNStart = frameN;  // exact frame index
      
      text_108.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_108.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_108.setAutoDraw(false);
    }
    
    
    // *key_resp_miantiao* updates
    if (t >= 7.0 && key_resp_miantiao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_miantiao.tStart = t;  // (not accounting for frame time here)
      key_resp_miantiao.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_miantiao.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_miantiao.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_miantiao.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_miantiao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_miantiao.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_miantiao.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_miantiao.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_miantiao_allKeys = _key_resp_miantiao_allKeys.concat(theseKeys);
      if (_key_resp_miantiao_allKeys.length > 0) {
        key_resp_miantiao.keys = _key_resp_miantiao_allKeys[0].name;  // just the first key pressed
        key_resp_miantiao.rt = _key_resp_miantiao_allKeys[0].rt;
        key_resp_miantiao.duration = _key_resp_miantiao_allKeys[0].duration;
        // was this correct?
        if (key_resp_miantiao.keys == "'left'") {
            key_resp_miantiao.corr = 1;
        } else {
            key_resp_miantiao.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_miantiaoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_miantiaoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_miantiao' ---
    for (const thisComponent of trial_miantiaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_miantiao.stopped', globalClock.getTime());
    sound_miantiao.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_miantiao.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_miantiao.corr = 1;  // correct non-response
      } else {
         key_resp_miantiao.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_miantiao.corr, level);
    }
    psychoJS.experiment.addData('key_resp_miantiao.keys', key_resp_miantiao.keys);
    psychoJS.experiment.addData('key_resp_miantiao.corr', key_resp_miantiao.corr);
    if (typeof key_resp_miantiao.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_miantiao.rt', key_resp_miantiao.rt);
        psychoJS.experiment.addData('key_resp_miantiao.duration', key_resp_miantiao.duration);
        routineTimer.reset();
        }
    
    key_resp_miantiao.stop();
    if (trial_miantiaoMaxDurationReached) {
        trial_miantiaoClock.add(trial_miantiaoMaxDuration);
    } else {
        trial_miantiaoClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_heimaoMaxDurationReached;
var _key_resp_heimao_allKeys;
var trial_heimaoMaxDuration;
var trial_heimaoComponents;
function trial_heimaoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_heimao' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_heimaoClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_heimaoMaxDurationReached = false;
    // update component parameters for each repeat
    sound_heimao.setValue('audio/heimao.wav');
    sound_heimao.secs=3.0;
    sound_heimao.setVolume(1.0);
    key_resp_heimao.keys = undefined;
    key_resp_heimao.rt = undefined;
    _key_resp_heimao_allKeys = [];
    psychoJS.experiment.addData('trial_heimao.started', globalClock.getTime());
    trial_heimaoMaxDuration = null
    // keep track of which components have finished
    trial_heimaoComponents = [];
    trial_heimaoComponents.push(text_heimao);
    trial_heimaoComponents.push(sound_heimao);
    trial_heimaoComponents.push(text_109);
    trial_heimaoComponents.push(text_110);
    trial_heimaoComponents.push(key_resp_heimao);
    
    for (const thisComponent of trial_heimaoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_heimaoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_heimao' ---
    // get current time
    t = trial_heimaoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_heimao* updates
    if (t >= 0.0 && text_heimao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_heimao.tStart = t;  // (not accounting for frame time here)
      text_heimao.frameNStart = frameN;  // exact frame index
      
      text_heimao.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_heimao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_heimao.setAutoDraw(false);
    }
    
    // start/stop sound_heimao
    if (t >= 4.0 && sound_heimao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_heimao.tStart = t;  // (not accounting for frame time here)
      sound_heimao.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_heimao.play(); });  // screen flip
      sound_heimao.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_heimao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_heimao.tStart + 0.5) {
        sound_heimao.stop();  // stop the sound (if longer than duration)
        sound_heimao.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_109* updates
    if (t >= 3.0 && text_109.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_109.tStart = t;  // (not accounting for frame time here)
      text_109.frameNStart = frameN;  // exact frame index
      
      text_109.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_109.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_109.setAutoDraw(false);
    }
    
    
    // *text_110* updates
    if (t >= 7.0 && text_110.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_110.tStart = t;  // (not accounting for frame time here)
      text_110.frameNStart = frameN;  // exact frame index
      
      text_110.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_110.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_110.setAutoDraw(false);
    }
    
    
    // *key_resp_heimao* updates
    if (t >= 7.0 && key_resp_heimao.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_heimao.tStart = t;  // (not accounting for frame time here)
      key_resp_heimao.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_heimao.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimao.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_heimao.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_heimao.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_heimao.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_heimao.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_heimao.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_heimao_allKeys = _key_resp_heimao_allKeys.concat(theseKeys);
      if (_key_resp_heimao_allKeys.length > 0) {
        key_resp_heimao.keys = _key_resp_heimao_allKeys[0].name;  // just the first key pressed
        key_resp_heimao.rt = _key_resp_heimao_allKeys[0].rt;
        key_resp_heimao.duration = _key_resp_heimao_allKeys[0].duration;
        // was this correct?
        if (key_resp_heimao.keys == "'left'") {
            key_resp_heimao.corr = 1;
        } else {
            key_resp_heimao.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_heimaoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_heimaoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_heimao' ---
    for (const thisComponent of trial_heimaoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_heimao.stopped', globalClock.getTime());
    sound_heimao.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_heimao.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_heimao.corr = 1;  // correct non-response
      } else {
         key_resp_heimao.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_heimao.corr, level);
    }
    psychoJS.experiment.addData('key_resp_heimao.keys', key_resp_heimao.keys);
    psychoJS.experiment.addData('key_resp_heimao.corr', key_resp_heimao.corr);
    if (typeof key_resp_heimao.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_heimao.rt', key_resp_heimao.rt);
        psychoJS.experiment.addData('key_resp_heimao.duration', key_resp_heimao.duration);
        routineTimer.reset();
        }
    
    key_resp_heimao.stop();
    if (trial_heimaoMaxDurationReached) {
        trial_heimaoClock.add(trial_heimaoMaxDuration);
    } else {
        trial_heimaoClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_beiying1MaxDurationReached;
var _key_resp_beiying1_allKeys;
var trial_beiying1MaxDuration;
var trial_beiying1Components;
function trial_beiying1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_beiying1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_beiying1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_beiying1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_beiying1.setValue('audio/beiying1.wav');
    sound_beiying1.secs=3;
    sound_beiying1.setVolume(1.0);
    key_resp_beiying1.keys = undefined;
    key_resp_beiying1.rt = undefined;
    _key_resp_beiying1_allKeys = [];
    psychoJS.experiment.addData('trial_beiying1.started', globalClock.getTime());
    trial_beiying1MaxDuration = null
    // keep track of which components have finished
    trial_beiying1Components = [];
    trial_beiying1Components.push(text_beiying1);
    trial_beiying1Components.push(sound_beiying1);
    trial_beiying1Components.push(text_111);
    trial_beiying1Components.push(text_112);
    trial_beiying1Components.push(key_resp_beiying1);
    
    for (const thisComponent of trial_beiying1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_beiying1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_beiying1' ---
    // get current time
    t = trial_beiying1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_beiying1* updates
    if (t >= 0.0 && text_beiying1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_beiying1.tStart = t;  // (not accounting for frame time here)
      text_beiying1.frameNStart = frameN;  // exact frame index
      
      text_beiying1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_beiying1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_beiying1.setAutoDraw(false);
    }
    
    // start/stop sound_beiying1
    if (t >= 4 && sound_beiying1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_beiying1.tStart = t;  // (not accounting for frame time here)
      sound_beiying1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_beiying1.play(); });  // screen flip
      sound_beiying1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_beiying1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_beiying1.tStart + 0.5) {
        sound_beiying1.stop();  // stop the sound (if longer than duration)
        sound_beiying1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_111* updates
    if (t >= 3.0 && text_111.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_111.tStart = t;  // (not accounting for frame time here)
      text_111.frameNStart = frameN;  // exact frame index
      
      text_111.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_111.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_111.setAutoDraw(false);
    }
    
    
    // *text_112* updates
    if (t >= 7.0 && text_112.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_112.tStart = t;  // (not accounting for frame time here)
      text_112.frameNStart = frameN;  // exact frame index
      
      text_112.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_112.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_112.setAutoDraw(false);
    }
    
    
    // *key_resp_beiying1* updates
    if (t >= 7.0 && key_resp_beiying1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_beiying1.tStart = t;  // (not accounting for frame time here)
      key_resp_beiying1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_beiying1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_beiying1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_beiying1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_beiying1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_beiying1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_beiying1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_beiying1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_beiying1_allKeys = _key_resp_beiying1_allKeys.concat(theseKeys);
      if (_key_resp_beiying1_allKeys.length > 0) {
        key_resp_beiying1.keys = _key_resp_beiying1_allKeys[0].name;  // just the first key pressed
        key_resp_beiying1.rt = _key_resp_beiying1_allKeys[0].rt;
        key_resp_beiying1.duration = _key_resp_beiying1_allKeys[0].duration;
        // was this correct?
        if (key_resp_beiying1.keys == "'right'") {
            key_resp_beiying1.corr = 1;
        } else {
            key_resp_beiying1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_beiying1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_beiying1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_beiying1' ---
    for (const thisComponent of trial_beiying1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_beiying1.stopped', globalClock.getTime());
    sound_beiying1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_beiying1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_beiying1.corr = 1;  // correct non-response
      } else {
         key_resp_beiying1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_beiying1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_beiying1.keys', key_resp_beiying1.keys);
    psychoJS.experiment.addData('key_resp_beiying1.corr', key_resp_beiying1.corr);
    if (typeof key_resp_beiying1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_beiying1.rt', key_resp_beiying1.rt);
        psychoJS.experiment.addData('key_resp_beiying1.duration', key_resp_beiying1.duration);
        routineTimer.reset();
        }
    
    key_resp_beiying1.stop();
    if (trial_beiying1MaxDurationReached) {
        trial_beiying1Clock.add(trial_beiying1MaxDuration);
    } else {
        trial_beiying1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_danche1MaxDurationReached;
var _key_resp_danche1_allKeys;
var trial_danche1MaxDuration;
var trial_danche1Components;
function trial_danche1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_danche1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_danche1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_danche1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_danche1.setValue('audio/danche1.wav');
    sound_danche1.secs=3.0;
    sound_danche1.setVolume(1.0);
    key_resp_danche1.keys = undefined;
    key_resp_danche1.rt = undefined;
    _key_resp_danche1_allKeys = [];
    psychoJS.experiment.addData('trial_danche1.started', globalClock.getTime());
    trial_danche1MaxDuration = null
    // keep track of which components have finished
    trial_danche1Components = [];
    trial_danche1Components.push(text_danche1);
    trial_danche1Components.push(sound_danche1);
    trial_danche1Components.push(text_113);
    trial_danche1Components.push(text_114);
    trial_danche1Components.push(key_resp_danche1);
    
    for (const thisComponent of trial_danche1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_danche1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_danche1' ---
    // get current time
    t = trial_danche1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_danche1* updates
    if (t >= 0.0 && text_danche1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_danche1.tStart = t;  // (not accounting for frame time here)
      text_danche1.frameNStart = frameN;  // exact frame index
      
      text_danche1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_danche1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_danche1.setAutoDraw(false);
    }
    
    // start/stop sound_danche1
    if (t >= 4.0 && sound_danche1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_danche1.tStart = t;  // (not accounting for frame time here)
      sound_danche1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_danche1.play(); });  // screen flip
      sound_danche1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_danche1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_danche1.tStart + 0.5) {
        sound_danche1.stop();  // stop the sound (if longer than duration)
        sound_danche1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_113* updates
    if (t >= 3.0 && text_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_113.tStart = t;  // (not accounting for frame time here)
      text_113.frameNStart = frameN;  // exact frame index
      
      text_113.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_113.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_113.setAutoDraw(false);
    }
    
    
    // *text_114* updates
    if (t >= 7.0 && text_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_114.tStart = t;  // (not accounting for frame time here)
      text_114.frameNStart = frameN;  // exact frame index
      
      text_114.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_114.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_114.setAutoDraw(false);
    }
    
    
    // *key_resp_danche1* updates
    if (t >= 7.0 && key_resp_danche1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_danche1.tStart = t;  // (not accounting for frame time here)
      key_resp_danche1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_danche1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_danche1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_danche1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_danche1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_danche1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_danche1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_danche1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_danche1_allKeys = _key_resp_danche1_allKeys.concat(theseKeys);
      if (_key_resp_danche1_allKeys.length > 0) {
        key_resp_danche1.keys = _key_resp_danche1_allKeys[0].name;  // just the first key pressed
        key_resp_danche1.rt = _key_resp_danche1_allKeys[0].rt;
        key_resp_danche1.duration = _key_resp_danche1_allKeys[0].duration;
        // was this correct?
        if (key_resp_danche1.keys == "'right'") {
            key_resp_danche1.corr = 1;
        } else {
            key_resp_danche1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_danche1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_danche1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_danche1' ---
    for (const thisComponent of trial_danche1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_danche1.stopped', globalClock.getTime());
    sound_danche1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_danche1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_danche1.corr = 1;  // correct non-response
      } else {
         key_resp_danche1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_danche1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_danche1.keys', key_resp_danche1.keys);
    psychoJS.experiment.addData('key_resp_danche1.corr', key_resp_danche1.corr);
    if (typeof key_resp_danche1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_danche1.rt', key_resp_danche1.rt);
        psychoJS.experiment.addData('key_resp_danche1.duration', key_resp_danche1.duration);
        routineTimer.reset();
        }
    
    key_resp_danche1.stop();
    if (trial_danche1MaxDurationReached) {
        trial_danche1Clock.add(trial_danche1MaxDuration);
    } else {
        trial_danche1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_dianyingMaxDurationReached;
var _key_resp_dianying_allKeys;
var trial_dianyingMaxDuration;
var trial_dianyingComponents;
function trial_dianyingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_dianying' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_dianyingClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_dianyingMaxDurationReached = false;
    // update component parameters for each repeat
    sound_dianying.setValue('audio/dianying.wav');
    sound_dianying.secs=3.0;
    sound_dianying.setVolume(1.0);
    key_resp_dianying.keys = undefined;
    key_resp_dianying.rt = undefined;
    _key_resp_dianying_allKeys = [];
    psychoJS.experiment.addData('trial_dianying.started', globalClock.getTime());
    trial_dianyingMaxDuration = null
    // keep track of which components have finished
    trial_dianyingComponents = [];
    trial_dianyingComponents.push(text_dianying);
    trial_dianyingComponents.push(sound_dianying);
    trial_dianyingComponents.push(text_115);
    trial_dianyingComponents.push(text_116);
    trial_dianyingComponents.push(key_resp_dianying);
    
    for (const thisComponent of trial_dianyingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_dianyingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_dianying' ---
    // get current time
    t = trial_dianyingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_dianying* updates
    if (t >= 0.0 && text_dianying.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_dianying.tStart = t;  // (not accounting for frame time here)
      text_dianying.frameNStart = frameN;  // exact frame index
      
      text_dianying.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_dianying.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_dianying.setAutoDraw(false);
    }
    
    // start/stop sound_dianying
    if (t >= 4.0 && sound_dianying.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_dianying.tStart = t;  // (not accounting for frame time here)
      sound_dianying.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_dianying.play(); });  // screen flip
      sound_dianying.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_dianying.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_dianying.tStart + 0.5) {
        sound_dianying.stop();  // stop the sound (if longer than duration)
        sound_dianying.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_115* updates
    if (t >= 3.0 && text_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_115.tStart = t;  // (not accounting for frame time here)
      text_115.frameNStart = frameN;  // exact frame index
      
      text_115.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_115.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_115.setAutoDraw(false);
    }
    
    
    // *text_116* updates
    if (t >= 7.0 && text_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_116.tStart = t;  // (not accounting for frame time here)
      text_116.frameNStart = frameN;  // exact frame index
      
      text_116.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_116.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_116.setAutoDraw(false);
    }
    
    
    // *key_resp_dianying* updates
    if (t >= 7.0 && key_resp_dianying.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dianying.tStart = t;  // (not accounting for frame time here)
      key_resp_dianying.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dianying.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dianying.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dianying.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_dianying.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_dianying.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_dianying.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dianying.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_dianying_allKeys = _key_resp_dianying_allKeys.concat(theseKeys);
      if (_key_resp_dianying_allKeys.length > 0) {
        key_resp_dianying.keys = _key_resp_dianying_allKeys[0].name;  // just the first key pressed
        key_resp_dianying.rt = _key_resp_dianying_allKeys[0].rt;
        key_resp_dianying.duration = _key_resp_dianying_allKeys[0].duration;
        // was this correct?
        if (key_resp_dianying.keys == "'left'") {
            key_resp_dianying.corr = 1;
        } else {
            key_resp_dianying.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_dianyingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_dianyingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_dianying' ---
    for (const thisComponent of trial_dianyingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_dianying.stopped', globalClock.getTime());
    sound_dianying.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_dianying.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_dianying.corr = 1;  // correct non-response
      } else {
         key_resp_dianying.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_dianying.corr, level);
    }
    psychoJS.experiment.addData('key_resp_dianying.keys', key_resp_dianying.keys);
    psychoJS.experiment.addData('key_resp_dianying.corr', key_resp_dianying.corr);
    if (typeof key_resp_dianying.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dianying.rt', key_resp_dianying.rt);
        psychoJS.experiment.addData('key_resp_dianying.duration', key_resp_dianying.duration);
        routineTimer.reset();
        }
    
    key_resp_dianying.stop();
    if (trial_dianyingMaxDurationReached) {
        trial_dianyingClock.add(trial_dianyingMaxDuration);
    } else {
        trial_dianyingClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shitouMaxDurationReached;
var _key_resp_shitou_allKeys;
var trial_shitouMaxDuration;
var trial_shitouComponents;
function trial_shitouRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shitou' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shitouClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_shitouMaxDurationReached = false;
    // update component parameters for each repeat
    sound_shitou.setValue('audio/shitou.wav');
    sound_shitou.secs=3.0;
    sound_shitou.setVolume(1.0);
    key_resp_shitou.keys = undefined;
    key_resp_shitou.rt = undefined;
    _key_resp_shitou_allKeys = [];
    psychoJS.experiment.addData('trial_shitou.started', globalClock.getTime());
    trial_shitouMaxDuration = null
    // keep track of which components have finished
    trial_shitouComponents = [];
    trial_shitouComponents.push(text_shitou);
    trial_shitouComponents.push(sound_shitou);
    trial_shitouComponents.push(text_117);
    trial_shitouComponents.push(text_118);
    trial_shitouComponents.push(key_resp_shitou);
    
    for (const thisComponent of trial_shitouComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shitouRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shitou' ---
    // get current time
    t = trial_shitouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_shitou* updates
    if (t >= 0.0 && text_shitou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shitou.tStart = t;  // (not accounting for frame time here)
      text_shitou.frameNStart = frameN;  // exact frame index
      
      text_shitou.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_shitou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_shitou.setAutoDraw(false);
    }
    
    // start/stop sound_shitou
    if (t >= 4.0 && sound_shitou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shitou.tStart = t;  // (not accounting for frame time here)
      sound_shitou.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shitou.play(); });  // screen flip
      sound_shitou.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shitou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shitou.tStart + 0.5) {
        sound_shitou.stop();  // stop the sound (if longer than duration)
        sound_shitou.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_117* updates
    if (t >= 3.0 && text_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_117.tStart = t;  // (not accounting for frame time here)
      text_117.frameNStart = frameN;  // exact frame index
      
      text_117.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_117.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_117.setAutoDraw(false);
    }
    
    
    // *text_118* updates
    if (t >= 7.0 && text_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_118.tStart = t;  // (not accounting for frame time here)
      text_118.frameNStart = frameN;  // exact frame index
      
      text_118.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_118.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_118.setAutoDraw(false);
    }
    
    
    // *key_resp_shitou* updates
    if (t >= 7.0 && key_resp_shitou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shitou.tStart = t;  // (not accounting for frame time here)
      key_resp_shitou.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shitou.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shitou.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shitou.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shitou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shitou.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shitou.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shitou.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shitou_allKeys = _key_resp_shitou_allKeys.concat(theseKeys);
      if (_key_resp_shitou_allKeys.length > 0) {
        key_resp_shitou.keys = _key_resp_shitou_allKeys[0].name;  // just the first key pressed
        key_resp_shitou.rt = _key_resp_shitou_allKeys[0].rt;
        key_resp_shitou.duration = _key_resp_shitou_allKeys[0].duration;
        // was this correct?
        if (key_resp_shitou.keys == "'left'") {
            key_resp_shitou.corr = 1;
        } else {
            key_resp_shitou.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shitouComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shitouRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shitou' ---
    for (const thisComponent of trial_shitouComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shitou.stopped', globalClock.getTime());
    sound_shitou.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shitou.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_shitou.corr = 1;  // correct non-response
      } else {
         key_resp_shitou.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shitou.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shitou.keys', key_resp_shitou.keys);
    psychoJS.experiment.addData('key_resp_shitou.corr', key_resp_shitou.corr);
    if (typeof key_resp_shitou.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shitou.rt', key_resp_shitou.rt);
        psychoJS.experiment.addData('key_resp_shitou.duration', key_resp_shitou.duration);
        routineTimer.reset();
        }
    
    key_resp_shitou.stop();
    if (trial_shitouMaxDurationReached) {
        trial_shitouClock.add(trial_shitouMaxDuration);
    } else {
        trial_shitouClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_xiongdi0MaxDurationReached;
var _key_resp_xiongdi0_allKeys;
var trial_xiongdi0MaxDuration;
var trial_xiongdi0Components;
function trial_xiongdi0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_xiongdi0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_xiongdi0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_xiongdi0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_xiongdi0.setValue('audio/xiongdi0.wav');
    sound_xiongdi0.secs=3.0;
    sound_xiongdi0.setVolume(1.0);
    key_resp_xiongdi0.keys = undefined;
    key_resp_xiongdi0.rt = undefined;
    _key_resp_xiongdi0_allKeys = [];
    psychoJS.experiment.addData('trial_xiongdi0.started', globalClock.getTime());
    trial_xiongdi0MaxDuration = null
    // keep track of which components have finished
    trial_xiongdi0Components = [];
    trial_xiongdi0Components.push(text_xiongdi0);
    trial_xiongdi0Components.push(sound_xiongdi0);
    trial_xiongdi0Components.push(text_119);
    trial_xiongdi0Components.push(text_120);
    trial_xiongdi0Components.push(key_resp_xiongdi0);
    
    for (const thisComponent of trial_xiongdi0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_xiongdi0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_xiongdi0' ---
    // get current time
    t = trial_xiongdi0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_xiongdi0* updates
    if (t >= 0.0 && text_xiongdi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_xiongdi0.tStart = t;  // (not accounting for frame time here)
      text_xiongdi0.frameNStart = frameN;  // exact frame index
      
      text_xiongdi0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_xiongdi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_xiongdi0.setAutoDraw(false);
    }
    
    // start/stop sound_xiongdi0
    if (t >= 4.0 && sound_xiongdi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_xiongdi0.tStart = t;  // (not accounting for frame time here)
      sound_xiongdi0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_xiongdi0.play(); });  // screen flip
      sound_xiongdi0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_xiongdi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_xiongdi0.tStart + 0.5) {
        sound_xiongdi0.stop();  // stop the sound (if longer than duration)
        sound_xiongdi0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_119* updates
    if (t >= 3.0 && text_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_119.tStart = t;  // (not accounting for frame time here)
      text_119.frameNStart = frameN;  // exact frame index
      
      text_119.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_119.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_119.setAutoDraw(false);
    }
    
    
    // *text_120* updates
    if (t >= 7.0 && text_120.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_120.tStart = t;  // (not accounting for frame time here)
      text_120.frameNStart = frameN;  // exact frame index
      
      text_120.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_120.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_120.setAutoDraw(false);
    }
    
    
    // *key_resp_xiongdi0* updates
    if (t >= 7.0 && key_resp_xiongdi0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_xiongdi0.tStart = t;  // (not accounting for frame time here)
      key_resp_xiongdi0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_xiongdi0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_xiongdi0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_xiongdi0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_xiongdi0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_xiongdi0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_xiongdi0_allKeys = _key_resp_xiongdi0_allKeys.concat(theseKeys);
      if (_key_resp_xiongdi0_allKeys.length > 0) {
        key_resp_xiongdi0.keys = _key_resp_xiongdi0_allKeys[0].name;  // just the first key pressed
        key_resp_xiongdi0.rt = _key_resp_xiongdi0_allKeys[0].rt;
        key_resp_xiongdi0.duration = _key_resp_xiongdi0_allKeys[0].duration;
        // was this correct?
        if (key_resp_xiongdi0.keys == "'left'") {
            key_resp_xiongdi0.corr = 1;
        } else {
            key_resp_xiongdi0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_xiongdi0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_xiongdi0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_xiongdi0' ---
    for (const thisComponent of trial_xiongdi0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_xiongdi0.stopped', globalClock.getTime());
    sound_xiongdi0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_xiongdi0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_xiongdi0.corr = 1;  // correct non-response
      } else {
         key_resp_xiongdi0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_xiongdi0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_xiongdi0.keys', key_resp_xiongdi0.keys);
    psychoJS.experiment.addData('key_resp_xiongdi0.corr', key_resp_xiongdi0.corr);
    if (typeof key_resp_xiongdi0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_xiongdi0.rt', key_resp_xiongdi0.rt);
        psychoJS.experiment.addData('key_resp_xiongdi0.duration', key_resp_xiongdi0.duration);
        routineTimer.reset();
        }
    
    key_resp_xiongdi0.stop();
    if (trial_xiongdi0MaxDurationReached) {
        trial_xiongdi0Clock.add(trial_xiongdi0MaxDuration);
    } else {
        trial_xiongdi0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_senlinMaxDurationReached;
var _key_resp_senlin_allKeys;
var trial_senlinMaxDuration;
var trial_senlinComponents;
function trial_senlinRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_senlin' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_senlinClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_senlinMaxDurationReached = false;
    // update component parameters for each repeat
    sound_senlin.setValue('audio/senlin.wav');
    sound_senlin.secs=3.0;
    sound_senlin.setVolume(1.0);
    key_resp_senlin.keys = undefined;
    key_resp_senlin.rt = undefined;
    _key_resp_senlin_allKeys = [];
    psychoJS.experiment.addData('trial_senlin.started', globalClock.getTime());
    trial_senlinMaxDuration = null
    // keep track of which components have finished
    trial_senlinComponents = [];
    trial_senlinComponents.push(text_senlin);
    trial_senlinComponents.push(sound_senlin);
    trial_senlinComponents.push(text_123);
    trial_senlinComponents.push(text_124);
    trial_senlinComponents.push(key_resp_senlin);
    
    for (const thisComponent of trial_senlinComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_senlinRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_senlin' ---
    // get current time
    t = trial_senlinClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_senlin* updates
    if (t >= 0.0 && text_senlin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_senlin.tStart = t;  // (not accounting for frame time here)
      text_senlin.frameNStart = frameN;  // exact frame index
      
      text_senlin.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_senlin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_senlin.setAutoDraw(false);
    }
    
    // start/stop sound_senlin
    if (t >= 4.0 && sound_senlin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_senlin.tStart = t;  // (not accounting for frame time here)
      sound_senlin.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_senlin.play(); });  // screen flip
      sound_senlin.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_senlin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_senlin.tStart + 0.5) {
        sound_senlin.stop();  // stop the sound (if longer than duration)
        sound_senlin.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_123* updates
    if (t >= 3.0 && text_123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_123.tStart = t;  // (not accounting for frame time here)
      text_123.frameNStart = frameN;  // exact frame index
      
      text_123.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_123.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_123.setAutoDraw(false);
    }
    
    
    // *text_124* updates
    if (t >= 7.0 && text_124.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_124.tStart = t;  // (not accounting for frame time here)
      text_124.frameNStart = frameN;  // exact frame index
      
      text_124.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_124.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_124.setAutoDraw(false);
    }
    
    
    // *key_resp_senlin* updates
    if (t >= 7.0 && key_resp_senlin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_senlin.tStart = t;  // (not accounting for frame time here)
      key_resp_senlin.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_senlin.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_senlin.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_senlin.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_senlin.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_senlin.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_senlin.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_senlin.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_senlin_allKeys = _key_resp_senlin_allKeys.concat(theseKeys);
      if (_key_resp_senlin_allKeys.length > 0) {
        key_resp_senlin.keys = _key_resp_senlin_allKeys[0].name;  // just the first key pressed
        key_resp_senlin.rt = _key_resp_senlin_allKeys[0].rt;
        key_resp_senlin.duration = _key_resp_senlin_allKeys[0].duration;
        // was this correct?
        if (key_resp_senlin.keys == "'left'") {
            key_resp_senlin.corr = 1;
        } else {
            key_resp_senlin.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_senlinComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_senlinRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_senlin' ---
    for (const thisComponent of trial_senlinComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_senlin.stopped', globalClock.getTime());
    sound_senlin.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_senlin.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_senlin.corr = 1;  // correct non-response
      } else {
         key_resp_senlin.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_senlin.corr, level);
    }
    psychoJS.experiment.addData('key_resp_senlin.keys', key_resp_senlin.keys);
    psychoJS.experiment.addData('key_resp_senlin.corr', key_resp_senlin.corr);
    if (typeof key_resp_senlin.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_senlin.rt', key_resp_senlin.rt);
        psychoJS.experiment.addData('key_resp_senlin.duration', key_resp_senlin.duration);
        routineTimer.reset();
        }
    
    key_resp_senlin.stop();
    if (trial_senlinMaxDurationReached) {
        trial_senlinClock.add(trial_senlinMaxDuration);
    } else {
        trial_senlinClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_hongqi0MaxDurationReached;
var _key_resp_hongqi_0_allKeys;
var trial_hongqi0MaxDuration;
var trial_hongqi0Components;
function trial_hongqi0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_hongqi0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_hongqi0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_hongqi0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_hongqi_0.setValue('audio/hongqi0.wav');
    sound_hongqi_0.secs=3;
    sound_hongqi_0.setVolume(1.0);
    key_resp_hongqi_0.keys = undefined;
    key_resp_hongqi_0.rt = undefined;
    _key_resp_hongqi_0_allKeys = [];
    psychoJS.experiment.addData('trial_hongqi0.started', globalClock.getTime());
    trial_hongqi0MaxDuration = null
    // keep track of which components have finished
    trial_hongqi0Components = [];
    trial_hongqi0Components.push(text_hongqi_0);
    trial_hongqi0Components.push(sound_hongqi_0);
    trial_hongqi0Components.push(text_153);
    trial_hongqi0Components.push(text_154);
    trial_hongqi0Components.push(key_resp_hongqi_0);
    
    for (const thisComponent of trial_hongqi0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_hongqi0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_hongqi0' ---
    // get current time
    t = trial_hongqi0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_hongqi_0* updates
    if (t >= 0.0 && text_hongqi_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hongqi_0.tStart = t;  // (not accounting for frame time here)
      text_hongqi_0.frameNStart = frameN;  // exact frame index
      
      text_hongqi_0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_hongqi_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_hongqi_0.setAutoDraw(false);
    }
    
    // start/stop sound_hongqi_0
    if (t >= 4 && sound_hongqi_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_hongqi_0.tStart = t;  // (not accounting for frame time here)
      sound_hongqi_0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_hongqi_0.play(); });  // screen flip
      sound_hongqi_0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_hongqi_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_hongqi_0.tStart + 0.5) {
        sound_hongqi_0.stop();  // stop the sound (if longer than duration)
        sound_hongqi_0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_153* updates
    if (t >= 3.0 && text_153.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_153.tStart = t;  // (not accounting for frame time here)
      text_153.frameNStart = frameN;  // exact frame index
      
      text_153.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_153.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_153.setAutoDraw(false);
    }
    
    
    // *text_154* updates
    if (t >= 7.0 && text_154.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_154.tStart = t;  // (not accounting for frame time here)
      text_154.frameNStart = frameN;  // exact frame index
      
      text_154.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_154.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_154.setAutoDraw(false);
    }
    
    
    // *key_resp_hongqi_0* updates
    if (t >= 7.0 && key_resp_hongqi_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_hongqi_0.tStart = t;  // (not accounting for frame time here)
      key_resp_hongqi_0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_hongqi_0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongqi_0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongqi_0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_hongqi_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_hongqi_0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_hongqi_0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_hongqi_0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_hongqi_0_allKeys = _key_resp_hongqi_0_allKeys.concat(theseKeys);
      if (_key_resp_hongqi_0_allKeys.length > 0) {
        key_resp_hongqi_0.keys = _key_resp_hongqi_0_allKeys[0].name;  // just the first key pressed
        key_resp_hongqi_0.rt = _key_resp_hongqi_0_allKeys[0].rt;
        key_resp_hongqi_0.duration = _key_resp_hongqi_0_allKeys[0].duration;
        // was this correct?
        if (key_resp_hongqi_0.keys == "'left'") {
            key_resp_hongqi_0.corr = 1;
        } else {
            key_resp_hongqi_0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_hongqi0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_hongqi0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_hongqi0' ---
    for (const thisComponent of trial_hongqi0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_hongqi0.stopped', globalClock.getTime());
    sound_hongqi_0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_hongqi_0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_hongqi_0.corr = 1;  // correct non-response
      } else {
         key_resp_hongqi_0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_hongqi_0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_hongqi_0.keys', key_resp_hongqi_0.keys);
    psychoJS.experiment.addData('key_resp_hongqi_0.corr', key_resp_hongqi_0.corr);
    if (typeof key_resp_hongqi_0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_hongqi_0.rt', key_resp_hongqi_0.rt);
        psychoJS.experiment.addData('key_resp_hongqi_0.duration', key_resp_hongqi_0.duration);
        routineTimer.reset();
        }
    
    key_resp_hongqi_0.stop();
    if (trial_hongqi0MaxDurationReached) {
        trial_hongqi0Clock.add(trial_hongqi0MaxDuration);
    } else {
        trial_hongqi0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shenhai0MaxDurationReached;
var _key_resp_shenhai0_allKeys;
var trial_shenhai0MaxDuration;
var trial_shenhai0Components;
function trial_shenhai0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shenhai0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shenhai0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_shenhai0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_shenhai0.setValue('audio/shenhai0.wav');
    sound_shenhai0.secs=3.0;
    sound_shenhai0.setVolume(1.0);
    key_resp_shenhai0.keys = undefined;
    key_resp_shenhai0.rt = undefined;
    _key_resp_shenhai0_allKeys = [];
    psychoJS.experiment.addData('trial_shenhai0.started', globalClock.getTime());
    trial_shenhai0MaxDuration = null
    // keep track of which components have finished
    trial_shenhai0Components = [];
    trial_shenhai0Components.push(text_shenhai0);
    trial_shenhai0Components.push(sound_shenhai0);
    trial_shenhai0Components.push(text_125);
    trial_shenhai0Components.push(text_126);
    trial_shenhai0Components.push(key_resp_shenhai0);
    
    for (const thisComponent of trial_shenhai0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shenhai0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shenhai0' ---
    // get current time
    t = trial_shenhai0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_shenhai0* updates
    if (t >= 0 && text_shenhai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shenhai0.tStart = t;  // (not accounting for frame time here)
      text_shenhai0.frameNStart = frameN;  // exact frame index
      
      text_shenhai0.setAutoDraw(true);
    }
    
    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_shenhai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_shenhai0.setAutoDraw(false);
    }
    
    // start/stop sound_shenhai0
    if (t >= 4.0 && sound_shenhai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shenhai0.tStart = t;  // (not accounting for frame time here)
      sound_shenhai0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shenhai0.play(); });  // screen flip
      sound_shenhai0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shenhai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shenhai0.tStart + 0.5) {
        sound_shenhai0.stop();  // stop the sound (if longer than duration)
        sound_shenhai0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_125* updates
    if (t >= 3.0 && text_125.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_125.tStart = t;  // (not accounting for frame time here)
      text_125.frameNStart = frameN;  // exact frame index
      
      text_125.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_125.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_125.setAutoDraw(false);
    }
    
    
    // *text_126* updates
    if (t >= 7.0 && text_126.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_126.tStart = t;  // (not accounting for frame time here)
      text_126.frameNStart = frameN;  // exact frame index
      
      text_126.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_126.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_126.setAutoDraw(false);
    }
    
    
    // *key_resp_shenhai0* updates
    if (t >= 7.0 && key_resp_shenhai0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shenhai0.tStart = t;  // (not accounting for frame time here)
      key_resp_shenhai0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shenhai0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shenhai0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shenhai0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shenhai0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shenhai0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shenhai0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shenhai0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shenhai0_allKeys = _key_resp_shenhai0_allKeys.concat(theseKeys);
      if (_key_resp_shenhai0_allKeys.length > 0) {
        key_resp_shenhai0.keys = _key_resp_shenhai0_allKeys[0].name;  // just the first key pressed
        key_resp_shenhai0.rt = _key_resp_shenhai0_allKeys[0].rt;
        key_resp_shenhai0.duration = _key_resp_shenhai0_allKeys[0].duration;
        // was this correct?
        if (key_resp_shenhai0.keys == "'left'") {
            key_resp_shenhai0.corr = 1;
        } else {
            key_resp_shenhai0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shenhai0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shenhai0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shenhai0' ---
    for (const thisComponent of trial_shenhai0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shenhai0.stopped', globalClock.getTime());
    sound_shenhai0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shenhai0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_shenhai0.corr = 1;  // correct non-response
      } else {
         key_resp_shenhai0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shenhai0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shenhai0.keys', key_resp_shenhai0.keys);
    psychoJS.experiment.addData('key_resp_shenhai0.corr', key_resp_shenhai0.corr);
    if (typeof key_resp_shenhai0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shenhai0.rt', key_resp_shenhai0.rt);
        psychoJS.experiment.addData('key_resp_shenhai0.duration', key_resp_shenhai0.duration);
        routineTimer.reset();
        }
    
    key_resp_shenhai0.stop();
    if (trial_shenhai0MaxDurationReached) {
        trial_shenhai0Clock.add(trial_shenhai0MaxDuration);
    } else {
        trial_shenhai0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_feihe0MaxDurationReached;
var _key_resp_feihe0_allKeys;
var trial_feihe0MaxDuration;
var trial_feihe0Components;
function trial_feihe0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_feihe0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_feihe0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_feihe0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_feihe0.setValue('audio/feihe0.wav');
    sound_feihe0.secs=3;
    sound_feihe0.setVolume(1.0);
    key_resp_feihe0.keys = undefined;
    key_resp_feihe0.rt = undefined;
    _key_resp_feihe0_allKeys = [];
    psychoJS.experiment.addData('trial_feihe0.started', globalClock.getTime());
    trial_feihe0MaxDuration = null
    // keep track of which components have finished
    trial_feihe0Components = [];
    trial_feihe0Components.push(text_feihe0);
    trial_feihe0Components.push(sound_feihe0);
    trial_feihe0Components.push(text_127);
    trial_feihe0Components.push(text_128);
    trial_feihe0Components.push(key_resp_feihe0);
    
    for (const thisComponent of trial_feihe0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_feihe0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_feihe0' ---
    // get current time
    t = trial_feihe0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feihe0* updates
    if (t >= 0.0 && text_feihe0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feihe0.tStart = t;  // (not accounting for frame time here)
      text_feihe0.frameNStart = frameN;  // exact frame index
      
      text_feihe0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_feihe0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feihe0.setAutoDraw(false);
    }
    
    // start/stop sound_feihe0
    if (t >= 4 && sound_feihe0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_feihe0.tStart = t;  // (not accounting for frame time here)
      sound_feihe0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_feihe0.play(); });  // screen flip
      sound_feihe0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_feihe0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_feihe0.tStart + 0.5) {
        sound_feihe0.stop();  // stop the sound (if longer than duration)
        sound_feihe0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_127* updates
    if (t >= 3.0 && text_127.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_127.tStart = t;  // (not accounting for frame time here)
      text_127.frameNStart = frameN;  // exact frame index
      
      text_127.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_127.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_127.setAutoDraw(false);
    }
    
    
    // *text_128* updates
    if (t >= 7.0 && text_128.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_128.tStart = t;  // (not accounting for frame time here)
      text_128.frameNStart = frameN;  // exact frame index
      
      text_128.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_128.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_128.setAutoDraw(false);
    }
    
    
    // *key_resp_feihe0* updates
    if (t >= 7.0 && key_resp_feihe0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_feihe0.tStart = t;  // (not accounting for frame time here)
      key_resp_feihe0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_feihe0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feihe0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feihe0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_feihe0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_feihe0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_feihe0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_feihe0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_feihe0_allKeys = _key_resp_feihe0_allKeys.concat(theseKeys);
      if (_key_resp_feihe0_allKeys.length > 0) {
        key_resp_feihe0.keys = _key_resp_feihe0_allKeys[0].name;  // just the first key pressed
        key_resp_feihe0.rt = _key_resp_feihe0_allKeys[0].rt;
        key_resp_feihe0.duration = _key_resp_feihe0_allKeys[0].duration;
        // was this correct?
        if (key_resp_feihe0.keys == "'left'") {
            key_resp_feihe0.corr = 1;
        } else {
            key_resp_feihe0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_feihe0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_feihe0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_feihe0' ---
    for (const thisComponent of trial_feihe0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_feihe0.stopped', globalClock.getTime());
    sound_feihe0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_feihe0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_feihe0.corr = 1;  // correct non-response
      } else {
         key_resp_feihe0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_feihe0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_feihe0.keys', key_resp_feihe0.keys);
    psychoJS.experiment.addData('key_resp_feihe0.corr', key_resp_feihe0.corr);
    if (typeof key_resp_feihe0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_feihe0.rt', key_resp_feihe0.rt);
        psychoJS.experiment.addData('key_resp_feihe0.duration', key_resp_feihe0.duration);
        routineTimer.reset();
        }
    
    key_resp_feihe0.stop();
    if (trial_feihe0MaxDurationReached) {
        trial_feihe0Clock.add(trial_feihe0MaxDuration);
    } else {
        trial_feihe0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shenhai1MaxDurationReached;
var _key_resp_shenhai1_allKeys;
var trial_shenhai1MaxDuration;
var trial_shenhai1Components;
function trial_shenhai1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shenhai1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shenhai1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_shenhai1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_shenhai1.setValue('audio/shenhai1.wav');
    sound_shenhai1.secs=3.0;
    sound_shenhai1.setVolume(1.0);
    key_resp_shenhai1.keys = undefined;
    key_resp_shenhai1.rt = undefined;
    _key_resp_shenhai1_allKeys = [];
    psychoJS.experiment.addData('trial_shenhai1.started', globalClock.getTime());
    trial_shenhai1MaxDuration = null
    // keep track of which components have finished
    trial_shenhai1Components = [];
    trial_shenhai1Components.push(text_shenhai1);
    trial_shenhai1Components.push(sound_shenhai1);
    trial_shenhai1Components.push(text_129);
    trial_shenhai1Components.push(text_130);
    trial_shenhai1Components.push(key_resp_shenhai1);
    
    for (const thisComponent of trial_shenhai1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shenhai1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shenhai1' ---
    // get current time
    t = trial_shenhai1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_shenhai1* updates
    if (t >= 0.0 && text_shenhai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shenhai1.tStart = t;  // (not accounting for frame time here)
      text_shenhai1.frameNStart = frameN;  // exact frame index
      
      text_shenhai1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_shenhai1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_shenhai1.setAutoDraw(false);
    }
    
    // start/stop sound_shenhai1
    if (t >= 4.0 && sound_shenhai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shenhai1.tStart = t;  // (not accounting for frame time here)
      sound_shenhai1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shenhai1.play(); });  // screen flip
      sound_shenhai1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shenhai1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shenhai1.tStart + 0.5) {
        sound_shenhai1.stop();  // stop the sound (if longer than duration)
        sound_shenhai1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_129* updates
    if (t >= 3.0 && text_129.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_129.tStart = t;  // (not accounting for frame time here)
      text_129.frameNStart = frameN;  // exact frame index
      
      text_129.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_129.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_129.setAutoDraw(false);
    }
    
    
    // *text_130* updates
    if (t >= 7.0 && text_130.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_130.tStart = t;  // (not accounting for frame time here)
      text_130.frameNStart = frameN;  // exact frame index
      
      text_130.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_130.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_130.setAutoDraw(false);
    }
    
    
    // *key_resp_shenhai1* updates
    if (t >= 7.0 && key_resp_shenhai1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shenhai1.tStart = t;  // (not accounting for frame time here)
      key_resp_shenhai1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shenhai1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shenhai1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shenhai1.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shenhai1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shenhai1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shenhai1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shenhai1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shenhai1_allKeys = _key_resp_shenhai1_allKeys.concat(theseKeys);
      if (_key_resp_shenhai1_allKeys.length > 0) {
        key_resp_shenhai1.keys = _key_resp_shenhai1_allKeys[0].name;  // just the first key pressed
        key_resp_shenhai1.rt = _key_resp_shenhai1_allKeys[0].rt;
        key_resp_shenhai1.duration = _key_resp_shenhai1_allKeys[0].duration;
        // was this correct?
        if (key_resp_shenhai1.keys == "'right'") {
            key_resp_shenhai1.corr = 1;
        } else {
            key_resp_shenhai1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shenhai1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shenhai1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shenhai1' ---
    for (const thisComponent of trial_shenhai1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shenhai1.stopped', globalClock.getTime());
    sound_shenhai1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shenhai1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_shenhai1.corr = 1;  // correct non-response
      } else {
         key_resp_shenhai1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shenhai1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shenhai1.keys', key_resp_shenhai1.keys);
    psychoJS.experiment.addData('key_resp_shenhai1.corr', key_resp_shenhai1.corr);
    if (typeof key_resp_shenhai1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shenhai1.rt', key_resp_shenhai1.rt);
        psychoJS.experiment.addData('key_resp_shenhai1.duration', key_resp_shenhai1.duration);
        routineTimer.reset();
        }
    
    key_resp_shenhai1.stop();
    if (trial_shenhai1MaxDurationReached) {
        trial_shenhai1Clock.add(trial_shenhai1MaxDuration);
    } else {
        trial_shenhai1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_shoujiMaxDurationReached;
var _key_resp_shouji_allKeys;
var trial_shoujiMaxDuration;
var trial_shoujiComponents;
function trial_shoujiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_shouji' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_shoujiClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_shoujiMaxDurationReached = false;
    // update component parameters for each repeat
    sound_shouji.setValue('audio/shouji.wav');
    sound_shouji.secs=3;
    sound_shouji.setVolume(1.0);
    key_resp_shouji.keys = undefined;
    key_resp_shouji.rt = undefined;
    _key_resp_shouji_allKeys = [];
    psychoJS.experiment.addData('trial_shouji.started', globalClock.getTime());
    trial_shoujiMaxDuration = null
    // keep track of which components have finished
    trial_shoujiComponents = [];
    trial_shoujiComponents.push(text_shouji);
    trial_shoujiComponents.push(sound_shouji);
    trial_shoujiComponents.push(text_165);
    trial_shoujiComponents.push(text_166);
    trial_shoujiComponents.push(key_resp_shouji);
    
    for (const thisComponent of trial_shoujiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_shoujiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_shouji' ---
    // get current time
    t = trial_shoujiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_shouji* updates
    if (t >= 0.0 && text_shouji.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_shouji.tStart = t;  // (not accounting for frame time here)
      text_shouji.frameNStart = frameN;  // exact frame index
      
      text_shouji.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_shouji.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_shouji.setAutoDraw(false);
    }
    
    // start/stop sound_shouji
    if (t >= 4 && sound_shouji.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_shouji.tStart = t;  // (not accounting for frame time here)
      sound_shouji.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_shouji.play(); });  // screen flip
      sound_shouji.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_shouji.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_shouji.tStart + 0.5) {
        sound_shouji.stop();  // stop the sound (if longer than duration)
        sound_shouji.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_165* updates
    if (t >= 3.0 && text_165.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_165.tStart = t;  // (not accounting for frame time here)
      text_165.frameNStart = frameN;  // exact frame index
      
      text_165.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_165.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_165.setAutoDraw(false);
    }
    
    
    // *text_166* updates
    if (t >= 7.0 && text_166.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_166.tStart = t;  // (not accounting for frame time here)
      text_166.frameNStart = frameN;  // exact frame index
      
      text_166.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_166.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_166.setAutoDraw(false);
    }
    
    
    // *key_resp_shouji* updates
    if (t >= 7.0 && key_resp_shouji.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_shouji.tStart = t;  // (not accounting for frame time here)
      key_resp_shouji.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_shouji.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shouji.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_shouji.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_shouji.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_shouji.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_shouji.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_shouji.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_shouji_allKeys = _key_resp_shouji_allKeys.concat(theseKeys);
      if (_key_resp_shouji_allKeys.length > 0) {
        key_resp_shouji.keys = _key_resp_shouji_allKeys[0].name;  // just the first key pressed
        key_resp_shouji.rt = _key_resp_shouji_allKeys[0].rt;
        key_resp_shouji.duration = _key_resp_shouji_allKeys[0].duration;
        // was this correct?
        if (key_resp_shouji.keys == "'left'") {
            key_resp_shouji.corr = 1;
        } else {
            key_resp_shouji.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_shoujiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_shoujiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_shouji' ---
    for (const thisComponent of trial_shoujiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_shouji.stopped', globalClock.getTime());
    sound_shouji.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_shouji.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_shouji.corr = 1;  // correct non-response
      } else {
         key_resp_shouji.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_shouji.corr, level);
    }
    psychoJS.experiment.addData('key_resp_shouji.keys', key_resp_shouji.keys);
    psychoJS.experiment.addData('key_resp_shouji.corr', key_resp_shouji.corr);
    if (typeof key_resp_shouji.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_shouji.rt', key_resp_shouji.rt);
        psychoJS.experiment.addData('key_resp_shouji.duration', key_resp_shouji.duration);
        routineTimer.reset();
        }
    
    key_resp_shouji.stop();
    if (trial_shoujiMaxDurationReached) {
        trial_shoujiClock.add(trial_shoujiMaxDuration);
    } else {
        trial_shoujiClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_hongniu1MaxDurationReached;
var _key_resp_hongniu1_allKeys;
var trial_hongniu1MaxDuration;
var trial_hongniu1Components;
function trial_hongniu1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_hongniu1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_hongniu1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_hongniu1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_hongniu1.setValue('audio/hongniu1.wav');
    sound_hongniu1.secs=3.0;
    sound_hongniu1.setVolume(1.0);
    key_resp_hongniu1.keys = undefined;
    key_resp_hongniu1.rt = undefined;
    _key_resp_hongniu1_allKeys = [];
    psychoJS.experiment.addData('trial_hongniu1.started', globalClock.getTime());
    trial_hongniu1MaxDuration = null
    // keep track of which components have finished
    trial_hongniu1Components = [];
    trial_hongniu1Components.push(text_hongniu1);
    trial_hongniu1Components.push(sound_hongniu1);
    trial_hongniu1Components.push(text_131);
    trial_hongniu1Components.push(text_132);
    trial_hongniu1Components.push(key_resp_hongniu1);
    
    for (const thisComponent of trial_hongniu1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_hongniu1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_hongniu1' ---
    // get current time
    t = trial_hongniu1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_hongniu1* updates
    if (t >= 0.0 && text_hongniu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hongniu1.tStart = t;  // (not accounting for frame time here)
      text_hongniu1.frameNStart = frameN;  // exact frame index
      
      text_hongniu1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_hongniu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_hongniu1.setAutoDraw(false);
    }
    
    // start/stop sound_hongniu1
    if (t >= 4.0 && sound_hongniu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_hongniu1.tStart = t;  // (not accounting for frame time here)
      sound_hongniu1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_hongniu1.play(); });  // screen flip
      sound_hongniu1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_hongniu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_hongniu1.tStart + 0.5) {
        sound_hongniu1.stop();  // stop the sound (if longer than duration)
        sound_hongniu1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_131* updates
    if (t >= 3.0 && text_131.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_131.tStart = t;  // (not accounting for frame time here)
      text_131.frameNStart = frameN;  // exact frame index
      
      text_131.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_131.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_131.setAutoDraw(false);
    }
    
    
    // *text_132* updates
    if (t >= 7 && text_132.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_132.tStart = t;  // (not accounting for frame time here)
      text_132.frameNStart = frameN;  // exact frame index
      
      text_132.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_132.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_132.setAutoDraw(false);
    }
    
    
    // *key_resp_hongniu1* updates
    if (t >= 7 && key_resp_hongniu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_hongniu1.tStart = t;  // (not accounting for frame time here)
      key_resp_hongniu1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_hongniu1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongniu1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_hongniu1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_hongniu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_hongniu1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_hongniu1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_hongniu1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_hongniu1_allKeys = _key_resp_hongniu1_allKeys.concat(theseKeys);
      if (_key_resp_hongniu1_allKeys.length > 0) {
        key_resp_hongniu1.keys = _key_resp_hongniu1_allKeys[0].name;  // just the first key pressed
        key_resp_hongniu1.rt = _key_resp_hongniu1_allKeys[0].rt;
        key_resp_hongniu1.duration = _key_resp_hongniu1_allKeys[0].duration;
        // was this correct?
        if (key_resp_hongniu1.keys == "'right'") {
            key_resp_hongniu1.corr = 1;
        } else {
            key_resp_hongniu1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_hongniu1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_hongniu1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_hongniu1' ---
    for (const thisComponent of trial_hongniu1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_hongniu1.stopped', globalClock.getTime());
    sound_hongniu1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_hongniu1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_hongniu1.corr = 1;  // correct non-response
      } else {
         key_resp_hongniu1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_hongniu1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_hongniu1.keys', key_resp_hongniu1.keys);
    psychoJS.experiment.addData('key_resp_hongniu1.corr', key_resp_hongniu1.corr);
    if (typeof key_resp_hongniu1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_hongniu1.rt', key_resp_hongniu1.rt);
        psychoJS.experiment.addData('key_resp_hongniu1.duration', key_resp_hongniu1.duration);
        routineTimer.reset();
        }
    
    key_resp_hongniu1.stop();
    if (trial_hongniu1MaxDurationReached) {
        trial_hongniu1Clock.add(trial_hongniu1MaxDuration);
    } else {
        trial_hongniu1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_guangming0MaxDurationReached;
var _key_resp_guangming0_allKeys;
var trial_guangming0MaxDuration;
var trial_guangming0Components;
function trial_guangming0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_guangming0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_guangming0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_guangming0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_guangming0.setValue('audio/guangming0.wav');
    sound_guangming0.secs=3.0;
    sound_guangming0.setVolume(1.0);
    key_resp_guangming0.keys = undefined;
    key_resp_guangming0.rt = undefined;
    _key_resp_guangming0_allKeys = [];
    psychoJS.experiment.addData('trial_guangming0.started', globalClock.getTime());
    trial_guangming0MaxDuration = null
    // keep track of which components have finished
    trial_guangming0Components = [];
    trial_guangming0Components.push(text_guangming0);
    trial_guangming0Components.push(sound_guangming0);
    trial_guangming0Components.push(text_133);
    trial_guangming0Components.push(text_134);
    trial_guangming0Components.push(key_resp_guangming0);
    
    for (const thisComponent of trial_guangming0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_guangming0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_guangming0' ---
    // get current time
    t = trial_guangming0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_guangming0* updates
    if (t >= 0.0 && text_guangming0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_guangming0.tStart = t;  // (not accounting for frame time here)
      text_guangming0.frameNStart = frameN;  // exact frame index
      
      text_guangming0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_guangming0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_guangming0.setAutoDraw(false);
    }
    
    // start/stop sound_guangming0
    if (t >= 4.0 && sound_guangming0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_guangming0.tStart = t;  // (not accounting for frame time here)
      sound_guangming0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_guangming0.play(); });  // screen flip
      sound_guangming0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_guangming0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_guangming0.tStart + 0.5) {
        sound_guangming0.stop();  // stop the sound (if longer than duration)
        sound_guangming0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_133* updates
    if (t >= 3.0 && text_133.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_133.tStart = t;  // (not accounting for frame time here)
      text_133.frameNStart = frameN;  // exact frame index
      
      text_133.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_133.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_133.setAutoDraw(false);
    }
    
    
    // *text_134* updates
    if (t >= 7.0 && text_134.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_134.tStart = t;  // (not accounting for frame time here)
      text_134.frameNStart = frameN;  // exact frame index
      
      text_134.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_134.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_134.setAutoDraw(false);
    }
    
    
    // *key_resp_guangming0* updates
    if (t >= 7.0 && key_resp_guangming0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_guangming0.tStart = t;  // (not accounting for frame time here)
      key_resp_guangming0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_guangming0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_guangming0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_guangming0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_guangming0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_guangming0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_guangming0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_guangming0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_guangming0_allKeys = _key_resp_guangming0_allKeys.concat(theseKeys);
      if (_key_resp_guangming0_allKeys.length > 0) {
        key_resp_guangming0.keys = _key_resp_guangming0_allKeys[0].name;  // just the first key pressed
        key_resp_guangming0.rt = _key_resp_guangming0_allKeys[0].rt;
        key_resp_guangming0.duration = _key_resp_guangming0_allKeys[0].duration;
        // was this correct?
        if (key_resp_guangming0.keys == "'left'") {
            key_resp_guangming0.corr = 1;
        } else {
            key_resp_guangming0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_guangming0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_guangming0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_guangming0' ---
    for (const thisComponent of trial_guangming0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_guangming0.stopped', globalClock.getTime());
    sound_guangming0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_guangming0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_guangming0.corr = 1;  // correct non-response
      } else {
         key_resp_guangming0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_guangming0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_guangming0.keys', key_resp_guangming0.keys);
    psychoJS.experiment.addData('key_resp_guangming0.corr', key_resp_guangming0.corr);
    if (typeof key_resp_guangming0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_guangming0.rt', key_resp_guangming0.rt);
        psychoJS.experiment.addData('key_resp_guangming0.duration', key_resp_guangming0.duration);
        routineTimer.reset();
        }
    
    key_resp_guangming0.stop();
    if (trial_guangming0MaxDurationReached) {
        trial_guangming0Clock.add(trial_guangming0MaxDuration);
    } else {
        trial_guangming0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_qicheMaxDurationReached;
var _key_resp_qiche_allKeys;
var trial_qicheMaxDuration;
var trial_qicheComponents;
function trial_qicheRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_qiche' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_qicheClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_qicheMaxDurationReached = false;
    // update component parameters for each repeat
    sound_qiche.setValue('audio/qiche.wav');
    sound_qiche.secs=3.0;
    sound_qiche.setVolume(1.0);
    key_resp_qiche.keys = undefined;
    key_resp_qiche.rt = undefined;
    _key_resp_qiche_allKeys = [];
    psychoJS.experiment.addData('trial_qiche.started', globalClock.getTime());
    trial_qicheMaxDuration = null
    // keep track of which components have finished
    trial_qicheComponents = [];
    trial_qicheComponents.push(text_qiche);
    trial_qicheComponents.push(sound_qiche);
    trial_qicheComponents.push(text_135);
    trial_qicheComponents.push(text_136);
    trial_qicheComponents.push(key_resp_qiche);
    
    for (const thisComponent of trial_qicheComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_qicheRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_qiche' ---
    // get current time
    t = trial_qicheClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_qiche* updates
    if (t >= 0.0 && text_qiche.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_qiche.tStart = t;  // (not accounting for frame time here)
      text_qiche.frameNStart = frameN;  // exact frame index
      
      text_qiche.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_qiche.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_qiche.setAutoDraw(false);
    }
    
    // start/stop sound_qiche
    if (t >= 4.0 && sound_qiche.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_qiche.tStart = t;  // (not accounting for frame time here)
      sound_qiche.frameNStart = frameN;  // exact frame index
      
      sound_qiche.play();  // start the sound (it finishes automatically)
      sound_qiche.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_qiche.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_qiche.tStart + 0.5) {
        sound_qiche.stop();  // stop the sound (if longer than duration)
        sound_qiche.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_135* updates
    if (t >= 3.0 && text_135.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_135.tStart = t;  // (not accounting for frame time here)
      text_135.frameNStart = frameN;  // exact frame index
      
      text_135.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_135.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_135.setAutoDraw(false);
    }
    
    
    // *text_136* updates
    if (t >= 7.0 && text_136.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_136.tStart = t;  // (not accounting for frame time here)
      text_136.frameNStart = frameN;  // exact frame index
      
      text_136.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_136.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_136.setAutoDraw(false);
    }
    
    
    // *key_resp_qiche* updates
    if (t >= 7.0 && key_resp_qiche.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_qiche.tStart = t;  // (not accounting for frame time here)
      key_resp_qiche.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_qiche.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_qiche.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_qiche.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_qiche.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_qiche.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_qiche.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_qiche.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_qiche_allKeys = _key_resp_qiche_allKeys.concat(theseKeys);
      if (_key_resp_qiche_allKeys.length > 0) {
        key_resp_qiche.keys = _key_resp_qiche_allKeys[_key_resp_qiche_allKeys.length - 1].name;  // just the last key pressed
        key_resp_qiche.rt = _key_resp_qiche_allKeys[_key_resp_qiche_allKeys.length - 1].rt;
        key_resp_qiche.duration = _key_resp_qiche_allKeys[_key_resp_qiche_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_qiche.keys == "'left'") {
            key_resp_qiche.corr = 1;
        } else {
            key_resp_qiche.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_qicheComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_qicheRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_qiche' ---
    for (const thisComponent of trial_qicheComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_qiche.stopped', globalClock.getTime());
    sound_qiche.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_qiche.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_qiche.corr = 1;  // correct non-response
      } else {
         key_resp_qiche.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_qiche.corr, level);
    }
    psychoJS.experiment.addData('key_resp_qiche.keys', key_resp_qiche.keys);
    psychoJS.experiment.addData('key_resp_qiche.corr', key_resp_qiche.corr);
    if (typeof key_resp_qiche.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_qiche.rt', key_resp_qiche.rt);
        psychoJS.experiment.addData('key_resp_qiche.duration', key_resp_qiche.duration);
        routineTimer.reset();
        }
    
    key_resp_qiche.stop();
    if (trial_qicheMaxDurationReached) {
        trial_qicheClock.add(trial_qicheMaxDuration);
    } else {
        trial_qicheClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_gongfu0MaxDurationReached;
var _key_resp_gongfu0_allKeys;
var trial_gongfu0MaxDuration;
var trial_gongfu0Components;
function trial_gongfu0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_gongfu0' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_gongfu0Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_gongfu0MaxDurationReached = false;
    // update component parameters for each repeat
    sound_gongfu0.setValue('audio/gongfu0.wav');
    sound_gongfu0.secs=3.0;
    sound_gongfu0.setVolume(1.0);
    key_resp_gongfu0.keys = undefined;
    key_resp_gongfu0.rt = undefined;
    _key_resp_gongfu0_allKeys = [];
    psychoJS.experiment.addData('trial_gongfu0.started', globalClock.getTime());
    trial_gongfu0MaxDuration = null
    // keep track of which components have finished
    trial_gongfu0Components = [];
    trial_gongfu0Components.push(text_gongfu0);
    trial_gongfu0Components.push(sound_gongfu0);
    trial_gongfu0Components.push(text_137);
    trial_gongfu0Components.push(text_138);
    trial_gongfu0Components.push(key_resp_gongfu0);
    
    for (const thisComponent of trial_gongfu0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_gongfu0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_gongfu0' ---
    // get current time
    t = trial_gongfu0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_gongfu0* updates
    if (t >= 0.0 && text_gongfu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_gongfu0.tStart = t;  // (not accounting for frame time here)
      text_gongfu0.frameNStart = frameN;  // exact frame index
      
      text_gongfu0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_gongfu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_gongfu0.setAutoDraw(false);
    }
    
    // start/stop sound_gongfu0
    if (t >= 4.0 && sound_gongfu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_gongfu0.tStart = t;  // (not accounting for frame time here)
      sound_gongfu0.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_gongfu0.play(); });  // screen flip
      sound_gongfu0.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_gongfu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_gongfu0.tStart + 0.5) {
        sound_gongfu0.stop();  // stop the sound (if longer than duration)
        sound_gongfu0.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_137* updates
    if (t >= 3.0 && text_137.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_137.tStart = t;  // (not accounting for frame time here)
      text_137.frameNStart = frameN;  // exact frame index
      
      text_137.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_137.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_137.setAutoDraw(false);
    }
    
    
    // *text_138* updates
    if (t >= 7.0 && text_138.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_138.tStart = t;  // (not accounting for frame time here)
      text_138.frameNStart = frameN;  // exact frame index
      
      text_138.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_138.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_138.setAutoDraw(false);
    }
    
    
    // *key_resp_gongfu0* updates
    if (t >= 7.0 && key_resp_gongfu0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_gongfu0.tStart = t;  // (not accounting for frame time here)
      key_resp_gongfu0.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_gongfu0.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gongfu0.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_gongfu0.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_gongfu0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_gongfu0.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_gongfu0.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_gongfu0.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_gongfu0_allKeys = _key_resp_gongfu0_allKeys.concat(theseKeys);
      if (_key_resp_gongfu0_allKeys.length > 0) {
        key_resp_gongfu0.keys = _key_resp_gongfu0_allKeys[0].name;  // just the first key pressed
        key_resp_gongfu0.rt = _key_resp_gongfu0_allKeys[0].rt;
        key_resp_gongfu0.duration = _key_resp_gongfu0_allKeys[0].duration;
        // was this correct?
        if (key_resp_gongfu0.keys == "'left'") {
            key_resp_gongfu0.corr = 1;
        } else {
            key_resp_gongfu0.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_gongfu0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_gongfu0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_gongfu0' ---
    for (const thisComponent of trial_gongfu0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_gongfu0.stopped', globalClock.getTime());
    sound_gongfu0.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_gongfu0.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_gongfu0.corr = 1;  // correct non-response
      } else {
         key_resp_gongfu0.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_gongfu0.corr, level);
    }
    psychoJS.experiment.addData('key_resp_gongfu0.keys', key_resp_gongfu0.keys);
    psychoJS.experiment.addData('key_resp_gongfu0.corr', key_resp_gongfu0.corr);
    if (typeof key_resp_gongfu0.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_gongfu0.rt', key_resp_gongfu0.rt);
        psychoJS.experiment.addData('key_resp_gongfu0.duration', key_resp_gongfu0.duration);
        routineTimer.reset();
        }
    
    key_resp_gongfu0.stop();
    if (trial_gongfu0MaxDurationReached) {
        trial_gongfu0Clock.add(trial_gongfu0MaxDuration);
    } else {
        trial_gongfu0Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_yusanMaxDurationReached;
var _key_respyusan_allKeys;
var trial_yusanMaxDuration;
var trial_yusanComponents;
function trial_yusanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_yusan' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_yusanClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_yusanMaxDurationReached = false;
    // update component parameters for each repeat
    soundyusan.setValue('audio/yusan.wav');
    soundyusan.secs=3;
    soundyusan.setVolume(1.0);
    key_respyusan.keys = undefined;
    key_respyusan.rt = undefined;
    _key_respyusan_allKeys = [];
    psychoJS.experiment.addData('trial_yusan.started', globalClock.getTime());
    trial_yusanMaxDuration = null
    // keep track of which components have finished
    trial_yusanComponents = [];
    trial_yusanComponents.push(textyusan);
    trial_yusanComponents.push(soundyusan);
    trial_yusanComponents.push(text_157);
    trial_yusanComponents.push(text_158);
    trial_yusanComponents.push(key_respyusan);
    
    for (const thisComponent of trial_yusanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_yusanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_yusan' ---
    // get current time
    t = trial_yusanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textyusan* updates
    if (t >= 0.0 && textyusan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textyusan.tStart = t;  // (not accounting for frame time here)
      textyusan.frameNStart = frameN;  // exact frame index
      
      textyusan.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textyusan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textyusan.setAutoDraw(false);
    }
    
    // start/stop soundyusan
    if (t >= 4 && soundyusan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      soundyusan.tStart = t;  // (not accounting for frame time here)
      soundyusan.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ soundyusan.play(); });  // screen flip
      soundyusan.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (soundyusan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= soundyusan.tStart + 0.5) {
        soundyusan.stop();  // stop the sound (if longer than duration)
        soundyusan.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_157* updates
    if (t >= 3.0 && text_157.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_157.tStart = t;  // (not accounting for frame time here)
      text_157.frameNStart = frameN;  // exact frame index
      
      text_157.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_157.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_157.setAutoDraw(false);
    }
    
    
    // *text_158* updates
    if (t >= 7.0 && text_158.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_158.tStart = t;  // (not accounting for frame time here)
      text_158.frameNStart = frameN;  // exact frame index
      
      text_158.setAutoDraw(true);
    }
    
    frameRemains = 7.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_158.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_158.setAutoDraw(false);
    }
    
    
    // *key_respyusan* updates
    if (t >= 7.0 && key_respyusan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respyusan.tStart = t;  // (not accounting for frame time here)
      key_respyusan.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respyusan.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respyusan.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respyusan.clearEvents(); });
    }
    
    frameRemains = 7.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_respyusan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_respyusan.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_respyusan.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respyusan.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_respyusan_allKeys = _key_respyusan_allKeys.concat(theseKeys);
      if (_key_respyusan_allKeys.length > 0) {
        key_respyusan.keys = _key_respyusan_allKeys[0].name;  // just the first key pressed
        key_respyusan.rt = _key_respyusan_allKeys[0].rt;
        key_respyusan.duration = _key_respyusan_allKeys[0].duration;
        // was this correct?
        if (key_respyusan.keys == "'left'") {
            key_respyusan.corr = 1;
        } else {
            key_respyusan.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_yusanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_yusanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_yusan' ---
    for (const thisComponent of trial_yusanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_yusan.stopped', globalClock.getTime());
    soundyusan.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_respyusan.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_respyusan.corr = 1;  // correct non-response
      } else {
         key_respyusan.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respyusan.corr, level);
    }
    psychoJS.experiment.addData('key_respyusan.keys', key_respyusan.keys);
    psychoJS.experiment.addData('key_respyusan.corr', key_respyusan.corr);
    if (typeof key_respyusan.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respyusan.rt', key_respyusan.rt);
        psychoJS.experiment.addData('key_respyusan.duration', key_respyusan.duration);
        routineTimer.reset();
        }
    
    key_respyusan.stop();
    if (trial_yusanMaxDurationReached) {
        trial_yusanClock.add(trial_yusanMaxDuration);
    } else {
        trial_yusanClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_jiaofu1MaxDurationReached;
var _key_resp_jiaofu1_allKeys;
var trial_jiaofu1MaxDuration;
var trial_jiaofu1Components;
function trial_jiaofu1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_jiaofu1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_jiaofu1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_jiaofu1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_jiaofu1.setValue('audio/jiaofu1.wav');
    sound_jiaofu1.secs=3;
    sound_jiaofu1.setVolume(1.0);
    key_resp_jiaofu1.keys = undefined;
    key_resp_jiaofu1.rt = undefined;
    _key_resp_jiaofu1_allKeys = [];
    psychoJS.experiment.addData('trial_jiaofu1.started', globalClock.getTime());
    trial_jiaofu1MaxDuration = null
    // keep track of which components have finished
    trial_jiaofu1Components = [];
    trial_jiaofu1Components.push(text_jiaofu1);
    trial_jiaofu1Components.push(sound_jiaofu1);
    trial_jiaofu1Components.push(text_141);
    trial_jiaofu1Components.push(text_142);
    trial_jiaofu1Components.push(key_resp_jiaofu1);
    
    for (const thisComponent of trial_jiaofu1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_jiaofu1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_jiaofu1' ---
    // get current time
    t = trial_jiaofu1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_jiaofu1* updates
    if (t >= 0.0 && text_jiaofu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_jiaofu1.tStart = t;  // (not accounting for frame time here)
      text_jiaofu1.frameNStart = frameN;  // exact frame index
      
      text_jiaofu1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_jiaofu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_jiaofu1.setAutoDraw(false);
    }
    
    // start/stop sound_jiaofu1
    if (t >= 4 && sound_jiaofu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_jiaofu1.tStart = t;  // (not accounting for frame time here)
      sound_jiaofu1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_jiaofu1.play(); });  // screen flip
      sound_jiaofu1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_jiaofu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_jiaofu1.tStart + 0.5) {
        sound_jiaofu1.stop();  // stop the sound (if longer than duration)
        sound_jiaofu1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_141* updates
    if (t >= 3 && text_141.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_141.tStart = t;  // (not accounting for frame time here)
      text_141.frameNStart = frameN;  // exact frame index
      
      text_141.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_141.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_141.setAutoDraw(false);
    }
    
    
    // *text_142* updates
    if (t >= 7 && text_142.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_142.tStart = t;  // (not accounting for frame time here)
      text_142.frameNStart = frameN;  // exact frame index
      
      text_142.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_142.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_142.setAutoDraw(false);
    }
    
    
    // *key_resp_jiaofu1* updates
    if (t >= 7 && key_resp_jiaofu1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_jiaofu1.tStart = t;  // (not accounting for frame time here)
      key_resp_jiaofu1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_jiaofu1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_jiaofu1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_jiaofu1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_jiaofu1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_jiaofu1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_jiaofu1_allKeys = _key_resp_jiaofu1_allKeys.concat(theseKeys);
      if (_key_resp_jiaofu1_allKeys.length > 0) {
        key_resp_jiaofu1.keys = _key_resp_jiaofu1_allKeys[0].name;  // just the first key pressed
        key_resp_jiaofu1.rt = _key_resp_jiaofu1_allKeys[0].rt;
        key_resp_jiaofu1.duration = _key_resp_jiaofu1_allKeys[0].duration;
        // was this correct?
        if (key_resp_jiaofu1.keys == "'right'") {
            key_resp_jiaofu1.corr = 1;
        } else {
            key_resp_jiaofu1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_jiaofu1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_jiaofu1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_jiaofu1' ---
    for (const thisComponent of trial_jiaofu1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_jiaofu1.stopped', globalClock.getTime());
    sound_jiaofu1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_jiaofu1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_jiaofu1.corr = 1;  // correct non-response
      } else {
         key_resp_jiaofu1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_jiaofu1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_jiaofu1.keys', key_resp_jiaofu1.keys);
    psychoJS.experiment.addData('key_resp_jiaofu1.corr', key_resp_jiaofu1.corr);
    if (typeof key_resp_jiaofu1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_jiaofu1.rt', key_resp_jiaofu1.rt);
        psychoJS.experiment.addData('key_resp_jiaofu1.duration', key_resp_jiaofu1.duration);
        routineTimer.reset();
        }
    
    key_resp_jiaofu1.stop();
    if (trial_jiaofu1MaxDurationReached) {
        trial_jiaofu1Clock.add(trial_jiaofu1MaxDuration);
    } else {
        trial_jiaofu1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_baixiang1MaxDurationReached;
var _key_resp_baixiang_1_allKeys;
var trial_baixiang1MaxDuration;
var trial_baixiang1Components;
function trial_baixiang1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_baixiang1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_baixiang1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_baixiang1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_baixiang_1.setValue('audio/baixiang1.wav');
    sound_baixiang_1.secs=3;
    sound_baixiang_1.setVolume(1.0);
    key_resp_baixiang_1.keys = undefined;
    key_resp_baixiang_1.rt = undefined;
    _key_resp_baixiang_1_allKeys = [];
    psychoJS.experiment.addData('trial_baixiang1.started', globalClock.getTime());
    trial_baixiang1MaxDuration = null
    // keep track of which components have finished
    trial_baixiang1Components = [];
    trial_baixiang1Components.push(text_baixiang_1);
    trial_baixiang1Components.push(sound_baixiang_1);
    trial_baixiang1Components.push(text_159);
    trial_baixiang1Components.push(text_160);
    trial_baixiang1Components.push(key_resp_baixiang_1);
    
    for (const thisComponent of trial_baixiang1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baixiang1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_baixiang1' ---
    // get current time
    t = trial_baixiang1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_baixiang_1* updates
    if (t >= 0.0 && text_baixiang_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_baixiang_1.tStart = t;  // (not accounting for frame time here)
      text_baixiang_1.frameNStart = frameN;  // exact frame index
      
      text_baixiang_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_baixiang_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_baixiang_1.setAutoDraw(false);
    }
    
    // start/stop sound_baixiang_1
    if (t >= 4 && sound_baixiang_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_baixiang_1.tStart = t;  // (not accounting for frame time here)
      sound_baixiang_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_baixiang_1.play(); });  // screen flip
      sound_baixiang_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_baixiang_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_baixiang_1.tStart + 0.5) {
        sound_baixiang_1.stop();  // stop the sound (if longer than duration)
        sound_baixiang_1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_159* updates
    if (t >= 3 && text_159.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_159.tStart = t;  // (not accounting for frame time here)
      text_159.frameNStart = frameN;  // exact frame index
      
      text_159.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_159.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_159.setAutoDraw(false);
    }
    
    
    // *text_160* updates
    if (t >= 7 && text_160.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_160.tStart = t;  // (not accounting for frame time here)
      text_160.frameNStart = frameN;  // exact frame index
      
      text_160.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_160.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_160.setAutoDraw(false);
    }
    
    
    // *key_resp_baixiang_1* updates
    if (t >= 7 && key_resp_baixiang_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_baixiang_1.tStart = t;  // (not accounting for frame time here)
      key_resp_baixiang_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_baixiang_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baixiang_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_baixiang_1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_baixiang_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_baixiang_1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_baixiang_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_baixiang_1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_baixiang_1_allKeys = _key_resp_baixiang_1_allKeys.concat(theseKeys);
      if (_key_resp_baixiang_1_allKeys.length > 0) {
        key_resp_baixiang_1.keys = _key_resp_baixiang_1_allKeys[0].name;  // just the first key pressed
        key_resp_baixiang_1.rt = _key_resp_baixiang_1_allKeys[0].rt;
        key_resp_baixiang_1.duration = _key_resp_baixiang_1_allKeys[0].duration;
        // was this correct?
        if (key_resp_baixiang_1.keys == "'right'") {
            key_resp_baixiang_1.corr = 1;
        } else {
            key_resp_baixiang_1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_baixiang1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baixiang1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_baixiang1' ---
    for (const thisComponent of trial_baixiang1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_baixiang1.stopped', globalClock.getTime());
    sound_baixiang_1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_baixiang_1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_baixiang_1.corr = 1;  // correct non-response
      } else {
         key_resp_baixiang_1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_baixiang_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_baixiang_1.keys', key_resp_baixiang_1.keys);
    psychoJS.experiment.addData('key_resp_baixiang_1.corr', key_resp_baixiang_1.corr);
    if (typeof key_resp_baixiang_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_baixiang_1.rt', key_resp_baixiang_1.rt);
        psychoJS.experiment.addData('key_resp_baixiang_1.duration', key_resp_baixiang_1.duration);
        routineTimer.reset();
        }
    
    key_resp_baixiang_1.stop();
    if (trial_baixiang1MaxDurationReached) {
        trial_baixiang1Clock.add(trial_baixiang1MaxDuration);
    } else {
        trial_baixiang1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_canguanMaxDurationReached;
var _key_resp_canguan_allKeys;
var trial_canguanMaxDuration;
var trial_canguanComponents;
function trial_canguanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_canguan' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_canguanClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_canguanMaxDurationReached = false;
    // update component parameters for each repeat
    sound_canguan.setValue('audio/canguan.wav');
    sound_canguan.secs=3;
    sound_canguan.setVolume(1.0);
    key_resp_canguan.keys = undefined;
    key_resp_canguan.rt = undefined;
    _key_resp_canguan_allKeys = [];
    psychoJS.experiment.addData('trial_canguan.started', globalClock.getTime());
    trial_canguanMaxDuration = null
    // keep track of which components have finished
    trial_canguanComponents = [];
    trial_canguanComponents.push(text_canguan);
    trial_canguanComponents.push(sound_canguan);
    trial_canguanComponents.push(text_143);
    trial_canguanComponents.push(text_144);
    trial_canguanComponents.push(key_resp_canguan);
    
    for (const thisComponent of trial_canguanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_canguanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_canguan' ---
    // get current time
    t = trial_canguanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_canguan* updates
    if (t >= 0.0 && text_canguan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_canguan.tStart = t;  // (not accounting for frame time here)
      text_canguan.frameNStart = frameN;  // exact frame index
      
      text_canguan.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_canguan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_canguan.setAutoDraw(false);
    }
    
    // start/stop sound_canguan
    if (t >= 4 && sound_canguan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_canguan.tStart = t;  // (not accounting for frame time here)
      sound_canguan.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_canguan.play(); });  // screen flip
      sound_canguan.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_canguan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_canguan.tStart + 0.5) {
        sound_canguan.stop();  // stop the sound (if longer than duration)
        sound_canguan.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_143* updates
    if (t >= 3 && text_143.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_143.tStart = t;  // (not accounting for frame time here)
      text_143.frameNStart = frameN;  // exact frame index
      
      text_143.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_143.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_143.setAutoDraw(false);
    }
    
    
    // *text_144* updates
    if (t >= 7 && text_144.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_144.tStart = t;  // (not accounting for frame time here)
      text_144.frameNStart = frameN;  // exact frame index
      
      text_144.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_144.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_144.setAutoDraw(false);
    }
    
    
    // *key_resp_canguan* updates
    if (t >= 7 && key_resp_canguan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_canguan.tStart = t;  // (not accounting for frame time here)
      key_resp_canguan.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_canguan.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_canguan.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_canguan.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_canguan.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_canguan.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_canguan.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_canguan.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_canguan_allKeys = _key_resp_canguan_allKeys.concat(theseKeys);
      if (_key_resp_canguan_allKeys.length > 0) {
        key_resp_canguan.keys = _key_resp_canguan_allKeys[0].name;  // just the first key pressed
        key_resp_canguan.rt = _key_resp_canguan_allKeys[0].rt;
        key_resp_canguan.duration = _key_resp_canguan_allKeys[0].duration;
        // was this correct?
        if (key_resp_canguan.keys == "'left'") {
            key_resp_canguan.corr = 1;
        } else {
            key_resp_canguan.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_canguanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_canguanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_canguan' ---
    for (const thisComponent of trial_canguanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_canguan.stopped', globalClock.getTime());
    sound_canguan.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_canguan.keys === undefined) {
      if (['None','none',undefined].includes("'left'")) {
         key_resp_canguan.corr = 1;  // correct non-response
      } else {
         key_resp_canguan.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_canguan.corr, level);
    }
    psychoJS.experiment.addData('key_resp_canguan.keys', key_resp_canguan.keys);
    psychoJS.experiment.addData('key_resp_canguan.corr', key_resp_canguan.corr);
    if (typeof key_resp_canguan.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_canguan.rt', key_resp_canguan.rt);
        psychoJS.experiment.addData('key_resp_canguan.duration', key_resp_canguan.duration);
        routineTimer.reset();
        }
    
    key_resp_canguan.stop();
    if (trial_canguanMaxDurationReached) {
        trial_canguanClock.add(trial_canguanMaxDuration);
    } else {
        trial_canguanClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_feihe1MaxDurationReached;
var _key_resp_feihe1_allKeys;
var trial_feihe1MaxDuration;
var trial_feihe1Components;
function trial_feihe1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_feihe1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_feihe1Clock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    trial_feihe1MaxDurationReached = false;
    // update component parameters for each repeat
    sound_feihe1.setValue('audio/feihe1.wav');
    sound_feihe1.secs=3;
    sound_feihe1.setVolume(1.0);
    key_resp_feihe1.keys = undefined;
    key_resp_feihe1.rt = undefined;
    _key_resp_feihe1_allKeys = [];
    psychoJS.experiment.addData('trial_feihe1.started', globalClock.getTime());
    trial_feihe1MaxDuration = null
    // keep track of which components have finished
    trial_feihe1Components = [];
    trial_feihe1Components.push(text_feihe1);
    trial_feihe1Components.push(sound_feihe1);
    trial_feihe1Components.push(text_147);
    trial_feihe1Components.push(text_148);
    trial_feihe1Components.push(key_resp_feihe1);
    
    for (const thisComponent of trial_feihe1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_feihe1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_feihe1' ---
    // get current time
    t = trial_feihe1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feihe1* updates
    if (t >= 0.0 && text_feihe1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feihe1.tStart = t;  // (not accounting for frame time here)
      text_feihe1.frameNStart = frameN;  // exact frame index
      
      text_feihe1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_feihe1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feihe1.setAutoDraw(false);
    }
    
    // start/stop sound_feihe1
    if (t >= 4 && sound_feihe1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_feihe1.tStart = t;  // (not accounting for frame time here)
      sound_feihe1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_feihe1.play(); });  // screen flip
      sound_feihe1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_feihe1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_feihe1.tStart + 0.5) {
        sound_feihe1.stop();  // stop the sound (if longer than duration)
        sound_feihe1.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_147* updates
    if (t >= 3 && text_147.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_147.tStart = t;  // (not accounting for frame time here)
      text_147.frameNStart = frameN;  // exact frame index
      
      text_147.setAutoDraw(true);
    }
    
    frameRemains = 3 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_147.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_147.setAutoDraw(false);
    }
    
    
    // *text_148* updates
    if (t >= 7 && text_148.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_148.tStart = t;  // (not accounting for frame time here)
      text_148.frameNStart = frameN;  // exact frame index
      
      text_148.setAutoDraw(true);
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_148.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_148.setAutoDraw(false);
    }
    
    
    // *key_resp_feihe1* updates
    if (t >= 7 && key_resp_feihe1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_feihe1.tStart = t;  // (not accounting for frame time here)
      key_resp_feihe1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_feihe1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feihe1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_feihe1.clearEvents(); });
    }
    
    frameRemains = 7 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_feihe1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_feihe1.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_feihe1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_feihe1.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_feihe1_allKeys = _key_resp_feihe1_allKeys.concat(theseKeys);
      if (_key_resp_feihe1_allKeys.length > 0) {
        key_resp_feihe1.keys = _key_resp_feihe1_allKeys[0].name;  // just the first key pressed
        key_resp_feihe1.rt = _key_resp_feihe1_allKeys[0].rt;
        key_resp_feihe1.duration = _key_resp_feihe1_allKeys[0].duration;
        // was this correct?
        if (key_resp_feihe1.keys == "'right'") {
            key_resp_feihe1.corr = 1;
        } else {
            key_resp_feihe1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_feihe1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_feihe1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_feihe1' ---
    for (const thisComponent of trial_feihe1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_feihe1.stopped', globalClock.getTime());
    sound_feihe1.stop();  // ensure sound has stopped at end of Routine
    // was no response the correct answer?!
    if (key_resp_feihe1.keys === undefined) {
      if (['None','none',undefined].includes("'right'")) {
         key_resp_feihe1.corr = 1;  // correct non-response
      } else {
         key_resp_feihe1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_feihe1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_feihe1.keys', key_resp_feihe1.keys);
    psychoJS.experiment.addData('key_resp_feihe1.corr', key_resp_feihe1.corr);
    if (typeof key_resp_feihe1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_feihe1.rt', key_resp_feihe1.rt);
        psychoJS.experiment.addData('key_resp_feihe1.duration', key_resp_feihe1.duration);
        routineTimer.reset();
        }
    
    key_resp_feihe1.stop();
    if (trial_feihe1MaxDurationReached) {
        trial_feihe1Clock.add(trial_feihe1MaxDuration);
    } else {
        trial_feihe1Clock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
