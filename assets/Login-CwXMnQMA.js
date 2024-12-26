import{u as w,r as y,j as e,c as l,B as L,t as m}from"./index-BLc7NCJl.js";import{L as u,I as x,a as S,A as E}from"./axios-CK_wqAIS.js";import{c as I,a as g,u as k,o as F,i as q,G as A}from"./login-CjBlPsG0.js";function P({className:f,...h}){const r=w(),{loginApi:p}=E(),[t,i]=y.useState(!1),j=I({email:g().email("Invalid email address").required("Email is required"),password:g().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:o,handleSubmit:v,formState:{errors:c}}=k({resolver:F(j),defaultValues:{email:"",password:""}}),N=a=>{console.log("Form submitted:",a),b(a)},b=a=>{i(!0),S.post(p,a).then(s=>{var n,d;console.log("login res",s),localStorage.setItem("token",(n=s==null?void 0:s.data)==null?void 0:n.token),localStorage.setItem("email",(d=s==null?void 0:s.data)==null?void 0:d.email),m.success("Login success"),r("/dashboard")}).catch(()=>m.error("Please try again later.")).finally(()=>i(!1))};return e.jsxs("form",{className:l("flex flex-col gap-6",f),onSubmit:v(N),...h,children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Login to your account"}),e.jsx("p",{className:"text-balance text-sm text-muted-foreground",children:"Enter your email below to login to your account"})]}),e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{htmlFor:"email",children:"Email"}),e.jsx(x,{id:"email",type:"email",placeholder:"Enter email",className:l(c.email?"border-red-500 placeholder:text-red-500 focus-visible:ring-0":"","transition-colors"),...o("email")})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(u,{htmlFor:"password",children:"Password"})}),e.jsx(x,{id:"password",type:"password",placeholder:"Enter password",className:l(c.password?"border-red-500 placeholder:text-red-500 focus-visible:ring-0":"","transition-colors"),...o("password")})]}),e.jsx(L,{disabled:t,type:"submit",className:"w-full",children:t?"Logging in":"Login"})]}),e.jsxs("div",{className:"text-center text-sm",children:["Don't have an account?"," ",e.jsx("span",{onClick:()=>r("/register"),className:"underline underline-offset-4 cursor-pointer",children:"Register"})]})]})}function V(){return e.jsxs("div",{className:"grid min-h-svh lg:grid-cols-2",children:[e.jsx("div",{className:"relative hidden bg-muted lg:block",children:e.jsx("img",{src:q,alt:"Image",className:"absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"})}),e.jsxs("div",{className:"flex flex-col gap-4 p-6 md:p-10",children:[e.jsx("div",{className:"flex justify-center gap-2 md:justify-start",children:e.jsxs("a",{href:"#",className:"flex items-center gap-2 font-medium",children:[e.jsx("div",{className:"flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground",children:e.jsx(A,{className:"size-4"})}),"Acme Inc."]})}),e.jsx("div",{className:"flex flex-1 items-center justify-center",children:e.jsx("div",{className:"w-full max-w-xs",children:e.jsx(P,{})})})]})]})}export{V as default};
