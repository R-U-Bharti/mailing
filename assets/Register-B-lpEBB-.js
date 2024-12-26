import{u as w,r as v,j as e,c as r,B as N,t as m}from"./index-BLc7NCJl.js";import{c as b,a as l,b as y,u as E,o as S,i as q,G as F}from"./login-CjBlPsG0.js";import{L as t,I as c,a as I,A as L}from"./axios-CK_wqAIS.js";function P({className:x,...u}){const d=w(),{registerApi:p}=L(),[o,n]=v.useState(!1),f=b({email:l().email("Invalid email address").required("Email is required"),password:l().min(6,"Password must be at least 6 characters").required("Password is required"),cpassword:l().required("Confirm passwor required").oneOf([y("password"),""],"Password not match")}),{register:a,handleSubmit:h,formState:{errors:i}}=E({resolver:S(f),defaultValues:{email:"",password:"",cpassword:""}}),g=s=>{console.log("Form submitted:",s),j(s)},j=s=>{n(!0),I.post(p,s).then(()=>{m.success("Registered successfully"),d("/")}).catch(()=>m.error("Please try again later.")).finally(()=>n(!1))};return e.jsxs("form",{className:r("flex flex-col gap-6",x),onSubmit:h(g),...u,children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Register"}),e.jsx("p",{className:"text-balance text-sm text-muted-foreground",children:"Enter your email below to register yourself"})]}),e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(t,{htmlFor:"email",children:"Email"}),e.jsx(c,{id:"email",type:"email",placeholder:"Enter email",className:r(i.email?"border-red-500 placeholder:text-red-500 focus-visible:ring-0":"","transition-colors"),...a("email")})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(t,{htmlFor:"password",children:"Password"})}),e.jsx(c,{id:"password",type:"password",placeholder:"Enter password",className:r(i.password?"border-red-500 placeholder:text-red-500 focus-visible:ring-0":"","transition-colors"),...a("password")})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(t,{htmlFor:"password",children:"Confirm Password"})}),e.jsx(c,{id:"cpassword",type:"password",placeholder:"Enter confirm password",className:r(i.cpassword?"border-red-500 placeholder:text-red-500 focus-visible:ring-0":"","transition-colors"),...a("cpassword")})]}),e.jsx(N,{disabled:o,type:"submit",className:"w-full",children:o?"Registering":"Register"})]}),e.jsxs("div",{className:"text-center text-sm",children:["I have an account?"," ",e.jsx("span",{onClick:()=>d("/"),className:"underline underline-offset-4 cursor-pointer",children:"Login"})]})]})}function C(){return e.jsxs("div",{className:"grid min-h-svh lg:grid-cols-2",children:[e.jsx("div",{className:"relative hidden bg-muted lg:block",children:e.jsx("img",{src:q,alt:"Image",className:"absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"})}),e.jsxs("div",{className:"flex flex-col gap-4 p-6 md:p-10",children:[e.jsx("div",{className:"flex justify-center gap-2 md:justify-start",children:e.jsxs("a",{href:"#",className:"flex items-center gap-2 font-medium",children:[e.jsx("div",{className:"flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground",children:e.jsx(F,{className:"size-4"})}),"Acme Inc."]})}),e.jsx("div",{className:"flex flex-1 items-center justify-center",children:e.jsx("div",{className:"w-full max-w-xs",children:e.jsx(P,{})})})]})]})}export{C as default};
