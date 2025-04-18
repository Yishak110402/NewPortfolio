import "./Copyright.css";
export default function Copyright() {
  const currentYear = new Date(Date.now()).getFullYear();
  console.log(currentYear);

  return (
    <div className="copyright">
      <p>Copyright &copy; Yishak Hailu {currentYear} All Rights Reserved</p>
    </div>
  );
}
