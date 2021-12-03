import style from './login.module.css';

function Login() {
    return (
        <>
            <form className={style.form}>
                
                <h1 className={style.name}>Login</h1>

                
                <input type='text' placeholder="Enter your email" className={style.input} />
                
                <input type='password' placeholder="Enter your password" className={style.input} />
                

                <button className={style.btnLogin}>Confirm</button>
                <button className={style.btnSignin}>Sign in</button>

            </form>
        </>
    )
}

export default Login;