(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{2630:function(e,t,n){e.exports=n(2631)},2631:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(){"use strict";var e={d:function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return fe}});var n={1078:"af",1052:"sq",1118:"am",5121:"ar_DZ",15361:"ar_BH",3073:"ar_EG",2049:"ar_IQ",11265:"ar_JO",13313:"ar_KW",12289:"ar_LB",4097:"ar_LY",6145:"ar_MA",8193:"ar_OM",16385:"ar_QA",1025:"ar_SA",10241:"ar_SY",7169:"ar_TN",14337:"ar_AE",9217:"ar_YE",1067:"hy",1101:"as",2092:"az_AZ",1068:"az_AZ",1069:"eu",1059:"be",2117:"bn",1093:"bn_IN",5146:"bs",1026:"bg",1109:"my",1027:"ca",2052:"zh_CN",3076:"zh_HK",5124:"zh_MO",4100:"zh_SG",1028:"zh_TW",1050:"hr",1029:"cs",1030:"da",1125:"dv",2067:"nl_BE",1043:"nl_NL",1126:"bin",3081:"en_AU",10249:"en_BZ",4105:"en_CA",9225:"en_CB",2057:"en_GB",16393:"en_IN",6153:"en_IE",8201:"en_JM",5129:"en_NZ",13321:"en_PH",7177:"en_ZA",11273:"en_TT",1033:"en_US",12297:"en_ZW",1061:"et",1071:"mk",1080:"fo",1065:"fa",1124:"fil",1035:"fi",2060:"fr_BE",11276:"fr_CM",3084:"fr_CA",9228:"fr_CG",12300:"fr_CI",1036:"fr_FR",5132:"fr_LU",13324:"fr_ML",6156:"fr_MC",14348:"fr_MA",10252:"fr_SN",4108:"fr_CH",7180:"fr",1122:"fy_NL",2108:"gd_IE",1084:"gd",1110:"gl",1079:"ka",3079:"de_AT",1031:"de_DE",5127:"de_LI",4103:"de_LU",2055:"de_CH",1032:"el",1140:"gn",1095:"gu",1279:"en",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig_NG",1057:"id",1040:"it_IT",2064:"it_CH",1041:"ja",1099:"kn",1120:"ks",1087:"kk",1107:"km",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1142:"la",1062:"lv",1063:"lt",2110:"ms_BN",1086:"ms_MY",1100:"ml",1082:"mt",1112:"mni",1153:"mi",1102:"mr",1104:"mn",2128:"mn",1121:"ne",1044:"no_NO",2068:"no_NO",1096:"or",1045:"pl",1046:"pt_BR",2070:"pt_PT",1094:"pa",1047:"rm",2072:"ro_MO",1048:"ro_RO",1049:"ru",2073:"ru_MO",1083:"se",1103:"sa",3098:"sr_SP",2074:"sr_SP",1072:"st",1074:"tn",1113:"sd",1115:"si",1051:"sk",1060:"sl",1143:"so",1070:"sb",11274:"es_AR",16394:"es_BO",13322:"es_CL",9226:"es_CO",5130:"es_CR",7178:"es_DO",12298:"es_EC",17418:"es_SV",4106:"es_GT",18442:"es_HN",2058:"es_MX",19466:"es_NI",6154:"es_PA",15370:"es_PY",10250:"es_PE",20490:"es_PR",1034:"es_ES",14346:"es_UY",8202:"es_VE",1089:"sw",2077:"sv_FI",1053:"sv_SE",1114:"syc",1064:"tg",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1073:"ts",1055:"tr",1090:"tk",1058:"uk",1056:"ur",2115:"uz_UZ",1091:"uz_UZ",1075:"ve",1066:"vi",1106:"cy",1076:"xh",1085:"yi",1077:"zu"};const a=/^([a-z\d]+)(?:[_-]([a-z\d]+))?(?:\.([a-z\d]+))?(?:@([a-z\d]+))?$/i,r={},u={group:"혻",decimal:".",positive:"+",negative:"-",percent:"%",exponent:"E",nan:"NaN",infinity:"��",ampm:["AM","PM"],mmmm6:["Muharram","Safar","Rabi軻 I","Rabi軻 II","Jumada I","Jumada II","Rajab","Sha軻ban","Ramadan","Shawwal","Dhu軻l-Qi軻dah","Dhu軻l-Hijjah"],mmm6:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhu軻l-Q.","Dhu軻l-H."],mmmm:["January","February","March","April","May","June","July","August","September","October","November","December"],mmm:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};function s(e){const t=a.exec(e);if(!t)throw new SyntaxError("Malformed locale: ".concat(e));return{lang:t[1]+(t[2]?"_"+t[2]:""),language:t[1],territory:t[2]||"",codeset:t[3]||"",modifier:t[4]||""}}function o(e){if("number"==typeof e)return n[65535&e]||null;const t=parseInt(e,16);return isFinite(t)&&n[65535&t]?n[65535&t]||null:a.test(e)?e:null}function l(e){const t=o(e);let n=null;if(t){const e=s(t);n=r[e.lang]||r[e.language]||null}return n}function d(e){return Object.assign({},u,e)}function m(e,t){const n="object"==typeof t?t:s(t);return r[n.lang]=d(e),n.language===n.lang||r[n.language]||(r[n.language]=d(e)),r[n.lang]}const f=d({group:","});function c(e,t){if("number"!=typeof e)return e;if(e<0)return-c(-e,t);if(t){const n=10**(t||0)||1;return c(e*n,0)/n}return Math.round(e)}function p(e,t,n){const a=e<0?-1:1,r=10**(t||2),u=10**(n||2);let f,g,y=Math.abs(e),_=0,b=0,j=0,v=1;if((e=y)%1==0)g=[e*a,1];else if(e<1e-19)g=[a,1e19];else if(e>1e19)g=[1e19*a,1];else{do{if(y=1/(y-Math.floor(y)),f=v,v=v*Math.floor(y)+_,_=f,b=j,j=Math.floor(e*v+.5),j>=r||v>=u)return[a*b,_]}while(Math.abs(e-j/v)>=1e-10&&y!==Math.floor(y));g=[a*j,v]}return g}f.isDefault=!0,m({group:",",ampm:["訝듿뜄","訝뗥뜄"],mmmm:["訝���","雅뚧쐢","訝됪쐢","�쎿쐢","雅붹쐢","��쐢","訝껅쐢","�ユ쐢","阿앮쐢","�곫쐢","�곦���","�곦틠��"],mmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],dddd:["�잍쐿��","�잍쐿訝�","�잍쐿雅�","�잍쐿訝�","�잍쐿��","�잍쐿雅�","�잍쐿��"],ddd:["�ⓩ뿥","�ⓧ�","�ⓧ틠","�ⓧ툒","�ⓨ썪","�ⓧ틪","�ⓨ뀷"]},"zh_CN"),m({group:",",nan:"�욄빖��",ampm:["訝듿뜄","訝뗥뜄"],mmmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],mmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],dddd:["�잍쐿��","�잍쐿訝�","�잍쐿雅�","�잍쐿訝�","�잍쐿��","�잍쐿雅�","�잍쐿��"],ddd:["�길뿥","�긴�","�긴틠","�긴툒","�긷썪","�긴틪","�긷뀷"]},"zh_TW"),m({group:",",ampm:["�덂뎺","�덂풄"],mmmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],mmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],dddd:["�ζ썫��","�덃썫��","�ユ썫��","麗닸썫��","�ⓩ썫��","�묉썫��","�잍썫��"],ddd:["��","��","��","麗�","��","��","��"]},"ja"),m({group:",",ampm:["�ㅼ쟾","�ㅽ썑"],mmmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],mmm:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],dddd:["�쇱슂��","�붿슂��","�붿슂��","�섏슂��","紐⑹슂��","湲덉슂��","�좎슂��"],ddd:["��","��","��","��","紐�","湲�","��"]},"ko"),m({group:",",ampm:["錫곟퉰錫�툢仙�錫쀠링仙댽륭錫�","錫ム른錫긍툏仙�錫쀠링仙댽륭錫�"],mmmm:["錫□툈錫｀림錫꾝륫","錫곟만錫□툩錫꿋툧錫긍툢錫섁퉴","錫□링錫쇸림錫꾝륫","仙�錫□릇錫꿋륭錫�","錫왽륵錫⒯툩錫꿋툌錫�","錫□릿錫뽤만錫쇸림錫№툢","錫곟르錫곟툗錫꿋툌錫�","錫む릿錫뉋릊錫꿋툌錫�","錫곟릴錫쇸륭錫꿋륭錫�","錫뺖만錫�림錫꾝륫","錫왽륵錫ⓣ툑錫닮툈錫꿋륭錫�","錫섁릴錫쇸름錫꿋툌錫�"],mmm:["錫�.錫�.","錫�.錫�.","錫□링.錫�.","仙�錫�.錫�.","錫�.錫�.","錫□릿.錫�.","錫�.錫�.","錫�.錫�.","錫�.錫�.","錫�.錫�.","錫�.錫�.","錫�.錫�."],dddd:["錫㏅릴錫쇸릎錫꿋툠錫닮툞錫№퉴","錫㏅릴錫쇸툑錫긍툢錫쀠르仙�","錫㏅릴錫쇸릎錫긍툏錫꾝림錫�","錫㏅릴錫쇸툧錫멘툡","錫㏅릴錫쇸툧錫ㅰ릊錫긍릉錫싟툝錫�","錫㏅릴錫쇸릅錫멘툈錫｀퉴","錫㏅릴錫쇸�錫む림錫｀퉴"],ddd:["錫�림.","錫�.","錫�.","錫�.","錫왽륵.","錫�.","錫�."]},"th"),m({decimal:",",ampm:["dop.","odp."],mmmm:["ledna","첬nora","b힂ezna","dubna","kv휎tna","훾ervna","훾ervence","srpna","z찼힂챠","힂챠jna","listopadu","prosince"],mmm:["led","첬no","b힂e","dub","kv휎","훾vn","훾vc","srp","z찼힂","힂챠j","lis","pro"],dddd:["ned휎le","pond휎l챠","첬ter첵","st힂eda","훾tvrtek","p찼tek","sobota"],ddd:["ne","po","첬t","st","훾t","p찼","so"]},"cs"),m({group:".",decimal:",",mmmm:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],mmm:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["s첩ndag","mandag","tirsdag","onsdag","torsdag","fredag","l첩rdag"],ddd:["s첩n.","man.","tir.","ons.","tor.","fre.","l첩r."]},"da"),m({group:".",decimal:",",ampm:["a.m.","p.m."],mmmm:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],mmm:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],dddd:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],ddd:["zo","ma","di","wo","do","vr","za"]},"nl"),m({group:","},"en"),m({decimal:",",nan:"ep채luku",ampm:["ap.","ip."],mmmm:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kes채kuuta","hein채kuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],mmm:["tammik.","helmik.","maalisk.","huhtik.","toukok.","kes채k.","hein채k.","elok.","syysk.","lokak.","marrask.","jouluk."],dddd:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],ddd:["su","ma","ti","ke","to","pe","la"]},"fi"),m({group:"��",decimal:",",mmmm:["janvier","f챕vrier","mars","avril","mai","juin","juillet","ao청t","septembre","octobre","novembre","d챕cembre"],mmm:["janv.","f챕vr.","mars","avr.","mai","juin","juil.","ao청t","sept.","oct.","nov.","d챕c."],dddd:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],ddd:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."]},"fr"),m({group:".",decimal:",",mmmm:["Januar","Februar","M채rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],mmm:["Jan.","Feb.","M채rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],dddd:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],ddd:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]},"de"),m({group:".",decimal:",",ampm:["�.關.","關.關."],mmmm:["�慣館恝�慣�官恝�","過琯棺�恝�慣�官恝�","�慣��官恝�","���菅貫官恝�","�慣�恝�","�恝�館官恝�","�恝�貫官恝�","��款恝���恝�","誇琯��琯關棺�官恝�","�觀��棺�官恝�","�恝琯關棺�官恝�","�琯觀琯關棺�官恝�"],mmm:["�慣館","過琯棺","�慣�","���","�慣�","�恝�館","�恝�貫","��款","誇琯�","�觀�","�恝琯","�琯觀"],dddd:["���菅慣觀冠","�琯��串�慣","課�官�管","課琯�郭��管","�串關��管","�慣�慣�觀琯�冠","誇郭棺棺慣�恝"],ddd:["���","�琯�","課�官","課琯�","�串關","�慣�","誇郭棺"]},"el"),m({decimal:",",ampm:["de.","du."],mmmm:["janu찼r","febru찼r","m찼rcius","찼prilis","m찼jus","j첬nius","j첬lius","augusztus","szeptember","okt처ber","november","december"],mmm:["jan.","febr.","m찼rc.","찼pr.","m찼j.","j첬n.","j첬l.","aug.","szept.","okt.","nov.","dec."],dddd:["vas찼rnap","h챕tf흷","kedd","szerda","cs체t철rt철k","p챕ntek","szombat"],ddd:["V","H","K","Sze","Cs","P","Szo"]},"hu"),m({group:".",decimal:",",ampm:["f.h.","e.h."],mmmm:["jan첬ar","febr첬ar","mars","apr챠l","ma챠","j첬n챠","j첬l챠","찼g첬st","september","okt처ber","n처vember","desember"],mmm:["jan.","feb.","mar.","apr.","ma챠","j첬n.","j첬l.","찼g첬.","sep.","okt.","n처v.","des."],dddd:["sunnudagur","m찼nudagur","첸ri챨judagur","mi챨vikudagur","fimmtudagur","f철studagur","laugardagur"],ddd:["sun.","m찼n.","첸ri.","mi챨.","fim.","f철s.","lau."]},"is"),m({group:".",decimal:",",mmmm:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],mmm:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],dddd:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],ddd:["Min","Sen","Sel","Rab","Kam","Jum","Sab"]},"id"),m({group:".",decimal:",",mmmm:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],mmm:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],dddd:["domenica","luned챙","marted챙","mercoled챙","gioved챙","venerd챙","sabato"],ddd:["dom","lun","mar","mer","gio","ven","sab"]},"it"),m({decimal:",",ampm:["a.m.","p.m."],mmmm:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],mmm:["jan.","feb.","mar.","apr.","mai","jun.","jul.","aug.","sep.","okt.","nov.","des."],dddd:["s첩ndag","mandag","tirsdag","onsdag","torsdag","fredag","l첩rdag"],ddd:["s첩n.","man.","tir.","ons.","tor.","fre.","l첩r."]},"nb"),m({decimal:",",mmmm:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze힄nia","pa탄dziernika","listopada","grudnia"],mmm:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa탄","lis","gru"],dddd:["niedziela","poniedzia흢ek","wtorek","힄roda","czwartek","pi훳tek","sobota"],ddd:["niedz.","pon.","wt.","힄r.","czw.","pt.","sob."]},"pl"),m({group:".",decimal:",",mmmm:["janeiro","fevereiro","mar챌o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],mmm:["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],dddd:["domingo","segunda-feira","ter챌a-feira","quarta-feira","quinta-feira","sexta-feira","s찼bado"],ddd:["dom.","seg.","ter.","qua.","qui.","sex.","s찼b."]},"pt"),m({decimal:",",nan:"戟筠혻�龜�剋棘",mmmm:["�戟勻逵��","�筠勻�逵剋�","劇逵��逵","逵極�筠剋�","劇逵�","龜�戟�","龜�剋�","逵勻均���逵","�筠戟��閨��","棘克��閨��","戟棘�閨��","畇筠克逵閨��"],mmm:["�戟勻.","�筠勻�.","劇逵�.","逵極�.","劇逵�","龜�戟.","龜�剋.","逵勻均.","�筠戟�.","棘克�.","戟棘�閨.","畇筠克."],dddd:["勻棘�克�筠�筠戟�筠","極棘戟筠畇筠剋�戟龜克","勻�棘�戟龜克","��筠畇逵","�筠�勻筠�均","極��戟龜�逵","��閨閨棘�逵"],ddd:["勻�","極戟","勻�","��","��","極�","�閨"]},"ru"),m({decimal:",",mmmm:["janu찼ra","febru찼ra","marca","apr챠la","m찼ja","j첬na","j첬la","augusta","septembra","okt처bra","novembra","decembra"],mmm:["jan","feb","mar","apr","m찼j","j첬n","j첬l","aug","sep","okt","nov","dec"],dddd:["nede컁a","pondelok","utorok","streda","큄tvrtok","piatok","sobota"],ddd:["ne","po","ut","st","큄t","pi","so"]},"sk"),m({group:".",decimal:",",ampm:["a.혻m.","p.혻m."],mmmm:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],mmm:["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],dddd:["domingo","lunes","martes","mi챕rcoles","jueves","viernes","s찼bado"],ddd:["dom.","lun.","mar.","mi챕.","jue.","vie.","s찼b."]},"es"),m({decimal:",",ampm:["fm","em"],mmmm:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],mmm:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],dddd:["s철ndag","m책ndag","tisdag","onsdag","torsdag","fredag","l철rdag"],ddd:["s철n","m책n","tis","ons","tors","fre","l철r"]},"sv"),m({group:".",decimal:",",ampm:["횜횜","횜S"],mmmm:["Ocak","힇ubat","Mart","Nisan","May캇s","Haziran","Temmuz","A휓ustos","Eyl체l","Ekim","Kas캇m","Aral캇k"],mmm:["Oca","힇ub","Mar","Nis","May","Haz","Tem","A휓u","Eyl","Eki","Kas","Ara"],dddd:["Pazar","Pazartesi","Sal캇","횉ar힊amba","Per힊embe","Cuma","Cumartesi"],ddd:["Paz","Pzt","Sal","횉ar","Per","Cum","Cmt"]},"tr");const g={overflow:"######",dateErrorThrows:!1,dateErrorNumber:!0,dateSpanLarge:!0,leap1900:!0,nbsp:!0,throws:!0,invalid:"######",locale:"",ignoreTimezone:!1},y=Object.assign({},g);function h(e){if(null===e&&(e=g),e)for(const t in e)if(t in g){const n=e[t];y[t]=null==n?g[t]:n}return{...y}}const _=16,b=32,j=64,v={"#":"",0:"0","?":"혻"},M={"@":"text","-":"minus","+":"plus"},x=["#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#000","#FFF","#F00","#0F0","#00F","#FF0","#F0F","#0FF","#800","#080","#008","#880","#808","#088","#CCC","#888","#99F","#936","#FFC","#CFF","#606","#F88","#06C","#CCF","#008","#F0F","#FF0","#0FF","#808","#800","#088","#00F","#0CF","#CFF","#CFC","#FF9","#9CF","#F9C","#C9F","#FC9","#36F","#3CC","#9C0","#FC0"];function k(e,t,n){return t[n+"_max"]=e.length,t[n+"_min"]=e.replace(/#/g,"").length,t}const D={};function F(e){if(!(e in D)){const t=[],n=e.replace(/^[#,]+/,"").replace(/[1-9]\d*/g,(e=>"?".repeat(e.length)));for(let e=0;e<n.length;e++){const a=n.charAt(e);t[e]=a in v?v[a]:a}D[e]=t.join("")}return D[e]}function z(e,t){"string"==typeof e&&(e={type:"string",value:e=e.replace(/ /g,v["?"])}),t.push(e)}function w(e){const t=[],n={scale:1,percent:!1,text:!1,date:0,date_eval:!1,date_system:null,sec_decimals:0,general:!1,clock:24,int_pattern:[],frac_pattern:[],man_pattern:[],den_pattern:[],num_pattern:[],tokens:t};let a=e+"",r="int",u=!1,f=null;const g=[];let y,D,T=!1;for(;a&&!u;){if(y=/^General/i.exec(a))n.general=!0,z({type:"general"},t);else if("int"===r&&(y=/^[#?0]+(?:,[#?0]+)*/.exec(a))||"den"===r&&(y=/^[#?\d]+/.exec(a))||(y=/^[#?0]+/.exec(a)))n[r+"_pattern"].push(y[0]),f={type:r,num:y[0]},z(f,t);else if((y=/^\//.exec(a))&&n[r+"_pattern"].length){if(!f)throw new SyntaxError("Missing a numerator in pattern ".concat(e));n.fractions=!0,n.num_pattern.push(n[r+"_pattern"].pop()),f.type="num",r="den",z({type:"div"},t)}else if(y=/^,+/.exec(a)){const e=a.charAt(1)in v;D.slice(-1)in v&&(y[0].length>1||!e)?n.scale=.001**y[0].length:n.dec_fractions||z(y[0],t)}else{if(y=/^;/.exec(a)){u=!0;break}if(y=/^[@+-]/.exec(a))"@"===y[0]&&(n.text=!0),z({type:M[y[0]]},t);else if(y=/^(?:\[(h+|m+|s+)\])/i.exec(a)){const e=y[1].toLowerCase(),a=e[0],r={type:"",size:0,date:1,raw:y[0],pad:e.length};"h"===a?(r.size=_,r.type="hour-elap"):"m"===a?(r.size=b,r.type="min-elap"):(r.size=j,r.type="sec-elap"),n.date=n.date|r.size,g.push(r),z(r,t)}else if(y=/^(?:B2)/i.exec(a))T||(n.date_system=6);else if(y=/^(?:B1)/i.exec(a))T||(n.date_system=1);else if(y=/^(?:([hHmMsSyYbBdDegG])\1*)/.exec(a)){const e={type:"",size:0,date:1,raw:y[0]},a=y[0].toLowerCase(),r=a[0];if("y"===a||"yy"===a)e.size=2,e.type="year-short";else if("y"===r||"e"===r)e.size=2,e.type="year";else if("b"===a||"bb"===a)e.size=2,e.type="b-year-short";else if("b"===r)e.size=2,e.type="b-year";else if("d"===a||"dd"===a)e.size=8,e.type="day",e.pad=/dd/.test(a);else if("ddd"===a)e.size=8,e.type="weekday-short";else if("d"===r)e.size=8,e.type="weekday";else if("h"===r)e.size=_,e.type="hour",e.pad=/hh/i.test(a);else if("m"===r){3===a.length?(e.size=4,e.type="monthname-short"):5===a.length?(e.size=4,e.type="monthname-single"):a.length>=4&&(e.size=4,e.type="monthname");const t=g[g.length-1];!e.type&&t&&!t.used&&80&t.size&&(t.used=!0,e.size=b,e.type="min",e.pad=/mm/.test(a)),e.type||(e.size=4,e.type="month",e.pad=/mm/.test(a),e.indeterminate=!0)}else if("s"===r){e.size=j,e.type="sec",e.pad=/ss/.test(a);const t=g[g.length-1];t&&t.size&b?e.used=!0:t&&t.indeterminate&&(delete t.indeterminate,t.size=b,t.type="min",e.used=!0)}n.date=n.date|e.size,n.date_eval=!0,g.push(e),z(e,t)}else if(y=/^(?:AM\/PM|am\/pm|A\/P)/.exec(a))n.clock=12,n.date=n.date|_,n.date_eval=!0,z({type:"am",short:"A/P"===y[0]},t);else if(n.date&&(y=/^\.0{1,3}/i.exec(a))){const e=y[0].length-1,a=[j,128,256,512][e];n.date=n.date|a,n.date_eval=!0,n.sec_decimals=Math.max(n.sec_decimals,e),z({type:"subsec",size:a,decimals:e,date:1,raw:y[0]},t)}else if((y=/^\\(.)/.exec(a))||(y=/^"([^"]*?)"/.exec(a)))z(y[1],t);else if(y=/^\[(<[=>]?|>=?|=)\s*(-?[.\d]+)\]/.exec(a))n.condition=[y[1],parseFloat(y[2],10)];else if(y=/^\[\$([^\]]+)\]/.exec(a)){const e=y[1].split("-"),a=e.length<2?"":e[e.length-1],r=e[0];r&&z(r,t);const u=o(a);u&&(n.locale=u);const f=parseInt(a,16);isFinite(f)&&16711680&f&&6==(f>>16&255)&&(n.date_system=6),T=!0}else if(y=/^\[(black|blue|cyan|green|magenta|red|white|yellow|color\s*(\d+))\]/i.exec(a))n.color=y[2]?x[parseInt(y[2],10)]||"#000":y[1].toLowerCase();else if(y=/^\[(ENG|HIJ|JPN|TWN)\]/i.exec(a));else if(y=/^\[(DBNum[0-4]|NatNum(?:\d|1\d))\]/i.exec(a));else if(y=/^%/.exec(a))n.scale=100,n.percent=!0,z("%",t);else if(y=/^_(\\.|.)/.exec(a))z(" ",t);else if(y=/^\./.exec(a))z({type:"point",value:y[0]},t),n.dec_fractions=!0,r="frac";else if(y=/^[Ee]([+-]?|(?=[0#?]))/.exec(a))n.exponential=!0,n.exp_plus="+"===y[1],r="man",z({type:"exp",plus:"+"===y[1]},t);else if(y=/^\*(\\.|.)/.exec(a));else{if(y=/^[BENn[]/.exec(a))throw new SyntaxError("Unexpected char ".concat(a.charAt(0)," in pattern ").concat(e));"("===a[0]&&(n.parens=!0),y=[a[0]],z(y[0],t)}}D=y[0],a=a.slice(y?y[0].length:1)}if(n.pattern=e.slice(0,e.length-a.length),/^((?:\[[^\]]+\])+)(;|$)/.test(n.pattern)&&!/^\[(?:h+|m+|s+)\]/.test(n.pattern)&&z({type:"text"},t),n.fractions&&n.dec_fractions||n.fractions&&n.exponential)throw new SyntaxError("Invalid pattern: ".concat(n.pattern));const N=n.int_pattern.join("");if(n.grouping=N.indexOf(",")>=0,n.grouping){const e=N.split(","),t=e.length;2===t?(n.group_pri=e[1].length,n.group_sec=n.group_pri):t>2&&(n.group_pri=e[t-1].length,n.group_sec=e[t-2].length)}else n.group_pri=0,n.group_sec=0;k(N.replace(/[,]/g,""),n,"int"),k(n.frac_pattern.join(""),n,"frac"),k(n.man_pattern.join(""),n,"man");let $=n.num_pattern.join(""),U=n.den_pattern.join("");const R=/\?/.test(U)||/\?/.test($);if(U=U.replace(/\d/g,R?"?":"#"),R&&(U=U.replace(/#$/g,"?")),k($,n,"num"),k(U,n,"den"),R&&($=$.replace(/#$/g,"?")),n.int_padding=F(n.int_pattern.join("")),n.man_padding=F(n.man_pattern.join("")),n.num_padding=F($),n.den_padding=F(U),n.den_pattern.length&&(n.denominator=parseInt(n.den_pattern.join("").replace(/\D/g,""),10)),n.integer=!!n.int_pattern.join("").length,n.fractions&&t.forEach(((e,n)=>{const a=t[n+1];"string"===e.type&&a&&("num"===a.type?e.rule="num+int":"div"===a.type?e.rule="num":"den"===a.type&&(e.rule="den"))})),(n.date||n.general)&&(n.int_pattern.length||n.frac_pattern.length||1!==n.scale||n.text))throw new Error("Illegal format");return n.date_system||(n.date_system=1),n}function S(e){const t=[];let n,a=!1,r=null,u=e,f=0,g=!1,y=0,_=0;do{if(g=w(u),g.condition&&(_++,a=!0),g.text){if(r)throw new Error("Unexpected partition");r=g}g.locale&&(n=o(g.locale)),t.push(g),f=";"===u.charAt(g.pattern.length)?1:0,u=u.slice(g.pattern.length+f),y++}while(f&&y<4&&_<3);if(_>2)throw new Error("Unexpected condition");if(f)throw new Error("Unexpected partition");if(a){const e=t[2];e&&!e.general&&e.tokens.unshift({type:"minus",volatile:!0})}else{if(t.length<4&&r)for(let e=0,n=t.length;e<n;e++)t[e]===r&&t.splice(e,1);if(t.length<1&&r&&(t[0]=w("General"),t[0].generated=!0),t.length<2){const e=w(t[0].pattern);e.tokens.unshift({type:"minus",volatile:!0}),e.generated=!0,t.push(e)}if(t.length<3){const e=w(t[0].pattern);e.generated=!0,t.push(e)}if(t.length<4)if(r)t.push(r);else{const e=w("@");e.generated=!0,t.push(e)}t[0].condition=[">",0],t[1].condition=["<",0],t[2].condition=null}return{pattern:e,partitions:t,locale:n}}const T=Math.floor;function C(e){if((!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&e>=0){if(0===e)return[1900,1,0];if(60===e)return[1900,2,29];if(e<60)return[1900,e<32?1:2,(e-1)%31+1]}let t=e+68569+2415019;const n=T(4*t/146097);t-=T((146097*n+3)/4);const a=T(4e3*(t+1)/1461001);t=t-T(1461*a/4)+31;const r=T(80*t/2447),u=t-T(2447*r/80);return t=T(r/11),[0|100*(n-49)+a+t,0|r+2-12*t,0|u]}function A(e){return C(e+1462)}function E(e){if(60===e)throw new Error("#VALUE!");if(e<=1)return[1317,8,29];if(e<60)return[1317,e<32?9:10,1+(e-2)%30];const t=10631/30,n=.1335;let a=e+466935;const r=T(a/10631);a-=10631*r;const u=T((a-n)/t);a-=T(u*t+n);const f=T((a+28.5001)/29.5);return 13===f?[30*r+u,12,30]:[30*r+u,f,a-T(29.5001*f-29)]}function Y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const a=T(e);return 6===t?E(a):-1===t?A(a):C(a,n)}const N=Math.floor,$=86400;function P(e,t){let n=null;if(Array.isArray(e)){const[t,a,r,u,f,g]=e;n=Date.UTC(t,null==a?0:a-1,null!=r?r:1,u||0,f||0,g||0)}else e instanceof Date&&(n=1*e,t&&t.ignoreTimezone||(n-=60*e.getTimezoneOffset()*1e3));if(null!=n&&isFinite(n)){const e=n/864e5;return e-(e<=-25509?-25568:-25569)}return e}function I(e,t){let n=0|e;const a=$*(e-n);let r=N(a);a-r>.9999&&(r+=1,r===$&&(r=0,n+=1));const u=r<0?$+r:r,[f,g,y]=Y(e,0,t&&t.leap1900),_=N(u/60/60)%60,b=N(u/60)%60,j=N(u)%60;if(t&&t.nativeDate){const e=new Date(0);return e.setUTCFullYear(f,g-1,y),e.setUTCHours(_,b,j),e}return[f,g,y,_,b,j]}function O(e){return!!(e[0]&&e[0].percent||e[1]&&e[1].percent||e[2]&&e[2].percent||e[3]&&e[3].percent)}function J(e){return!!(e[0]&&e[0].date||e[1]&&e[1].date||e[2]&&e[2].date||e[3]&&e[3].date)}function L(e){const[t,n,a,r]=e;return!(t&&!t.generated||n&&!n.generated||a&&!a.generated||!r||!r.text||r.generated)}const U={text:15,datetime:10.8,date:10.8,time:10.8,percent:10.6,currency:10.4,grouped:10.2,scientific:6,number:4,fraction:2,general:0,error:0},R=[["DMY",1],["DM",2],["MY",3],["MDY",4],["MD",5],["hmsa",6],["hma",7],["hms",8],["hm",9]],B=/[짚$짙짜��鋤녀맙�쎻궊�╈궔�も궖�р궘��궞�꿎궡�멤궧�뷜궪�썩궬��]/,W={total:1,sign:0,period:0,int:1,frac:0},G=(e,t)=>e.replace(/\./,t.decimal);function H(e,t,n,a){const r=0|n,u=n<0&&(!t.condition||"<>"===t.condition[0]||">="===t.condition[0]||">"===t.condition[0]);if("string"==typeof n)e.push(n);else if(n===r)u&&e.push(a.negative),e.push(Math.abs(r));else{u&&e.push(a.negative);let t=0;const r=Math.abs(n);r&&(t=Math.floor(Math.log10(r)));let f=t<0?r*10**-t:r/10**t;10===f&&(f=1,t++);const g=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=Math.abs(e);if(!n)return W;const a=t&&e<0?1:0,r=Math.floor(n),u=Math.floor(Math.log10(n)+1);let f=0,g=0;if(r!==n){f=1;const e=String(c(u<0?n*10**-u:n/10**u,15));let t=e.length,a=!0,r=0;for(;r<=e.length;){if("."===e[r]){t--;break}"0"===e[r]&&a?t--:a=!1,r++}g=t-u,g<0&&(g=0,f=0)}return{total:a+Math.max(u,1)+f+g,digits:Math.max(u,0)+g,sign:a,period:f,int:Math.max(u,1),frac:g}}(r),l=()=>{const n=Math.abs(t);let r;r=1===f?f:c(f,5),e.push(G(r+"",a),a.exponent,t<0?a.negative:a.positive,n<10?"0":"",n)};if(t>=-4&&t<=-1){const n=r.toPrecision(10+t).replace(/0+$/,"");e.push(G(n,a))}else if(10===t){const t=r.toFixed(10).slice(0,12).replace(/\.$/,"");e.push(G(t,a))}else if(Math.abs(t)<=9){const n=11;if(g.total<=n){const t=c(r,9).toFixed(g.frac);e.push(G(t,a))}else 9===t?e.push(Math.floor(r)):t>=0&&t<9?e.push(c(r,9-t)):l()}else g.total>=12?l():Math.floor(r)===r?e.push(Math.floor(r)):e.push(G(c(r,9).toFixed(g.frac),a))}return e}const Z=86400,V={int:"integer",frac:"fraction",man:"mantissa",num:"numerator",den:"denominator"};function K(e,t,n,a){let r="",u="",g="",y="",M="",x=0,D=0|e,T=0,N=0,$=1,U=0,R=0,B=0,W=0,Q=0,X=0;const te=a||f;if(!t.text&&isFinite(t.scale)&&1!==t.scale&&(e=function(e){if(0===e)return e;const t=Math.ceil(Math.log10(e<0?-e:e)),n=10**(16-Math.floor(t));return Math.round(e*n)/n}(e*t.scale)),t.exponential){let n=Math.abs(e);n&&(x=Math.round(Math.log10(n))),t.int_max>1&&(x=Math.floor(x/t.int_max)*t.int_max),n=x<0?n*10**-x:n/10**x,e=e<0?-n:n,r+=Math.abs(x)}if(t.integer){const n=Math.abs(c(e,t.fractions?1:t.frac_max));M+=n<1?"":Math.floor(n)}if(t.grouping){let e="",n=M.length;for(n>t.group_pri&&(n-=t.group_pri,e=te.group+M.slice(n,n+t.group_pri)+e);n>t.group_sec;)n-=t.group_sec,e=te.group+M.slice(n,n+t.group_sec)+e;M=n?M.slice(0,n)+e:e}t.dec_fractions&&(y=String(c(e,t.frac_max)).split(".")[1]||"");let ne=!1;if(t.fractions){const n=Math.abs(t.integer?e%1:e);if(n)if(ne=!0,isFinite(t.denominator))g+=t.denominator,u+=c(n*t.denominator),"0"===u&&(u="",g="",ne=!1,M||(M="0"));else{const e=p(n,t.integer?t.num_max:1/0,t.den_max);u+=e[0],g+=e[1],t.integer&&"0"===u&&(M||(M="0"),u="",g="",ne=!1)}}if(t.date_eval&&((e,t)=>t?e<-694324||e>=35830291:e<0||e>=2958466)(e,n.dateSpanLarge)){if(n.dateErrorThrows)throw new Error("Date out of bounds");return n.dateErrorNumber?H([],{},e,te).join(""):n.overflow}if(t.date){D=0|e;const a=Z*(e-D);if(T=Math.floor(a),X=a-T,Math.abs(X)<1e-6?X=0:X>.9999&&(X=0,T+=1,T===Z&&(T=0,D+=1)),D||t.date_system){const a=Y(e,t.date_system,n.leap1900);N=a[0],$=a[1],U=a[2]}if(T||X){const e=512&t.date||256&t.date||128&t.date||t.date&j||t.date&b||t.date&_;(512===e&&X>.9995||256===e&&X>.995||128===e&&X>.95||e===j&&X>=.5||e===b&&X>=.5||e===_&&X>=.5)&&(T++,X=0);const n=T<0?Z+T:T;Q=Math.floor(n)%60,W=Math.floor(n/60)%60,B=Math.floor(n/60/60)%60}R=(6+D)%7}if(t.int_padding&&(M=1===t.int_padding.length?M||t.int_padding:t.int_padding.substring(0,t.int_padding.length-M.length)+M),t.num_padding&&(u=1===t.num_padding.length?u||t.num_padding:t.num_padding.substring(0,t.num_padding.length-u.length)+u),t.den_padding&&(g=1===t.den_padding.length?g||t.den_padding:g+t.den_padding.slice(g.length)),t.man_padding){const e=t.exp_plus?"+":"";r=1===t.man_padding.length?(x<0?"-":e)+(r||t.man_padding):(x<0?"-":e)+t.man_padding.slice(0,t.man_padding.length-r.length)+r}const ae=[];let re=0;const me={int:0,frac:0,man:0,num:0,den:0};for(let f=0,_=t.tokens.length;f<_;f++){const _=t.tokens[f],b=_.num?_.num.length:0;if("string"===_.type)_.rule?"num"===_.rule?ne?ae.push(_.value):(t.num_min>0||t.den_min>0)&&ae.push(_.value.replace(/./g,v["?"])):"num+int"===_.rule?ne&&M?ae.push(_.value):t.den_min>0&&(M||t.num_min)&&ae.push(_.value.replace(/./g,v["?"])):"den"===_.rule&&(ne?ae.push(_.value):(t.den_min>0||t.den_min>0)&&ae.push(_.value.replace(/./g,v["?"]))):ae.push(_.value);else if("error"===_.type)ae.push(n.invalid);else if("point"===_.type)ae.push(t.date?_.value:te.decimal);else if("general"===_.type)H(ae,t,e,te);else if("exp"===_.type)ae.push(te.exponent);else if("minus"===_.type)_.volatile&&t.date||(_.volatile&&!t.fractions&&(t.integer||t.dec_fractions)?(M&&"0"!==M||y)&&ae.push(te.negative):ae.push(te.negative));else if("plus"===_.type)ae.push(te.positive);else if("text"===_.type)ae.push(e);else if("div"===_.type)ne?ae.push("/"):t.num_min>0||t.den_min>0?ae.push(v["?"]):ae.push(v["#"]);else if("int"===_.type)if(1===t.int_pattern.length)ae.push(M);else{const e=re?t.int_pattern.join("").length-me.int:1/0,n=re===t.int_pattern.length-1?0:t.int_pattern.join("").length-(me.int+_.num.length);ae.push(M.substring(M.length-e,M.length-n)),re++,me.int+=_.num.length}else if("frac"===_.type){const e=me.frac;for(let t=0;t<b;t++)ae.push(y[t+e]||v[_.num[t]]);me.frac+=b}else if(_.type in V)1===t[_.type+"_pattern"].length?("int"===_.type&&ae.push(M),"frac"===_.type&&ae.push(y),"man"===_.type&&ae.push(r),"num"===_.type&&ae.push(u),"den"===_.type&&ae.push(g)):(ae.push(V[_.type].slice(me[_.type],me[_.type]+b)),me[_.type]+=b);else if("year"===_.type)N<0&&ae.push(te.negative),ae.push(String(Math.abs(N)).padStart(4,"0"));else if("year-short"===_.type){const e=N%100;ae.push(e<10?"0":"",e)}else if("month"===_.type)ae.push(_.pad&&$<10?"0":"",$);else if("monthname-single"===_.type)6===t.date_system?ae.push(te.mmmm6[$-1].charAt(0)):ae.push(te.mmmm[$-1].charAt(0));else if("monthname-short"===_.type)6===t.date_system?ae.push(te.mmm6[$-1]):ae.push(te.mmm[$-1]);else if("monthname"===_.type)6===t.date_system?ae.push(te.mmmm6[$-1]):ae.push(te.mmmm[$-1]);else if("weekday-short"===_.type)ae.push(te.ddd[R]);else if("weekday"===_.type)ae.push(te.dddd[R]);else if("day"===_.type)ae.push(_.pad&&U<10?"0":"",U);else if("hour"===_.type){const e=B%t.clock||(t.clock<24?t.clock:0);ae.push(_.pad&&e<10?"0":"",e)}else if("min"===_.type)ae.push(_.pad&&W<10?"0":"",W);else if("sec"===_.type)ae.push(_.pad&&Q<10?"0":"",Q);else if("subsec"===_.type){ae.push(te.decimal);const e=X.toFixed(t.sec_decimals);ae.push(e.slice(2,2+_.decimals))}else if("am"===_.type){const e=B<12?0:1;_.short&&!a?ae.push("AP"[e]):ae.push(te.ampm[e])}else if("hour-elap"===_.type){e<0&&ae.push(te.negative);const t=24*D+Math.floor(Math.abs(T)/3600);ae.push(String(Math.abs(t)).padStart(_.pad,"0"))}else if("min-elap"===_.type){e<0&&ae.push(te.negative);const t=1440*D+Math.floor(Math.abs(T)/60);ae.push(String(Math.abs(t)).padStart(_.pad,"0"))}else if("sec-elap"===_.type){e<0&&ae.push(te.negative);const t=D*Z+Math.abs(T);ae.push(String(Math.abs(t)).padStart(_.pad,"0"))}else if("b-year"===_.type)ae.push(N+543);else if("b-year-short"===_.type){const e=(N+543)%100;ae.push(e<10?"0":"",e)}}return n.nbsp?ae.join(""):ae.join("").replace(/\u00a0/g," ")}function q(e,t){for(let n=0;n<3;n++){const a=t[n];if(a){let t;if(a.condition){const n=a.condition[0],r=a.condition[1];"="===n?t=e===r:">"===n?t=e>r:"<"===n?t=e<r:">="===n?t=e>=r:"<="===n?t=e<=r:"<>"===n&&(t=e!==r)}else t=!0;if(t)return a}}}const Q=w("@"),X="black",te={};function ee(e,t){if(e){const n=e[0];t[n]=t[n]||{},ee(e.slice(1),t[n])}else t.$=!0}["d-F-y","d-F-Y","d-M-y","d-M-Y","F-d-y","F-d-Y","F-j-y","F-j-Y","j-F-y","j-F-Y","j-M-y","j-M-Y","M-d-y","M-d-Y","M-j-y","M-j-Y","m-d-y","m-d-Y","m-j-y","m-j-Y","n-d-y","n-d-Y","n-j-y","n-j-Y","y-F-d","y-F-j","y-M-d","y-M-j","Y-F-d","Y-F-j","Y-M-d","Y-m-d","Y-M-j","Y-m-j","Y-n-d","Y-n-j","M-d","M-j","d-F","d-M","n-d","n-j","j-F","j-M","M-Y","n-Y","m-d","F-d","m-j","F-j","m-Y","F-Y","Y-M","Y-n","Y-m","Y-F","Y-M"].forEach((e=>{ee(e,te),ee(e+" x",te),ee(e+" l",te),ee(e+" l x",te),ee("l "+e,te),ee("l "+e+" x",te),ee(e+" D",te),ee(e+" D x",te),ee("D "+e,te),ee("D "+e+" x",te)}));const ne={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},ae={january:1,february:2,march:3,april:4,june:6,july:7,august:8,september:9,october:10,november:11,december:12},re={sunday:"l",monday:"l",tuesday:"l",wednesday:"l",thursday:"l",friday:"l",saturday:"l",sun:"D",mon:"D",tue:"D",wed:"D",thu:"D",fri:"D",sat:"D"},me=(new Date).getUTCFullYear();function ie(e){const t=/^([\s+%$(-]*)(((?:(?:\d[\d,]*)(?:\.\d*)?|(?:\.\d+)))([eE][+-]?\d+)?)([\s%$)]*)$/.exec(e);if(t){const[,e,n,a,r,u]=t;let f=1,g="",y=!1,_=!1,b=!1,j=!1,v=!1,M=!1,x=parseFloat(n.replace(/,/g,""));if(!isFinite(x))return null;for(let t=0;t<e.length;t++){const n=e[t];if("-"===n){if(y||_)return null;y=!0,f=-1}else if("$"===n){if(v)return null;v=!0}else if("("===n){if(_||y)return null;_=!0,f=-1}else if("%"===n){if(j)return null;j=!0}}for(let e=0;e<u.length;e++){const t=u[e];if("$"===t){if(v)return null;v=!0,M=!0}else if(")"===t){if(b||!_)return null;b=!0}else if("%"===t){if(j)return null;j=!0}}if(r){if(j||v)return null;g="0.00E+00"}else if(j){if(v)return null;g=a.includes(".")?"0.00%":"0%",x*=.01}else v?g=M?a.includes(".")?"#,##0.00$":"#,##0$":a.includes(".")?"$#,##0.00":"$#,##0":a.includes(",")&&(g=a.includes(".")?"#,##0.00":"#,##0");const D={v:x*f};return g&&(D.z=g),D}}const se=(e,t,n)=>{const a=n.path||"",r=Object.keys(t);for(let u=0;u<r.length;u++){let f;const g=r[u];if(t[g]){if("$"===g)e||(f=n);else if("-"===g){const r=/^(\s*([./-]|,\s)\s*|\s+)/.exec(e);if(r){const u="-"===r[1]||"/"===r[1]||"."===r[1]?r[1]:" ";if(!n.sep||n.sep===u){const y=r[0].replace(/\s+/g," ");f=se(e.slice(r[0].length),t[g],{...n,sep:u,path:a+y})}}}else if(" "===g){const r=/^[,.]?\s+/.exec(e);if(r){const u=r[0].replace(/\s+/g," ");f=se(e.slice(r[0].length),t[g],{...n,path:a+u})}}else if("j"===g||"d"===g){const r=/^(0?[1-9]|1\d|2\d|3[01])\b/.exec(e);r&&(f=se(e.slice(r[0].length),t[g],{...n,day:r[0],path:a+g}))}else if("n"===g||"m"===g){const r=/^(0?[1-9]|1[012])\b/.exec(e);r&&(f=se(e.slice(r[0].length),t[g],{...n,month:+r[0],_mon:r[0],path:a+g}))}else if("F"===g||"M"===g){const r=/^([a-z]{3,9})\b/i.exec(e),u=r&&("F"===g?ae:ne)[r[0].toLowerCase()];u&&(f=se(e.slice(r[0].length),t[g],{...n,month:u,_mon:r[0],path:a+g}))}else if("l"===g||"D"===g){const r=/^([a-z]{3,9})\b/i.exec(e);(r&&re[r[0].toLowerCase()])===g&&(f=se(e.slice(r[0].length),t[g],{...n,path:a+g}))}else if("y"===g){const r=/^\d\d\b/.exec(e);if(r){const u=+r[0]>=30?+r[0]+1900:+r[0]+2e3;f=se(e.slice(r[0].length),t[g],{...n,year:u,path:a+g})}}else if("Y"===g){const r=/^\d\d\d\d\b/.exec(e);r&&(f=se(e.slice(r[0].length),t[g],{...n,year:+r[0],path:a+g}))}else{if("x"!==g)throw new Error('Unknown date token "'.concat(g,'"'));{const r=le(e);r&&(f=se("",t[g],{...n,time:r.v,tf:r.z,path:a+g}))}}if(f)return f}}};function oe(e,t){const n=se(e.trim(),te,{path:""});if(n){var a;if("."===n.sep&&3===n.path.length)return null;const e=+(null!==(a=n.year)&&void 0!==a?a:me);if(n.day||(n.day=1),!function(e,t,n){if(n<1)return!1;if(t<1||t>12)return!1;if(2===t){if(n>(e%4==0&&e%100!=0||e%400==0||1900===e?29:28))return!1}else if((4===t||6===t||9===t||11===t)&&n>30||(1===t||3===t||5===t||7===t||8===t||10===t||12===t)&&n>31)return!1;return!0}(e,n.month,n.day))return null;let r=-1/0;if(e<1900)return null;e<=1900&&n.month<=2?r=25568:e<1e4&&(r=25569);const u=Date.UTC(e,n.month-1,n.day)/864e5+r+(n.time||0);if(u>=0&&u<=2958465){const e="0"===n._mon[0]||"0"===n.day[0]||2===n._mon.length&&2===n.day.length,a=n.path.replace(/[jdlDnmMFyYx-]/g,(t=>"j"===t||"d"===t?e?"dd":"d":"D"===t?"ddd":"l"===t?"dddd":"n"===t||"m"===t?e?"mm":"m":"M"===t?"mmm":"F"===t?"mmmm":"y"===t?"yy":"x"===t?n.tf||"":"Y"===t?"yyyy":t));return t&&t.nativeDate?{v:I(u,t),z:a}:{v:u,z:a}}}return null}function le(e){const t=/^\s*([10]?\d|2[0-4])(?::([0-5]\d|\d))?(?::([0-5]\d|\d))?(\.\d{1,10})?(?:\s*([AP])M?)?\s*$/i.exec(e);if(t){const[,e,n,a,r,u]=t;if(r&&!a)return null;if(!u&&!n&&!a)return null;let f=1*(e||0);if(u){if(f>=13)return null;"p"!==u[0]&&"P"!==u[0]||(f+=12)}return{v:(60*f*60+1*(n||0)*60+1*(a||0)+1*(r||0))/86400,z:(2===e.length?"hh":"h")+":mm"+(a?":ss":"")+(u?" AM/PM":"")}}return null}function de(e){return/^\s*true\s*$/i.test(e)?{v:!0}:/^\s*false\s*$/i.test(e)?{v:!1}:null}const pe={};function ue(e,t){const{pattern:n,partitions:a,locale:r}=e,i=e=>{const n=Object.assign({},h(),t,e);return r&&(n.locale=r),n},s=(e,t)=>{const n=i(t);return function(e,t,n){const a=l(n.locale),r=t[3]?t[3]:Q;if("boolean"==typeof e&&(e=e?"TRUE":"FALSE"),null==e)return"";if("number"!=typeof e)return K(e,r,n,a);if(!isFinite(e)){const t=a||f;return isNaN(e)?t.nan:(e<0?t.negative:"")+t.infinity}const u=q(e,t);return u?K(e,u,n,a):""}(P(e,n),a,n)};s.color=(e,t)=>function(e,t){if("number"!=typeof e||!isFinite(e))return(t[3]?t[3].color:Q.color)||X;const n=q(e,t);return n&&n.color||X}(P(e,i(t)),a);const u=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const[a,r]=e,u=a.frac_max,f={type:"general",isDate:J(e),isText:L(e),isPercent:O(e),maxDecimals:a.general?9:u,scale:null!==(t=a.scale)&&void 0!==t?t:1,color:0,parentheses:0,grouped:a.grouping?1:0,_partitions:e},g=!f.isDate&&!f.isText&&!a.error&&a.tokens.some((e=>"string"===e.type&&(n?e.value===n:B.test(e.value))));let y="G",_=u>=0?Math.min(15,u):"",b="",j="";if(r.color&&(j="-",f.color=1),a.parens&&(b="()",f.parentheses=1),g)y="C",f.type="currency";else if(a.error)f.type="error",f.maxDecimals=0;else if(f.isDate){let e=0,t=0,n="";a.tokens.forEach((a=>{const r=a.type;/^(b-)?year/.test(r)?(n+="Y",t++):r.startsWith("month")?(n+="M",t++):/^(week)?day/.test(r)?(n+="D",t++):"hour"!==r&&"min"!==r&&"sec"!==r&&"am"!==r||(n+=r[0],e++)})),f.type="date",t&&e?f.type="datetime":!t&&e&&(f.type="time");const r=R.find((e=>n.startsWith(e[0])));y=r?"D":"G",_=r?r[1]:""}else f.isText?(y="G",f.type="text",_="",f.maxDecimals=0):a.general?(y="G",f.type="general",_=""):a.fractions?(y="G",f.type="fraction",_=""):a.exponential?(y="S",f.type="scientific"):f.isPercent?(y="P",f.type="percent"):a.grouping?(y=",",f.type="grouped"):(a.int_max||u)&&(y="F",f.type="number");return f.code=y+_+j+b,f.level=U[f.type],Object.freeze(f)}(a,(t||{}).currency)||new SyntaxError;return s.info=u,s.dateInfo=function(e){const[t]=e;return{year:!!(2&t.date),month:!!(4&t.date),day:!!(8&t.date),hours:!!(t.date&_),minutes:!!(t.date&b),seconds:!!(t.date&j),clockType:12===t.clock?12:24}}(a),s.isPercent=()=>!!u.isPercent,s.isDate=()=>!!u.isDate,s.isText=()=>!!u.isText,s.pattern=n,e.error&&(s.error=e.error),s.options=i,s.locale=r||t&&t.locale||"",Object.freeze(s)}function ce(e,t){e||(e="General");let n=null;return pe[e]?n=pe[e]:(n=Object.assign({},h(),t).throws?S(e):function(e){try{return S(e)}catch(t){const n={tokens:[{type:"error"}],error:t.message};return{pattern:e,partitions:[n,n,n,n],error:t.message,locale:null}}}(e),n.error||(pe[e]=n)),ue(n,t)}ce.isDate=e=>ce(e,{throws:!1}).isDate(),ce.isPercent=e=>ce(e,{throws:!1}).isPercent(),ce.isText=e=>ce(e,{throws:!1}).isText(),ce.getInfo=(e,t)=>ce(e,{...t,throws:!1}).info,ce.getDateInfo=(e,t)=>ce(e,{...t,throws:!1}).dateInfo,ce.dateToSerial=P,ce.dateFromSerial=I,ce.options=h,ce.dec2frac=p,ce.round=c,ce.codeToLocale=n,ce.parseLocale=s,ce.getLocale=l,ce.addLocale=(e,t)=>{const n=s(t);return delete pe[n.lang],delete pe[n.language],m(e,n)},ce.format=function(e,t,n){const a=n&&"object"==typeof n?n:{locale:n,throws:!(arguments.length>3&&void 0!==arguments[3]&&arguments[3])};return ce(e,a)(P(t,a),a)},ce.is_date=ce.isDate,ce.parseNumber=ie,ce.parseDate=oe,ce.parseTime=le,ce.parseBool=de,ce.parseValue=function(e,t){var n,a,r;return null!==(n=null!==(a=null!==(r=ie(e))&&void 0!==r?r:oe(e,t))&&void 0!==a?a:le(e))&&void 0!==n?n:de(e)};var fe=ce;return t.default}()}}]);