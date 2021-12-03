import style from './style.module.css';

function Login() {
    return (
        <>
            <form className={style.form}>
                
                <h2 className={style.name}>Login</h2>

                
                <input type='text' placeholder="Enter your email" className={style.input} />
                
                <input type='password' placeholder="Password" className={style.input} />
                

                <button className={style.btnLogin}>Confirm</button>
                <button className={style.brnSignin}>Sign in</button>

            </form>
        </>
    )
}

export default Login;