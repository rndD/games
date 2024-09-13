(()=>{var e={453:e=>{e.exports="#version 300 es\nprecision highp float;uniform vec2 u_resolution;uniform vec4 u_Mouse;uniform vec4 u_MouseMove;out vec4 fragColor;uniform float u_time;uniform float u_super;uniform float u_superAvailable;uniform float u_gameStarted;uniform mat4 u_boxes[13];const float A=3.14159265359;float B(vec2 C,vec2 D,float E){return distance(C,D)-E;}float F(vec2 C,vec2 G,vec2 H){vec2 I=C-G;vec2 J=H-G;return distance(I,J*clamp(dot(I,J)/dot(J,J),0.,1.));}float K(vec2 C,vec2 G,vec2 H,float E){vec2 L=C-G;vec2 M=H-G;float N=clamp(dot(L,M)/dot(M,M),0.,1.);return length(L-M*N)-E;}float O(vec2 C){vec2 G=vec2(100.,150.);vec2 H=vec2(100.,350.);float E=20.;float P=K(C,G,H,E);return P;}float Q(vec2 C,vec2 R,vec2 S){vec2 T=abs(C-R)-S;return max(T.x,T.y);}float U(vec2 C,vec2 V,float W,float X,float E){vec2 M=vec2(sin(X),cos(X))*W;vec2 L=C-V+M;float N=clamp(dot(L,M)/dot(M,M),0.,1.);return length(L-M*N)-E;}vec2 Y(vec2 C,float Z){float D=cos(Z);float a=sin(Z);return vec2(C.x*D-C.y*a,C.x*a+C.y*D);}float b(vec2 C,vec2 V,float c,float X,float d,float e){vec2 f=Y(C-V,X+0.005*cos(10.*u_time));float g=mod(u_time,2.*A);float h=U(f,vec2(0,0),c,0.,15.);float i=c*2.3;vec2 j=vec2(0,-c-30.);float k=U(f,j,i,0.,10.+sin(0.*max(e,0.1)*g)*2.);float l=i*0.75;float m=U(f,j-vec2(0.13*i,53.),l,0.5-0.2*d+cos(30.*e*g)*0.1-min(e*50.,0.4),5.);float n=U(f,j-vec2(-0.13*i,53.),l,-0.5+0.2*d-sin(30.*e*g)*0.1+min(e*50.,0.4),5.);float o=i*0.75;float p=U(f,j+vec2(0.2*i,0.*i),o,-0.5-2.1*d+cos(30.*e*g)*0.1+min(e*50.,0.2),5.);float q=U(f,j+vec2(-0.2*i,0.*i),o,0.5+2.1*d+sin(30.*e*g)*0.1-min(e*50.,0.2),5.);return min(min(min(h,k),min(m,n)),min(p,q));}float r(vec2 C,vec2 H){vec2 T=abs(C)-H;return length(max(T,0.))+min(max(T.x,T.y),0.);}vec2 s(vec2 t,float u){vec2 v=vec2(5.,5.);vec2 w=1./v;float x=mod(u,v.x);float y=floor(u/v.x);vec2 z=vec2(x,y)*w;return(t-z)/w-0.5;}float AA(vec2 C,float AB){float T=length(C)-0.9*AB;return T;}float AC(vec2 C,float AB){float T=U(C,vec2(0.,0.7)*AB,1.4*AB,0.,0.2*AB);T=min(T,U(C,vec2(0.,0.7)*AB,0.5*AB,1.,0.2*AB));return T;}float AD(vec2 C,float AB){float T=U(C,vec2(0.3,0.5)*AB,0.6*AB,A/2.,0.3*AB);T=min(T,U(C,vec2(0.3,-0.5)*AB,0.6*AB,A/2.,0.3*AB));return T;}float AE(vec2 C,float AB){float T=U(C,vec2(0.6,0.7)*AB,1.1*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(0.6,0.)*AB,0.4*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.7)*AB,1.1*AB,A/2.,0.2*AB));return T;}float AF(vec2 C,float AB){float T=U(C,vec2(0.6,-0.05)*AB,1.2*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(-0.4,0.6)*AB,0.6*AB,A/8.,0.2*AB));T=min(T,U(C,vec2(0.2,-0.2)*AB,0.4*AB,0.,0.2*AB));return T;}float AG(vec2 C,float AB){float T=U(C,vec2(0.6,0.6)*AB,1.1*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(-0.5,0.5)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.1)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,0.)*AB,1.1*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.6)*AB,1.1*AB,A/2.,0.2*AB));return T;}float AH(vec2 C,float AB){float T=U(C,vec2(-0.5,0.5)*AB,0.9*AB,0.,0.2*AB);T=min(T,U(C,vec2(0.6,-0.1)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,0.)*AB,0.3*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.6)*AB,1.1*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(-0.5,-0.1)*AB,0.4*AB,0.,0.2*AB));return T;}float AI(vec2 C,float AB){float T=U(C,vec2(0.6,0.6)*AB,1.1*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(0.6,0.5)*AB,1.3*AB,A/6.,0.2*AB));return T;}float AJ(vec2 C,float AB){float T=U(C,vec2(0.6,0.6)*AB,1.1*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(-0.5,0.5)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.1)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,0.)*AB,1.1*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(0.6,-0.6)*AB,1.1*AB,A/2.,0.2*AB));T=min(T,U(C,vec2(-0.5,-0.1)*AB,0.4*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.6,0.5)*AB,1.1*AB,0.,0.2*AB));return T;}float AK(vec2 C,float AB){C=vec2(-C.x,-C.y);return AH(C,AB);}float AL(vec2 C,float AB){float T=U(C,vec2(0.55,0.55)*AB,1.6*AB,A/4.,0.2*AB);T=min(T,U(C,vec2(-0.55,0.55)*AB,1.6*AB,-A/4.,0.2*AB));return T;}float AM(vec2 C,float AB){float T=AC(C,AB);C=vec2(C.x-0.8*AB,C.y);T=min(T,AC(C,AB));return T;}float AN(vec2 C,float AB){float T=U(C,vec2(0.70,0.40)*AB,0.6*AB,A/2.,0.2*AB);T=min(T,U(C,vec2(-0.60,0.65)*AB,1.3*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.70,-0.4)*AB,0.6*AB,A/2.,0.2*AB));return T;}float AO(vec2 C,float AB){float T=U(C,vec2(0.70,0.70)*AB,0.6*AB,1.9,0.25*AB);T=min(T,U(C,vec2(-0.60,0.75)*AB,1.5*AB,0.,0.2*AB));T=min(T,U(C,vec2(0.70,0.5)*AB,0.6*AB,0.4,0.2*AB));T=min(T,U(C,vec2(0.45,-0.10)*AB,0.6*AB,-0.5,0.2*AB));T=min(T,U(C,vec2(0.7,-0.7)*AB,0.6*AB,A/2.-0.3,0.20*AB));return T;}float AP(vec2 C,float AB){float T=AC(C,AB);C=vec2(C.x-1.2*AB,C.y);T=min(T,AE(C,AB));return T;}void main(){vec2 R=u_resolution.xy*0.5;vec2 t=gl_FragCoord.xy/u_resolution.xy;vec2 C=gl_FragCoord.xy;float g=u_time;float AQ=1e10;vec3 AR=vec3(0.);for(int AS=0;AS<13;AS++){vec2 R=u_boxes[AS][0].xy;float AT=u_boxes[AS][0].z*0.6;float AU=u_boxes[AS][0].w;float AV=u_boxes[AS][1].w;vec3 AW=u_boxes[AS][2].xyz/255.*AV*(0.75+0.25*sin(float(AS)+g*2.));float AX=1e10;if(AU<0.1){AX=min(AX,AA(C-R,AT));}else if(AU<1.1){AX=min(AX,AC(C-R,AT));}else if(AU<2.1){AX=min(AX,AD(C-R,AT));}else if(AU<3.1){AX=min(AX,AE(C-R,AT));}else if(AU<4.1){AX=min(AX,AF(C-R,AT));}else if(AU<5.1){AX=min(AX,AG(C-R,AT));}else if(AU<6.1){AX=min(AX,AH(C-R,AT));}else if(AU<7.1){AX=min(AX,AI(C-R,AT));}else if(AU<8.1){AX=min(AX,AJ(C-R,AT));}else if(AU<9.1){AX=min(AX,AK(C-R,AT));}else if(AU<10.1){AX=min(AX,AL(C-R,AT));}else if(AU<11.1){AX=min(AX,AM(C-R,AT));}else if(AU<12.1){AX=min(AX,AN(C-R,AT));}else if(AU<13.1){if(AW.g>0.05){AX=min(AX,AP(C-R,AT));}else{AX=min(AX,AO(C-R,AT));}}else{AX=min(AX,B(C,R,AT));}if(AX<AQ){AQ=AX;AR=AW;}}float AY=30.;vec2 AZ=u_Mouse.xy;float e=u_MouseMove.y;float Aa=u_MouseMove.x;float Ab=u_Mouse.z;float AX=b(C,AZ,20.,Aa,min(u_MouseMove.w+Ab,1.),e/30.);vec3 Ac;if(u_Mouse.z>0.&&u_super>0.&&u_superAvailable>0.){Ac=vec3(1.1);}else if(u_Mouse.w>0.){Ac=vec3(0.,0.,0.);}else{Ac=vec3(u_MouseMove.z);}if(u_gameStarted<0.5){vec2 Ad=u_resolution.xy*0.5;float Ae=AC(C-Ad-vec2(-75.,0.),100.);float Af=AE(C-Ad-vec2(75.,0.),100.);float Ag=U(Y(C-Ad-vec2(-200.,sin(u_time+A)*30.),A/2.),vec2(0.,-22.5),45.,A,7.);float Ah=AL(Y(C-Ad-vec2(-200.,sin(u_time)*30.),A/4.),30.);float T=min(Ae,min(Af,min(Ag,Ah)));if(Ae<Af&&Ae<Ag&&Ae<Ah){AR=vec3(0.,0.,0.);}else if(Af<Ae&&Af<Ag&&Af<Ah){AR=vec3(1.,0.,0.);}else if(Ag<Ae&&Ag<Af&&Ag<Ah){AR=vec3(1.,1.,1.);}else if(Ah<Ae&&Ah<Af&&Ah<Ag){AR=vec3(1.,1.,1.);}AQ=min(T,AQ);}if(AX<AQ){AQ=AX;AR=Ac;}fragColor=vec4(AQ,AR);}"},242:e=>{e.exports="#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform vec2 u_resolution;uniform sampler2D u_distanceTexture;uniform sampler2D u_lastTexture;uniform vec2 u_cascadeExtent;uniform float u_cascadeCount;uniform float u_cascadeIndex;uniform float u_basePixelsBetweenProbes;uniform float u_cascadeInterval;uniform float u_rayInterval;uniform bool u_addNoise;uniform bool u_enableSun;uniform float u_sunAngle;uniform float u_srgb;uniform float u_firstCascadeIndex;uniform float u_lastCascadeIndex;uniform float u_baseRayCount;uniform float u_time;in vec2 vUv;out vec4 FragColor;const float A=3.14159265;const float B=2.*A;const float C=A*0.7639320225;const float D=1.;const vec3 E=vec3(0.2,0.24,0.35)*6.;const vec3 F=vec3(0.95,0.9,0.8)*4.;const vec3 G=vec3(0.02,0.08,0.2);const vec3 H=vec3(0.95,0.95,0.9);\n#define I  2 \n#define J  1 \nvec3 K(float L){float M=mod(L-u_sunAngle,B);float N=smoothstep(1.,0.,M);return H*N+G;}vec3 O(float L){float M=mod(L-u_sunAngle,B);float N=pow(max(0.,cos(M)),4./D);return mix(F*N,E,0.3);}float P(vec2 Q){return fract(sin(dot(Q.xy,vec2(12.9898,78.233)))*43758.5453);}vec4 R(vec2 S,vec2 T,float U,vec2 V,vec2 W,float X,float Y){vec2 Z=S+T*W;if(floor(Z)!=vec2(0.))return vec4(0);vec2 a=T*U*V;int b=0;for(float c=0.;c<X&&b<100;b++){ivec2 d=ivec2(int(Z.x*u_resolution.x),int(Z.y*u_resolution.y));float e=texelFetch(u_distanceTexture,d,0).r;e=e/max(u_resolution.x,u_resolution.y);if(e<=Y){ivec2 d=ivec2(int(Z.x*u_resolution.x),int(Z.y*u_resolution.y));vec4 f=texelFetch(u_distanceTexture,d,0);f.rgb=pow(f.gba,vec3(u_srgb));f.a=1.;return f;}c+=e*U;if(c>=X)break;Z+=a*e;if(floor(Z)!=vec2(0.))break;}return vec4(0);}vec4 g(vec4 h,float i,vec2 j,float k){if(h.a>0.||u_cascadeIndex>=u_cascadeCount-1.){return h;}float l=pow(k,u_cascadeIndex+1.);vec2 m=floor(u_cascadeExtent/l);vec2 n=vec2(mod(i,l),floor(i/l))*m;vec2 o=(j+0.5)/k;vec2 p=clamp(o,vec2(1.),m-1.);vec2 q=(n+p)/u_cascadeExtent;vec4 r=textureLod(u_lastTexture,q,u_basePixelsBetweenProbes==1.?0.:log(u_basePixelsBetweenProbes)/log(2.));return h+r;}vec3 s(vec3 t){bvec3 u=lessThan(t,vec3(0.0031308));vec3 v=vec3(1.055)*pow(t,vec3(1./2.4))-vec3(0.055);vec3 w=t*vec3(12.92);return mix(v,w,u);}void main(){vec2 x=floor(vUv*u_cascadeExtent);if(u_cascadeIndex==0.){ivec2 d=ivec2(int(vUv.x*u_resolution.x),int(vUv.y*u_resolution.y));vec4 f=texelFetch(u_distanceTexture,d,0);if(f.r<2.){FragColor=vec4(f.gba,1.);return;}}float y=u_baseRayCount;float z=pow(y,u_cascadeIndex+1.);float AA=sqrt(y);float AB=pow(AA,u_cascadeIndex);float AC=y<16.?pow(u_basePixelsBetweenProbes,1.):AA;vec2 AD=floor(u_cascadeExtent/AB);vec2 AE=mod(x,AD);vec2 AF=floor(x/AD);float AG=u_rayInterval;float AH=AC*AG*u_cascadeInterval;float AI=u_cascadeIndex==0.?u_cascadeInterval:AH;vec2 W=(AI*pow(y,(u_cascadeIndex-1.)))/u_resolution;float X=((AH)*pow(y,u_cascadeIndex));vec2 AJ=(AE+0.5)*u_basePixelsBetweenProbes*AB;float AK=y;float AL=(AF.x+(AB*AF.y))*AK;float AM=B/z;float U=min(u_resolution.x,u_resolution.y);vec2 V=1./u_resolution;float Y=min(V.x,V.y)*0.5;float AN=1./(AK);vec2 AO=AJ*V;vec4 AP=vec4(0.);float AQ=u_addNoise?P(vUv*(u_cascadeIndex+1.)):0.;for(int AR=0;AR<int(AK);AR++){float i=AL+float(AR);float AS=(i+0.5+AQ)*AM;vec2 AT=vec2(cos(AS),-sin(AS));vec4 AU=R(AO,AT,U,V,W,X,Y);vec4 AV=g(AU,i,AE,AA);if(u_enableSun&&u_cascadeIndex==u_cascadeCount-1.){AV.rgb=max(u_addNoise?K(AS):O(AS),AV.rgb);}AP+=AV*AN;}FragColor=vec4((u_cascadeIndex>u_firstCascadeIndex)?AP.rgb:s(AP.rgb),AP.a);}"}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="+-13-AOSDfkpok4034-HIGHSCORE",t=({id:t,score:i,time:o,name:n})=>{const s=r(),a=JSON.parse(localStorage.getItem(e)||"[]"),c=(e=>{const t=r(),[i,o]=t.split("x").map(Number),n=i*o,s=Math.sqrt(1048576/n);return Math.round(e*s)})(i);if(void 0===t)t=Date.now(),a.push({id:t,score:i,adjustedScore:c,time:o,name:"Player",resolution:s});else{const e=a.find((e=>e.id===t));e&&(e.name=n,e.resolution=s,e.adjustedScore=c)}return a.sort(((e,t)=>t.adjustedScore-e.adjustedScore||e.time-t.time)),localStorage.setItem(e,JSON.stringify(a)),t},o=t=>{const i=document.getElementById("scoreboard");if(!i)return;i.innerHTML="";const o=JSON.parse(localStorage.getItem(e)||"[]");o.slice(0,10).forEach(((e,o)=>{const r=n(e,o,!!t&&t===e.id);i.appendChild(r)}));const r=o.find((e=>e.id===t));if(r&&o.length>10&&o.indexOf(r)>=10){const e=o.indexOf(r),t=n(r,e,!0);i.appendChild(t)}},n=(e,i,n)=>{var s,a;const c=document.createElement("div");if(c.className="score-entry",n){c.className+=" current-player",c.innerHTML=`\n      <div class="place">${i+1}</div>\n      <div class="name">\n        <form id="name-form">\n          <input type="text" value="${e.name||""}" placeholder="Enter name" class="name-input" autofocus />\n        </form>\n      </div>\n      <div class="score">${e.adjustedScore} (${e.score})</div>\n      <div class="time">${null===(s=e.time)||void 0===s?void 0:s.toFixed(2).replace(".",":")}s</div>\n      <div class="resolution">${e.resolution||"N/A"}</div>\n    `;const n=c.querySelector("form"),a=c.querySelector("input");n&&a&&(a.focus(),n.onsubmit=i=>{i.preventDefault();const n=a.value.trim();n&&(t({id:e.id,name:n,score:e.score,resolution:r()}),o())})}else c.innerHTML=`\n      <div class="place">${i+1}</div>\n      <div class="name">${e.name||"---"}</div>\n      <div class="score">${e.adjustedScore} (${e.score})</div>\n      <div class="time">${null===(a=e.time)||void 0===a?void 0:a.toFixed(2).replace(".",":")}s</div>\n      <div class="resolution">${e.resolution||"N/A"}</div>\n    `;return c},r=()=>`${window.innerWidth}x${window.innerHeight}`,s=(e,t)=>{const i=[];for(let o=0;o<44100*t;o++){const n=(e,t,i,o)=>Math.sin(e/t*6.28*i+o),r=(e,t)=>Math.sin(e/44100*t*6.28+Math.pow(n(e,44100,t,0),3)+.75*n(e,44100,t,.25)+.1*n(e,44100,t,.5));i[o]=o<88?o/88.2*r(o,e):Math.pow(1-(o-88.2)/(44100*(t-.002)),Math.pow(.5*Math.log(1e4*e/44100),2))*r(o,e)}return i},a=new window.AudioContext,c=e=>{const t=a.createBuffer(1,e.length,44100);return t.getChannelData(0).set(e),t},l=[261,277,293,311,329,349,369,392,415,440].map((e=>e/2)),u=[];for(let e=-1;e<3;e++)u.push(...l.map((t=>c(s(t*Math.pow(2,e),.65)))));function h(e){const t=a.createBufferSource();t.buffer=u[e];const i=a.createGain();i.gain.value=.5,t.connect(i),i.connect(a.destination),t.start(0)}let d=0,A=3,f=1300,m=1,v=!0,g=0,T=1;const x=[];let y=0,C=1,B=!1,p=!1;function _(e){p=e}function b(e){T=e}const E=document.getElementById("dcanvas"),w=E.getContext("2d");function M(e,t,i,o,n){const r=Math.sin(n),s=Math.cos(n),a=e-i,c=t-o;return{x:i+a*s-c*r,y:o+a*r+c*s}}function F(e,t){let i=1/0,o=-1/0;for(const n of e){const e=n.x*t.x+n.y*t.y;i=Math.min(i,e),o=Math.max(o,e)}return{min:i,max:o}}function R(e){const t=[];for(let i=0;i<e.length;i++){const o=e[i],n=e[(i+1)%e.length],r={x:n.x-o.x,y:n.y-o.y};t.push({x:-r.y,y:r.x})}return t}function U(e,t,i,o,n){const r=function(e,t,i,o){const n=e.width/2,r=.1,s=[M(t-n,i-.9*e.height,t,i,o),M(t+n,i-.9*e.height,t,i,o),M(t+n,i+r*e.height,t,i,o),M(t-n,i+r*e.height,t,i,o)];return w.strokeStyle="white",w.lineWidth=2,w.fillStyle="rgba(255, 255, 255, 0.5)",w.fillText("Hello, World!",10,50),w.beginPath(),w.moveTo(s[0].x,N-s[0].y),w.lineTo(s[1].x,N-s[1].y),w.lineTo(s[2].x,N-s[2].y),w.lineTo(s[3].x,N-s[3].y),w.closePath(),w.stroke(),s}(e,i,o,n),s=[{x:t.x-t.size/2,y:t.y-t.size/2},{x:t.x+t.size/2,y:t.y-t.size/2},{x:t.x+t.size/2,y:t.y+t.size/2},{x:t.x-t.size/2,y:t.y+t.size/2}],a=[...R(r),...R(s)];for(const e of a){const t=F(r,e),i=F(s,e);if(t.max<i.min||i.max<t.min)return!1}return!0}function S(e,t){const i=t.x-e.x,o=t.y-e.y,n=Math.sqrt(i*i+o*o),r=i/n,s=o/n,a=(t.dx-e.dx)*r+(t.dy-e.dy)*s;if(a>0)return;const c=-1.1*a,l=c*r,u=c*s;e.dx-=l,e.dy-=u,t.dx+=l,t.dy+=u;const h=e.size-n;if(h>.01){const i=r*(.2*h),o=s*(.2*h);e.x-=i/2,e.y-=o/2,t.x+=i/2,t.y+=o/2}}E.width=window.innerWidth,E.height=window.innerHeight;const I=13,P={width:60,height:160};let L=800,N=600;const X=["#FF8000","#FFFF00","#80FF00","#00FF00","#00FF80","#00FFFF","#0080FF","#0000FF","#8000FF","#FF00FF","#FF0080","#FF7020","#FF0000"];function D(e,t){L=e,N=t,x.length=0;for(let o=0;o<I;o++){const n=o+1;let{r:r,g:s,b:a}=(i=X[n-1],{r:parseInt(i.slice(1,3),16),g:parseInt(i.slice(3,5),16),b:parseInt(i.slice(5,7),16)});v||13!==n?v||13===n?v&&13===n?(r=255,s=0,a=0):v&&13!==n&&(r=0,s=255,a=0):(r=255,s=0,a=0):(r=0,s=255,a=0);const c={x:Math.random()*e,y:Math.random()*t,size:60,value:n,enemy:13===n?1:0,dx:(Math.random()-.5)*(13===n?8:4),dy:(Math.random()-.5)*(13===n?8:4),r:r,g:s,b:a,collision:!1,radiance:0};H(c,e,t),x.push(c)}var i}let G;function z(e,i,n,r,s,a,c,l,u){if(!B)return;w.clearRect(0,0,L,N);const p=e-g;g=e,f-=p/10,i.innerText=`${(13-f/100).toFixed(2).replace(".",":")}s (${m})`;for(let e=0;e<x.length;e++){w.strokeStyle="black",w.rect(x[e].x-x[e].size/2,N-x[e].y-x[e].size/2,x[e].size,x[e].size),w.stroke();const t=x[e];t.enemy=v?13===t.value?1:0:13!==t.value?1:0;const i=.1+m/10;if(t.x+=t.dx*i*p/10,t.y+=t.dy*i*p/10,t.collision)t.radiance=Math.min(t.radiance+p/2e3,1);else{if(!(t.x-t.size>0&&t.x+t.size<L&&t.y-t.size>0&&t.y+t.size<N))continue;t.collision=!0}(t.x-t.size/2<0||t.x+t.size/2>L)&&(t.dx*=-1),(t.y-t.size/2<0||t.y+t.size/2>N)&&(t.dy*=-1);for(let i=e+1;i<x.length;i++){const e=x[i];E=e,(b=t).x-b.size/2<E.x+E.size/2&&b.x+b.size/2>E.x-E.size/2&&b.y-b.size/2<E.y+E.size/2&&b.y+b.size/2>E.y-E.size/2&&S(t,e)}U(P,t,a,c,-l)&&(!v&&13===t.value||v&&13!==t.value||u&&C?(h(t.value),d+=t.value,y<100&&(y+=t.value,y=Math.min(y,100)),y>0&&(C=1),H(t,L,N)):(v&&13===t.value||!v&&13!==t.value)&&T<=.1&&(A-=1,d-=t.value,d=Math.max(0,d),T=1,h(0),H(t,L,N)))}var b,E;if(n.innerText=`${d}`,r.innerText="\u2764\ufe0f".repeat(Math.max(0,A)),u&&C&&(y=Math.max(0,y-p/30),0===y&&(C=0)),!u&&y<=0&&(C=0),function(e){const t=document.getElementById("progress-circle"),i=Math.min(Math.max(e,0),100),o=i/100*360;if(!t)return;t.style.background=`conic-gradient(#fff ${o}deg, #000 ${o}deg)`,i>=100?t.classList.add("blinking"):t.classList.remove("blinking")}(y),!(A>=0)){h(0),s.style.display="block";const e=t({score:d,time:13*(m-1)+(1300-f)/100});return o(e),B=!1,G&&G(),D(L,N),!1}f<0&&(m++,v=m%2!=0,f=1300,_(!0),D(L,N))}function H(e,t,i){const o=Math.floor(4*Math.random());e.collision=!1,0===o?(e.x=-e.size,e.y=Math.random()*i):1===o?(e.x=t+e.size,e.y=Math.random()*i):2===o?(e.x=Math.random()*t,e.y=-e.size):3===o&&(e.x=Math.random()*t,e.y=i+e.size);const n=Math.random()*t*.5+.25*t,r=Math.random()*i*.5+.25*i,s=n-e.x,a=r-e.y,c=Math.sqrt(s*s+a*a),l=13===e.value?8:4;e.dx=s/c*l,e.dy=a/c*l}g=performance.now();class O{constructor(){this.isPlaying=!1,this.tempo=60,this.currentTime=0,this.nextNoteTime=0,this.timerID=null,this.currentChord=0,this.measureCount=0,this.chorusMelodyIndex=0,this.chorusMelodyTime=0,this.bassNoteTime=0,this.currentBassIndex=0,this.currentSection="verse",this.verseChords=[{root:"C4",chord:["C4","E4","G4"]},{root:"F4",chord:["F4","A4","C5"]},{root:"G4",chord:["G4","B4","D5"]},{root:"Am",chord:["A4","C5","E5"]}],this.bridgeChords=[{root:"Dm",chord:["D4","F4","A4"]},{root:"G4",chord:["G4","B4","D5"]},{root:"Em",chord:["E4","G4","B4"]},{root:"Am",chord:["A4","C5","E5"]}],this.chorusChords=[{root:"C4",chord:["C4","E4","G4"]},{root:"Am",chord:["A4","C5","E5"]},{root:"F4",chord:["F4","A4","C5"]},{root:"G4",chord:["G4","B4","D5"]}],this.chorusMelody=[{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"A4",duration:.5},{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"A4",duration:.5},{note:"B4",duration:.5},{note:"A4",duration:.5},{note:"G4",duration:.25},{note:"A4",duration:.75},{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"A4",duration:.5},{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"A4",duration:.5},{note:"G4",duration:.5},{note:"B4",duration:.5},{note:"A4",duration:.25},{note:"G4",duration:1},{note:"A4",duration:.25},{note:"A4",duration:.5},{note:"B4",duration:.25},{note:"B4",duration:.5},{note:"C5",duration:.25},{note:"C5",duration:.25},{note:"D5",duration:.25},{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"C5",duration:.25},{note:"B4",duration:.25},{note:"A4",duration:1}],this.melodyPatterns=[[{note:"C5",duration:.5},{note:"E5",duration:.25},{note:"G5",duration:.25},{note:"C6",duration:.5},{note:"G5",duration:.25},{note:"E5",duration:.25}],[{note:"E5",duration:.25},{note:"G5",duration:.25},{note:"C6",duration:.25},{note:"D6",duration:.125},{note:"C6",duration:.125},{note:"G5",duration:.5},{note:"E5",duration:.5}]],this.bridgeMelodyPattern=[{note:"D5",duration:.75},{note:"F5",duration:.25},{note:"A5",duration:.5},{note:"G5",duration:.5},{note:"E5",duration:.75},{note:"G5",duration:.25},{note:"C6",duration:1}],this.bassPatterns=[[{note:"C2",duration:1},{note:"G2",duration:.5},{note:"C3",duration:1}],[{note:"C2",duration:1},{note:"G2",duration:.5},{note:"C3",duration:1},{note:"G2",duration:.5}]],this.chorusBassPattern=[{note:"C2",duration:.5},{note:"G2",duration:.5},{note:"C3",duration:.25},{note:"G2",duration:.25},{note:"C2",duration:.5}],this.drumPatterns=[[{type:"kick",time:0},{type:"snare",time:.5},{type:"kick",time:1},{type:"snare",time:1.5}],[{type:"kick",time:0},{type:"snare",time:.25},{type:"kick",time:.5},{type:"snare",time:1},{type:"kick",time:1.5}]],this.audioContext=new(window.AudioContext||window.webkitAudioContext),this._setupEffects()}_setupEffects(){this.reverb=this.audioContext.createConvolver(),this.reverb.buffer=this._createReverbIR(1.4,2),this.filter=this.audioContext.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=3e3,this.filter.Q.value=1,this.filter2=this.audioContext.createBiquadFilter(),this.filter2.type="lowpass",this.filter2.frequency.value=3e3,this.filter2.Q.value=5}_createReverbIR(e,t){const i=this.audioContext.sampleRate*e,o=this.audioContext.createBuffer(2,i,this.audioContext.sampleRate),n=o.getChannelData(0),r=o.getChannelData(1);for(let e=0;e<i;e++)n[e]=(2*Math.random()-1)*Math.pow(1-e/i,t),r[e]=(2*Math.random()-1)*Math.pow(1-e/i,t);return o}noteToFrequency(e){const t=parseInt(e.slice(-1)),i=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].indexOf(e.slice(0,-1));return 440*Math.pow(2,(i-9)/12+(t-4))}createOscillator(e,t,i,o,n=1){const r=this.audioContext.createOscillator(),s=this.audioContext.createGain();r.connect(s),s.connect(this.filter),this.filter.connect(this.reverb),this.reverb.connect(this.audioContext.destination),r.type=e,r.frequency.setValueAtTime(t,i);const a=.3*o,c=.2*o;r.frequency.setValueAtTime(t,i),s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(n,i+.01),s.gain.linearRampToValueAtTime(n/2*.7,i+.01+a),s.gain.setValueAtTime(.7*n,i+o-c),s.gain.linearRampToValueAtTime(0,i+o),r.start(i),r.stop(i+o)}playNote(e,t,i,o=1){this.createOscillator("sawtooth",this.noteToFrequency(e),t,i,o)}playBassNote(e,t,i){this.createOscillator("triangle",this.noteToFrequency(e),t,i,.7)}playChord(e,t,i){e.forEach((e=>{this.createOscillator("triangle",this.noteToFrequency(e),t,i,.2)}))}playCounterMelody(e,t,i){this.createOscillator("sawtooth",this.noteToFrequency(e),t,.8*i,.4)}playDrum(e,t){if("kick"===e){const e=this.audioContext.createOscillator(),i=this.audioContext.createGain();e.connect(i),i.connect(this.filter2),this.filter2.connect(this.audioContext.destination);const o=60/this.tempo*.5;e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(.01,t+o),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+o),e.start(t),e.stop(t+o)}else if("snare"===e){const e=this.audioContext.createBufferSource(),i=this.audioContext.createBuffer(1,.05*this.audioContext.sampleRate,this.audioContext.sampleRate),o=i.getChannelData(0);for(let e=0;e<i.length;e++)o[e]=2*Math.random()-1;e.buffer=i;const n=this.audioContext.createGain();e.connect(n),n.connect(this.filter2),this.filter2.connect(this.reverb),this.reverb.connect(this.audioContext.destination),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.start(t)}}resetChorusState(){this.chorusMelodyIndex=0,this.chorusMelodyTime=0}scheduleNote(){const e=60/this.tempo;for(;this.nextNoteTime<this.audioContext.currentTime+.1;){const t=Math.floor(this.currentTime/4),i=this.currentTime%4;if(0===i&&(this.currentChord=(this.currentChord+1)%4,this.measureCount++,this.measureCount%4==0)){const e=this.currentSection;this.currentSection=this.getNextSection(),this.currentChord=0,"chorus"===e&&"chorus"!==this.currentSection&&this.resetChorusState()}const o=this.getCurrentChords();let n;if(i%1==0&&this.playChord(o[this.currentChord].chord,this.nextNoteTime,e),this.playCurrentSectionMelody(t,i,e),n="chorus"===this.currentSection?this.chorusBassPattern:this.bassPatterns[t%this.bassPatterns.length],this.currentTime>=this.bassNoteTime){const t=n[this.currentBassIndex];this.playBassNote(t.note,this.nextNoteTime,t.duration*e),this.bassNoteTime+=t.duration,this.currentBassIndex=(this.currentBassIndex+1)%n.length,0===this.currentBassIndex&&(this.bassNoteTime=4*Math.ceil(this.currentTime/4))}this.playDrums(t,i),this.currentTime+=.25,this.nextNoteTime+=.25*e}this.timerID=window.setTimeout((()=>this.scheduleNote()),25)}getNextSection(){switch(this.currentSection){case"verse":return"chorus";case"chorus":return"bridge";case"bridge":return"verse"}}getCurrentChords(){switch(this.currentSection){case"verse":return this.verseChords;case"bridge":return this.bridgeChords;case"chorus":return this.chorusChords}}playCurrentSectionMelody(e,t,i){switch(this.currentSection){case"verse":this.playVerseMelody(e,t,i);break;case"bridge":this.playBridgeMelody(t,i);break;case"chorus":this.playChorusMelody(t,i)}}playVerseMelody(e,t,i){const o=this.melodyPatterns[e%this.melodyPatterns.length],n=o[Math.floor(2*t)%o.length];if(this.playNote(n.note,this.nextNoteTime,n.duration*i,.4),t>=2){const e=o[(Math.floor(2*t)+2)%o.length];this.playCounterMelody(e.note,this.nextNoteTime,e.duration*i)}}playBridgeMelody(e,t){const i=this.bridgeMelodyPattern[Math.floor(e)%this.bridgeMelodyPattern.length];this.playNote(i.note,this.nextNoteTime,i.duration*t,.4)}getCurrentChorusNote(e){if(0===e&&(this.chorusMelodyTime=0),this.chorusMelodyTime<=e){const e=this.chorusMelody[this.chorusMelodyIndex];return this.chorusMelodyIndex=(this.chorusMelodyIndex+1)%this.chorusMelody.length,this.chorusMelodyTime+=e.duration,e}return null}playChorusMelody(e,t){const i=this.getCurrentChorusNote(e%4);i&&this.playNote(i.note,this.nextNoteTime,i.duration*t)}playDrums(e,t){this.drumPatterns[e%this.drumPatterns.length].forEach((e=>{const i=t%2;Math.abs(i-e.time)<.001&&this.playDrum(e.type,this.nextNoteTime)}))}start(){this.isPlaying||(this.isPlaying=!0,this.currentTime=0,this.nextNoteTime=this.audioContext.currentTime,this.measureCount=0,this.currentSection="chorus",this.currentChord=0,this.chorusMelodyIndex=0,this.chorusMelodyTime=0,this.scheduleNote())}stop(){this.isPlaying=!1,null!==this.timerID&&clearTimeout(this.timerID)}setNextTempo(){this.tempo+=5}}var k,V=i(242),q=i.n(V),W=i(453),$=i.n(W);function j(e,t,i){const o=e.createShader(t)||"";return e.shaderSource(o,i),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(e.deleteShader(o),null)}function K(e,t,i){const o=e.createProgram();if(!o||!t||!i)throw new Error("Program linking error");if(e.attachShader(o,t),e.attachShader(o,i),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS))throw e.deleteProgram(o),new Error("Program linking error");return o}function Q(e,t,i,o,n,r,s=!1,a=null){const c=e.createTexture();return e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,o,t,i,0,n,r,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s?e.LINEAR_MIPMAP_LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),c}const J=5,Z=10,Y=.4,ee=.8;let te,ie=window.innerWidth/2,oe=window.innerHeight/2+300,ne=0,re=0,se=0,ae=Y,ce=J,le=0,ue=0;const he=()=>{var e,t,i;ie=window.innerWidth/2,oe=window.innerHeight/2+300,b(1),f=1300,m=1,v=!0,D(L,N),A=3,B=!0,g=performance.now(),y=0,d=0,null===(e=document.querySelector("#start"))||void 0===e||e.setAttribute("style","display: none"),null===(t=document.getElementById("game-ui"))||void 0===t||t.setAttribute("style","display: flex"),null===(i=document.getElementById("over"))||void 0===i||i.setAttribute("style","display: none"),document.getElementById("help1").setAttribute("style","display: block; animation: fadeOut 6s forwards;"),ue||(te=new O,te.start(),ue=1),h(0)};var de;de=()=>{var e,t;ue&&(te.stop(),ue=0),null===(e=document.getElementById("game-ui"))||void 0===e||e.setAttribute("style","display: none"),null===(t=document.getElementById("restart"))||void 0===t||t.addEventListener("click",(()=>{he()}))},G=de,null===(k=document.querySelector("#start button"))||void 0===k||k.addEventListener("click",(()=>{he()}));const Ae=new class{constructor(e,t,i){this.rawBasePixelsBetweenProbes=1,this.width=t,this.height=i,this.uniformLocations={},this.attributeLocations={},this.dfUniformsSync=!1,this.rcUniformsSync=!1,this.renderWidth=this.width,this.renderHeight=this.height;const o=Math.sqrt(this.renderWidth*this.renderWidth+this.renderHeight*this.renderHeight);if(this.radianceCascades=Math.ceil(Math.log(o)/Math.log(4))+1,this.basePixelsBetweenProbes=this.rawBasePixelsBetweenProbes,this.radianceInterval=1,this.radianceWidth=Math.floor(this.renderWidth/this.basePixelsBetweenProbes),this.radianceHeight=Math.floor(this.renderHeight/this.basePixelsBetweenProbes),this.firstLayer=this.radianceCascades-1,this.lastLayer=0,this.rayInterval=1,this.baseRayCount=Math.pow(4,1),this.sunAngle=0,this.srgb=2.2,this.enableSun=!1,this.addNoise=!1,this.firstCascadeIndex=0,this.uniforms={u_resolution:[this.width,this.height],u_cascadeExtent:[this.radianceWidth,this.radianceHeight],u_cascadeCount:this.radianceCascades,u_basePixelsBetweenProbes:this.basePixelsBetweenProbes,u_cascadeInterval:this.radianceInterval,u_rayInterval:this.rayInterval,u_baseRayCount:this.baseRayCount,u_sunAngle:this.sunAngle,u_time:performance.now()/1e3,u_srgb:this.srgb,u_enableSun:this.enableSun,u_addNoise:this.addNoise,u_firstCascadeIndex:this.firstCascadeIndex},this.canvas=document.getElementById(e),!this.canvas)throw new Error("Canvas not found");if(this.canvas.width=t,this.canvas.height=i,this.gl=this.canvas.getContext("webgl2",{alpha:!1,powerPreference:"high-performance"}),!this.gl)throw new Error("WebGL 2 not supported");this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.disable(this.gl.DEPTH_TEST),this.gl.depthMask(!1),this.gl.getExtension("OES_texture_float_linear"),this.gl.getExtension("OES_texture_half_float_linear"),this.gl.getExtension("EXT_color_buffer_float");this.gl.getExtension("KHR_parallel_shader_compile");this.initializeShaders(),this.initializeBuffers(),this.initializeTextures(),this.initializeFramebuffers(),this.attributeLocations.df={position:this.gl.getAttribLocation(this.distanceFieldProgram,"a_position")},this.attributeLocations.rc={position:this.gl.getAttribLocation(this.rcProgram,"a_position")},this.setupVertexAttributes()}initializeShaders(){const e=$(),t=q(),i=j(this.gl,this.gl.VERTEX_SHADER,"#version 300 es\n      in vec2 a_position;\n      out vec2 vUv;\n      void main() {\n        vUv = (a_position + 1.0) * 0.5;\n        gl_Position = vec4(a_position, 0.0, 1.0);\n      }\n    "),o=j(this.gl,this.gl.FRAGMENT_SHADER,e),n=j(this.gl,this.gl.FRAGMENT_SHADER,t);this.distanceFieldProgram=K(this.gl,i,o),this.rcProgram=K(this.gl,i,n),this.uniformLocations.df={},this.uniformLocations.rc={},this.attributeLocations.df={},this.attributeLocations.rc={}}initializeBuffers(){const e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);this.positionBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW)}initializeTextures(){this.gl.getExtension("EXT_color_buffer_float")&&(this.distanceFieldTexture=Q(this.gl,this.width,this.height,this.gl.RGBA16F,this.gl.RGBA,this.gl.HALF_FLOAT),this.rcTextures=[Q(this.gl,this.width,this.height,this.gl.RGBA16F,this.gl.RGBA,this.gl.HALF_FLOAT,!0),Q(this.gl,this.width,this.height,this.gl.RGBA16F,this.gl.RGBA,this.gl.HALF_FLOAT,!0)])}initializeFramebuffers(){this.distanceFieldFBO=this.gl.createFramebuffer(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.distanceFieldFBO),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,this.distanceFieldTexture,0),this.rcFBOs=this.rcTextures.map((e=>{const t=this.gl.createFramebuffer();return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,e,0),t}))}render(e){this.renderDistanceField(e),this.renderRadianceCascades(e)}cachedULoc(e,t){if(this.uniformLocations[e][t])return this.uniformLocations[e][t];{const i="df"===e?this.distanceFieldProgram:this.rcProgram,o=this.gl.getUniformLocation(i,t);return this.uniformLocations[e][t]=o,o}}renderDistanceField(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.distanceFieldFBO),this.gl.useProgram(this.distanceFieldProgram);const t=this.cachedULoc("df","u_time");if(this.gl.uniform1f(t,performance.now()/1e3),this.syncUniforms("df",e),!this.dfUniformsSync){const e=this.cachedULoc("df","u_resolution");this.gl.uniform2f(e,this.width,this.height),this.syncUniforms("df",this.uniforms),this.dfUniformsSync=!0}this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}setupVertexAttributes(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);const e=e=>{this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};e(this.attributeLocations.df.position),e(this.attributeLocations.rc.position)}syncUniforms(e,t){for(const[i,o]of Object.entries(t)){const t=this.cachedULoc(e,i);null!==t&&("u_boxes"===i?this.gl.uniformMatrix4fv(t,!1,o):Array.isArray(o)?this.gl[`uniform${o.length}fv`](t,o):"boolean"==typeof o?this.gl.uniform1i(t,o?1:0):this.gl.uniform1f(t,o))}}renderRadianceCascades(e){this.gl.useProgram(this.rcProgram),this.rcUniformsSync||(this.syncUniforms("rc",this.uniforms),this.rcUniformsSync=!0),this.syncUniforms("rc",e);const t=this.cachedULoc("rc","u_time"),i=this.cachedULoc("rc","u_cascadeIndex"),o=this.cachedULoc("rc","u_distanceTexture");this.gl.uniform1i(o,0);const n=this.cachedULoc("rc","u_lastTexture");this.gl.uniform1i(n,1),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,null);let r=0;for(let e=this.firstLayer;e>=this.lastLayer;e--)this.gl.uniform1f(i,e),this.gl.uniform1f(t,performance.now()/1e3),e===this.lastLayer?this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null):this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.rcFBOs[r]),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.distanceFieldTexture),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.rcTextures[r]),this.gl.generateMipmap(this.gl.TEXTURE_2D),r=1-r}}("glcanvas",window.innerWidth,window.innerHeight),fe={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,w:!1,s:!1,a:!1,d:!1,Space:!1};function me(e){fe.Space&&C?(ce=Z,ae=ee):(ce>J&&ce<=Z?ce*=.96:ce=J,ae>Y&&ae<=ee?ae*=.96:ae=Y);let t=0,i=0;const o=1+.3*(m-1);ae*=o,ce*=o;if((fe.ArrowUp||fe.KeyW)&&(i+=1),(fe.ArrowDown||fe.KeyS)&&(i-=1),(fe.ArrowLeft||fe.KeyA)&&(t-=1),(fe.ArrowRight||fe.KeyD)&&(t+=1),0!==t&&0!==i){const e=Math.sqrt(t*t+i*i);t/=e,i/=e}ne=function(e,t){let i=Math.atan2(e,t);return Math.abs(i)>Math.PI/1.1?(i=0,le=Math.min(le+.1,1)):le=Math.max(le-.1,0),i/=1.8,ne+=.1*(i-ne),ne}(t*ae,i*ae),re+=t*ae*(e/16),se+=i*ae*(e/16),re*=1-e/16*(1-.96),se*=1-e/16*(1-.96);const n=Math.sqrt(re*re+se*se);if(n>ce){const e=ce/n;re*=e,se*=e}ie+=re*(e/16),oe+=se*(e/16),ie>window.innerWidth&&(ie=window.innerWidth),ie<0&&(ie=0),oe>window.innerHeight&&(oe=window.innerHeight),oe<0&&(oe=0)}window.addEventListener("keydown",(e=>{var t;fe[e.code]=!0,"Enter"!==e.code||B||"display: none"===(null===(t=document.querySelector("#start"))||void 0===t?void 0:t.getAttribute("style"))||he()})),window.addEventListener("keyup",(e=>{fe[e.code]=!1})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&document.exitFullscreen()}));const ve=window.location.search.includes("debug");let ge=0,Te=performance.now(),xe=performance.now();!function e(t){const i=t-xe;if(xe=t,ve){const e=1e3/(performance.now()-Te);Te=performance.now(),document.getElementById("fps").innerText=e.toFixed(2)}if(me(i),p){if(ie=window.innerWidth/2,oe=window.innerHeight/2,ne=0,re=0,se=0,b(1),te.setNextTempo(),2===m){document.getElementById("help2").setAttribute("style","display: block; animation: fadeOut 6s forwards;")}_(!1)}b(T*Math.pow(.97,i/16)),ge<2&&(D(window.innerWidth,window.innerHeight),ge+=1),z(performance.now(),document.getElementById("timer"),document.getElementById("score"),document.getElementById("lives"),document.getElementById("over"),ie,oe,ne,fe.Space);const o=Math.sqrt(re*re+se*se),n=new Float32Array(208);for(let e=0;e<13;e++){const t=x[e],i=16*e;n[i]=t.x,n[i+1]=t.y,n[i+2]=t.size,n[i+3]=t.value,n[i+4]=t.dx,n[i+5]=t.dy,n[i+6]=t.enemy,n[i+7]=t.radiance,n[i+8]=t.r,n[i+9]=t.g,n[i+10]=t.b}Ae.render({u_super:y,u_superAvailable:C,u_gameStarted:B?1:0,u_Mouse:[ie,oe,fe.Space?1:0,0],u_MouseMove:[ne,o,T,le],u_boxes:n}),requestAnimationFrame(e)}(performance.now())})()})();