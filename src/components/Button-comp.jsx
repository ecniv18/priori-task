export default function ButtonComp({ className, onClick, children }) {
  return (
    <button onClick={onClick} className={className + " btn"}>
      {children}
    </button>
  );
}
