import { useRef, userState, useEffect} from 'react';

const login = () => {
	const userRef = userRef():
	const userRef = userRef():

	const [user, setUser] = userState('');
	const [pwd, setPwd] = userState('');
	const [errMsg, setErrMsg] = userState('');
	const [success, setSuccess] = userState('');

	userEffect(() => {
		useRef.current.focus();
	}, [])

	userEffect(() => {
		setErrMsg('');
	}, [user, pwd])

	const handlesubmit = async (e) => {
		e.preventDefault();
        console.log(user,pwd);
		setUser('');
		setPwd('');
		setSuccess(true);
	}

	return (
		<>
		  success ? (
		  	<section>
		  	  <h1> You are Logged in </h1>
		  	 <br/>
		  	 <p>
		  	    <a href="#">Go to Home<a/>
		  	 </p>
		  	 </section>
		  	) : (
		<section>
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1> Sign In</h1>
            <form onSubmit=(handlesubmit)> 
            <label htmlFor="username">Username:</label>
            <input 
                type="text"
                id="username"
                ref={useRef}
                autoComplete="off"
                onChange={(e)=>setuser(e.target.value)}
                value={user}
                required
                /> 

            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id="password"
                onChange={(e)=>setpwd(e.target.value)}
                value={user}
                required
                /> 

                <button>Sign In</button> 
           </form>
           <p> 
               need an Account? <br/>
               <span className="line">
           {/* put router link here*/}
           <a href="#">sign Up</a>
		</section>
		)}
		</>
    )
}

export default login