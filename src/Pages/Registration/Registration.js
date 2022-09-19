import { userRef, useState, useEffect} from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;
const PWD_REGEX = /^(?=, *[a-z])(?=,*[A-Z])(?=,*[0-9])(?=,*[!@#$%]).(8, 24)$/;

const Register = () => {
	const userRef = userRef ();
	const errRef = userRef ();

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userPocus, setUserFocus] = userState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

    const [matchpwd, setmatchpwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user])

useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		console.log(result);
		console.log(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd
	}, [pwd, matchPwd])

useEffect(() => {
	setErrMsg('');
}, [user, pwd, matchPwd]) 

	return ( 
		<section>
          <p ref={errRef} className={errMsg ? "errmsg":
           "offscreen"} aria-live= "assertive">{errMsg}</p>
           <h1>Register</h1>
           <form>
              <label htmlFor="username">
              Username:
              </label>
               <input
                  type="text"
                  id="username"
                  ref=(userRef)
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onblur={() =>vsetUserFocus(false)
                   />
                   <p id="uidnote" className={setUserFocus && user && 
                   	!validName ? "instructions" : "offscreen"}>
                   	4 to 24 characters.<br />
                   	must begin with a letter.<br />
                   	Letters, numbers, underscores, hyphens allowed.
                   </p>


           </form>
		</section>
		)
}
 
 export default Register