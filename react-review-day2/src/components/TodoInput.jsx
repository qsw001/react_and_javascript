import {Space, Input, Button} from 'antd'

function TodoInput({canAdd, addTodo, text, setText }) {
    return (
      <Space.Compact style={{width: "100%"}}>
        <Input
          value={text}
          onChange={e=>setText(e.target.value)}
          placeholder="输入待办事项"
          onPressEnter={() => canAdd && addTodo()}
          allowClear
        />
        <Button type="primary" onClick={addTodo} disabled={!canAdd}>
          添加
        </Button>
      </Space.Compact>
    );
}

export default TodoInput;