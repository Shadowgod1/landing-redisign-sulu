import{a as e,i as t,n,o as r,r as i,t as a}from"./index-B96eWz77.js";import{C as o,D as s,E as c,O as l,S as u,a as d,b as f,d as p,m,n as h,o as g,p as _,s as v,u as y,v as b,w as x,x as S}from"./three.module-F47qzX4C.js";var C=r(e(),1),w=t(),T=`
uniform float uTime; uniform float uAmp;
varying vec3 vNormal; varying vec3 vView; varying float vNoise;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
void main(){
  float n = snoise(normal*1.4 + vec3(uTime*0.18));
  n += 0.5*snoise(normal*3.1 - vec3(uTime*0.11));
  vNoise = n;
  vec3 pos = position + normal * n * uAmp;
  vec4 mv = modelViewMatrix * vec4(pos,1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,E=`
uniform vec3 uBody; uniform vec3 uDeep; uniform vec3 uRim; uniform vec3 uGold;
varying vec3 vNormal; varying vec3 vView; varying float vNoise;
void main(){
  float fres = pow(1.0 - max(dot(normalize(vNormal), vView), 0.0), 2.4);
  vec3 col = mix(uDeep, uBody, smoothstep(-0.6, 0.8, vNoise));
  col = mix(col, uGold, smoothstep(0.55, 1.1, vNoise) * 0.55);
  col += uRim * fres * 0.9;
  gl_FragColor = vec4(col, 0.92 + fres*0.08);
}`;function D({className:e}){let t=C.useRef(null),{style:r}=i(),D=a(),O=C.useRef(null);return C.useEffect(()=>{let e=t.current;if(!e)return;let r;try{r=new h({antialias:!0,alpha:!0,powerPreference:`low-power`})}catch{return}r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.outputColorSpace=u,e.appendChild(r.domElement),r.domElement.setAttribute(`aria-hidden`,`true`);let i=new o,a=new b(38,1,.1,50);a.position.set(0,0,7.2);let C=new y;i.add(C);let w=new p(1.35,48),k=new x({vertexShader:T,fragmentShader:E,transparent:!0,uniforms:{uTime:{value:0},uAmp:{value:.22},uBody:{value:new v},uDeep:{value:new v},uRim:{value:new v},uGold:{value:new v}}}),A=new _(w,k);C.add(A);let j=new l(2.25,.008,6,160),M=new m({transparent:!0,opacity:.55}),N=new c(.075,16,16),P=new m,F=[];[[1.15,.2,0],[.35,-.9,.4],[-.6,.7,-.3]].forEach(([e,t,n],r)=>{let i=new y;i.rotation.set(e,t,n);let a=2.25-r*.22,o=new _(j,M);o.scale.setScalar(a/2.25),i.add(o);let s=[];for(let e=0;e<3;e++){let t=new _(N,P);t.userData.phase=e/3*Math.PI*2+r,i.add(t),s.push(t)}C.add(i),F.push({pivot:i,nodes:s,speed:.35+r*.12,r:a})});let I=new Float32Array(1560);for(let e=0;e<520;e++){let t=2.6+Math.random()*3.2,n=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1);I[e*3]=t*Math.sin(r)*Math.cos(n),I[e*3+1]=t*Math.sin(r)*Math.sin(n)*.7,I[e*3+2]=t*Math.cos(r)*.6}let L=new g;L.setAttribute(`position`,new d(I,3));let R=new S({size:.035,transparent:!0,opacity:.75,depthWrite:!1}),z=new f(L,R);i.add(z);let B=e=>{let t=n[e];k.uniforms.uBody.value.set(t.body),k.uniforms.uDeep.value.set(t.deep),k.uniforms.uRim.value.set(t.rim),k.uniforms.uGold.value.set(t.gold),M.color.set(t.gold),P.color.set(t.gold),R.color.set(t.dust)};B(document.documentElement.dataset.style||`classic`);let V=()=>{let t=e.clientWidth||1,n=e.clientHeight||1;r.setSize(t,n,!1),r.domElement.style.width=`100%`,r.domElement.style.height=`100%`,a.aspect=t/n,a.position.z=t/n<.9?8.6:7.2,a.updateProjectionMatrix()},H=new ResizeObserver(V);H.observe(e),V();let U={x:0,y:0},W=e=>{U.x=(e.clientX/window.innerWidth-.5)*.6,U.y=(e.clientY/window.innerHeight-.5)*.4};window.addEventListener(`pointermove`,W,{passive:!0});let G=new s;G.connect(document);let K=!0,q=0,J=()=>{G.update();let e=G.getElapsed(),t=Math.min(window.scrollY/window.innerHeight,1.2);k.uniforms.uTime.value=e,k.uniforms.uAmp.value=.2+Math.sin(e*.8)*.04,A.rotation.y=e*.12,C.rotation.y+=(U.x+t*.9-C.rotation.y)*.05,C.rotation.x+=(U.y+t*.25-C.rotation.x)*.05,C.position.y=t*.8,F.forEach(t=>{t.pivot.rotation.z+=.0015*t.speed*4,t.nodes.forEach(n=>{let r=e*t.speed+n.userData.phase;n.position.set(Math.cos(r)*t.r,Math.sin(r)*t.r,0)})}),z.rotation.y=e*.02,z.rotation.x=Math.sin(e*.1)*.05,r.render(i,a)},Y=()=>{q=requestAnimationFrame(Y),K&&!document.hidden&&J()};O.current={setColors:e=>{B(e),D&&J()}},D?J():Y();let X=new IntersectionObserver(([e])=>K=e.isIntersecting,{threshold:0});return X.observe(e),()=>{cancelAnimationFrame(q),G.dispose(),X.disconnect(),H.disconnect(),window.removeEventListener(`pointermove`,W),[w,j,N,L].forEach(e=>e.dispose()),[k,M,P,R].forEach(e=>e.dispose()),r.dispose(),r.domElement.remove(),O.current=null}},[D]),C.useEffect(()=>{O.current?.setColors(r)},[r]),(0,w.jsx)(`div`,{ref:t,className:e})}export{D as HeroScene};