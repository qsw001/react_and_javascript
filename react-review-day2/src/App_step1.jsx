// import { useState } from "react";
// import { Button, Input, Space, Typography } from "antd";

// const { Title } = Typography;

// function App1() {

//   const [text, setText] = useState("")

//   return (
//     <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
//       <Title level={3} style={{marginTop: 0}}>
//         Todo mini
//       </Title>
//       <Space.Compact style={{width: "100%"}}>
//         <Input
//           value={text}
//           onChange={e=>setText(e.target.value)}
//           placeholder="输入待办事项"
//           allowClear
//         />
//         <Button type="primary" disabled={!text.trim()}>
//           添加
//         </Button>
//       </Space.Compact>

//       <div style={{marginTop: 12, opacity: 0.7}}>
//         当前输入:{text||"(空)"}
//       </div>
//     </div>
//   )
// }

// export default App1
