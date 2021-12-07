"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[288],{42811:(e,t,a)=>{a.d(t,{Hr:()=>n,qo:()=>c,GJ:()=>l,B$:()=>i,pf:()=>s,ak:()=>o,B:()=>m,X7:()=>u});var r=a(7073);const n=e=>e?e.reduce(((e,t)=>(e.push(t.releases.items[0]),e)),[]):[],c=e=>`spotify:artist:${e}`,l=e=>`spotify:app:artist:${e}`,i=(e,t,a)=>{var r,n;return{artists:[{uri:t,name:a}],images:(null===(r=e.coverArt)||void 0===r?void 0:r.sources)||[],name:e.name,uri:e.uri,year:null===(n=e.date)||void 0===n?void 0:n.year,type:e.type,sharingInfo:e.sharingInfo}},s=e=>{var t,a;return{artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:(null===(t=e.coverArt)||void 0===t?void 0:t.sources)||[],name:e.name,uri:e.uri,year:null===(a=e.date)||void 0===a?void 0:a.year,type:e.type,sharingInfo:e.sharingInfo}},o=({uri:e,profile:{name:t},visuals:{avatarImage:a}})=>({uri:e,name:t,images:(null==a?void 0:a.sources)||[]}),m=({uri:e,name:t,description:a,images:{items:r},owner:n})=>({uri:e,name:t,owner:{display_name:(null==n?void 0:n.name)||t},description:a||"",images:r[0]&&r[0].sources?r[0].sources:[]}),u=({track:{uri:e,name:t,playcount:a,duration:{totalMilliseconds:n},contentRating:c,artists:{items:l},album:{coverArt:i,uri:s},playability:{playable:o}}},m)=>{var u;return{uri:e,contextUri:m,totalMilliseconds:n,name:t,contentRating:(null==c?void 0:c.label)||r.KS.None,isPlayable:o,playcount:parseInt(a||"0",10),artists:l.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:null!=i&&null!==(u=i.sources)&&void 0!==u&&u.length?i.sources[0].url:"",albumUri:s}}},7679:(e,t,a)=>{a.d(t,{k:()=>k});var r=a(67294),n=a.n(r),c=a(25340),l=a(67892),i=a(94880),s=a(76343);const o="x8W2XQVxxPzNn946iIWj",m="mvsb4XgMWue3scs1x9cf",u="Z_ETdpLYpXzQ0KL6Yo0k",g="_Qyg17ZQBMlfq8GCA4vd",d="kQBxrPOAhMhPA_MCSpRJ",h="si8CFykRKeQOEEz9jJnh",v="_xiBdOWGZwffxdH6Sw7c",p="kyIc1eeN3qXq1shFLPQ8",E="EybveBUBw_K3Mqa4O788",y="eF_iqV6fuFzyZ8IOEka7",_="aVhGS9jOQU5NV_QRfCba";var b=a(43315),f=a(97493),N=a(64656);const k=n().memo((e=>{const{entity:t,isVirtual:a,shouldCombineRecs:r}=e,{venue:{name:k,location:{name:$}}}=t,D=t.artists[0],U=(0,c.ij)(t),I=new Date(t.date.isoString),O=a?f.q:N.K;return n().createElement(l.r,{to:`/concert/${t.id}`,className:o},D.imageUri?n().createElement(i.Z,null,n().createElement("div",{"data-testid":"image-container",className:_,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${D.imageUri})`}})):null,n().createElement("time",{className:m,dateTime:t.date.isoString},n().createElement(s.Dy.h5,{variant:s.$e.minuetBold,className:u},(0,c.lJ)(I)),n().createElement(s.Dy.h1,{variant:s.$e.canon,className:g},I.getDate())),n().createElement("div",{className:d,dir:"auto"},n().createElement(s.Dy.h2,{className:y,variant:s.$e.minuetBold},(0,b.FO)(I),", ",(0,c.b8)(I)),n().createElement(s.Dy.h2,{variant:s.$e.cello,weight:s.vS.bold,className:h},U),n().createElement("div",{className:v},r?n().createElement(O,{className:p,"aria-label":a?"Virtual Event":"In-Person Event",iconSize:16}):null,n().createElement(s.Dy.h2,{className:E,variant:s.$e.mesto,"data-testid":"location-name"},a?k:`${k}, ${$}`))))}))},63600:(e,t,a)=>{a.r(t),a.d(t,{default:()=>he});var r=a(67294),n=a.n(r),c=a(65858),l=a(47886),i=a(6581),s=a(50458),o=a(67154),m=a.n(o),u=a(20657),g=a(53424),d=a(59482),h=a(72907),v=a(51574),p=a(42922),E=a(19480),y=a(3634),_=a(67892),b=a(94880),f=a(76343);const N="xRM6JpKoKLJX5GSOtONe",k="_SxC3a3YsDuQ2dP71Xer",$="fhNamieteRzoekMfM0Pd",D="j6Z0zMYhMTAPP8GgbDIF",U="e__WE8Yvp6gJUeljpjho",I="mOuvq_cUTcm_nPOqh14h",O=n().memo((e=>{const{entity:t,headliner:a}=e,{imageUri:r,name:c,uri:l}=t;return n().createElement(_.r,{to:l,className:N},r?n().createElement(b.Z,null,n().createElement("div",{"data-testid":"image-container",className:I,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${r})`}})):null,n().createElement("div",{className:k},a&&n().createElement("div",{className:D},n().createElement(f.Dy.h4,{variant:f.$e.minuet,className:U,weight:f.vS.bold},u.ag.get("concert.label.headliner"))),n().createElement(f.Dy.h2,{variant:f.$e.alto,className:$},c)))})),P={concertsHubCard:"ukLX7MYyFZjnZKGabiVb",metadata:"_6KpRV6GSPpOpDIGmazT",title:"dUazyt4Ykbc2e4p75bOf",image:"aZCx0zlqpjGttz7SsBO3"},C=u.ag.get("concerts_browse_more"),w=n().memo((()=>n().createElement(_.r,{to:"spotify:concerts",className:P.concertsHubCard},n().createElement(b.Z,null,n().createElement("div",{className:P.image,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})),n().createElement("div",{className:P.metadata},n().createElement(f.Dy.h2,{variant:f.$e.canon,className:P.name},C)))));var M=a(25340);const Z="aHsZc_I_MTzppipLS9Us",q="_NOjwV3xzBXHMqtfDc_1",x="tI_6KcTGd3F5KJxhdlWF",Y="Y0GeAIqWOn05Uv10nV6M",K="KaHgjeEKL0cAFQdzwYgU",T="T7MMS7BYKYPAPGlT_UKg",A="FfQ1kPi3boVEOx_B4Zbp",G="ZjoG5fIY5MMfqHGtKCXh",S="NfNDI9efLay2gjAN9un9",z="mjQErlXU4nDJqyqUgprZ",L="TrKS3KWf9PKOTm_bZWks",Q="DgqN4Oc7YFckYCsta4p_",j="h80QqqFiqP_GK15dvpo0",F="sFa8gYQv_m0h9QsdpaLA",B="OL94Px7vy5AZW5O_3Nhs";var J=a(16229),W=a(95661),V=a(78688),X=a(42811),R=a(7679),H=a(56802),ee=a(20246),te=a(30005),ae=a(838),re=a(21366);const ne=n().memo((({uri:e})=>n().createElement(p.ZP,{value:"concert"},n().createElement(te.v,null,n().createElement(re.q,null,n().createElement(ae.Jx,{uri:e,displayText:u.ag.get("context-menu.copy-concert-link")}),n().createElement(ae.W2,{uri:e})),n().createElement(ae.h$,{uri:e})))));var ce=a(31595);const le=(e,t)=>({artists:[{uri:t,name:e.artistName}],images:[{url:e.imageUri,height:100,width:100}],name:e.name,uri:e.uri,type:V.albumType.ALBUM}),ie=e=>{const t=new Date(Date.parse(e.date));return n().createElement("div",{className:Z},n().createElement(f.Dy.h3,{variant:f.$e.canon,className:q},(0,M.NL)(t)))},se=e=>{const{clickThrus:t,ticketing:a,date:r,venue:c,location:l,clickThruUrl:i,id:s,category:o,lat:m,lon:g,ticketAvailabilityTranslated:d}=e,h=new Date(Date.parse(r)),v=`spotify:concert:${s}`,p="ONLINE"===o,E=(0,H.o)();let y="";if(!t||!t.length)return null;const b=t[0].partnerDisplayName;y="Songkick"===b?u.ag.get("concert.header.partner_songkick_attribution",b):a&&a[0]&&a[0].minPrice?u.ag.get("concert.header.partner_price_attribution",a[0].minPrice,b):u.ag.get("concert.header.partner_attribution",b),p&&(y=u.ag.get("concert_available_through",b));const N=p?u.ag.get("concert_find_virtual_event"):u.ag.get("concert.button.see_tickets");if((0,M.O1)(h))return n().createElement("div",{className:A},n().createElement(f.Dy.h3,{variant:f.$e.canon},u.ag.get("concert_event_ended")),n().createElement(f.Dy.span,null,n().createElement(_.Z,{to:"spotify:concerts"},u.ag.get("concert_past_message"))));return n().createElement("div",{className:A},n().createElement(f.Dy.h3,{variant:f.$e.canon},(()=>{if(p)return n().createElement(f.Dy.h3,{variant:f.$e.canon},c);const e=`https://maps.google.com/?q=${encodeURIComponent(`${c},${l}`)}&ll=${m},${g}`;return n().createElement(_.Z,{to:e,target:"_blank"},n().createElement(f.Dy.h3,{variant:f.$e.canon},`${c}, ${l}`))})()),n().createElement(f.Dy.h3,{variant:f.$e.mesto,className:B},(0,M.Ms)(h)," • ",(0,M.b8)(h)),n().createElement(f.Dy.h3,{className:T,variant:f.$e.mesto},y),d&&d.length>0&&n().createElement(f.Dy.h3,{className:T,variant:f.$e.mesto},d),n().createElement("div",{className:G},n().createElement(_.Z,{draggable:!1,className:S,to:i,target:"_blank"},n().createElement(J.Y,{version:"secondary",onClick:function(){E({targetUri:v,intent:"find-concert",type:"click"})}},N)),n().createElement(ee.y,{menu:n().createElement(ne,{uri:v})},n().createElement(W.z,{size:32,className:z}))))},oe=e=>{const{albums:t,artists:a}=e,r=t.reduce(((e,t)=>{const a=t.artistName;return e[a]?e[a].push(t):e[a]=[t],e}),{});return n().createElement("div",{className:L},a.map(((e,t)=>{const a=r[e.name]||[],c=a.length+2;let l=a.map(((t,a)=>n().createElement(y.r,{key:a,entity:le(t,e.uri)})));return l=[null,n().createElement(O,{entity:e,headliner:0===t})].concat(l),n().createElement(p.ZP,{value:"headered-grid",index:t},n().createElement(E.P,{key:t,title:0===t?u.ag.get("concert_lineup"):"",total:c,seeAllUri:`${(0,X.GJ)(e.id)}:discography`,seeAllLabel:u.ag.get("artist-page.show-discography")},l))})))},me=e=>{const t=e.upcomingConcerts;if(!t||t.length<1)return null;const a=t.map((e=>n().createElement(R.k,{entity:e})));return a.unshift(n().createElement(w,null)),n().createElement("div",{className:F},n().createElement(p.ZP,{value:"headered-grid"},n().createElement(E.P,{title:u.ag.get("concerts_more_events"),total:t.length+1},a)))},ue=e=>{const{concert:t,upcomingConcerts:a,artists:r,albums:c,color:l,headerImageUri:i,ticketAvailabilityTranslated:s}=e.concert,o=[{url:i,width:100,height:100}];(0,ce.Y)(l);const p=(0,H.o)();const E="ONLINE"===t.category?u.ag.get("concert_find_virtual_event"):u.ag.get("concert.button.see_tickets");return n().createElement("section",{className:Y},n().createElement(g.gF,{backgroundImages:o,backgroundColor:l},n().createElement(g.sP,null,n().createElement(g.T0,null,n().createElement(ie,t)),n().createElement(g.xd,null,(0,M.Yl)(t))),n().createElement(d.W,null,n().createElement("div",{className:Q},n().createElement(h.i,{text:(0,M.Yl)(t)}),n().createElement(_.Z,{draggable:!1,className:S,to:t.clickThruUrl,target:"_blank"},n().createElement(J.Y,{version:"secondary",className:j,onClick:function(){p({targetUri:`spotify:concert:${t.id}`,intent:"find-concert",type:"click"})}},E))))),n().createElement("div",{className:x},n().createElement(v.I,{backgroundColor:l}),n().createElement("div",{className:K},n().createElement(se,m()({},t,{ticketAvailabilityTranslated:s})),n().createElement(oe,{artists:r,albums:c}),n().createElement(me,{upcomingConcerts:a}))))},ge=n().memo(ue);var de=a(1663);const he=n().memo((()=>{const{concertId:e}=(0,l.UO)(),t=(0,c.I0)(),a=`spotify:concert:${e}`,o=(0,c.v9)((e=>(0,s.y)(a,e)));return(0,r.useEffect)((()=>{t((0,i.l$)(e))}),[t,e]),o?n().createElement(ge,{concert:o}):n().createElement(de.h,{errorMessage:u.ag.get("concert.error.concert_not_found_title")})}))},25340:(e,t,a)=>{a.d(t,{Ms:()=>n,b8:()=>c,lJ:()=>l,NL:()=>i,O1:()=>s,Yl:()=>u,ij:()=>g});var r=a(20657);const n=e=>r.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),c=e=>r.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),l=e=>r.ag.formatDate(e,{month:"short"}).toUpperCase(),i=e=>r.ag.formatDate(e,{month:"short",day:"numeric"}).toUpperCase(),s=e=>e<new Date,o={row:{1:e=>r.ag.get("concert.header.entity_title_1",...e),2:e=>r.ag.get("concert.header.entity_title_2",...e),3:e=>r.ag.get("concert.header.entity_title_3",...e),4:e=>r.ag.get("concert.header.entity_title_4",...e),more:e=>r.ag.get("concert.header.entity_title_more",...e)},entity:{1:e=>r.ag.get("concert.header.upcoming_concert_title_1",...e),2:e=>r.ag.get("concert.header.upcoming_concert_title_2",...e),3:e=>r.ag.get("concert.header.upcoming_concert_title_3",...e),4:e=>r.ag.get("concert.header.upcoming_concert_title_4",...e),more:e=>r.ag.get("concert.header.upcoming_concert_title_more",...e)}},m=(e,t)=>{const a=o[t],r=(e=>{try{var t;return!e.title||!e.festival&&null!==(t=e.artists)&&void 0!==t&&t.length?{artists:e.artists.map((e=>e.name||e.profile.name))}:{title:e.title}}catch(e){return null}})(e);if(r){if(r.title)return r.title;if(r.artists)return r.artists.length>4?a.more(r.artists):a[r.artists.length](r.artists)}return""},u=e=>m(e,"row"),g=e=>m(e,"entity")},50458:(e,t,a)=>{function r(e,t){return t.concerts.all[e]||null}a.d(t,{y:()=>r})}}]);
//# sourceMappingURL=xpui-routes-concert.js.map