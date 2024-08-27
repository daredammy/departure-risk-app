(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2804:function(e,t,i){Promise.resolve().then(i.bind(i,327))},327:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var s=i(8646),r=i(7437),a=i(2265),n=i(7056),o=i(270),d=i(511),I=i(7318),l=i(1326),T=i(6548),c=i(2786),_=i(1651),E=i(2184),S=i(192),h=i(1096),A=i(824),u=i(385),R=i(8784),O=i(3098),g=i(8493),m=JSON.parse('[{"user_id":"emp12345","secret_risk":{"low":[],"medium":[{"secret_id":"api_key_001","name":"Production API Key","description":"Used for authenticating requests to the payment gateway API in production environment","risk_factors":{"PERSISTENT_ACCESS_RISK":"MEDIUM"},"justifications":{"PERSISTENT_ACCESS_RISK":"PERSISTENT_ACCESS_RISK: MEDIUM\\nThis secret was last accessed 7 days ago and is due for rotation in 19 days. This represents a medium risk due to either recent access or a somewhat distant rotation date."},"mitigation_strategies":{"PERSISTENT_ACCESS_RISK":"Rotate key within the next 30 days"},"additional_context":{"external_mitigation":"PRESENT","heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_ACCESS":"HIGH","SYSTEM_COMPROMISE":"MEDIUM","COMPLIANCE_VIOLATION":"HIGH","INTELLECTUAL_PROPERTY_THEFT":"LOW","SERVICE_CRITICALITY":"LOW","DATA_SENSITIVITY":"LOW"}}}],"high":[{"secret_id":"db_cred_002","name":"Database Credentials","description":"Grants read/write access to the main customer database","risk_factors":{"PERSISTENT_ACCESS_RISK":"HIGH"},"justifications":{"PERSISTENT_ACCESS_RISK":"PERSISTENT_ACCESS_RISK: HIGH\\nThis secret was last accessed 4 days ago and is not scheduled for rotation. This represents a high risk due to recent access and distant rotation date."},"mitigation_strategies":{"PERSISTENT_ACCESS_RISK":"Rotate key within the next 7 days"},"additional_context":{"external_mitigation":"PARTIAL","heightened_risks":{"DATA_EXFILTRATION":"HIGH","UNAUTHORIZED_ACCESS":"HIGH","SYSTEM_COMPROMISE":"MEDIUM","COMPLIANCE_VIOLATION":"HIGH","INTELLECTUAL_PROPERTY_THEFT":"MEDIUM","SERVICE_CRITICALITY":"LOW","DATA_SENSITIVITY":"LOW"}}}]},"file_transfer_risk":{"low":[],"medium":[],"high":[{"activity_id":"file_001","name":"Q4 Financial Report.xlsx","description":"Contains sensitive financial projections and unreleased quarterly results","risk_factors":{"DATA_EXFILTRATION":"HIGH"},"justifications":{"DATA_EXFILTRATION":"DATA_EXFILTRATION: HIGH\\nThis file transfer occurred 5 days ago. The file size is 2.5 MB. It was transferred from Google Drive to Personal Laptop. The sharing status is \'Internal - Finance Team\'.\\nThis represents a high risk due to recent activity, large file size, or sensitive destination/sharing status."},"mitigation_strategies":{"DATA_EXFILTRATION":"Contact legal department and contact employee to ask for justification"},"additional_context":{"heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_SHARING":"LOW","SENSITIVE_INFORMATION_EXPOSURE":"MEDIUM","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_LOSS":"MEDIUM","ACTIVITY_TYPE":"LOW","FILE_SIZE":"LOW"}}},{"activity_id":"transfer_001","name":"Large File Transfer","description":"Bulk transfer of multiple files to external storage","risk_factors":{"DATA_EXFILTRATION":"HIGH"},"justifications":{"DATA_EXFILTRATION":"DATA_EXFILTRATION: HIGH\\nThis file transfer occurred 6 days ago. The file size is 500 MB. It was transferred from Company File Server to Personal Cloud Storage. The sharing status is \'External Transfer\'.\\nThis represents a high risk due to recent activity, large file size, or sensitive destination/sharing status."},"mitigation_strategies":{"DATA_EXFILTRATION":"Contact legal department and contact employee to ask for justification"},"additional_context":{"heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_SHARING":"MEDIUM","SENSITIVE_INFORMATION_EXPOSURE":"HIGH","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_LOSS":"MEDIUM","ACTIVITY_TYPE":"LOW","FILE_SIZE":"LOW"}}}]},"overall_risk_level":"HIGH"},{"user_id":"emp67890","secret_risk":{"low":[],"medium":[],"high":[{"secret_id":"ssh_key_003","name":"Server SSH Key","description":"Provides access to production servers for maintenance and deployment","risk_factors":{"PERSISTENT_ACCESS_RISK":"HIGH"},"justifications":{"PERSISTENT_ACCESS_RISK":"PERSISTENT_ACCESS_RISK: HIGH\\nThis secret was last accessed 12 days ago and is due for rotation in 127 days. This represents a high risk due to recent access and distant rotation date.\\nRisk level was adjusted due to:\\n- The service \'Production Servers\' is considered critical.\\n- The data accessed is considered sensitive.\\n- There are some external mitigation measures in place.\\n- There are heightened risks in the following areas: UNAUTHORIZED_ACCESS, SYSTEM_COMPROMISE."},"mitigation_strategies":{"PERSISTENT_ACCESS_RISK":"Rotate key within the next 7 days"},"additional_context":{"external_mitigation":"PARTIAL","heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_ACCESS":"HIGH","SYSTEM_COMPROMISE":"HIGH","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_THEFT":"LOW","SERVICE_CRITICALITY":"LOW","DATA_SENSITIVITY":"LOW"}}}]},"file_transfer_risk":{"low":[],"medium":[],"high":[{"activity_id":"file_002","name":"Client Proposal Draft.docx","description":"Draft proposal for a major client, including pricing strategy","risk_factors":{"DATA_EXFILTRATION":"HIGH"},"justifications":{"DATA_EXFILTRATION":"DATA_EXFILTRATION: HIGH\\nThis file transfer occurred 4 days ago. The file size is 1.8 MB. It was transferred from OneDrive to personal_email@example.com. The sharing status is \'Confidential\'.\\nThis represents a high risk due to recent activity, large file size, or sensitive destination/sharing status."},"mitigation_strategies":{"DATA_EXFILTRATION":"Contact legal department and contact employee to ask for justification"},"additional_context":{"heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_SHARING":"MEDIUM","SENSITIVE_INFORMATION_EXPOSURE":"HIGH","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_LOSS":"HIGH","ACTIVITY_TYPE":"LOW","FILE_SIZE":"LOW"}}}]},"overall_risk_level":"HIGH"},{"user_id":"emp24680","secret_risk":{"low":[],"medium":[],"high":[{"secret_id":"oauth_token_004","name":"OAuth Access Token","description":"Used for accessing internal analytics dashboard and generating reports","risk_factors":{"PERSISTENT_ACCESS_RISK":"HIGH"},"justifications":{"PERSISTENT_ACCESS_RISK":"PERSISTENT_ACCESS_RISK: HIGH\\nThis secret was last accessed 5 days ago and is not scheduled for rotation. This represents a high risk due to recent access and distant rotation date."},"mitigation_strategies":{"PERSISTENT_ACCESS_RISK":"Rotate key within the next 7 days"},"additional_context":{"external_mitigation":"PARTIAL","heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_ACCESS":"HIGH","SYSTEM_COMPROMISE":"MEDIUM","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_THEFT":"LOW","SERVICE_CRITICALITY":"LOW","DATA_SENSITIVITY":"LOW"}}},{"secret_id":"aws_key_005","name":"AWS Root Account Key","description":"Provides full access to all AWS services and resources","risk_factors":{"PERSISTENT_ACCESS_RISK":"HIGH"},"justifications":{"PERSISTENT_ACCESS_RISK":"PERSISTENT_ACCESS_RISK: HIGH\\nThis secret was last accessed 9 days ago and is due for rotation in 126 days. This represents a high risk due to recent access and distant rotation date.\\nRisk level was adjusted due to:\\n- The service \'AWS Cloud Infrastructure\' is considered critical.\\n- The data accessed is considered sensitive.\\n- There are heightened risks in the following areas: DATA_EXFILTRATION, UNAUTHORIZED_ACCESS, SYSTEM_COMPROMISE, COMPLIANCE_VIOLATION, INTELLECTUAL_PROPERTY_THEFT."},"mitigation_strategies":{"PERSISTENT_ACCESS_RISK":"Rotate key within the next 7 days"},"additional_context":{"external_mitigation":"ABSENT","heightened_risks":{"DATA_EXFILTRATION":"HIGH","UNAUTHORIZED_ACCESS":"HIGH","SYSTEM_COMPROMISE":"HIGH","COMPLIANCE_VIOLATION":"HIGH","INTELLECTUAL_PROPERTY_THEFT":"HIGH","SERVICE_CRITICALITY":"LOW","DATA_SENSITIVITY":"LOW"}}}]},"file_transfer_risk":{"low":[],"medium":[],"high":[{"activity_id":"export_001","name":"Customer Database Export","description":"Full export of customer database including personal information","risk_factors":{"DATA_EXFILTRATION":"HIGH"},"justifications":{"DATA_EXFILTRATION":"DATA_EXFILTRATION: HIGH\\nThis file transfer occurred 3 days ago. The file size is 150 MB. It was transferred from CRM System to Local Drive. The sharing status is \'Highly Restricted\'.\\nThis represents a high risk due to recent activity, large file size, or sensitive destination/sharing status.\\nRisk level was adjusted due to:\\n- The transferred data is considered sensitive.\\n- The activity type \'Data Export\' is considered risky.\\n- There are heightened risks in the following areas: SENSITIVE_INFORMATION_EXPOSURE."},"mitigation_strategies":{"DATA_EXFILTRATION":"Contact legal department and contact employee to ask for justification"},"additional_context":{"heightened_risks":{"DATA_EXFILTRATION":"MEDIUM","UNAUTHORIZED_SHARING":"LOW","SENSITIVE_INFORMATION_EXPOSURE":"HIGH","COMPLIANCE_VIOLATION":"MEDIUM","INTELLECTUAL_PROPERTY_LOSS":"LOW","ACTIVITY_TYPE":"LOW","FILE_SIZE":"LOW"}}}]},"overall_risk_level":"HIGH"}]');function C(){let e=(0,s._)(["\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);\n  }\n"]);return C=function(){return e},e}function f(){let e=(0,s._)(["\n  animation: "," 2s infinite;\n"]);return f=function(){return e},e}let L=(0,O.F4)(C()),N=(0,g.Z)(n.Z)(f(),L);function p(){let[e,t]=(0,a.useState)(""),[i,s]=(0,a.useState)(null),[O,g]=(0,a.useState)(!1),[C,f]=(0,a.useState)(""),[L,p]=(0,a.useState)(null),[H,x]=(0,a.useState)(new Set),[M,y]=(0,a.useState)(!0);(0,a.useEffect)(()=>{let e=setTimeout(()=>{y(!1)},5e3);return()=>clearTimeout(e)},[]);let k=e=>{let i=e.target.value;t(i),s(m.find(e=>e.user_id===i)),y(!1)},P=(e,t,i)=>{f(i),p(t),g(!0)},D=e=>{x(t=>{let i=new Set(t);return i.delete(e),i})},v=()=>{g(!1),L&&x(e=>new Set(e).add(L)),p(null)},j=e=>{switch(e){case"HIGH":return"red";case"MEDIUM":return"orange";case"LOW":return"green";default:return"inherit"}},U=e=>{let{item:t,itemType:i}=e,s=Object.values(t.risk_factors)[0],a=j(s),n=t.secret_id||t.activity_id,c=H.has(n);return(0,r.jsxs)(o.Z,{sx:{mb:4,p:3,boxShadow:3},children:[(0,r.jsxs)(d.Z,{variant:"h5",gutterBottom:!0,color:"primary",children:[t.name," ",(0,r.jsxs)("span",{style:{color:a},children:["(",s,")"]})]}),(0,r.jsx)(I.Z,{sx:{my:2}}),(0,r.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,fontWeight:"bold",children:"Justification:"}),(0,r.jsx)(d.Z,{variant:"body1",sx:{whiteSpace:"pre-line",mb:2},children:Object.values(t.justifications).join("\n")}),(0,r.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,fontWeight:"bold",children:"Description:"}),(0,r.jsx)(d.Z,{variant:"body1",paragraph:!0,children:t.description}),(0,r.jsx)(d.Z,{variant:"subtitle1",gutterBottom:!0,fontWeight:"bold",children:"Risk Factor:"}),(0,r.jsx)(d.Z,{variant:"body1",paragraph:!0,children:Object.keys(t.risk_factors).map(e=>e.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")).join(", ")}),(0,r.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:2},children:c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{variant:"body1",color:"success.main",fontWeight:"bold",children:"Mitigation in progress"}),(0,r.jsx)(d.Z,{variant:"body2",sx:{ml:1,textDecoration:"underline",cursor:"pointer",color:"primary.main"},onClick:()=>D(n),children:"Undo"})]}):(0,r.jsx)(T.Z,{variant:"contained",color:"secondary",size:"large",onClick:()=>P(i,n,Object.values(t.mitigation_strategies)[0]),children:"Mitigate"})})]})},b=e=>{let t={HIGH:0,MEDIUM:1,LOW:2};return e.sort((e,i)=>{let s=Object.values(e.risk_factors)[0],r=Object.values(i.risk_factors)[0];return t[s]-t[r]})};return(0,r.jsxs)(c.Z,{maxWidth:"md",sx:{py:6},children:[(0,r.jsx)(d.Z,{variant:"h3",component:"h1",gutterBottom:!0,align:"center",color:"primary",children:"Departure Risk Assessment"}),M?(0,r.jsxs)(N,{value:e,onChange:k,displayEmpty:!0,fullWidth:!0,sx:{mb:6},children:[(0,r.jsx)(_.Z,{value:"",disabled:!0,children:"Select an employee"}),m.map(e=>(0,r.jsxs)(_.Z,{value:e.user_id,children:["Employee ",e.user_id]},e.user_id))]}):(0,r.jsxs)(n.Z,{value:e,onChange:k,displayEmpty:!0,fullWidth:!0,sx:{mb:6},children:[(0,r.jsx)(_.Z,{value:"",disabled:!0,children:"Select an employee"}),m.map(e=>(0,r.jsxs)(_.Z,{value:e.user_id,children:["Employee ",e.user_id]},e.user_id))]}),i&&(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(d.Z,{variant:"h5",gutterBottom:!0,align:"left",sx:{mb:4},children:["Overall Risk Level: ",(0,r.jsx)("span",{style:{color:j(i.overall_risk_level)},children:i.overall_risk_level})]}),(0,r.jsx)(d.Z,{variant:"h5",gutterBottom:!0,sx:{mt:6,mb:3,fontWeight:"bold",borderTop:"2px solid",borderBottom:"2px solid"},align:"center",color:"primary",children:"Secret Access Risk"}),(0,r.jsx)(E.Z,{children:b([...i.secret_risk.high,...i.secret_risk.medium,...i.secret_risk.low]).map(e=>(0,r.jsx)(S.ZP,{sx:{display:"block",px:0},children:(0,r.jsx)(U,{item:e,itemType:"secret"})},e.secret_id))}),(0,r.jsx)(d.Z,{variant:"h5",gutterBottom:!0,sx:{mt:6,mb:3,fontWeight:"bold",borderTop:"2px solid",borderBottom:"2px solid"},align:"center",color:"primary",children:"File Transfers Risk"}),(0,r.jsx)(E.Z,{children:b([...i.file_transfer_risk.high,...i.file_transfer_risk.medium,...i.file_transfer_risk.low]).map(e=>(0,r.jsx)(S.ZP,{sx:{display:"block",px:0},children:(0,r.jsx)(U,{item:e,itemType:"file_transfer"})},e.activity_id))})]}),(0,r.jsxs)(h.Z,{open:O,onClose:v,"aria-labelledby":"mitigation-dialog-title","aria-describedby":"mitigation-dialog-description",children:[(0,r.jsx)(A.Z,{id:"mitigation-dialog-title",children:"Mitigation Strategy"}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(d.Z,{id:"mitigation-dialog-description",children:C})}),(0,r.jsx)(R.Z,{children:(0,r.jsx)(T.Z,{onClick:v,color:"primary",autoFocus:!0,children:"Acknowledge"})})]})]})}}},function(e){e.O(0,[742,971,23,744],function(){return e(e.s=2804)}),_N_E=e.O()}]);