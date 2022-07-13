import "./z2 2home.css";
import Form from "./input";

const Login = ({handleSigned}) => {
  return (
    <div className="homez2">
      <div className="firstz2">
        <div className="rectangle">
          <div className="headz2">
            <p className="headerz2">Вход</p>
            <Form handleSigned={handleSigned}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
