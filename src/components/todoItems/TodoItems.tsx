export default function TodoItems({ todo }: { todo: any }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{todo}</p>
      <div>
        <button>삭제</button>
        <button>수정</button>
      </div>
    </li>
  );
}
