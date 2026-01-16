// import { useState } from "react";
// import { Button, Empty, Input, List, Space, Typography } from "antd";

// const { Title } = Typography;

// function App() {

//   const [text, setText] = useState("");

//   const [todos, setTodos] = useState([
//     {id:1, text:"学习tool"},
//     {id:2, text:"学习message"},
//   ]);

//   //写成函数的目的是保证每次调用时值不同
//   const createId = () => Date.now() + Math.floor(Math.random()*1000);

//   const addTodo = () => {
//     const t = text.trim();
//     if(!t) return;

//     const newTodo = {id:createId(), text: t};
//     setTodos(prew => [newTodo, ...prew]);
//     setText("");
//   }

//   //删除某一项
//   const removeTodo = (id) => {
//     setTodos((prew)=>prew.filter((x)=>x.id!=id));//filter为筛选的意思，它等同于创建一个新数组，将筛选的数组放入新数组中，等效于删除
//   }

//   const canAdd = text.trim().length>0 

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
//           onPressEnter={() => canAdd && addTodo()}
//           allowClear
//         />
//         <Button type="primary" onClick={addTodo} disabled={!canAdd}>
//           添加
//         </Button>
//       </Space.Compact>

//       {todos.length === 0 ? (
//         <Empty description="没有待办事项"/>
//       ) : (
//         <List
//             dataSource={todos}
//             renderItem={(todo)=>(
//               <List.Item
//                 actions={[
//                   <Button danger type="link" key="del" onClick={() => removeTodo(todo.id)}>
//                     删除
//                   </Button>
//                 ]}
//               >
//                 {todo.text}
//               </List.Item>
//             )}
//         />
//       )}

//       <div style={{marginTop: 12, opacity: 0.7}}>
//         长度:{todos.length}
//       </div>
//     </div>
//   )
// }

// export default App
